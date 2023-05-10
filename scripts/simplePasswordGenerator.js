const CHARACTERS =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9','~','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']',',','|',':',';','<','>','.','?',
'/'];


const CONTEXT_MENU = 'context-menu';


const el_centeredBody            = document.getElementById('actual-body');
const el_passwordCount           = document.getElementById('password-count');
const el_characterCount          = document.getElementById('character-count');
const el_generatedPasswords      = document.getElementById('generated-passwords');
const el_btnGeneratePasswords    = document.getElementById('btn-generatePasswords');


el_passwordCount.addEventListener('change', function() { validateInputRange(this, 1, 10); });
el_characterCount.addEventListener('change', function() { validateInputRange(this, 16, 32); });
el_btnGeneratePasswords.addEventListener('click', generatePasswords);



start();

function start()
{
    const el_inputFields = document.querySelectorAll('input');
    
    for (let i = 0; i <= el_inputFields.length; i++)
    {
        if (el_inputFields[i] === undefined)
            return;

        let savedValue = localStorage.getItem(el_inputFields[i].id);
        
        if (savedValue === null)
            savedValue = el_inputFields[i].min;

        el_inputFields[i].value = savedValue;
    }
}



function showContextMenu(message)
{
    const   old_showContextMenuEl_Instance_To_Delete    = document.getElementById(CONTEXT_MENU);
            old_showContextMenuEl_Instance_To_Delete    .remove();

    const   new_showContextMenuEl_Instance              = document.createElement('h1');
            new_showContextMenuEl_Instance              .textContent = message;
            new_showContextMenuEl_Instance              .id = CONTEXT_MENU;
            new_showContextMenuEl_Instance              .style.animation = `${CONTEXT_MENU} 3s forwards`;

    el_centeredBody.appendChild(new_showContextMenuEl_Instance);   
}

function clearPreviousPasswords()
{
    el_generatedPasswords.innerHTML = '';
}

function addNewPassword(newPassword)
{
    const new_Generated_PasswordEl_Instance    = document.createElement('p');

    new_Generated_PasswordEl_Instance          .textContent = newPassword;
    new_Generated_PasswordEl_Instance          .className = 'generated-password-field center';
    new_Generated_PasswordEl_Instance          .addEventListener('click', function() {
                                                                            copyToClipboard(newPassword);
                                                                            showContextMenu(`Copied password to Clipboard.`);
                                                                        });
    
    el_generatedPasswords.append(new_Generated_PasswordEl_Instance);
}

function generatePasswords()
{
    clearPreviousPasswords();

    for (let i = 0; i < el_passwordCount.value; i++)
    {
        let newPassword = '';
      
        for (let j = 0; j < el_characterCount.value; j++)
        {
            const randomlyChosenCharacter = CHARACTERS[ 
                Math.floor( 
                    Math.random() * CHARACTERS.length 
                    ) 
                ];

            newPassword += randomlyChosenCharacter;
        }

        addNewPassword(newPassword);
    }
}