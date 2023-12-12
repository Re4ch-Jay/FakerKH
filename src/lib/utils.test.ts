import { describe, expect, it } from 'vitest';

import { getRandomElement } from './utils';

describe(getRandomElement, () => {
  it('returns a random element from the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const randomElement = getRandomElement(arr);
    expect(arr).toContain(randomElement);
  });

  it('returns undefined for an empty array', () => {
    const arr: number[] = [];
    const randomElement = getRandomElement(arr);
    expect(randomElement).toBeUndefined();
  });
});
