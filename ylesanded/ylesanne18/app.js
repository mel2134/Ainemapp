const formElement = document.querySelector("form")

const patterns = {
    firstName: /^[a-zA-ZöäüõÖÄÜÕ-]{2,}$/,
    lastName: /^[a-zA-ZöäüõÖÄÜÕ]{2,}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-.]+\.[a-zA-Z]{2,3}$/
};

for (let pat in patterns) {
    formElement[pat].addEventListener('keyup', e => {
        e.preventDefault();
        let field = e.target.value;
        let check = patterns[pat].test(field)
        formElement[pat].classList.add("border")
        formElement[pat].classList.add("border-danger")
        if (check){
            formElement[pat].classList.replace("border-danger","border-success")
        }
        else{
            formElement[pat].classList.replace("border-success","border-danger")
        }
    });
}