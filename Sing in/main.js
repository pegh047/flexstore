    const singInEmail = document.querySelector('.email')
    const singInPassword = document.querySelector('.password')
    const singInBtn = document.getElementById('singInBtn')

    singInBtn.addEventListener('click',function(event) {
        event.preventDefault()

        let email = singInEmail.value
        let password = singInPassword.value

 if (email === "" || password === "") {
        return alert("⚠️ Zəhmət olmasa, bütün xanaları doldurun!");
    }

    if (!/@/.test(email)) {
    return alert("✉️ E-poçt ünvanında '@' işarəsi olmalıdır!");
}

        const saveduserRaw = localStorage.getItem('registeredUser')

        if (!saveduserRaw) {
            return alert("❗Sistemdə Məlumat Tapılmadı❗ Öncə qeydiyyatdan keçin");
        }
        const saveduser = JSON.parse(saveduserRaw);
    
         if(email === saveduser.email && password === saveduser.password) {
        
            localStorage.setItem('userLoggedIn', 'true');
            
            alert('Uğurla giriş etdiniz 🎉');

            window.location.href = '../Login/Truelogin.html'; 
        }else{
            alert("E-poçt və ya şifrə yanlışdır!");
        }
    });