const characters =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordCountEl = document.getElementById("password-count");
const characterCountEl = document.getElementById("character-count");

const generatedPasswordsEl = document.getElementById("generated-passwords");

const popupEl = document.getElementById("popup");


const clamp = (number, min, max) => Math.min( Math.max(number, min), max );

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
 }

const popup = async (message) => {
    
}

function copyToClipboard(value)
{
    navigator.clipboard.writeText(value);

    popup('Copied password to Clipboard.');
}

function validateInputRange(inputEl, min, max)
{
    inputEl.value = clamp(inputEl.value, min, max);
}

function clearPreviousPasswords()
{
    generatedPasswordsEl.innerHTML = "";
}

function addNewPassword(newPassword)
{
    generatedPasswordsEl.innerHTML += '<p class="generated-password-field" onclick=copyToClipboard(this.innerHTML)>' 
                                        + newPassword 
                                        + '</p>';
}

function generatePasswords()
{
    clearPreviousPasswords();

    for (let i = 0; i < passwordCountEl.value; i++)
    {
        let newPassword = "";
        
        for (let j = 0; j < characterCountEl.value; j++)
        {
            let randomlyChosenCharacter = characters[ Math.floor( Math.random() * characters.length ) ];
            newPassword += randomlyChosenCharacter;
        }

        addNewPassword(newPassword);
    }
}