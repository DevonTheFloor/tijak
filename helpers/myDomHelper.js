
/**
 * Helper for all DOM node creation or selection,alway start ans finish by lower case
 * @param {*} tag 
 * @returns 
 */

 export function dCrEl(tag) {
    return document.createElement(tag)
  }
  
  export function dGEBId(id) {
    return document.getElementById(id)
  }
  
  export function dQSr(tag) {
    return document.querySelector(tag)
  }
  
  export function dQSAl(tag) {
    return document.querySelectorAll(tag)
  }
  
  export function dGEBCNa(name) {
    return document.getElementsByClassName(name)
  }
  
  export function dGEBNa(name) {
    return document.getElementsByName(name)
  }
  
  export function isAdHl(from, where, tag) {
    return from.insertAdjacentHTML(where, tag)
  }
   export function gtEBCNa() {}