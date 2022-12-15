// hnnsfea's comrade / workstations: writ.er.ws / written by kwafelt / 20221120.
with (window){oncontextmenu = function(){/*permissions(`denied`); */return false}; onselectstart = function(){return false}; ondragstart = function(){return false}; onmousedown = function(){return true}; ondblclick = function(){return false}};
//
self.document.title = `\u200E`; document.cookie = `\u200E=WTJocGNITnRiM0psTXc9PQ==; Path=/`; window.status = `static-site`; let txt = ` ~ writ.er.ws / kwafelt was here`;
//
let origin = self.location.origin; let hostnm = self.location.hostname; const honeypot = `./ncrypt.dat`;
let portnm = (self.location.port === `` ? `` : `:${self.location.port}`); let pathnm = self.location.pathname;
let startr = function(){console.log(`stack:${hostnm}${portnm}${pathnm}?payload=success`); self.setTimeout(function(){access(1)},100);};
//
let library = [`625:781`,`738:740`,`740:741`,`631:846`,`640:771`,`725:760`,`668:482`,`627:629`,`690:699`,`746:801`,`750:885`,`545:658`,`686:826`,`678:874`,`726:855`]

if (window.addEventListener){window.addEventListener(`DOMContentLoaded`,startr,false)}// W3C standard
else if (window.attachEvent){window.attachEvent(`onload`,startr)}// Microsoft
//:
let blurb = [``,`We’re glad you’re here, ..`]; var repo = `https://github.com/kwafelt/bin101`;
//
let chimes = `https://static.olark.com/jsclient/sounds/olark-chimes.ogg`; let beep = [``,`./audio/Alarm_Beep_02.ogg`];
//
let msg; let pos = 0; let scrollMSG = function(raw){
 msg = raw; document.title = msg.substring(pos,msg.length) + msg.substring(0,pos);
 pos++; if (pos > msg.length) pos = 0; self.setTimeout(`scrollMSG(msg)`,300);
};// call script with: scrollMSG(input-text-here + ' ')
//
let $EL = function(c,e){ return (c == `cre` ? document.createElement(e) : c == 'cls' ? document.getElementsByClassName(e) : c == 'get' ? document.getElementById(e) : c == 'tag' ? document.getElementsByTagName(e) : c == 'que' ? document.querySelectorAll(e) : alert(c + e))};
//
let permissions = function(state){// state : 'granted' || 'prompt' || 'denied'
  let txt = state == `granted` ? `Access Granted` : `Access Denied`; let sid = state == `granted` ? `gran` : `deni`;
  let ogg = new Audio(); ogg.src = beep[1]; ogg.preload = `metadata`; ogg.oncanplay = ogg.play();
  let prm = $EL(`cre`,`p`); prm.className = `prm`; prm.setAttribute(`id`, sid);
  prm.textContent = txt; document.body.appendChild(prm); setTimeout(function(){removeElement(prm.id)},1000)
}; let removeElement = function(DELete){let DEL = $EL('get',DELete); DEL.remove();}// P A U S E : result
//
let access = function(init){
//let milliseconds = new Date().getTime(); let unix = Math.round(+new Date()/1000);
  let UNIQUE = Math.round(+new Date().getTime()/1000);
  let timestamp = localStorage.getItem(`clockwork`); if (timestamp === null){
    localStorage.setItem(`clockwork`,`${UNIQUE}`); checkr(init);} else {
    if ((UNIQUE - timestamp) < 86400){ checkr(`pass`);} else {
    self.localStorage.clear(); self.sessionStorage.clear();// localStorage.removeItem(`clockwork`);
    self.location.reload(true);// HARD-RELOAD-FROM-SERVER
  };}
  // var countDownDate = Math.round(+new Date("Nov 17, 2022").getTime()/1000);
  // var countDownDat2 = Math.round(+new Date("Nov 18, 2022").getTime()/1000);
  // var calc = (countDownDat2 - countDownDate); alert(`${countDownDate} : ${countDownDat2} : ${calc}`)
  // localStorage.clear()
};
//
let b1skut = function(init){
  alert(`biskut`);
}
let bssix4 = function(b64,str){ return (b64 == 'enc' ? btoa(str) : b64 == 'dec' ? atob(str) : void(0));};
//
let checkr = function(init){
  let IDLE = sessionStorage.getItem(`status`); if (IDLE == `challenge`){
  return;} else { client(init)};
};
let client = function(init){
  switch(init){ case 0:
  let addr = sessionStorage.getItem(`address`); if (addr == `` && addr == null){ addr = localhost}; let cont = `
  <p class="s01">Error 1020</p><p class="s02">Access denied</p><p class="s03">What happened?</p>
  <p class="s04">This website is using a security service to protect itself from online attacks.</p>
  <p class="cli"><a href="javascript:biskut(0);">continue</a></p>
  <p class="s05">Cloudflare Ray ID: 623d572b1e6123e0 • Your IP: ${addr} • Performance & security by Cloudflare</p>`
  const acc = $EL(`cre`,`section`); acc.className = `errors secure flex`;
  $EL(`tag`,`main`)[0].replaceChildren(acc); acc.innerHTML = cont;
  break; case 1:
  let ask = `<p class="land">PLEASE PROVE THAT YOU ARE HUMAN</p><p class="form">
  <a class="button" data-cli="human">OK</a><a class="button" data-cli="robot">&times</a></p>`
  const who = $EL(`cre`,`section`); who.className = `land cgrid`; who.innerHTML = ask;
  $EL(`tag`,`main`)[0].replaceChildren(who);
  //
  let cl = document.querySelectorAll('.form a'); cl.length; for (var i = 0; i < cl.length;
  i++){ cl[i].addEventListener('click',function(){rewrit(this.dataset.cli);},false);
  }; break; default:
  questr(`pass`);
}};
//
let feedxm = function(txt, callback){
  const xhttp = new XMLHttpRequest(); xhttp.onload = function(){
    var cdata = this.responseText; self.setTimeout(function(){callback(cdata);},500);}
  xhttp.open('GET',txt,true); xhttp.send();
}
let feedxt = async function(init, callback){
  let t1 = await fetch(init); let t2 = await t1.text(0);
  callback(t2);
}
//
let proccd = function(init, callb){
  if (init == `pass`){permissions(`granted`); callb(init);}
  else {permissions(`denied`); void(0);}
}
//
let rewrit = function(init){
  if (init == 'human'){permissions('granted'); self.location.reload(0);}
  else permissions('denied');
}; //self.setTimeout(function(){tekan(0)},500);
//

