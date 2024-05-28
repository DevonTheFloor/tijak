/**
 * Helper for all DOM node creation or selection,alway start ans finish by lower case
 */

/**
 * Creates a new HTML element with the specified tag name.
 *
 * @param {string} tag - The name of the HTML tag to create.
 * @returns {HTMLElement} The newly created HTML element.
 */
export function dCrEl(tag) {
  return document.createElement(tag)
}
/**
 * Retrieves an HTML element by its ID.
 *
 * @param {string} id - The ID of the HTML element to retrieve.
 * @returns {HTMLElement | null} The HTML element with the specified ID, or null if no element is found.
 */
export function dGEBId(id) {
  return document.getElementById(id)
}
/**
 * Retrieves the first HTML element that matches the specified CSS selector.
 *
 * @param {string} tag - The CSS selector string to match elements against.
 * @returns {Element | null} The first HTML element that matches the CSS selector, or null if no element is found.
 */
export function dQSr(tag) {
  return document.querySelector(tag)
}
/**
 * Retrieves a list of HTML elements that match the specified CSS selector.
 *
 * @param {string} tag - The CSS selector string to match elements against.
 * @returns {NodeList<Element>} A list of HTML elements that match the CSS selector.
 */
export function dQSAl(tag) {
  return document.querySelectorAll(tag)
}
/**
 * Retrieves a list of HTML elements with the specified class name.
 *
 * @param {string} name - The class name to match elements against.
 * @returns {HTMLCollectionOf<Element>} A list of HTML elements with the specified class name.
 */ 
export function dGEBCNa(name) {
  return document.getElementsByClassName(name)
}
/**
 * Inserts the specified HTML content into a specified position relative to the specified element.
 *
 * @param {Element} from - The element to insert HTML content around.
 * @param {string} where - A DOMString representing the position relative to the element.Possible values are 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.
 * @param {string} tag - The HTML content to insert.
 */
export function isAdHl(from, where, tag) {
  return from.insertAdjacentHTML(where, tag)
}
/**
 * Retrieves a live HTMLCollection of elements with the specified tag name.
 *
 * @param {string} tag - The tag name to match elements against.
 * @returns {HTMLCollectionOf<Element>} A live HTMLCollection of elements with the specified tag name.
 */
export function dGEBTgNa(tag) {
  return document.getElementByTagName(tag)
}
/**
 * Retrieves a list of HTML elements with the specified class name within a given element.
 *
 * @param {Element} from - The element to search within for elements with the specified class name.
 * @param {string} className - The class name to match elements against.
 * @returns {HTMLCollectionOf<Element>} A list of HTML elements with the specified class name within the given element.
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
export function gtEBTgNa(from, className) {
  console.log('from in gtEBCNa:', from);
  console.log('classe name for from:', className);
  if (!from) {
    console.error('No valid node "from" in gtEBCNa:', from, 'for classname: ', className)
  } else {
      return from.getElementByTagName(className);
  }
}