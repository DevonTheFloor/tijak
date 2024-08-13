import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useFeedbackApi } from '../../handlers/handle-elements-page';

describe('useFeedbackApi', () => {
  let main;

  beforeEach(() => {
    document.body.innerHTML = '<main></main>';
    main = document.querySelector('main');
  });

  it('should create and append a feedback-api element to the main element', () => {
    useFeedbackApi({ message: 'Test message' });
    
    const feedbackElement = main.querySelector('feedback-api');
    expect(feedbackElement).not.toBeNull();
    expect(feedbackElement.getAttribute('message')).toBe('Test message');
  });

  it('should log the correct message to the console', () => {
    const consoleLogSpy = vi.spyOn(console, 'log');
    useFeedbackApi({ message: 'Log message' });
    
    expect(consoleLogSpy).toHaveBeenCalledWith('message: ', 'Log message');
    
    consoleLogSpy.mockRestore();
  });
});
