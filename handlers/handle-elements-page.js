import { dGEBId, dQSAl, gtEBCNa } from "../helpers/myDomHelper";

export function unlockSendButton(id, classMonitor) {
  const exe = dGEBId(id);
  const validator = gtEBCNa(document, classMonitor);
  const fileds = dQSAl('input');
  exe.addEventListener('mouseover', function(){
    for (let valid of validator) {
      if (valid.textContent === '') {
      } for (let filed of fileds) {
        if(filed.value != '') {
          exe.disabled = false;
        }
      }
    }
  })
}	

export function linkImage(target, destination) {
  //const linkJs = dGEBId(target);
  target.style.cursor = "pointer";
  target.addEventListener('click', function(){
    window.open(destination)
  })
}

export function findUrlQueryByAttribute(url, attr, one, first,two, second) {
  url ='';
  if (attr === one) {
    url = first;
  } else if ( attr === two){
    url = second;
  } else {
    url ="errorpage";
  }
  return url;
}