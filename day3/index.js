// arr = [1,2, "three", null, undefined]
// console.log(arr[2]);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//arr.push(true,false); thêm phần tử vào cuối mảng

//arr.splice(0, 0, "Phần tử mới được thêm vào"); thêm phần tử mới vào vị trí bất kì

//arr[2] = "ten"; //cập nhật giá trị mới của phàn tử

//console.log(arr.indexOf(null)); //tìm kiếm phần tử đầu tiên trong mảng
// console.log(arr.indexOf(10));

// C = [16,28,11,28,8,18,21,4,30];
// sum_even_element = 0 
// sum_odd_index = 0
// for(let i = 0; i < C.length; i++){
//     if (C[i] % 2 == 0){
//         sum_even_element += C[i];
//     }
//     if (i % 2 != 0){
//         sum_odd_index += C[i];
//     }
// }
// console.log("Tổng các số chẵn là", sum_even_element)
// console.log("Tổng các số lẻ là", sum_odd_index)

// let person = {
//     name: "John",
//     age: 30,
//     job: "Developer"
// }
// console.log(person.name);
// console.log(person['age']);
// for (key in person){
//     console.log(key);
// }

// person.hometown = "Melbourn";
// person.age=20;
// console.log(person.age);
// console.log(person.hometown);

// if ("name" in person){
//     console.log("Key name có trong object person");
// }

// delete person.hometown;
// console.log(person);

let hocsinh = [
    {ten: "An", tuoi: 15, lop: "10A1"},
    {ten: "Bình", tuoi: 16, lop: "11A2"},
    {ten: "Châu", tuoi: 15, lop: "10A1"}
];

hocsinh.push({ten: "Dũng", tuoi: 17, lop: "10A3"});

for (let i = 0; i < hocsinh.length; i++){
    console.log(`Tên: ${hocsinh[i].ten}; Tuổi: ${hocsinh[i].tuoi}; Lớp: ${hocsinh[i].lop}`);
}

for (let i = 0; i < hocsinh.length; i++){
    if (hocsinh[i].ten == "Bình"){
        hocsinh[i].tuoi = 17;
    }
}