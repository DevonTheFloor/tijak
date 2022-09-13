import { insertPageInApp } from './mounting-page.js';
import { mapping } from '../../navigator-mapping';

export function navigator() {
  const url = new URL(window.location.href),
    hach = url.hash,
    path = url.pathname;
    const pa = mapping.find(p => p.uri === hach);
    insertPageInApp(pa.page)
    

  /*switch(hach){

    case '' :
      console.log('hach vide: ', hach);
      insertPageInApp('<index-page></index-page>');
      window.scroll(0, 0);
      break;
    case '#/' :
      console.log('hach vide: ', hach);

      insertPageInApp('<index-page></index-page>');
      window.scroll(0, 0);

      break;
    case '#/'+siteMap.uri:

      insertPageInApp(siteMap.page);

      break;
    case '#/error':

      insertPageInApp('<error-404></error-404>');
      window.scroll(0, 0);
      break;
      default:
        dQSr('#app').innerHTML = `
          <h1>ERROR 404</h1>
          <p>La page que vous cherchez n'existe pas</p>
        `;
        window.scroll(0, 0);
  }*/
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
