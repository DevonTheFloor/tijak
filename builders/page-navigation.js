import { insertPageInApp } from './mounting-page.js';
import { dQSr, dQSAl } from '../helpers/myDomHelper.js';

function withoutParam(splitor) {
  if (splitor.length >=3 && splitor[2] === "") {
    return true
  } else {
    return false;
  }
}
/**
 * Create the page with the uri
 * @param {Array} mapping - array of uri
 */
/*export function navigator(mapping) {
  const url = new URL(window.location.href),
    app = document.getElementById('app'),
    path = url.pathname,
    splitor = path.split('/'),
    customMetas = document.querySelectorAll('meta.custom-meta');
   console.log('PATH :', path);
   console.log('splito :', splitor);
   console.log('longueur :', splitor.length);

   console.log('APP: ', app);
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
        //navigator(mapping);
        window.scroll(0,0);
     }, 3000);
      app.innerHTML = "<h1>ERROR 404</h1><p>La page que vous cherchez n'existe pas</p>";
      window.scroll(0, 0);
    } else {
      //insertPageInApp(pa.page);
        app.innerHTML = '';
        app.innerHTML = pa.page ;
      window.scroll(0,0);
    }
}*/
export function navigator(mapping) {
  const url = new URL(window.location.href),
    app = document.getElementById('app'),
    path = url.pathname,
    splitor = path.split('/'),
    customMetas = document.querySelectorAll('meta.custom-meta');
  
  console.log('PATH:', path);
  console.log('splito:', splitor);
  console.log('longueur:', splitor.length);
  console.log('APP:', app);
  
  for (let meta of customMetas) {
    meta.remove();
  }
  
  let uril = `/${splitor[1]}`;
  console.log('URIl ds navigator:', uril);
  
  let pa = mapping.find(p => p.uri === uril);
  console.log('PA dans navigator:', pa);
  
  if (pa === undefined) {
    setTimeout(() => {
      history.back();
      window.scroll(0, 0);
    }, 3000);
    
    app.innerHTML = "<h1>ERROR 404</h1><p>La page que vous cherchez n'existe pas</p>";
    window.scroll(0, 0);
  } else {
    app.innerHTML = '';
    app.innerHTML = pa.page;
    window.scroll(0, 0);
  }
  /* a quoi sert cette ligne? return { document: window.document };*/
}

export function activatedNavigator() {
  setTimeout(()=>{
    navigator();
  },3)
}
/**
 * Recherche de parametre dans l'url par slash
 * @param {String} path window.location.pathname of the page
 * @param  {...any} paramsName 
 * @returns 
 */
export function navigatorSearchParams(...paramsName) {
  console.log('NAVIGATOR Search PAram');
  const path = window.location.pathname,
    splitor = path.split('/'),
    params = splitor.splice(1);
    console.log('SPlitor :', splitor);
    console.log('Path in Navigator :', path);
    console.log('params in navigator :', params);
    if( paramsName.length != params.length || paramsName.length == 0 || params.length == 0){
      console.error('Params or paramsName equal to zero.')
      return;
    } else {
      const hparams =  Object.assign(...paramsName.map((k, i)=>({[k]: params[i]}) ));
      console.log('hparams dans searcgh param :', hparams);
      return hparams;
    }
}

export function navigatorSearchParamsStat(...paramsName) {
  console.log('NAVIGATOR Search PAram');
  const path = window.location.pathname,
    splitor = path.split('/'),
    params = splitor.splice(1);
    console.log('SPlitor :', splitor);
    console.log('Path in Navigator :', path);
    console.log('params in navigator :', params);
    if( paramsName.length == 0 || params.length == 0){
      console.error('Params or paramsName equal to zero.')
      return;
    } else {
      const hparams =  Object.assign(...paramsName.map((k, i)=>({[k]: params[i]}) ));
      console.log('hparams dans searcgh param :', hparams);
      return hparams;
    }
}

export function navigatorSearchParamsCp() {
  console.log('NAVIGATOR Search PAram');
  const path = window.location.pathname,
    splitor = path.split('/'),
    params = splitor.splice(2);
    console.log('Path in Navigator :', path);
    console.log('params in navigator :', params);
    return { cp: params[0]}
}
export function navigatorSearchParamsId() {
  console.log('NAVIGATOR Search PAram');
  const path = window.location.pathname,
    splitor = path.split('/'),
    params = splitor.splice(2);
    console.log('Path in Navigator :', path);
    console.log('params in navigator :', params);
    return { id: params[0]}
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

export function getStatistique (stats) {
  const url = new URL(window.location.href),
    page = url.pathname,
    inscrit = navigatorSearchParamsStat('page','inscrit'),
    fd = new FormData();
    console.log('INSCRIT :', inscrit);
    const array = [
      'liste-boulangerie',
      'fiche-utilisateur',
      'voir-les-reservations',
      'configurer-ma-boutique'
    ];
    if (array.includes(inscrit.page)) {
      fd.append('page', inscrit.page);
      fd.append('param', inscrit.inscrit);
    } else 
      {
        fd.append('page', inscrit.page);
        fd.append('param', 'NC');
      }
    for (const [key, value] of fd) {
      console.log('in fd : ',key + ': ' + value);
    }
  let init = {
    method: 'POST',
    body: fd
    }
  console.log('URL: ', url, 'page:', page, 'params :', inscrit);

  fetch(stats, init)
}

export function goToErrorPage() {
  history.pushState({ page: 4 }, 'Erreur', '/not-found');
  navigator()
}
export function paramsLogger() {
  const url = new URL(window.location),
    page = url.pathname,
    splitIt = page.split('/');
  let tablo = [];
  for (let tab of splitIt) {
    if (tab != '') {
      tablo.push(tab);
    }
  }
  return tablo;
}