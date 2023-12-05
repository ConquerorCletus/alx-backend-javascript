export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  return getListStudents.filter(((student) => student.location === city)).map(
    (student) => {
      const item2 = newGrades.find((student2) => student.id === student2.studentId);
      return { ...student, grade: item2 ? item2.grade : 'N/A' };
    },
  );
}
