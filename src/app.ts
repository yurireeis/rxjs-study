import { Observable, Observer, interval, of, defer } from 'rxjs';

// interval increments for each second
// const source$ = interval(10).subscribe(
//   value => console.log(value),
//   err => console.log(err),
//   () => console.log('completed')
// );

// if you want to limitate the counter, set take() function before subscribe
// the second parameter of interval is the speed of iteration
// const source2$ = of(45, 'Hello World', [1, 2, 3, 4, 5]).subscribe(
//   value => console.log(value),
//   err => console.log(err),
//   () => console.log('completed')
// );

let i = 0;

const source3$ = defer(() => {
  return of(i++);
});

for (let index = 0; index < 3; index++) {
  source3$.subscribe(
    value => console.log(value),
    err => console.log(err),
    () => console.log('completed')
  );
}
