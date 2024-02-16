const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generatePassword () {
    
    let password1 = ''; //let password1 be empty input
    let password2 = ''; //let password2 be empty input
    
    for (let i = 0; i < 15; i ++) { //generate the random string and numbers for password1 and password2
    password1 += characters[Math.floor(Math.random() * characters.length)]
    password2 += characters[Math.floor(Math.random() * characters.length)]
    
    document.getElementById('password1-el').textContent = password1; //get password1 from html and set it to password1
    document.getElementById('password2-el').textContent = password2; //get password2 from html and set it to password2
}
}

