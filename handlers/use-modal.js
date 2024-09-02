/**
 * open custom modal
 * @param {string} idParent - ID of the parent xhere the modal will mounted
 * @param {string} queryChidren - the query HTML of the children to created
 */
export function openModal(idParent, queryChidren) {
	const parent = document.getElementById(idParent),
	 child = document.createElement(queryChidren);
	parent.appendChild(child)
}


/**
 * Close the modal
 * @param {string} idParent - the ID of the parent tag
 * @param {string} queryChidren - the query HTML seletor of the child to remove
 */
export function closeModal(idParent, queryChidren) {
  const app = document.getElementById(idParent),
	  box = document.querySelector(queryChidren);
	app.removeChild(box);
}