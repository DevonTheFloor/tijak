import { describe, it, expect, beforeEach, vi } from 'vitest';
import { linkImage } from '../../handlers/handle-elements-page';

describe('linkImage', () => {
  let target;

  beforeEach(() => {
    document.body.innerHTML = '<div id="target"></div>';
    target = document.getElementById('target');
  });

  it('should update the cursor style to pointer', () => {
    linkImage(target, 'https://example.com');
    expect(target.style.cursor).toBe('pointer');
  });

  it('should open a new window with the specified URL when clicked', () => {
    const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => {});

    linkImage(target, 'https://example.com');
    
    // Simuler l'événement de clic
    const clickEvent = new Event('click');
    target.dispatchEvent(clickEvent);

    expect(windowOpenSpy).toHaveBeenCalledWith('https://example.com');
    
    windowOpenSpy.mockRestore();
  });
});
