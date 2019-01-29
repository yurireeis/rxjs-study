import * as $ from 'jquery';
import { Observable, from } from 'rxjs';


// Promise: an object that can be available now or later on
const myPromise = new Promise((resolve, reject) => {
  console.log('creating promise');
  setTimeout(() => {
    console.log('something new is comming');
    resolve('hello from promise!');
  });
});

myPromise.then(x => {
  console.log(x);
});

from(getGithubUser('yurireeis')).subscribe(
  value => console.log(value),
  err => console.log(err),
  () => console.log('completed!')
);

function getGithubUser(username: string) {
  return $.ajax({
    url: `https://api.github.com/users/${username}`,
    dataType: 'jsonp'
  }).promise();
}
