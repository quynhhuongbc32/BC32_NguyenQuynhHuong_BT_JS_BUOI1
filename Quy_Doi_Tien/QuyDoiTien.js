/* QUY ĐỔI TIỀN 
 DAU VAO
 - Khai bao bien cho so tien can quy doi
    SoTienCanDoi = 4
 - khai bao bien menh gia quy doi
    n = 23500
 XU LY
 - Tinh so tien duoc quy doi
    SoTienQuyDoi = SoTienCanDoi * n
 DAU RA
 - Xuat so tien dã duoc quy doi ra console
*/
    var n=23500;
    var currentFormat = new Intl.NumberFormat("vn-VN");
    SoTienCanDoi = 2;
    SoTienQuyDoi = n * SoTienCanDoi ;

    console.log("Số tiền cần quy đổi: " + SoTienCanDoi + "$");
    console.log("Mệnh giá quy đổi: " + n);
    console.log("Số tiền được quy đổi là: " + currentFormat.format(SoTienQuyDoi) + "VND" );