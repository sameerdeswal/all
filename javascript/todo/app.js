
function onAdd() {
    var inputEle = document.getElementById('todotext');
    
    var text = inputEle.value;
    console.log("Adding todo with name : ", text);

    var todoEle = document.getElementById('todolist');
    
    var hiddenEle= todoEle.children[0];

    var newEle = hiddenEle.cloneNode(true);
    newEle.removeAttribute('style');

    var titleSpan = newEle.getElementsByTagName('span')[0]
    titleSpan.innerHTML = text;
    todoEle.appendChild(newEle);
    inputEle.value = '';
}

function onDelete(ele) {
    var li = ele.parentNode.parentElement;
    li.remove();
}

function toggleDone(ele) {
    var li = ele.parentNode.parentElement;
    
    var classList = li.classList;

    if(classList.contains('done')) {
        li.classList.remove("done");
        ele.innerHTML = 'Done';
    }else {
        li.classList.add("done");
        ele.innerHTML = 'Undone';
    }
}



