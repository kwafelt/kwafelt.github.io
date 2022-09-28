// Hanna Sofea's workstations / writ.er.ws / kwafelt was here..
with (window){oncontextmenu = function(){permissions('denied'); return false}; onselectstart = function(){return false}; ondragstart = function(){return false}; onmousedown = function(){return true}; ondblclick = function(){return false}};
window.status = 'static-site'; let txt = ' ~ writ.er.ws / kwafelt was here';
//
let origin = self.location.origin; let protocol = self.location.protocol; let hostnm = self.location.hostname; let pathnm = self.location.pathname;
let startr = function(){console.log(hostnm + pathnm + '?reload=success'); self.setTimeout(function(){istart(0)},500);};
//
if (window.addEventListener){window.addEventListener('load',startr,false)}// W3C standard
else if (window.attachEvent){window.attachEvent('onload',startr)}// Microsoft
//
// document.addEventListener("load", FUNCTION);
//
var chimes = 'https://static.olark.com/jsclient/sounds/olark-chimes.ogg'
var beep = './src/audio/Alarm_Beep_02.ogg';
//
let msg; let pos = 0; let scrollMSG = function(raw){
 msg = raw; document.title = msg.substring(pos,msg.length) + msg.substring(0,pos);
 pos++; if (pos > msg.length) pos = 0; self.setTimeout('scrollMSG(msg)',750);
}; // call script with: scrollMSG(input-text-here + ' ')
//
// self.setTimeout(function(){scrollMSG(txt)},500);
//
let $EL = function(c,e){ return (c == 'cre' ? document.createElement(e) : c == 'get' ? document.getElementById(e) : c == 'tag' ? document.getElementsByTagName(e) : c == 'que' ? document.querySelectorAll(e) : alert(c + e))};
//
let permissions = function(state){// state : 'granted' || 'prompt' || 'denied'
 let txt; txt = state == 'granted' ? 'Access Granted' : 'Access Denied'; let sid; sid = state == 'granted' ? 'gran' : 'deni';
 let ogg = new Audio(); ogg.src = beep; ogg.preload = 'metadata'; ogg.oncanplay = ogg.play();
 let prm = $EL('cre','p'); prm.className = 'prm'; prm.setAttribute('id', sid);
 prm.textContent = txt; document.body.appendChild(prm); setTimeout(function(){removeElement(prm.id)},1000)
}; let removeElement = function(DELete){let DEL = $EL('get',DELete); DEL.remove();}// P A U S E : result
//
let istart = function(init){
 let tx = ['please prove that you are human','<a class="button" data-cli="human">OK</a><a class="button" data-cli="robot">&times</a>'];
 let mn = $EL('tag','main')[0]; let sc = $EL('cre','section'); sc.className = 'land cgrid';
 let p1 = $EL('cre','p'); p1.className = 'land'; p1.textContent = tx[0];
 let p2 = $EL('cre','p'); p2.className = 'form'; p2.innerHTML = tx[1];
 mn.appendChild(sc); sc.appendChild(p1); sc.appendChild(p2);
 //
 var la = document.querySelectorAll('.form a'); la.length;
 for (var i = 0; i < la.length; i++){
  la[i].addEventListener('click',function(){rewrit(this.dataset.cli);},false);
}}
let rewrit = function(init){
 if (init == 'human'){permissions('granted'); active('granted');}
 else permissions('denied');
}; //self.setTimeout(function(){tekan(0)},500);
//
let active = function(init){
 let ws = window.location.search; ws = ws.substr(1,ws.length);
 if (ws == 'ctf=dfm') webapps(0);
 else webapps(null);// honeypot ?
};

let honeyp = function(i){alert('honeypot')}







let menu = function(init){// masukkan onclick dalam menu
 var m = $EL('que','.start a'); m.length; for (var i = 0; i < m.length; i++){
  m[i].addEventListener('click',function(){goTo(this.dataset.r)},false)
 }; console.log('re-write:',document.readyState)// rewrite  alert(90)+ document.readyState)};
}; self.setTimeout(function(){menu('start')},500);
//
let goTo = function(init){
permissions('granted')
}


var menuu = function(init){ // masukkan onclick dalam menu
	var m = document.querySelectorAll('.start a'); m.length
	for (var i = 0; i < m.length; i++){
		m[i].addEventListener('click',function(){goTo(this.dataset.r)},false)

	} var main = document.getElementsByTagName('main')[0]

	switch(main.dataset.w){
		case 'memoire': peal(window.location.search); break
		default: window.status = document.readyState
	} self.setTimeout(function(){consLog(init)},1000)
}; var consLog = function(i){let txt = i; console.info(txt);}

let section = function(init){
 let element = $EL('que',init);
 if(typeof(element) != 'undefined' && element != null){
  let elemnt = $EL('cre',init); alert('OK')
 } else {
  let create = $EL('cre',init); alert('NEW');
 }
}

let projection = function(){
 var fllscrn = $EL('tag','body')[0];
 if ((document.fullscreenElement == null || document.fullscreenElement == undefined) && (document.webkitFullscreenElement == null || document.webkitFullscreenElement == undefined)){// go full-screen
  if (fllscrn.requestFullscreen){fllscrn.requestFullscreen()}
  else if (fllscrn.webkitRequestFullscreen){fllscrn.webkitRequestFullscreen()}
 } else {// exit full-screen
  if (document.exitFullscreen){document.exitFullscreen()}
  else if (document.webkitExitFullscreen){document.webkitExitFullscreen()}
  };
};// kemaskini 20 sept 2022
