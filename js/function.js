function vucutKitle() {
    var size = document.kitleForm.boy.value;
    var weight = document.kitleForm.kilo.value;
    
    //var vki = weight/(size/100)**2;

    if (size > 0 && weight >0) {
        var vki = weight/(size/100)**2;
        document.kitleForm.indeks.value = vki;


        if (vki < 18.5) {
            document.kitleForm.islemsonucu.value = "Zayıfsınız"
        }
        if (vki > 18.5 && vki < 25) {
            document.kitleForm.islemsonucu.value = "Gayet Sağlıklı "
        }

        if (vki > 25) {
            document.kitleForm.islemsonucu.value = "Şişmansınız."
        }   
    }
    else{
        alert("Lütfen değerlerinizi düzgün giriniz..")
    }
    

}