import { isEmptyString } from '../helpers';

test('should return true for empty string', () => {
  expect(isEmptyString('')).toEqual(true);
  expect(isEmptyString('   ')).toEqual(true);
});

test('should return false for non-empty string', () => {
  expect(isEmptyString('non empty')).toEqual(false);
});

test('should return true for null or undefined', () => {
  expect(isEmptyString(null)).toEqual(true);
  expect(isEmptyString(undefined)).toEqual(true);
});
