//Crear objeto de objetos que contendrá la información de los usuarios que se registren
const dataUsers = localStorage.getItem("Users")
const dataUsersObject = JSON.parse(dataUsers)
var infoUsers = dataUsersObject==null ? []: dataUsersObject;

//Validar usuario de especialista
const validateUser = () => {
    console.log("Entramos a validar existencia")
    var existencia= false
    dataUsersObject.map(user=>{
        if(user.correo==document.getElementById("emailMed").value){
            existencia= true;
            console.log(existencia)
        }
    })
    return existencia
}
//Validar usuario de pacientes 
const validatePaciente= () => {
    console.log("Entramos a validar existencia")
    var existencia= false
    dataUsersObject.map(user=>{
        if(user.correo==document.getElementById("email").value){
            existencia= true;
            console.log(existencia)
        }
    })
    return existencia
}

const saveDataMedico = () => {
    //Verificación de existencia de usuario
    let existUser = infoUsers==null || infoUsers.length==0 ? false:validateUser();
    //Guardar datos del nuevo usuario en infoUsers
    if (!existUser) {
        const nuevoUser = new Object()
        nuevoUser.nombre = document.getElementById("nomMed").value
        nuevoUser.apellidos = document.getElementById("apellMed").value
        nuevoUser.correo = document.getElementById("emailMed").value
        nuevoUser.contraseña = document.getElementById("numIdMed").value
        //nuevoUser.registro= document.getElementById("").value
        //nuevoUser.fechaNacimiento= document.getElementById("").value
        //nuevoUser.direccion= document.getElementById("").value
        //agregar a users
        alert(`Bienvenido ${nuevoUser.nombre} su usuario ${nuevoUser.correo} ha sido creado exitosamente`)
        infoUsers.push(nuevoUser)
        console.log(infoUsers)
        infoToJSON()
        window.location="iniciosesion.html"
    } else {
        let nombre = document.getElementById("nomMed").value
        alert(`Estimado ${nombre}, su cuenta ya existe. Por favor inicia sesión`);
    }

}

const saveDataPaciente = () => {
    //Verificación de existencia de usuario
    let existUser = infoUsers==null || infoUsers.length==0 ? false:validateUser();
    //Guardar datos del nuevo usuario en infoUsers
    if (!existUser) {
        const nuevoUser = new Object()
        nuevoUser.nombre = document.getElementById("nombre").value
        nuevoUser.apellidos = document.getElementById("apellido").value
        nuevoUser.correo = document.getElementById("email").value
        nuevoUser.contraseña = document.getElementById("contraseña").value
        //nuevoUser.registro= document.getElementById("").value
        //nuevoUser.fechaNacimiento= document.getElementById("").value
        //nuevoUser.direccion= document.getElementById("").value
        //agregar a users
        alert(`Bienvenido ${nuevoUser.nombre} su usuario ${nuevoUser.correo} ha sido creado exitosamente`)
        infoUsers.push(nuevoUser)
        console.log(infoUsers)
        infoToJSON()
        window.location="index.html"
    } else {
        let nombre = document.getElementById("nomMed").value
        alert(`Estimado ${nombre}, su cuenta ya existe. Por favor inicia sesión`);
    }
}

const infoToJSON = () =>{
    let dataToJSON = JSON.stringify(infoUsers)
    localStorage.setItem("Users", dataToJSON)
    console.log(dataToJSON)
}

const infoToObject = () => {
    localStorage.getItem("Users")
}
