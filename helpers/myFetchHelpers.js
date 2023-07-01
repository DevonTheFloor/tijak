import { tijakAlert } from "../handlers/handle-elements-page";
import { dGEBId } from "./myDomHelper";


/**
 * All CRUD query with asynchronous fetch, you can have on json,xml or text. Replace format by response.json() or 'response.xml()' or 'response.text()
 * @param {String} url String to url data
 * @param {String} startingPoint id of the tag where start the HTMLCollection
 * @param {String} bearer the header autorization with token
 * @returns JSON, XML or Text
 */
export async function myPost(url, startingPoint) {
  const datas = fdatasCollector(startingPoint),
    init = {
      method: 'POST',
      body: datas,
      mode: 'cors',
      cache: 'default'
    };
  let response = await fetch(url, init);
  if (response.ok === false) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`);
  } else  {
    const resp = await response.json();
    return Promise.resolve(resp);
  }
};
/**
 * Asynchronous fetch get
 * @param {String} url - url to resource to get
 * @returns 
 */
export async function myGetInit(url) {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`);
  } else {
    const resp = await response.json();
    return Promise.resolve(resp);
  }
};
/**
 * A fetch get with initilisation object
 * @param {String} url 
 * @param {Object} init 
 * @returns 
 */
export async function myGetInit(url, init) {
  let response = await fetch(url,init);
  if (!response.ok) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`);
  } else {
    const resp = await response.json();
    return Promise.resolve(resp);
  }
};
/**
 * A asyunc fetch Get with init object qnd choise of the response format.
 * @param {String} url 
 * @param {Function} format - function who determine the format of the response (like text() or json())
 * @param {Object} initobj - initialized object for header like token and content-type
 * @returns 
 */
export async function myGetInitFormat(url, initobj, format) {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`);
  } else {
    const resp = await response.format;
    return Promise.resolve(resp);
  }
};
/**
 * A fetch delete query
 * @param {String} url - url to delete
 * @returns 
 */
export async function myDelete(url) {
  let response = await fetch(url,{methode: "DELETE"});
  if (!response.ok) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`);
  } else {
    const resp = await response.json();
    return Promise.resolve(resp);
  }
};
/**
 * Get all the datas of the form and put them in formData
 * @param {Strring} startingPoint - class of the div top level parent
 * @returns 
 */
function fdatasCollector(startingPoint) {
  const startOn = dGEBId(startingPoint),
    fd = new FormData(),
    datas = startOn.getElementsByClassName('fdata');
  for (let data of datas) {
    console.log('DATA LENGHt :', datas.length);
    console.log('id :', data.id , ' - value :', data.value);
    fd.append(data.id,data.value)
  }
  console.log('FD :', fd);
  console.log(fd.entries().length)
  return fd;
}
/**
 * Pull the token from LS and put it on a header.
 * @returns header authorization with bearer token
 */
export function createHeaderBearer () {
  let token = localStorage.getItem('token');
  let myHeaders =  {'Authorization': `Bearer ${token}`};
  return myHeaders;
}
/**
 * Initilisation object creator
 * @param {String} method post or get initialized by default on the method
 * @param {Object} datas JSON of datas for send to API
 * @param {Object} myheaders JSON with the bearer token
 * @returns the init ogbject of the fetch method
 */
export function createInit(method, datas, myheaders) {
  const init = {
    method: method,
    headers: myheaders,
    body: datas,
    mode: 'cors',
    cache: 'default'
  }
  return init;
}

