let name = "xin chao tat ca moi nguoi"
document.getElementById("name").innerHTML = text.lenght;


// let ten = "toi \"la\" hsg"
// document.getElementById("ten").innerHTML = text; 

let chuoi_nguoi_dung = prompt("Nhập một chuỗi:");
console.log("Chuỗi in hoa:", chuoi_nguoi_dung.toUpperCase());

let ten = prompt("Nhập tên của bạn:");
let tuoi = prompt("Nhập tuổi của bạn:");
console.log(`Tên bạn là ${ten} và bạn ${tuoi} tuổi.`);

let so_ky_tu = chuoi_nguoi_dung.length;
console.log("Số ký tự trong câu của bạn là:", so_ky_tu);