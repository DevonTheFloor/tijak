import { dGEBId } from "./myDomHelper";

/**
 * All CRUD query with asynchronous fetch, you acn have on json,xml or text. Replace format by response.json() or 'response.xml()' or 'response.text()
 * @param {*} url String to url data
 * @param {*} startingPoint the id of the tag where the HTMLCollection start
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

export async function myGet(url) {
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`);
  } else {
    const resp = await response.json();
    return Promise.resolve(resp);
  }
};

export async function myDelete(url) {
  let response = await fetch(url,{methode: "DELETE"});
  if (!response.ok) {
    throw new Error(`Erreur transmission requête. Statut : ${response.status}`);
  } else {
    const resp = await response.json();
    return Promise.resolve(resp);
  }
};

function fdatasCollector(startingPoint) {
  const startOn = dGEBId(startingPoint),
    fd = new FormData(),
    datas = startOn.getElementsByClassName('fdata');
  for (let data of datas) {
    console.log('id :', data.id , ' - value :', data.value);
    fd.append(data.id,data.value)
  }
  return fd;
}