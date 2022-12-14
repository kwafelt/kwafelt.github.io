
// MAAF, TIADA APA DI-SINI.. DAH LAMA TAK EDIT..

// hnnsfea's comrade / workstations: writ.er.ws / written by kwafelt / 20221120.
with (window){oncontextmenu = function(){/*permissions(`denied`); */return false}; onselectstart = function(){return false}; ondragstart = function(){return false}; onmousedown = function(){return true}; ondblclick = function(){return false}};
//
self.document.title = `\u200E`; document.cookie = `\u200E=WTJocGNITnRiM0psTXc9PQ==; Path=/`; window.status = `static-site`; let txt = ` ~ writ.er.ws / kwafelt was here`;
//
let origin = self.location.origin; let hostnm = self.location.hostname; const honeypot = `./ncrypt.dat`;
let portnm = (self.location.port === `` ? `` : `:${self.location.port}`); let pathnm = self.location.pathname;
let startr = function(){console.log(`stack:${hostnm}${portnm}${pathnm}?payload=success`); self.setTimeout(function(){client(0)},100);};
//
let library = [`625:781`,`738:740`,`740:741`,`631:846`,`640:771`,`725:760`,`668:482`,`627:629`,`690:699`,`746:801`,`750:885`,`545:658`,`686:826`,`678:874`,`726:855`]

let time = new Date(); let years = time.getFullYear();

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
let bssix4 = function(b64,str){
  return (b64 == 'enc' ? btoa(str) : b64 == 'dec' ? atob(str) : '-e-r-r-o-r-s-');
};
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
let protcl = function(init){
  let ptc = `<article class=""><h1>The connection to ${hostnm} is not secure</h1><p>You are seeing this warning because this site does not support HTTPS.</p>
  <p class="click"><a class="secondary-button" id="proceed-button" href="javascript:guestw(0);">Continue to site</a>
  <a id="primary-button">Go back</a></p></article>`
  const pro = $EL(`cre`,`section`); pro.className = `cgrid smoke`; pro.innerHTML = ptc; if (self.location.protocol !== `https`){
  $EL(`tag`,`main`)[0].replaceChildren(pro);} else {alert(`OK`)}
};
//
let rewrit = function(init){
  if (init == 'human'){permissions('granted'); self.location.reload(0);}
  else permissions('denied');
}; //self.setTimeout(function(){tekan(0)},500);
//
let client = function(init){
//let milliseconds = new Date().getTime(); let unix = Math.round(+new Date()/1000);
  let UNIQUE = Math.round(+new Date().getTime()/1000);
  let timestamp = localStorage.getItem(`EVENT`); if (timestamp === null){
    localStorage.setItem(`EVENT`,`${UNIQUE}`); guestw(0);} else {
    if ((UNIQUE - timestamp) < 86400){ guestw(1);} else {
    localStorage.removeItem(`EVENT`); window.location.reload(true);// HARD-RELOAD-FROM-SERVER
    }
    // var countDownDate = Math.round(+new Date("Nov 17, 2022").getTime()/1000);
    // var countDownDat2 = Math.round(+new Date("Nov 18, 2022").getTime()/1000);
    // var calc = (countDownDat2 - countDownDate); alert(`${countDownDate} : ${countDownDat2} : ${calc}`)
    // localStorage.clear()
  };
};
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
  active(sub);} else { void(0);}
}
//
let active = function(init){
  console.log(`re-write: ${document.readyState}`); switch (init){
  case `debug`: errors(1020);
  break; case `stt=ott`: deface(`pass`);
  break; case `stt=err`: er4 = `
  <p class="er"><span class="e1">404 - PAGE NOT FOUND</span><br>The link is broken or the page<br>has been moved.</p>`
  const err = $EL(`cre`,`section`); err.className = `errors cgrid`;
  $EL(`tag`,`main`)[0].replaceChildren(err); err.innerHTML = er4;
  break; case `stt=dir`: alert(`dirbuster`);
  break; case `stt=cli`: alert(`script`)
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
  cdat0 = init.substr(years); cdat1 = bssix4(`dec`,cdat0);
  const acc = $EL(`cre`,`section`); acc.className = `secret flex`; acc.innerHTML = cdat1;
  $EL(`tag`,`main`)[0].replaceChildren(acc); $EL(`tag`,`body`)[0].className = `dark`;
}

let deface = function(init){
  co = `<p class="p0">hnnsfea’s comrade</p><p class="p1">Locked out of server / kwafelt was here</p>`
  const def = $EL(`cre`,`section`); def.className = `access deface`; def.innerHTML = co;
  if (init == 3){
    let m4a = new Audio(); m4a.src = `./audio/Botingkek.m4a?cache=true`;
    m4a.preload = `metadata`; m4a.oncanplay = m4a.play();}
  $EL(`tag`,`main`)[0].replaceChildren(def);
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
let activeorig = function(init){
  let que = window.location.search.substr(1,wr.length);
  num = (que == `stt=ott` ? 0 : que == `stt=err` ? 1 : ws == `ctf=dfm` ? 2 : ws == `ctf=log` ? 3 : 9);
  que = wr.includes(`?`); if (que){wbapps(num);} else {deface(1);}
};// honeyp ? honeypot : index; 
//
let verify = function(c1,c2){
  return (c1 * c2).toString().substr(2,4);
};
let wbapps = function(num){
  console.log(`re-write: ${document.readyState}`); switch (num){
    case 0: tools = `<p class="p0">..EVENT-CLOSED</p>`;
    const ott = $EL(`cre`,`section`); ott.className = `tools`; ott.innerHTML = tools;
//  let m4a = new Audio(); m4a.src = `./audio/Botingkek.m4a?cache=true`;
//  m4a.preload = `metadata`; m4a.oncanplay = m4a.play();
    $EL(`tag`,`main`)[0].replaceChildren(ott);
    break; case 1:
    $EL(`tag`,`main`)[0].replaceChildren(``); deface(1);
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
let menu = function(init){// masukkan onclick dalam menu
  var m = $EL('que','.start a'); m.length; for (var i = 0; i < m.length; i++){
    m[i].addEventListener('click',function(){goTo(this.dataset.r)},false);
};};
//
let goTo = function(init){permissions('granted')}

let datatxt = function(DAT){
  const DOC = window.open(``,``,``,``);
  DOC.document.write(DAT); DOC.focus(); DOC.onblur = function(){DOC.close();}
}
let process = function(init){
  let ssL = init.substr(c4,init.length); ssM = base64('dec',ssL);
  endr = `<p class="pE"><code style="">${ssM}</code></p>`
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
};// kemaskini 20 nov 2022 //let text = String.fromCharCode(72, 69, 76, 76, 79);


draft2 = ` let reverseString = function(str){return str.split("").reverse().join("");}; txt = reverseString(3432);`
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
