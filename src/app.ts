// import * as $ from 'jquery';
import { Observable, Observer } from 'rxjs';


// hot & cold observable
// cold observable = passive observable (created w/ subscription)
// cold observable generates different values

// hot observable = always running even outside of that observable (i.e: mousemove events)
// hot observable is only set off once

// publish operator = also known as connection operator
const source$ = Observable.create((observer: Observer<Date>) => {
  observer.next(new Date());
  observer.complete();
});

// so comes the connect function that turns that subscribe in a hot observable (emit always the same value)
source$.connect();

source$.subscribe(
  (value: Date) => console.log(value),
  (err: Error) => console.log(err),
  () => console.log('completed')
);

setTimeout(() => {
  source$.subscribe(
    (value: Date) => console.log(value),
    (err: Error) => console.log(err),
    () => console.log('completed')
  );
}, 2000);
