export class TagInComponent{
  constructor( tag, idTag, classAtt, mountOn, getContext) {
    this.tag = tag;
    this.idTag = idTag;
    this.classAtt = classAtt;
    this.mountOn = mountOn;
    this.getContext = getContext;

    const markup = document.createElement(this.tag);
    markup.id = this.idTag;
    //markup.id = 'id'+markup.tagName+this.number;
    markup.setAttribute('class', this.classAtt);
    if (this.tag === "p") {
      this.crateAttributeForPara(markup, this.idTag, this.getContext);
    } 
    else if(this.tag === "a") {
      this.createAttributeForLink(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "h1") {
      this.createAttributeForTitle1(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "h2") {
      this.createAttributeForTitle2(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "h3") {
      this.createAttributeForTitle3(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "h4") {
      this.createAttributeForTitle4(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "h5") {
      this.createAttributeForTitle5(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "h6") {
      this.createAttributeForTitle6(markup, this.idTag, this.getContext)
    } else if (this.tag === "img") {
      this.createAttributeForImg(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "label") {
      this.createAttributeForLabel(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "input") {
      this.createAttributeForInput(markup, this.idTag, this.getContext);
    }
    else if (this.tag === "button") {
      this.createAttributeForButton(markup, this.idTag, this.getContext);
    }
    this.mountOn.appendChild(markup);

    return markup;
  }
  /**
   * Create attribute for button tag. Enable: type by type-btn-*; value by txt-btn-*; 
   * @param {String} markup name of the tag
   * @param {String} idTag id of the tag
   * @param {*} context context of the tag for get attribute
   */
  createAttributeForButton(markup, idTag, context) {
    const type = context.getAttribute('type-btn-'+idTag),
      text = context.getAttribute('txt-btn-'+idTag);
    markup.setAttribute('type', type);
    markup.textContent = text;
  }
  createAttributeForInput(markup, idTag, context) {
    const type = context.getAttribute('type-'+idTag),
      plhldr = context.getAttribute('plhldr-'+idTag);
    markup.setAttribute('type', type)
    markup.setAttribute('placeholder', plhldr);

  }
  createAttributeForLabel(markup, idTag, context) {
    const pour = context.getAttribute('for-'+idTag),
      etiquette = context.getAttribute('label-'+idTag);
    markup.setAttribute('for', pour);
    markup.textContent = etiquette;
  }
  createAttributeForTitle1(markup, idTag, context) {
    const titre = context.getAttribute('h1-'+idTag);
    markup.textContent = titre;
  }
  createAttributeForTitle2(markup, idTag, context) {
    const titre = context.getAttribute('h2-'+idTag);
    markup.textContent = titre;
  }
  createAttributeForTitle3(markup, idTag, context) {
    const titre = context.getAttribute('h3-'+idTag);
    markup.textContent = titre;
  }
  createAttributeForTitle4(markup, idTag, context) {
    const titre = context.getAttribute('h4-'+idTag);
    markup.textContent = titre;
  }
  createAttributeForTitle5(markup, idTag, context) {
    const titre = context.getAttribute('h5-'+idTag);
    markup.textContent = titre;
  }
  createAttributeForTitle6(markup, idTag, context) {
    const titre = context.getAttribute('h6-'+idTag);
    markup.textContent = titre;
  }
  crateAttributeForPara(markup, idTag, context) {
    const content = context.getAttribute('text-'+idTag);
    markup.textContent = content;
  }
  createAttributeForLink(markup, idTag, context) {
    const site = context.getAttribute('site-'+idTag),
      url = context.getAttribute('url-'+idTag),
      choice = context.getAttribute('choice-'+idTag)
    markup.textContent = site;
    markup.setAttribute('href', url);
    markup.setAttribute('target', choice);
  }
  createAttributeForImg(markup, idTag, context) {
    const source = context.getAttribute('source-'+idTag),
      description = context.getAttribute('description-'+idTag);
    markup.setAttribute('src', source);
    markup.setAttribute('alt', description);
  }
}

export const tagMethod = {
  liMenuCreator: (direction, links, olIdMount, site, url) =>{
    
    if (direction === "in") {
      const url = new URL(window.location.href),
        hach = url.hash;
      const newLinks = links.filter(link => link.url != hach);
      newLinks.forEach(link => {
        linkedListIn(olIdMount, link)
      })
    } else {
      links.forEach(link => {
        linkedListOut(olIdMount, link);
      })
    }
  },
  optionsSelectCreator: (listOptions, selectIdMount, value, text) => {
    listOptions.forEach(detailsOption => {
      optionForSelect(selectIdMount, detailsOption);
    })
  }
}
function optionForSelect(selectIdMount, details){
  const option = document.createElement('option'),
    mount = document.getElementById(selectIdMount),
    valeur = option.setAttribute('value', details.value);
    option.textContent = details.text;
    mount.appendChild(option);
}
function linkedListIn(olIdMount, link) {
  const li = document.createElement('li'),
    olMount = document.getElementById(olIdMount);
    olMount.appendChild(li);
    //<a></a>1
    const a = document.createElement('a')
    a.setAttribute('href', link.url);
    a.textContent = link.site;
  li.appendChild(a);
}
function linkedListOut(olIdMount, link) {
  const li = document.createElement('li'),
  olMount = document.getElementById(olIdMount);
  olMount.appendChild(li);
  //<a></a>1
  const a = document.createElement('a')
  a.setAttribute('href', link.url);
  a.setAttribute('target', '_blank');
  a.textContent = link.site;
  li.appendChild(a);
}
  
  /*const links = [
      { site: "", url: ""},
      { site: "", url: "" },
      { site: "", url: "" },
      { site: "", url: "" }
    ]*/
