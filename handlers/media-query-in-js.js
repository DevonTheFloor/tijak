import { linkImage } from "./handle-elements-page";
/**
 * Sets the image source based on the screen width and provided breakpoints, and optionally adds click event listeners to open links.
 * @param {number} breakPoint - The breakpoint value for the screen width.
 * @param {Object[]} targets - An array of objects containing image information.
 * @param {string} targets[].id - The id of the image element.
 * @param {string} targets[].small - The source URL for the small version of the image.
 * @param {string} targets[].large - The source URL for the large version of the image.
 * @param {string} targets[].link - Specifies whether the image should be clickable ('yes' or 'no').
 * @param {string} targets[].site - The URL to open when the image is clicked.
 * @returns {void}
 */
export function mediaQueryForImages( breakPoint, targets) {
  if(screen.width <= breakPoint) {
    targets.forEach(target => {
      const image = document.getElementById(target.id);
      image.src = target.small;
      if (target.link = 'yes') {
        linkImage(image, target.site)
      }
    })
  } else {
    targets.forEach(target => {
      const image = document.getElementById(target.id);
      image.src = target.large;
      if (target.link = 'yes') {
        linkImage(image, target.site)
      }
    })
  }
}