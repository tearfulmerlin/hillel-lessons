/** ********* CLOSURE *********** */

// let globalCount = 0;
// const scope = 'global';

// if (true) {
//   const scope = 'global';

//   console.log({ scope });
// }

// const i = 5;

// function forF() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }

// forF();

// console.log(i + 5);

// function authenticate(email, pass) {
//   const userData = {
//     email,
//     pass,
//     token: `token${Math.random(1) * 1e5}`,
//   };
//   const scope = 'outer';
//   let showRequestCount = 0;
//   globalCount += 1;

//   console.log(`authenticate scope: ${scope}`);

//   return function(status) {
//     const scope = 'inner';

//     console.log(`showCurrentUser scope: ${scope}`);

//     globalCount += 1;
//     showRequestCount += 1;
// eslint-disable-next-line max-len
//     return (`email: ${userData.email}, \ntoken: ${userData.token}, \nrequests: ${showRequestCount}, \n${status}`);
//   };
// }

// console.log(scope);

// const myFunction = function () {
//   return 'message';
// };
// const showTestUser = authenticate('test@mail.com', 'secret');
// const showNewUser = authenticate('new@mail.com', 'secretnew');
// const showOtherUser = authenticate('other@mail.com', 'othersecter');

// showTestUser();
// showTestUser();
// console.log(showTestUser());
// console.log(showTestUser('active'));

// showNewUser();
// showNewUser();
// showNewUser();
// showNewUser();
// console.log(showNewUser('inactive'));

// globalCount += 1;
// console.log(globalCount);

// console.warn(`globalCount: ${globalCount}`);

// function createSite(domain) {
//   const userDomain = domain;

//   return function makePage(url) {
//     return `https://${userDomain}${url}`;
//   };
// }

// const makeGooglePage = createSite('google.com'); // { let userDomain = 'google.com' }
// const googleSearch = makeGooglePage('/search');

// const makeMetaPage = createSite('meta.ua'); // { let userDomain = 'meta.ua' }
// const metaInbox = makeMetaPage('/inbox');

// console.log(googleSearch);

// console.log(metaInbox);

// function createServer(domain) {
//   const userDomain = domain;

//   return function () {
//     return `http://${userDomain}/api`;
//   };
// }

// const getAwsApiUrl = createServer('amazon.com');
// aws = {
//   domain: 'amazon.com',
//   ip: '192.168.0.0',
// };

// console.log(getAwsApiUrl());

// const module1 = (function (status) {
//   const user = {
//     name: 'John',
//     lastName: 'Doe',
//     age: 25,
//   };

//   if (status === 'active') {
//     user.isActive = true;
//   }

//   return function () {
//     return `${user.name} ${user.lastName} ${user.isActive ? 'online' : 'offline'}`;
//   };
// });

// console.log(module1('active')());




/** ********* IIFE (Immediately Invoked Function Expression) *********** */
// (function (w, s, l) {
//   const counter = 0;
//   getFactorial(12);
// })(window, '12354', new Date());




/** ********* RECURSION *********** */
// getFactorial(10);

// function getFactorial(number) { // !5 = 1 * 2 * 3 * 4 * 5
//   if (number > 1) {
//     return number * getFactorial(number - 1); // 5 * getFactorial(5 - 1)
//     // 4 * getFactorial(4 - 1)
//     // 3 * getFactorial(3 - 1)
//     // 2 * getFactorial(2 - 1)
//     // 1
//     // return number;
//   }
//   return number;
//   // return number * getFactorial(number); // 5 * getFactorial(5 - 1)
// }

// const factorial = getFactorial(5);

// console.log(factorial);

// const bank = {
//   name: 'privat',
//   employees: [
//     {
//       role: 'boss',
//       employees: [
//         {
//           role: 'manager',
//           employees: [
//             {
//               role: 'consultant',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       role: 'superBoss',
//       employees: [],
//     },
//   ],
// };

// const allEmployees = [];
// function getAllEmployees(org) {
//   if (Array.isArray(org.employees)) {
//     for (let i = 0; i < org.employees.length; i++) {
//       allEmployees.push(org.employees[i].role);
//       getAllEmployees(org.employees[i]);
//     }
//   }
// }

// getAllEmployees(bank);
// console.log(allEmployees);




/** ********* Function early exit *********** */
// const user = {
//   name: 'Jack',
//   status: 'online',
// };

// function checkStatus(person) {
//   if (person.status === 'online') {
//     return 'user is active';
//   }

//   return 'user is not active';
// }

// console.log(checkStatus(user));
