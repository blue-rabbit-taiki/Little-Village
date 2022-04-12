
// Full screen navigation

$(function(){

    $('.openNav').click(function(){
        $('#myNav').css('width','100%');
    });

    $('.closeNav').click(function(){
        $('#myNav').css('width','0');
    });



});

// slider activity

$(function(){

    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var slideCount = $('#slider ul li').length; 
    //the number of #slider is 4

    var slideULWidth = slideCount * slideWidth;

    $('#slider ul').css({width:slideULWidth , height:slideHeight , marginLeft: -slideWidth});

    $('#slider').css({width:slideWidth , height:slideHeight});

    $('#slider ul li').last().prependTo('#slider ul');

    function moveLeft(){
        $('#slider ul').animate({
            left:slideWidth
        },'slow', function(){
            $('#slider ul li').last().prependTo('#slider ul');
            $('#slider ul').css('left' , '');
        });
    }

    function moveRight(){
        $('#slider ul').animate({
            left:-slideWidth
        },'slow', function(){
            $('#slider ul li').first().appendTo('#slider ul');
            $('#slider ul').css('left' , '');
        });
    }

    $('a.control_prev').click(function(){
        moveLeft();
    });

    $('a.control_next').click(function(){
        moveRight();
    });

});

// tabbing cafe


$(function(){

    $('#lunch_button').click(function(){
        openCafe('#lunch',this,'#a09c87');
    });

    $('#takeout_button').click(function(){
        openCafe('#takeOut',this,'#a09c87');
    });

    function openCafe(Cafe, element , color){
    
        var i , tabcontent , tablink;

        tabcontent= $('.tabcontent');

        for(i = 0; i < tabcontent.length; i++){
            tabcontent.eq(i).css('display','none');
        }

        tablink= $('.tablink');

        for(i = 0; i < tablink.length; i++){
            tablink.eq(i).css('background','""');
        }

        $(Cafe).css('display', 'block');
        $(Cafe).css('text-align', 'center');
        $(element).css('background' , color);
        // ↑ this is "parameter" no strings
        

    }
});

$(function(){
    $('#lunch_button').click(function(){
        $('#takeout_button').css('background' , '#d6d2b7');
    });

    $('#takeout_button').click(function(){
        $('#lunch_button').css('background' , '#d6d2b7');
    });
});

$(function(){

    $('#vegitable_button').click(function(){
        product('#vegitable',this,'#a09c87');
    });

    $('#fruit_button').click(function(){
        product('#fruit',this,'#a09c87');
    });

    $('#flower_button').click(function(){
        product('#flower',this,'#a09c87');
    });

    $('#sweet_button').click(function(){
        product('#sweet',this,'#a09c87');
    });

    function product(item , element , color){
    
        var i , tabcontent2 , tablink2;

        tabcontent2= $('.tabcontent2');

        for(i = 0; i < tabcontent2.length; i++){
            tabcontent2.eq(i).css('display','none');
        }

        tablink2= $('.tablink2');

        for(i = 0; i < tablink2.length; i++){
            tablink2.eq(i).css('background','""');
        }

        $(item).css('display', 'grid');

        $(element).css('background' , color);
        // ↑ this is "parameter" no strings
        
        


        // $('.menu_space').hover(function(){
        //     $('.c-section-5').fadeIn(3000);
        // });

    }

    

    // tabbing product

    $('#vegitable_button').click();

    $(function(){
        $('#vegitable_button').click(function(){
            $('#fruit_button').css('background' , '#d6d2b7');
            $('#flower_button').css('background' , '#d6d2b7');
            $('#sweet_button').css('background' , '#d6d2b7');
        });
    
        $('#fruit_button').click(function(){
            $('#vegitable_button').css('background' , '#d6d2b7');
            $('#flower_button').css('background' , '#d6d2b7');
            $('#sweet_button').css('background' , '#d6d2b7');
        });

        $('#flower_button').click(function(){
            $('#vegitable_button').css('background' , '#d6d2b7');
            $('#fruit_button').css('background' , '#d6d2b7');
            $('#sweet_button').css('background' , '#d6d2b7');
        });

        $('#sweet_button').click(function(){
            $('#vegitable_button').css('background' , '#d6d2b7');
            $('#fruit_button').css('background' , '#d6d2b7');
            $('#flower_button').css('background' , '#d6d2b7');
        });

    });


});

// fadeIn fadeOut diary
$(function(){

    $('.diary_btn').click(function(){
        $('.d-section-2').fadeIn(3000);
        $('.d-section-2').css('display' , 'grid');
    });

    $('.d-s2-box1').hover(function(){
        $('.d-s2-box3 p').fadeIn('slow');
        $('.d-s2-box5 p').fadeOut('slow');
    });

    $('.d-s2-box6').hover(function(){
        $('.d-s2-box3 p').fadeOut('slow');
        $('.d-s2-box5 p').fadeIn('slow');
        $('.d-s2-box7 p').fadeOut('slow');
    });

    $('.d-s2-box8').hover(function(){
        $('.d-s2-box5 p').fadeOut('slow');
        $('.d-s2-box7 p').fadeIn('slow');
        $('.d-s2-box12 p').fadeOut('slow');
    });

    $('.d-s2-box10').hover(function(){
        $('.d-s2-box7 p').fadeOut('slow');
        $('.d-s2-box12 p').fadeIn('slow');
    });

});