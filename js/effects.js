(() => {
"use strict";
const body=document.body;
const flash=document.querySelector("#flashLayer");
const message=document.querySelector("#messageText");
const shatter=document.querySelector("#shatterLayer");
const mist=document.querySelector("#mistLayer");const crt=document.querySelector("#crtLayer");const ghost=document.querySelector("#ghostLayer");const pageTurn=document.querySelector("#pageTurnLayer");
function restart(className,duration){
 body.classList.remove(className);void body.offsetWidth;body.classList.add(className);
 setTimeout(()=>body.classList.remove(className),duration);
}
function parse(raw){
 const result={text:typeof raw==="string"?raw:(raw?.text||""),speaker:(typeof raw==="object"&&raw!==null&&Object.prototype.hasOwnProperty.call(raw,"speaker"))?raw.speaker:null,speed:raw?.speed||"",effects:[...(raw?.effects||[])],pauseAfter:Number(raw?.pauseAfter||0)};
 result.text=result.text.replace(/\[(shake|shake-strong|flicker|flash|tilt|glitch|shatter|mist|crt|ghost|page-turn|blur|zoom-in|zoom-out|drift|breathe|fade-black|red|zoom|slow|fast)\]/gi,(_,tag)=>{result.effects.push(tag.toLowerCase());return""});
 result.text=result.text.replace(/\[pause=(\d+)\]/gi,(_,ms)=>{result.pauseAfter=Math.max(result.pauseAfter,Number(ms));return""}).trim();
 if(result.effects.includes("slow"))result.speed="slow";
 if(result.effects.includes("fast"))result.speed="fast";
 return result;
}
function automatic(text){
 const e=[];
 if(/砰！|重重關閉|劇烈震動|猛烈撞擊|驟然展開/.test(text))e.push("shake-strong");
 else if(/咚、咚|喀。|輕輕動|震動|晃動/.test(text))e.push("shake");
 if(/你走錯了|你看錯了|雜訊|錯誤文字|改寫|蠕動/.test(text))e.push("glitch","flicker");
 if(/碎裂|崩塌|崩解|裂開/.test(text))e.push("shatter");
 if(/忽明忽滅|閃爍|警示燈/.test(text))e.push("flicker");
 if(/黑暗並沒有持續太久|畫面重新亮起|畫面.*變黑|黑場/.test(text))e.push("fade-black");
 if(/逐漸淡去|開始淡去|逐漸失去色彩/.test(text))e.push("blur","fade-black");
 if(/別再來了/.test(text))e.push("flicker","tilt");
 if(text==="在老宅裡，遇見住戶時最好有禮貌一點。")e.push("red","zoom");
 return e;
}
function clear(){
 body.classList.remove("fx-shake","fx-shake-strong","fx-flicker","fx-tilt","fx-glitch","fx-blur","fx-zoom-in","fx-zoom-out","fx-drift","fx-breathe","fx-fade-black");
 [mist,crt,ghost,pageTurn].forEach(layer=>layer?.classList.remove("active"));
 message.className="";
}
function apply(text,metadata){
 clear();
 const effects=[...new Set([...(metadata.effects||[]),...automatic(text)])];
 if(effects.includes("shake"))restart("fx-shake",480);
 if(effects.includes("shake-strong"))restart("fx-shake-strong",650);
 if(effects.includes("flicker"))restart("fx-flicker",800);
 if(effects.includes("tilt"))restart("fx-tilt",900);
 if(effects.includes("glitch"))restart("fx-glitch",600);
 if(effects.includes("blur"))restart("fx-blur",1200);
 if(effects.includes("zoom-in"))restart("fx-zoom-in",1400);
 if(effects.includes("zoom-out"))restart("fx-zoom-out",1400);
 if(effects.includes("drift"))restart("fx-drift",1600);
 if(effects.includes("breathe"))restart("fx-breathe",2400);
 if(effects.includes("fade-black"))restart("fx-fade-black",1200);
 if(effects.includes("flash")){flash.classList.remove("active");void flash.offsetWidth;flash.classList.add("active")}
 if(effects.includes("mist")&&mist){mist.classList.add("active");setTimeout(()=>mist.classList.remove("active"),2200)}
 if(effects.includes("crt")&&crt){crt.classList.add("active");setTimeout(()=>crt.classList.remove("active"),1600)}
 if(effects.includes("ghost")&&ghost){ghost.classList.add("active");setTimeout(()=>ghost.classList.remove("active"),1400)}
 if(effects.includes("page-turn")&&pageTurn){pageTurn.classList.add("active");setTimeout(()=>pageTurn.classList.remove("active"),900)}
 if(effects.includes("shatter")&&shatter){
  shatter.classList.remove("active");void shatter.offsetWidth;shatter.classList.add("active");
  setTimeout(()=>shatter.classList.remove("active"),1250);
 }
 if(effects.includes("red")||text==="在老宅裡，遇見住戶時最好有禮貌一點。")message.classList.add("text-warning");
 if(effects.includes("system"))message.classList.add("text-system");
 if(/^END 00/.test(text))message.classList.add("text-impact");
 if(/……|低沉|沙啞/.test(text))message.classList.add("text-whisper");
}
function delay(char,settings,metadata){
 let value=settings.textSpeed;
 if(metadata.speed==="slow")value=Math.max(78,value*1.7);
 if(metadata.speed==="fast")value=Math.max(12,value*.42);
 if(/[。！？]/.test(char))return value+210;
 if(/[，、；：]/.test(char))return value+85;
 if(/[……—]/.test(char))return value+125;
 return value;
}
window.VNEffects={parse,apply,clear,delay};
})();
