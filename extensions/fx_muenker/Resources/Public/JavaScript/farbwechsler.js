var ismobile = false;
if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width() < 991) {
  ismobile = true;
}
$(document).ready(function(){
	
	$('.PViewer .product_color:first').addClass('colorpicked').show();
	$('.colors li').click(function() {
		var id = $(this).attr('id').replace('article_id_','');
		$('.colorpicked').removeClass('colorpicked');
		$('.PViewer .product_color').hide();
		$('#article_'+id).addClass('colorpicked').show();
	});
	//	---------------------------------------------------------------------------------------------	
	// 	Infobox
	//	---------------------------------------------------------------------------------------------
    if(ismobile) {
        $(".ral_info").click(function() {
            if($(this).hasClass('active')) {
                 $(".ral_infocontent").fadeOut(200);
                $(".box").fadeIn(200);
                $(".colorwave2").fadeIn(1000);
                $(this).removeClass('active');
            } else {
                $(".ral_infocontent").fadeIn(200);
                $(".box").fadeOut(200);
                $(".colorwave2").fadeOut(200);
                $(this).addClass('active');
            }
        }); 
    } else {
       $(".ral_info").hover(
			  function () {
				// $(".view_navi").stop().animate({ right: 40}, 200,  function () {
					$(".ral_infocontent").fadeIn(200);
					$(".box").fadeOut(200);
					$(".colorwave2").fadeOut(200);
					// });
			  },
			  function () {
				// $(".view_navi").stop().animate({ right: 40}, 200,  function () {
					$(".ral_infocontent").fadeOut(200);
					$(".box").fadeIn(200);
					$(".colorwave2").fadeIn(1000);
					// });
				}
			); 
    }
		

	//	---------------------------------------------------------------------------------------------	
	// 	Settings for Cycle
	//	---------------------------------------------------------------------------------------------		
	$('.loader').fadeOut(200);

	//	---------------------------------------------------------------------------------------------	
	// 	Switch Position
	//	---------------------------------------------------------------------------------------------	
		$('.s_neg').addClass("selected", 1000);
		$('.negativ').show();
		$('.positiv').hide();
		$('.s_neg').click(function() {
			$('.selected').removeClass("selected", 1000);
			$(this).addClass("selected", 1000);
			$('.switcher').fadeIn(300, function() {
				$('.negativ').fadeIn(0);
				$('.positiv').fadeOut(0, function() {
					$('.switcher').fadeOut(300);
					$('.positiv').hide();
					});
				});
			});	

		$('.s_pos').click(function() {
			$('.selected').removeClass("selected", 1000);
			$(this).addClass("selected", 1000);
			$('.switcher').fadeIn(300, function() {
				$('.positiv').fadeIn(0);
				$('.negativ').fadeOut(0, function() {
					$('.switcher').fadeOut(300);
					$('.negativ').hide();
					});
				});		
			});
			
	//	---------------------------------------------------------------------------------------------	
	// 	Switch Typ
	//	---------------------------------------------------------------------------------------------	
		$('.s_2d').click(function() {
			$('.s_3d').animate({backgroundPosition: '0px -48px'});
			$('.s_2d').animate({backgroundPosition: '0px -48px'});	
			$('.title_color').fadeOut(500);
			$('.colorpicked').hide();
			$('.cad').fadeIn(500);
			$(this).addClass('aktiv');
			$('.s_3d').removeClass('aktiv');
			$('.colorwave2').fadeOut(200);
			$(".ral_info").fadeOut(200);
			
			
			return false;  
			});
			
		$('.s_3d').click(function() {
			$('.s_3d').animate({backgroundPosition: '0px 0px'});
			$('.s_2d').animate({backgroundPosition: '0px 0px'});	
			$(this).addClass('aktiv');
			$('.cad').hide();
			$('.colorpicked').fadeIn(500);
			$('.s_2d').removeClass('aktiv');
			$('.title_color').fadeIn(500);
			$('.colorwave2').fadeIn(200);
			$(".ral_info").fadeIn(200);
			return false; 
		});


	$(function() {
      if(!ismobile) {
            $(".colors").hover(
                function() {
                $(".colors li").stop().animate({"padding-top": "15px"}, 100);
                },
                function() {
                    $(".colors li").stop().animate({"padding-top": "0"}, 500);
                });	
            $(".colors li").hover(function(){
                    $(this).stop().animate({"padding-top": "40px"}, 100);
                },
                function() {
                    $(this).stop().animate({"padding-top": "15px"}, 500);
            });  
          
      }
 
	});

});