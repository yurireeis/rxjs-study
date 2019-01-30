import { of, interval, merge, from, concat, fromEvent } from 'rxjs';
import { mergeMap  } from 'rxjs/operators';

// using mergeMap to use the result of a promise in another promise
of('hello')
  .pipe(
    mergeMap(v => of(`${v} world`))
  )
  .subscribe(value => console.log(value));

// a better example using a promise
const myPromise = function (v: any) {
  return new Promise((resolve, reject) => {
    resolve(`${v} world from promise`);
  })
}

of('hello')
  .pipe(
    mergeMap(v => myPromise(v))
  )
  .subscribe(value => console.log(value));


  const button = $('#button');

  fromEvent(button, 'click')
    .subscribe(value => { console.log(value); });
