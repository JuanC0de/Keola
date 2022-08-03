const dataUsers = localStorage.getItem("Users")
const dataUsersObject = JSON.parse(dataUsers)

const validateUser = () => {
    console.log("Entramos a validar existencia")
    var existencia= false
    dataUsersObject.map(user=>{
        if(user.correo==document.getElementById("login").value){
            existencia= true;
            console.log("Existe el correo en localStorage")
        }
    })
    return existencia
}


function loginUser() {
    if (validateUser()) {
        dataUsersObject.map(user=>{
            if(user.correo==document.getElementById("login").value){
                var password=user.contraseña 
                var correoUsuario=user.correo
                if(document.getElementById("password").value==password && document.getElementById("login").value==correoUsuario){
                    alert ("Ha iniciado sesión exitosamente.");
                window.location="index.html";}
                else {
                    alert("Por favor ingrese, correo y usuario correctos.");
                }
            }
        })
        
    }
    else {
        alert(`Estimado usuario, su cuenta no existe. Por favor registrese y cree una cuenta.`);
    }
}