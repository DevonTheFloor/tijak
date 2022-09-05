export default class TagInComponent{
  constructor( tag, idTag, classAtt, mountOn) {
    this.tag = tag;
    this.idTag = idTag;
    this.classAtt = classAtt;
    this.mountOn = mountOn;

    const markup = document.createElement(this.tag);
    markup.id = this.idTag;
    markup.setAttribute('class', this.classAtt);
    switch (this.tag) {
      case 'p':
        this.crateAttributeForPara(markup)
      break;
    
      case 'a':
        this.createAttributeForLink(markup)
        break;
      case 'h1':
        case 'h2':
          case 'h3':
            case 'h4':
              case 'h5':
                case 'h6':
        this.createAttributeForTitle(markup)
        break;
    }
    this.mountOn.appendChild(markup);

  }
    

  createAttributeForTitle(markup) {
    const titre = this.mountOn.getAttribute('titre');
    markup.textContent = titre;
  }
  
  crateAttributeForPara(markup) {
    const content = this.mountOn.getAttribute('texte');
    markup.textContent = content;
  }
  createAttributeForLink(markup) {
    const site = this.mountOn.getAttribute('site'),
      url = this.mountOn.getAttribute('url'),
      choice = this.mountOn.getAttribute('choice')
    markup.textContent = site;
    markup.setAttribute('href', url);
    markup.setAttribute('target', choice);
  }
  createAttributeForImg(markup) {
    const source = this.mountOn.getAttribute('source');
      description = this.mountOn.getAttribute('description');
    markup.setAttribute('src', source);
    markup.setAttribute('alt', description);
  }

}