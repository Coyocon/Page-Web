document.querySelector('.desple').addEventListener('click',()=>{
    document.querySelector('.contac').classList.toggle('show');
});

document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

/*document.querySelector('.conteiner').addEventListener('click',()=>{
    document.querySelector('.nav-menu').classList.remove('show');
});*/

if(screen.width > 700){
    $(document).ready(function(){
        $('.slider').bxSlider({mode:'fade', controls:false, auto:true});
      });
}else{
    $(document).ready(function(){
        $('.slider').bxSlider({mode:'fade', controls:false, auto:true, pager:false});
      });

}
