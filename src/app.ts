import { of, merge, interval, timer, from } from 'rxjs';
import { map, tap, defaultIfEmpty, every, mapTo, delay, delayWhen, timeInterval } from 'rxjs/operators';

function getSubscriber(_type: string) {
  return {
    next (value: any) { console.log(`${_type} completed successfully: ${value}`); },
    error (err: any) { console.log(err); },
    complete () { console.log(`${_type} completed`); }
  };
}

// default if empty
const source$ = of();

source$
  .pipe(
    defaultIfEmpty('my default value')
  )
  .subscribe(getSubscriber('defaultIfEmpty'));

// every checks if all values emitted satisfies some condition

const source2$ = of(1, 2, 3);

source2$
  .pipe(
    every(value => value % 2 === 0)
  )
  .subscribe(getSubscriber('every'));

// do simply do something (don't emit values) (now is tap!)

const source3$ = of(1, 2, 3, 4)

source3$.pipe(
  tap(value => console.log('BEFORE MAP: ' + value)),
  map(value => value *2),
  tap(value => console.log('AFTER MAP: ' + value))
).subscribe(getSubscriber('tap/do'));


// delay
const source4$ = of(null);

merge(
  source4$.pipe(
    mapTo('First')
  ),
  source4$.pipe(
    delay(5000),
    mapTo('Second')
  ),
  source4$.pipe(
    mapTo('Third'),
    delay(3000),
  ),
  source4$.pipe(
    mapTo('Fourth'),
    delay(5000),
  )
).subscribe(getSubscriber('delay'));


// delayWhen
const source5$ = interval(1000);


source5$
  .pipe(
    delayWhen(() => timer(5000))
  )
  .subscribe(getSubscriber('delayWhen'));
