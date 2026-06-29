window.onload = () => {
    const d = document, 
          cards = d.querySelectorAll('.container .div'), 
          box = d.getElementById('box'),
          boxImg = box.querySelector('.detail-content img'),
          purchaceBtn = d.getElementById('Purchace'),
          logoutBtn = d.getElementById('logoutBtn'); // Çıxış düyməsinin ID-si

    if(box) box.style.display = 'none';

    // Kompüter kartlarının kliklənməsi
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
    
    // Geri düyməsi
    const closeBtn = d.getElementById('closeBtn');
    if(closeBtn) {
        closeBtn.onclick = () => {
            if(box) box.style.display = 'none';
        };
    }

    // Purchase düyməsi (Birbaşa qəbul edir)
    if (purchaceBtn) {
        purchaceBtn.onclick = () => {
            alert("✅ Sifarişiniz uğurla qəbul olundu! Təşəkkür edirik.");
        };
    }

    // ÇIXIŞ DÜYMƏSİNƏ KLİKLƏNƏNDƏ: Yaddaşı təmizləyir və əvvəlki səhifəyə qaytarır
    if (logoutBtn) {
        logoutBtn.onclick = (event) => {
            event.preventDefault();
            localStorage.removeItem('userLoggedIn'); // Giriş statusunu silirik
            window.location.href = '../No Login/Nologin.html'; // Giriş olunmamış səhifənin yolu
        };
    }
};
