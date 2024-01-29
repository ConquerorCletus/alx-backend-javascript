const http = require('http');
const { readFile } = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(filepath) {
  const students = {};
  const header = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(filepath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const datum = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, datum[3])) {
              students[datum[3]].push(datum[0]);
            } else {
              students[datum[3]] = [datum[0]];
            }
            if (Object.prototype.hasOwnProperty.call(header, datum[3])) {
              header[datum[3]] += 1;
            } else {
              header[datum[3]] = 1;
            }
          }
        }
        const l = length - 1;
        output += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(header)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      response.end(outString);
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;
