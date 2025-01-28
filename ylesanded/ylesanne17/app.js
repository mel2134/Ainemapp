const formElement = document.querySelector("form")
const vastusekast = document.querySelector('.vastusekast');


formElement.addEventListener('submit', e => {
    e.preventDefault();
    let gender;
    const _firstName = firstName.value
    const _lastName = lastName.value
    const _email = email.value
    const _genderSelect = document.querySelector('input[name="gender"]:checked')
    if (_genderSelect){
        _gender = _genderSelect.value
    }
    else{
        _gender = "Vali sugu!"
    }
    const _city = city.value
    let _country = country.value
    if(_country === "Vali..."){
        _country = "Vali riik!"
    }
    const _password = password.value
    vastusekast.innerHTML = `
    Eesnimi: ${_firstName}<br>
    Perekonna nimi: ${_lastName}<br>
    Email: ${_email}<br>
    Sugu: ${_gender}<br>
    Linn: ${_city}<br>
    Riik: ${_country}<br>
    Parool: ${_password}
    `
});