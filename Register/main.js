const singUpEmail = document.getElementById('Email');

const singUpPassword = document.getElementById('Şifrə')

const singUpForm = document.querySelector('.form-kapsayici')

const singUpName = document.getElementById('AD')

const singUpSurname = document.getElementById('Soyad')
singUpForm.addEventListener('submit', function(event) {

    event.preventDefault()

    const emailValue = singUpEmail.value;
    const passwordValue = singUpPassword.value;
    const nameValue = singUpName.value;
    const surnameValue = singUpSurname.value;

    const user = {
        ad: nameValue,
        soyad: surnameValue,
        email: emailValue,
        password: passwordValue
    }
    localStorage.setItem('registeredUser', JSON.stringify(user));
    alert("Qeydiyyat Uğurla Tamamlandı! İndi Giriş Edə bilərsiniz");
     window.location.href = "../Sing in/sing in.html";
});