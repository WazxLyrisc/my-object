const hoSo = JSON.parse(localStorage.getItem("hoSoCaNhan"));

        if (hoSo) {
            const hoSoInfo = `
                <img src="${hoSo.avatar}" alt="Avatar"><br>
                <strong>Tên:</strong> ${hoSo.ten} <br>
                <strong>Email:</strong> ${hoSo.email} <br>
                <strong>Số điện thoại:</strong> ${hoSo.sdt} <br>
                <strong>Địa chỉ:</strong> ${hoSo.diachi}
            `;
            document.getElementById("hoSo-info").innerHTML = hoSoInfo;
        } else {
            document.getElementById("hoSo-info").textContent = "Không có thông tin hồ sơ!";
        }

        function chinhSua() {
            window.location.href = "index.html";
        }