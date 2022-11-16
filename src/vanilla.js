//
let check0 = function(txt1){
  const t1 = txt1.split(``); let r1 = 0; for (let i1 in t1){
    r2 = t1[i1].codePointAt(0); r3 = Number(r2); r1 = r1 + r3;
  }; return r1
}
let checkr = function(txt1,txt2){
  let x = check0(txt1); let y = check0(txt2); let z = `${x}:${y}`
  if(library.indexOf(`${z}`) !== -1){ss = z; c4 = verify(x,y);} else {ss = `0:0`;}
  return ss
}
let staff = function(init){
  if (init == 0){
    prompt(`ada combolist ? link github-repository untuk decrypt:`,`${repo}`);
  }
  if (init == 1){
    let usern = $EL(`get`,`usern`); let passw = $EL(`get`,`passw`);
    let staff = checkr(usern.value,passw.value); switch (staff){
      case `690:699`:
      let writ = RESETR(kill); msg = `beware: honeypot everywhere`;
      break; case `0:0`:
      permissions(`blue`); usern.value = ``; passw.value = ``; usern.focus();
      break; default:
      alert(`status ID: selamat, tiada kompromi.\r\nsila periksa ID yang lain.\r\nTry another..`);
      usern.value = ``; passw.value = ``; usern.focus();}
    }
}
let rwdata = function(txt, key){
  if (txt == 0){dat = `./xyzbca/landing.md`;}
  st0 = key.toString().substr(key.length-1,4);
  const xhttp = new XMLHttpRequest(); xhttp.onload = function(){
    var cdata = this.responseText; rdata = cdata.substr(st0);
    sdata = base64(`dec`,rdata); elem = `
    <code class="pre" id="pre">${sdata}</code>
    `
    const s2 = $EL(`cre`,`section`); s2.className = `ttl`; s2.innerHTML = elem;
    $EL(`tag`,`main`)[0].appendChild(s2);
  }; xhttp.open('GET',dat,true); xhttp.send();
}
let txtacc = function(init){
  let tinn = $EL(`get`,`code`).value; let num1 = Number(tinn);
  let num2 = num1.toString(8); calc = `3543576`;
  if (num2 == calc){
    permissions(`granted`); $EL('tag',`main`)[0].textContent = blurb[0];
    val = (Number(calc) * Number(tinn)); rwdata(init,val);
  } else {
    permissions(`deniedx`); $EL(`get`,`code`).value = ``;
    $EL(`get`,`code`).focus();
  }
}
let iptonum = function(ipn){
  var n = ipn.split(`.`); var val = Number(0);
  val = val + Number(n[0]) * Math.pow(256, 3);
  val = val + Number(n[1]) * Math.pow(256, 2);
  val = val + Number(n[2]) * Math.pow(256, 1);
  val = val + Number(n[3]); return val;
};
let numtoip = function(int){
  let v1 = ((int >> 24) & 255);
  let v2 = ((int >> 16) & 255);
  let v3 = ((int >>  8) & 255);
  let v4 = (int & 255);
  R = `${v1}.${v2}.${v3}.${v4}`
  return R;
}; USAGE = `
session ID ? tukarkan session ID kepada IP:
run script: numtoip(sessionID)
`
