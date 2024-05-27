import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Window } from 'happy-dom';
import { navigatorSearchParams, navigator } from "../page-navigation";




describe('Test du navigator', () => {
  
  let window;
  let document;
  let appli;

  beforeEach(() => {
    window = new Window({
      url: 'https://exemple.fr/premiere',
      width: 1024,
      height: 768
    });

    document = window.document;
    appli = document.createElement('div');
    appli.id = 'app';
    document.body.appendChild(appli);
    
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });
    
    it('trouve uri', ()=> {
      expect(window.location.href).toBe('https://exemple.fr/premiere')
    })

    it('trouve premiere page', ()=> {
      const mapping = [
        { uri: '/premiere', page: '<h1>Premiere Page</h1>' },
        { uri: '/other', page: '<h1>Page 2</h1>' }
      ];
      const result = navigator(mapping);

      expect(result.document.body.innerHTML).toBe('<div class="app"><h1>Premiere Page</h1></div>')
    })
})