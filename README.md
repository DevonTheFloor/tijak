# TIJAK   
   
TIJAK.js est une librairy pour faire des sites multi-page en javascript vanilla sous Vite.js.   
La lib utilise la navigation en hash (#) afin de profiter des avantages d'une SPA.   
Son but est de profiter d'un environnement de développement similaire à un framework mais avec des composants natifs sans DOM virtuel.
   
## Installation   
   
Dans ton projet Vite.js template vanilla, installe la librairy   
```
npm install tijak
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

## Structure   
   
TIJAK.js est conçu pour utiliser les customElements en les distribuant par page, d'où la navigation.
Pour ce faire il faut séparer le dossier des components et le dossier des pages.   
La structure idéale étant celle-ci:   
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
Et Rollup créera une balise style par composant.
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

