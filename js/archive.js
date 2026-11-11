(() => {
"use strict";
const DATABASE={
 characters:[
  {id:"黎靖",title:"黎靖",fields:[["身分","老宅住戶"],["外觀","紫色貓／無臉人形"],["狀態","已死亡"]],description:"住在老宅中的存在。紫貓與人形都使用這個名字。"},
  {id:"蘇璟辰",title:"蘇璟辰",fields:[["身分","漫畫家"],["筆名","黎靖"],["狀態","已死亡"]],description:"《第十二冊》的創作者。少年時曾以白髮示人，之後染成棕色；成年後以粉色頭髮與筆名「黎靖」活動。"},
  {id:"player",title:"玩家",fields:[],description:""}
 ],
 items:Array.isArray(window.VN_ITEM_DATABASE)?window.VN_ITEM_DATABASE:[],
 endings:[
  {id:"END 00",title:"迷途",description:"你沒有接受老宅住戶的引導，獨自走進不斷改變的走廊。當你終於明白那隻紫貓是唯一能帶你離開的存在時，已經找不到回去的路。"},
  {id:"Ending A",title:"未完稿",description:"你沒有取得足夠線索，也未與任何人建立穩定關係。第十三冊停止記錄尚未完成的故事，而你再也看不見它的下一頁。"},
  {id:"Ending B",title:"謊言成真",description:"你選擇相信最理想的版本，讓它取代原本的真實。蘇璟辰仍然活著、黑貓從未死亡，紫貓黎靖卻逐漸失去自己的身分。"},
  {id:"Ending C",title:"彼岸",description:"你接受故事、幽靈與造物不會因虛構而失去價值。你在石板路盡頭與蘇璟辰和黎靖道別，留下了一扇仍能再次推開的門。"},
  {id:"Ending D",title:"唯一答案",description:"你掌握了大量資料，卻將所有空白補成唯一的答案。蘇璟辰與黎靖被固定在最合理的設定裡，也失去了繼續選擇的可能。"},
  {id:"Ending E",title:"永不改變的日常",description:"你讓老宅永遠停在最安穩的一天。沒有人再次受傷，蘇璟辰與黎靖也只能日復一日重複相同的生活。"},
  {id:"Ending F",title:"只屬於牠的名字",description:"你完整區分了黑貓、筆名與紫貓所使用的同一個名字，也始終尊重黎靖自己的選擇。這一次，牠親口決定自己是誰。"},
  {id:"Ending G",title:"房門只敲一次",description:"蘇璟辰敲響你的房門，第一次沒有用玩笑掩飾留下的理由。他不要求永遠，只希望你離開以前，願意親口告訴他。"},
  {id:"True Ending",title:"明天尚未決定",description:"你與蘇璟辰、黎靖建立完整關係，卻沒有替任何人決定未來。遊戲在空白頁前結束，老宅裡的生活仍會繼續。"}
 ]
};
function storyCatalog(){
 const temporaryItems=new Set(DATABASE.items.filter(entry=>entry.temporary).map(entry=>entry.id));
 const catalog={items:new Set(DATABASE.items.filter(entry=>!entry.temporary).map(entry=>entry.id)),information:new Set(),endings:new Set(DATABASE.endings.map(entry=>entry.id))};
 const informationVariants=new Map();
 const nodes=window.CHAPTER_1?.nodes||{};
 for(const commands of Object.values(nodes))for(const command of commands||[]){
  for(const effect of command.items||[]){
   if(effect.kind==="item"&&effect.name&&!temporaryItems.has(effect.name))catalog.items.add(effect.name);
   if(effect.kind==="info"&&effect.name)catalog.information.add(effect.name);
  }
  for(const [index,info] of (command.info||[]).entries())if(info){
   catalog.information.add(info);
   const partial=command.infoPartial?.[index];
   if(partial&&partial!==info)informationVariants.set(info,[info,partial]);
  }
  if(command.type==="ending"&&command.id)catalog.endings.add(command.id);
 }
 return{
  characters:DATABASE.characters.map(entry=>entry.id),
  items:[...catalog.items],
  information:[...catalog.information],
  informationVariants,
  endings:[...catalog.endings]
 };
}
const CATALOG=storyCatalog();
const key=(kind,id)=>`${kind}:${id}`;
const escapeHtml=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
function creatorNameKnown(){
 const state=VNStore.loadAuto()||{};
 const evidence=[...(state.items||[]),...(state.pendingItems||[])];
 if(state.metaFlags?.漫畫家本名待補全&&!state.metaFlags?.漫畫家本名已補全&&!state.metaFlags?.creatorNameRevealed)return false;
 return Boolean(state.metaFlags?.creatorNameRevealed)||["寫有本名的資料頁","顯示本名的損壞截圖","黑貓的死亡紀錄","蘇璟辰與黑貓的合照"].some(item=>evidence.includes(item));
}
function maskCreatorName(value){
 const state=VNStore.loadAuto()||{},player=state.playerName&&!state.temporaryName?state.playerName:"玩家";
 let output=String(value??"")
  .replaceAll("【玩家姓名】",player)
  .replaceAll("【輸入玩家姓名】",player)
  .replaceAll("「玩家姓名」",`「${player}」`)
  .replaceAll("互動者",player)
  .replaceAll("玩家",player);
 if(!creatorNameKnown())output=output.replaceAll("蘇璟辰","？？？");
 return output;
}
function unlock(collection,kind,name){
 const list=collection[kind];
 if(!Array.isArray(list)||!name||list.includes(name))return false;
 list.push(name);
 if(!Array.isArray(collection.newEntries))collection.newEntries=[];
 collection.newEntries.push(key(kind,name));
 return true;
}
function introPage(){return{title:"第十三冊",subtitle:"空白頁",html:'<div class="book-intro"><p>這本書</p><p>會記錄你所見的一切。</p></div>'}}
function lockedPage(kind,index){return{title:"██████",subtitle:`${kind.toUpperCase()} / ${String(index+1).padStart(2,"0")}`,locked:true,html:'<div class="redacted-block"><i></i><i></i><i></i><p>ACCESS DENIED</p></div>'}}
function characterPages(c){
 const unlocked=Array.isArray(c.characters)?c.characters:[];
 const state=VNStore.loadAuto()||{},player=state.playerName&&!state.temporaryName?state.playerName:"玩家";
 return DATABASE.characters.map((e,i)=>{
  if(e.id==="player")return unlocked.includes("player")?{id:"player",kind:"characters",title:escapeHtml(player),subtitle:"PLAYER FILE",isNew:c.newEntries.includes(key("characters","player")),html:`<div class="record-sheet"><div class="record-row"><span>身分</span><b>第十三冊的持有者</b></div><div class="record-row"><span>名字</span><b>${escapeHtml(player)}</b></div><div class="record-row"><span>狀態</span><b>仍在故事之中</b></div><hr><h4>介紹</h4><p>${escapeHtml(player)}進入老宅後，親眼見證黎靖、蘇璟辰與第十三冊留下的故事。所作的選擇會被書頁記錄，但不代表必須接受書中提供的答案。</p></div>`}:lockedPage("character",i);
  return unlocked.includes(e.id)?{id:e.id,kind:"characters",title:e.title,subtitle:"CHARACTER FILE",isNew:c.newEntries.includes(key("characters",e.id)),html:`<div class="record-sheet">${(e.fields||[]).map(x=>`<div class="record-row"><span>${x[0]}</span><b>${x[1]}</b></div>`).join("")}<hr><h4>介紹</h4><p>${e.description||""}</p></div>`}:lockedPage("character",i);
 });
}
function itemPages(c){const unlocked=Array.isArray(c.items)?c.items:[];const details=new Map(DATABASE.items.map(entry=>[entry.id,entry]));const entries=[...new Set([...CATALOG.items,...unlocked])].filter(id=>!details.get(id)?.temporary||unlocked.includes(id)).map(id=>details.get(id)||{id,chapter:"章節待確認",description:"已取得的劇情道具；來源章節與詳細描述尚待資料核對。"});return entries.map((e,i)=>{
 if(!unlocked.includes(e.id))return lockedPage("item",i);
 const state=VNStore.loadAuto()||{},truthUnlocked=state.metaFlags?.truthJudgmentUnlocked===true;
 const viewCount=Math.max(0,Number(state.metaFlags?.truthItemViews?.[e.id]||0));
 const versions=Array.isArray(e.versions)?e.versions:[];
 const version=truthUnlocked&&viewCount>0&&versions.length?versions[Math.min(viewCount,versions.length-1)]:null;
 const player=state.playerName&&!state.temporaryName?state.playerName:"玩家";
 const description=String(version?.description||e.description||"").replaceAll("玩家",player).replaceAll("互動者",player);
 return{id:e.id,kind:"items",title:e.id,subtitle:"ITEM RECORD",isNew:c.newEntries.includes(key("items",e.id)),hasTruthVersions:versions.length>0,html:`<div class="record-sheet"><div class="record-row"><span>取得章節</span><b>${escapeHtml(e.chapter)}</b></div><hr><h4>描述</h4><p>${escapeHtml(description)}</p></div>`};
})}
function infoPages(c){
 const unlocked=Array.isArray(c.information)?c.information:[];
 const variantValues=new Set([...CATALOG.informationVariants.values()].flat());
 const extras=unlocked.filter(id=>!variantValues.has(id)&&!CATALOG.information.includes(id));
 const entries=[...CATALOG.information,...extras];
 return entries.map((canonical,i)=>{
  const variants=CATALOG.informationVariants.get(canonical)||[canonical];
  const id=variants.find(value=>unlocked.includes(value));
  return id?{id,kind:"information",title:`情報 ${String(i+1).padStart(3,"0")}`,subtitle:"INFORMATION",isNew:c.newEntries.includes(key("information",id)),html:`<div class="record-sheet information-sheet"><p>${escapeHtml(maskCreatorName(id))}</p></div>`}:lockedPage("information",i);
 });
}
function endingPages(c){
 const unlocked=Array.isArray(c.endings)?c.endings:[];
 const details=new Map(DATABASE.endings.map(entry=>[entry.id,entry]));
 return CATALOG.endings.map((id,i)=>{
  if(!unlocked.includes(id))return lockedPage("ending",i);
  const entry=details.get(id)||{id,title:id,description:"已解鎖的結局。"};
  return{id,kind:"endings",title:id,subtitle:"ENDING RECORD",isNew:c.newEntries.includes(key("endings",id)),html:`<div class="record-sheet ending-sheet"><div class="record-row"><span>結局名稱</span><b>${escapeHtml(entry.title)}</b></div><hr><h4>描述</h4><p>${escapeHtml(maskCreatorName(entry.description))}</p></div>`};
 });
}
function statPages(){
 const state=VNStore.loadAuto()||{};
 const stats=[["黎靖好感度",state.affection],["蘇璟辰好感度",state.suAffinity],["調查度",state.investigation],["相信值",state.belief]];
 const descriptions={"黎靖好感度":"紫貓黎靖對玩家的親近與信任。","蘇璟辰好感度":"蘇璟辰對玩家的興趣、親近與信任。","調查度":"玩家掌握真實資料、辨認矛盾與保留未知的程度。","相信值":"玩家使謊言成真的傾向；過低代表完全拒絕相信，過高則可能失去判斷。"};
 const player=state.playerName&&!state.temporaryName?state.playerName:"玩家";
 return[{title:"目前數值",subtitle:"PLAYER STATUS",html:`<div class="completion-sheet stat-sheet">${stats.map(([label,value])=>{const number=Math.max(0,Math.min(100,Number(value)||0));return`<div class="completion-row"><div><span>${label}</span><b>${number}%</b></div><div class="completion-track"><span style="width:${number}%"></span></div><p>${escapeHtml(descriptions[label].replaceAll("玩家",player))}</p></div>`}).join("")}</div>`}];
}
function completionPages(c){const rows=[["人物",c.characters.length,CATALOG.characters.length],["道具",c.items.length,Math.max(CATALOG.items.length,c.items.length)],["情報",c.information.length,Math.max(CATALOG.information.length,c.information.length)],["結局",c.endings.length,Math.max(CATALOG.endings.length,c.endings.length)]];const now=rows.reduce((a,r)=>a+Math.min(r[1],r[2]),0),all=rows.reduce((a,r)=>a+r[2],0);return[{title:"收集率",subtitle:"ARCHIVE COMPLETION",html:`<div class="completion-sheet">${rows.map(r=>`<div class="completion-row"><div><span>${r[0]}</span><b>${r[1]} / ${r[2]}</b></div><div class="completion-track"><span style="width:${r[2]?Math.min(100,r[1]/r[2]*100):0}%"></span></div></div>`).join("")}<div class="completion-total">總完成度　${all?Math.round(now/all*100):0}%</div></div>`}]}
function buildPages(c,tab){if(tab==="characters")return characterPages(c);if(tab==="items")return itemPages(c);if(tab==="information")return infoPages(c);if(tab==="stats")return statPages();if(tab==="endings")return endingPages(c);return completionPages(c)}
function renderPage(page,side){
 if(!page)return'<div class="book-empty-page"></div>';
 return `<article class="book-record${page.locked?" locked":""}" data-kind="${escapeHtml(page.kind||"")}" data-id="${escapeHtml(page.id||"")}">${page.isNew?'<span class="book-new-badge">NEW</span>':""}<small>${maskCreatorName(page.subtitle||"")}</small><h3>${maskCreatorName(page.title)}</h3>${maskCreatorName(page.html||"")}<span class="page-corner">${side}</span></article>`;
}
function markSeen(c,page){if(!page?.kind||!page?.id)return;c.newEntries=c.newEntries.filter(x=>x!==key(page.kind,page.id));VNStore.saveCollection(c)}
function recordItemView(page,progress=null){
 if(page?.kind!=="items"||!page?.id||!page.hasTruthVersions)return false;
 const state=progress?.hasStarted===true?progress:VNStore.loadAuto();
 if(!state?.metaFlags?.truthJudgmentUnlocked)return false;
 if(!state.metaFlags.truthItemViews||typeof state.metaFlags.truthItemViews!=="object")state.metaFlags.truthItemViews={};
 const current=Math.max(0,Number(state.metaFlags.truthItemViews[page.id]||0));
 state.metaFlags.truthItemViews[page.id]=Math.min(3,current+1);
 VNStore.saveAuto(state);
 return true;
}
window.VNArchive={DATABASE,CATALOG,unlock,introPage,buildPages,renderPage,markSeen,recordItemView};
})();
