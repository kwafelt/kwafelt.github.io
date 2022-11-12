//
let rwdata = function(txt, key){
  if (txt == 0){dat = `./xyzbca/ikan.md`;}
  st0 = key.toString().substr(key.length-1,2);
  const xhttp = new XMLHttpRequest(); xhttp.onload = function(){
    var cdata = this.responseText; rdata = cdata.substr(st0);
    sdata = base64(`dec`,rdata);
    //
    const s2 = $EL(`cre`,`section`); s2.className = `ttl`; s2.innerHTML = sdata;
    $EL(`tag`,`main`)[0].appendChild(s2);
  }; xhttp.open('GET',dat,true); xhttp.send();
}
let rwrt02 = function(slc,txt){
  raw = txt.substr(slc);
  
  const s2 = $EL(`cre`,`section`); s2.className = `der`; s2.innerHTML = base64('dec',raw);
  $EL(`tag`,`main`)[0].appendChild(s2);
}
let txtacc = function(init){
  let tinn = $EL(`get`,`code`).value; let num1 = Number(tinn);
  let num2 = num1.toString(8); calc = `1574125`;
  if (num2 == calc){
    permissions(`granted`); $EL('tag',`main`)[0].textContent = blurb[0];
    val = (Number(calc) * Number(tinn)); rwdata(init,val);
  } else {
    permissions(`deniedx`); $EL(`get`,`code`).value = ``;
    $EL(`get`,`code`).focus();
  }
}
let webapps = function(num){
 let mn = $EL(`tag`,`main`)[0]; mn.textContent = null;
 switch (num){
  case 0:
  //self.document.title = `CAPTURE THE FLAG`
  elem = `
  <p class="p1">Enter your authorized 'CTF' access code</p><form action="javascript:txtacc(0);" name="access">
  <input type="text" id="code" name="code" maxlength="6"><input type="hidden" value="submit"></form>
  <p class="p1">hint: kod dari thread forum</p>
  `
  const s1 = $EL(`cre`,`section`); s1.className = `locked`; s1.innerHTML = elem;
  $EL(`tag`,`main`)[0].appendChild(s1); $EL(`tag`,`input`)[0].focus();
  break
  case 1:
  alert(`ini untuk apa..?`)
  break
  default:
    honeyp = `
    <section class="hello"><p class="p0">hnnsfea's comrade</p><p class="p1">Locked out of server / kwafelt was here</p>
    </article>
    `
    const sec = $EL('cre','section'); sec.className = 'panel_grid'; sec.innerHTML = honeyp;
    let m4a = new Audio(); m4a.src = `./src/audio/petualang.mp3?cache=true`;
    m4a.preload = 'metadata'; m4a.oncanplay = m4a.play();
    $EL('tag','main')[0].appendChild(sec);
  };
};
