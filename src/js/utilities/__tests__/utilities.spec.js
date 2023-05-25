// eslint-disable-next-line spaced-comment
/// <reference types="Jest" /> 

import { getOffset, getPokemonTypes, capitalize, uncapitalize } from '../utilities.js';

describe('utilities', () => {

  describe('getOffset', () => {

    test('should get offset from url', () => {
      expect(getOffset('http://asd.com?offset=1&limit=1'))
        .toEqual('1');
    });

    test('should get the default url offset', () => {
      expect(getOffset('http://asd.com/'))
        .toEqual(undefined);
    });

    test('should get offset on any position', () => {
      expect(getOffset('http://asd.com/?limit=2&offset=2'))
        .toEqual('2');
    });
  });
});
