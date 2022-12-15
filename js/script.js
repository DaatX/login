/*=============== SHOW HIDDEN - PASSWORD ===============*/

const showHiddenPass = (inputPass, inputIcon) => {
    const input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', () => {
        // Cambiar contraseña a texto
        if (input.type == 'password') {
            // Cambiar a texto
            input.type = 'text'

            // Añadir icono
            iconEye.classList.add('ri-eye-line')

            // Eliminar icono
            iconEye.classList.remove('ri-eye-off-line')

        } else {
            // Cambiar a contraseña
            input.type = 'password'

            // Eliminar icono
            iconEye.classList.remove('ri-eye-line')

            // Añadir icono
            iconEye.classList.add('ri-eye-off-line')
        }
    })

}

showHiddenPass('input-pass', 'input-icon')