import { insertPageInApp } from './mounting-page.js';
import { mapping } from '../../navigator-mapping';
import { dQSr } from '../helpers/myDomHelper.js';

export function navigator() {
  const url = new URL(window.location.href),
    fullHach = url.hash,
    path = url.pathname,
    splitor = fullHach.split('/'),
    recomp = `${splitor[0]}/${splitor[1]}`,
    longueur = splitor.length;
    if (longueur <= 2 ) {
      let pat = 'premier if';
      mapForHashUrl(fullHach);
    } else if (longueur <= 3 && splitor[2] === ""){
      mapForHashUrl(recomp);
    } else {
      mapForHashUrl(recomp);
    }
}

function mapForHashUrl(url) {
  let pa = mapping.find(p => p.uri === url);
  console.log('PA :', pa);
  if (pa === undefined ) {
    setTimeout(()=> {
      window.location.assign('#/');
    }, 3000)
    dQSr('#app').innerHTML = `
          <h1>ERROR 404</h1>
          <p>La page que vous cherchez n'existe pas</p>
        `;
        window.scroll(0, 0);
  } else {
    insertPageInApp(pa.page);

  }

}
export function activatedNavigator() {
  setTimeout(()=>{
    navigator();
  },10)
}

export function listenForHash() {
  const url = new URL(window.location.href),
    hach = url.hash;
  if(!hach) {
    window.location.assign("#/");
    activatedNavigator();
  } else {
    activatedNavigator()
  }
}
export function listenForHashInIndex() {
  window.addEventListener('hashchange',()=>{
    activatedNavigator()
  })  
}

export function hashNavigatorSearchParams(...paramsName) {
  const url = new URL(window.location.href),
    h = url.hash,
    splitor = h.split('/'),
    params = splitor.splice(2);
    if(paramsName.length != params.length || paramsName.length == 0 || params.length == 0){
      console.error('Le nombre de parametre n\'est pas cohérent');
      return null;
    } else {
      const hparams =  Object.assign(...paramsName.map((k, i)=>({[k]: params[i]}) ));
      return hparams;
    }
}