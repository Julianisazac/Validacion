const formulario = document.getElementById('form')
const text = document.getElementById('text')
const email = document.getElementById('email')
const pass = document.getElementById('pass')
const datetime = document.getElementById('datetime')
const textarea = document.getElementById('textarea')
const select = document.getElementById('select')


const fechaHoraActual = new Date().toISOString().slice(0, 16);
datetime.value = fechaHoraActual


formulario.addEventListener('submit', e =>{
    e.preventDefault()


    validateInputs()
})




const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');


    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}


const setSuccess = elemento =>{
    const inputControl = elemento.parentElement
    const errorDisplay = inputControl.querySelector('.error')


    errorDisplay.innerText = ""
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}


const validarCorreo = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validarContraseña = pass =>{
    const re = /^.{8,}$/
    return re.test(pass)
}


const validarTexto = text => {
    const re = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]*$/
    return re.test(String(text))
}


const validateInputs = () =>{
    const textValue = text.value.trim()
    const emailValue = email.value.trim()
    const passValue = pass.value.trim()
    const textareaValue = textarea.value.trim()
    const selectValue = select.value.trim()


    if(textValue === ""){
        setError(text, 'No puedes dejar este campo vacio.')
    }else if(!validarTexto(textValue)){
        setError(text, 'No se permiten caracteres especiales.')
    }else{
        setSuccess(text)
    }


    if(emailValue === ""){
        setError(email, 'El campo correo electrónico debe de ser llenado.')
    }else if(!validarCorreo(emailValue)){
        setError(email, 'Ingresa un correo electrónico valido.')
    }else{
        setSuccess(email)
    }


    if(passValue === ""){
        setError(pass, 'El campo contraseña debe de ser llenado.')
    }else if(!validarContraseña(passValue)){
        setError(pass, 'La contraseña debe de tener al menos 8 caracteres.')
    }else{
        setSuccess(pass)
    }


    if(textareaValue === ""){
        setError(textarea, 'No puedes dejar este campo vacio')
    }else{
        setSuccess(textarea)
    }


    if(selectValue === "seleccionar"){
        setError(select, 'Debes de seleccionar una opción valida')
    }else{
        setSuccess(select)
    }
}
