let currentItem = JSON.parse(localStorage.getItem('currentItem'));

let contentwrap = document.querySelector('.content-wrap');
let title = document.createElement('h3');
title.innerText = currentItem.name;
title.classList.add('item-title');
contentwrap.appendChild(title);

let itemwrap = document.createElement('section');
itemwrap.classList.add('item-wrap');
contentwrap.appendChild(itemwrap);

let itemimg = document.createElement('section');
itemimg.classList.add('item-img');
itemwrap.appendChild(itemimg);

let img =  document.createElement('img');
img.src = currentItem.img;
itemimg.appendChild(img);

let itemdesc = document.createElement('section');
itemdesc.classList.add('item-desc');
itemwrap.appendChild(itemdesc);

let h3 = document.createElement('h3');
h3.innerText = 'Thông số kỹ thuật: ';
itemdesc.appendChild(h3);

let desc = document.createElement('p');
desc.classList.add('desc');
desc.innerText = currentItem.desc;
itemdesc.appendChild(desc);

let price = document.createElement('span');
price.classList.add('price');
price.innerText = Number(currentItem.price).toLocaleString() + ' đ';

let pricewrap = document.createElement('section');
pricewrap.classList.add('price-wrap');
pricewrap.innerText = 'Giá:  ';
pricewrap.appendChild(price);
itemdesc.appendChild(pricewrap);

let b = document.createElement('b');
b.innerText = 'Bảo hành: ';

let warranty = document.createElement('span');
warranty.classList.add('warranty');
warranty.innerText = currentItem.warranty;
b.appendChild(warranty);
itemdesc.appendChild(b);

let btnwrap = document.createElement('section');
btnwrap.classList.add('btn-wrap');

let btnadd = document.createElement('button');
btnadd.classList.add('btn', 'btn-add');
btnadd.innerText = 'Thêm vào giỏ hàng';
let btnbuy = document.createElement('button');
// btnbuy.classList.add('btn', 'btn-buy');
// btnbuy.innerText = 'Đặt mua ngay';
btnwrap.appendChild(btnadd);
btnwrap.appendChild(btnbuy);
btnadd.onclick = addToCart;
itemdesc.appendChild(btnwrap);

let cartNotice = document.querySelector('.cart-notice');
cartNotice.innerText = currentUser.cart.length;

function addToCart() {
    if(currentUser){
        //thêm sản phẩm vào cart của current User
        currentUser.cart.push(currentItem);
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        cartNotice.innerText = currentUser.cart.length;
    } else {
        //mở trang đăng nhập/đăng ký
        window.open('auth_form.html', "_self");
    }
}

