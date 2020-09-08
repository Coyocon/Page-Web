if(screen.width > 900){
    $(document).ready(function(){
        $('.slider').bxSlider({mode:'fade', controls:false, auto:true});
      });
}else{
    $(document).ready(function(){
        $('.slider').bxSlider({mode:'fade', controls:false, auto:true, pager:false});
      });

}
