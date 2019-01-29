// import * as $ from 'jquery';
import { from } from 'rxjs';

const nums = [33, 44, 55, 66, 77];
const nums$ = from(nums);


// observable from arrays
nums$.subscribe(
  value => console.log(value),
  err => console.log(err),
  () => console.log('completed')
);


// observable from objects
const users = [
  { name: 'Yuri Reis', email: 'yuri.reis@training.com' },
  { name: 'Reis Yuri', email: 'yuri.reis@training.com' },
  { name: 'Luiz Silva', email: 'yuri.reis@training.com' },
];
const users$ = from(users);

users$.subscribe(
  value => console.log(value),
  err => console.log(err),
  () => console.log('completed')
);


// observable from sets
const powers = new Set(['Fly', 100, 'neutral']);
const powers$ = from(powers);

powers$.subscribe(
  value => console.log(value),
  err => console.log(err),
  () => console.log('completed')
);

// observable from map
const pairOfNumbers = new Map([[1, 2], [3, 4], [5, 6]]);
const pairOfNumbers$ = from(pairOfNumbers);

pairOfNumbers$.subscribe(
  value => console.log(value),
  err => console.log(err),
  () => console.log('completed')
);


// observable from string
const name = 'yuri';
const name$ = from(name);

name$.subscribe(
  value => console.log(value),
  err => console.log(err),
  () => console.log('completed')
);
