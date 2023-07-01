import { describe, it, expect, vi } from "vitest";
import { navigatorSearchParams } from "../page-navigation";
import { JSDOM } from 'jsdom';

describe('navigatorSearchParams (...paramsName)', ()=> {
  const { window } = new JSDOM();
  global.window = window;
  global.document = window.document;
  
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
})