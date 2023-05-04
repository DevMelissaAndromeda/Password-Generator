const characters =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9','~','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']',',','|',':',';','<','>','.','?',
'/'];

const centeredBodyEl = document.getElementById('actual-body');
const passwordCountEl = document.getElementById('password-count');
const characterCountEl = document.getElementById('character-count');
const generatedPasswordsEl = document.getElementById('generated-passwords');


const clamp = (number, min, max) => Math.min( Math.max(number, min), max );


function popup(message)
{
    const old_PopupEl_Instance_To_Delete    = document.getElementById('popup');
    old_PopupEl_Instance_To_Delete          .remove();

    const   new_PopupEl_Instance            = document.createElement('h1');
            new_PopupEl_Instance            .textContent = message;
            new_PopupEl_Instance            .id = 'popup';
            new_PopupEl_Instance            .style.animation = 'popup 3s forwards';

    centeredBodyEl.appendChild(new_PopupEl_Instance);
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
    generatedPasswordsEl.innerHTML = '';
}

function addNewPassword(newPassword)
{
    const new_Generated_PasswordEl_Instance    = document.createElement('p');

    new_Generated_PasswordEl_Instance          .textContent = newPassword;
    new_Generated_PasswordEl_Instance          .className = 'generated-password-field';
    new_Generated_PasswordEl_Instance          .addEventListener('click', function() { copyToClipboard(newPassword); });
    
    generatedPasswordsEl.append(new_Generated_PasswordEl_Instance);
}

function generatePasswords()
{
    clearPreviousPasswords();

    for (let i = 0; i < passwordCountEl.value; i++)
    {
        let newPassword = '';
      
        for (let j = 0; j < characterCountEl.value; j++)
        {
            let randomlyChosenCharacter = characters[ Math.floor( Math.random() * characters.length ) ];
            newPassword += randomlyChosenCharacter;
        }

        addNewPassword(newPassword);
    }
}