export default function getStudentIdSum(elt) {
  if (typeof elt !== 'object') {
    return [];
  }
  return elt.reduce((prec, pres) => prec + pres.id, 0);
}
