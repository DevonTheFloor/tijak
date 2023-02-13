import { dGEBId, dQSAl, gtEBCNa, dCrEl, dQSr, dGEBCNa } from "../helpers/myDomHelper";
import FeedbackApi from "../customTags/feedbackApi/feedback-api";
/**
 * Enabled button when all fields of form are kept
 * @param {String} id id of the button
 * @param {*} from the tag from where the HTML collection start
 * @param {String} classMonitor class of the elements to get
 */
export function unlockSendButton(id, from, classMonitor) {
  console.log('in UNlock');
  const exe = dGEBId(id),
    validator = gtEBCNa(from, classMonitor),
    fields = dQSAl('input');
  exe.addEventListener('mouseover', function(){
    for (let valid of validator) {
      if (valid.textContent === '') {
      } for (let field of fields) {
        if(field.value != '') {
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
/**
 * Modal who print the API's response message.
 * @param {Object} res - resonse in JSON from the API
 */
export function useFeedbackApi(res) {
  const fba = dCrEl('feedback-api'),
    mount = dQSr('main');
  fba.setAttribute('message', res.message)
  mount.appendChild(fba);
  console.log('message: ', res.message);
}
/**
 * Function for create an alert box customised.
 * @param {String} msg Message to print for the user
 * @param {String} type Three type of style enable: error, nice end else.
 * @param {Number} time In millisecond, the time elapsed before remove box.
 */
export function tijakAlert(msg, type, time) {
  const fba = dCrEl('feedback-api'),
    mount = dQSr('main');
  fba.setAttribute('message', msg);
  if(type === 'error') {
    fba.style.backgroundColor = "rgb(249, 171, 171)";
    fba.style.border = "2px solid red";
  } else if (type == "nice") {
    fba.style.backgroundColor = "rgb(197, 247, 122)";
  } else {
    fba.style.backgroundColor = "whitesmoke";
  }
  mount.appendChild(fba);
  setTimeout(()=> {
    mount.removeChild(fba)
  }, time)
}
/**
 * Get all one or several value of key in local storage.
 * @param {*} getDatas array of items to get in local storage
 * @returns object of objet with datas in local storage
 */
export function getDatasLocalStorage (getDatas) {
  let lsDatas = {},
   datas = [];
  for (let data of getDatas) {
    console.log('data :', data);
    datas.push(localStorage.getItem(data));
    //lsDatas = Object.assign(getDatas.map((k, i)=>({[k]: datas[i]}) ));
    lsDatas = Object.assign(getDatas.map((k, i)=>({[k]: datas[i]}) ));
  }
  console.log('ls datas :', lsDatas);
  return lsDatas;
}
/**
 * Nwowing if you are connected by fonding token in local storage.
 * @returns true if token existe, false if not
 */
export function iAmConnected() {
  const token = localStorage.getItem('token');
  if(token != null) {
    console.log('TOKEN EXISTE');
    return true;
  } else {
    return false
  }
}
/**
 * Clean all inputs field after send form
 * @param {String} classInput class of the input to cleean
 */
export function cleanAllInputs(classInput) {
  const tablo = dGEBCNa(classInput);
  for(let tab of tablo) {
    tab.value = '';
  }
}
/**
 * Relock the button send by add disabled attribute ans classes for style
 * @param {String} idBtn id of the button to re-lock
 * @param {String} classRemov enabled style class to remove 
 * @param {String} classAdd disabled style class to add
 */
export function relockButton(idBtn, classRemov, classAdd) {
  const btn = dGEBId(idBtn);
  btn.classList.remove(classRemov);
  btn.classList.add(classAdd);
  btn.setAttribute('disabled',true);
}
/**
 * Unclock button send without verify input fields validity
 * @param {any} idBtn id of the button or instancied const
 * @param {String} attriAdd attribute to remove
 * @param {String} classRemov disabled style class to remove
 * @param {String} classAdd enabled style class to add
 */
export function simpleUnlockButton(idBtn,attriAdd, classRemov, classAdd ) {
  let send = null;
  if(typeof(idBtn) === String) {
    send = dGEBId(idBtn)
  } else {
    send = idBtn;
  }
  send.removeAttribute(attriAdd);
  send.classList.remove(classRemov);
  send.classList.add(classAdd);
}