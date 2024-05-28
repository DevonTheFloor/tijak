/**
 * Mounts a page element into a specified container.
 * @param {Element} mount - The container element where the page will be mounted.
 * @param {string} page - The HTML content representing the page element to be mounted.
 * @returns {void}
 */
export function mountingPageElements(mount, page) {
  mount.insertAdjacentHTML('afterbegin', page)
}
/**
 * Inserts a page into the 'app' element.
 * @param {string} page - The HTML content representing the page to be inserted.
 * @returns {void}
 */
export function insertPageInApp(page) {
  const mount =  document.getElementById('app');
  mount.innerHTML = '';
  mount.innerHTML = page ;
}