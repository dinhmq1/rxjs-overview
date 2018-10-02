//----------- Register event listener using RxJS--------------//

// Conventional way of registering event listeners
//var button = document.querySelector('button');
//button.addEventListener('click', () => console.log('Clicked!'));

// Using RxJS to create an observable
// var button = document.querySelector('button');
//Rx.Observable.fromEvent(button, 'click').subscribe(() => console.log('Clicked, via rxjs observable!!!'));

//----------Purity-using rxjs to produce pure functions-------//

// Normally you would create an impure function
//var count = 0;
//var button = document.querySelector('button');
//button.addEventListener('click', () => console.log(`Clicked ${++count} times`));

// Using RxJS to isolate the state

// var button = document.querySelector('button');
// Rx.Observable.fromEvent(button, 'click')
//   .scan(count => count + 1, 0)
//   .subscribe(count => console.log(`Clicked ${count} times via RxJS!`));

/*
The 'scan' operator works just like 'reduce' for arrays.
It takes a value which is exposed to a callback. The returned value
of the callback will then become the next value exposed the next time
the callback runs.
*/

//---------- Flow through your observables -------//

// This is how you would allow at most one click per second, with plain JavaScript

// var count = 0;
// var rate = 1000;
// var lastClick = Date.now() - rate;
// var button = document.querySelector('button');
// button.addEventListener('click', () => {
// 	if (Date.now() - lastClick >= rate) {
// 		console.log(`Clicked ${++count} times`);
// 		lastClick = Date.now();
// 	} else {
// 		console.log('Wait 1 second to click again...');
// 	}
// });

// via RxJS

// var button = document.querySelector('button');
// Rx.Observable.fromEvent(button, 'click')
//   .throttleTime(1000)
//   .scan(count => count + 1, 0)
//   .subscribe(count => console.log(`Clicked ${count} times`));

/*
Other flow control operators are filter, delay, debounceTime,
take, takeUntil, distinct, distinctUntilChanged etc.
*/