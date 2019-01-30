import { of, interval, merge, from, concat } from 'rxjs';
import { map, merge as mergeOperator  } from 'rxjs/operators';

// merging two observables
of([23233])
  .pipe(
    mergeOperator(
      of([213412515])
    )
  )
  .subscribe(([firstValue, secondValue]) => console.log(firstValue, secondValue));

  // call merge directly passing observables as params
  const obs1$ = interval(2000).pipe(map(i => `M1: ${i}`));
  const obs2$ = interval(5000).pipe(map(i => `M2: ${i}`));

  const merged = merge(obs1$, obs2$).subscribe(result => {
    console.log(result);
  });

  // concatenating values
  const obs3$ = from([33, 44, 55]);
  const obs4$ = from([66, 77, 88]);

  concat(obs3$, obs4$).subscribe(
    value => console.log('concat: ' + value)
  );
