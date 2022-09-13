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
    switch (this.tag) {
      case 'p':
        this.crateAttributeForPara(markup, this.idTag)
      break;
    
      case 'a':
        this.createAttributeForLink(markup, this.idTag)
        break;
      case 'h1':
        this.createAttributeForTitle1(markup, this.idTag)
        break;
        case 'h2':
          this.createAttributeForTitle2(markup, this.idTag)
          break;
          case 'h3':
            this.createAttributeForTitle3(markup, this.idTag)
          break;

            case 'h4':
              this.createAttributeForTitle4(markup, this.idTag)
          break;
              case 'h5':
                this.createAttributeForTitle5(markup, this.idTag)
          break;
                case 'h6':
                  this.createAttributeForTitle6(markup, this.idTag)
          break;
          case 'img':
            this.createAttributeForImg(markup, this.idTag);
            break;
        default:
          console.error('error unknew tag');
        break;
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

}