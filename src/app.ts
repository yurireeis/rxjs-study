import * as $ from 'jquery';
import { fromEvent, from, of, zip, interval, timer, combineLatest } from 'rxjs';
import { map, distinct, debounceTime, withLatestFrom, tap, mergeMap, catchError } from 'rxjs/operators';

const source1$ = of('first');
const source2$ = of('second');
const source3$ = of('third');
const source4$ = of('fourth');

function getSubscriber(_type: string) {
  return {
    next (value: any) { console.log(`success ${_type}`, value); },
    error (err: any) { console.log('error: ', err); },
    complete () { console.log('completed') },
  }
}

// using zip, when the first arbitrary observable ends, everyone stops too
zip(
  source1$,
  source2$,
  source3$,
  source4$
).subscribe(getSubscriber('zip'));

// withLatestFrom works with following rule: when the observable defined in withLatestFrom ends, everyone combined with it ends too
const interval1$ = interval(1000);
const interval2$ = interval(5000);

interval1$
  .pipe(
    withLatestFrom(interval2$)
  ).subscribe(getSubscriber('withLatestFrom'));

const timer1$ = timer(1000, 3);
const timer2$ = timer(1000, 10);
const timer3$ = timer(1000, 5);

combineLatest(
  timer1$,
  timer2$,
  timer3$
).subscribe(([timer1, timer2, timer3]) => {
  console.log(`
    timer one latest: ${timer1},
    timer two latest: ${timer2},
    timer three latest: ${timer3},
  `.toUpperCase());
});
