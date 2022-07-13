/*TÍNH TỔNG 2 ky SỐ  
 DAU VAO
   - Khai bao bien n (n la so nguyen co 2 chu so)
 XU LY
   - Tao bien Tong de tinh tong 2 ky so cua so vua nhap 
        Tong = HangChuc + HangDV
 DAU RA
   - Xuat ra tong 2 ky so cua so vua nhap ra console

 */
var  n = 45;
     HangChuc = Math.floor(n/10);
     HangDV = n % 10;
     Tong = HangChuc + HangDV;

     console.log("Nhập số n có 2 chữ số: n= " + n);
     console.log(" Số hàng chục: " + HangChuc);
     console.log(" Số hàng đơn vị: " + HangDV);
     console.log("Tổng 2 ký số của số vừa nhập: " + Tong); 
    