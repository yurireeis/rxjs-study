import { of, merge, interval, timer, from, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { map, tap, defaultIfEmpty, every, mapTo, delay, delayWhen, timeInterval } from 'rxjs/operators';

function getSubscriber(_type: string) {
  return {
    next (value: any) { console.log(`${_type} completed successfully: ${value}`); },
    error (err: any) { console.log(err); },
    complete () { console.log(`${_type} completed`); }
  };
}

// subject is a bridge between observer and observable
const subject$ = new Subject();

subject$.subscribe(getSubscriber('subject'));

subject$.next('hello');
subject$.next('world');

subject$.complete();

const interval$ = interval(1000);
const intervalSubject$ = new Subject();

interval$.subscribe(intervalSubject$);

intervalSubject$.subscribe();

// behaviour subject: starts with a initial value, and continous to emmit values by the source obsevable
const behaviourSubject$ = new BehaviorSubject(45);

behaviourSubject$.subscribe(getSubscriber('behaviour subject'));
subject$.next(55);
subject$.complete();


// replaySubject: same behaviour of behaviourSubject, but don't repeat values
const replaySubject$ = new ReplaySubject(3);
replaySubject$.next(1);
replaySubject$.next(2);
replaySubject$.next(3);
replaySubject$.next(4);
replaySubject$.subscribe(getSubscriber('replay subject'));