let guestw = function(init){
  switch (init){
  case 0: let ask = `<p class="land">PLEASE PROVE THAT YOU ARE HUMAN</p><p class="form">
  <a class="button" data-cli="human">OK</a><a class="button" data-cli="robot">&times</a></p>`
  const who = $EL(`cre`,`section`); who.className = `land cgrid`; who.innerHTML = ask;
  $EL(`tag`,`main`)[0].replaceChildren(who);
  //
  let cl = document.querySelectorAll('.form a'); cl.length; for (var i = 0; i < cl.length;
  i++){ cl[i].addEventListener('click',function(){rewrit(this.dataset.cli);},false);
  }; break; default:
  questr(`pass`);}
};
//
let questr = function(init){
  let que = self.location.search; let sub = que.substr(1,que.length);
  let inc = que.includes(`?`); if (inc == true){
  active(`none`);} else { deface(0);}
}
//
let active = function(init){
  console.log(`re-write: ${document.readyState}`); switch (init){
  case `none`: window.location.replace(`${origin}`);
  break; case `debug`: errors(1020);
  break; case `stt=ott`: deface(`pass`);
  break; case `stt=err`: er4 = `
  <p class="er"><span class="e1">404 - PAGE NOT FOUND</span><br>The link is broken or the page<br>has been moved.</p>`
  const err = $EL(`cre`,`section`); err.className = `errors cgrid`;
  $EL(`tag`,`main`)[0].replaceChildren(err); err.innerHTML = er4;
  break; case `ctf=dfm`: EVT = `
  <p class="p0">.EVENT-CLOSED</p>`;
  const CTF = $EL(`cre`,`section`); CTF.className = `errors panel_grid`;
  $EL(`tag`,`main`)[0].replaceChildren(CTF); CTF.innerHTML = EVT;
  break; default: RED = `
  <p class="er"><span class="e1">This site can’t be reach</span><br><span class="e2">${hostnm}${pathnm} refused to connect.</span>
  <br><code class="mono"><br>ERR_CONNECTION_REFUSED</code></p>`;
  const CON = $EL(`cre`,`section`); CON.className = `errors panel_grid`;
  $EL(`tag`,`main`)[0].replaceChildren(CON); CON.innerHTML = RED;}
}
//
let custom = function(init){
  let bLOb = Number(window.status); let v4L0 = ((bLOb*2) - 20);
  let cdat0 = init.substr(v4L0); let cdat1 = bssix4(`dec`,cdat0);
  const acc = $EL(`cre`,`section`); acc.className = `secret flex`; acc.innerHTML = cdat1;
  $EL(`tag`,`main`)[0].replaceChildren(acc); $EL(`tag`,`body`)[0].className = `dark`;
}

let deface = function(init){
  co = `<p class="p0">hnnsfea’s comrade</p><p class="p1">Locked out of server / kwafelt was here</p>`
  const def = $EL(`cre`,`section`); def.className = `access deface`; def.innerHTML = co;
  if (init == 3){
    let m4a = new Audio(); m4a.src = `./audio/Botingkek.m4a?cache=true`;
    m4a.preload = `metadata`; m4a.oncanplay = m4a.play();}
  $EL(`tag`,`main`)[0].replaceChildren(def); $EL(`tag`,`body`)[0].className = `dark`;
};
//
let errors = function(init,raw){
  switch(init){
  case `404`:
  break; case `500`:
  p1 = `This page isn’t working`;
  p2 = `${hostnm} is currently unable to handle this request.`;
  p3 = `HTTP ERROR 500`;
  break; case 1020: ac = `
  <p class="s01">Error 1020</p><p class="s02">Access denied</p><p class="s03">What happened?</p>
  <p class="s04">This website is using a security service to protect itself from online attacks.</p>
  <p class="cli"><a href="javascript:biskut(0);">continue</a></p>
  <p class="s05">Cloudflare Ray ID: 623d572b1e6123e0 • Your IP: ${raw} • Performance & security by Cloudflare</p>`
  const acc = $EL(`cre`,`section`); acc.className = `errors flex`; acc.innerHTML = ac;
  $EL(`tag`,`main`)[0].replaceChildren(acc); $EL(`tag`,`main`)[0].style = ``;
  break; default:
  }
}
//
let v3rify = function(init){
  const t1 = init.split(``); let r1 = 0; for (let i1 in t1){
    r2 = t1[i1].codePointAt(0); r3 = Number(r2); r1 = r1 + r3;
  }; return r1
};
//
let datatxt = function(DAT){
  const DOC = window.open(``,``,``,``);
  DOC.document.write(DAT); DOC.focus(); DOC.onblur = function(){DOC.close();}
}
