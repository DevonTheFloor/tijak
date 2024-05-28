/**
 * Sets a new title for the HTML document.
 * @param {string} newTitle - The new title to set.
 * @returns {void}
 */
export function defineNewTitle(newTitle) {
  document.querySelector('title').innerHTML = newTitle ;
}
/**
 * Defines meta tags for Open Graph (og) and Twitter card.
 * @param {Array<{value: string, content: string}>} ogTags - Array of objects containing Open Graph meta tag data.
 * @param {Array<{value: string, content: string}>} cardTags - Array of objects containing Twitter card meta tag data.
 * @returns {void}
 */
export function defineMetaTagsPage(ogTags, cardTags) {
  const header = document.querySelector('head');
  ogTags.forEach(data => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', `${data.value}`);
    meta.setAttribute('content', `${data.content}`);
    meta.setAttribute('class', 'custom-meta');
    header.appendChild(meta);
  });
  cardTags.forEach(data => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', `${data.value}`);
    meta.setAttribute('content', `${data.content}`);
    meta.setAttribute('class', 'custom-meta');
    header.appendChild(meta);
  })
}
/**
 * Retrieves the current title of the HTML document.
 * @returns {string} The current title of the HTML document.
 */
export function useNewTitle() {
  const newTitle = document.querySelector('title').textContent;
  //TO DO
  return newTitle;
}

    /*[
      { value: "og:title", content: ""},
      { value: "og:type", content: ""},
      { value: "og:url", content: ""},
      { value: "og:image", content: ""},
      { value: "og:description", content: ""}
    ],
      //card
    [
      {value: "twitter:image", content: ""},
      { value: "description", content: ""}
      
    ]*/