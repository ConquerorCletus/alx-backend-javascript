export default function getStudentIdsSum(getListStudents) {
  const zero = 0;
  const sumOfStudentsId = getListStudents.reduce((accumulator, currentvalue) => accumulator + currentvalue.id, zero);
  return sumOfStudentsId;
}
