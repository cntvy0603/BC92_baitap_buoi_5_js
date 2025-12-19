let diemDoiTuong = 0;
let diemKhuVuc = 0;
let result = 0;

function khuVucUuTien(k_vuc) {
  if (k_vuc === "A") {
    return 2;
  } else if (k_vuc === "B") {
    return 1;
  } else if (k_vuc === "C") {
    return 0.5;
  }
}

function doiTuongUuTien(d_tuong) {
  if (d_tuong === 1) {
    return 2.5;
  } else if (d_tuong === 2) {
    return 1.5;
  } else if (d_tuong === 3) {
    return 1;
  }
}

function ketQua (t_diem, diem_chuan){
  if (t_diem < diem_chuan) {
    return `Rớt`;
  } else {
    return `Đậu`;
  }
}

function tinhTongDiem() {
  const diemChuan = document.getElementById("diemChuan").value * 1;
  const diem1 = document.getElementById("diem1").value * 1;
  const diem2 = document.getElementById("diem2").value * 1;
  const diem3 = document.getElementById("diem3").value * 1;
  const khuVuc = document.getElementById("khuVuc").value;
  const doiTuong = document.getElementById("doiTuong").value * 1;

  if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
    return `Rớt`;
  }
  let diemKhuVuc = khuVucUuTien(khuVuc);
  let diemDoiTuong = doiTuongUuTien(doiTuong);

  let tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;

  let result = ketQua(tongDiem, diemChuan);

  const pKetQua = document.getElementById("pKetQua");
  pKetQua.innerHTML =
    " Kết quả: " + result + " và tổng số điểm đạt được: " + tongDiem + " điểm ";
}
