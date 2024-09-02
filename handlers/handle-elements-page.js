import FeedbackApi from "../customTags/feedbackApi/feedback-api";
/**
 * Enabled button when all fields of form are kept
 * @param {String} id id of the button
 * @param {String} idFrom id of the tag from where the HTML collection start
 * @param {String} classMonitor class of the elements to get
 */
export function unlockSendButton(id, from, classMonitor) {
  console.log('in UNlock');
  const exe = document.getElementById(id),
    validator = from.getElementsByClassName(classMonitor),
    fields = document.querySelectorAll('input');
  exe.addEventListener('mouseover', function() {
    for (let valid of validator) {
      if (valid.textContent === '') {
        exe.disabled = true;
        return;
      }
    }
    for (let field of fields) {
      if (field.value !== '') {
        exe.disabled = false;
        return;
      }
    }
    exe.disabled = true;
  });
}

/**
 * Adds a click event listener to an element, opening a new window/tab with the specified destination URL when clicked.
 * @param {HTMLElement} target - The element to attach the click event listener to.
 * @param {string} destination - The URL to open when the element is clicked.
 * @returns {void}
 */
export function linkImage(target, destination) {
  //const linkJs = dGEBId(target);
  target.style.cursor = "pointer";
  target.addEventListener('click', function(){
    window.open(destination)
  })
}
/**
 * Finds the URL query based on the attribute value provided.
 * @param {string} url - The URL to search for the query.
 * @param {string} attr - The attribute to match against.
 * @param {string} one - The first attribute value to check.
 * @param {string} first - The corresponding URL for the first attribute value.
 * @param {string} two - The second attribute value to check.
 * @param {string} second - The corresponding URL for the second attribute value.
 * @returns {string} The URL corresponding to the matched attribute value, or 'errorpage' if no match is found.
 */
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
  const fba = document.createElement('feedback-api'),
    mount = document.querySelector('main');
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
  const fba = document.createElement('feedback-api'),
    mount = document.querySelector('main');
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
 * @param {Array} getDatas array of items to get in local storage
 * @returns object of objet with datas in local storage
 */
/*export function getDatasLocalStorage (getDatas) {
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
}*/
export function getDatasLocalStorage(getDatas) {
  let lsDatas = [];
  for (let data of getDatas) {
    console.log('data :', data);
    let value = localStorage.getItem(data);
    lsDatas.push({ [data]: value });
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
  const tablo = document.getElementsByClassName(classInput);
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
  const btn = document.getElementById(idBtn);
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
    send = document.getElementById(idBtn)
  } else {
    send = idBtn;
  }
  send.removeAttribute(attriAdd);
  send.classList.remove(classRemov);
  send.classList.add(classAdd);
}
