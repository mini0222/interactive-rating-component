var listContainer = document.getElementById("list-container");
var checked = document.getElementsByClassName("checked");
var container = document.getElementsByClassName("container");
var container2 = document.getElementsByClassName("container2")







var lists = document.querySelectorAll("ul li");

lists.forEach(item => {
  item.addEventListener('click', event => {

    for(var i = 0; i < lists.length; i++){
      if(event.currentTarget == lists[i]) {
        lists[i].classList.toggle("checked")
      }
      else {
        lists[i].classList.remove("checked")
      }
    
    }
})
})




function result() {
 document.getElementsByClassName("result")[0].innerHTML = `You selected ${checked[0].innerHTML} out of 5`;
 container[0].style.display = "none";
 container2[0].style.visibility= "visible";

}
