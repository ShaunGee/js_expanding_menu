let normalMenu = document.getElementById('nav_menu');
let navMenuContainer = document.getElementById('hamburger_menu_container');
let hamburgerMenu = document.getElementById('hamburger_menu_container');

const hamburger_menu_lines = document.querySelectorAll('.hamburger_menu_line');
let hamburgerMenuStatus =true;

const popUpNavMenu = document.createElement('div');
const body = document.getElementsByTagName('body')[0];


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

        nav_transform();

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
        nav_transform();
        hamburgerMenuStatus=true;
        
        
    
}



function nav_transform(){
    
    popUpNavMenu.id = 'pop_up_menu';
    if(hamburgerMenuStatus && !body.contains(popUpNavMenu)){
  
        body.appendChild(popUpNavMenu);
        const [...menuElements] = document.getElementById('nav_menu').children;
        
        menuElements.forEach(element => {
            popUpNavMenu.appendChild(element);
        });
        
        
    }
    else if (!hamburgerMenuStatus && body.contains(popUpNavMenu)){

        body.removeChild(popUpNavMenu);
    }

}
//

