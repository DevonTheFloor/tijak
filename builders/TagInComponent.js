export default class TagInComponent{
  constructor( tag, idTag, classAtt, mountOn) {
    this.tag = tag;
    this.idTag = idTag;
    this.classAtt = classAtt;
    this.mountOn = mountOn;

    const markup = document.createElement(this.tag);
    console.log('Markip :', markup);
    console.log('type of: ', typeof(markup));
    markup.id = this.idTag;
    //markup.id = 'id'+markup.tagName+this.number;
    markup.setAttribute('class', this.classAtt);
    if (this.tag === "p") {
      this.crateAttributeForPara(markup, this.idTag)
    } 
    else if(this.tag === "a") {
      this.createAttributeForLink(markup, this.idTag)
    }
    else if (this.tag === "h1") {
      this.createAttributeForTitle1(markup, this.idTag)
    }
    else if (this.tag === "h2") {
      this.createAttributeForTitle2(markup, this.idTag)
    }
    else if (this.tag === "h3") {
      this.createAttributeForTitle3(markup, this.idTag)
    }
    else if (this.tag === "h4") {
      this.createAttributeForTitle4(markup, this.idTag)
    }
    else if (this.tag === "h5") {
      this.createAttributeForTitle5(markup, this.idTag)
    }
    else if (this.tag === "h6") {
      this.createAttributeForTitle6(markup, this.idTag)
    } else if (this.tag === "img") {
      this.createAttributeForImg(markup, this.idTag);
    }
    this.mountOn.appendChild(markup);

  }
    
  createAttributeForTitle1(markup, idTag) {
    const titre = this.mountOn.getAttribute('titre1-'+idTag);
    markup.textContent = titre;
  }
  createAttributeForTitle2(markup, idTag) {
    const titre = this.mountOn.getAttribute('titre2-'+idTag);
    markup.textContent = titre;
  }
  createAttributeForTitle3(markup, idTag) {
    const titre = this.mountOn.getAttribute('titre3-'+idTag);
    markup.textContent = titre;
  }
  createAttributeForTitle4(markup, idTag) {
    const titre = this.mountOn.getAttribute('titre4-'+idTag);
    markup.textContent = titre;
  }
  createAttributeForTitle5(markup, idTag) {
    const titre = this.mountOn.getAttribute('titre5-'+idTag);
    markup.textContent = titre;
  }
  createAttributeForTitle6(markup, idTag) {
    const titre = this.mountOn.getAttribute('titre6-'+idTag);
    markup.textContent = titre;
  }
  crateAttributeForPara(markup, idTag) {
    const content = this.mountOn.getAttribute('texte-'+idTag);
    markup.textContent = content;
  }
  createAttributeForLink(markup, idTag) {
    const site = this.mountOn.getAttribute('site-'+idTag),
      url = this.mountOn.getAttribute('url-'+idTag),
      choice = this.mountOn.getAttribute('choice-'+idTag)
    markup.textContent = site;
    markup.setAttribute('href', url);
    markup.setAttribute('target', choice);
  }
  createAttributeForImg(markup, idTag) {
    const source = this.mountOn.getAttribute('source-'+idTag),
      description = this.mountOn.getAttribute('description-'+idTag);
    markup.setAttribute('src', source);
    markup.setAttribute('alt', description);
  }
  /*liACreatefn(olIdMount, site, url) {
    const li = document.createElement('li'),
      olMount = document.getElementById(olIdMount);
    olMount.appendChild(li);
    //<a></a>1
    const a = document.createElement('a')
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');
    a.textContent = site;
    li.appendChild(a);
  }*/
  liMenuCreator(direction, links, olIdMount, site, url) {
    links.forEach(link => {
      const li = document.createElement('li'),
      olMount = document.getElementById(olIdMount);
      olMount.appendChild(li);
      //<a></a>1
      const a = document.createElement('a')
      a.setAttribute('href', link.url);
      if (direction === "out") {
        a.setAttribute('target', '_blank');
      }
      a.textContent = link.site;
      li.appendChild(a);
    })
  }

  /*const links = [
      { site: "", url: ""},
      { site: "", url: "" },
      { site: "", url: "" },
      { site: "", url: "" }
    ]*/
}