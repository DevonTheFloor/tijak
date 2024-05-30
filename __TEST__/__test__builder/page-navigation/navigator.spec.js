// navigator.test.js
import { describe, it, expect, beforeEach,afterEach, vi } from 'vitest';
import { navigator } from '../../../builders/page-navigation';

describe('navigator', () => {
  const mapping = [
    { uri: '/', page: '<index-page></index-page>' },
    { uri: '/mentions-legales', page: '<mentions-legales></mentions-legales>' }
  ] 
  let app;

  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    app = document.getElementById('app');
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  it('should navigate to the index page', () => {
    // Mock the window.location.href
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://example.com/',
      },
      writable: true,
    });

    navigator();
    expect(app.innerHTML).toBe('<index-page></index-page>');
  });

  it('should navigate to the mentions legales page', () => {
    // Mock the window.location.href
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://example.com/mentions-legales',
      },
      writable: true,
    });

    navigator();
    expect(app.innerHTML).toBe('<mentions-legales></mentions-legales>');
  });

  it('should display 404 error for unknown routes', () => {
    // Mock the window.location.href
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://example.com/unknown',
      },
      writable: true,
    });

    navigator();
    expect(app.innerHTML).toEqual('<h1>ERROR 404</h1><p>La page que vous cherchez n\'existe pas</p>');
  });

  it('should remove custom meta tags', () => {
    document.head.innerHTML = '<meta class="custom-meta"><meta class="custom-meta">';
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://example.com/home',
      },
      writable: true,
    });

    navigator();
    const customMetas = document.querySelectorAll('meta.custom-meta');
    expect(customMetas.length).toBe(0);
  });

  it('should go back in history after displaying 404 error', () => {
    const backSpy = vi.spyOn(history, 'back');
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://example.com/unknown',
      },
      writable: true,
    });

    navigator();
    vi.runAllTimers();
    expect(backSpy).toHaveBeenCalled();
  });
});
