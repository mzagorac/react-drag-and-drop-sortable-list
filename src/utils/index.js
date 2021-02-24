export function findDomElement(element) {
  if (!element) return;
  if (element?.id && Number.isInteger(Number(element.id))) return element;
  return findDomElement(element["parentNode"]);
}

export function reorderArrayElements(arr, from, to) {
  var arrToMutate = [...arr];
  var removed = arrToMutate.splice(from, 1)[0];
  arrToMutate.splice(to, 0, removed);
  return arrToMutate;
}
