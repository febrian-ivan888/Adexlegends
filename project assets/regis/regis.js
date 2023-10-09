window.onload = () => {
    let form = document.getElementById("registrationForm");
    let user = document.getElementById("username");
    let fName = document.getElementById("firstName");
    let lName = document.getElementById("lastName");
    let pass = document.getElementById("password");
    let passC = document.getElementById("passwordC");
    let email = document.getElementById("email");
    let date = document.getElementById("DOB");
    let agre = document.getElementById("agre");

    let passwordError = document.getElementById("passwordError");
    let passwordCError = document.getElementById("passwordErrorC");
    let emailError = document.getElementById("emailError");
    let DOBError = document.getElementById("DOBError");
    let agreError = document.getElementById("agreError");
    let reqError = document.getElementById("reqError");

    let passwordMsg = [];
    let passwordCMsg = [];
    let emailMsg = [];
    let DOBMsg = [];
    let agreMsg = [];

    let error = false;
    form.addEventListener('submit', (e) => {
        error = false;
        passwordMsg = [];
        passwordCMsg = [];
        emailMsg = [];
        DOBMsg = [];
        agreMsg = [];

        isEmpty(user.value);
        isEmpty(fName.value);
        isEmpty(lName.value);
        validPass();
        validPassC();
        validEmail();
        validDOB();
        validAgre();

        let wrong = false;
        emailError.innerText = '';
        passwordError.innerText = '';
        passwordCError.innerText = '';
        DOBError.innerText = '';
        agreError.innerText = '';
        reqError.innerText = '';

        if (emailMsg.length > 0) {
            emailError.innerText += emailMsg + '\n';
            wrong = true;
        }

        if (passwordMsg.length > 0) {
            for (p of passwordMsg) {
                passwordError.innerText += p + '\n';
            }
            wrong = true;
        }

        if (passwordCMsg.length > 0) {
            passwordCError.innerText += passwordCMsg + '\n';
            wrong = true;
        }

        if (DOBMsg.length > 0) {
            DOBError.innerText += DOBMsg + '\n';
            wrong = true;
        }

        if (agreMsg.length > 0) {
            agreError.innerText += agreMsg + '\n';
            wrong = true;
        }

        if (error == true) {
            reqError.innerText = '!Required fields cannot be empty';
            wrong = true;
        }
        e.preventDefault();

        if (!wrong) {
            alert("ADEX Account successfully created!");
            window.location.href = "index.html";
        }
    })


    function isEmpty(x) {
        if (x === '') error = true;
        else return false;
    }

    function hasUpper(x) {
        for (let i = 0; i < x.length; i++) {
            if (x[i].toUpperCase() == x[i]) {
                return true;
            }
        }
        return false;
    }

    function checkEmail(x) {
        for (let i = 0; i < x.length; i++) {
            if (x[i] == "@") {
                return true;
            }
        }
        return false;
    }

    function ageCalculator(input) {
        let birth = new Date(input.value);
        let month_diff = Date.now() - birth.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();

        return year - 1970;
    }

    function validEmail() {
        isEmpty(email.value);
        if (!checkEmail(email.value)) {
            emailMsg.push("!Email format invalid");
        }
    }

    function validPass() {
        isEmpty(pass.value);
        if ((pass.value).length < 8) {
            passwordMsg.push("!Password must be 8 letters or more");
        }
        if (!hasUpper(pass.value)) {
            passwordMsg.push("!Password must contain an uppercase letter");
        }
    }

    function validPassC() {
        isEmpty(passC.value);
        if (pass.value != passC.value) {
            passwordCMsg.push("!Confirmed password is different");
        }
    }

    function validDOB() {
        isEmpty(date.value);
        if (ageCalculator(date) < 18) {
            DOBMsg.push("!You need to be 18 years or older");
        }
        // DOBMsg.push(ageCalculator(date));
    }

    function validAgre() {
        if (!agre.checked) {
            agreMsg.push("!You must agree to the Terms and Conditions");
        }
    }
}