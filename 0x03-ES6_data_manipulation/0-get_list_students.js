export default function getListStudents() {
  const array1 = [{ id: 1, firstName: 'Guillaume', location: 'San Francisco' }];
  const array2 = [{ id: 2, firstName: 'James', location: 'Columbia' }];
  const array3 = [{ id: 5, firstName: 'Serena', location: 'San Francisco' }];
  const array4 = array1.concat(array2, array3);
  return array4;
}
