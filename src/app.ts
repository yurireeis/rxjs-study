import * as $ from 'jquery';
import { interval, fromEvent, from, defer } from 'rxjs';
import { map } from 'rxjs/operators';

const input = $('#input');
const length = $('#length');
const userInfoButton = $('#user-info-button');

// map applies a function to each item that has been emitted
interval(1000).pipe(map((v) => { v = v * 2 }));

fromEvent(input, 'keyup')
  .pipe(
    map(event => (<HTMLInputElement>event.target).value)
  )
  .subscribe(
    value => {
      console.log(value);
      length.text(value.length);
    }
  );

function getUserByUsername(username: string): Promise<any> {
  return $.ajax({ url: `https://api.github.com/users/${username}`, dataType: 'jsonp' })
}

from(getUserByUsername('yurireeis')).pipe(
  map((obj: any) => obj.data)
).subscribe(
  userInfo => { console.log(userInfo);
});
