//BT1


// let c = [2,34,50,39,74,93,102,48,201,199,1337]
// let sochan = 0
// let sole = 0
// let nguong = 15
// let solonhonnguong = 0
// for(let i = 0; i <= c.length; i++){
//     let x = c[i];
//     if(i%2==0){
//         sochan += x;
//     }
//     else{
//         sole += x;
//     }
//     if(x > nguong){
//         solonhonnguong++;
//     }
// }
// console.log('Tổng các số chẵn là:', sochan)
// console.log('Tổng các số lẻ:', sole)
// console.log('số lượng các số lớn hơn',nguong,'là',solonhonnguong);



//BT2
let n = 5
for(let i = 0; i <= n; i++){
    let line = '';
    for(let a = 1; a<= i; a++) {
        i += a;
    }
}
console.log(dong);


let chuoi = abc;
let chuoidoixung = chuoi + chuoi.split('').reverse('').slice(1).join('');
console.log(chuoidoixung);