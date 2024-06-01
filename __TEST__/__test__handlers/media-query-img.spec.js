import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mediaQueryForImages, linkImage } from './path/to/your/module';

function linkImage(image, site) {
  const link = document.createElement('a');
  link.href = site;
  image.parentNode.insertBefore(link, image);
  link.appendChild(image);
}

describe('mediaQueryForImages', () => {
  let originalScreen;

  beforeEach(() => {
    // Sauvegarde l'objet screen original
    originalScreen = global.screen;

    // Mock document.getElementById pour retourner des éléments image simulés
    vi.spyOn(document, 'getElementById').mockImplementation(id => {
      const img = document.createElement('img');
      img.id = id;
      return img;
    });

    // Mock linkImage function
    vi.spyOn(global, 'linkImage').mockImplementation((image, site) => {
      const link = document.createElement('a');
      link.href = site;
      image.parentNode.insertBefore(link, image);
      link.appendChild(image);
    });
  });

  afterEach(() => {
    // Restore l'objet screen original
    global.screen = originalScreen;

    // Restore les mocks
    vi.restoreAllMocks();
  });

  it('should load small images and add links if screen width is less than or equal to the breakpoint', () => {
    // Simule une largeur d'écran inférieure ou égale au point de rupture
    global.screen = { width: 600 };

    const targets = [
      { id: 'image1', small: 'small1.jpg', large: 'large1.jpg', link: 'yes', site: 'http://example.com' },
      { id: 'image2', small: 'small2.jpg', large: 'large2.jpg', link: 'no', site: 'http://example.org' },
    ];

    // Appelle la fonction mediaQueryForImages
    mediaQueryForImages(800, targets);

    // Vérifie que les images ont été mises à jour avec les petites sources et que les liens ont été ajoutés
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    expect(image1.src).toBe('http://localhost/small1.jpg'); // local URL used by jsdom
    expect(image2.src).toBe('http://localhost/small2.jpg');

    expect(image1.parentElement.tagName).toBe('A');
    expect(image1.parentElement.href).toBe('http://example.com/');
    expect(image2.parentElement.tagName).not.toBe('A');
  });

  it('should load large images and add links if screen width is greater than the breakpoint', () => {
    // Simule une largeur d'écran supérieure au point de rupture
    global.screen = { width: 1000 };

    const targets = [
      { id: 'image1', small: 'small1.jpg', large: 'large1.jpg', link: 'yes', site: 'http://example.com' },
      { id: 'image2', small: 'small2.jpg', large: 'large2.jpg', link: 'no', site: 'http://example.org' },
    ];

    // Appelle la fonction mediaQueryForImages
    mediaQueryForImages(800, targets);

    // Vérifie que les images ont été mises à jour avec les grandes sources et que les liens ont été ajoutés
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    expect(image1.src).toBe('http://localhost/large1.jpg');
    expect(image2.src).toBe('http://localhost/large2.jpg');

    expect(image1.parentElement.tagName).toBe('A');
    expect(image1.parentElement.href).toBe('http://example.com/');
    expect(image2.parentElement.tagName).not.toBe('A');
  });
});
