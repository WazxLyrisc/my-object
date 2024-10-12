function luuThongTin() {
    const ten = document.getElementById("ten").value;
    const tuoi = document.getElementById("tuoi").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const gender = document.getElementById("gender").value;


    if (ten && tuoi && email && date && gender) {
        const user = {
            ten: ten,
            tuoi: tuoi,
            email: email,
            date: date,
            gender: gender
        };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Đăng ký thành công!");

        window.location.href = "show.html";
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
}