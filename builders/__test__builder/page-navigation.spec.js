import { describe, it, expect, vi } from "vitest";
import { navigatorSearchParams } from "../page-navigation";

import { JSDOM } from 'jsdom';

// Configuration de JSDOM pour simuler window



describe('navigatorSearchParams (...paramsName)', ()=> {
  const { window } = new JSDOM();
  global.window = window;
  global.document = window.document;
  
  // Mock de la fonction utilitaire getPathFromLocation pour retourner un chemin spécifique
  const mockGetPathFromLocation = vi.fn(() => '/example/path/param1/param2');
  window.location.pathname = mockGetPathFromLocation();
  const result = navigatorSearchParams(mockGetPathFromLocation(),'un', 'deux');
  console.log('URL :', window.location.pathname);
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
})