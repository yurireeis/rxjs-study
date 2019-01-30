import * as $ from 'jquery';
import { fromEvent, from } from 'rxjs';
import { map, distinct, debounceTime, withLatestFrom, tap, mergeMap, catchError } from 'rxjs/operators';

const input = $('#input');
const profile = $('#profile');
const button = $('#button');
profile.hide();

function getGithubUser(username: string): Promise<any> {
  return $.ajax({ url: `https://api.github.com/users/${username}` }).promise();
}

function userNotFound(err: any) {
  console.log('error flow');
  profile.hide();
}

function streamIsCompleted() {
  console.log('complete flow');
}

function userFound(user: any) {
  console.log('success flow', user);
  $('#name').text(user.name);
  $('#login').text(user.login);
  $('#blog').text(user.blog);
  $('#avatar').attr('src',user.avatar_url);
  $('#repos').text(user.public_repos);
  $('#followers').text(user.followers);
  $('#following').text(user.following);
  $('#link').attr('href', user.html_url);
  profile.show();
}

const inputHasSomeTextInputed = fromEvent(input, 'keyup').pipe(
  debounceTime(1000),
  map(event => (event.target as HTMLInputElement).value),
  distinct(),
  mergeMap((text) => getGithubUser(text))
);

inputHasSomeTextInputed.subscribe(userFound, userNotFound, streamIsCompleted);

