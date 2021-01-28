export function findDomElement(elememt) {
  if (elememt.id) return elememt;
  return findDomElement(elememt["parentNode"]);
}
