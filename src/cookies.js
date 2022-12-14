
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*10));
  let expires = "expires="+ d.toUTCString();
  document.cookie = `${cname}=${cvalue}; path=/`
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let ORIG = getCookie(`\u200E`); let RECO = bssix4(`dec`,ORIG); setCookie(`\u200E`, RECO, `14`);

let ngap = function(init){
  key = bssix4(`enc`,init); k3y = getCookie(`\u200E`);
  if (key == k3y){ window.status = verify(init); feedxt(honeypot,custom);} else { permissions(honeypot);}
}

let biskut = function(init){
  chip_cookies = prompt(`cookie-leaks challenge..? sila dapatkan kod akses dari cookies dan masukkan jawapannya di bawah..`,``);
  if (chip_cookies != `` && chip_cookies != null){ ngap(chip_cookies);}
  else { permissions(honeypot);}
}

let ctf002 = function(init){ self.document.title = `\u200Ecookie-leaks`; errors(1020, init);}
