var sinir = 280, girilenMetin = "";
girilenMetin = prompt("Bir Metin Giriniz: ");
var karakterSayisi = girilenMetin.length;
alert(girilenMetin + "\n\nGirilen karakter sayısı: " + karakterSayisi + ". Kalan harf sayınız: " + (sinir - karakterSayisi));