function luuHoSo() {
    const ten = document.getElementById("ten").value;
    const email = document.getElementById("email").value;
    const sdt = document.getElementById("sdt").value;
    const diachi = document.getElementById("diachi").value;
    const avatar = document.getElementById("avatar").value;

    if (ten && email && sdt && diachi && avatar) {
        const hoSo = {
            ten: ten,
            email: email,
            sdt: sdt,
            diachi: diachi,
            avatar: avatar
        };

        localStorage.setItem("hoSoCaNhan", JSON.stringify(hoSo));
        alert("Hồ sơ đã được lưu thành công!");

        window.location.href = "profile.html";
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
}