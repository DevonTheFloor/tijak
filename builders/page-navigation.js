import { insertPageInApp } from './mounting-page.js';
import { mapping } from '../../navigator-mapping';
import { dQSr, dQSAl } from '../helpers/myDomHelper.js';

function withoutParam(splitor) {
  if (splitor.length >=3 && splitor[2] === "") {
    return true
  } else {
    return false;
  }
}
export function navigator() {
  const url = new URL(window.location.href),
    path = url.pathname,
    splitor = path.split('/'),
    customMetas = dQSAl('meta.custom-meta');
    console.log('PATH :', path);
    console.log('splito :', splitor);
    console.log('longueur :', splitor.length);
    for(let meta of customMetas) {
      meta.remove();
    }
    let uril = `/${splitor[1]}`;
    console.log('URIl ds navigator:', uril);
    let pa = mapping.find(p => p.uri === uril);
    console.log('PA dans navigator :', pa);
    if (pa === undefined ) {
    setTimeout(()=> {
        history.back();
        navigator();
        window.scroll(0,0);
      }, 3000);
      dQSr('#app').innerHTML = `
            <h1>ERROR 404</h1>
            <p>La page que vous cherchez n'existe pas</p>
          `;
          window.scroll(0, 0);
    } else {
      insertPageInApp(pa.page);
      window.scroll(0,0);
    }
}
export function activatedNavigator() {
  setTimeout(()=>{
    navigator();
  },3)
}
/**
 * REcherche de parametre dans l'url par slash
 * @param  {...any} paramsName 
 * @returns 
 */
export function navigatorSearchParams(...paramsName) {
  const path = window.location.pathname,
    splitor = path.split('/'),
    params = splitor.splice(2);
    if(paramsName.length != params.length || paramsName.length == 0 || params.length == 0){
      return null;
    } else {
      const hparams =  Object.assign(...paramsName.map((k, i)=>({[k]: params[i]}) ));
      console.log('hparams dans searcgh param :', hparams);
      return hparams;
    }
}
/**
 * Fonction de retour à la page index par navigation en history
 */
export function backRootPage() {
  history.pushState({page: 0},'Index','/');
  navigator();
  window.scroll(0,0);
}
/**
 * 
 * @param {Integer} nbr - integer for the numerous of the page
 * @param {String} title - title of the page
 * @param {String} uri - uri of the page
 */
export function intraLinkTo(nbr, title, uri) {
  history.pushState({page: nbr},title,uri);
  navigator();
  window.scroll(0,0);
}

