# TIJAK   
[![en](https://img.shields.io/badge/lang-en-purple.svg)](https://github.com/DevonTheFloor/tijak/blob/main/README.en.md)
[![krl](https://img.shields.io/badge/lang-krl-red.svg)](https://github.com/DevonTheFloor/tijak/blob/main/README.krl.md)


   
TIJAK.js, du nom du fruit du Jaquier qui pousse sur l'ile de la Réunion, est une bibliothèque visant à faire des sites multi-page en javascript vanilla sous Vite.js.   

La lib utilise la navigation en hash (#) afin de profiter des avantages d'une SPA.   
Son but est de profiter d'un environnement de développement similaire à un framework mais avec des composants natifs sans DOM virtuel.
   
## Installation   
   
Tout d'abord créer ton projet Vite.js   
```
npm init vite@latest
```

Dans ton projet Vite.js template vanilla, installe la bibliothèque:   
```
git clone https://github.com/DevonTheFloor/tijak
```
   
Tu peux aussi démarrer avec le starter pack:   
```
https://github.com/DevonTheFloor/TIJAK-template-project
```
   

## Fonctionnement   
   
TIJAK.js est pévu pour distribuer les composants du dossiers "pages" en tant que page du site.   
C'est sur ceux-ci que tu monteras tes coposants personnonalisés ou des tag HTML classiques.    
ex:   
```js
import * as txt from '../strings/seconPageTxt'
export default class SecondPage extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    build.mountingPageElements(
      this,
      `<my-header h1title="Second Page"></my-header>
        <main>
          <section>
            <h2>This is the second page</h2>
            <p>${txt.description}.</p>
          </section>
        </main>
        `);
    }

    connectedCallback() {}
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
    
  }
  customElements.define('second-page', SecondPage);
  ```

### Parametrage   
   
Le routage des différentes pages étant géré par la lib dans sa fonction navigator(), il faut lui fournir un fichier navigator-mapping.js à la racine du projet.
Dans celui-ci tu importeras les composants PAGE uniquement) sous leurs notations customElement ( <my-custom-page></my-custom-page>) et tu renseigneras les uri:   
   
```js

export const mapping = [
  { 
    uri: '', 
    page: '<index-page></index-page>' 
  },
  { 
    uri: '#/', 
    page: '<index-page></index-page>' 
  },
  { 
    uri: '#/second-page', 
    page: '<second-page></second-page>' 
  }
];
  ```
   
Les fonctions d'ecoute de l'url pour la navigation en hash doivent être importées dans le main.js:   
```js
import '../src/sass/main.scss';
import { listenForHashInIndex } from '../tijak/builders/page-navigation';
import { listenForHash }from '../tijak/builders/page-navigation/'


listenForHash();
listenForHashInIndex();
```
   

## Structure   
   
Pour permettre la navigation par "page", il faut séparer le dossier des components et le dossier des pages. La structure idéale étant celle-ci:   

```bash
project-folder   
    public
        main.js
    src   
        components
        pages  
        strings
        sass
    navigatore-mapping.js
    vite.config.js
```
   
### Strings
Afin de faciliter la lisibilité du code, TIJAK.js propose de séparer le texte de chaque page dans un dossiers STRINGS avec une convention de nommage du type : nomDePageTxt.   
   
### CSS 
   
#### Sass

Nous conseillons d'utiliser Sass et de profiter pleinement du ciblage par nom de composant persdonnalisé et du nesting pour styliser les composants.   
```bash
components
  MyListComponent
    my-list-component.js
    my-list-component.scss
```   

Et [Rollup](https://rollupjs.org/guide/en/ "Lien vers Rollup.js") créera une balise style par composant.
Dans l\'idéale le style des pages serait géré dans le main.scss. Si une ou plusieurs pages possèdent leurs propres styles, créé alors dans le composants page une balise style et gère le en css.   
   
Pour avoir tes variable Sass globalement tu peux les importer dans le vite.config.js:   
   
   
```js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: 'index.html'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "/src/sass/_variables.scss";
          @import "/src/sass/_mixins.scss";`
      }
    }
  },
  
})
```
## Céer page et composant

Le dossier tijak contient deux script bash pour créer rapidement page et commosant. Il faut ajouter deux lignes dans 'script' du pakage.json:
```
 "component":"./front-kaz/tijak/create_component.sh",
    "page":"./front-kaz/tijak/create_page.sh"

```
Ils s'executent avec 'nom run component' ou 'npm run page'. La convention de nommage veut que les composants soit identifiés par deux mots (ex: level nav) et les pages doivent contenir le mot page (ex: new page'). 
   


