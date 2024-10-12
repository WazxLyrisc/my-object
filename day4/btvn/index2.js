let users = [
    { id: 1, ten: "Bruce Wayne" },
    { id: 2, ten: "Diana" },
    { id: 3, ten: "Cyborg" }
]; 

function themUser(id, ten) {
    users.push({ id: id, ten: ten });
    console.log("User mới đã được thêm:", users);
}
themUser(4, "Alice");

function capNhatTenUser(id, tenMoi) {
    let user = users.find(user => user.id === id);
    if (user) {
        user.ten = tenMoi;
        console.log("Tên của user đã được cập nhật:", users);
    } else {
        console.log("Không tìm thấy user với id:", id);
    }
}
capNhatTenUser(2, "Janet");

function xoaUser(id) {
    users = users.filter(user => user.id !== id);
    console.log("Danh sách user sau khi xóa:", users);
}
xoaUser(3);

function themDiaChi(id, tinh, thanhPho) {
    let user = users.find(user => user.id === id);
    if (user) {
        user.diaChi = { tinh: tinh, thanhPho: thanhPho };
        console.log("Đã thêm địa chỉ cho user:", user);
    } else {
        console.log("Không tìm thấy user với id:", id);
    }
}
themDiaChi(1, "Ha Noi", "Ba Dinh");

// Thêm thuộc tính email
function themEmail(id, email) {
    let user = users.find(user => user.id === id);
    if (user) {
        user.email = email;
        console.log("Đã thêm email cho user:", user);
    } else {
        console.log("Không tìm thấy user với id:", id);
    }
}
themEmail(1, "john@example.com");

function greet(name) {
    console.log(`Xin chào, ${name}!`);
}
greet("John");


function sum(a, b) {
    return a + b;
}
console.log("Tổng của 3 và 5 là:", sum(3, 5));

