/* MO HINH 3 KHOI

DAU VAO 
- khai bao bien Luong1Ngay = 100000
- khai bao bien SoNgayLam  = 24
XU LY 
- tao bien SumLuong de tinh tong so tien luong cho nhan vien 
    SumLuong = Luong1Ngay * SoNgayLam 
DAU RA 
- xuat ra so tien luong nhan vien nhan duoc ra console
*/

 var Luong1Ngay = 100000;
 var SoNgayLam  = 24;
 var currentFormat = new Intl.NumberFormat("vn-VN");
 
     SumLuong = Luong1Ngay * SoNgayLam;

    console.log("Lương 1 ngày: " + Luong1Ngay);
    console.log("Số ngày làm: " + SoNgayLam + " ngày");
    console.log("Tổng số tiền lương của nhân viên nhận được là: " + currentFormat.format(SumLuong) + "vnđ" );
