// 1. შექმენით რიცხვების მასივი და თითოეული რიცხვისთვის foreach ციკლით დაბეჭდეთ მათი კვადრატი
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => {
//   console.log(num * num);
// });

// 2. შექმენით ხილის სახელების მასივი და foreach ციკლით დაბეჭდეთ თითოეული ხილის სახელი
// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'mango'];
// fruits.forEach(fruit => {
//   console.log(fruit);
// });

// 3. მასივში არსებული რიცხვების ჯამი გამოიანგარიშეთ foreach ციკლით
// let sum = 0;
// numbers.forEach(num => {
//   sum += num;
// });
// console.log('ჯამი:', sum);

// 4. შექმენით მასივი სტუდენტების სახელებით და foreach ციკლით დაბეჭდეთ, რომელი სტუდენტი რომელ ადგილზეა
// let students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// students.forEach((student, index) => {
//   console.log(`${student} არის ${index + 1}-ე ადგილზე.`);
// });

// 5. შექმენით მასივი და მასში ჩაწერეთ მთელი რიცხვები. foreach ციკლით მხოლოდ ლუწი რიცხვები დაბეჭდეთ
// let nums = [1, 2, 3, 4, 5, 6];
// nums.forEach(num => {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

// 6. შექმენით რიცხვების მასივი და map მეთოდის საშუალებით მიიღეთ მათი კვადრატების ახალი მასივი
// let squares = numbers.map(num => num * num);
// console.log('კვადრატები:', squares);

// 7. მასივში ჩაწერეთ სახელები და map მეთოდის გამოყენებით ყოველი სახელი ყველა ასოს პატარა ასოზე გადააკეთეთ
// let names = ['ALICE', 'BOB', 'CHARLIE'];
// let lowerCaseNames = names.map(name => name.toLowerCase());
// console.log('პატარა ასოები:', lowerCaseNames);

// 8. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, სადაც ყველა რიცხვი 10-ზე გაიზარდა
// let incrementedNumbers = numbers.map(num => num + 10);
// console.log('10-ით გაზრდილი რიცხვები:', incrementedNumbers);

// 9. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის სტუდენტის სახელი და ქულა. map მეთოდით მიიღეთ ახალი მასივი მხოლოდ სტუდენტების სახელებით
// let studentsWithScores = [
//   { name: 'Alice', score: 85 },
//   { name: 'Bob', score: 92 },
//   { name: 'Charlie', score: 88 }
// ];
// let studentNames = studentsWithScores.map(student => student.name);
// console.log('სტუდენტების სახელები:', studentNames);

// 10. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, რომელშიც ყველა ლუწი რიცხვი გაორმაგებულია, ხოლო კენტი არ შეცვლილა
// let modifiedNumbers = numbers.map(num => num % 2 === 0 ? num * 2 : num);
// console.log('გაორმაგებული ლუწები:', modifiedNumbers);

// 11. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ მხოლოდ ლუწი რიცხვების მასივი
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log('ლუწი რიცხვები:', evenNumbers);

// 12. შექმენით სახელების მასივი და filter მეთოდით მხოლოდ ის სახელები ამოიღეთ, რომლებიც 5-ზე მეტ სიმბოლოს შეიცავს
// let longNames = names.filter(name => name.length > 5);
// console.log('გრძელი სახელები:', longNames);

// 13. შექმენით რიცხვების მასივი და filter მეთოდით მხოლოდ დადებითი რიცხვები მიიღეთ
// let positiveNumbers = [-5, 3, -2, 7, 10, -1].filter(num => num > 0);
// console.log('დადებითი რიცხვები:', positiveNumbers);

// 14. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის პროდუქტების სახელები და ფასები. filter მეთოდით მიიღეთ მხოლოდ ის პროდუქტები, რომელთა ფასი 100-ზე მეტია
// let products = [
//   { name: 'Laptop', price: 1200 },
//   { name: 'Phone', price: 800 },
//   { name: 'Headphones', price: 150 }
// ];
// let expensiveProducts = products.filter(product => product.price > 100);
// console.log('ვინც 100-ზე მეტი ფასი აქვს:', expensiveProducts);

// 15. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ ყველა რიცხვი, რომელიც 50-ს აღემატება
// let greaterThanFifty = [30, 60, 90, 20, 45, 55].filter(num => num > 50);
// console.log('50-ზე მეტი რიცხვები:', greaterThanFifty);

// 16. დაწერეთ კოდი, რომელიც while ციკლით 1-დან 10-მდე რიცხვებს დაბეჭდავს
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// 17. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში არსებული რიცხვების ჯამს გამოიანგარიშებს
// let numsForSum = [1, 2, 3, 4, 5];
// let sumWhile = 0;
// let j = 0;
// while (j < numsForSum.length) {
//   sumWhile += numsForSum[j];
//   j++;
// }
// console.log('ჯამი while-ით:', sumWhile);

// // 18. შექმენით ცვლადი რიცხვით 1 და while ციკლით იმატეთ 2-ით, სანამ რიცხვი არ მიაღწევს 20-ს
// let num = 1;
// while (num <= 20) {
//   console.log(num);
//   num += 2;
// }

// 19. დაწერეთ პროგრამა, რომელიც while ციკლით რიცხვებს დაბეჭდავს 20-დან 10-მდე დაღმავალი თანმიმდევრობით
// let k = 20;
// while (k >= 10) {
//   console.log(k);
//   k--;
// }

// 20. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში ყველა ობიექტს გამოიკვლევს და თითოეული მათგანის სახელს დაბეჭდავს
// let people = [
//   { name: 'John', age: 30 },
//   { name: 'Jane', age: 25 },
//   { name: 'Doe', age: 40 }
// ];
// let l = 0;
// while (l < people.length) {
//   console.log(people[l].name);
//   l++;
// }
