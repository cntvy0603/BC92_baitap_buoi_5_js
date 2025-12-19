function xuLyLoaiKhachHang() {
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let soKetNoi = document.getElementById("soKetNoi");
  let divKetNoi = document.getElementById("divKetNoi");

  if (loaiKhachHang === "D") {
    divKetNoi.style.display = "block";
    soKetNoi.disabled = false;
  } else {
    divKetNoi.style.display = "none";
    soKetNoi.disabled = true;
    soKetNoi.value = "";
  }
}


function tinhTienCap() {
  let maKhachHang = document.getElementById("maKhachHang").value;
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let soKetNoi = Number(document.getElementById("soKetNoi").value);
  let soKenhCaoCap = Number(document.getElementById("soKenhCaoCap").value);

  let tongTien = 0;

  if (loaiKhachHang === "N") {
    // Nhà dân
    tongTien = 4.5 + 20.5 + soKenhCaoCap * 7.5;
  } else if (loaiKhachHang === "D") {
    // Doanh nghiệp
    let phiDichVuCoBan = 75;

    if (soKetNoi > 10) {
      phiDichVuCoBan = phiDichVuCoBan + (soKetNoi - 10) * 5;
    }

    tongTien = 15 + phiDichVuCoBan + soKenhCaoCap * 50;
  }

  document.getElementById("ketQua").innerHTML =
    "Mã khách hàng: " +
    maKhachHang +
    "<br>Tổng tiền cáp: $" +
    tongTien.toFixed(2);
}




