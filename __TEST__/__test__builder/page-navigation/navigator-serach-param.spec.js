// navigatorSearchParams.test.js
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { navigatorSearchParams } from '../../../builders/page-navigation';

describe('navigatorSearchParams', () => {
  beforeEach(() => {
    // Mock the window.location.pathname
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '',
      },
      writable: true,
    });
  });

  it('should return an object with parsed parameters when valid', () => {
    window.location.pathname = '/param1/param2';
    const result = navigatorSearchParams('key1', 'key2');
    expect(result).toEqual({ key1: 'param1', key2: 'param2' });
  });

  it('should return undefined if the number of paramsName and params do not match', () => {
    window.location.pathname = '/param1';
    const result = navigatorSearchParams('key1', 'key2');
    expect(result).toBeUndefined();
  });

  it('should return undefined if paramsName is empty', () => {
    window.location.pathname = '/param1/param2';
    const result = navigatorSearchParams();
    expect(result).toBeUndefined();
  });

  it('should return undefined if params are empty', () => {
    window.location.pathname = '/';
    const result = navigatorSearchParams('key1', 'key2');
    expect(result).toBeUndefined();
  });

  it('should handle special characters in parameters', () => {
    window.location.pathname = '/param%201/param%202';
    const result = navigatorSearchParams('key1', 'key2');
    expect(result).toEqual({ key1: 'param%201', key2: 'param%202' });
  });
});
