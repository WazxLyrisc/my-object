// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let i=0;
// do {
//     console.log(i);
//     i++;
// } while (i<=5);

// let n=10;
// for (let i=n; i >= 0; i--){
//     console.log(i)
// }

// let n=20 
// let sum=0
// for (let i = 1; i <= n; i++){
//     if (i%2==0) {
//         sum += i
//     }
// }
// console.log(sum)

// while (n >= 1){
//     if (n % 2 == 0) {
//         sum += i
//     }
//     n--;
// }

// let production = 1
// for (let i = 1; i <= 15; i++){
//     if (i % 2 != 0) {
//         production *= i;
//     }
// }
// console.log(production);

numbers  = [1,2,3,4,5,6,7,8,9,10]
        //  0 1 2 3 4 5 6 7 8 9
// console.log(numbers[5])
// numbers[9] = 100
// console.log(numbers[9])
let sum = 0;
for (let i = 0; i < length(numbers); i++){
    // console.log(numbers[i]);
    sum = numbers[i];
}
console.log(sum);

numbers.length() //trả về độ dài của mảng
numbers.push() // thêm các phần tử mới vào trong màng
numbers.pop() // xóa phần tử cuối cùng của mảng
numbers.shift() //xóa phần tử đầu tiên của mảng