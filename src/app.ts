import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { first, last, single, find, findIndex, take, skip, skipWhile, takeWhile } from 'rxjs/operators';

function getUserByUsername(username: string): Promise<any> {
  return $.ajax({ url: `https://api.github.com/users/${username}`, dataType: 'jsonp' })
}

const source$ = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next('hello');
  observer.next('world');
  observer.complete();
});


// get only the first value
source$
  .pipe(first())
  .subscribe(value => console.log(value));

// get only the last value
source$
  .pipe(last())
  .subscribe(value => console.log(value));

// get a single value (raise an error if has multiple value)
source$
.pipe(single())
.subscribe(
  value => console.log(value),
  err => console.log('error: has multiple values!')
);

// emits only the first value emitted by the source observable that meets some condition
source$
.pipe(find(value => value === 1))
.subscribe(
  value => console.log(value),
  err => console.log('error: has multiple values!')
);

// find by index
source$
.pipe(findIndex(i => i === 0))
.subscribe(
  value => console.log(value),
  err => console.log('error: has multiple values!')
);

// find by defined limit (in this case is two)
source$
.pipe(take(2))
.subscribe(
  value => console.log(value),
  err => console.log('error: has multiple values!')
);

// start by defined offset (in this case is two)
source$
.pipe(skip(2))
.subscribe(
  value => console.log(value),
  err => console.log('error: has multiple values!')
);

// skip value by defined condition
source$
.pipe(skipWhile(value => Boolean(value instanceof String)))
.subscribe(
  value => console.log(value),
  err => console.log('error: has multiple values!')
);

// take value by defined condition
source$
.pipe(takeWhile(value => Boolean(value instanceof Number)))
.subscribe(
  value => console.log(value),
  err => console.log('error: has multiple values!')
);
