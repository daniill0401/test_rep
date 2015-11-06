
        $(document).ready(function() {

        var height = document.documentElement.clientHeight;

        	$('div[class^=fon]').css ({'height': height, 'width': document.documentElement.clientWidth});

           var top_1 = $(window).scrollTop();           
           var id, a;
          

        $(window).scroll(function(){

        	        var top_2 = $(window).scrollTop();

        	        
        	        if (top_2-top_1>0)  {  

        	        	var m = 1;

                       if (Math.ceil($(window).scrollTop()/height)+1*m != a)  {

      	     	      a = Math.ceil($(window).scrollTop()/height)+1*m;

 
             	       id = '.fon_' + (Math.ceil($(window).scrollTop()/height)+1*m);


                   $('html,body').animate({ scrollTop: $(id).offset().top }, 600);

                     setTimeout( function () { top_1 = $(window).scrollTop();}, 600);
                   

               }

        	        } 

                      if (top_2-top_1<0) 

        	         {

        	         	var m = 0;

        	         if (Math.floor($(window).scrollTop()/height)+1*m != a)  {

      	     	a = Math.floor($(window).scrollTop()/height)+1*m;


         	       id = '.fon_' + (Math.ceil($(window).scrollTop()/height)+1*m);


                   $('html,body').animate({ scrollTop: $(id).offset().top }, 600);

                     setTimeout( function () { top_1 = $(window).scrollTop();}, 600);
                   

               }

        	         }
      	     

});

var name, tel;

    $('#first_form_but').click(function()  {

         name = document.getElementById('name').value;
         tel = document.getElementById('tel').value;
         var popupInner = document.getElementsByClassName("popup")[0];

         
            if (name&&tel)  {

             $('.popup').slideDown(400);
         document.getElementById('change_name').innerHTML = name;
         document.getElementById('change_tel').innerHTML = tel;

         $('.popup p:not last').css({'margin-top':'40px'});


       }

       else {
                $('.back_popup').slideDown(400);
             setTimeout(function(){ $('.back_popup').slideUp(400); }, 1300)
       }
 
    });

        $('.round, .triangle').click(function() {

                      $('.popup').slideUp(400);
                      document.getElementById('name').value = '';
                      document.getElementById('tel').value = '';

        });



         
       }); 