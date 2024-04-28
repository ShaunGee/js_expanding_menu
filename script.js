let normalMenu = document.getElementById('nav_menu');
let hamburgerMenu = document.getElementById('hamburger_menu_container');

const hamburger_menu_lines = document.querySelectorAll('.hamburger_menu_line');
let hamburgerMenuStatus =true;

function menu_transform(){
    let screenWidth = window.innerWidth

    if (screenWidth <= 500){
        createHamburgerMenu();
    }
    if (screenWidth>500){
        largePageMenu()
    }


}

function largePageMenu(){
    normalMenu.style.display = 'flex';
    hamburgerMenu.style.display='none';
}

function createHamburgerMenu(){


    //make current menu disapear
    normalMenu.style.display = 'none';
    hamburgerMenu.style.display='flex';

}


menu_transform()
window.addEventListener('resize',()=>{
    menu_transform();
    
});

hamburgerMenu.addEventListener('click', (event)=>{

    
    if(hamburgerMenuStatus){
        hbMenuOpen();
    }
    else{
        hbMenuClose();
    }


    


});

function hbMenuOpen(){
   
        //remove middle line
        hamburger_menu_lines[1].style.display = 'none';

        //rotate lines
        hamburger_menu_lines[0].style.transform = 'rotate(50deg)'
        hamburger_menu_lines[2].style.transform = 'rotate(-50deg)'
    
        //move origin
        hamburger_menu_lines[0].style.transformOrigin = '10% 20%';
        hamburger_menu_lines[2].style.transformOrigin = '50% 90%';
        hamburgerMenuStatus = false;

        
    
}

function hbMenuClose(){
      
        //add middle line
        hamburger_menu_lines[1].style.display = 'block';

        //add lines
        hamburger_menu_lines[0].style.transform = 'rotate(0deg)'
        hamburger_menu_lines[2].style.transform = 'rotate(0deg)'
    
        //return origin
        hamburger_menu_lines[0].style.transformOrigin = '0';
        hamburger_menu_lines[2].style.transformOrigin = '0';
        hamburgerMenuStatus=true;
    
}



//

