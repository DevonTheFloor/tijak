/**
 * Class for create tag faster
 * @param { String } tag - the tag to create
 * @param { String } idTag - Id of the tag, if null individuazlization() create a uniq one.
 * @param { String } classAtt - class of the tag
 * @param { Object } mountOn - the node where the tag is mounted, generaly 'this'
 * @param { HTMLElement } getContext - the node context of the element, generaly the entire class 'this' 
 */
export class TagInComponent{
  constructor( tag, idTag, classAtt, mountOn, getContext) {
    this.tag = tag;
    this.idTag = idTag ? idTag : this.#individualization(tag); // Utilisation de la méthode pour générer un ID unique
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
  * Génère un identifiant unique pour une instance en utilisant un compteur statique.
  *
  * Cette méthode utilise un compteur statique pour suivre le nombre d'instances créées.
  * Chaque appel à cette méthode incrémente le compteur et retourne un identifiant unique basé sur 
  * l'ID de l'instance fourni et la valeur actuelle du compteur.
  *
  * @param {string} instanceId - L'identifiant de l'instance pour laquelle un identifiant unique est généré.
  * @returns {string} L'identifiant unique pour l'instance, composé de l'ID de l'instance et du compteur.
  * @private
 */
  #individualization(instanceId) {
    // Static counter to keep track of the number of instances
    if (!TagInComponent.counter) {
      TagInComponent.counter = 0;
    }
    
    // Increment the counter and return a unique ID
    const unikId = `${instanceId}-${TagInComponent.counter++}`;
    return unikId;
  }
  /**
   * Create attribute for button tag. Enable: type by type-btn-*; value by txt-btn-*; 
   * @param { String } markup name of the tag
   * @param { String } idTag id of the tag
   * @param { HTMLElement } context context of the tag for get attribute
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
  /**
    * Crée des éléments de liste basés sur les liens fournis et les insère dans un élément de liste ordonnée (ol).
    *
    * @param {string} direction - Détermine la direction de traitement des liens. Si "in", les liens qui ne correspondent pas à l'URL actuelle sont ajoutés. Si "out", tous les liens sont ajoutés.
    * @param {Array} links - Un tableau d'objets représentant les liens. Chaque objet doit avoir une propriété `url`.
    * @param {string} olIdMount - L'ID de l'élément `<ol>` où les éléments de liste seront montés.
    * @param {string} site - Le nom ou l'identifiant du site (non utilisé dans la fonction).
    * @param {string} url - L'URL actuelle de la page (non utilisé dans la fonction).
  */
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
  /**
    * Crée des éléments d'option pour un élément `<select>` et les insère dans celui-ci.
    *
    * @param {Array} listOptions - Un tableau d'objets représentant les options à ajouter. Chaque objet doit contenir des propriétés pour la valeur et le texte.
    * @param {string} selectIdMount - L'ID de l'élément `<select>` où les options seront montées.
    * @param {string} value - La propriété de l'objet `detailsOption` utilisée pour la valeur de chaque option (non utilisée directement dans cette fonction).
    * @param {string} text - La propriété de l'objet `detailsOption` utilisée pour le texte de chaque option (non utilisée directement dans cette fonction).
  */
  optionsSelectCreator: (listOptions, selectIdMount, value, text) => {
    listOptions.forEach(detailsOption => {
      optionForSelect(selectIdMount, detailsOption);
    })
  }
}
/**
 * Crée un élément d'option pour un élément `<select>` et l'insère dans celui-ci.
 *
 * @param {string} selectIdMount - L'ID de l'élément `<select>` où l'option sera ajoutée.
 * @param {Object} details - Un objet contenant les détails de l'option. Doit inclure les propriétés `value` et `text`.
 * @param {string} details.value - La valeur de l'option à définir dans l'attribut `value`.
 * @param {string} details.text - Le texte à afficher pour l'option.
*/
function optionForSelect(selectIdMount, details){
  const option = document.createElement('option'),
    mount = document.getElementById(selectIdMount),
    valeur = option.setAttribute('value', details.value);
    option.textContent = details.text;
    mount.appendChild(option);
}
/**
 * Crée un élément de liste `<li>` avec un lien hypertexte et l'ajoute à une liste ordonnée `<ol>`.
 *
 * @param {string} olIdMount - L'ID de l'élément `<ol>` où l'élément de liste `<li>` sera ajouté.
 * @param {Object} link - Un objet contenant les détails du lien. Doit inclure les propriétés `url` et `site`.
 * @param {string} link.url - L'URL à définir dans l'attribut `href` de l'élément `<a>`.
 * @param {string} link.site - Le texte à afficher pour le lien hypertexte.
 */
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
/**
 * Crée un élément de liste `<li>` avec un lien hypertexte qui s'ouvre dans un nouvel onglet, puis l'ajoute à une liste ordonnée `<ol>`.
 *
 * @param {string} olIdMount - L'ID de l'élément `<ol>` où l'élément de liste `<li>` sera ajouté.
 * @param {Object} link - Un objet contenant les détails du lien. Doit inclure les propriétés `url` et `site`.
 * @param {string} link.url - L'URL à définir dans l'attribut `href` de l'élément `<a>`.
 * @param {string} link.site - Le texte à afficher pour le lien hypertexte.
 */
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
