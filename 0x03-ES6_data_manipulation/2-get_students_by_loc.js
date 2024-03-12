export default function getStudentsByLocation(array, city) {
  if (typeof array !== 'object') {
    return [];
  }
  return array.filter((obj) => obj.location === city);
}
