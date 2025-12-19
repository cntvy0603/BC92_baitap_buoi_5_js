// Tính tiền điện //
const kW_1 = 500; // 50kw đầu: 500d/kw => 0 - 50
const kW_2 = 650; // 50 kw kế: 650d/kw => 51-100
const kW_3 = 850; // 100 kw kế: 850d/kw => 101-200
const kW_4 = 1100; // 150 kw kế: 1100d/kw => 201 - 350
const kW_5 = 1300; // còn lại: 1300d/kw => >350

let usingKw1 = 0;
let usingKw2 = 0;
let usingKw3 = 0;
let usingKw4 = 0;
let usingKw5 = 0;

function calcKw1(soKw, perKw) {
  return soKw * perKw;
}

function calcKw2(soKw, perKw) {
  return (soKw - 50) * perKw;
}

function calcKw3(soKw, perKw) {
  return (soKw - 100) * perKw;
}

function calcKw4(soKw, perKw) {
  return (soKw - 200) * perKw;
}

function calcKw5(soKw, perKw) {
  return (soKw - 350) * perKw;
}

function calcTotalKw(soKw, using_1, using_2, using_3, using_4, using_5) {
  if (0 < soKw && soKw <= 50) {
    usingKw1 = calcKw1(soKw, using_1);
    total = usingKw1;
  } else if (50 < soKw && soKw <= 100) {
    usingKw1 = calcKw1(50, using_1);
    usingKw2 = calcKw2(soKw, using_2);
    total = usingKw1 + usingKw2;
  } else if (100 < soKw && soKw <= 200) {
    usingKw1 = calcKw1(50, using_1);
    usingKw2 = calcKw2(100, using_2);
    usingKw3 = calcKw3(soKw, using_3);
    total = usingKw1 + usingKw2 + usingKw3;
  } else if (200 < soKw && soKw <= 350) {
    usingKw1 = calcKw1(50, using_1);
    usingKw2 = calcKw2(100, using_2);
    usingKw3 = calcKw3(200, using_3);
    usingKw4 = calcKw4(soKw, using_4);
    total = usingKw1 + usingKw2 + usingKw3 + usingKw4;
  } else if (soKw > 350) {
    usingKw1 = calcKw1(50, using_1);
    usingKw2 = calcKw2(100, using_2);
    usingKw3 = calcKw3(200, using_3);
    usingKw4 = calcKw4(350, using_4);
    usingKw5 = calcKw5(soKw, using_5);
    total = usingKw1 + usingKw2 + usingKw3 + usingKw4 + usingKw5;
  }

  console.log(total);
}

function onCalculateKw() {
  const name = document.getElementById("name").value;
  const soKw = document.getElementById("soKw").value * 1;

  calcTotalKw(soKw, kW_1, kW_2, kW_3, kW_4, kW_5);

  let result =
    "Khách hàng: " +
    name +
    " đã tiêu thụ " +
    soKw +
    " kw " +
    " và số tiền phải trả là ";
  const pKetqua = document.getElementById("pKetqua");
  pKetqua.innerHTML = result + total.toLocaleString() + " VND";
}
