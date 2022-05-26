let Dell = document.getElementById('Dell');
let Asus = document.getElementById('Asus');
let HP = document.getElementById('HP');
let MSI = document.getElementById('MSI');
let Lenovo = document.getElementById('Lenovo');

Dell.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
} 
Asus.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}  
HP.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
} 
MSI.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}
Lenovo.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}