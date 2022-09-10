let taskDOM = document.querySelector('#taskform')
taskDOM.addEventListener('submit', taskEvent)

function taskEvent(event){
    event.preventDefault()
    const task = document.querySelector('#task')
    if(task.value && task.value.trim() != ''){
        addItem(task.value)
        localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value}]));
        task.value = ''
        Swal.fire({
            icon: 'success',
            title: 'Görev eklendi!',
            showConfirmButton: false,
            timer: 1200
          })
          setTimeout(function(){
            window.location.reload(1);
         }, 1000);
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Görev boş bırakılamaz!',
            showConfirmButton: false,
            timer: 1200
          })
    }
}


// görev ekleme  eklendigin de ekrana yazdırma ve kapat butonu ekleme

let listDOM = document.querySelector('#list')
const addItem = (TASK) => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `${TASK}`;
    var span = document.createElement("span")
    var text = document.createTextNode("\u00D7")
    span.className = "close"
    span.setAttribute("onclick", "removeTask(this)")
    span.appendChild(text)
    li.setAttribute("value", `${task.task}`);
    list.insertBefore(li, list.children[0]);
}

// localden verileri çekme ve ekrana yazdırma
  if(localStorage.length > 0){
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    tasks.forEach(task => {
      const list = document.querySelector("ul");
      const li = document.createElement("li");
      li.innerHTML = `${task.task}`;
      li.setAttribute("value", `${task.task}`);
      list.insertBefore(li, list.children[0]);
    });
 
// görev tamamlandı ise check etme
var list = document.querySelector('ul');
list.addEventListener('click', function(element) {
  
  if (element.target.tagName === 'LI') {
      element.target.classList.toggle('checked');
      if (element.target.classList.contains('checked')) {
          Swal.fire({
              icon: 'success',
              title: 'Görev Tamamlandı tebrikler',
              showConfirmButton: false,
              timer: 1200
            })
      }else {
          Swal.fire({
              icon: 'error',
              title: 'Görev tamamlaması kaldırıldı',
              showConfirmButton: false,
              timer: 1200
            })
      }
  }
}, false);
  }

// localden gelen öğelere kapatma butonu ekleme

var myTodolist = document.getElementsByTagName("li")
var i
for(i = 0; i < myTodolist.length; i++) {
    var span = document.createElement("span")
    var text = document.createTextNode("\u00D7")
    span.className = "close"
    span.setAttribute("onclick", "removeTask(this)")
    span.appendChild(text)
    myTodolist[i].appendChild(span)
}

// ögeleri kapatma

// localdeki tüm verileri temizleme

const deleteDOM = document.querySelector("#delete");
      if (deleteDOM) {
        deleteDOM.addEventListener("click", () => {
            Swal.fire({
                icon: 'success',
                title: 'Tüm Görevler temizlendi',
                showConfirmButton: false,
                timer: 1200
              })
          localStorage.clear();
          setTimeout(function(){
            window.location.reload(1);
         }, 1000);
          
        });
      }
// veri silme
function removeTask(event) {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    tasks.forEach(task => {
      if (task.task === event.parentElement.getAttribute("value")) {
        // delete task
        tasks.splice(tasks.indexOf(task), 1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.parentElement.remove();
  }