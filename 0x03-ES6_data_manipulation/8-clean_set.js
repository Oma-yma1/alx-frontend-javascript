export default function cleanSet(set, startString) {
  let nm;
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  nm = Array.from(set).filter((word) => typeof word === 'string' && word.startsWith(startString));
  nm = nm.map((word) => word.slice(startString.length));
  return nm.join('-');
}
