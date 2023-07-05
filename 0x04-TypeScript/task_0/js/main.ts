export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const S1: Student = {
  firstName: "Eyob",
  lastName: "Dagne",
  age: 30,
  location: "Addis", 
};
const S2: Student = {
  firstName:" Abebe",
  lastName: "Kebede",
  age: 40,
  location: "Addis",

};

const studentList: array<Student> = [S1, S2,];

export const renderTable = (studentsList: Array<Student>): void =>  {
  // create table tag
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
