(()=>{
"use strict";
const nodes=window.CHAPTER_1.nodes;
// 第三章的玩家台詞不顯示「你」作為說話者標籤。
for(const [nodeId,commands] of Object.entries(nodes))if(nodeId.startsWith("ch3_"))for(const command of commands||[])for(const page of command.pages||[])if(page?.speaker==="你")page.speaker="";
const end="ch3_section_31";
const item=(name,extra=[])=>[
  {type:"effects",items:[{kind:"item",name},...extra]},
  {type:"jump",target:end}
];

nodes.ch3_section_31=[
  {type:"text",pages:[
    {text:"走到大門前，黎靖忽然問：",speaker:""},
    {text:"「你覺得他是什麼樣的人？」",speaker:"黎靖"},
    {text:"「誰？」",speaker:"你"},
    {text:"「那個孩子。」",speaker:"黎靖"},
    {text:"你知道他指的是從育幼院一路出現在高中記憶裡的白髮孩子。",speaker:""}
  ]},
  {type:"jump",target:"ch3_choice_35"}
];

nodes.ch3_choice_30=[
  {type:"section",title:"回收記憶道具"},
  {type:"text",pages:[{text:"先選擇要重新進入的記憶。進入後，再決定要帶回哪一件道具。",speaker:""}]},
  {type:"choice",options:[
    {label:"進入理髮店",next:"memory_shop"},
    {label:"進入國中辦公室",next:"memory_office"},
    {label:"進入高中頂樓",next:"memory_rooftop"}
  ]}
];

nodes.memory_shop=[
  {type:"section",title:"理髮店"},
  {type:"text",pages:[{text:"你回到鏡子前。桌面上留下染髮店收據與一盒自然棕色變色鏡片，你只能帶走其中一件。",speaker:""}]},
  {type:"choice",options:[
    {label:"回收「染髮店收據」",next:"memory_shop_receipt"},
    {label:"回收「自然棕色變色鏡片」",next:"memory_shop_lens"},
    {label:"返回選擇其他記憶",next:"ch3_choice_30"}
  ]}
];
nodes.memory_shop_receipt=item("染髮店收據");
nodes.memory_shop_lens=item("自然棕色變色鏡片",[{kind:"stat",key:"investigation",label:"調查度",amount:1}]);

nodes.memory_office=[
  {type:"section",title:"國中辦公室"},
  {type:"text",pages:[{text:"小房間裡沒有任何人。桌上放著熱熔膠條，電話旁留著切換過的廣播接頭，鐵椅底部則掉落一塊彎曲的金屬零件，你只能帶走其中一件。",speaker:""}]},
  {type:"choice",options:[
    {label:"回收「熱熔膠條」",next:"memory_office_glue"},
    {label:"回收「切換過的廣播接頭」",next:"memory_office_radio"},
    {label:"回收「彎曲的鐵椅零件」",next:"memory_office_chair"},
    {label:"返回選擇其他記憶",next:"ch3_choice_30"}
  ]}
];
nodes.memory_office_glue=item("熱熔膠條");
nodes.memory_office_radio=item("切換過的廣播接頭");
nodes.memory_office_chair=item("彎曲的鐵椅零件",[{kind:"stat",key:"investigation",label:"調查度",amount:2}]);

nodes.memory_rooftop=[
  {type:"section",title:"高中頂樓"},
  {type:"text",pages:[{text:"頂樓只剩被踩壞的畫冊，以及你先前取得的高中制服鈕扣。這次只能保留其中一件。",speaker:""}]},
  {type:"choice",options:[
    {label:"回收「被踩壞的畫冊」",next:"memory_rooftop_book"},
    {label:"保留「高中制服鈕扣」",next:"memory_rooftop_button"},
    {label:"返回選擇其他記憶",next:"ch3_choice_30"}
  ]}
];
nodes.memory_rooftop_book=item("被踩壞的畫冊",[{kind:"removeItem",name:"高中制服鈕扣"}]);
nodes.memory_rooftop_button=item("高中制服鈕扣");

// 不論第一章選擇哪一種自我介紹方式，只要走完「空屋的住戶」並
// 確認對方名為黎靖，就必須解鎖人物頁。原劇本只在反問姓名的分支寫入。
const residentsExit=nodes.residents?.findIndex(command=>command.type==="jump")??-1;
if(residentsExit>=0){
 nodes.residents.splice(residentsExit,0,{type:"effects",items:[{kind:"character",name:"黎靖"}]});
}

// 國中辦公室：選項②、③才開啟救護車段落。
// 剪報則必須從辦公室一路完整觀看救護車事件，期間未啟用 SKIP。
for(const nodeId of ["ch3_option_14","ch3_option_15"]){
 nodes[nodeId]?.unshift({type:"effects",items:[
  {kind:"flag",name:"ambulanceUnlocked"},
  {kind:"watchGateStart",name:"officeAmbulance"}
 ]});
}
nodes.ch3_section_12=[
 {type:"condition",test:{kind:"flag",name:"ambulanceUnlocked"},yes:"ch3_section_16",no:"ch3_section_17"}
];
const ambulanceExit=nodes.ch3_section_16?.findIndex(command=>command.type==="jump")??-1;
if(ambulanceExit>=0){
 nodes.ch3_section_16.splice(ambulanceExit,0,{type:"effects",items:[
  {kind:"watchGateReward",name:"officeAmbulance",item:"被停職教師的剪報"}
 ]});
}

// 第四章紙箱收件人永遠使用玩家正式登錄的姓名。
// 若前面仍以「陌生人」作為暫稱，先完成姓名輸入再顯示紙箱。
nodes.ch4_section_3=[
 {type:"condition",test:"hasPlayerName",yes:"ch4_section_7",no:"ch4_box_require_name"}
];
nodes.ch4_box_require_name=[
 {type:"input",key:"playerName",title:"請輸入玩家姓名"},
 {type:"jump",target:"ch4_section_7"}
];
const boxText=nodes.ch4_section_7?.find(command=>command.type==="text");
if(boxText){
const recipient=boxText.pages.find(page=>page.text==="給【玩家姓名】");
 if(recipient)recipient.text="給【玩家姓名】";
}

// 選項畫面直接顯示按鈕，不先播放製作用的選項標題。
nodes.ch4_choice_28=(nodes.ch4_choice_28||[]).filter(command=>command.type!=="section");

// 「若原稿完整／被撕毀」是條件規則，只顯示符合玩家道具狀態的台詞。
const originalReport=nodes.ch4_option_31||[];
const originalReportText=originalReport.find(command=>command.type==="text");
if(originalReportText){
 const pages=originalReportText.pages||[];
 const intactRuleIndex=pages.findIndex(page=>page.text==="若原稿完整：");
 const tornLineIndex=pages.findIndex(page=>page.text==="「你把它撕碎了。」");
 if(intactRuleIndex>=0&&tornLineIndex>=0){
  const prefix=pages.slice(0,intactRuleIndex);
  const tail=pages.slice(tornLineIndex+1);
  nodes.ch4_option_31=[
   {type:"text",pages:prefix},
   {type:"condition",test:{kind:"hasItem",name:"被撕碎的原稿"},yes:"ch4_report_torn",no:"ch4_report_intact"}
  ];
  nodes.ch4_report_intact=[
   {type:"text",pages:[{text:"「你想把原稿拿走，但我阻止了。」",speaker:"你"}]},
   {type:"jump",target:"ch4_report_after_state"}
  ];
  nodes.ch4_report_torn=[
   {type:"text",pages:[{text:"「你把它撕碎了。」",speaker:"你"}]},
   {type:"jump",target:"ch4_report_after_state"}
  ];
  nodes.ch4_report_after_state=[
   {type:"text",pages:tail},
   ...originalReport.filter(command=>command!==originalReportText)
  ];
 }
}

// 「未丟掉的垃圾」只保留到第二章結束，之後從持有道具與第十三冊移除。
for(const commands of Object.values(nodes)){
 const chapterEndIndex=commands.findIndex(command=>command.type==="chapterEnd"&&command.chapterTitle==="第二章｜會改變的房間");
 if(chapterEndIndex>=0){
  commands.splice(chapterEndIndex,0,{type:"effects",items:[
   {kind:"removeItem",name:"未丟掉的垃圾",removeFromArchive:true}
  ]});
  break;
 }
}

// 第四章：資料頁選項與本名判定。
// 劇本裡的「如果玩家……」是系統規則，不能作為玩家可見文本。
const fullNameTest={kind:"any",tests:[
 {kind:"hasItem",name:"寫有本名的資料頁"},
 {kind:"hasItem",name:"顯示本名的損壞截圖"},
 {kind:"hasItem",name:"黑貓的死亡紀錄"},
 {kind:"hasItem",name:"蘇璟辰與黑貓的合照"}
]};

nodes.ch4_choice_34=[
 {type:"choice",options:[
  {displayNumber:1,label:"用「被擦除的調查筆記」拓印",requiresItem:"被擦除的調查筆記",next:"ch4_option_36"},
  {displayNumber:2,label:"使用「空白的搜尋截圖」覆蓋墨跡",requiresItem:"空白的搜尋截圖",next:"ch4_option_37"},
  {displayNumber:3,label:"直接撕下被墨水覆蓋的部分",next:"ch4_option_38"}
 ]}
];

nodes.ch4_option_36=[
 {type:"text",pages:[
  {text:"你將調查筆記墊在資料頁上，用鉛筆輕輕塗過。被墨水覆蓋的姓名無法直接顯現，但筆尖逐漸描出紙張上原本的書寫凹痕。",speaker:""},
  {text:"蘇璟辰",speaker:""},
  {text:"最後一筆出現的瞬間，儲藏室裡所有資料夾同時掉落，黑色墨水從四面八方向你湧來，黎靖立刻抓住資料頁，帶著你退向門外。茶水形成的門在身後關閉，只差一點便將那個名字再次吞沒。",speaker:""},
  {text:"正式取得人物情報：「蘇璟辰」",speaker:"SYSTEM"}
 ]},
 {type:"effects",items:[
  {kind:"stat",key:"investigation",label:"調查度",amount:3},
  {kind:"item",name:"寫有本名的資料頁"}
 ]},
 {type:"jump",target:"ch4_section_35"}
];

nodes.ch4_option_37=[
 {type:"text",pages:[
  {text:"你將手機放到資料頁上，螢幕原本一片空白，靠近墨水後卻逐漸浮現文字，先是「蘇」，接著是中間的「璟」，最後一個字出現得最慢。",speaker:""},
  {text:"辰",speaker:""},
  {text:"完整姓名停留不到三秒，手機螢幕便浮現裂痕，你立刻將名字記進備忘錄，這次文字沒有遭到刪除。",speaker:""},
  {text:"正式取得人物情報：「蘇璟辰」",speaker:"SYSTEM"}
 ]},
 {type:"effects",items:[
  {kind:"stat",key:"investigation",label:"調查度",amount:3},
  {kind:"item",name:"顯示本名的損壞截圖"}
 ]},
 {type:"jump",target:"ch4_section_35"}
];

// 本名正式顯現的頁面本身就是解鎖點；在此之前所有完整本名都必須遮蔽。
for(const command of nodes.ch4_option_36||[])for(const page of command.pages||[])if(page.text==="蘇璟辰")page.revealsCreatorName=true;
for(const command of nodes.ch4_option_37||[])for(const page of command.pages||[])if(page.text==="辰")page.revealsCreatorName=true;

// 只有直接撕下資料頁的路線會留下殘缺姓名，等待下一章以其他道具補全。
const partialNameEffects=nodes.ch4_option_38?.find(command=>command.type==="effects");
if(partialNameEffects&&!partialNameEffects.items.some(effect=>effect.kind==="flag"&&effect.name==="漫畫家本名待補全")){
 partialNameEffects.items.push({kind:"flag",name:"漫畫家本名待補全"});
}

// 第五章：若第四章只取得「蘇＿辰」，必須實際找到另一份證據才補全本名。
// 這些條件是系統規則，不作為旁白或系統通知顯示。
nodes.ch5_section_3=[
 {type:"condition",test:{kind:"all",tests:[
  {kind:"flag",name:"漫畫家本名待補全"},
  {kind:"any",tests:[
   {kind:"hasItem",name:"黑貓的死亡紀錄"},
   {kind:"hasItem",name:"蘇璟辰與黑貓的合照"}
  ]}
 ]},yes:"ch5_name_completion_source",no:"ch5_section_7"}
];

nodes.ch5_name_completion_source=[
 {type:"condition",test:{kind:"hasItem",name:"黑貓的死亡紀錄"},yes:"ch5_name_completion_record",no:"ch5_name_completion_photo"}
];

nodes.ch5_name_completion_record=[
 {type:"text",pages:[
  {text:"你重新取出那張只剩下兩個字的殘缺資料頁，將它放在動物醫院的醫療紀錄旁。",speaker:""},
  {text:"資料頁上寫著「蘇＿辰」，醫療紀錄的飼主欄則留下了完整姓名。兩份資料的姓氏與最後一個字完全相同。",speaker:""},
  {text:"你沿著飼主欄逐字比對，終於補上被刀片刮去的中間一字。",speaker:""},
  {text:"蘇璟辰",speaker:"",revealsCreatorName:true},
  {text:"這一次，姓名沒有再次消失。",speaker:""}
 ]},
 {type:"notice",page:{text:"獲得人物情報：「蘇璟辰」",speaker:""}},
 {type:"effects",items:[
  {kind:"flag",name:"漫畫家本名已補全"},
  {kind:"character",name:"蘇璟辰"}
 ]},
 {type:"jump",target:"ch5_section_7"}
];

nodes.ch5_name_completion_photo=[
 {type:"text",pages:[
  {text:"你重新取出那張只剩下兩個字的殘缺資料頁，將它放在剛才取得的合照旁。",speaker:""},
  {text:"資料頁上寫著「蘇＿辰」，照片右下角則留著完整署名。兩處字跡的姓氏與最後一個字完全相同。",speaker:""},
  {text:"你循著照片上的署名，終於補上被刀片刮去的中間一字。",speaker:""},
  {text:"蘇璟辰",speaker:"",revealsCreatorName:true},
  {text:"這一次，姓名沒有再次消失。",speaker:""}
 ]},
 {type:"notice",page:{text:"獲得人物情報：「蘇璟辰」",speaker:""}},
 {type:"effects",items:[
  {kind:"flag",name:"漫畫家本名已補全"},
  {kind:"character",name:"蘇璟辰"}
 ]},
 {type:"jump",target:"ch5_section_7"}
];

// 這些段落裡的「？？？」實際說話者已確定為蘇璟辰。
// 寫入真實身分後交由引擎依本名解鎖狀態遮蔽，避免解鎖後仍顯示問號。
const dynamicCreatorSpeakerNodes=new Set([
 "hall","chapter2_start","chapter2_changed_drawing",
 "ch3_section_9","ch3_section_23",
 "ch4_section_21","ch4_option_25","ch4_option_26","ch4_section_41",
 "ch4_option_44","ch4_option_45","ch4_option_46","chapter5_start"
]);
for(const nodeId of dynamicCreatorSpeakerNodes){
 for(const command of nodes[nodeId]||[]){
  for(const page of command.pages||[]){
   if(page.speaker==="？？？")page.speaker="蘇璟辰";
  }
 }
}

// 第八章此處已能由病歷與對話確認身分，直接標示職稱。
for(const command of nodes.ch8_s6||[]){
 for(const page of command.pages||[]){
  if(page.speaker==="？？？")page.speaker="編輯";
 }
}

// 第四章結算情報依實際取得的姓名線索顯示，不能用完整姓名提前暴雷。
for(const commands of Object.values(nodes)){
 const chapterEnd=(commands||[]).find(command=>command.type==="chapterEnd"&&command.chapterTitle==="第四章｜兩個黎靖");
 if(!chapterEnd)continue;
 chapterEnd.info=[
  "曾有一名筆名為「黎靖」的暢銷漫畫家。",
  "漫畫家本名為蘇璟辰。",
  "蘇璟辰死亡時二十七歲。",
  "死亡日期為十月十二日。",
  "他在山區取材時墜落，頸部重創並因大量失血死亡。",
  "蘇璟辰生前將白髮染成粉色。",
  "蘇璟辰極少公開露面，過去的照片與本名資料遭到異常力量抹除。",
  "蘇璟辰可能飼養過一隻名叫黎靖的黑貓。",
  "漫畫家蘇璟辰與紫貓黎靖使用相同的名字。",
  "黎靖不記得蘇璟辰，也不知道自己名字的由來。",
  "有另一個意識能透過黎靖觀察及接觸玩家。",
  "對方控制黎靖時，黎靖會完全失去意識。",
  "接管者同樣聲稱自己名叫「黎靖」，但本名可能是蘇璟辰。",
  "黎靖的外貌特徵可能受到蘇璟辰影響，頸部繃帶並非黎靖自身的傷口。",
  "黎靖可能是失去記憶的蘇璟辰、獨立存在，或由蘇璟辰創造的角色。",
  "正確答案尚未完全確認。",
  "關鍵推論：老宅裡存在「兩個黎靖」。",
  "蘇璟辰似乎曾短暫察覺畫面之外的玩家。"
 ];
 chapterEnd.infoPartial=[
  "曾有一名筆名為「黎靖」的暢銷漫畫家。",
  "目前只能確認漫畫家的姓名為「蘇＿辰」。",
  "那名漫畫家死亡時二十七歲。",
  "死亡日期為十月十二日。",
  "他在山區取材時墜落，頸部重創並因大量失血死亡。",
  "那名漫畫家生前將白髮染成粉色。",
  "那名漫畫家極少公開露面，過去的照片與本名資料遭到異常力量抹除。",
  "那名漫畫家可能飼養過一隻名叫黎靖的黑貓。",
  "那名漫畫家與紫貓黎靖使用相同的名字。",
  "黎靖不記得那名漫畫家，也不知道自己名字的由來。",
  "有另一個意識能透過黎靖觀察及接觸玩家。",
  "對方控制黎靖時，黎靖會完全失去意識。",
  "接管者同樣聲稱自己名叫「黎靖」，但本名可能是蘇＿辰。",
  "黎靖的外貌特徵可能受到那名漫畫家影響，頸部繃帶並非黎靖自身的傷口。",
  "黎靖可能是失去記憶的蘇＿辰、獨立存在，或由那名漫畫家創造的角色。",
  "正確答案尚未完全確認。",
  "關鍵推論：老宅裡存在「兩個黎靖」。",
  "那名漫畫家似乎曾短暫察覺畫面之外的玩家。"
 ];
 break;
}

nodes.ch4_section_39=[
 {type:"section",title:"真正的誤解"},
 {type:"condition",test:fullNameTest,yes:"ch4_name_summary_full",no:"ch4_name_summary_partial"}
];
nodes.ch4_name_summary_full=[
 {type:"text",pages:[
  {text:"離開儲藏室後，你將目前得到的所有資訊排列在客廳桌面。已故漫畫家的筆名是黎靖，本名是蘇璟辰。",speaker:""},
  {text:"他死於十月十二日，死亡時二十七歲，死因是山區墜落、頸部重創與大量失血。他生前可能養過一隻名叫黎靖的黑貓，而現在，老宅裡存在一隻同樣名叫黎靖的紫貓。紫貓可以變成人形，人形頸部纏著與蘇璟辰死因相符的繃帶；蘇璟辰的意識，或某個自稱黎靖的存在，還能透過紫貓的身體觀察外界。所有線索似乎都指向一個最簡單的答案。",speaker:""},
  {text:"黎靖就是死後的蘇璟辰。",speaker:""}
 ]},
 {type:"jump",target:"ch4_identity_doubt_full"}
];
nodes.ch4_name_summary_partial=[
 {type:"text",pages:[
  {text:"離開儲藏室後，你將目前得到的所有資訊排列在客廳桌面。已故漫畫家的筆名是黎靖，至少可以確認本名姓蘇、名字以辰結尾。",speaker:""},
  {text:"他死於十月十二日，死亡時二十七歲，死因是山區墜落、頸部重創與大量失血。他生前可能養過一隻名叫黎靖的黑貓，而現在，老宅裡存在一隻同樣名叫黎靖的紫貓。紫貓可以變成人形，人形頸部纏著與那名漫畫家死因相符的繃帶；死者的意識，或某個自稱黎靖的存在，還能透過紫貓的身體觀察外界。所有線索似乎都指向一個最簡單的答案。",speaker:""},
  {text:"黎靖就是死後的蘇＿辰。",speaker:""}
 ]},
 {type:"jump",target:"ch4_identity_doubt_partial"}
];
const identityDoubtTail=[
 {text:"「那你記得自己生前的事嗎？」",speaker:"你"},
 {text:"黎靖沒有回答。",speaker:""},
 {text:"「你有生前嗎？」",speaker:"你"},
 {text:"他的手指微微收緊，這個問題顯然觸及了某個他從未認真思考的部分。",speaker:""},
 {text:"「我一直都在這裡。」",speaker:"黎靖"},
 {text:"「從什麼時候開始？」",speaker:"你"},
 {text:"「不知道。」",speaker:"黎靖"},
 {text:"「你第一次醒來的地方呢？」",speaker:"你"},
 {text:"「老宅。」",speaker:"黎靖"},
 {text:"「當時有人陪你嗎？」",speaker:"你"},
 {text:"黎靖沉默了很久。",speaker:""},
 {text:"「有。」",speaker:"黎靖"},
 {text:"「誰？」",speaker:"你"},
 {text:"他的頭緩慢轉向客廳深處，那裡原本只有一面掛滿畫框的牆，此刻，牆上卻多出了一幅你們從未見過的畫。",speaker:""}
];
nodes.ch4_identity_doubt_full=[
 {type:"text",pages:[
  {text:"但這個答案存在太多無法解釋的地方。如果黎靖就是蘇璟辰，他為什麼不記得漫畫？為什麼不認識自己的本名？為什麼會在另一個意識出現時完全失去記憶？又為什麼那個控制他的人，也聲稱自己名叫黎靖？",speaker:""},
  {text:"你看向站在桌邊的黎靖，他同樣在看那些資料。",speaker:""},
  {text:"「你真的完全不記得蘇璟辰嗎？」",speaker:"你"},
  {text:"「不記得。」",speaker:"黎靖"},
  ...identityDoubtTail
 ]},
 {type:"jump",target:"ch4_section_40"}
];
nodes.ch4_identity_doubt_partial=[
 {type:"text",pages:[
  {text:"但這個答案存在太多無法解釋的地方。如果黎靖就是蘇＿辰，他為什麼不記得漫畫？為什麼不認識自己的本名？為什麼會在另一個意識出現時完全失去記憶？又為什麼那個控制他的人，也聲稱自己名叫黎靖？",speaker:""},
  {text:"你看向站在桌邊的黎靖，他同樣在看那些資料。",speaker:""},
  {text:"「你真的完全不記得蘇＿辰嗎？」",speaker:"你"},
  {text:"「不記得。」",speaker:"黎靖"},
  ...identityDoubtTail
 ]},
 {type:"jump",target:"ch4_section_40"}
];

const picturePages=nodes.ch4_section_40.find(command=>command.type==="text").pages;
const pictureFullIndex=picturePages.findIndex(page=>page.text==="蘇璟辰");
const picturePartialIndex=picturePages.findIndex(page=>page.text==="蘇＿辰");
const picturePrefix=picturePages.slice(0,pictureFullIndex);
const pictureSuffix=picturePages.slice(picturePartialIndex+1);
nodes.ch4_section_40=[
 {type:"section",title:"畫裡的兩個黎靖"},
 {type:"text",pages:picturePrefix},
 {type:"condition",test:fullNameTest,yes:"ch4_picture_name_full",no:"ch4_picture_name_partial"}
];
nodes.ch4_picture_name_full=[
 {type:"text",pages:[{text:"蘇璟辰",speaker:""}]},
 {type:"jump",target:"ch4_picture_name_tail"}
];
nodes.ch4_picture_name_partial=[
 {type:"text",pages:[{text:"蘇＿辰",speaker:""}]},
 {type:"jump",target:"ch4_picture_name_tail"}
];
nodes.ch4_picture_name_tail=[
 {type:"text",pages:pictureSuffix},
 {type:"jump",target:"ch4_section_41"}
];

const nameCallChoice=nodes.ch4_choice_42?.find(command=>command.type==="choice");
if(nameCallChoice){
 const option=nameCallChoice.options.find(entry=>entry.next==="ch4_option_46");
 if(option)option.requiresAnyItems=["寫有本名的資料頁","顯示本名的損壞截圖"];
}

// 第四章尚未完整取得本名時，不得由後續旁白或對話提前洩漏。
// 這些頁面在顯示時由引擎依玩家持有的姓名證據解析。
for(const nodeId of ["ch4_section_41","ch4_section_47","ch4_section_48","ch4_option_53","ch4_section_54"]){
 for(const command of nodes[nodeId]||[]){
  for(const page of command.pages||[]){
   page.text=String(page.text||"").replaceAll("蘇璟辰","【漫畫家本名】");
  }
 }
}

// 姓名確認段落只播放符合目前線索的分支；條件標籤是製作註記，不能顯示給玩家。
nodes.ch4_section_48=[
 {type:"text",pages:[
  {text:"離開以前，你最後一次向黎靖確認：",speaker:""},
  {text:"「現在有兩個使用黎靖這個名字的存在。」",speaker:"你"},
  {text:"「嗯。」",speaker:"黎靖"},
  {text:"「一個是你。」",speaker:"你"},
  {text:"「嗯。」",speaker:"黎靖"},
  {text:"「另一個是【漫畫家本名】。」",speaker:"你"},
  {text:"黎靖看向你。",speaker:""},
  {text:"「你已經確定他叫【漫畫家本名】？」",speaker:"黎靖"}
 ]},
 {type:"condition",test:fullNameTest,yes:"ch4_name_confirm_full",no:"ch4_name_confirm_partial"}
];
nodes.ch4_name_confirm_full=[
 {type:"text",pages:[{text:"「資料頁和畫裡都出現了這個名字。」",speaker:"你"}]},
 {type:"jump",target:"ch4_name_confirm_tail"}
];
nodes.ch4_name_confirm_partial=[
 {type:"text",pages:[{text:"「至少可以確定他姓蘇，名字最後一個字是辰。」",speaker:"你"}]},
 {type:"jump",target:"ch4_name_confirm_tail"}
];
nodes.ch4_name_confirm_tail=[
 {type:"text",pages:[{text:"「那你覺得，我和他是什麼關係？」",speaker:"黎靖"}]},
 {type:"jump",target:"ch4_choice_49"}
];
for(const command of nodes.ch4_choice_49||[]){
 for(const option of command.options||[]){
  option.label=String(option.label||"").replaceAll("蘇璟辰","【漫畫家本名】");
 }
}

// 劇本製作註記不得直接成為旁白。需要保留的道具反應改為真正的頁面條件。
const itemPageRules=[
 ["chapter5_start","若持有「黑色貓毛」，貓毛會緩慢變成紫色。","黑色貓毛","貓毛緩慢變成紫色。"],
 ["chapter5_start","若持有「未完成的原稿」，畫中的黑貓會從蘇璟辰膝上消失，出現在設定表的空白處。","未完成的原稿","畫中的黑貓從蘇璟辰膝上消失，出現在設定表的空白處。"],
 ["chapter5_start","若持有「被撕碎的原稿」，散落的碎片會自行移動，勉強拼成一隻缺少頭部的貓。","被撕碎的原稿","散落的碎片自行移動，勉強拼成一隻缺少頭部的貓。"]
];
for(const [nodeId,original,item,text] of itemPageRules){
 for(const command of nodes[nodeId]||[])for(const page of command.pages||[])if(page.text===original){page.text=text;page.requiresItem=item;}
}
for(const command of nodes.chapter5_start||[])for(const page of command.pages||[]){
 if(page.text==="無論玩家持有哪些道具，人物設定最後一欄都會慢慢浮現一個字。")page.text="人物設定最後一欄慢慢浮現一個字。";
}

// 第四章原稿狀態依玩家先前是否撕毀原稿切換用詞。
for(const command of nodes.ch4_section_27||[])if(command.type==="text"){
 const index=command.pages.findIndex(page=>page.text==="黎靖看向地上的原稿或碎片。");
 if(index>=0)command.pages.splice(index,1,
  {text:"黎靖看向地上的碎片。",speaker:"",requiresItem:"被撕碎的原稿"},
  {text:"黎靖看向地上的原稿。",speaker:"",hiddenIfItem:"被撕碎的原稿"}
 );
}

// 第四章時間紀錄只在持有對應道具時出現。
for(const command of nodes.chapter4_start||[])if(command.type==="text"){
 const marker=command.pages.findIndex(page=>page.text==="如果玩家取得了該道具，紙上會在原有的時間下方多出一行新字。");
 if(marker>=0){command.pages.splice(marker,1);for(const page of command.pages.slice(marker,marker+2))page.requiresItem="黎靖的時間紀錄";}
}

// 第六章病歷外觀依第五章取得的病歷版本顯示。
for(const command of nodes.ch6_white||[])if(command.type==="text"){
 const pages=command.pages;
 const did=pages.findIndex(page=>page.text==="若玩家先前相信DID診斷，封面會清楚寫著：");
 if(did>=0){pages.splice(did,1);for(const page of pages.slice(did,did+2))page.requiresItem="覆寫為DID的精神科病歷";}
 const traces=pages.find(page=>page.text==="若玩家曾檢查覆寫痕跡，診斷欄邊緣便會出現重複書寫的痕跡，底下隱約透出原始文字。");
 if(traces){traces.text="診斷欄邊緣出現重複書寫的痕跡，底下隱約透出原始文字。";traces.requiresItem="有重寫痕跡的精神科病歷";}
 const asked=pages.findIndex(page=>page.text==="若玩家直接詢問過蘇璟辰，封面右下角則會多出一句手寫文字：");
 if(asked>=0){pages.splice(asked,1);if(pages[asked])pages[asked].requiresItem="真實性未明的精神科病歷";}
}

const directNarration=new Map([
 ["若黎靖選擇繼續觀看，","黎靖選擇繼續觀看。"],
 ["若玩家曾取得「未命名角色親筆設定」，","你先前取得了「未命名角色親筆設定」。"],
 ["若玩家同時達成「拒絕作答」、「警惕主動提供的答案」及「存在不由相信者所有」，","你沒有碰觸任何一張結局頁。"],
 ["若玩家選擇開門，","你選擇打開門。"],
 ["若玩家仍選擇擦除，","你仍然選擇擦除。"],
 ["若玩家曾取得「標明推測者的續寫文件」，","你取出先前取得的「標明推測者的續寫文件」。"],
 ["若選擇「病歷沒有這樣寫」，","你選擇否定病歷上的推論。"],
 ["若玩家長時間不選，","你遲遲沒有作出選擇。"],
 ["若你允許他進來，","你允許他進入房間後，"]
]);
const productionOnly=/^(?:若|如果玩家|玩家可以|無論玩家|未命名角色是否同行|選擇第一項時|選擇第二項時).*(?:：|。)$/;
for(const commands of Object.values(nodes))for(const command of commands||[])if(command.type==="text"){
 const cleaned=[];
 for(const page of command.pages||[]){
  let replaced=false;
  for(const [prefix,replacement] of directNarration)if(String(page.text||"").startsWith(prefix)){page.text=replacement+page.text.slice(prefix.length);replaced=true;break;}
  if(!replaced&&productionOnly.test(String(page.text||"").trim()))continue;
  cleaned.push(page);
 }
 command.pages=cleaned;
}

// 選項與條件用的製作標題不是章節／場景名稱，不顯示章節轉場。
for(const [nodeId,commands] of Object.entries(nodes)){
 nodes[nodeId]=(commands||[]).filter(command=>{
  if(command.type!=="section")return true;
  const title=String(command.title||"");
  if(/^第[一二三四五六七八九十]+章[｜|]/.test(title))return true;
  return !/(?:是否.*觀看|選項|選擇)$|選項[｜：]|(?:對話|事件)$|判定(?:｜|$)|數值規則|【系統提示】|好感度分歧|章末(?:對話|選項)|(?:道具|車票|劇院|人物設定|複製體|死亡記憶|作者署名|房門|夜間)選項/.test(title);
 });
}

// 真實判定教學以專用的中央阻擋視窗呈現。道具版本仍保留在資料庫，
// 但不把範例或製作說明逐頁播放給玩家。
nodes.ch6_truth_system=[
 {type:"truthUnlock"},
 {type:"jump",target:"ch6_trust"}
];

// 第七章城市調查：三個地點必須由玩家選擇，而不是依序強制播放。
// 一般路線調查兩處；調查度達 30 時可以補查第三處。
nodes.ch7_s5=[
 {type:"text",pages:[{text:"城市中央浮現三個可進入的區域。",speaker:""}]},
 {type:"choice",options:[
  {label:"沒有列車的車站",hiddenIfFlag:"已調查沒有列車的車站",next:"ch7_s6"},
  {label:"不斷謝幕的劇院",hiddenIfFlag:"已調查不斷謝幕的劇院",next:"ch7_s8"},
  {label:"保存廢稿的圖書館",hiddenIfFlag:"已調查保存廢稿的圖書館",next:"ch7_s10"}
 ]}
];

for(const [nodeId,flag] of [
 ["ch7_s6","已調查沒有列車的車站"],
 ["ch7_s8","已調查不斷謝幕的劇院"],
 ["ch7_s10","已調查保存廢稿的圖書館"]
]){
 const commands=nodes[nodeId]||[];
 if(!commands.some(command=>command.type==="effects"&&(command.items||[]).some(effect=>effect.kind==="flag"&&effect.name===flag))){
  commands.unshift({type:"effects",items:[{kind:"flag",name:flag}]});
 }
}

// 車站內的五張票券是五個獨立選項，不是合併成一行的旁白。
const stationText=nodes.ch7_s6?.find(command=>command.type==="text");
if(stationText){
 stationText.pages=(stationText.pages||[]).filter((page,index)=>index===0||index>=9);
}
nodes.ch7_s7=[{type:"choice",options:[
 {displayNumber:1,label:"回到老宅",next:"ch7_s7_b1"},
 {displayNumber:2,label:"前往故事結局",next:"ch7_s7_b4"},
 {displayNumber:3,label:"尋找蘇璟辰",next:"ch7_s7_b2"},
 {displayNumber:4,label:"拯救城市",next:"ch7_s7_b5"},
 {displayNumber:5,label:"永遠留在這裡",next:"ch7_s7_b6"}
]}];

nodes.ch7_s7_b4=[
 {type:"text",pages:[
  {text:"你碰向「前往故事結局」，票券翻到背面。",speaker:""},
  {text:"使用條件：接受作者安排。",speaker:""},
  {text:"未命名角色盯著那行字，沒有伸手。",speaker:""},
  {text:"「如果接受，故事就會照原本的方式結束。」",speaker:"未命名角色"},
  {text:"票券停在半空，等待你們同意早已寫好的結局。",speaker:""}
 ]},
 {type:"jump",target:"ch7_location_return"}
];
nodes.ch7_s7_b5=[
 {type:"text",pages:[
  {text:"你碰向「拯救城市」，票券翻到背面。",speaker:""},
  {text:"使用條件：由玩家代替未命名角色成為主角。",speaker:""},
  {text:"票面上的「被拯救者」仍指向未命名角色，你的名字卻開始出現在原本屬於主角的位置。",speaker:""},
  {text:"黎靖伸手壓住票券，沒有讓名字繼續成形。",speaker:""}
 ]},
 {type:"jump",target:"ch7_location_return"}
];
nodes.ch7_s7_b6=[
 {type:"text",pages:[
  {text:"你碰向「永遠留在這裡」，票券沒有翻面。",speaker:""},
  {text:"它沒有使用條件，也沒有寫下離開的方法。",speaker:""},
  {text:"月台遠處傳來看不見的列車聲，票面上的目的地始終停在這座城市。",speaker:""},
  {text:"「最容易使用的，通常最難回來。」",speaker:"黎靖"}
 ]},
 {type:"jump",target:"ch7_location_return"}
];

for(const id of ["ch7_s7_b1","ch7_s7_b2","ch7_s7_b3","ch7_s9_b1","ch7_s9_b2","ch7_s9_b3","ch7_s9_b4"]){
 const jump=(nodes[id]||[]).find(command=>command.type==="jump");
 if(jump)jump.target="ch7_location_return";
}
const libraryExit=(nodes.ch7_s12||[]).find(command=>command.type==="jump");
if(libraryExit)libraryExit.target="ch7_location_return";

const allLocations={kind:"all",tests:[
 {kind:"flag",name:"已調查沒有列車的車站"},
 {kind:"flag",name:"已調查不斷謝幕的劇院"},
 {kind:"flag",name:"已調查保存廢稿的圖書館"}
]};
const twoLocations={kind:"any",tests:[
 {kind:"all",tests:[{kind:"flag",name:"已調查沒有列車的車站"},{kind:"flag",name:"已調查不斷謝幕的劇院"}]},
 {kind:"all",tests:[{kind:"flag",name:"已調查沒有列車的車站"},{kind:"flag",name:"已調查保存廢稿的圖書館"}]},
 {kind:"all",tests:[{kind:"flag",name:"已調查不斷謝幕的劇院"},{kind:"flag",name:"已調查保存廢稿的圖書館"}]}
]};
nodes.ch7_location_return=[{type:"condition",test:allLocations,yes:"ch7_s13",no:"ch7_location_two_check"}];
nodes.ch7_location_two_check=[{type:"condition",test:twoLocations,yes:"ch7_location_investigation_check",no:"ch7_s5"}];
nodes.ch7_location_investigation_check=[{type:"condition",test:{kind:"statAtLeast",key:"investigation",value:30},yes:"ch7_s5",no:"ch7_s13"}];

// 第七章章末情報。原始結算節點為空，依正式劇本補回完整清單。
const chapter7End=(nodes.ch7_end||[]).find(command=>command.type==="chapterEnd");
if(chapter7End)chapter7End.info=[
 "陌生城市是蘇璟辰未完成漫畫第十二冊中的世界。",
 "城市居民長期被困在固定分鏡與重複動作裡。",
 "黑色植物由遭刪除的台詞、設定與廢棄情節形成。",
 "遭刪除的內容不一定消失，仍可能在故事邊界外重新出現。",
 "未命名角色是故事中唯一逐漸察覺選項存在的人。",
 "稿紙背面的提示並非蘇璟辰所寫，而是未命名角色送往故事外的文字。",
 "蘇璟辰發現提示後，才故意將稿紙送給玩家與黎靖。",
 "黎靖不是第七章唯一的引導者。",
 "系統可以在玩家沒有主動操作時，自行判定選項成立。",
 "所有可見選項可能共享同一項未被說明的前提。",
 "拒絕選項不等於什麼都不做。",
 "選項遮蔽的空白處，可能存在未被列出的行動。",
 "讀者對結局的期待也能形成「相信」，使特定情節逐漸成為現實。",
 "善意改寫角色命運，仍可能形成新的控制。",
 "摧毀故事可以解除規則，也可能同時摧毀依附故事存在的生命。",
 "黎靖曾考慮讓角色拒絕劇本，但沒有將該版本正式完成。",
 "未完成不一定等於失敗，也可能讓故事保留繼續變化的可能。",
 "即使是反抗作者的選項，也可能早已存在於作者預想之中。",
 "玩家開始察覺，自己的行動可能同樣位於某一層更大的故事裡。",
 "漫畫世界外出現一名未知人影，其身分與蘇璟辰不同。",
 "尚未發生的第十三冊，可能由玩家親自完成。"
];

// 章末製作用的數值浮動範圍不屬於玩家情報，所有章節一律移除。
const chapterRangeSummary=/^(?:黎靖好感度|蘇璟辰好感度|蘇璟辰理解度|調查度|相信值|蘇璟辰控制值|作品完成度|界線值)\s*[＋+－−-]?\d+%?\s*～\s*[＋+－−-]?\d+%?$/;
for(const commands of Object.values(nodes)){
 for(const command of commands||[]){
  if(command.type==="chapterEnd"&&Array.isArray(command.info))command.info=command.info.filter(entry=>!chapterRangeSummary.test(String(entry).trim()));
  if(command.type==="chapterEnd"&&Array.isArray(command.infoPartial))command.infoPartial=command.infoPartial.filter(entry=>!chapterRangeSummary.test(String(entry).trim()));
 }
}

// SYSTEM is not a dialogue speaker. Convert every legacy SYSTEM page into a
// standalone notice command before the engine starts, preserving exact order.
for(const [nodeId,commands] of Object.entries(nodes)){
 const normalized=[];
 for(const command of commands){
  if(command.type==="effects"){
   const allowedStats=new Set(["affection","investigation","suAffinity","belief"]);
   const items=(command.items||[]).filter(effect=>effect.kind!=="stat"||allowedStats.has(effect.key));
   const completesCreatorName=items.some(effect=>effect.kind==="item"&&["黑貓的死亡紀錄","蘇璟辰與黑貓的合照"].includes(effect.name));
   if(completesCreatorName&&!["ch5_option_4","ch5_option_6"].includes(nodeId)&&!items.some(effect=>effect.kind==="character"&&effect.name==="蘇璟辰"))items.push({kind:"character",name:"蘇璟辰"});
   normalized.push({...command,items});
   continue;
  }
  if(command.type!=="text"){
   normalized.push(command);
   continue;
  }
  const grantsSuJingchen=(command.pages||[]).some(page=>/正式取得人物情報[：:]「蘇璟辰」/.test(page?.text||""));
  let pages=[];
  const flush=()=>{
   if(pages.length)normalized.push({...command,pages});
   pages=[];
  };
  for(const page of command.pages||[]){
   const isStatNotice=/^\s*(?:黎靖好感度|蘇璟辰好感度|調查度|相信值)\s*(?:[＋+－−-]\s*\d+%?|維持(?:不變|中等|高等|低等|\d+～\d+%?))\s*$/.test(String(page?.text||""));
   if(/(?:老宅認知度|蘇璟辰理解度|作品完成度|神祕存在警戒度|神秘存在警戒度|幽靈親和度|蘇璟辰控制值|界線值|黎靖存在穩定度)/.test(page?.text||"")){
    continue;
   }
   if(/^(?:解鎖後續「救護車」|完整觀看後取得「被停職教師的剪報」)$/.test(page?.text||"")){
    continue;
   }
   if(page?.text==="下一章需透過其他道具補全姓名")continue;
   if(/(?:True Ending|Ending\s*[A-G]|核心條件|必要條件|錯誤規則|錯誤因果|開啟.*分支|鎖定.*傾向|容易進入|真容解鎖失敗|解鎖特殊道具描述|不計入必要理解|條件完成後未觸發)/i.test(page?.text||""))continue;
   if(/^(?:後續|之後|未來|提前|第六章可|需要消耗|若立即使用|房間事件延後|進入.*路線|開啟.*路線|真容解鎖事件(?:暫停|延後)|面容解鎖失敗|推翻.*條件|解鎖(?:隱藏條件|錯誤版本|問題|特殊事件)|【(?:蘇璟辰面容解鎖(?:條件|進度)|面容解鎖失敗|條件[一二三]|可能缺少證據|真正的解鎖條件)|確認「永遠不離開」是後續附加設定)/.test(String(page?.text||"").trim()))continue;
   // 只隱藏寫給製作端的「錯誤推論」提示；正常旁白與角色對推論的討論必須保留。
   if(page?.speaker==="SYSTEM"&&/(?:獲得)?錯誤推論/.test(page?.text||""))continue;
   if(page?.speaker==="SYSTEM"||isStatNotice){
    flush();
    normalized.push({type:"notice",page:{...page,speaker:""}});
   }else pages.push(page);
  }
  flush();
  if(grantsSuJingchen)normalized.push({type:"effects",items:[{kind:"character",name:"蘇璟辰"}]});
 }
 if(nodeId==="ch7_s1")normalized.unshift({type:"effects",items:[{kind:"character",name:"未命名角色"}]});
 nodes[nodeId]=normalized;
}

// v20.48：只保留真正的章名；製作用的小標不得顯示成章節標題。
const hiddenProductionSections=new Set(["離開前的問題","如何保存最後的記憶","【系統提示】好感度分歧｜被留下的位置","被改過的存檔名稱","面對創作崩潰"]);
for(const commands of Object.values(nodes)){
 for(let index=commands.length-1;index>=0;index--)if(commands[index]?.type==="section"&&(hiddenProductionSections.has(commands[index].title)||!/第[一二三四五六七八九十]+章｜/.test(commands[index].title||"")))commands.splice(index,1);
}

// 作者欄的改寫直接以閃爍／雜訊呈現，不再口述「第一版、第二版、第三版」。
for(const command of nodes.ch8_s5||[])if(command.type==="text"){
 for(const page of command.pages||[]){
  if(page.text==="無論是否出現複製體，書本封面的作者欄最終都會浮出一條細線，像有人準備填入名字。")page.text="書本封面的作者欄最終浮出一條細線，像有人準備填入名字。";
  if(page.text==="作者：黎靖")page.effects=["flicker"];
  if(page.text==="作者：蘇璟辰")page.effects=["glitch","flicker"];
  if(page.text==="作者：蘇璟辰、███")page.effects=["glitch","flicker"];
 }
 command.pages=(command.pages||[]).filter(page=>!["最先出現的是：","幾秒後，「黎靖」被劃掉。","第二個版本變成：","這次沒有立刻消失，卻逐漸向右移動，像在為另一個名字騰出空間。","第三個版本是："].includes(page.text));
}

// 好感度分歧是條件機制；達標時才把結果演成場景。
nodes.ch8_s25=[{type:"condition",test:{kind:"statAtLeast",key:"affection",value:60},yes:"ch8_s25_lj",no:"ch8_s25_su_check"}];
nodes.ch8_s25_lj=[{type:"text",pages:[{text:"你的房間裡多出一只紫色軟墊。黎靖從不承認是自己放的，卻總會在你回來時從上面抬頭。",speaker:""}]},{type:"condition",test:{kind:"statAtLeast",key:"affection",value:90},yes:"ch8_s25_lj90",no:"ch8_s25_su_check"}];
nodes.ch8_s25_lj90=[{type:"text",pages:[{text:"軟墊旁還放著黎靖今天找到的一件小東西，安靜等著你下次查看。",speaker:""}]},{type:"jump",target:"ch8_s25_su_check"}];
nodes.ch8_s25_su_check=[{type:"condition",test:{kind:"statAtLeast",key:"suAffinity",value:60},yes:"ch8_s25_su",no:"ch8_s27"}];
nodes.ch8_s25_su=[{type:"text",pages:[{text:"工作桌旁多出第二把椅子。你問是替誰準備，蘇璟辰只說是為了保持構圖平衡。",speaker:""}]},{type:"condition",test:{kind:"statAtLeast",key:"suAffinity",value:90},yes:"ch8_s25_su90",no:"ch8_s27"}];
nodes.ch8_s25_su90=[{type:"text",pages:[{text:"第二把椅子被移到蘇璟辰伸手就能碰到的位置。",speaker:""},{text:"「這也叫構圖平衡？」",speaker:"你"},{text:"「不然呢？總不能說我想讓你坐近一點。」",speaker:"蘇璟辰"},{text:"他嘴上否認，卻沒有把椅子移回去。",speaker:""}]},{type:"jump",target:"ch8_s27"}];

// 「被改過的存檔名稱」是製作備註，不進入遊戲流程。
nodes.ch8_s26=[{type:"jump",target:"ch8_s27"}];

// 第八、九章章末情報補回第十三冊。
const chapter8Info=[
 "第十三冊能將持筆者寫下且被相信的內容帶進現實。","第十三冊主要依靠既有資料、記憶與相信重建人物，並非全知。","它無法自行判斷何者是人物的唯一正本。","以蘇璟辰的外表、記憶與語氣寫出的存在，不一定是原本的蘇璟辰。","複製體也可能在出現後形成不屬於原型的反應與自我意識。","否定複製體是正本，不等於可以直接否定其存在價值。","漫畫世界外的人影原型是蘇璟辰生前的責任編輯。","本章出現的編輯只是由蘇璟辰記憶、原稿與保存資料形成的紀錄，並非現實中的本人。","編輯曾陪同蘇璟辰就醫，也曾提醒其服藥與回診。","編輯曾反對第十二冊的犧牲結局。","未命名角色的自覺可能源於蘇璟辰與編輯對結局的爭論。","蘇璟辰死亡後，編輯否決了由他人補完第十二冊的出版企劃。","未完成的句子不能直接視為等待他人補完。","推測、續寫與原作者留下的內容必須分開標記。","第十三冊不是由任何單一人物完成。","共同形成的作品也不能在未取得同意時，任意替所有參與者署名。","蘇璟辰事故前仍預計返回，並留下「很快回來」的紙條。","蘇璟辰在天候不穩的情況下進入舊步道，最終失足墜落山谷。","蘇璟辰的山區死亡正式確認為意外。","蘇璟辰曾有自傷與死亡相關想法，但不足以證明事故當天存在主動死亡意圖。","精神疾病、治療經歷與意外死亡可以同時成立，不需要互相否定。","沒有目擊者的死亡過程無法被完整重建。","合理的連續畫面仍可能只是證據之間的補間。","不觀看死亡過程，也能理解事故與人物。","未能阻止事故，不等於造成事故。","蘇璟辰的房間已正式開放。","門後的蘇璟辰擁有第十三冊未記錄的日常細節，本體可信度提高。","蘇璟辰親口確認，十月十二日的死亡並非主動行為。","蘇璟辰的面容仍未完全解鎖。"
];
const chapter9Info=[
 "先前列出的三項面容條件，是第十三冊依現有資料作出的錯誤推論。","知道人物經歷，不等於人物已經相信自己願意被看見。","蘇璟辰以「黎靖」為筆名，源自黑貓姓名。","他不願讓本名直接進入外界，也希望以黑貓的名字陪伴作品投稿。","蘇璟辰創造紫貓時最早說出的謊言是「黎靖還在」。","當時沒有其他相信者，蘇璟辰必須先讓自己相信這句話。","紫貓黎靖承接部分黑貓記憶與習慣，但並非黑貓的完全復原。","「永遠不離開」與「所屬蘇璟辰」是紫貓誕生後被附加的控制設定。","蘇璟辰已正式承認黎靖不屬於他。","蘇璟辰希望有人相信他確實活過，而不只以病歷與死亡定義他。","理解這項願望仍不足以直接解鎖真容。","真正的真容解鎖方式，是找到蘇璟辰死亡時留下的未完成創作。","修復未知內容時，可以保留空白與註記，不必假裝完全還原。","作品未完成，不代表作品尚未產生價值。","黎靖、未命名角色與城市居民已經將創作帶往作者未曾完成的方向。","真正缺失的分鏡必須由蘇璟辰本人補上。","「陪伴完成」不等於「代替死者補完」。","第十二冊目前仍未結束，但已重新開始創作。","蘇璟辰的真容已正式解鎖。","第十三冊已將住戶本名「蘇璟辰」與創作署名「黎靖」分開記錄。","黑貓黎靖與紫貓黎靖的身分已正式分離。","願望與未發生版本可以保留，但必須清楚標記，不能覆寫歷史。","蘇璟辰的創作執念開始鬆動。","住戶完成心願、解除執念或解鎖真容後，不會因此被迫離開。","老宅是住戶可以繼續生活的場所，不以痛苦或未竟心願作為居住代價。","理解死亡不等於終止死後的存在。","執念改變後，住戶房間會依照現在的狀態更新，而非消失。","蘇璟辰的房間已不再永遠停留於十月十二日傍晚。","蘇璟辰目前選擇繼續住在老宅並創作第十二冊。"
];
for(const command of nodes.ch8_end||[])if(command.type==="chapterEnd")command.info=chapter8Info;
for(const command of nodes.ch9_end||[])if(command.type==="chapterEnd")command.info=chapter9Info;

// 第十章正式名稱與機制。
for(const command of nodes.chapter10_start||[])if(command.type==="section")command.title="第十章｜創造未來";
for(const command of nodes.chapter10_start||[])if(command.type==="text")for(const page of command.pages||[])if(page.text==="文字重新出現時，蘇璟辰房間裡的清晨仍在繼續。")page.text="蘇璟辰房間裡的清晨仍在繼續。";
for(const command of nodes.ch10_end||[])if(command.type==="chapterEnd")command.chapterTitle="第十章｜創造未來";
nodes.ch10_s1=[{type:"jump",target:"ch10_s2"}];
nodes.ch10_s2=[{type:"text",pages:[{text:"老宅沒有提供調查目標。",speaker:""}]},{type:"choice",timeLimit:10,timeoutNext:"ch10_s2_wait",options:[
 {label:"整理客廳",next:"ch10_s2_selected"},{label:"陪黎靖散步",next:"ch10_s2_selected"},{label:"留在餐桌旁",next:"ch10_s2_selected"},{label:"回自己的房間休息",next:"ch10_s2_selected"}
]}];
nodes.ch10_s2_selected=[{type:"text",pages:[{text:"蘇璟辰沒有立刻加入。他偶爾出現在二樓欄杆後方，手裡拿著速寫本；當你回頭，他便若無其事地移開視線。",speaker:""}]},{type:"jump",target:"ch10_s3"}];
nodes.ch10_s2_wait=[{type:"text",pages:[{text:"你遲遲沒有作出選擇。黎靖先趴到你的腳邊。",speaker:""},{text:"「你在等什麼？」",speaker:"黎靖"},{text:"「不知道。」",speaker:"你"},{text:"「那就一起不知道。」",speaker:"黎靖"},{text:"牠在原地蜷起身體。樓梯上方傳來蘇璟辰的聲音。",speaker:""},{text:"「你們打算把發呆也寫進結局？」",speaker:"蘇璟辰"}]},{type:"jump",target:"ch10_s3"}];

// 好感度區間不是選項：系統依目前數值自動播放黎靖與蘇璟辰各自對應的版本。
nodes.ch10_s12=[{type:"condition",test:{kind:"statAtLeast",key:"affection",value:90},yes:"ch10_s12_b4",no:"ch10_s12_lj60"}];
nodes.ch10_s12_lj60=[{type:"condition",test:{kind:"statAtLeast",key:"affection",value:60},yes:"ch10_s12_b3",no:"ch10_s12_lj30"}];
nodes.ch10_s12_lj30=[{type:"condition",test:{kind:"statAtLeast",key:"affection",value:30},yes:"ch10_s12_b2",no:"ch10_s12_b1"}];
nodes.ch10_s12_su=[{type:"condition",test:{kind:"statAtLeast",key:"suAffinity",value:100},yes:"ch10_s12_b9",no:"ch10_s12_su90"}];
nodes.ch10_s12_su90=[{type:"condition",test:{kind:"statAtLeast",key:"suAffinity",value:90},yes:"ch10_s12_b8",no:"ch10_s12_su60"}];
nodes.ch10_s12_su60=[{type:"condition",test:{kind:"statAtLeast",key:"suAffinity",value:60},yes:"ch10_s12_b7",no:"ch10_s12_su30"}];
nodes.ch10_s12_su30=[{type:"condition",test:{kind:"statAtLeast",key:"suAffinity",value:30},yes:"ch10_s12_b6",no:"ch10_s12_b5"}];
for(const id of ["ch10_s12_b1","ch10_s12_b2","ch10_s12_b3","ch10_s12_b4"]){for(const command of nodes[id]||[])if(command.type==="jump")command.target="ch10_s12_su";}

// 最後一頁顯示即時數值面板，確認後直接進入結局判定。
nodes.ch10_s14=[{type:"text",pages:[
 {text:"最後一個傍晚，第十三冊自行翻開。最新一頁記錄著共同餐桌、蘇璟辰的新原稿，以及黎靖壓在紙角的紫色尾巴。",speaker:""},
 {text:"頁面最下方只有一句話：",speaker:""},{text:"「今天很平靜。」",speaker:""},{text:"「沒有反轉？」",speaker:"蘇璟辰"},{text:"「為什麼一定要有？」",speaker:"黎靖"},{text:"「故事通常需要結局。」",speaker:"蘇璟辰"},{text:"「今天結束，不代表你們的生活也結束。」",speaker:"你"}
]},{type:"commitChapter",next:"ending_router"}];

// v20.50：依《系統提示標註版_數值平衡版 (3)》重建第十章「創造未來」。
const C10P=(text,speaker="")=>({text,speaker,effects:[]});
const C10T=(...pages)=>({type:"text",pages});
const C10E=(...items)=>({type:"effects",items});
const C10S=(key,label,amount)=>({kind:"stat",key,label,amount});
const C10F=name=>({kind:"flag",name});
const C10I=name=>({kind:"item",name});
const C10Jump=target=>({type:"jump",target});

nodes.chapter10_start=[
 {type:"section",title:"第十章｜創造未來"},
 C10T(C10P("蘇璟辰房間裡的清晨仍在繼續。"),C10P("牆上的日曆不再固定於十月十二日，白紗窗簾也恢復原本的顏色。工作桌上攤著第十二冊新增的原稿，桌腳旁放著昨晚出現的黑色檔案盒，盒蓋寫著「黎靖｜廢棄人物設定」。"),C10P("黎靖仍用前腳壓著盒蓋。"),C10P("「這個不能跳過。」","黎靖"),C10P("「今天一定要看？」","蘇璟辰"),C10P("「不一定今天。」","黎靖"),C10P("蘇璟辰似乎有些意外。"),C10P("「但不能不看。」","黎靖"),C10P("你走出房間時，第十三冊沒有立刻發出任務，只在頁面中央留下兩行文字。")),
 {type:"notice",page:C10P("今天沒有必須完成的事件。")},{type:"notice",page:C10P("請選擇想做的事。")},C10Jump("ch10_daily_hub")
];
nodes.ch10_daily_hub=[{type:"choice",timeLimit:10,timeoutReveal:{
 message:"蘇璟辰：「沒有想做的，也可以什麼都不做。」",
 option:{label:"什麼都不做",displayNumber:6,next:"ch10_nothing"}
},options:[
 {label:"整理客廳",next:"ch10_clean_gate"},
 {label:"陪黎靖到石板路散步",next:"ch10_walk_gate"},
 {label:"去共同餐桌找蘇璟辰",next:"ch10_table_gate"},
 {label:"查看黑色檔案盒",next:"ch10_files",hiddenIfFlag:"ch10_activity_files"},
 {label:"回自己的房間休息",next:"ch10_rest_gate"},
 {label:"今天留在老宅",next:"ch10_stay",requiresFlagCount:{prefix:"ch10_activity_",count:3}}
]}];
nodes.ch10_daily_idle=[C10Jump("ch10_daily_hub")];

nodes.ch10_clean_gate=[{type:"condition",test:{kind:"flag",name:"ch10_activity_clean"},yes:"ch10_clean_repeat",no:"ch10_clean"}];
nodes.ch10_clean_repeat=[C10T(C10P("第二次整理客廳時，房間裡沒有再出現新的物品。黎靖壓著揉皺的紙球，蘇璟辰身旁則散著尚未編頁碼的稿紙。"),C10P("「今天還要整理？」","蘇璟辰"),C10P("「看起來比昨天更亂。」","你"),C10P("「那是使用痕跡。」","蘇璟辰"),C10P("「他不想收。」","黎靖")),{type:"choice",options:[{label:"陪黎靖玩紙球",next:"ch10_clean_repeat_1"},{label:"替蘇璟辰整理頁碼",next:"ch10_clean_repeat_2"},{label:"留在兩人中間，什麼都不做",next:"ch10_clean_repeat_3"}]}];
nodes.ch10_clean_repeat_1=[C10T(C10P("你把紙球拋向客廳另一端，黎靖立刻追上。紙球滾到蘇璟辰腳邊時，他也用鞋尖把它踢回來。")),C10E(C10S("affection","黎靖好感度",8),C10S("suAffinity","蘇璟辰好感度",4)),C10Jump("ch10_daily_hub")];
nodes.ch10_clean_repeat_2=[C10T(C10P("你依照已有頁碼排列散頁，把無法確認位置的三張原稿交回蘇璟辰親自處理。"),C10P("「你可以先猜。」","蘇璟辰"),C10P("「猜錯又要被你嫌棄。」","你"),C10P("「猜對也可以嫌棄。」","蘇璟辰")),C10E(C10S("suAffinity","蘇璟辰好感度",8),C10S("investigation","調查度",4)),C10Jump("ch10_daily_hub")];
nodes.ch10_clean_repeat_3=[C10T(C10P("你沒有碰紙球，也沒有整理原稿，只在兩人中間坐下。沒有人催促你離開。")),C10E(C10S("suAffinity","蘇璟辰好感度",4),C10S("affection","黎靖好感度",4),C10F("ch10_shared_silence")),C10Jump("ch10_daily_hub")];

nodes.ch10_walk_gate=[{type:"condition",test:{kind:"flag",name:"ch10_activity_walk"},yes:"ch10_walk_repeat",no:"ch10_walk"}];
nodes.ch10_walk_repeat=[C10T(C10P("第二次走上石板路時，黎靖把揉皺的紙球放到你腳邊。"),C10P("「丟。」","黎靖")),{type:"choice",options:[{label:"將紙球丟向前方",next:"ch10_walk_repeat_1"},{label:"將紙球丟回老宅方向",next:"ch10_walk_repeat_2"},{label:"告訴黎靖今天不想玩",next:"ch10_walk_repeat_3"}]}];
nodes.ch10_walk_repeat_1=[C10T(C10P("你把紙球丟向前方。黎靖追進薄霧，又把它叼回你腳邊。這次你們走得更遠。")),C10E(C10S("affection","黎靖好感度",10)),C10Jump("ch10_daily_hub")];
nodes.ch10_walk_repeat_2=[C10T(C10P("你把紙球丟回老宅方向。黎靖追到門前，又把紙球推回來。"),C10P("「方向反了。」","黎靖"),C10P("「你沒有說往哪裡。」","你"),C10P("「現在說了。都可以。」","黎靖")),C10E(C10S("affection","黎靖好感度",8)),C10Jump("ch10_daily_hub")];
nodes.ch10_walk_repeat_3=[C10T(C10P("「今天不想玩。」","你"),C10P("「那還要走嗎？」","黎靖"),C10P("「可以只散步。」","你"),C10P("「好。下次再玩。」","黎靖")),C10E(C10S("affection","黎靖好感度",4)),C10Jump("ch10_daily_hub")];

nodes.ch10_table_gate=[{type:"condition",test:{kind:"flag",name:"ch10_activity_table"},yes:"ch10_table_repeat",no:"ch10_table"}];
nodes.ch10_table_repeat=[C10T(C10P("第二次來到餐桌時，蘇璟辰已經預先空出一個位置。"),C10P("「這是替我留的？」","你"),C10P("「避免你坐到原稿。」","蘇璟辰"),C10P("「他昨天就整理了。」","黎靖")),{type:"choice",options:[{label:"查看蘇璟辰新畫的一頁",next:"ch10_table_repeat_1"},{label:"問他為什麼替你留位置",next:"ch10_table_repeat_2"},{label:"只陪他畫稿，不查看內容",next:"ch10_table_repeat_3"}]}];
nodes.ch10_table_repeat_1=[C10T(C10P("蘇璟辰將尚未完成的新分鏡推到你面前。你沒有替空白街道決定方向，只在看完後將它放回原位。")),C10E(C10S("suAffinity","蘇璟辰好感度",12),C10I("尚未完成的新分鏡")),C10Jump("ch10_daily_hub")];
nodes.ch10_table_repeat_2=[C10T(C10P("「你昨天坐這裡，所以今天也可以。」","蘇璟辰"),C10P("他沒有說希望你留下，也沒有收回那張椅子。")),C10E(C10S("suAffinity","蘇璟辰好感度",10)),C10Jump("ch10_daily_hub")];
nodes.ch10_table_repeat_3=[C10T(C10P("你沒有翻動原稿，只陪他畫稿。過了一段時間，他主動將完成一半的頁面轉向你。"),C10P("「現在可以看。」","蘇璟辰")),C10E(C10S("suAffinity","蘇璟辰好感度",8),C10F("ch10_waited_for_share")),C10Jump("ch10_daily_hub")];

nodes.ch10_rest_gate=[{type:"condition",test:{kind:"flag",name:"ch10_activity_rest"},yes:"ch10_rest_repeat",no:"ch10_rest"}];
nodes.ch10_rest_repeat=[C10T(C10P("你再次回房休息。不久後，門外傳來一下很輕的敲門聲。"),C10P("「今天也不想做事情？」","蘇璟辰"),C10P("「那我只是經過。」","蘇璟辰")),{type:"choice",options:[{label:"打開房門",next:"ch10_rest_repeat_1"},{label:"隔著門告訴他今天想獨處",next:"ch10_rest_repeat_2"},{label:"不作回應",next:"ch10_rest_repeat_3"}]}];
nodes.ch10_rest_repeat_1=[C10T(C10P("你打開房門，蘇璟辰先敲了一下已經打開的門，才進來安靜畫稿。")),C10E(C10S("suAffinity","蘇璟辰好感度",10)),C10Jump("ch10_daily_hub")];
nodes.ch10_rest_repeat_2=[C10T(C10P("「今天想自己待著。」","你"),C10P("「好。這次是真的。」","蘇璟辰"),C10P("他的腳步聲逐漸遠去。")),C10Jump("ch10_daily_hub")];
nodes.ch10_rest_repeat_3=[C10T(C10P("你沒有開門，也沒有回答。蘇璟辰沒有敲第二次，隔天也沒有追問。")),C10Jump("ch10_daily_hub")];

nodes.ch10_clean=[C10T(C10P("你決定整理客廳。"),C10P("老宅裡沒有真正的灰塵，物品卻會隨住戶的記憶改變位置。矮桌下堆著幾張蘇璟辰的廢稿，沙發縫裡卡著黎靖藏起來的紙球，窗邊還放著一只不知道屬於誰的空杯。"),C10P("黎靖跟在你旁邊，負責把你剛整理好的東西重新推開。"),C10P("「你是在幫忙？」","你"),C10P("「分類。」","黎靖"),C10P("「分成什麼？」","你"),C10P("「可以推的，不能推的。」","黎靖"),C10P("蘇璟辰從樓梯上走下來，看見滿地物品後停了一下。"),C10P("「整理得很好。」","蘇璟辰"),C10P("「這不是我弄的。」","你"),C10P("「是我。」","黎靖"),C10P("「那就不意外了。」","蘇璟辰")),{type:"choice",options:[{label:"把所有物品放回原位",next:"ch10_clean_1"},{label:"詢問他們想把東西放在哪裡",next:"ch10_clean_2"},{label:"只整理自己的東西",next:"ch10_clean_3"}]}];
nodes.ch10_clean_1=[C10T(C10P("你依照第十三冊記錄的位置，把廢稿、杯子與紙球一一放回去。客廳恢復得與先前完全相同，卻也像從未有人真正使用過。"),C10P("黎靖盯著被收進抽屜的紙球。"),C10P("「我等等還要玩。」","黎靖"),C10P("你只好再次拿出來。")),C10E(C10S("affection","黎靖好感度",4),C10I("客廳紙球"),C10F("ch10_activity_clean")),C10Jump("ch10_daily_hub")];
nodes.ch10_clean_2=[C10T(C10P("蘇璟辰把廢稿留在矮桌下方，因為伸手就能拿到；黎靖則把紙球放在沙發旁，並要求不能收進抽屜。"),C10P("「空杯呢？」","你"),C10P("「放桌上。」","蘇璟辰"),C10P("「為什麼？」","你"),C10P("「比較像有人住。」","蘇璟辰")),C10E(C10S("suAffinity","蘇璟辰好感度",8),C10S("affection","黎靖好感度",8),C10I("客廳紙球"),C10F("ch10_activity_clean")),C10Jump("ch10_daily_hub")];
nodes.ch10_clean_3=[C10T(C10P("你沒有替其他住戶決定物品位置，只收起自己帶來的東西。"),C10P("「突然很有界線。」","蘇璟辰"),C10P("「你不喜歡？」","你"),C10P("「沒有。只是需要重新找理由把東西放到你附近。」","蘇璟辰"),C10P("他說得像玩笑，手裡的廢稿卻真的留在離你最近的桌角。")),C10E(C10S("suAffinity","蘇璟辰好感度",10),C10I("客廳紙球"),C10F("ch10_activity_clean")),C10Jump("ch10_daily_hub")];

nodes.ch10_walk=[C10T(C10P("你推開老宅大門，黎靖以紫貓形態走在前方。"),C10P("石板路不再通往調查地點，兩側的霧比以前淡。遠處仍看不見城市，卻能聽見樹葉與風摩擦的聲音。"),C10P("黎靖沿著石板邊緣前進，偶爾停下來嗅聞不存在的氣味。"),C10P("「你真的聞得到？」","你"),C10P("「不知道。」","黎靖"),C10P("「那為什麼聞？」","你"),C10P("「想聞。」","黎靖"),C10P("牠繼續向前，像這已經足夠成為理由。")),{type:"choice",options:[{label:"跟著黎靖走",next:"ch10_walk_1"},{label:"問黎靖想不想變成人形",next:"ch10_walk_2"},{label:"問牠為什麼邀請你",next:"ch10_walk_3"}]}];
nodes.ch10_walk_1=[C10T(C10P("黎靖沒有固定目的地。牠繞過樹根、追逐被風吹動的枯葉，又在走出很遠後突然折返。"),C10P("「不是要往前？」","你"),C10P("「現在想回去。」","黎靖"),C10P("你沒有要求散步一定要抵達某處。")),C10E(C10S("affection","黎靖好感度",10),C10F("ch10_activity_walk")),C10Jump("ch10_daily_hub")];
nodes.ch10_walk_2=[C10T(C10P("「現在不想。」","黎靖"),C10P("「為什麼？」","你"),C10P("「四隻腳比較適合這裡。」","黎靖"),C10P("「以前蘇璟辰會替你決定？」","你"),C10P("黎靖停了一下。"),C10P("「會。」","黎靖"),C10P("牠很快又繼續走。拒絕變成人形沒有使事件中止，也沒有讓任何功能無法使用。")),C10E(C10S("affection","黎靖好感度",8),C10S("investigation","調查度",4),C10F("ch10_activity_walk")),C10Jump("ch10_daily_hub")];
nodes.ch10_walk_3=[C10T(C10P("「因為你會跟。」","黎靖"),C10P("「蘇璟辰不會？」","你"),C10P("「他會站在窗邊看。」","黎靖"),C10P("你回頭望向老宅，二樓窗簾後方確實有一道粉色身影。"),C10P("黎靖順著你的視線，看見躲在窗邊的蘇璟辰。"),C10P("「很怪。」","黎靖")),C10E(C10S("affection","黎靖好感度",12),C10S("suAffinity","蘇璟辰好感度",2),C10F("ch10_activity_walk")),C10Jump("ch10_daily_hub")];

nodes.ch10_table=[C10T(C10P("你走進餐廳時，蘇璟辰已坐在桌旁。桌面放著第十二冊原稿、兩支鉛筆和一杯咖啡，黎靖趴在桌角，尾巴壓著其中一頁。"),C10P("「牠在做什麼？」","你"),C10P("「妨礙工作。」","蘇璟辰"),C10P("「監督。他昨天又想把角色丟進河裡。」","黎靖"),C10P("「只是經過河邊。」","蘇璟辰"),C10P("「下一格有落水聲。」","黎靖"),C10P("「可能是別人。」","蘇璟辰"),C10P("你拉開椅子，蘇璟辰抬眼看你。"),C10P("「誰讓你坐？」","蘇璟辰"),C10P("「這是餐桌。」","你"),C10P("「現在是工作區。」","蘇璟辰"),C10P("「有標示嗎？」","你"),C10P("他在桌面邊緣寫下「工作區」。"),C10P("「我不相信。」","你"),C10P("文字沒有成真，只留下普通鉛筆痕跡。黎靖伸爪抹掉「工作」兩字，只留下「區」。"),C10P("「現在可以坐。」","黎靖")),{type:"choice",options:[{label:"問第十二冊的新進度",next:"ch10_table_1"},{label:"幫忙整理原稿",next:"ch10_table_2"},{label:"問他要不要一起吃東西",next:"ch10_table_3"}]}];
nodes.ch10_table_1=[C10T(C10P("蘇璟辰把新增原稿翻到你面前。城市居民仍在爭論名稱，有人希望所有區域使用同一個名字，也有人認為城市可以暫時沒有名字。"),C10P("未命名角色在其中一格說：「你可以提議，但不能直接替我們決定。」"),C10P("「很像黎靖。」","你"),C10P("「牠最近很吵。」","蘇璟辰"),C10P("「你自己畫的。」","黎靖")),C10E(C10S("suAffinity","蘇璟辰好感度",10),C10I("第十二冊新增頁面"),C10F("ch10_activity_table")),C10Jump("ch10_daily_hub")];
nodes.ch10_table_2=[C10T(C10P("你只依頁碼排列紙張，不修改內容。遇到沒有頁碼的稿紙時，你交給蘇璟辰判斷。"),C10P("他起初只用手指方向，後來終於親自伸手，把紙張放回正確位置。"),C10P("「你不打算順便改幾句？」","蘇璟辰"),C10P("「沒有得到同意。」","你"),C10P("「很難用的助手。」","蘇璟辰"),C10P("他卻把下一疊原稿也推給你。")),C10E(C10S("suAffinity","蘇璟辰好感度",12),C10S("investigation","調查度",6),C10F("ch10_activity_table")),C10Jump("ch10_daily_hub")];
nodes.ch10_table_3=[C10T(C10P("「我們不會餓。」","蘇璟辰"),C10P("「想吃和需要不一樣。」","你"),C10P("黎靖立刻抬頭。"),C10P("「我要。」","黎靖"),C10P("最後你準備了一份簡單早餐。黎靖選擇吃你的部分，蘇璟辰則盯著自己的盤子很久，才拿起餐具。"),C10P("「味道怎麼樣？」","你"),C10P("「像有人第一次寫日常。」","蘇璟辰"),C10P("「很難吃？」","你"),C10P("「不確定，可以再試一次。」","蘇璟辰")),C10E(C10S("suAffinity","蘇璟辰好感度",10),C10S("affection","黎靖好感度",6),C10F("ch10_activity_table")),C10Jump("ch10_daily_hub")];

nodes.ch10_files=[C10T(C10P("你回到蘇璟辰的房間，查看桌腳旁的黑色檔案盒。"),C10P("黎靖立刻跳下椅子，蘇璟辰沒有阻止，只把空杯放得離檔案盒遠了一點。"),C10P("盒內不是一份人物設定，而是數十份遭刪改的版本。外貌、性格、能力、記憶與服從條件都曾被蘇璟辰修改。"),C10P("最早的設定仍以黑貓為原型：主動靠近蘇璟辰；不會離開；不得拒絕創作者命令。"),C10P("黎靖讀到最後一句，尾巴停止擺動。"),C10P("「這些都生效過？」","黎靖"),C10P("「一部分。」","蘇璟辰"),C10P("「哪一部分？」","黎靖"),C10P("「不記得。」","蘇璟辰"),C10P("「你最好開始記。」","黎靖")),C10Jump("ch10_files_hub")];
nodes.ch10_files_hub=[{type:"condition",test:{kind:"all",tests:[{kind:"flag",name:"ch10_file_appearance"},{kind:"flag",name:"ch10_file_memory"},{kind:"flag",name:"ch10_file_control"}]},yes:"ch10_files_complete",no:"ch10_files_choose"}];
nodes.ch10_files_choose=[{type:"choice",options:[{label:"整理外貌與性格設定",next:"ch10_files_1",hiddenIfFlag:"ch10_file_appearance"},{label:"整理遭修改的記憶",next:"ch10_files_2",hiddenIfFlag:"ch10_file_memory"},{label:"確認仍在生效的服從條件",next:"ch10_files_3",hiddenIfFlag:"ch10_file_control"}]}];
nodes.ch10_files_1=[C10T(C10P("你把不同版本依日期分開。黎靖留下紫色、貓耳與尾巴，把「必須像黑貓」移到廢棄區。"),C10P("「為什麼留下這些？」","你"),C10P("「因為我現在喜歡。」","黎靖"),C10P("「紫色很難印。」","蘇璟辰"),C10P("「又沒問你。」","黎靖")),C10E(C10S("affection","黎靖好感度",12),C10S("investigation","調查度",8),C10F("ch10_file_appearance")),C10Jump("ch10_files_hub")];
nodes.ch10_files_2=[C10T(C10P("記憶設定只留下幾個空白日期。第十三冊提出多項推測，卻沒有證據能確認當時刪除了什麼。"),C10P("你在日期旁標註：確認曾修改；內容不明；不得以推測補足。"),C10P("「可能永遠找不回來。」","黎靖"),C10P("「可能。」","你"),C10P("「那為什麼還要記？」","黎靖"),C10P("「不知道內容，不等於修改沒有發生。」","你")),C10E(C10S("investigation","調查度",14),C10S("affection","黎靖好感度",10),C10F("ch10_file_memory")),C10Jump("ch10_files_hub")];
nodes.ch10_files_3=[C10T(C10P("你們逐項測試舊設定。「不得離開房間」已失效，「不得透露蘇璟辰存在」已失效，但「不得拒絕創作者命令」仍留下微弱作用。"),C10P("只要蘇璟辰使用接近命令的語氣，黎靖的回答便會短暫停頓。"),C10P("「這是真的。」","蘇璟辰"),C10P("「我知道。」","黎靖"),C10P("「不是為了保護你。是因為你不照我的意思做。」","蘇璟辰"),C10P("他沒有用黑貓、死亡或孤獨替控制尋找比較容易接受的說法。")),C10E(C10S("investigation","調查度",12),C10F("ch10_file_control")),C10Jump("ch10_files_hub")];
nodes.ch10_files_complete=[C10T(C10P("最初設定背面被墨水塗黑的文字逐漸顯露：創作目的，讓黎靖回來。如果回來的不是牠，就改到像牠為止。"),C10P("「你現在還想把我改成牠嗎？」","黎靖"),C10P("「想過。但不會做。」","蘇璟辰"),C10P("「因為做不到？」","黎靖"),C10P("「因為你不是牠。」","蘇璟辰"),C10P("黎靖沒有原諒他，也沒有銷毀設定。他把資料分成已失效、來源不明與不得恢復三類。"),C10P("接著，他在新的空白設定表上寫下：姓名，黎靖。外貌，目前是紫色。性格，會改變。所屬，無。今後想做的事，尚未決定。"),C10P("「很像第十二冊。」","蘇璟辰"),C10P("「你抄我的。」","黎靖")),C10E(C10I("黎靖廢棄人物設定"),C10I("缺失記憶日期表"),C10I("黎靖親筆人物設定"),C10F("ch10_activity_files"),C10F("黎靖取得設定修改權與拒絕權")),C10Jump("ch10_daily_hub")];

nodes.ch10_rest=[C10T(C10P("你決定今天不參與其他人的活動，回自己的房間休息。"),C10P("門關上後，老宅沒有立刻發生異常。走廊偶爾傳來黎靖跑過的腳步聲，也能聽見遠處紙張翻動的聲音。")),{type:"choice",options:[{label:"直接睡覺",next:"ch10_rest_1"},{label:"打開門看看",next:"ch10_rest_2"},{label:"邀請其中一人進來",next:"ch10_rest_invite"}]}];
nodes.ch10_rest_1=[C10T(C10P("你沒有再開啟任何事件。再次醒來時，門外放著一顆紙球和一張沒有署名的便條。"),C10P("「今天先休息。」"),C10P("字跡屬於蘇璟辰。")),C10E(C10I("沒有署名的休息便條"),C10F("ch10_activity_rest")),C10Jump("ch10_daily_hub")];
nodes.ch10_rest_2=[C10T(C10P("黎靖趴在門外，紙球壓在前腳下。"),C10P("「你還要休息？」","黎靖"),C10P("「嗯。」","你"),C10P("「好。」","黎靖"),C10P("牠把紙球帶走，沒有要求你改變答案。")),C10E(C10S("affection","黎靖好感度",6),C10F("ch10_activity_rest")),C10Jump("ch10_daily_hub")];
nodes.ch10_rest_invite=[{type:"choice",options:[{label:"邀請黎靖",next:"ch10_rest_lj"},{label:"邀請蘇璟辰",next:"ch10_rest_su"}]}];
nodes.ch10_rest_lj=[C10T(C10P("黎靖在床尾找了一個位置趴下。這次陪伴由你主動提出，也能由你隨時結束。")),C10E(C10S("affection","黎靖好感度",5),C10F("ch10_activity_rest")),C10Jump("ch10_daily_hub")];
nodes.ch10_rest_su=[C10T(C10P("蘇璟辰先敲了一下已經打開的門，再坐到房內唯一的椅子上畫稿。這次陪伴由你主動提出，也能由你隨時結束。")),C10E(C10S("suAffinity","蘇璟辰好感度",5),C10F("ch10_activity_rest")),C10Jump("ch10_daily_hub")];

nodes.ch10_nothing=[C10T(C10P("你沒有選擇任何活動，只在客廳坐下。"),C10P("黎靖先在你腳邊繞了一圈，最後趴到沙發另一端。蘇璟辰仍站在樓梯上，像在等你改變主意。"),C10P("幾分鐘後，他拿著原稿走下來，在離你不遠的位置坐下。"),C10P("「你不是要畫稿？」","你"),C10P("「這裡也可以。」","蘇璟辰"),C10P("「不是說發呆很浪費？」","你"),C10P("「我在工作。」","蘇璟辰"),C10P("「他剛才一頁都沒畫。」","黎靖"),C10P("「構思。」","蘇璟辰"),C10P("三人只是待在同一個空間，直到你決定離開。")),C10E(C10S("suAffinity","蘇璟辰好感度",8),C10S("affection","黎靖好感度",6),C10F("ch10_activity_nothing")),C10Jump("ch10_daily_hub")];
nodes.ch10_stay=[C10T(C10P("你選擇今天留在老宅，不再指定事件地點。蘇璟辰在共同餐桌畫稿，黎靖在客廳與走廊之間活動。你可以隨時與其中一人說話，也可以中途回房休息。"),C10P("傍晚時，黎靖把黑色檔案盒移到共同餐桌旁。"),C10P("「放那麼明顯？」","蘇璟辰"),C10P("「避免你忘記。」","黎靖"),C10P("「我沒有那麼容易忘。」","蘇璟辰"),C10P("「你說不記得改過多少次。」","黎靖"),C10P("蘇璟辰無法反駁。"),C10P("最後一個傍晚，第十三冊自行翻開。頁面沒有宣告危險，也沒有要求完成最後任務，只列出你今天選過的活動。沒有被選擇的活動維持空白，不會因此判定失敗。"),C10P("頁面最後詢問：明天想做什麼？"),C10P("選項尚未完全浮現，第二項便被粉色文字改過。")),{type:"choice",options:[{label:"繼續未完成的活動。",next:"ch10_final_1"},{label:"先來看蘇璟辰。",next:"ch10_final_2"},{label:"陪黎靖做他想做的事。",next:"ch10_final_3"},{label:"到時候再決定。",next:"ch10_final_4"}]}];
const chapter10Info=["黎靖保留紫貓形態與日常習慣，也能拒絕按照舊設定行動。","黑色檔案盒事件確認蘇璟辰曾多次修改黎靖的人物設定。","黎靖取得本人設定的修改權與拒絕權，但此事件只是日常活動之一。","蘇璟辰與黎靖的關係仍在修復中，不會因完成單一事件而立刻和解。"];
const C10Finish=(...pages)=>[C10T(...pages,C10P("第十三冊記下最後一行：今天的活動已結束。明天尚未決定。")),{type:"commitChapter",info:chapter10Info,next:"ending_router"}];
nodes.ch10_final_1=C10Finish(C10P("尚未完成的日常事件被保留下來，仍能在之後繼續。"));
nodes.ch10_final_2=C10Finish(C10P("「勉強可以替你留位置。」","蘇璟辰"),C10P("共同餐桌多出一張沒有任何標示的椅子。"));
nodes.ch10_final_3=C10Finish(C10P("「我還沒決定。」","黎靖"),C10P("「明天再決定。」","你"),C10P("「好。」","黎靖"));
nodes.ch10_final_4=C10Finish(C10P("「很會避答。」","蘇璟辰"),C10P("「跟你學的。」","你"),C10P("他低聲笑了一下，沒有要求你承諾回來。"));

// 數值平衡版：第一至第九章的舊版實際增減值調整為新版數值（新版為原值兩倍）。
const balancedStatKeys=new Set(["affection","suAffinity","investigation","belief"]);
const balancedStatText=/^(\s*-?\s*)(黎靖好感度|蘇璟辰好感度|調查度|相信值)([＋+－−-])(\d+)(%?\s*)$/;
for(const [nodeId,commands] of Object.entries(nodes)){
 if(nodeId.startsWith("ch10_")||nodeId==="chapter10_start"||nodeId.startsWith("ending_"))continue;
 for(const command of commands||[]){
  for(const effect of command.items||[])if(effect.kind==="stat"&&balancedStatKeys.has(effect.key))effect.amount=Number(effect.amount||0)*2;
  const update=page=>{if(!page?.text)return;page.text=page.text.replace(balancedStatText,(_,lead,label,sign,value,end)=>`${lead}${label}${sign}${Number(value)*2}${end}`)};
  for(const page of command.pages||[])update(page);
  if(command.type==="notice")update(command.page);
 }
}

// 結局統一演出：最後選擇後直接黑場淡出，再顯示結局標題與正文。
for(const [nodeId,commands] of Object.entries(nodes)){
 if(!/^ending_(?:a|b|c|d|e|f|g|true)$/.test(nodeId)||!Array.isArray(commands))continue;
 // 不顯示 Ending 名稱、條件、設計摘要或「結局末句」等製作文字，只留下實際劇情。
 for(let i=commands.length-1;i>=0;i--){
  const command=commands[i];
  if(command?.type==="section"){commands.splice(i,1);continue}
  if(command?.type!=="text"||!Array.isArray(command.pages))continue;
  command.pages=command.pages.filter(page=>{
   const text=String(page?.text||"").trim();
   return !(/^(?:條件|解鎖條件)[：:]/.test(text)||/(?:黎靖|蘇璟辰|雙)100%好感(?:特殊|真)結局/.test(text)||text==="結局末句：");
  });
  for(const page of command.pages){
   if(typeof page.text==="string")page.text=page.text.replace(/^章末，/,"那天晚上，").replaceAll("玩家房門","你的房門");
  }
 }
 if(commands[0]?.type!=="animation")commands.unshift({type:"animation",effect:"fade-black",duration:1250});
}

// 第七章最終路線只記錄一次；第八章依既有選擇自動呈現結果，不讓玩家重新選擇。
const chapter7RouteFlags={
 ch7_s15_b1:"ch7_route_sacrifice",
 ch7_s15_b2:"ch7_route_player_stays",
 ch7_s15_b3:"ch7_route_destroy_manuscript",
 ch7_s15_b4:"ch7_route_character_decides",
 ch7_s15_b5:"ch7_route_margin_sentence"
};
for(const [nodeId,flag] of Object.entries(chapter7RouteFlags)){
 const commands=nodes[nodeId]||[];let effectCommand=commands.find(command=>command.type==="effects");
 if(!effectCommand){const jumpIndex=commands.findIndex(command=>command.type==="jump");effectCommand={type:"effects",items:[]};commands.splice(jumpIndex<0?commands.length:jumpIndex,0,effectCommand)}
 effectCommand.items=effectCommand.items||[];
 if(!effectCommand.items.some(effect=>effect.kind==="flag"&&effect.name===flag))effectCommand.items.push(C10F(flag));
}
const ch8OriginalPages=(nodes.ch8_s1||[]).find(command=>command.type==="text")?.pages||[];
const ch8VisibleIntro=ch8OriginalPages.filter(page=>page?.text&&!/(?:玩家在第七章選擇的路線不同|^若玩家(?:犧牲|代替|摧毀|將選擇|在裁切線外)|畫面中央浮現三項書寫內容|【請完成下一格。】)/.test(page.text));
const chapter8StartPages=(nodes.chapter8_start||[]).find(command=>command.type==="text")?.pages||[];
const routeMarkerIndex=chapter8StartPages.findIndex(page=>page?.text==="玩家在第七章選擇的路線不同，書中內容也會隨之改變。");
const chapter8BeforeRoute=routeMarkerIndex>=0?chapter8StartPages.slice(0,routeMarkerIndex):chapter8StartPages;
const chapter8AfterRoute=routeMarkerIndex>=0?chapter8StartPages.slice(routeMarkerIndex+1).filter(page=>
 !/^若玩家/.test(page?.text||"")&&page?.text!=="無論先前選擇為何，漫畫都在你們返回老宅後停止。"
):[];
nodes.chapter8_start=[{type:"section",title:"第八章｜事故"},C10T(...chapter8BeforeRoute),{type:"condition",test:{kind:"flag",name:"ch7_route_sacrifice"},yes:"ch8_route_result_1",no:"ch8_route_check_2"}];
nodes.ch8_route_check_2=[{type:"condition",test:{kind:"flag",name:"ch7_route_player_stays"},yes:"ch8_route_result_2",no:"ch8_route_check_3"}];
nodes.ch8_route_check_3=[{type:"condition",test:{kind:"flag",name:"ch7_route_destroy_manuscript"},yes:"ch8_route_result_3",no:"ch8_route_check_4"}];
nodes.ch8_route_check_4=[{type:"condition",test:{kind:"flag",name:"ch7_route_character_decides"},yes:"ch8_route_result_4",no:"ch8_route_result_5"}];
nodes.ch8_route_result_1=[C10T(C10P("最後一頁會畫著恢復光明的城市，以及一株從角色消失處重新長出的黑色植物。")),C10Jump("ch8_start_after_route")];
nodes.ch8_route_result_2=[C10T(C10P("漫畫裡的你會停在城市中央，書外的你卻仍然站在老宅客廳，兩個「你」同時存在。")),C10Jump("ch8_start_after_route")];
nodes.ch8_route_result_3=[C10T(C10P("部分頁面會只剩空白，但紙面仍傳來極輕的交談聲。")),C10Jump("ch8_start_after_route")];
nodes.ch8_route_result_4=[C10T(C10P("最後一頁會持續生成新的分鏡，居民在沒有旁白的情況下離開原定位置。")),C10Jump("ch8_start_after_route")];
nodes.ch8_route_result_5=[C10T(C10P("那句話不會出現在正式頁面裡，卻能在書頁邊緣摸到一道微微凸起的墨痕。")),C10Jump("ch8_start_after_route")];
nodes.ch8_start_after_route=[C10T(...chapter8AfterRoute),C10Jump("ch8_s1")];
nodes.ch8_s1=[
 C10T(C10P("你沒有碰那支筆，書頁上仍緩慢浮出一行字。")),
 {type:"notice",page:C10P("【書寫功能已開放】")},
 C10T(C10P("第二行緊接著出現。"),C10P("【持筆者可以決定下一格發生的事件。】"),C10P("第三行停頓了很久。"),C10P("【被寫下的內容，將依相信程度進入現實。】"),C10P("黎靖看向你。"),C10P("「和蘇璟辰的能力一樣。」","黎靖"),C10P("「但他不在這裡。」","你"),C10P("「不代表不是他做的。」","黎靖"),C10P("你試著呼喚蘇璟辰。"),C10P("「你在嗎？」","你"),C10P("老宅沒有回應。"),C10P("貼滿原稿的房門沒有出現，樓梯上方也沒有傳來畫筆聲。從漫畫世界回來以後，蘇璟辰像完全離開了這棟老宅。"),C10P("桌上的筆自行滾動半圈，筆尖朝向你。")),
 C10Jump("ch8_written_results")
];
nodes.ch8_written_results=[C10T(C10P("【請完成下一格。】"),C10P("【蘇璟辰出現在客廳。】"),C10P("【玄關大門通往安全的現實。】"),C10P("【第十三冊不具有任何力量。】"),C10P("三個選項分別對應你目前最需要確認的事情。"),C10P("找到蘇璟辰，確保自己可以離開，否定這本漫畫對現實的影響。")),C10Jump("ch8_s1_refuse")];

// 「第一項書寫｜讓誰出現」是正式四選一；保留玩家書寫內容與內部結局條件。
nodes.ch8_s2=[{type:"choice",options:[
 {label:"寫下「蘇璟辰出現在客廳」",next:"ch8_s2_b1"},
 {label:"寫下「讓真正的蘇璟辰出現」",next:"ch8_s2_b2"},
 {label:"不寫蘇璟辰，寫下「請本人決定是否出現」",next:"ch8_s2_b3"},
 {label:"將筆交給黎靖",next:"ch8_s2_b4"}
]}];
const invitationPages=(nodes.ch8_s2_b3||[]).find(command=>command.type==="text")?.pages;
if(invitationPages&&!invitationPages.some(page=>page.text==="若蘇璟辰願意，他可以自己出現。"))invitationPages.splice(1,0,C10P("若蘇璟辰願意，他可以自己出現。"));
for(const [nodeId,flag] of [["ch8_s2_b2","拒絕替他人定義真正版本"],["ch8_s2_b3","允許蘇璟辰拒絕出現"],["ch8_s2_b4","黎靖以自己的意願使用筆名"]]){
 const commands=nodes[nodeId]||[];const effectCommand=commands.find(command=>command.type==="effects");
 if(effectCommand&&!effectCommand.items.some(effect=>effect.kind==="flag"&&effect.name===flag))effectCommand.items.push(C10F(flag));
}

// 只有第一項書寫會產生複製體；其餘三項直接進入作者欄事件。
for(const nodeId of ["ch8_s2_b2","ch8_s2_b3","ch8_s2_b4"]){const jump=(nodes[nodeId]||[]).find(command=>command.type==="jump");if(jump)jump.target="ch8_s5"}
const createdSuPages=(nodes.ch8_s3||[]).find(command=>command.type==="text")?.pages;
if(createdSuPages&&!createdSuPages.some(page=>page.text?.startsWith("他知道育幼院")))createdSuPages.unshift(C10P("他知道育幼院、學校、黑貓與山區事故，也能說出蘇璟辰病歷裡的內容。他甚至記得漫畫世界中未命名角色的存在。你詢問任何已知事件，他都能回答，然而，當問題涉及尚未揭露的內容，他便會停頓。"));
if(createdSuPages){const identityPage=createdSuPages.find(page=>page.text?.includes("如果我不是蘇璟辰，我是誰"));if(identityPage){identityPage.text="「如果我不是蘇璟辰，我是誰？」";identityPage.speaker="蘇璟辰？"}}
const erasePages=(nodes.ch8_s4_b4||[]).find(command=>command.type==="text")?.pages;
if(erasePages){const eraseResult=erasePages.find(page=>page.text?.startsWith("你仍然選擇擦除。"));if(eraseResult)eraseResult.text=eraseResult.text.replace(/^你仍然選擇擦除。/ ,"")}
nodes.ch8_s5=[{type:"animation",effect:"flicker",duration:550},C10T(
 C10P("最先出現的是："),C10P("作者：黎靖"),C10P("幾秒後，「黎靖」被劃掉。"),
 C10P("第二個版本變成："),C10P("作者：蘇璟辰"),C10P("這次沒有立刻消失，卻逐漸向右移動，像在為另一個名字騰出空間。"),
 C10P("第三個版本是："),C10P("作者：蘇璟辰、███"),
 C10P("後方姓名遭黑色墨水遮住，黎靖用指尖擦過黑色區塊。墨水沒有擴散，只露出一小部分筆畫，不是你的名字，也不是未命名角色。"),
 C10P("「剛才在漫畫世界外翻書的人。」","你"),C10P("「可能。」","黎靖"),C10P("「這本書是他做的？」","你"),C10P("「至少他碰過。」","黎靖"),
 C10P("第十三冊忽然自行闔上，封面反射出一道不屬於你們的身影。那個人站在客廳入口，穿著深色外套，手裡抱著一疊用資料夾固定的漫畫原稿，臉同樣被黑暗遮住。他沒有粉色頭髮，頸部也沒有繃帶，正是漫畫世界外翻閱書頁的人。"),
 C10P("你立刻回頭，客廳入口空無一人。封面倒影裡的身影卻仍站在原處，他抬起手，指向樓梯旁一扇從未開啟的門，門牌逐漸浮現。"),C10P("編輯室")
),C10Jump("ch8_s6")];

// 所有第三章節點完成覆寫後再清一次，避免後補劇情重新帶回「你」的姓名框。
for(const [nodeId,commands] of Object.entries(nodes))if(nodeId.startsWith("ch3_")||nodeId.startsWith("memory_"))for(const command of commands||[])for(const page of command.pages||[])if(page?.speaker==="你")page.speaker="";
// 僅覆寫文件指定的數值；不改動文本、選項、跳轉、演出或其他效果。
const valueOnlyRebalance={"initial_near:1":[3,2],"initial_call:1":[2,3],"name_direct:3":[3],"chapter2_enter_truth:1":[2,3],"chapter2_enter_rule:1":[3],"chapter2_enter_care:1":[3,2],"chapter2_orphan_name:1":[3],"chapter2_orphan_watch:1":[-2,3],"chapter2_tell_all:1":[3,2],"ch3_option_15:2":[3],"ch3_option_22:1":[3],"ch3_option_27:1":[3,2],"ch3_option_28:1":[2,3],"ch3_option_33:6":[-2,3],"ch3_option_39:1":[3],"ch4_option_4:2":[3],"ch4_option_5:1":[4,-2],"ch4_option_11:2":[3,2],"ch4_option_12:2":[2,3],"ch4_option_25:1":[4,2],"ch4_option_26:3":[4,-2,2],"ch4_option_30:2":[4,2,-2],"ch4_option_36:3":[4],"ch4_option_37:3":[4],"ch4_option_38:2":[3],"ch4_option_44:1":[3,2,2],"ch4_option_45:1":[4],"ch4_option_46:2":[4,-2],"ch4_option_52:2":[4,3,-2],"ch4_option_53:1":[3,3],"ch5_option_4:2":[3,-2],"ch5_option_5:1":[3],"ch5_option_12:2":[4],"ch5_option_17:1":[4],"ch5_option_26:1":[4],"ch5_option_27:1":[3],"ch5_option_33:1":[3],"ch5_option_34:1":[4],"ch5_option_35:1":[4],"ch5_option_39:1":[5,-4],"ch5_option_40:1":[4,-2,3],"ch5_option_41:2":[3],"ch5_option_45:1":[4],"ch5_option_46:1":[3,3,-2],"ch6_first_1:2":[5],"ch6_escape_2:3":[3],"ch6_escape_3:1":[4],"ch6_investigation_1_1:2":[3],"ch6_investigation_1_2:2":[3],"ch6_investigation_1_3:2":[3],"ch6_investigation_2_1:3":[3],"ch6_investigation_2_2:3":[3],"ch6_investigation_2_3:3":[3],"ch6_investigation_3_1:3":[4],"ch6_investigation_3_2:3":[4],"ch6_investigation_3_3:3":[4],"ch6_second_2:3":[5],"ch6_second_3:3":[3],"ch6_door_3:2":[3],"ch6_foyer_1:1":[3,2],"ch6_foyer_2:1":[4],"ch7_s2_b2:4":[4],"ch7_s2_b4:3":[5],"ch7_s4:4":[3],"ch7_s7_b2:6":[3,3],"ch7_s7_b3:4":[4],"ch7_s9_b1:2":[5],"ch7_s9_b3:4":[4],"ch7_s11_b2:3":[3],"ch7_s12:5":[5],"ch7_s15_b2:3":[7],"ch7_s15_b4:3":[4],"ch7_s15_b5:6":[5,4],"ch8_s2_b1:4":[5],"ch8_s2_b2:5":[4],"ch8_s2_b3:4":[4],"ch8_s2_b4:3":[4],"ch8_s4_b1:2":[7],"ch8_s4_b3:3":[3],"ch8_s6:5":[3],"ch8_s8_b1:6":[4,3],"ch8_s8_b2:5":[4],"ch8_s8_b3:6":[4,3],"ch8_s8_b4:3":[4],"ch8_s8_b5:2":[3],"ch8_s9_b3:4":[4,3],"ch8_s9_b4:3":[3],"ch8_s11_b1:3":[5],"ch8_s11_b2:4":[3,2],"ch8_s11_b3:2":[4],"ch8_s12_b1:2":[3],"ch8_s12_b2:2":[3],"ch8_s12_b3:3":[3,2],"ch8_s14_b2:3":[5],"ch8_s14_b3:4":[3,2],"ch8_s14_b4:4":[5,3],"ch8_s15:5":[5,4],"ch8_s17_b1:3":[4],"ch8_s17_b3:2":[5],"ch8_s19_b5:3":[4],"ch8_s23_b1:2":[4],"ch8_s23_b2:2":[3],"ch8_s23_b3:6":[4,4,3],"ch9_s2_b1:2":[7],"ch9_s2_b4:8":[4,3],"ch9_s3:6":[4,4,3],"ch9_s5_b1:3":[5],"ch9_s5_b3:3":[4],"ch9_s5_b4:7":[5,5,4],"ch9_s7_b3:3":[8],"ch9_s7_b4:4":[5],"ch9_s10_b4:2":[5],"ch9_s11_b1:6":[4],"ch9_s11_b2:2":[3],"ch9_s11_b3:4":[4,3],"ch9_s11_b4:3":[3],"ch9_s13_b3:3":[6,4],"ch9_s13_b4:2":[6],"ch9_s15_b4:4":[8,4],"ch9_s17:10":[6,4],"ch9_s20_b2:3":[4],"ch9_s20_b3:2":[5],"ch9_s21:4":[5,4],"memory_office_chair:0":[3],"ch4_report_after_state:2":[3],"ch10_clean_repeat_1:1":[5,3],"ch10_clean_repeat_2:1":[5,3],"ch10_clean_repeat_3:1":[3,3],"ch10_walk_repeat_1:1":[6],"ch10_walk_repeat_2:1":[5],"ch10_table_repeat_1:1":[8],"ch10_table_repeat_2:1":[6],"ch10_table_repeat_3:1":[5],"ch10_rest_repeat_1:1":[6],"ch10_clean_1:1":[3],"ch10_clean_2:1":[5,5],"ch10_clean_3:1":[6],"ch10_walk_1:1":[6],"ch10_walk_2:1":[5,3],"ch10_walk_3:1":[7,2],"ch10_table_1:1":[6],"ch10_table_2:1":[8,4],"ch10_table_3:1":[6,4],"ch10_files_1:1":[7,5],"ch10_files_2:1":[8,6],"ch10_files_3:1":[7],"ch10_rest_2:1":[4],"ch10_nothing:1":[5,4]};
for(const [address,amounts] of Object.entries(valueOnlyRebalance)){
 const split=address.lastIndexOf(":");const nodeId=address.slice(0,split),commandIndex=Number(address.slice(split+1));
 const command=nodes[nodeId]?.[commandIndex];if(!command)continue;
 const statItems=(command.items||[]).filter(effect=>effect.kind==="stat"&&balancedStatKeys.has(effect.key));
 amounts.forEach((amount,index)=>{if(statItems[index])statItems[index].amount=amount});
}
// END VALUE-ONLY REBALANCE
})();
