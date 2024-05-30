import { describe, it, expect, beforeEach, vi } from 'vitest';
import { tijakAlert } from '../../handlers/handle-elements-page';

describe('tijakAlert', () => {
  let main;

  beforeEach(() => {
    document.body.innerHTML = '<main></main>';
    main = document.querySelector('main');
  });

  it('should create and append a feedback-api element to the main element', () => {
    tijakAlert('Test message', 'info', 1000);
    
    const feedbackElement = main.querySelector('feedback-api');
    expect(feedbackElement).not.toBeNull();
    expect(feedbackElement.getAttribute('message')).toBe('Test message');
  });

  it('should set the correct styles for error type', () => {
    tijakAlert('Error message', 'error', 1000);
    
    const feedbackElement = main.querySelector('feedback-api');
    expect(feedbackElement.style.backgroundColor).toBe('rgb(249, 171, 171)');
    expect(feedbackElement.style.border).toBe('2px solid red');
  });

  it('should set the correct styles for nice type', () => {
    tijakAlert('Nice message', 'nice', 1000);
    
    const feedbackElement = main.querySelector('feedback-api');
    expect(feedbackElement.style.backgroundColor).toBe('rgb(197, 247, 122)');
  });

  it('should set the default styles for other types', () => {
    tijakAlert('Default message', 'info', 1000);
    
    const feedbackElement = main.querySelector('feedback-api');
    expect(feedbackElement.style.backgroundColor).toBe('whitesmoke');
  });

  it('should remove the feedback-api element after the specified time', (done) => {
    tijakAlert('Temporary message', 'info', 100);
    
    setTimeout(() => {
      const feedbackElement = main.querySelector('feedback-api');
      expect(feedbackElement).toBeNull();
      done();
    }, 200); // Slightly longer than the timeout in tijakAlert to ensure it has been removed
  });
});
