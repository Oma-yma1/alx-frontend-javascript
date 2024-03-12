export default function updateUniqueItems(elt) {
  if (!(elt instanceof Map)) throw new Error('Cannot process');
  elt.forEach((value, key) => {
    if (value === 1) {
      elt.set(key, 100);
    }
  });
}
