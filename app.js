function login(){ 
    var username; 
    var password; 
    var txtUsername; 
    var txtPassword; 
    txtUsername = document.getElementsByName("txtUsername")[0]; 
    txtPassword = document.getElementsByName("txtPassword")[0]; 
    username = txtUsername.value; 
    password = txtPassword.value;  
   
    if (username=="clara.reyna" && password=="1234"){  
    window.location.replace("https://clara-reyna.github.io/paginaInicio.html");
    } else { 
    alert("El valor ingresado en usuario y/o contraseña es incorrecto"); 
    }}
