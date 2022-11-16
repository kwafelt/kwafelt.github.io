// Hanna Sofea's comrade / workstations: writ.er.ws / written by kwafelt / 20221005.
with (window){oncontextmenu = function(){permissions(`denied`); return false}; onselectstart = function(){return false}; ondragstart = function(){return false}; onmousedown = function(){return true}; ondblclick = function(){return false}};
self.document.title = `\u200E`; window.status = `static-site`; let txt = ` ~ writ.er.ws / kwafelt was here`;
//
let origin = self.location.origin; let protocol = self.location.protocol; let hostnm = self.location.hostname; let pathnm = self.location.pathname;
let startr = function(){console.log(`dataset:${hostnm}${pathnm}?payload=success`); self.setTimeout(function(){active(0)},250);};
//
let library = [`625:781`,`738:740`,`740:741`,`631:846`,`640:771`,`725:760`,`668:482`,`627:629`,`690:699`,`746:801`,`750:885`,`545:658`,`686:826`,`678:874`,`726:855`]

if (window.addEventListener){window.addEventListener(`DOMContentLoaded`,startr,false)}// W3C standard
else if (window.attachEvent){window.attachEvent(`onload`,startr)}// Microsoft
//:
let blurb = [``,`We’re glad you’re here, ..`]; repo = `https://github.com/kwafelt/bin101`
//
var chimes = `https://static.olark.com/jsclient/sounds:/olark-chimes.ogg`
var beep = `./src/audio/Alarm_Beep_02.ogg`;
let kill = `./xyzbca/file_b.md`
//
let msg; let pos = 0; let scrollMSG = function(raw){
 msg = raw; document.title = msg.substring(pos,msg.length) + msg.substring(0,pos);
 pos++; if (pos > msg.length) pos = 0; self.setTimeout(`scrollMSG(msg)`,300);
};// call script with: scrollMSG(input-text-here + ' ')
//
let $EL = function(c,e){ return (c == `cre` ? document.createElement(e) : c == 'cls' ? document.getElementsByClassName(e) : c == 'get' ? document.getElementById(e) : c == 'tag' ? document.getElementsByTagName(e) : c == 'que' ? document.querySelectorAll(e) : alert(c + e))};
//
let permissions = function(state){// state : 'granted' || 'prompt' || 'denied'
 let txt; txt = state == `granted` ? `Access Granted` : `Access Denied`; let sid; sid = state == `granted` ? `gran` : `deni`;
 let ogg = new Audio(); ogg.src = beep; ogg.preload = 'metadata'; ogg.oncanplay = ogg.play();
 let prm = $EL('cre','p'); prm.className = 'prm'; prm.setAttribute('id', sid);
 prm.textContent = txt; document.body.appendChild(prm); setTimeout(function(){removeElement(prm.id)},1000)
}; let removeElement = function(DELete){let DEL = $EL('get',DELete); DEL.remove();}// P A U S E : result
//
let istart = function(init){
  let tx = ['PLEASE PROVE THAT YOU ARE HUMAN','<a class="button" data-cli="human">OK</a><a class="button" data-cli="robot">&times</a>'];
  let mn = $EL('tag','main')[0]; let sc = $EL('cre','section'); sc.className = 'land cgrid';
  let p1 = $EL('cre','p'); p1.className = 'land'; p1.textContent = tx[0];
  let p2 = $EL('cre','p'); p2.className = 'form'; p2.innerHTML = tx[1];
  mn.appendChild(sc); sc.appendChild(p1); sc.appendChild(p2);
  var la = document.querySelectorAll('.form a'); la.length;
  for (var i = 0; i < la.length; i++){
    la[i].addEventListener('click',function(){rewrit(this.dataset.cli);},false);
  }
};
let rewrit = function(init){
  if (init == 'human'){permissions('granted'); active('granted');}
  else permissions('denied');
}; //self.setTimeout(function(){tekan(0)},500);
//
let active = function(init){
  let wr = window.location.search; ws = wr.substr(1,wr.length);
  num = (ws == `stt=ott` ? 0 : ws == `stt=err` ? 1 : ws == `ctf=dfm` ? 2 : ws == `ctf=log` ? 3 : 9);
  que = wr.includes(`?`); if (que){wbapps(num);} else {deface(1);}
};// honeyp ? honeypot : index; 
let cleanr = function(init){
  window.location.reload(true);
};// HARD-RELOAD / REFRESH-FROM-SERVER
let deface = function(init){
  co = `<p class="p0">hnnsfea’s comrade</p><p class="p1">Locked out of server / kwafelt was here</p>`
  const def = $EL(`cre`,`section`); def.className = `deface`; def.innerHTML = co; console.log(`3_3nd1ng5}`);
  if (init == '1'){
    let m4a = new Audio(); m4a.src = `./audio/Botingkek.m4a?cache=true`;
    m4a.preload = `metadata`; m4a.oncanplay = m4a.play();}
  $EL(`tag`,`main`)[0].replaceChildren(def);
};
let verify = function(c1,c2){
  b1 = (c1 * c2).toString(); b2 = b1.substr(2,4);
  return b2
};
let wbapps = function(num){
  console.log(`re-write: ${document.readyState}`); switch (num){
    case 0:
    let m4a = new Audio(); m4a.src = `./audio/Botingkek.m4a?cache=true`;
    m4a.preload = `metadata`; m4a.oncanplay = m4a.play();
    $EL(`tag`,`main`)[0].replaceChildren(``);
    break; case 1:
    $EL(`tag`,`main`)[0].replaceChildren(``); deface(0);
    break; case 2:
    accs = `
    <p class="p1">Enter your authorized 'CTF' access code</p><form action="javascript:txtacc(0);" name="access">
    <input type="text" id="code" name="code" maxlength="6"><input type="hidden" value="submit"></form>
    <p class="p1">hint: kod dari thread forum</p>`
    const s2 = $EL(`cre`,`section`); s2.className = `access panel_grid`; s2.innerHTML = accs;
    $EL(`tag`,`main`)[0].replaceChildren(s2); $EL(`tag`,`input`)[0].focus();
    break; case 3:
    pass = `
    <p class="p0">STAFF-ONLY</p>
    <form action="javascript:staff(1);" method="post" name="staffl">
    <input type="text" placeholder="Enter Username" maxlength="7" name="uname" id="usern" required>
    <input type="password" placeholder="Enter Password" maxlength="8" name="passw" id="passw" required>
    <input type="submit" value="Login"></form>
    <p class="p1"><br><a onclick="staff(0)">Forgot password ?</a></p>`
    const s3 = $EL(`cre`,`section`); s3.className = `access panel_grid`; s3.innerHTML = pass;
    $EL(`tag`,`main`)[0].replaceChildren(s3); $EL(`tag`,`input`)[0].focus();
    break; default:
    err4 = `
    <p class="er"><span class="e1">This site can’t be reach</span><br><span class="e2">${hostnm}${pathnm} refused to connect.</span>
    <br><code class="mono"><br>ERR_CONNECTION_REFUSED</code></p>`
    const xx = $EL(`cre`,`section`); xx.className = `errors panel_grid`;
    $EL(`tag`,`main`)[0].replaceChildren(xx); xx.innerHTML = err4;
  };
};
//
let base64 = function(b64,str){
  let data = (b64 == 'enc' ? btoa(str) : b64 == 'dec' ? atob(str) : '-e-r-r-o-r-s-');
  return data;
};
//
let menu = function(init){// masukkan onclick dalam menu
  var m = $EL('que','.start a'); m.length; for (var i = 0; i < m.length; i++){
    m[i].addEventListener('click',function(){goTo(this.dataset.r)},false);
};};
//
let goTo = function(init){permissions('granted')}

