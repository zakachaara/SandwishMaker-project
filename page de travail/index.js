
var display = [false,false,false,false,false,false,false,false];
function ShowHide($element, i ){
    if (display[i] == true){
        display[i] = false;
        (document.getElementById($element)).style.display = 'none';
    }else {
        display[i] = true;
        (document.getElementById($element)).style.display = 'block';
    }   
}