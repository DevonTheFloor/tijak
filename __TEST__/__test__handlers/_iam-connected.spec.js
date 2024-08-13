import { describe, it, expect, vi } from 'vitest';
import { iAmConnected } from '../../handlers/handle-elements-page';

describe('iAmConnected', () => {
  it('should return true when token is present in localStorage', () => {
    // Mock localStorage.getItem to return a token
    const mockGetItem = vi.spyOn(localStorage, 'getItem').mockReturnValue('dummyToken');
    
    // Mock console.log
    const mockLog = vi.spyOn(console, 'log');
    
    const result = iAmConnected();
    
    expect(result).toBe(true);
    expect(mockLog).toHaveBeenCalledWith('TOKEN EXISTE');
    
    // Restore the original implementations
    mockGetItem.mockRestore();
    mockLog.mockRestore();
  });

  it('should return false when token is not present in localStorage', () => {
    // Mock localStorage.getItem to return null
    const mockGetItem = vi.spyOn(localStorage, 'getItem').mockReturnValue(null);
    
    // Mock console.log (although it won't be called in this case)
    const mockLog = vi.spyOn(console, 'log');
    
    const result = iAmConnected();
    
    expect(result).toBe(false);
    expect(mockLog).not.toHaveBeenCalled();
    
    // Restore the original implementations
    mockGetItem.mockRestore();
    mockLog.mockRestore();
  });
});
