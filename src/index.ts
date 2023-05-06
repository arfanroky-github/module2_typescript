interface Person {
  firstName: string;

  lastName: string;
}

function fullName<T extends Person>(person: T): string {
  return `${person.firstName} ${person.lastName}`;
}


console.log(typeof fullName({
    firstName:'arfan',
    lastName: 'roky'
}));
