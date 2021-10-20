/**
 * Quản lý Tuyển Sinh 
 */

function tuyenSinh() {
    var diem1 = document.getElementById("diem1").value * 1;
    var diem2 = document.getElementById("diem2").value * 1;
    var diem3 = document.getElementById("diem3").value * 1;
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var khuVuc = document.getElementById("khuVuc").value * 1;
    var doiTuong = document.getElementById("doiTuong").value * 1;
    var total = diem1 + diem2 + diem3 + khuVuc + doiTuong;
    var result = ""
    if (diem1 > 0 && diem2 > 0 && diem3 > 0 && diemChuan <= total) {

        result = "Bạn đã đậu. " + "tổng điểm: " + total;
    } else
        result = "Bạn đã rớt. " + "tổng điểm: " + total;

    document.getElementById("txtKetQua").innerHTML = result;
}

document.getElementById("btnKetQua").onclick = tuyenSinh

/**
 * Tính tiền điện
 */
const KW_50_DAU = 500;
const KW_50_KE = 650;
const KW_100_KE = 850;
const KW_150_KE = 1100;
const CONLAI = 1300;

function tinhTienDien() {
    var kW = document.getElementById("kW").value * 1;
    var name = document.getElementById("name").value;
    var tong = 0
    if (0 < kW && kW <= 50) {
        tong = kW * KW_50_DAU;
    } else if (50 < kW && kW <= 100) {
        tong = 50 * KW_50_DAU + (kW - 50) * KW_50_KE;
    } else if (100 < kW && kW <= 200) {
        tong = (50 * KW_50_DAU) + (50 * KW_50_KE) + (kW - 100) * KW_100_KE;
    } else if (200 < kW && kW <= 350) {
        tong = (50 * KW_50_DAU) + (50 * KW_50_KE) + (100 * KW_100_KE) + (kW - 200) * KW_150_KE;
    } else if (350 < kW) {
        tong = (50 * KW_50_DAU) + (50 * KW_50_KE) + (100 * KW_100_KE) + (200 * KW_150_KE) + (kW - 350) * CONLAI
    } else
        tong = "Số KW không hợp lệ"

    document.getElementById("txtTinh").innerHTML = "HỌ TÊN: " + name + " .Tiền điện: " + (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(tong));
}
document.getElementById("btnTinh").onclick = tinhTienDien

/**
 * Tính thuế thu nhập cá nhân 
 */

function tinhTienThue() {
    var name = document.getElementById("names").value;
    var thuNhap = document.getElementById("thuNhap").value * 1;
    var people = document.getElementById("people").value * 1;
    var total = 0;
    var chiuThue = thuNhap - 4e+6 - people * 16e+5
    console.log(chiuThue)

    if (0 < chiuThue && chiuThue <= 60e+6) {
        total = chiuThue * 0.05;
    } else if (60e+6 < chiuThue && chiuThue <= 120e+6) {
        total = (60e+6 * 0.05) + (chiuThue - 60e+6) * 0.1;
    } else if (120e+6 < chiuThue && chiuThue <= 210e+6) {
        total = (60e+6 * 0.05) + (60e+6 * 0.1) + (chiuThue - 90e+6) * 0.15;
    } else if (210e+6 < chiuThue && chiuThue <= 384e+6) {
        total = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (chiuThue - 174e+6) * 0.2;
    } else if (384e+6 < chiuThue && chiuThue <= 624e+6) {
        total = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + (chiuThue - 240e+6) * 0.25;
    } else if (624e+6 < chiuThue && chiuThue <= 960e+6) {
        total = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.25) + (chiuThue - 336e+6) * 0.3;
    } else if (chiuThue > 960e+6) {
        total = (60e+6 * 0.05) + (60e+6 * 0.1) + (90e+6 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.25) + (336e+6 * 0.3) + (chiuThue - 960e+6) * 0.35;
    } else
        total = "Không hợp lệ"

    document.getElementById("txtThue").innerHTML = "HỌ TÊN: " + name + " - Tiền thuế thu nhập cá nhân: " + (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(total));
}
document.getElementById("btnThue").onclick = tinhTienThue

/**
 * Tính tiền cáp
 * Khối 1: nhà dân , doanh nghiêp, phí xử lí , phí dịch vụ, phí thuê kênh
 * Khối 2: 
 * b1:khai báo biến
 * b2:lấy giá trị từ form
 * b3:kiểm tra khách hàng
 * b4:tính tiền và hiển thị kết quả
 * 
 * Khối 3: kết quả
 */
const NHADAN_PHIXULI = 4.5
const NHADAN_PHIDICHVU = 20.5
const NHADAN_THUEKENH = 7.5
const DOANHNGHIEP_PHIXULI = 15
const DOANHNGHIEP_PHIDICHVU = 75
const DOANHNGHIEP_THUKENH = 50


function tinhTienCap() {
    var client = document.getElementById("client").value;
    var codeClient = document.getElementById("codeClient").value;
    var chanel = document.getElementById("chanel").value * 1;
    var line = document.getElementById("line").value * 1;
    var total = 0;
    console.log(chanel)
    switch (client) {
        case "nhaDan":
            total = thueKenh(chanel, NHADAN_THUEKENH, NHADAN_PHIXULI, NHADAN_PHIDICHVU);
            break;
        case "doanhNghiep":
            total = thueKenh(chanel, DOANHNGHIEP_THUKENH, DOANHNGHIEP_PHIXULI, DOANHNGHIEP_PHIDICHVU) + ((line - 10) * 5);
            break;
        default:
            total = "không hợp lệ"

    }

    document.getElementById("txtCap").innerHTML = "Mã khách hàng: " + codeClient + " - Tiền cáp: " + total +"<span>$</span>"
}

function thueKenh(chanel,thuekenh, phixuli, phidichvu) {
    var total = 0;
    if (chanel == 0) {
        total = phidichvu + phixuli

    } else (0<chanel && chanel >= 1)
    total = (chanel * thuekenh) + phidichvu + phixuli
    return total
}



document.getElementById("btnCap").onclick = tinhTienCap