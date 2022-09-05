import { dGEBId } from "../helpers/myDomHelper";
import { linkImage } from "./handle-elements-page";

export function mediaQueryForImages( breakPoint, targets) {
  if(screen.width <= breakPoint) {
    targets.forEach(target => {
      const image = dGEBId(target.id);
      image.src = target.small;
      if (target.link = 'yes') {
        linkImage(image, target.site)
      }
    })
  } else {
    targets.forEach(target => {
      const image = dGEBId(target.id);
      image.src = target.large;
      if (target.link = 'yes') {
        linkImage(image, target.site)
      }
    })
  }
}