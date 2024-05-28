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
 * Navigates within the web application based on the current URL path.
 * @returns {void}
 */
export function navigator() {
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
/**
 * Activates the navigator function after a delay of 3 milliseconds.
 * @returns {void}
 */
export function activatedNavigator() {
  setTimeout(()=>{
    navigator();
  },3)
}
/**
 * Parses search parameters from the current URL path based on specified parameter names.
 * @param {...string} paramsName - The names of the parameters to retrieve from the URL.
 * @returns {Object | undefined} An object containing the parsed search parameters, or undefined if parameters are missing or invalid.
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
/**
 * Parses search parameters from the current URL path based on specified parameter names.
 * @param {...string} paramsName - The names of the parameters to retrieve from the URL.
 * @returns {Object | undefined} An object containing the parsed search parameters, or undefined if parameters are missing or invalid.
 */
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
/**
 * Retrieves the search parameter 'cp' from the current URL path.
 * @returns {Object} An object containing the 'cp' parameter from the URL.
 */
export function navigatorSearchParamsCp() {
  console.log('NAVIGATOR Search PAram');
  const path = window.location.pathname,
    splitor = path.split('/'),
    params = splitor.splice(2);
    console.log('Path in Navigator :', path);
    console.log('params in navigator :', params);
    return { cp: params[0]}
}
/**
 * Retrieves the search parameter 'id' from the current URL path.
 * @returns {Object} An object containing the 'id' parameter from the URL.
 */
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
 * Navigates back to the root page of the application.
 * @returns {void}
 */
export function backRootPage() {
  history.pushState({page: 0},'Index','/');
  navigator();
  window.scroll(0,0);
}
/**
 * Navigates to a specified URI within the application.
 * @param {number} nbr - The page number or state identifier.
 * @param {string} title - The title for the new state.
 * @param {string} uri - The URI to navigate to.
 * @returns {void}
 */
export function intraLinkTo(nbr, title, uri) {
  history.pushState({page: nbr},title,uri);
  navigator();
  window.scroll(0,0);
}
/**
 * Sends statistical data based on the current URL parameters to a specified endpoint.
 * @param {string} stats - The endpoint URL to send the statistical data to.
 * @returns {void}
 */
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
/**
 * Navigates to the error page.
 * @returns {void}
 */
export function goToErrorPage() {
  history.pushState({ page: 4 }, 'Erreur', '/not-found');
  navigator()
}
/**
 * Logs and returns the path segments of the current URL.
 * @returns {string[]} An array containing the non-empty segments of the URL path.
 */
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