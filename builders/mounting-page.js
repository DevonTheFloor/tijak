import { dGEBId } from '../helpers/myDomHelper';

export function mountingPageElements(mount, page) {
  mount.insertAdjacentHTML('afterbegin', page)

}

export function insertPageInApp(page) {
  const mount = dGEBId('app');
  mount.innerHTML = '';
  mount.innerHTML = page ;
}