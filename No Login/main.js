window.onload = () => {
    const d = document, 
          cards = d.querySelectorAll('.container .div'), 
          box = d.getElementById('box'),
          boxImg = box.querySelector('.detail-content img'),
          purchaceBtn = d.getElementById('Purchace'); // Purchase düyməsini seçirik

    // İSTİFADƏÇİNİN GİRİŞ STATUSU: false (giriş etməyib), true (giriş edib)
    let isLoggedIn = false; 

    if(box) box.style.display = 'none';

    // Kartların kliklənməsi
    cards.forEach(card => {
        card.onclick = () => {
            const cardImg = card.querySelector('img').src;
            const cardTitle = card.querySelector('h3').innerText;
            const cardPrice = card.querySelector('h2').innerText;

            d.getElementById('BTitle').innerText = cardTitle;
            d.getElementById('Btprice').innerText = cardPrice;
            if(boxImg) boxImg.src = cardImg;

            if(box) box.style.display = 'flex';
        };
    });
    
    const closeBtn = d.getElementById('closeBtn');
    if(closeBtn) {
        closeBtn.onclick = () => {
            if(box) box.style.display = 'none';
        };
    }
    if (purchaceBtn) {
        purchaceBtn.onclick = () => {
            if (!isLoggedIn) {
                alert("Zəhmət olmasa, alış-veriş etmək üçün əvvəlcə giriş edin!");
            
                window.location.href = "../Sing in/singin.html"; 
            } else {
                alert("Sifarişiniz qəbul olundu!");
            }
        };
    }
};
