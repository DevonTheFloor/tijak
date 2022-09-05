# TIJAK
   
[![fr](https://img.shields.io/badge/lang-fr-blue.svg)](https://github.com/DevonTheFloor/tijak/blob/main/README.md)
[![krl](https://img.shields.io/badge/lang-krl-red.svg)](https://github.com/DevonTheFloor/tijak/blob/main/README.krl.md)

TIJAK.js is a library aimed at making multi-page sites in vanilla javascript under Vite.js.
The lib uses hash navigation (#) to take advantage of the benefits of a SPA.
Its goal is to take advantage of a development environment similar to a framework but with native components without virtual DOM.   
   
## Installation
   
In your Vite.js project template  vanilla , install the library:   
```bash
npm install TIJAK
```
   
## how it works
   
TIJAK.js is designed to distribute the components of the "pages" folder as a site page.
It is on these that you will mount your custom components or classic HTML tags.   
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
     
## Setting
   

The routing of the different pages being managed by the lib in its navigator() function, it must be provided with a navigator-mapping.js file at the root of the project.
In this one you will import the PAGE components only) under their customElement notations ( <my-custom-page></my-custom-page>) and you will fill in the uris:   
   

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
   
To allow navigation by "page", it is necessary to separate the components folder and the pages folder. The ideal structure is this:   
   
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
   
In order to facilitate the readability of the code, TIJAK.js proposes to separate the text of each page in a STRINGS folder with a naming convention of the type: pageNameTxt.   
   
### css
#### Sass
   
We recommend using Sass and taking full advantage of custom component name targeting and nesting to style components.   
   
```bash
components
  MyListComponent
    my-list-component.js
    my-list-component.scss
    ```
And [Rollup](https://rollupjs.org/guide/en/ "Lien vers Rollup.js") will create one style tag per component. Ideally page styling would be handled in main.scss. If one or more pages have their own styles, then create a style tag in the page components and manage it in css.   
To have your Sass variables globally you can import them into the vite.config.js:   
   
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


