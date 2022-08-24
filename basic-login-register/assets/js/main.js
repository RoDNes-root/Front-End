/* GİRİŞ YAP GİZLEME VE GÖSTERME */
const signUp = document.getElementById('signup'),
      signIn = document.getElementById('signin'),
      loginIn = document.getElementById('login_in'),
      loginUp = document.getElementById('login_up')

// Kayıt ol kısmı    
signUp.addEventListener('click', ()=>{
    // Eğer varsa önclikle sınıfları geri alır
        loginIn.classList.remove('block')
        loginUp.classList.remove('none')
    // Yoksa classları ekler
        loginIn.classList.add('none')
        loginUp.classList.add('block')
//Giriş Yap kısmı
   
})
//Giriş Yap kısmı
signIn.addEventListener('click', ()=>{
    // Eğer varsa önclikle sınıfları geri alır
        loginIn.classList.remove('none')
        loginUp.classList.remove('block')
    // Yoksa classları ekler
        loginIn.classList.add('block')
        loginUp.classList.add('none')
//Giriş Yap kısmı
   
})

