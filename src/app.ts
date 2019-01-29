import * as $ from 'jquery';
import { interval, range, from } from 'rxjs';
import { buffer, bufferCount, bufferTime } from 'rxjs/operators';

function getUserByUsername(username: string): Promise<any> {
  return $.ajax({ url: `https://api.github.com/users/${username}`, dataType: 'jsonp' })
}

interval(500).pipe(
  buffer(interval(2000))
).subscribe(
  value => console.log(value),
  err => console.log(err),
  () => console.log('completed!')
);

range(1, 100)
  .pipe(bufferCount(4))
  .subscribe(
    value => console.log(value),
    err => console.log(err),
    () => console.log('completed!')
  );

interval(1000).pipe(
  bufferTime(5000)
)
.subscribe(
  value => console.log(value),
  err => console.log(err),
  () => console.log('completed!')
);

const obs1$ = interval(1000);
const obs2$ = from(document, 'click');

const myBuffer = obs1$.pipe(buffer(obs2$));
const subscribe = myBuffer.subscribe(
  value => console.log(value),
  err => console.log(err),
  () => console.log('completed!')
);
