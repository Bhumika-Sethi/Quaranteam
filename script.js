const hamIcon = document.getElementsByClassName("ham-icon")[0];
const navItems = document.getElementsByClassName("nav-items")[0];
var count = 0;
hamIcon.addEventListener('click', () => {
    count++;
    if(count%2==0){
        navItems.style.display = 'none';
    }
    else{
        navItems.style.display = 'block';
    }
   
});

