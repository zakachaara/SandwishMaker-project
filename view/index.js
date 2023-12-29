
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
var dis = false;
function ShowHideSeed(){
    if (dis == true){
        dis = false;
        (document.getElementById('sd')).style.display = 'none';
        (document.getElementById('sdd')).style.display = 'none';
    }else {
        dis = true;
        (document.getElementById('sd')).style.display = 'block';
        (document.getElementById('sdd')).style.display = 'block';
    }   
}
