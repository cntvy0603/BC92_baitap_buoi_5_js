let thueThuNhapCaNhan = 0;
let thue = 0;

function thuNhapChiuThue(thuNhapNam, soNguoiPhuThuoc) {
  return thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
}

function calcThueThuNhapCaNhan (tax){
  // Tính theo biểu tính thuế rút gọn
if (0 < tax && tax <= 60000000) {
    return tax * 0.05;

  } else if (60000000 < tax && tax <= 120000000) {
    return tax * 0.1 - 3000000;

  } else if (120000000 < tax && tax <= 210000000) {
    return tax * 0.15 - 9000000;

  } else if (210000000 < tax && tax <= 384000000) {
    return tax * 0.2 - 21600000;

  } else if (384000000 < tax && tax <= 624000000) {
    return tax * 0.25 - 42600000;

  } else if (624000000 < tax && tax <= 960000000) {
    return tax * 0.3 - 73800000;
    
  } else if (tax > 960000000) {
    return tax * 0.35 - 121800000;
  }
}


function tinhThue() {
  const userName = document.getElementById("userName").value;
  const thuNhapNam = document.getElementById("thuNhapNam").value * 1;
  const soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;

  thue = thuNhapChiuThue(thuNhapNam, soNguoiPhuThuoc);

  thueThuNhapCaNhan = calcThueThuNhapCaNhan(thue);
   
  const pKetQua = document.getElementById("pKetQua");
  pKetQua.innerHTML =
    userName +
    " có số thuế TNCN phải nộp là: " +
    thueThuNhapCaNhan.toLocaleString() +
    " VND ";
}
