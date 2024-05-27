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
export function dGEBTgNa(tag) {
  return document.getElementByTagName(tag)
}
/**
 * For get elements by class name from one point
 * @param {HTMLElement} from html tag from how start the html collection 
 * @param {String} className class of the element to select
 * @returns HTMLCollection
 */
export function gtEBCNa(from, className) {
  console.log('from in gtEBCNa:', from);
  console.log('classe name for from:', className);
  if (!from) {
    console.error('No valid node "from" in gtEBCNa:', from, 'for classname: ', className)
  } else {
      return from.getElementsByClassName(className);
  }
}