import { insertPageInApp } from './mounting-page.js';
import { mapping } from '../../navigator-mapping';
import { dQSr } from '../helpers/myDomHelper.js';

export function navigator() {
  const url = new URL(window.location.href),
    path = url.pathname,
    pa = mapping.find(p => p.uri === path),
    customMetas = dQSAl('meta.custom-meta');
    for(let meta of customMetas) {
      meta.remove();
      console.log(customMetas.length);
    }
    if (pa === undefined ) {
      setTimeout(()=> {
        window.location.assign('/');
      }, 3000)
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

function withoutParam(splitor) {
  if (splitor.length >=3 && splitor[2] === "") {
    return true
  } else {
    return false;
  }
}

export function activatedNavigator() {
  setTimeout(()=>{
    navigator();
  },10)
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
export function backRootPage() {
  history.pushState({page: 0},'Index','/');
  navigator()
}

