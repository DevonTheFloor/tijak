import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
//import { Window } from 'happy-dom';
import { JSDOM } from 'jsdom';
import { navigatorSearchParams, navigator } from "../page-navigation";


/*describe('navigatorSearchParams (...paramsName)', ()=> {
  
  const mockGetPathFromLocation = vi.fn(() => '/domaine.com/path/param1/param2');
  window.location.pathname = mockGetPathFromLocation();
  let result = navigatorSearchParams(mockGetPathFromLocation(),'un', 'deux');
  console.log('RESULT :', result);

  it('window not undefined', () => {
    expect(typeof window).not.toBe('undefined')
  })
  it("Result type in not an ARRAY", ()=> {
    expect(Array.isArray(result)).toBe(false);
  })
  it('Result type is not a NUMBER', ()=> {
    expect(typeof result).not.toBe('number');
  })
  it('Result type is not a STRING', ()=> {
    expect(typeof result).not.toBe('string');
  })
  it('Result type IS OBJECT', ()=> {
    expect(typeof result).toBe('object');
  })
  it('It is MOCKED ?', () => {
    expect(mockGetPathFromLocation).toHaveBeenCalled();
  });
  it('Check if result s are correct', ()=> {
    expect(result).toEqual({ un: 'path', deux: 'param1' });
  })
  it('Return correctly only ONE param', ()=> {
    result = navigatorSearchParams(mockGetPathFromLocation(),'un');
    expect(result).toEqual({un: 'path'})
  })
  it('Return correctly only THREE param', ()=> {
    result = navigatorSearchParams(mockGetPathFromLocation(),'un', 'deux', 'trois');
    expect(result).toEqual({un: 'path', deux:'param1',trois: 'param2'})
  })
})*/

describe('navigator', () => {
  const dom = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>');
  global.window = dom.window;
  global.document = dom.window.document;
  console.log('DOM :',dom.window.document);

  // Créez un exemple de tableau de mappage fictif pour le test
  const mapping = [
    { uri: '/path', page: '<h1>Page 1</h1>' },
    { uri: '/other', page: '<h1>Page 2</h1>' }
  ];

  it('should navigate to an existing page', () => {
    // Appelez la fonction navigator avec le mappage fictif
    navigator(mapping);

    // Vérifiez que les fonctions document.getElementById et document.remove ont été appelées
    expect(document.getElementById).toHaveBeenCalledWith('app');
    expect(document.querySelectorAll).toHaveBeenCalledWith('meta.custom-meta');
    expect(document.remove).toHaveBeenCalled();

    // Vérifiez que la fonction window.scroll a été appelée avec les coordonnées (0, 0)
    expect(window.scroll).toHaveBeenCalledWith(0, 0);

    // Vérifiez que le contenu de la page a été correctement inséré dans l'élément avec l'id 'app'
    expect(document.getElementById('app').innerHTML).toBe('<h1>Page 1</h1>');
  });

  it('should navigate to an non-existing page and display an error message', () => {
    // Modifiez l'URL pour correspondre à une URI non présente dans le mappage fictif
    window.location.href = 'http://example.com/non-existing';

    // Appelez la fonction navigator avec le mappage fictif
    navigator(mapping);

    // Vérifiez que la fonction history.back a été appelée
    expect(history.back).toHaveBeenCalled();

    // Vérifiez que la fonction window.scroll a été appelée avec les coordonnées (0, 0)
    expect(window.scroll).toHaveBeenCalledWith(0, 0);

    // Vérifiez que le contenu de l'élément avec l'id 'app' correspond à l'erreur 404
    expect(document.getElementById('app').innerHTML).toContain('ERROR 404');
    expect(document.getElementById('app').innerHTML).toContain("La page que vous cherchez n'existe pas");
  });
  
  // Testez le cas où `pa` est indéfini
  it('should display error message and go back when `pa` is undefined', () => {
    // Mock les dépendances nécessaires, par exemple : window, history, dQSr, etc.
    // Créez un objet `mapping` qui correspond au cas de test
    // Appelez la fonction `navigator` avec le `mapping` approprié
    // Vérifiez les résultats attendus, par exemple : vérifiez si le message d'erreur est affiché, si la fenêtre est scrollée, etc.
  });
});
