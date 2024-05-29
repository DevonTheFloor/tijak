// defineMetaTagsPage.test.js
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { defineMetaTagsPage, defineNewTitle, useNewTitle } from '../../builders/meta-tag-manager';


describe('defineMetaTagsPage', () => {
  // Avant chaque test, on prépare le document en ajoutant une balise <head>
  beforeEach(() => {
    document.head.innerHTML = ''; // Réinitialiser le contenu de <head>
  });

  // Après chaque test, on nettoie le document
  afterEach(() => {
    document.head.innerHTML = ''; // Réinitialiser le contenu de <head>
  });

  it('should add ogTags to the head', () => {
    const ogTags = [
      { value: 'og:title', content: 'Test Title' },
      { value: 'og:description', content: 'Test Description' }
    ];
    const cardTags = [];

    defineMetaTagsPage(ogTags, cardTags);

    const metas = document.querySelectorAll('meta[property]');
    expect(metas).toHaveLength(ogTags.length);

    ogTags.forEach((tag, index) => {
      expect(metas[index].getAttribute('property')).toBe(tag.value);
      expect(metas[index].getAttribute('content')).toBe(tag.content);
      expect(metas[index].getAttribute('class')).toBe('custom-meta');
    });
  });

  it('should add cardTags to the head', () => {
    const ogTags = [];
    const cardTags = [
      { value: 'twitter:card', content: 'summary' },
      { value: 'twitter:site', content: '@test' }
    ];

    defineMetaTagsPage(ogTags, cardTags);

    const metas = document.querySelectorAll('meta[name]');
    expect(metas).toHaveLength(cardTags.length);

    cardTags.forEach((tag, index) => {
      expect(metas[index].getAttribute('name')).toBe(tag.value);
      expect(metas[index].getAttribute('content')).toBe(tag.content);
      expect(metas[index].getAttribute('class')).toBe('custom-meta');
    });
  });

  it('should add both ogTags and cardTags to the head', () => {
    const ogTags = [
      { value: 'og:title', content: 'Test Title' },
      { value: 'og:description', content: 'Test Description' }
    ];
    const cardTags = [
      { value: 'twitter:card', content: 'summary' },
      { value: 'twitter:site', content: '@test' }
    ];

    defineMetaTagsPage(ogTags, cardTags);

    const ogMetas = document.querySelectorAll('meta[property]');
    const cardMetas = document.querySelectorAll('meta[name]');
    expect(ogMetas).toHaveLength(ogTags.length);
    expect(cardMetas).toHaveLength(cardTags.length);

    ogTags.forEach((tag, index) => {
      expect(ogMetas[index].getAttribute('property')).toBe(tag.value);
      expect(ogMetas[index].getAttribute('content')).toBe(tag.content);
      expect(ogMetas[index].getAttribute('class')).toBe('custom-meta');
    });

    cardTags.forEach((tag, index) => {
      expect(cardMetas[index].getAttribute('name')).toBe(tag.value);
      expect(cardMetas[index].getAttribute('content')).toBe(tag.content);
      expect(cardMetas[index].getAttribute('class')).toBe('custom-meta');
    });
  });
});

// defineNewTitle.test.js

describe('defineNewTitle', () => {
  // Avant chaque test, on prépare le document en ajoutant une balise <title>
  beforeEach(() => {
    document.head.innerHTML = '<title>Old Title</title>'; // Réinitialiser avec un titre de test
  });

  it('should update the title element with the new title', () => {
    const newTitle = 'New Test Title';

    defineNewTitle(newTitle);

    const titleElement = document.querySelector('title');
    expect(titleElement.innerHTML).toBe(newTitle);
  });

  it('should handle empty titles', () => {
    const newTitle = '';

    defineNewTitle(newTitle);

    const titleElement = document.querySelector('title');
    expect(titleElement.innerHTML).toBe(newTitle);
  });

  it('should handle long titles', () => {
    const newTitle = 'A very long title that exceeds typical lengths to ensure proper functionality';

    defineNewTitle(newTitle);

    const titleElement = document.querySelector('title');
    expect(titleElement.innerHTML).toBe(newTitle);
  });

  it('should update the title element even if it has special characters', () => {
    const newTitle = 'Title with special characters !@#$%^&*()';

    defineNewTitle(newTitle);

    const titleElement = document.querySelector('title');
    expect(titleElement.innerHTML).toBe(newTitle);
  });
});

// useNewTitle.test.js

describe('useNewTitle', () => {
  // Avant chaque test, on prépare le document en ajoutant une balise <title>
  beforeEach(() => {
    document.head.innerHTML = ''; // Réinitialiser le contenu de <head>
  });

  it('should return the current title of the document', () => {
    const initialTitle = 'Initial Title';
    document.head.innerHTML = `<title>${initialTitle}</title>`;

    const result = useNewTitle();

    expect(result).toBe(initialTitle);
  });

  it('should return an empty string if the title is empty', () => {
    document.head.innerHTML = '<title></title>';

    const result = useNewTitle();

    expect(result).toBe('');
  });

  it('should handle titles with special characters', () => {
    const specialTitle = 'Title with special characters !@#$%^&*()';
    document.head.innerHTML = `<title>${specialTitle}</title>`;

    const result = useNewTitle();

    expect(result).toBe(specialTitle);
  });

  it('should return undefined if there is no title element', () => {
    document.head.innerHTML = '';

    const result = useNewTitle();

    expect(result).toBe(undefined);
  });
});
