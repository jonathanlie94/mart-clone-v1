export function isEmptyString(str) {
  return (!str || /^\s*$/.test(str));
}
