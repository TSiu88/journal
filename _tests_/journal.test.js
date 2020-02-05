import {Entry} from './../src/journal.js';
import { exportAllDeclaration } from '@babel/types';

describe('Split words into array',() => {

  test('should take words and add into array', () => {
    var entry = new Entry ("title", "one two three");
    expect(entry.bodySplit()).toEqual(["one", "two","three"]);
  });

});