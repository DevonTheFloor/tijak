
export function mountingPageElements(mount, page) {
  mount.insertAdjacentHTML('afterbegin', page)

}

export function insertPageInApp(page) {
  const mount =  document.getElementById('app');
  mount.innerHTML = '';
  mount.innerHTML = page ;
}