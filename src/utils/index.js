export function findDomElement(element) {
  if (!element) return;
  if (element?.id && Number.isInteger(Number(element.id))) return element;
  return findDomElement(element["parentNode"]);
}
