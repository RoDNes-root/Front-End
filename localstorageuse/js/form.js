let userFormDOM = document.querySelector('#userForm');
userFormDOM.addEventListener('submit', formHandler) // formHandler is a function
const button = document.querySelector('#delete');



function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const NOT = document.querySelector('#not')
    if(USER_NAME.value && NOT.value){
        addItem(USER_NAME.value, NOT.value)
        let userStatus = {userName: USER_NAME.value, NOT: NOT.value}
        localStorage.setItem('user', JSON.stringify(userStatus))
        USER_NAME.value = '' // clear the input
        NOT.value = '' // clear the input
        Swal.fire({
            icon: 'success',
            title: 'Not Bilgisi eklendi',
            showConfirmButton: false,
            timer: 1200
          })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Hata',
            text: 'Lütfen bilgileri boş bırakmayın !!',
          })
    }
    
}

let userListDOM = document.querySelector('#userList')

if (localStorage.length > 0) {
    let user = JSON.parse(localStorage.getItem('user'))
    let liDOM = document.createElement('li')
    userFormDOM =  liDOM.innerHTML = `${user.userName} 
    <span class="badge bg-primary rounded-pill">${user.NOT}</span>
    `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.appendChild(liDOM)

}


const addItem = (userName, not) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName} 
    <span class="badge bg-primary rounded-pill">${not}</span>
    `
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.appendChild(liDOM)
}


button.addEventListener('click', function () {
    localStorage.clear();
    Swal.fire({
        icon: 'success',
        title: 'Local Storage Temizlendi',
        showConfirmButton: false,
        timer: 1200
      })
  });

// Öğeleri tamamen kapatma

var close = document.getElementsByClassName("close")
var i
for(i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement
        div.style.display = "none"
    }
}

var myTodolist = document.getElementsByTagName("li")
var i
for(i = 0; i < myTodolist.length; i++) {
    var span = document.createElement("span")
    var text = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(text)
    myTodolist[i].appendChild(span)
}