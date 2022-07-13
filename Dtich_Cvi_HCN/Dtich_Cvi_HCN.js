/*
DAU VAO:
    + Khai báo biến cho chieu dai và chieu rong cua HCN
        var Chieudai = 5;
        var Chieurong = 4; 
    + Khai bao bien DienTich, ChuVi

XU LY:
    + Tinh dien tich cua HCN: 
        DienTich = Chieudai * Chieurong;
    + Tinh chu vi cua HCN:
        ChuVi = (Chieudai + chieurong) * 2;

DAU RA: 
    + Xuat ket qua DienTich, ChuVi cua HCN ra console

*/


var Chieudai = 5;
var Chieurong = 4;
var DienTich;
var ChuVi;
    DienTich = Chieudai * Chieurong;
    ChuVi = (Chieudai + Chieurong) * 2 ;

    console.log("Chiều dài của HCN là: " + Chieudai + " cm");
    console.log("Chiều rộng của HCN là: " + Chieurong + " cm");
    console.log("Diện tích của HCN là: " + DienTich + " m2");
    console.log("Chu vi của HCN là: " +ChuVi + " cm2");