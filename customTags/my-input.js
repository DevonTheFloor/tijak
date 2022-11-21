import { dCrEl, dGEBId } from "../helpers/myDomHelper";
export default class MyInput extends HTMLElement {
  constructor () {
    super();
    // labelTxt, labId,inpId, type, pattern, inpPhr
    const label = dCrEl('label'),
      labelTxt = this.getAttribute('labelTxt'),
      labId = this.getAttribute('labId'),
      myInput = dCrEl('input'),
      inpId = this.getAttribute('inpId'),
      type = this.getAttribute('type'),
      pattern = this.getAttribute('pattern');
    label.textContent = labelTxt;
    label.id = labId;
    label.style.display = 'inline-block';
    this.appendChild(label);

    myInput.id = inpId;
    myInput.name = inpId;
    myInput.setAttribute('class','fdata');
    myInput.type = type;
    myInput.pattern = pattern;
    let inpPhr = this.getAttribute('inpPhr');
    if (inpPhr === null) {
      myInput.placeholder = ""
    } else {
      myInput.placeholder = inpPhr;
    }
    let info = this.getAttribute('info');
    if (info === null) {
      myInput.title = ""
    } else {
      myInput.title = info;
    }
    label.appendChild(myInput);
    const spanError = dCrEl('span');
    const idTagMesg = `err${inpId}`;
    spanError.id = idTagMesg;
    spanError.setAttribute('class','errMsg');
    spanError.style.color = 'red';
    label.append(spanError);
    const regex = new RegExp(pattern);
    console.log('regex in ',inpId,' = ', regex);
    this.verifyField(inpId, idTagMesg, regex, 'Champ invalide');
  }
  verifyField (idCible,idTagMessage, myRegex, messageError) {
    console.log('In Verif');
    let cible = dGEBId(idCible);
    let tagMessage = dGEBId(idTagMessage);
    cible.addEventListener('focus', function () {
      let cv = cible.value;
      tagMessage.innerHTML = '';
      if (cv === ''){
        tagMessage.innerHTML = '';
      } else {
        tagMessage.innerHTML = '';
      }
    })
    cible.addEventListener('blur', function () {
      let cvb = cible.value;
      console.log('rex in handdler:', myRegex);
      console.log('cvb :', cvb);
      let verif  = myRegex.test(cvb);
      if (cvb === ''){
        tagMessage.innerHTML = 'Ce champs est obligatoire, merci.';
      } else {
        if (verif === false) {
          tagMessage.innerHTML = messageError;
          return false;
        } else {
          return true;
        }
      }
    });
  };
}
customElements.define('my-input', MyInput);