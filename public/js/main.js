// Var
let todoInput=document.querySelector('.todo-input');
let addTodoButton=document.querySelector('.add-todo');
let todoList=document.querySelector('.todo-list')
let todoDiv=document.querySelectorAll('.todo-div')
let editCount=0
let checkCount=0
let stillTodo=document.querySelector('.still-todo')
let done=document.querySelector('.done')
let seeAll=document.querySelector('.see-all')




// Liste
addTodoButton.addEventListener('click',addTodoFunction);
document.addEventListener('keydown',function (e) {
    if(e.key==='Enter'){
        addTodoFunction()
    }
});

todoList.addEventListener('click',CheckEditDeleteFunction)

stillTodo.addEventListener('click',showTodo)
done.addEventListener('click',hideTodo)
seeAll.addEventListener('click',showAll)








// FUNCTIONS
function addTodoFunction(event) {

    if (todoInput.value!="") {
        // DIV
        let todoDiv=document.createElement('div')
        todoDiv.classList.add('todo-div','current')
        todoList.prepend(todoDiv)
        // LI
        let todoLi=document.createElement('li')
        todoLi.innerText=todoInput.value
        todoLi.classList.add('todo-li')
        todoDiv.appendChild(todoLi)
        // CHECK BOUTON
        let todoCheck=document.createElement('button')
        todoCheck.innerHTML='<i class="fas fa-check-circle"></i>'
        todoCheck.classList.add('todo-check')
        todoDiv.appendChild(todoCheck)
        // EDIT BOUTON
        let todoEdit=document.createElement('button')
        todoEdit.innerHTML='<i class="far fa-edit"></i>'
        todoEdit.classList.add('todo-edit')
        todoDiv.appendChild(todoEdit)
        // BOUTON SUPP
        let todoDelete=document.createElement('button')
        todoDelete.innerHTML='<i class="far fa-trash-alt"></i>'
        todoDelete.classList.add('todo-delete')
        todoDiv.appendChild(todoDelete)
        todoInput.value=""
        
    }
    


}

function CheckEditDeleteFunction(e) {

    let item=e.target; 
    console.log(item);
    let todo=item.parentElement
    let edit=todo.querySelector('.todo-edit')
    console.log(edit);
    console.log(edit.classList.contains('invisible'));



    if(item.classList[0]==='todo-delete'){
        let todo=item.parentElement
        todo.classList.add('fade')
        todo.addEventListener('transitionend',function(){

            todo.remove()
        })
    }
    
    if(item.classList[0]==='todo-check'){
        let todo=item.parentElement
            
            if (todo.classList[1]!='checked') {
                let todo=item.parentElement
                todo.classList.replace('current','checked')
            }
            else if(todo.classList[1]==='checked'){
                todo.classList.replace('checked','current')
    
    
            }
        





        
    }   

     



    if(item.classList[0]==='todo-edit'&&editCount==0){
        editCount=1
        const todo=item.parentElement
        var check=todo.querySelector('.todo-check')
        const li=todo.querySelector('.todo-li')
        const edit=todo.querySelector('.todo-edit')
        const del=todo.querySelector('.todo-delete')
        const inputEdit=document.createElement('input')
        let newCheck=document.createElement('button')
        newCheck.innerHTML='<i class="fas fa-check-circle"></i>'
        todo.insertBefore(newCheck,edit)
        newCheck.classList.add('todo-newcheck')
        edit.classList.add('invisible')
        del.classList.add('invisible')
        check.classList.add('display-None')
        todo.classList.add('anim')
        li.style.display='none'
        inputEdit.classList.add('edit-input')
        inputEdit.type='text'
        inputEdit.value=li.innerText
        inputEdit.style.color='grey'
        todo.insertBefore(inputEdit,li)
        if(li.style.display==='none'){
            const todo=item.parentElement
            todo.addEventListener('keypress',function(e){
                if (e.key==='Enter') {
                    todo.classList.remove('anim')
                    edit.classList.remove('invisible')
                    del.classList.remove('invisible')
                    check.classList.remove('display-None')
                    li.style.display='block'
                    li.innerText=inputEdit.value
                    inputEdit.remove()
                    editCount=0
                    newCheck.remove()
                }
            })
            newCheck.addEventListener('click',()=>{
                todo.classList.remove('anim')
                edit.classList.remove('invisible')
                del.classList.remove('invisible')
                check.classList.remove('display-None')
                li.style.display='block'
                li.innerText=inputEdit.value
                inputEdit.remove()
                editCount=0
                newCheck.remove()

            })
        }
        
    }


     
    
}



function showTodo(params) {

    let checkedTodo=document.querySelectorAll('.checked')

    checkedTodo.forEach(e=>{
        e.classList.add('muted')
    })

    let currentTodo=document.querySelectorAll('.current')
    currentTodo.forEach(e=>{
        e.classList.remove('muted')
    })


   




    
}

function hideTodo(params) {

    let currentTodo=document.querySelectorAll('.current')

    currentTodo.forEach(e=>{
        e.classList.add('muted')
    })

    let checkedTodo=document.querySelectorAll('.checked')
    checkedTodo.forEach(e=>{
        e.classList.remove('muted')
    })

    
}

function showAll(params) {

    let allTodoDivs=document.querySelectorAll('.todo-div')
    allTodoDivs.forEach(e=>{

        e.classList.remove('muted')

    })


    
}




