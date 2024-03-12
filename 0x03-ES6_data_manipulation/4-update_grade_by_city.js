export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((elt) => elt.location === city)
    .map((elt) => {
      const grade = newGrades.find((g) => g.studentId === elt.id);
      return { ...elt, grade: (grade && grade.grade) || 'N/A' };
    });
}
