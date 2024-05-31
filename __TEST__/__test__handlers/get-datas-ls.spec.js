import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getDatasLocalStorage } from '../../handlers/handle-elements-page';

describe.only('getDatasLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should retrieve data from localStorage for given keys', () => {
    localStorage.setItem('key1', 'value1');
    localStorage.setItem('key2', 'value2');
    localStorage.setItem('key3', 'value3');

    const result = getDatasLocalStorage(['key1', 'key2', 'key3']);
    
    expect(result).toEqual([
      {key1: 'value1'},
      {key2: 'value2'},
      {key3: 'value3'}
    ]);
  });

  it('should handle missing keys in localStorage', () => {
    localStorage.setItem('key1', 'value1');
    
    const result = getDatasLocalStorage(['key1', 'key2']);
    
    expect(result).toEqual({
      key1: 'value1',
      key2: null
    });
  });

  it('should return an empty object if no keys are provided', () => {
    const result = getDatasLocalStorage([]);
    expect(result).toEqual({});
  });

  /*it('should log the correct data to the console', () => {
    const consoleLogSpy = vi.spyOn(console, 'log');
    localStorage.setItem('key1', 'value1');
    
    getDatasLocalStorage(['key1']);
    
    expect(consoleLogSpy).toHaveBeenCalledWith('data :', 'key1');
    expect(consoleLogSpy).toHaveBeenCalledWith('ls datas :', { key1: 'value1' });
    
    consoleLogSpy.mockRestore();
  });*/

  /*it('should not throw an error if localStorage is empty', () => {
    expect(() => {
      getDatasLocalStorage(['key1', 'key2']);
    }).not.toThrow();
  });*/
});
