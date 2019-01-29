import * as $ from 'jquery';
import { range, from, of } from 'rxjs';
import { filter, debounceTime, distinct, distinctUntilChanged } from 'rxjs/operators';

function getUserByUsername(username: string): Promise<any> {
  return $.ajax({ url: `https://api.github.com/users/${username}`, dataType: 'jsonp' })
}

const products = [
  {
    sku: '001',
    name: 'red t-shirt',
    price: 4.99
  },
  {
    sku: '002',
    name: 'blue t-shirt',
    price: 30.35
  },
  {
    sku: '003',
    name: 'black t-shirt',
    price: 40.99
  },
  {
    sku: '004',
    name: 'white t-shirt',
    price: 10.35
  }
];

// filtering only odd values
range(0, 10)
  .pipe(filter(x => x % 2 === 0))
  .subscribe(
    value => console.log(value),
    err => console.log(err),
    () => console.log('completed!')
  );

from(products)
  .pipe(filter(value => value.price > 20.00))
  .subscribe(products => { console.log(products); });

// filtering w/ debounce time (i.e: don't hit api several times when is typing)
range(0, 10)
  .pipe(
    filter(x => x % 2 === 0),
    debounceTime(2000)
  )
  .subscribe(
    value => console.log(value),
    err => console.log(err),
    () => console.log('completed!')
  );

// distinct validates if has repeated values (and don't propagates if so)
of(23, 23, 55, 43, 67, 55, 44, 23, 52)
  .pipe(distinct())
  .subscribe(value => console.log(value));

// distinct validates if has repeated values (and propagates if is not in a row)
of(23, 23, 55, 43, 67, 55, 44, 23, 52)
.pipe(distinctUntilChanged())
.subscribe(value => console.log(value));