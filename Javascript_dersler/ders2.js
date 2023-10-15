// var data42 = prompt("Buraya bir veri giriniz: ");
// var restrictedData = data42.slice(0,181);
// alert("Girdiğiniz veri (sadece 180 karakter dahil edildi): "+ restrictedData);

// alert(prompt("Text: ").slice(0,21));

// girilen metnin baş harfini büyük, gerisi küçük yapan kod.

var name = prompt("İsim: ");
name = name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase();
alert(name);