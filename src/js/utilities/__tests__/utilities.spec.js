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

  describe('getPokemonTypes', () => {

    const pokemonTypes = [
      {
        "slot": 1,
        "type": {
          "name": "grass",
          "url": "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "poison",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      },
      {
        "slot": 3,
        "type": {
          "name": "ice",
          "url": "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ]

    test('should get all types', () => {
      expect(getPokemonTypes(pokemonTypes))
        .toEqual('GRASS POISON ICE ');
    });


    test('should return default type', () => {
      expect(getPokemonTypes())
        .toEqual('');
    });
  });

  describe('capitalize', () => {

    test('should return a capitalized string', () => {
      expect(capitalize('abcdefg'))
        .toEqual('Abcdefg');
    });

    test('should return the same parameter when it is given a number', () => {
      expect(capitalize(101))
        .toEqual(101);
    });

    test('should return the same parameter when it is given a string with no letters', () => {
      expect(capitalize('$%&/'))
      .toEqual('$%&/');

      expect(capitalize('?¡+*'))
      .toEqual('?¡+*');
    });
  });

  describe('uncapitalize', () => {

    test('should return a uncapitalized string', () => {
      expect(uncapitalize('Abcdefg'))
        .toEqual('abcdefg');
    });

    test('should return the same parameter when it is given a number', () => {
      expect(uncapitalize(101))
        .toEqual(101);
    });

    test('should return the same parameter when it is given a string with no letters', () => {
      expect(uncapitalize('$%&/'))
      .toEqual('$%&/');

      expect(uncapitalize('?¡+*'))
      .toEqual('?¡+*');
    });
  });
});