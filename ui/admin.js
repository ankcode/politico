// JS file for admin pages
var newModal = document.getElementById("new-form");
var editModal = document.getElementById("edit-form");

function newForm() {
    newModal.style.display="block";  
    event.preventDefault();
}
function editForm() {
    editModal.style.display="block";  
    event.preventDefault();
}
window.onclick=function(event){
    if(event.target==newModal || event.target==editModal){
        newModal.style.display="none";
        editModal.style.display="none";
    }
}