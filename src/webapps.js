
let webapps = function(num){
 let mn = $EL('tag','main')[0]; mn.textContent = null;
 switch (num){
  case 0:
  tx = 'ddsdsd'
  let mn = $EL('tag','main')[0]; mn.textContent = null;
  break
  default:
   mp3 = './src/audio/petualang.mp3?cache=true';
   let m4a = new Audio(); m4a.src = mp3 ; m4a.preload = 'metadata'; m4a.oncanplay = m4a.play();
   $EL('tag','main')[0].textContent = 'Anda telah terjebak dalam honeypot, cuba check link url baik-baik ~';
 };
};
