#!/bin/bash

# Demande à l'utilisateur d'entrer le nom du composant
read -p "Nom du composant: " nom_composant

# Convertit le nom du composant : met une majuscule au début de chaque mot et enlève les espaces
nom_dossier=$(echo "$nom_composant" | sed -e 's/\b\(.\)/\u\1/g' -e 's/ //g')

# Convertit le nom du dossier en nom de fichier en ajoutant des tirets entre les mots et en les passant en minuscules
nom_fichier=$(echo "$nom_composant" | tr ' ' '-' | tr '[:upper:]' '[:lower:]')

# Crée le dossier avec le chemin spécifié
mkdir -p "./front-kaz/src/components/$nom_dossier"

# Crée le fichier JavaScript avec le contenu pré-rempli
cat > "./front-kaz/src/components/$nom_dossier/$nom_fichier.js" <<EOL
import './$nom_fichier.scss';
export default class $nom_dossier extends HTMLElement {
	constructor () {
		super();
	}
	connectedCallback(){};
	disconnectedCallback(){};
	adoptedCallback(){};
	attributeChangedCallback(){};
}
customElements.define('$nom_fichier', $nom_dossier);
EOL

# Crée le fichier SCSS avec le contenu pré-rempli
cat > "./front-kaz/src/components/$nom_dossier/$nom_fichier.scss" <<EOL
$nom_fichier {}
EOL

echo "Le dossier './front-kaz/src/components/$nom_dossier' et les fichiers '$nom_fichier.js' et '$nom_fichier.scss' ont été créés avec succès."
