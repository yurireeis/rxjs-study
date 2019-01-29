// import * as $ from 'jquery';
import { Observable } from 'rxjs';


// creating observables from scratch
const source$ = new Observable(observer => {
  console.log('creating observable...');
  observer.next('a value');
  observer.next('another value');
  observer.error(new Error('Error: something is wrong'));

  setTimeout(() => {
    observer.next('hello world');
    observer.complete();
  }, 2000);
});

source$.subscribe(
  (value) => { console.log(value); },
  (err) => { console.log(err); },
  () => { console.log('complete'); }
);
