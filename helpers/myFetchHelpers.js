import { tijakAlert } from "../handlers/handle-elements-page";

/**
 * Performs a POST request to the specified URL with the given data.
 *
 * @param {string} url - The URL to which the POST request is sent.
 * @param {HTMLElement} startingPoint - The node from which data collection starts
 * @returns {Promise<any>} A promise that resolves to the response data from the POST request.
 * @throws {Error} If the POST request fails or the response status is not OK.
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
 * Performs a GET request to the specified URL.
 *
 * @param {string} url - The URL to which the GET request is sent.
 * @returns {Promise<any>} A promise that resolves to the response data from the GET request.
 * @throws {Error} If the GET request fails or the response status is not OK.
 */
export async function myGet(url) {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`);
  } else {
    const resp = await response.json();
    return Promise.resolve(resp);
  }
};
/**
 * Performs a GET request to the specified URL with custom request options.
 *
 * @param {string} url - The URL to which the GET request is sent.
 * @param {RequestInit} init - The configuration options for the GET request.
 * @returns {Promise<any>} A promise that resolves to the response data from the GET request.
 * @throws {Error} If the GET request fails or the response status is not OK.
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
 * Performs a GET request to the specified URL and formats the response according to the specified format.
 *
 * @param {string} url - The URL to which the GET request is sent.
 * @param {RequestInit} initobj - The configuration options for the GET request.
 * @param {string} format - The format in which to receive the response data (e.g., 'json', 'text', 'blob', 'arrayBuffer').
 * @returns {Promise<any>} A promise that resolves to the response data formatted according to the specified format.
 * @throws {Error} If the GET request fails or the response status is not OK.
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
 * Performs a GET request to the specified URL with custom request options and retrieves the response as text.
 *
 * @param {string} url - The URL to which the GET request is sent.
 * @param {RequestInit} init - The configuration options for the GET request.
 * @returns {Promise<string>} A promise that resolves to the response data as text.
 * @throws {Error} If the GET request fails or the response status is not OK.
 */
export async function myGetTextDebug(url, init) {
  let response = await fetch(url,init);
  if (!response.ok) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`);
  } else {
    const resp = await response.text();
    return Promise.resolve(resp);
  }
};
/**
 * Performs a DELETE request to the specified URL.
 *
 * @param {string} url - The URL to which the DELETE request is sent.
 * @returns {Promise<any>} A promise that resolves to the response data from the DELETE request.
 * @throws {Error} If the DELETE request fails or the response status is not OK.
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
 * Collects data from form elements with a specific class within a specified starting point element.
 *
 * @param {string} startingPoint - The ID of the starting point element where data collection begins.
 * @returns {FormData} A FormData object containing the collected data.
 */
function fdatasCollector(startingPoint) {
  const startOn = document.getElementById(startingPoint),
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
 * Creates an HTTP header object with a Bearer token retrieved from localStorage.
 *
 * @returns {Object} An object representing the HTTP headers with the Bearer token.
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

