const user = JSON.parse(localStorage.getItem("user"));
if (user) {
    const userInfo = `
        <strong>Tên:</strong> ${user.ten} <br>
        <strong>Tuổi:</strong> ${user.tuoi} <br>
        <strong>Email:</strong> ${user.email} <br>
        <strong>Thời gian:</strong> ${user.date} <br>
        <strong>Giới tính:</strong> ${user.gender}
    `;
    document.getElementById("user-info").innerHTML = userInfo;
} else {
    document.getElementById("user-info").textContent = "Không có thông tin người dùng!";
}