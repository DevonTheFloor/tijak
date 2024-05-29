import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
//import { Window } from 'happy-dom';
import { JSDOM } from 'jsdom';
import { navigatorSearchParams, navigator } from "../../builders/page-navigation";




describe('Test du navigator', () => {
  const dom = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>');
  // Crée une instance de URL avec la valeur souhaitée pour href
  const hrefValue = 'https://example.com/other/long';
  //const url = new URL(hrefValue);

  // Assigner l'instance de URL à window.location
  global.window = dom.window;
  global.document = dom.window.document;
  dom.window.location.href = hrefValue;

  const mapping = [
    { uri: '/path', page: '<h1>Page 1</h1>' },
    { uri: '/other', page: '<h1>Page 2</h1>' }
  ];
  // Mock de la fonction getElementById
  global.document.getElementById = vi.fn();
  const result = navigator(mapping);
  it('return app for getElementById', ()=> {
    // Définir le comportement attendu du mock
    document.getElementById.mockReturnValueOnce({ value: 'app' });
  
    // Vérifier que getElementById a été appelée avec les bons arguments
    expect(document.getElementById).toHaveBeenCalledWith('app');
  })
  

    
  
    // Vérifier le résultat de la fonction
    console.log('MAp:', mapping[1].page);
    //expect(result).toBe(mapping[1].page);
  });
  