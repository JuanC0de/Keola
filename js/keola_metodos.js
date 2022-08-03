//Crear objeto users
var users = []


const agregarUser = () => {
    //console.log(users.find(document.getElementById("correo").value))
    var existencia= false
    users.map(user=>{
        if(user.correo==document.getElementById("correo").value){
            existencia= true;
            console.log(existencia)
        }
    })
    if (!existencia) {
        const nuevoUser = new Object()
        nuevoUser.nombre = document.getElementById("nombre").value
        nuevoUser.apellidos = document.getElementById("apellido").value
        nuevoUser.correo = document.getElementById("correo").value
        nuevoUser.contraseña = document.getElementById("password").value
        //nuevoUser.registro= document.getElementById("").value
        //nuevoUser.fechaNacimiento= document.getElementById("").value
        //nuevoUser.direccion= document.getElementById("").value
        //agregar a users
        alert(`Bienvenido ${nuevoUser.nombre} su usuario ${nuevoUser.correo} ha sido creado exitosamente`)
        users.push(nuevoUser)
        console.log(users)
        //window.location="iniciosesion.html";
    } else {
        let nombre = document.getElementById("nombre").value
        alert(`Estimado ${nombre}, su cuenta ya existe. Por favor inicia sesión`);
    }

}

const login = (props) => {
    const [correo, contraseña] = props
    const estado = false
    users.forEach(user => {
        if (user.correo === correo) {
            const respuesta = user.contraseña === contraseña ? "Registro exitoso" : "Contraseña incorrecta";
            return respuesta;
        }
    })
    if (estado == false) {
        return "Cuenta no existe"
    }
}