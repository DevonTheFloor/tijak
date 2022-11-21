import { dGEBId } from "./myDomHelper";

/**
 * All CRUD query with asynchronous fetch, you acn have on json,xml or text. Replace format by response.json() or 'response.xml()' or 'response.text()
 * @param {*} url String to url data
 * @param {*} init Object for config post request
 * @returns JSON, XML or Text
 */
 export async function myPost(url, init) {
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
function createInit (datas) {
  const fdde = JSON.stringify(datas);
    const myHeaders = new Headers({
      "Content-Type": "application/json"
    });
    var initFile = {
      method: 'POST',
      headers: myHeaders,
      body: fdde,
      mode: 'cors',
      cache: 'default'
    };
    return initFile;
};

function fdatasCollector(start) {
  const startOn = dGEBId(start);
  
}