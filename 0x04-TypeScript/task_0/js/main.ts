interface Student{
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}

// creating 2 students
const student1: Student = {
    firstName: 'Chibuike',
    lastName: 'Nwafor',
    age: 22,
    location: 'Lagos',
};

const student2: Student = {
    firstName: 'Anthony',
    lastName: 'Obodokwe',
    age: 24,
    location: 'Abuja',
};
// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Rendering a table using Vanilla JavaScript
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
  
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

table.appendChild(tableBody);
document.body.appendChild(table);