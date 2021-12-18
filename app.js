
var listbox =document.getElementById("listbox")

function add(){
    var input=document.getElementById("input")



    if(input.value.length>2){
        var list = document.createElement("li")
        list.className="list"
        list.innerHTML=input.value


    ///////////////create delete Btn Inner HTML

    var deleteBtn=document.createElement("i")
    deleteBtn.className="far fa-times-circle"
    var deleteBtnText=document.createTextNode("delete")
    deleteBtn.appendChild=deleteBtnText
    deleteBtn.setAttribute("onclick","delet(this)")
    console.log(deleteBtn)

    //////////////exit BTn

    var edit=document.createElement("i")
    edit.className="far fa-edit edit"
    var editTct= document.createTextNode("Edit")
    edit.append=editTct
    edit.setAttribute("onclick","edit(this)")
    console.log(edit)

    list.appendChild(edit)
    list.appendChild(deleteBtn)
    

    listbox.appendChild(list);
        input.value = "";
    }


    else{alert("Enter Value Sir !")}
}


function delet(e){
    e.parentNode.remove()
}


function Clear(){
    listbox.innerHTML=" "
}


function edit(e){
    var editNow=prompt("Enter Correct Value"+ e.parentNode.firstChild.nodeValue  )
    e.parentNode.firstChild.nodeValue  = editNow
}