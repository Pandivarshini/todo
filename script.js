var input=document.getElementById("input")
var ul=document.getElementById("listcontainer")
function add(){
    var item1=document.createElement("li")
    item1.innerHTML=input.value+"&nbsp;&nbsp;&nbsp;<button onclick='deleteitems(event)'>delete</button><br><br>"
    ul.append(item1)
    item1.style.color="white"
    item1.style.fontSize=20;
   
    
}
function deleteitems(event){
    event.target.parentElement.remove()

}