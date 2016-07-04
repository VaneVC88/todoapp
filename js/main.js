var boton = document.getElementById("add");
boton.addEventListener("click", function(evento){
    var text = document.getElementById("text");
    var valor = text.value;
    if(!valor){
        alert("Ingrese un valor");
        return false;
    }
    text.value = "";
    
    var item = document.createElement("li");
    var check = document.createElement("input");
    var contenedor = document.createElement("span");
    contenedor.innerText = valor;
    check.setAttribute("type", "checkbox");

    check.addEventListener("change", tachar, false);
    item.appendChild(check);
    item.appendChild(contenedor);

    var trash = document.createElement("i");
    var container = document.createElement("button")
    trash.setAttribute("class", "fa fa-trash");
    container.setAttribute("onclick", "eliminar(this)");
    container.appendChild(trash);
    item.appendChild(container);

    var lista = document.getElementById("todos");
    lista.appendChild(item);

}, false);

function tachar(evento){
    var li = this.parentNode;

    if(this.checked){
        li.classList.add("tachado");

    }else{
        li.classList.remove("tachado");
    }
}

function eliminar(container){
    var listado = container.parentNode;
    var list = listado.parentNode;
    list.removeChild(listado);
}