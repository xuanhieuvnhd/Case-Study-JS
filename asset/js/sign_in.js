let btnf1 = document.getElementById('switch-btn1');
let btnf2 = document.getElementById('switch-btn2');
let login_form = document.getElementById('login-form');
let reg_form = document.getElementById('reg-form');
let btnLogout = document.getElementById('btnLogout');

btnf1.onclick = function() {
   login_form.style.display = 'none';
   reg_form.style.display = 'block';
}

btnLogin.onclick = function() {
   if(usernameL.value.trim() && passwordL.value.trim()){
      let fl = true;
      for(User of arrUser){
         if(User.username === usernameL.value.trim() && User.password === passwordL.value.trim()){
            fl = false;
            sessionStorage.setItem('currentUser', JSON.stringify(User));
            alert('Đăng nhập thành công');
            window.open('index.html', "_self");
            btnLogout.style.display = 'block';

            //mở trang chủ
         }
      }
   
      if(fl){
         alert('Sai tên đăng nhập hoặc sai mật khẩu');
      }
   } else {
      alert('Hãy nhập tên đăng nhập và mật khẩu');
   }
}


