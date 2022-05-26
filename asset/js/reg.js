//nút chuyển
btnf2.onclick = function() {
    if(username.value.trim() || email.value.trim() 
    || password.value.trim() || repassword.value.trim()){
        let cf = confirm('Bạn có muốn chuyển trang');
        if(cf){
            //chuyển form và xóa các value
            reg_form.style.display = 'none';
            login_form.style.display = 'block';
            username.value = '';
            email.value = '';
            password.value = '';
            repassword.value = '';
        }
    } else if(!(username.value.trim() && email.value.trim() 
    && password.value.trim() && repassword.value.trim())){
        reg_form.style.display = 'none';
        login_form.style.display = 'block';
    }
}

let arrUser;
if(localStorage.getItem('Users')){
    arrUser = JSON.parse(localStorage.getItem('Users'));
} else {
    //nếu chưa có arrUser trong localStorage thì arrUser=[]
    arrUser = [];
    localStorage.setItem('Users', JSON.stringify(arrUser));
}

let User = {
    arr: arrUser,
    add: function (_username, _email, _password){
        let a = {
            id: this.arr.length + 1,
            username: _username,
            email: _email,
            password: _password,
            cart: []
        }
        this.arr.push(a);
    }
}

// User.add('admin', `admin@logo.com`, '123456');
// User.add('admin2', `admin2@logo.com`, '123456');
// localStorage.setItem('Users', JSON.stringify(User.arr));
// console.log(localStorage.getItem('Users'));

// Validation form
let form = document.querySelector('.auth__form');

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let repassword = document.getElementById('re-password');

let inputs = form.querySelectorAll('.input');

// Check bỏ trống
for(let i = 0 ; i < inputs.length ; i++){
    inputs[i].onblur = inputs[i].oninput = function() {
        if(inputs[i].value.trim()) {
            setSuccessFor(inputs[i]);
        } else {
            setErrorFor(inputs[i], 'Trường này không được bỏ trống');
        }
    }
}

//check username <3 ký tự
username.onblur = username.oninput = function() {
    if(username.value.trim().length < 3) {
        setErrorFor(username, 'Tên đăng nhập phải lớn hơn 3 ký tự');
    } else {
        setSuccessFor(username);
    }
}

//regex email:
//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// Check email
email.onblur = email.oninput = function() {
    if(isEmail(email.value.trim())){
        setSuccessFor(email);
    } else {
        setErrorFor(email,'Trường này phải là email');
    }
}

// Check password <6 ký tự
password.onblur = password.oninput = function() {
    if(password.value.trim().length < 6) {
        setErrorFor(password, 'Mật khẩu phải lớn hơn 6 ký tự');
    } else {
        setSuccessFor(password);
    }
}

// Check trùng password 
repassword.onblur = repassword.oninput = function() {
    if(repassword.value.trim() === password.value.trim()){
        setSuccessFor(repassword);
    } else {
        setErrorFor(repassword, 'Mật khẩu chưa trùng khớp');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control invalid';
    input.focus();
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = '';
    formControl.className = 'form-control valid';
}

btnReg.onclick = function() {
    if(!(username.value.trim() || email.value.trim() 
    || password.value.trim() || repassword.value.trim())){
        alert('Hãy điền đầy đủ các trường');
        if(!username.value.trim()) {
            setErrorFor(username,'Trường này không được bỏ trống');
        }
        if(!email.value.trim()) {
            setErrorFor(email,'Trường này không được bỏ trống');
        }
        if(!password.value.trim()) {
            setErrorFor(password,'Trường này không được bỏ trống');
        }
        if(!repassword.value.trim()) {
            setErrorFor(repassword,'Trường này không được bỏ trống');
        }
    } else if(username.value.trim() && email.value.trim() 
    && password.value.trim() && repassword.value.trim()){
        for(user of arrUser){
            if(user.username === username.value.trim()){
                alert('Tên đăng nhập là ' + username.value.trim() + ' đã được sử dụng, vui lòng chọn tên đăng nhập khác!')
                setErrorFor(username, 'Tên đăng nhập đã được sử dụng!');
                return;
            }
            if(user.email === email.value.trim()){
                alert('Email là ' + email.value.trim() + ' đã được sử dụng!')
                setErrorFor(email, 'Email đã được sử dụng!');
                return;
            }
        }
        //add user vào arr
        User.add(username.value.trim(), email.value.trim(), password.value.trim());
        localStorage.setItem('Users', JSON.stringify(User.arr));
        alert('Bạn đã đăng ký thành công. Hãy đăng nhập!');
        //hiện luôn form đăng nhập
        reg_form.style.display = 'none';
        login_form.style.display = 'block';
        usernameL.value = User.arr[User.arr.length-1].username;
    }
}


