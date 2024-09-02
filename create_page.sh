#!/bin/bash

# Demande à l'utilisateur d'entrer le nom de la page
read -p "Nom de la page: " nom_page

# Convertit le nom du composant : met une majuscule au début de chaque mot et enlève les espaces
nom_element=$(echo "$nom_page" | sed -e 's/\b\(.\)/\u\1/g' -e 's/ //g')

# Convertit le nom du dossier en nom de fichier en ajoutant des tirets entre les mots et en les passant en minuscules
nom_fichier=$(echo "$nom_page" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

# Crée le fichier JavaScript avec le contenu pré-rempli
cat > "./front-kaz/src/pages/$nom_fichier.js" <<EOL
import { defineMetaTagsPage, defineNewTitle } from '../../tijak/builders/meta-tag-manager'
import { mountingPageElements } from '../../tijak/builders/mounting-page'
export default class $nom_element extends HTMLElement {
	constructor () {
		super();
		defineNewTitle("");
		/*defineMetaTagsPage([
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
      
    ]);*/
		mountingPageElements(
			this,`
			`)
	}
	connectedCallback(){};
	disconnectedCallback(){};
	adoptedCallback(){};
	attributeChangedCallback(){};
}
customElements.define('$nom_fichier', $nom_element);
EOL

echo "le fichiers '$nom_fichier.js' a été créé avec succès."
