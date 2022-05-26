
let cartNotice = document.querySelector('.cart-notice');

if (currentUser) {
    cartNotice.innerText = currentUser.cart.length;
}

let productElement = document.querySelector('.content-product');

var total = 0;
for (item of currentUser.cart) {

    let itemElement = document.createElement('div');
    // itemElement.setAttribute('item_id', item.id);
    itemElement.classList.add('row')
    productElement.appendChild(itemElement);

    let imgElement = document.createElement('img');
    imgElement.classList.add('img');
    imgElement.classList.add('col-xl-3');
    imgElement.classList.add('col-md-3');
    imgElement.classList.add('col-lg-3');
    // imgElement.style.backgroundImage = `url(${item.img})`;
    imgElement.src = item.img;
    itemElement.appendChild(imgElement);

    let nameElement = document.createElement('div');
    nameElement.setAttribute('item_id', item.id);
    nameElement.classList.add('col-xl-7');
    nameElement.classList.add('col-md-7');
    nameElement.classList.add('col-lg-7');
    nameElement.innerText = item.name;
    itemElement.appendChild(nameElement);

    let priceElement = document.createElement('div');
    imgElement.classList.add('price');
    priceElement.classList.add('col-xl-2');
    priceElement.classList.add('col-md-2');
    priceElement.classList.add('col-lg-2');
    priceElement.innerText = Number(item.price).toLocaleString() + 'đ';
    itemElement.appendChild(priceElement);


    let btnWrap = document.createElement('section');
    btnWrap.classList.add('item-btn-wrap');


    let hrElement = document.createElement('hr');
    imgElement.classList.add('hrclass');
    itemElement.appendChild(hrElement);

    let btndelete = document.createElement('button');
    btndelete.classList.add('btn', 'btn-add-cart');

    btndelete.onclick = deleteProduct;

    let iconAdd = document.createElement('i');
    iconAdd.classList.add('fas', 'fa-trash');
    btndelete.appendChild(iconAdd);
    var t = document.createTextNode('Xóa');
    btndelete.appendChild(t);
    btnWrap.appendChild(btndelete);

    nameElement.appendChild(btnWrap);

    this.total += Number(item.price);
}

document.getElementById('totalprice').innerHTML = Number(total).toLocaleString() + 'đ';
document.getElementById('total').innerHTML = this.total.toLocaleString() + 'đ';


function deleteProduct() {
    let productCart = JSON.parse(sessionStorage.getItem('currentUser'))
    for (item of productCart.cart) {
        if (item.id == this.parentNode.parentNode.getAttribute('item_id')) {

            const index = productCart.cart.indexOf(item);
            if (index > -1) {
                productCart.cart.splice(index, 1);
                currentUser.cart = productCart.cart;
            }
            //Xóa sản phẩm vào cart của current User
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
            cartNotice.innerText = currentUser.cart.length;
        }
    }
    let productElement = document.querySelector('.content-product');
    if (currentUser.cart.length == 0) {
        productElement.innerHTML = '';
        document.getElementById('totalprice').innerHTML = 0 + 'đ';
        document.getElementById('total').innerHTML = 0 + 'đ';
    }
    else {
        var c = 0;
        productElement.innerHTML = '';
        for (item of currentUser.cart) {

            let itemElement = document.createElement('div');
            // itemElement.setAttribute('item_id', item.id);
            itemElement.classList.add('row')
            productElement.appendChild(itemElement);

            let imgElement = document.createElement('img');
            imgElement.classList.add('img');
            imgElement.classList.add('col-xl-3');
            imgElement.classList.add('col-md-3');
            imgElement.classList.add('col-lg-3');
            // imgElement.style.backgroundImage = `url(${item.img})`;
            imgElement.src = item.img;
            itemElement.appendChild(imgElement);

            let nameElement = document.createElement('div');
            nameElement.setAttribute('item_id', item.id);
            nameElement.classList.add('col-xl-7');
            nameElement.classList.add('col-md-7');
            nameElement.classList.add('col-lg-7');
            nameElement.innerText = item.name;
            itemElement.appendChild(nameElement);

            let priceElement = document.createElement('div');
            imgElement.classList.add('price');
            priceElement.classList.add('col-xl-2');
            priceElement.classList.add('col-md-2');
            priceElement.classList.add('col-lg-2');
            priceElement.innerText = Number(item.price).toLocaleString() + 'đ';
            itemElement.appendChild(priceElement);


            let btnWrap = document.createElement('section');
            btnWrap.classList.add('item-btn-wrap');


            let hrElement = document.createElement('hr');
            imgElement.classList.add('hrclass');
            itemElement.appendChild(hrElement);

            let btndelete = document.createElement('button');
            btndelete.classList.add('btn', 'btn-add-cart');

            btndelete.onclick = deleteProduct;

            let iconAdd = document.createElement('i');
            iconAdd.classList.add('fas', 'fa-trash');
            btndelete.appendChild(iconAdd);
            var t = document.createTextNode('Xóa');
            btndelete.appendChild(t);
            btnWrap.appendChild(btndelete);

            nameElement.appendChild(btnWrap);
            c += parseInt(item.price);
        }
        document.getElementById('totalprice').innerHTML = Number(c).toLocaleString() + 'đ';
        document.getElementById('total').innerHTML = c.toLocaleString() + 'đ';
    }

}


