const characters =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordCount = document.getElementById("password-count");
const characterCount = document.getElementById("character-count");

const generatedPasswords = document.getElementById("generated-passwords");


function clearPreviousPasswords()
{
    generatedPasswords.innerHTML = "";
}

function addNewPassword(newPassword)
{
    let generatedPasswordField = document.createElement("generated-password-field").textContent = newPassword;
    generatedPasswords.append(generatedPasswordField);
}

function generatePasswords()
{
    clearPreviousPasswords();

    for (let i = 0; i < passwordCount.value; i++)
    {
        let newPassword = "";
        
        for (let j = 0; j < characterCount.value; j++)
        {
            let randomlyChosenCharacter = characters[ Math.floor( Math.random() * characters.length ) ];
            newPassword += randomlyChosenCharacter;
        }

        addNewPassword(newPassword);
    }
}