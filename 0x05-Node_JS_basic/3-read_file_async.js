const { readFile } = require('fs');

function countStudents(filepath) {
  const students = {};
  const header = {};
  let length = 0;

  return new Promise((resolve, reject) => {
    readFile(filepath, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const datum = data.toString().split('\n');
        for (let i = 0; i < datum.length; i += 1) {
          if (datum[i]) {
            length += 1;
            const field = datum[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(header, field[3])) {
              header[field[3]] += 1;
            } else {
              header[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        console.log(`Number of students: ${l}`);
        for (const [key, value] of Object.entries(header)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