let readDOC = function(txt, callback){
  const xhttp = new XMLHttpRequest(); xhttp.onload = function(){
    var cdata = this.responseText; self.setTimeout(function(){callback(cdata);},500);}
  xhttp.open('GET',txt,true); xhttp.send();
}
let datatxt = function(DAT){
  const DOC = window.open(``,``,``,``);
  DOC.document.write(DAT); DOC.focus(); DOC.onblur = function(){DOC.close();}
}
let process = function(init){
  let ssL = init.substr(c4,init.length); ssM = base64('dec',ssL);
  endr = `
  <p class="pE"><code style="font:normal 18px/110% 'consolas',monospace;white-space:pre-wrap;">${ssM}</code></p>`
  const s2 = $EL(`cre`,`section`); s2.className = `endr`; s2.innerHTML = endr;
  $EL(`tag`,`main`)[0].replaceChildren(s2); //self.location.replace(`${origin}`);
}; let RESETR = function(init){readDOC(init, process)}

let projection = function(){
 var fllscrn = $EL('tag','body')[0];
 if ((document.fullscreenElement == null || document.fullscreenElement == undefined) && (document.webkitFullscreenElement == null || document.webkitFullscreenElement == undefined)){// go full-screen
  if (fllscrn.requestFullscreen){fllscrn.requestFullscreen()}
  else if (fllscrn.webkitRequestFullscreen){fllscrn.webkitRequestFullscreen()}
 } else {// exit full-screen
  if (document.exitFullscreen){document.exitFullscreen()}
  else if (document.webkitExitFullscreen){document.webkitExitFullscreen()}
  };
};// kemaskini 13 nov 2022 //let text = String.fromCharCode(72, 69, 76, 76, 79);

draft = `
let section = function(init){
 let element = $EL('que',init);
 if(typeof(element) != 'undefined' && element != null){
  let elemnt = $EL('cre',init); alert('OK')
 } else {
  let create = $EL('cre',init); alert('NEW');
 }
}
`
