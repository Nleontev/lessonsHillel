function isPalindrom(str){
    
    for(i = 0; i < Math.floor(str.length/2); i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }
    return true;
}

if(isPalindrom('whattahw')){
    alert('this is a palindrom');
}else{
    alert('this is not a palindrom');
}