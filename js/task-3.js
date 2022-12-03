const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('input your password');

if(message === null ){
    alert('otmeneno');
} else if(message === ADMIN_PASSWORD
){alert('dobro poshalovat');}
else{
    alert('neverny parol')
}

