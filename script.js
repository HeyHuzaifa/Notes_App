document.querySelector('.img__btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s--signup');
});

let username = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let signUp = document.getElementById('signUpBtn');
let nameSpan = document.getElementById('nameSpan');
let emailSpan = document.getElementById('emailSpan');
let loginbtn = document.getElementById('login');
let loginEmail = document.getElementById('loginEmail');
let loginPass = document.getElementById('loginPass');
let hide = document.getElementById('hide');
let show = document.getElementById('show');
let loginHide = document.getElementById('loginHide');
let loginShow = document.getElementById('loginShow');
let go_to_signup = document.getElementById('go_to_signup');
let go_to_login = document.getElementById('go_to_login');
let login_pg = document.getElementById('login_pg');
let sign_in_pg = document.getElementById('sign_in_pg');

function removeError(txt, area2) {
    setTimeout(() => {
        area2.innerText = txt, area2.style.color = '#cfcfcf'
    }, 1500);
}

function addError(span, area) {
    area.innerText = `*Enter your ${span}*`, area.style.color = '#FF0000'
}


//------------- Working on sign up -------------//


signUp.addEventListener('click', (e) => {

    let data = class {
        userData(username, email, password) {
            this.username = username;
            this.email = email;
            this.password = password;
        }
    };

    let nameVal = username.value
    let emailVal = email.value
    let passVal = password.value
    // console.log(nameVal);
    // console.log(emailVal);
    // console.log(passVal);

    if (nameVal == "" && emailVal == "" && passVal == "") {
        console.log("all null");
        nameSpan.innerText = `*Enter all the requirements*`, nameSpan.style.color = '#FF0000'
        removeError("name", nameSpan);
        // console.log(removeError());

    }

    else if (nameVal == "") {
        email.value = ""
        password.value = ""
        addError("name", nameSpan);
        removeError("name", nameSpan);
        // console.log(nameVal);
    }
    else if (emailVal == "") {
        username.value = ""
        password.value = ""
        addError("email", nameSpan);
        removeError("name", nameSpan);
        // console.log(emailVal); 
    }
    else if (passVal == "") {
        username.value = ""
        email.value = ""
        addError("password", nameSpan);
        removeError("name", nameSpan);
        // console.log(name.value);
        // console.log(email.value);
        // console.log(password.value); 
    }
    else {
        console.log("all sett");

        const userData = JSON.parse(localStorage.getItem("userData") || "[]");

        if (userData == null) {
            userData = []
        }
        console.log("userData", userData);


        let user = new data()
        user.userData(nameVal, emailVal, passVal)
        console.log(user);
        userData.push(user);
        let set = localStorage.setItem("userData", JSON.stringify(userData))
        console.log(set);
        username.value = ""
        email.value = ""
        password.value = ""
        window.location.reload();
    }
})

//------------- Working on Login -------------//



loginbtn.addEventListener('click', () => {
    let emailVal = loginEmail.value
    let passVal = loginPass.value

    // console.log(`Email is`, emailVal, `and the password is`, passVal );`
    const userData = JSON.parse(localStorage.getItem("userData") || "[]");
    // console.log(userData);
    userData.forEach(arrIndex => {
        let email = arrIndex.email
        let password = arrIndex.password

        if (emailVal == "" && passVal == "") {
            console.log("all null");
            emailSpan.innerText = `*Enter all the requirements*`, emailSpan.style.color = '#FF0000'
            removeError("email", emailSpan)

        }
        else if (emailVal == "") {
            loginEmail.value = ""
            loginPass.value = ""
            addError("email", emailSpan);
            removeError("email", emailSpan)
            console.log("null email"); 
        }
        else if (passVal == "") {

            loginEmail.value = ""
            loginPass.value = ""
            addError("password", emailSpan);
            removeError("email", emailSpan)
            console.log("null pass"); 
        }
        else if (email !== emailVal && password !== passVal) {
            console.log("wrong");
            loginEmail.classList.add('border')
            loginPass.classList.add('border')
            emailSpan.innerText = `*Invalid, Enter correct details*`, emailSpan.style.color = '#FF0000'
            loginEmail.value = ""
            loginPass.value = ""
            remove();
        }
        else if (email !== emailVal) {
            loginEmail.value = ""
            // loginPass.value = ""
            emailSpan.innerText = `*Email is incorrect*`, emailSpan.style.color = '#FF0000'
            removeError("Email", emailSpan)
            console.log("only email is incorrect");
        }
        else if (password !== passVal) {
            loginPass.value = ""
            emailSpan.innerText = `*Password is incorrect*`, emailSpan.style.color = '#FF0000'
            removeError("Email", emailSpan)
            console.log("only Password is incorrect");
        }
        else {
            console.log("ok");
            loginEmail.value = ""
            loginPass.value = ""
            window.location.href = "home.html"
        }


        function remove() {
            setInterval(() => {
                loginEmail.classList.remove('border')
                loginPass.classList.remove('border')
                emailSpan.innerText = 'Email', emailSpan.style.color = '#cfcfcf'
            }, 5500);
        }
    })
    })

    // For signup showing password icon


    hide.addEventListener('click', () => {
        hide.style.display = 'none'
        show.style.display = 'block'
        password.setAttribute('type', "text")
    })
    show.addEventListener('click', () => {
        show.style.display = 'none'
        hide.style.display = 'block'
        password.setAttribute('type', "password")
    })

    // For Login showing password icon

    loginHide.addEventListener('click', () => {
        loginHide.style.display = 'none'
        loginShow.style.display = 'block'
        loginPass.setAttribute('type', "text")
    })
    loginShow.addEventListener('click', () => {
        loginShow.style.display = 'none'
        loginHide.style.display = 'block'
        loginPass.setAttribute('type', "password")
    })


    go_to_signup.addEventListener('click', () => {
        login_pg.classList.add('transform1');
        sign_in_pg.classList.add('transform2');
    })


    go_to_login.addEventListener('click', () => {
        login_pg.classList.remove('transform1');
        sign_in_pg.classList.remove('transform2');
    })