(() => {
"use strict";
const story=window.CHAPTER_1;
const $=s=>document.querySelector(s);
const ui={
 title:$("#titleScreen"),game:$("#gameScreen"),newGame:$("#newGameButton"),continueBtn:$("#continueButton"),loadTitle:$("#loadFromTitleButton"),titleArchive:$("#titleArchiveButton"),
 chapter:$("#chapterHeader"),choices:$("#choiceArea"),speakerHeader:$("#speakerHeader"),speaker:$("#speakerName"),messageWindow:$("#messageWindow"),message:$("#messageText"),advance:$("#advanceIndicator"),
 affection:$("#affectionValue"),suAffinity:$("#suAffinityValue"),suAffinityLabel:$("#suAffinityLabel"),investigation:$("#investigationValue"),belief:$("#beliefValue"),
 sectionOverlay:$("#sectionOverlay"),sectionTitle:$("#sectionTitle"),endingOverlay:$("#endingOverlay"),endingId:$("#endingId"),endingTitle:$("#endingTitle"),endingReturn:$("#endingReturnButton"),
 resultOverlay:$("#chapterResultOverlay"),resultTitle:$("#chapterResultTitle"),resultContent:$("#resultContent"),resultContinue:$("#resultContinueButton"),
 menuOverlay:$("#menuOverlay"),headerMenu:$("#headerMenuButton"),quickMenu:$("#quickMenuButton"),resume:$("#resumeButton"),save:$("#saveButton"),load:$("#loadButton"),settings:$("#settingsButton"),returnTitle:$("#returnTitleButton"),
 slotsOverlay:$("#slotsOverlay"),slotsMode:$("#slotsModeLabel"),slotsTitle:$("#slotsTitle"),slotsGrid:$("#slotsGrid"),closeSlots:$("#closeSlotsButton"),
 settingsOverlay:$("#settingsOverlay"),speed:$("#textSpeedRange"),speedLabel:$("#textSpeedLabel"),closeSettings:$("#closeSettingsButton"),
 archiveOverlay:$("#archiveOverlay"),archive:$("#archiveButton"),archiveTabs:[...document.querySelectorAll(".archive-tab")],closeArchive:$("#closeArchiveButton"),bookLeft:$("#bookLeftPage"),bookRight:$("#bookRightPage"),pageTurnSheet:$("#pageTurnSheet"),archivePrev:$("#archivePrevButton"),archiveNext:$("#archiveNextButton"),archivePageIndicator:$("#archivePageIndicator"),
 nameDialog:$("#nameDialog"),nameForm:$("#nameForm"),nameTitle:$("#nameDialogTitle"),nameInput:$("#playerNameInput"),nameError:$("#nameError"),
 logDialog:$("#logDialog"),logContent:$("#logContent"),closeLog:$("#closeLogButton"),headerLog:$("#headerLogButton"),quickLog:$("#quickLogButton"),
 quickSave:$("#quickSaveButton"),quickLoad:$("#quickLoadButton"),quickAuto:$("#quickAutoButton"),quickSkip:$("#quickSkipButton"),toastArea:$("#toastArea"),metaBookOverlay:$("#metaBookOverlay"),metaBookCategory:$("#metaBookCategory"),metaBookEntry:$("#metaBookEntry"),truthSystemOverlay:$("#truthSystemOverlay"),truthSystemClose:$("#truthSystemCloseButton"),truthSystemPlayerNotice:$("#truthSystemPlayerNotice"),
 fontSize:$("#fontSizeRange"),fontSizeLabel:$("#fontSizeLabel"),uiOpacity:$("#uiOpacityRange"),uiOpacityLabel:$("#uiOpacityLabel"),motionToggle:$("#motionToggle")
};
const freshState=()=>({
  version:20.75,saveSchema:270,hasStarted:false,playerName:"",temporaryName:false,
 affection:0,investigation:0,suAffinity:0,belief:0,
 items:[],pendingItems:[],characterInfo:[],generalInfo:[],unlockedEndings:[],log:[],metaFlags:{},
 node:story.entry,command:0,page:0,effect:0,currentSection:story.meta.title,startedAt:Date.now()
});
let state=freshState(),settings=VNStore.loadSettings(),collection=VNStore.loadCollection();
if(!VNStore.loadAuto()){
 collection=VNStore.emptyCollection ? VNStore.emptyCollection() : {
  schemaVersion:230,characters:[],items:[],information:[],endings:[],newEntries:[]
 };
}
const COLLECTION_KINDS=["characters","items","information","endings","newEntries"];
for(const kind of COLLECTION_KINDS){
 if(!Array.isArray(collection[kind]))collection[kind]=[];
 collection[kind]=[...new Set(collection[kind].filter(value=>typeof value==="string"&&value.trim()))];
}
function reconcileCollection(progress){
 if(!progress||progress.hasStarted!==true)return false;
 let changed=false;
 const merge=(kind,values)=>{
  for(const value of values||[]){
   if(!value||collection[kind].includes(value))continue;
   if(VNArchive.unlock(collection,kind,value))changed=true;
  }
 };
 merge("characters",progress.characterInfo);
 merge("items",progress.items);
 merge("information",progress.generalInfo);
 merge("endings",progress.unlockedEndings);
 if(changed)VNStore.saveCollection(collection);
 return changed;
}
reconcileCollection(VNStore.loadAuto());
let pendingNameEasterEgg=null;
let forceNameReentry=false;
let phase="idle",typingTimer=null,fullText="",payload=null,slotMode="save",pendingInput=null,pendingChapterNext=null;
let lastChoiceContext={text:"",speaker:""};
let autoMode=false,skipMode=false,autoTimer=null,choiceTimer=null;
let choiceAnomalyCooldown=2+Math.floor(Math.random()*3);
let archiveUpdateToastVisible=false;
let archiveUpdateToastTimer=null;
let archiveState={tab:"characters",spread:0,pages:[],openCount:0};
let systemNoticeBuffer=[];
let truthSystemTimer=null;
let saveNameAnomalyActive=false;

function normalizeState(value){
 const next=Object.assign(freshState(),value||{});
 for(const key of ["items","pendingItems","characterInfo","generalInfo","unlockedEndings","log"])if(!Array.isArray(next[key]))next[key]=[];if(!next.metaFlags||typeof next.metaFlags!=="object")next.metaFlags={};
 next.log=next.log.filter(entry=>!/^\s*[【\[]\s*(?:SYSTEM|系統提示)\s*[】\]]/i.test(String(entry)));
 for(const key of ["affection","investigation","suAffinity","belief","command","page","effect"])next[key]=Number(next[key]||0);
 return next;
}
function showScreen(name){ui.title.classList.toggle("active",name==="title");ui.game.classList.toggle("active",name==="game")}
function currentCommands(){return story.nodes[state.node]||[]}
function current(){return currentCommands()[state.command]}
function saveAuto(){VNStore.saveAuto(state)}
function resetCommand(){state.page=0;state.effect=0}
function gotoNode(node){if(!story.nodes[node])throw new Error(`不存在的節點：${node}`);state.node=node;state.command=0;resetCommand();saveAuto();render()}
function nextCommand(){state.command++;resetCommand();saveAuto();render()}
function updateUI(){
 ui.chapter.textContent=resolve(state.currentSection||story.meta.title);
 ui.affection.textContent=`${state.affection}%`;
 ui.suAffinity.textContent=`${state.suAffinity}%`;
 ui.suAffinityLabel.textContent=`${hasFullCreatorName()?"蘇璟辰":"？？？"}好感度`;
 ui.investigation.textContent=`${state.investigation}%`;
 ui.belief.textContent=`${state.belief}%`;
 ui.logContent.textContent=state.log.join("\n\n");
 if(ui.truthSystemPlayerNotice)ui.truthSystemPlayerNotice.textContent=`${state.playerName&&!state.temporaryName?state.playerName:"玩家"}不能只靠單一道具判定真相。`;
 const autoSave=VNStore.loadAuto();
 ui.continueBtn.disabled=!(autoSave&&autoSave.hasStarted===true);
}
function hasFullCreatorName(progress=state){
 const items=[...(progress?.items||[]),...(progress?.pendingItems||[])];
 if(progress?.metaFlags?.漫畫家本名待補全&&!progress?.metaFlags?.漫畫家本名已補全&&!progress?.metaFlags?.creatorNameRevealed)return false;
 return Boolean(progress?.metaFlags?.creatorNameRevealed)||["寫有本名的資料頁","顯示本名的損壞截圖","黑貓的死亡紀錄","蘇璟辰與黑貓的合照"].some(item=>items.includes(item));
}
function maskNameForProgress(text,progress){return hasFullCreatorName(progress)?String(text??""):String(text??"").replaceAll("蘇璟辰","？？？")}
function maskSystemName(text){
 const player=state.playerName&&!state.temporaryName?state.playerName:"玩家";
 let output=resolve(text??"").replaceAll("互動者",player).replaceAll("「玩家姓名」",`「${player}」`);
 if(!hasFullCreatorName())output=output.replaceAll("蘇璟辰","？？？");
 return output;
}
function resolve(text){
 const player=state.playerName&&!state.temporaryName?state.playerName:"玩家";
 let output=String(text)
  .replaceAll("【玩家姓名】",state.playerName||"陌生人")
  .replaceAll("【輸入玩家姓名】",state.playerName||"陌生人")
  .replaceAll("「玩家姓名」",`「${state.playerName||"陌生人"}」`)
  .replaceAll("互動者",player)
  .replaceAll("玩家",player)
  .replaceAll("【漫畫家本名】",hasFullCreatorName()?"蘇璟辰":"蘇＿辰");
 if(!hasFullCreatorName())output=output.replaceAll("蘇璟辰","？？？");
 return output;
}
function resolveSpeaker(name){
 const speaker=resolve(name||"");
 return !hasFullCreatorName()&&speaker.includes("蘇璟辰")?"？？？":speaker;
}
function pageAllowed(page){
 if(page?.requiresItem&&!state.items.includes(page.requiresItem)&&!state.pendingItems.includes(page.requiresItem))return false;
 if(page?.hiddenIfItem&&(state.items.includes(page.hiddenIfItem)||state.pendingItems.includes(page.hiddenIfItem)))return false;
 if(page?.requiresAnyItems&&!page.requiresAnyItems.some(item=>state.items.includes(item)||state.pendingItems.includes(item)))return false;
 if(page?.requiresFlag&&!state.metaFlags[page.requiresFlag])return false;
 return true;
}
function speakerFor(text){
 const t=resolve(text).trim();
 if(!t.startsWith("「")&&!t.startsWith("『"))return"";
 if(["「咚、咚。」","「喀。」","「砰！」"].includes(t))return"";
 if(t.startsWith("「喵"))return"紫貓";
 const player=new Set(["「過來？」","「你住在這裡嗎？」","「這裡還有其他人？」","「……有人嗎？」","「這裡到底住了多少人？」","「……問你大概也沒有用。」","「等等。」","「門呢？」","「我剛才明明是從那裡進來的。」","「這裡？」","「我叫——」","「為什麼？」","「我想知道上次說話的人是誰。」","「你說下次不要自己走，所以我來找你。」","「我只是來確認你還好不好。」"]);
 if(player.has(t))return"你";
 if(["「……你的名字，是什麼？」","「……我記住了。」","「……黎靖。」","「……別再來了。」"].includes(t))return"？？？";
 return"黎靖";
}
function setSpeaker(name){ui.speaker.textContent=name;ui.speakerHeader.hidden=!name}

function normalizeSpecialName(name){
 return String(name||"").trim().replace(/\s+/g,"").toLowerCase();
}
function detectNameEasterEgg(name){
 const normalized=normalizeSpecialName(name);
 if(["黎靖","li jing","lijing","líjìng"].includes(normalized))return{
  speaker:"黎靖",
  text:"「你認真嗎？」"
 };
 if(["蘇璟辰","苏璟辰","su jingchen","sujingchen","sūjǐngchén"].includes(normalized))return{
  speaker:"蘇璟辰",
  text:"「我都還沒登場呢！怎麼能搶登場人物的名字呢？親愛的 ♭」"
 };
 if(normalized==="你")return{
  speaker:"黎靖",
  text:"「……這樣我要怎麼稱呼你？」"
 };
 if(normalized==="不知道")return{
  speaker:"黎靖",
  text:"「不知道也是名字？」"
 };
 return null;
}
function playNameEasterEgg(easterEgg){
 pendingNameEasterEgg=easterEgg;
 ui.nameDialog.close();
 showScreen("game");
 setSpeaker(easterEgg.speaker);
 fullText=easterEgg.text;
 payload={text:easterEgg.text,speaker:easterEgg.speaker,speed:"slow",effects:["flicker"],pauseAfter:0};
 phase="typing";
 ui.message.textContent="";
 ui.advance.hidden=true;
 VNEffects.apply(fullText,payload);
 let index=0;
 const tick=()=>{
  index++;
  ui.message.textContent=fullText.slice(0,index);
  if(index<fullText.length){
   typingTimer=setTimeout(tick,VNEffects.delay(fullText[index-1],settings,payload));
  }else{
   typingTimer=null;
   phase="nameEasterEgg";
   ui.advance.hidden=false;
  }
 };
 tick();
}

function stopTyping(){if(typingTimer){clearTimeout(typingTimer);typingTimer=null}}
function clearAutoTimer(){if(autoTimer){clearTimeout(autoTimer);autoTimer=null}}
function setModeButton(button,active){button.classList.toggle("active",active);button.setAttribute("aria-pressed",String(active))}
function scheduleAutoAdvance(){
 clearAutoTimer();
 if(!autoMode||phase!=="waiting")return;
 autoTimer=setTimeout(()=>{
  if(autoMode&&phase==="waiting")advanceText();
 },Number(settings.autoDelay||1100));
}
function toggleAuto(force){
 autoMode=typeof force==="boolean"?force:!autoMode;
 if(autoMode)skipMode=false;
 setModeButton(ui.quickAuto,autoMode);setModeButton(ui.quickSkip,skipMode);
 if(autoMode&&phase==="waiting")scheduleAutoAdvance();else clearAutoTimer();
}
function toggleSkip(force){
 skipMode=typeof force==="boolean"?force:!skipMode;
 if(skipMode){
  for(const gate of Object.values(state.metaFlags||{})){
   if(gate&&typeof gate==="object"&&gate.active===true)gate.skipped=true;
  }
  saveAuto();
 }
 if(skipMode)autoMode=false;
 setModeButton(ui.quickSkip,skipMode);setModeButton(ui.quickAuto,autoMode);
 clearAutoTimer();
 if(skipMode){
  if(phase==="typing")finishTyping();
  if(phase==="waiting")setTimeout(advanceText,35);
 }
}
function quickSave(){
 if(!state.hasStarted)return toast("QUICK SAVE","目前沒有可儲存的進度。");
 VNStore.saveQuick(state);
 toast("QUICK SAVE","已快速儲存。");
}
function quickLoad(){
 const saved=VNStore.loadQuick();
 if(!saved||saved.hasStarted!==true)return toast("QUICK LOAD","沒有快速存檔。");
 stopTyping();clearAutoTimer();toggleAuto(false);toggleSkip(false);
 state=normalizeState(saved);reconcileCollection(state);closeAll();showScreen("game");render();toast("QUICK LOAD","已讀取快速存檔。");
}
function typePage(raw){
 if(!pageAllowed(raw)){state.page++;return render();}
 if(raw?.revealsCreatorName&&!state.metaFlags.creatorNameRevealed){state.metaFlags.creatorNameRevealed=true;saveAuto();}
 stopTyping();systemNoticeBuffer=[];payload=VNEffects.parse(raw);fullText=resolve(payload.text);phase="typing";
 const internalChapter7Condition=/^(?:玩家在第七章選擇的路線不同，書中內容也會隨之改變。|若玩家(?:犧牲未命名角色|代替角色留下|摧毀原稿|將選擇交給未命名角色|在裁切線外留下句子)，.*)$/;
 if(internalChapter7Condition.test(fullText.trim())){state.page++;return render()}
 const internalEndingDirection=/(?:^(?:條件|解鎖條件)[：:]|(?:黎靖|蘇璟辰|雙)100%好感(?:特殊|真)結局|玩家完整區分黑貓黎靖|未達成任何100%好感|True\s*Ending|Ending\s*[A-G]|結局傾向|容易進入)/i;
 if(internalEndingDirection.test(fullText.trim())){state.page++;return render()}
 setSpeaker(resolveSpeaker(payload.speaker!==null?payload.speaker:speakerFor(payload.text)));ui.message.textContent="";ui.advance.hidden=true;VNEffects.apply(fullText,payload);
 lastChoiceContext={text:fullText,speaker:resolveSpeaker(payload.speaker!==null?payload.speaker:speakerFor(payload.text))};
 if(/^(?:【會。】){5}$/.test(fullText.replace(/\s+/g,""))){
  ui.message.className="echo-grow-page";
  ui.message.innerHTML='<span>會。</span><span>會。</span><span>會。</span><span>會。</span><span>會。</span>';
  phase="waiting";ui.advance.hidden=false;scheduleAutoAdvance();return;
 }
 let index=0;
 const tick=()=>{index++;ui.message.textContent=fullText.slice(0,index);if(index<fullText.length)typingTimer=setTimeout(tick,skipMode?5:VNEffects.delay(fullText[index-1],settings,payload));else{typingTimer=null;phase="waiting";ui.advance.hidden=false;if(skipMode)setTimeout(advanceText,35);else scheduleAutoAdvance()}};
 tick();
}
function finishTyping(){stopTyping();ui.message.textContent=fullText;phase="waiting";ui.advance.hidden=false;if(skipMode)setTimeout(advanceText,35);else scheduleAutoAdvance()}
function advanceText(){
 clearAutoTimer();
 const command=current(),raw=command.pages[state.page],parsed=VNEffects.parse(raw),text=resolve(parsed.text),speaker=resolveSpeaker(parsed.speaker!==null?parsed.speaker:speakerFor(parsed.text));
 state.log.push(speaker?`【${speaker}】\n${text}`:text);state.page++;updateUI();saveAuto();VNEffects.clear();
 const go=()=>state.page>=command.pages.length?nextCommand():typePage(command.pages[state.page]);
 parsed.pauseAfter?setTimeout(go,skipMode?20:parsed.pauseAfter):go();
}
function reopenNameAfterEasterEgg(){
 pendingNameEasterEgg=null;
 stopTyping();
 phase="input";
 ui.advance.hidden=true;
 ui.message.textContent="";
 setSpeaker("");
 forceNameReentry=true;
 ui.nameTitle.textContent="請重新輸入你的名字";
 ui.nameInput.value="";
 ui.nameError.textContent="";
 if(!ui.nameDialog.open)ui.nameDialog.showModal();
 setTimeout(()=>ui.nameInput.focus(),30);
}
function onMessageAdvance(){
 // 姓名彩蛋使用獨立流程，不能落回一般劇情的 waiting/advanceText。
 if(pendingNameEasterEgg){
  if(phase==="typing"){
   stopTyping();
   ui.message.textContent=fullText;
   phase="nameEasterEgg";
   ui.advance.hidden=false;
   return;
  }
  if(phase==="nameEasterEgg"||phase==="waiting"){
   reopenNameAfterEasterEgg();
   return;
  }
 }
 if(phase==="typing")return finishTyping();
 if(phase==="waiting")return advanceText();
}
function showChoice(command){
 toggleAuto(false);toggleSkip(false);stopTyping();if(choiceTimer){clearInterval(choiceTimer);choiceTimer=null}phase="choice";ui.advance.hidden=true;setSpeaker("");ui.choices.innerHTML="";
 // 部分劇本在選項前包含只供程式判斷、會被隱藏的段落；此時保留上一句玩家實際看見的文字。
 if(!ui.message.textContent.trim()&&lastChoiceContext.text){ui.message.textContent=lastChoiceContext.text;setSpeaker(lastChoiceContext.speaker)}
 const visible=command.options.filter(option=>{
  if(option.requiresItem&&!state.items.includes(option.requiresItem)&&!state.pendingItems.includes(option.requiresItem))return false;
  if(option.requiresAnyItems&&!option.requiresAnyItems.some(item=>state.items.includes(item)||state.pendingItems.includes(item)))return false;
  if(option.requiresFlagCount){const prefix=option.requiresFlagCount.prefix||"",count=Object.keys(state.metaFlags||{}).filter(key=>key.startsWith(prefix)&&state.metaFlags[key]).length;if(count<Number(option.requiresFlagCount.count||0))return false;}
  if(option.hiddenIfFlag&&state.metaFlags[option.hiddenIfFlag])return false;
  return true;
 });
 const appendChoiceButton=(option,index)=>{
  const number=Number(option.displayNumber)||index+1;
  const button=document.createElement("button");button.type="button";button.className="choice-button";button.textContent=`${["①","②","③","④","⑤","⑥"][number-1]||""} ${resolve(option.label)}`;
  button.addEventListener("click",event=>{event.preventDefault();event.stopPropagation();if(choiceTimer){clearInterval(choiceTimer);choiceTimer=null}ui.choices.innerHTML="";gotoNode(option.next)});
  ui.choices.appendChild(button);
  return button;
 };
 visible.forEach(appendChoiceButton);
 const seconds=Math.max(0,Number(command.timeLimit||0));
 if(seconds&&(command.timeoutNext||command.timeoutReveal)){
  let left=seconds;const counter=document.createElement("div");counter.className="choice-countdown";counter.textContent=`剩餘 ${left} 秒`;ui.choices.prepend(counter);
  choiceTimer=setInterval(()=>{left-=1;if(left<=0){
   clearInterval(choiceTimer);choiceTimer=null;counter.remove();
   if(command.timeoutReveal){
    const reveal=command.timeoutReveal,option=reveal.option;
    if(option)appendChoiceButton(option,visible.length);
    const note=document.createElement("div");note.className="choice-timeout-note";note.textContent=resolve(reveal.message||"");ui.choices.appendChild(note);
    return;
   }
   ui.choices.innerHTML="";gotoNode(command.timeoutNext);return;
  }counter.textContent=`剩餘 ${left} 秒`},1000);
 }
 const buttons=[...ui.choices.querySelectorAll(".choice-button")];
 // 一般介面異常與蘇璟辰干預分開抽取，並共用冷卻，避免連續集中出現。
 if(choiceAnomalyCooldown>0)choiceAnomalyCooldown--;
 const anomalyTriggered=command.corruption!==false&&buttons.length&&choiceAnomalyCooldown===0&&Math.random()<0.28;
 if(anomalyTriggered){
  choiceAnomalyCooldown=4+Math.floor(Math.random()*4);
  const interference=Math.random()<0.48;
  const genericModes=["garble","blank"],mode=interference?"replace":genericModes[Math.floor(Math.random()*genericModes.length)];
  const duration=1700+Math.floor(Math.random()*1600),originalOrder=[...buttons];
  const note=document.createElement("div"),lines=["我改了一下。","這樣比較好。","相信我。","選這個吧。","別看另外一個。"];
  note.className="choice-interference-note";note.textContent=lines[Math.floor(Math.random()*lines.length)];
  buttons.forEach(button=>{button.dataset.originalText=button.textContent;button.classList.add("choice-corrupted")});
  if(mode==="garble"){
   const garble=["Ⱥㅣ゙ｦƷㆆﾚぃㅇĦȹゞﾂ","ㄴȴ゚ｧØﾝㇱㅅƻｮゎ","ｭŦㅁゔȺゕﾍĿㅇㇻ","ゟㅈƞｨﾞȻㄱ゚ﾇĨㆁ","ㅌȾゖﾗƵｪㅇĎ゙ﾛㅣ"];
   buttons.forEach((button,index)=>button.textContent=garble[index%garble.length]);
  }
  if(mode==="replace")buttons[Math.floor(Math.random()*buttons.length)].textContent=["先來看我。","不要選那個。","這個答案比較好。","留在這裡。"][Math.floor(Math.random()*4)];
  if(mode==="blank")buttons.forEach(button=>button.textContent="");
  if(mode==="reorder"){
   [...buttons].sort(()=>Math.random()-.5).forEach(button=>ui.choices.appendChild(button));
  }
  if(mode==="count"){
   if(buttons.length>1&&Math.random()<.55)buttons[Math.floor(Math.random()*buttons.length)].hidden=true;
   else{const ghost=document.createElement("button");ghost.type="button";ghost.className="choice-button choice-corrupted choice-ghost";ghost.textContent="⑤ ……";ghost.disabled=true;ui.choices.appendChild(ghost)}
  }
  if(interference)ui.choices.appendChild(note);
  setTimeout(()=>{
   const connected=originalOrder.some(button=>button.isConnected);if(!connected)return;
   ui.choices.querySelectorAll(".choice-ghost,.choice-interference-note").forEach(element=>element.remove());
   originalOrder.forEach(button=>{if(!button.isConnected)return;button.hidden=false;button.textContent=button.dataset.originalText||"";button.classList.remove("choice-corrupted");ui.choices.appendChild(button)});
  },duration);
 }
}
function toast(title,message){
 const element=document.createElement("div"),label=document.createElement("small"),body=document.createElement("strong");
 element.className="toast";label.textContent=maskSystemName(title||"");body.textContent=maskSystemName(message||"");element.append(label,body);ui.toastArea.appendChild(element);
 requestAnimationFrame(()=>element.classList.add("show"));setTimeout(()=>{element.classList.remove("show");setTimeout(()=>element.remove(),250)},1750);
}

function showSystemNotice(raw,standalone=false){
 const parsed=VNEffects.parse(raw),text=resolve(parsed.text).trim();
 phase="systemNotice";setSpeaker("");ui.message.textContent="";ui.advance.hidden=true;
 const proceed=delay=>setTimeout(()=>{
  if(standalone)return nextCommand();
  return state.page>=current().pages.length?nextCommand():render();
 },delay);
 const hiddenEndingHint=/(?:True\s*Ending|Ending\s*[A-G]|結局傾向|結局條件|容易進入|傾向|^條件[：:])/i.test(text);
 if(hiddenEndingHint){
  if(!standalone)state.page++;
  updateUI();saveAuto();
  return proceed(20);
 }
 const removedLegacyStat=/(?:老宅認知度|蘇璟辰理解度|作品完成度|神祕存在警戒度|神秘存在警戒度|幽靈親和度|蘇璟辰控制值|界線值|黎靖存在穩定度)/.test(text);
 if(removedLegacyStat){
  if(!standalone)state.page++;
  updateUI();saveAuto();
  return proceed(20);
 }
 const informationNotice=/^(?:(?:固定)?(?:獲得|解鎖)情報|得知|發現.*(?:情報|線索|記憶))/i.test(text);
 if(informationNotice){
  if(!standalone)state.page++;
  updateUI();saveAuto();
  showArchiveUpdateToast();
  return proceed(40);
 }
 systemNoticeBuffer.push(text);
 if(!standalone)state.page++;
 updateUI();saveAuto();
 toast("SYSTEM",text);
 proceed(120);
}

function showTruthSystemUnlock(){
 stopTyping();clearAutoTimer();toggleAuto(false);toggleSkip(false);phase="truthUnlock";
 state.metaFlags.truthJudgmentUnlocked=true;
 if(!state.metaFlags.truthItemViews||typeof state.metaFlags.truthItemViews!=="object")state.metaFlags.truthItemViews={};
 saveAuto();
 setSpeaker("");ui.message.textContent="";ui.advance.hidden=true;ui.choices.innerHTML="";
 ui.truthSystemOverlay.hidden=false;
 if(truthSystemTimer)clearTimeout(truthSystemTimer);
 truthSystemTimer=setTimeout(finishTruthSystemUnlock,30000);
}
function finishTruthSystemUnlock(){
 if(phase!=="truthUnlock")return;
 if(truthSystemTimer)clearTimeout(truthSystemTimer);
 truthSystemTimer=null;ui.truthSystemOverlay.hidden=true;nextCommand();
}

function consumeSystemNotice(predicate){
 const index=systemNoticeBuffer.findIndex(predicate);
 if(index<0)return false;
 systemNoticeBuffer.splice(index,1);
 return true;
}

const MetaSystem=(()=>{
 let queue=Promise.resolve();
 const labels={items:"道具",characters:"人物",information:"情報",endings:"結局"};
 const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
 function showUpdate(kind,name){
  queue=queue.then(async()=>{
   if(!ui.metaBookOverlay)return;
   const oldPhase=phase;
   phase="meta";
   clearAutoTimer();
   ui.metaBookCategory.textContent=`第十三冊｜${labels[kind]||"紀錄"}`;
   ui.metaBookEntry.textContent=maskSystemName(name);
   ui.metaBookOverlay.hidden=false;
   ui.metaBookOverlay.classList.remove("active","closing");
   void ui.metaBookOverlay.offsetWidth;
   ui.metaBookOverlay.classList.add("active");
   await wait(skipMode?25:1450);
   ui.metaBookOverlay.classList.add("closing");
   await wait(skipMode?20:420);
   ui.metaBookOverlay.hidden=true;
   ui.metaBookOverlay.classList.remove("active","closing");
   phase=oldPhase==="meta"?"idle":oldPhase;
   if(autoMode&&phase==="waiting")scheduleAutoAdvance();
  });
 }
 function flag(name){
  state.metaFlags[name]=(state.metaFlags[name]||0)+1;
  saveAuto();
  return state.metaFlags[name];
 }
 return {showUpdate,flag};
})();


function showArchiveUpdateToast(){
 if(archiveUpdateToastVisible)return;
 archiveUpdateToastVisible=true;

 // 同一批解鎖只保留一個提示，不再建立一整排 Toast。
 toast("第十三冊更新","有新的紀錄。");

 clearTimeout(archiveUpdateToastTimer);
 archiveUpdateToastTimer=setTimeout(()=>{
  archiveUpdateToastVisible=false;
  archiveUpdateToastTimer=null;
 },1800);
}

function unlock(kind,name){
 if(VNArchive.unlock(collection,kind,name)){
  VNStore.saveCollection(collection);
  showArchiveUpdateToast();
  return true;
 }
 return false;
}
function applyEffect(effect){
 if(effect.kind==="stat"){
  const value=Number(state[effect.key]||0)+Number(effect.amount||0);
  state[effect.key]=["affection","suAffinity","investigation","belief"].includes(effect.key)?Math.max(0,Math.min(100,value)):value;
  const message=`${effect.label}${effect.amount>=0?"＋":""}${effect.amount}%`;
  if(!consumeSystemNotice(text=>text===message))toast("SYSTEM",message)
 }
 if(effect.kind==="item"){
  if(!state.items.includes(effect.name)&&!state.pendingItems.includes(effect.name)){
    state.pendingItems.push(effect.name);
    if(!consumeSystemNotice(text=>text.includes("道具")&&text.includes(effect.name)))toast("SYSTEM",`獲得道具「${effect.name}」`);
  }
}
 if(effect.kind==="character"){if(!state.characterInfo.includes(effect.name))state.characterInfo.push(effect.name);unlock("characters",effect.name)}
 if(effect.kind==="playerFile")unlock("characters","player");
 if(effect.kind==="info"){if(!state.generalInfo.includes(effect.name))state.generalInfo.push(effect.name);unlock("information",effect.name);consumeSystemNotice(text=>text.includes("情報")&&text.includes(effect.name))}
 if(effect.kind==="flag")state.metaFlags[effect.name]=true;
 if(effect.kind==="watchGateStart")state.metaFlags[`watchGate:${effect.name}`]={active:true,skipped:false};
 if(effect.kind==="watchGateReward"){
  const gate=state.metaFlags[`watchGate:${effect.name}`];
  if(gate&&gate.active===true&&gate.skipped!==true&&effect.item){
   applyEffect({kind:"item",name:effect.item});
  }
  if(gate&&typeof gate==="object")gate.active=false;
 }
 if(effect.kind==="removeItem"){
  state.items=state.items.filter(item=>item!==effect.name);
  state.pendingItems=state.pendingItems.filter(item=>item!==effect.name);
  if(effect.removeFromArchive){
   collection.items=collection.items.filter(item=>item!==effect.name);
   collection.newEntries=collection.newEntries.filter(entry=>entry!==`items:${effect.name}`);
   VNStore.saveCollection(collection);
  }
  if(!consumeSystemNotice(text=>text.includes(effect.name)&&(text.includes("移除")||text.includes("失去"))))toast("SYSTEM",`移除道具「${effect.name}」`);
 }
 if(effect.kind==="temporaryName"){state.playerName=effect.name;state.temporaryName=true;toast("PLAYER STATUS",`暫時登錄為「${effect.name}」`)}
 if(effect.kind==="player")toast("PLAYER REGISTERED",`玩家姓名：${state.playerName}`);
}
function runEffects(command){
 phase="effects";
 const archiveCountBefore=
  collection.characters.length+
  collection.items.length+
  collection.information.length+
  collection.endings.length;

 command.items.forEach(applyEffect);

 const archiveCountAfter=
  collection.characters.length+
  collection.items.length+
  collection.information.length+
  collection.endings.length;

 if(archiveCountAfter>archiveCountBefore)showArchiveUpdateToast();

 state.effect=command.items.length;
 saveAuto();
 phase="idle";
 nextCommand();
}
function requestInput(command){
 toggleAuto(false);toggleSkip(false);phase="input";
 pendingInput=command;
 ui.nameTitle.textContent=forceNameReentry?"請重新輸入你的名字":resolve(command.title||"輸入玩家姓名");
 ui.nameInput.value="";
 ui.nameError.textContent="";
 ui.nameDialog.showModal();
 setTimeout(()=>ui.nameInput.focus(),30);
}
function showSection(command){
 phase="section";stopTyping();setSpeaker("");ui.message.textContent="";ui.advance.hidden=true;ui.choices.innerHTML="";
 if(/^第[一二三四五六七八九十]+章｜/.test(command.title||""))lastChoiceContext={text:"",speaker:""};
 state.currentSection=command.title;updateUI();ui.sectionTitle.textContent=resolve(command.title);ui.sectionOverlay.hidden=false;
 setTimeout(()=>{ui.sectionOverlay.hidden=true;nextCommand()},skipMode?35:1200);
}
function evaluate(test){
 if(test==="hasPlayerName")return Boolean(state.playerName&&!state.temporaryName&&state.playerName!=="陌生人");
 if(!test||typeof test!=="object")return false;
 if(test.kind==="all")return (test.tests||[]).every(evaluate);
 if(test.kind==="any")return (test.tests||[]).some(evaluate);
 if(test.kind==="statAtLeast")return Number(state[test.key]||0)>=Number(test.value||0);
 if(test.kind==="statBetween")return Number(state[test.key]||0)>=Number(test.min||0)&&Number(state[test.key]||0)<=Number(test.max||100);
 if(test.kind==="hasItem")return state.items.includes(test.name)||state.pendingItems.includes(test.name);
 if(test.kind==="flag")return Boolean(state.metaFlags[test.name]);
 if(test.kind==="flagCountAtLeast")return Object.keys(state.metaFlags||{}).filter(key=>key.startsWith(test.prefix||"")&&state.metaFlags[key]).length>=Number(test.value||0);
 return false;
}
function showEnding(command){
 phase="ending";if(!state.unlockedEndings.includes(command.id))state.unlockedEndings.push(command.id);unlock("endings",command.id);saveAuto();ui.endingId.textContent="";ui.endingTitle.textContent="";ui.endingOverlay.hidden=false;
}
function showChapterResult(command){
 phase="chapterResult";
 pendingChapterNext=command.next||null;

 const chapterItems=[...state.pendingItems];
 chapterItems.forEach(item=>{
   if(!state.items.includes(item))state.items.push(item);
   unlock("items",item);
 });
 state.pendingItems=[];

 const info=hasFullCreatorName()?(command.info||[]):(command.infoPartial||command.info||[]);
 info.forEach(entry=>unlock("information",entry));
 ui.resultOverlay.querySelector("small").textContent="CHAPTER COMPLETE";ui.resultContinue.hidden=false;ui.resultTitle.textContent=`${resolve(command.chapterTitle||state.currentSection)} 結束`;
 const items=chapterItems.length?chapterItems.join("、"):"無",chars=state.characterInfo.length?state.characterInfo.join("、"):"無";
 ui.resultContent.innerHTML=maskSystemName(`<div class="result-group"><b>目前數值</b>黎靖好感度：${state.affection}%<br>蘇璟辰好感度：${state.suAffinity}%<br>調查度：${state.investigation}%<br>相信值：${state.belief}%</div><div class="result-group"><b>本章取得道具</b>${items}</div><div class="result-group"><b>獲得人物情報</b>${chars}</div><div class="result-group"><b>本章情報</b>${info.length?info.join("<br>"):"無"}</div>`);
 ui.resultContinue.textContent=pendingChapterNext?"進入下一章":"返回標題頁";ui.resultOverlay.hidden=false;saveAuto();
}
function commitChapter(command){
 for(const item of state.pendingItems){if(!state.items.includes(item))state.items.push(item);unlock("items",item)}
 state.pendingItems=[];
 for(const entry of command.info||[]){if(!state.generalInfo.includes(entry))state.generalInfo.push(entry);unlock("information",entry)}
 saveAuto();gotoNode(command.next);
}
function render(){
 updateUI();ui.choices.innerHTML="";const command=current();if(!command){toast("SYSTEM ERROR","找不到下一段劇情。");return}
 if(command.type==="section")return showSection(command);
 if(command.type==="text"){
  if(state.page>=command.pages.length)return nextCommand();
  const parsed=VNEffects.parse(command.pages[state.page]);
  if(parsed.speaker==="SYSTEM")return showSystemNotice(command.pages[state.page]);
  return typePage(command.pages[state.page]);
 }
 if(command.type==="notice")return showSystemNotice(command.page,true);
 if(command.type==="truthUnlock")return showTruthSystemUnlock();
 if(command.type==="choice")return showChoice(command);
 if(command.type==="effects")return runEffects(command);
 if(command.type==="input")return requestInput(command);
 if(command.type==="jump")return gotoNode(command.target);
 if(command.type==="condition")return gotoNode(evaluate(command.test)?command.yes:command.no);
 if(command.type==="ending")return showEnding(command);
 if(command.type==="chapterEnd")return showChapterResult(command);
 if(command.type==="saveNameAnomaly")return showSaveNameAnomaly();
 if(command.type==="commitChapter")return commitChapter(command);
 if(command.type==="pause"){phase="pause";return setTimeout(nextCommand,skipMode?20:Number(command.duration||500))}
 if(command.type==="animation"){phase="animation";VNEffects.apply("",{effects:[command.effect]});return setTimeout(nextCommand,skipMode?20:Number(command.duration||400))}
 if(command.type==="meta"){if(command.action==="book-update")showArchiveUpdateToast();if(command.action==="toast")toast("第十三冊",resolve(command.message||""));if(command.flag)MetaSystem.flag(command.flag);return setTimeout(nextCommand,skipMode?20:Number(command.duration||80))}
}
function newGame(){
 stopTyping();
 state=freshState();
 state.hasStarted=true;
  state.saveSchema=270;
 saveAuto();
 closeAll();
 showScreen("game");
 render();
}
function continueGame(){const saved=VNStore.loadAuto();if(!saved)return newGame();state=normalizeState(saved);reconcileCollection(state);closeAll();showScreen("game");render()}
function returnTitle(){stopTyping();clearAutoTimer();toggleAuto(false);toggleSkip(false);VNEffects.clear();phase="idle";closeAll();ui.choices.innerHTML="";showScreen("title");updateUI()}
function closeAll(){if(truthSystemTimer){clearTimeout(truthSystemTimer);truthSystemTimer=null}[ui.sectionOverlay,ui.endingOverlay,ui.resultOverlay,ui.menuOverlay,ui.slotsOverlay,ui.settingsOverlay,ui.archiveOverlay,ui.truthSystemOverlay].forEach(x=>x.hidden=true);if(ui.nameDialog.open)ui.nameDialog.close();if(ui.logDialog.open)ui.logDialog.close()}
function openSlots(mode){slotMode=mode;ui.slotsMode.textContent=mode.toUpperCase();ui.slotsTitle.textContent=mode==="save"?"存檔":"讀檔";ui.slotsGrid.innerHTML="";
 const loadedSlots=Array.from({length:10},(_,index)=>VNStore.loadSlot(index+1));
 const latestIndex=loadedSlots.reduce((best,saved,index)=>saved&&Number(saved.savedAt||0)>Number(loadedSlots[best]?.savedAt||0)?index:best,0);
 const anomalyFallback=saveNameAnomalyActive&&!loadedSlots.some(Boolean);
 for(let i=1;i<=10;i++){
  const saved=loadedSlots[i-1]||(anomalyFallback&&i===1?state:null);
  const button=document.createElement("button");
  button.type="button";
  button.className="slot";
  button.innerHTML=saved
   ? `<strong>SAVE ${String(i).padStart(2,"0")}</strong><span>${saveNameAnomalyActive&&(i-1===latestIndex||anomalyFallback&&i===1)?"不要把空白補完。":maskNameForProgress(saved.currentSection,saved)}</span><span>玩家：${saved.playerName||"未登錄"}</span>`
   : `<strong>SAVE ${String(i).padStart(2,"0")}</strong><span>EMPTY</span>`;
  button.onclick=()=>{
   if(saveNameAnomalyActive)return;
   if(mode==="save"){
    if(!state.hasStarted)return;
    VNStore.saveSlot(i,state);
    openSlots("save");
   }else if(saved){
    state=normalizeState(saved);reconcileCollection(state);
    ui.slotsOverlay.hidden=true;
    showScreen("game");
    render();
   }
  };
  ui.slotsGrid.appendChild(button);
 }
 ui.slotsOverlay.hidden=false;
}
function showSaveNameAnomaly(){phase="saveNameAnomaly";saveNameAnomalyActive=true;openSlots("load")}
function animatePageTurn(direction){
 ui.pageTurnSheet.className=`page-turn-sheet ${direction>0?"turn-next":"turn-prev"}`;
 setTimeout(()=>ui.pageTurnSheet.className="page-turn-sheet",520);
}
function renderArchiveSpread(countTruthViews=false){
 if(countTruthViews)archiveState.pages=VNArchive.buildPages(collection,archiveState.tab);
 const singlePage=window.matchMedia("(max-width:760px)").matches;
 const pageSize=singlePage?1:2;
 const total=Math.max(1,Math.ceil(archiveState.pages.length/pageSize));
 archiveState.spread=Math.max(0,Math.min(archiveState.spread,total-1));
 const firstIndex=archiveState.spread*pageSize;
 const left=singlePage?null:archiveState.pages[firstIndex];
 const right=singlePage?archiveState.pages[firstIndex]:archiveState.pages[firstIndex+1];
 ui.bookLeft.innerHTML=VNArchive.renderPage(left,"L");
 ui.bookRight.innerHTML=VNArchive.renderPage(right,"R");
 ui.archivePageIndicator.textContent=`${archiveState.spread+1} / ${total}`;
 ui.archivePrev.disabled=archiveState.spread===0;
 ui.archiveNext.disabled=archiveState.spread>=total-1;
 VNArchive.markSeen(collection,left);VNArchive.markSeen(collection,right);
 if(countTruthViews){const progress=state.hasStarted?state:null;VNArchive.recordItemView(left,progress);VNArchive.recordItemView(right,progress)}
 ui.bookLeft.querySelectorAll(".book-new-badge").forEach(badge=>badge.remove());
 ui.bookRight.querySelectorAll(".book-new-badge").forEach(badge=>badge.remove());
}
function setArchiveTab(tab,animate=false){
 archiveState.tab=tab;archiveState.spread=0;
 ui.archiveTabs.forEach(x=>x.classList.toggle("active",x.dataset.tab===tab));
 archiveState.pages=VNArchive.buildPages(collection,tab);
 if(animate)animatePageTurn(1);
 renderArchiveSpread(true);
}
function openArchive(){
 reconcileCollection(state.hasStarted?state:VNStore.loadAuto());
 const openCount=MetaSystem.flag("archiveOpenCount");
 archiveState.openCount=openCount;
 if(openCount===30)toast("第十三冊","……別一直翻。");if(openCount===50)toast("第十三冊","你是不是在找什麼？");if(openCount===80)toast("第十三冊","沒有。");if(openCount===100)toast("第十三冊","至少現在還沒有。");
 ui.archiveOverlay.hidden=false;
 const first=!localStorage.getItem("volume13-v20-75-book-opened");
 if(first){
  localStorage.setItem("volume13-v20-75-book-opened","1");
  archiveState.pages=[VNArchive.introPage()];archiveState.spread=0;
  ui.archiveTabs.forEach(x=>x.classList.remove("active"));
  renderArchiveSpread();return;
 }
 setArchiveTab(archiveState.tab||"characters");
}
function openLog(){ui.logContent.textContent=state.log.join("\n\n");ui.logDialog.showModal()}
function syncSettings(){
 ui.speed.value=settings.textSpeed;
 ui.speedLabel.textContent=settings.textSpeed<=28?"快":settings.textSpeed<=64?"普通":"慢";
 ui.fontSize.value=settings.fontSize;ui.fontSizeLabel.textContent=`${settings.fontSize}px`;
 ui.uiOpacity.value=settings.uiOpacity;ui.uiOpacityLabel.textContent=`${settings.uiOpacity}%`;
 ui.motionToggle.checked=settings.motion!==false;
 document.documentElement.style.setProperty("--dialogue-font-size",`${settings.fontSize}px`);
 document.documentElement.style.setProperty("--ui-opacity",String(settings.uiOpacity/100));
 document.body.classList.toggle("motion-disabled",settings.motion===false);
}

ui.newGame.onclick=newGame;ui.continueBtn.onclick=continueGame;ui.loadTitle.onclick=()=>openSlots("load");ui.titleArchive.onclick=openArchive;
ui.messageWindow.onclick=onMessageAdvance;
ui.quickAuto.onclick=()=>toggleAuto();ui.quickSkip.onclick=()=>toggleSkip();
document.addEventListener("keydown",e=>{
 if(!ui.game.classList.contains("active")||e.target.matches("input,textarea"))return;
 if(e.key.toLowerCase()==="q"){e.preventDefault();quickSave();return}
 if(e.key.toLowerCase()==="l"){e.preventDefault();quickLoad();return}
 if(e.key.toLowerCase()==="a"){e.preventDefault();toggleAuto();return}
 if(e.key.toLowerCase()==="s"){e.preventDefault();toggleSkip();return}
 if((e.key==="Enter"||e.key===" ")&&!document.querySelector(".overlay:not([hidden])")&&!ui.nameDialog.open&&!ui.logDialog.open){e.preventDefault();onMessageAdvance()}
});
ui.nameForm.addEventListener("submit",e=>{
 e.preventDefault();
 const name=ui.nameInput.value.trim();
 if(!name){
  ui.nameError.textContent="至少寫個名字吧。";
  return;
 }

 const easterEgg=detectNameEasterEgg(name);
 if(easterEgg){
  // Do not keep the easter-egg name as the player name.
  state.playerName="";
  state.temporaryName=false;
  pendingInput=null;
  forceNameReentry=true;
  playNameEasterEgg(easterEgg);
  return;
 }

 state.playerName=name;
 state.temporaryName=false;
 pendingInput=null;
 forceNameReentry=false;
 ui.nameDialog.close();
 saveAuto();
 nextCommand();
});
ui.endingReturn.onclick=returnTitle;ui.resultContinue.onclick=()=>{ui.resultOverlay.hidden=true;if(pendingChapterNext){const next=pendingChapterNext;pendingChapterNext=null;gotoNode(next)}else returnTitle()};
ui.headerMenu.onclick=ui.quickMenu.onclick=()=>ui.menuOverlay.hidden=false;ui.resume.onclick=()=>ui.menuOverlay.hidden=true;ui.save.onclick=ui.quickSave.onclick=()=>openSlots("save");ui.load.onclick=ui.quickLoad.onclick=()=>openSlots("load");ui.settings.onclick=()=>ui.settingsOverlay.hidden=false;ui.returnTitle.onclick=returnTitle;
ui.closeSlots.onclick=()=>{ui.slotsOverlay.hidden=true;if(saveNameAnomalyActive){saveNameAnomalyActive=false;nextCommand()}};ui.closeSettings.onclick=()=>{
 settings.textSpeed=Number(ui.speed.value);
 settings.fontSize=Number(ui.fontSize.value);
 settings.uiOpacity=Number(ui.uiOpacity.value);
 settings.motion=ui.motionToggle.checked;
 VNStore.saveSettings(settings);syncSettings();ui.settingsOverlay.hidden=true;
};
ui.speed.oninput=()=>{settings.textSpeed=Number(ui.speed.value);syncSettings()};
ui.fontSize.oninput=()=>{settings.fontSize=Number(ui.fontSize.value);syncSettings()};
ui.uiOpacity.oninput=()=>{settings.uiOpacity=Number(ui.uiOpacity.value);syncSettings()};
ui.motionToggle.onchange=()=>{settings.motion=ui.motionToggle.checked;syncSettings()};
ui.archive.onclick=ui.titleArchive.onclick=openArchive;
ui.truthSystemClose.onclick=finishTruthSystemUnlock;
ui.closeArchive.onclick=()=>ui.archiveOverlay.hidden=true;
ui.archiveTabs.forEach(tab=>tab.onclick=()=>setArchiveTab(tab.dataset.tab,true));
ui.archivePrev.onclick=()=>{if(archiveState.spread<=0)return;animatePageTurn(-1);archiveState.spread--;setTimeout(()=>renderArchiveSpread(true),180)};
ui.archiveNext.onclick=()=>{const pageSize=window.matchMedia("(max-width:760px)").matches?1:2;const max=Math.ceil(archiveState.pages.length/pageSize)-1;if(archiveState.spread>=max)return;animatePageTurn(1);archiveState.spread++;setTimeout(()=>renderArchiveSpread(true),180)};
window.addEventListener("resize",()=>{if(!ui.archiveOverlay.hidden)renderArchiveSpread()});
ui.headerLog.onclick=ui.quickLog.onclick=openLog;ui.closeLog.onclick=()=>ui.logDialog.close();

syncSettings();showScreen("title");updateUI();
})();
