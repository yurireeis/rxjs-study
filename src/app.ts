import * as $ from 'jquery';
import { fromEvent } from 'rxjs';

const input : JQuery<HTMLElement> = $('#input');
const button: JQuery<HTMLElement> = $('#button');


// dollar sign means stream variable
const buttomStream$ = fromEvent(button, 'click');

// above you can see the three emits from a stream
// here we are subscribing to this stream
// note that fromEvent events never falls in complete emit (third function)
buttomStream$.subscribe(
  value => console.log(value),
  err => console.log(err),
  () => console.log('complete')
);

const inputStream$ = fromEvent(input, 'keyup');

inputStream$.subscribe(value => console.log(value));

const mouseMove$ = fromEvent(document, 'mousemove').subscribe(value => {
  console.log(value);
});
