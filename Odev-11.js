/* 
1. Bir dizideki isimleri uzunluklarına göre sıralamak için sort metodunu kullanın.

Örnek Dizi: ['John', 'Paul', 'George', 'Ringo']

2. Bir dizideki sayıları büyükten küçüğe sıralamak için sort metodunu kullanın.

Örnek Dizi: [3, 1, 4, 1, 5, 9, 2, 6, 5]
*/
//1.
let names = ['John', 'Paul', 'George', 'Ringo'];


names.sort((a, b) => a.length - b.length);

console.log(names);


//2.
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];


numbers.sort((a, b) => b - a);

console.log(numbers);