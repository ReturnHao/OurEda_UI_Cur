/**
 * Created by Return on 2/21/2017.
 */

$('input[type="text"], input[type="password"]').keyup(function () {
    var Hidden;
    if (this.id == 'User_id'){
        Hidden = document.getElementById('UIn_tips');
    }
    if (this.id == 'Pswd_id'){
        Hidden = document.getElementById('UPs_tips');
    }
    if (this.id == 'Valid_id'){
        Hidden = document.getElementById('Val_tips');
    }
    if (!$(this).val() == ''){
        Hidden.style.display = 'none';
    }
    else{
        Hidden.style.display = 'block';
    }
});

function Remember() {
    var Check = document.getElementById('Checkbox_id');
    if (Check.style.backgroundColor == 'rgb(150, 165, 180)'){
        Check.style.backgroundColor = 'ghostwhite';
    }
    else{
        Check.style.backgroundColor = 'rgb(150, 165, 180)';
    }
}