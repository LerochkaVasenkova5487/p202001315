
jQuery(document).ready(function($) {



jQuery(document).ready(function($) {


	$( ".pop3477" ).click(function(e) {
		e.preventDefault();
		$( ".forma .form-wrap,.overlay_form" ).fadeIn( "slow")
	});

	$( ".overlay_form,.close_btn" ).click(function(e) {
		e.preventDefault();
		$( ".forma .form-wrap,.overlay_form" ).hide("slow")
	});

	$( ".close_btn2" ).click(function(e) {
		e.preventDefault();
		$( ".forma .form-wrap,.overlay_form" ).hide("slow")
	});


 


	$("a.scrollToId").mPageScroll2id();
	$('input,textarea').focus(function() {
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input,textarea').blur(function() {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		closeOnBgClick: false,
		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.multiple-items').slick({
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [{
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});


	// СѓР±РёСЂР°РµРј placeholder РїСЂРё РЅР°Р¶Р°С‚РёРё
	$('input,textarea').focus(function() {
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input,textarea').blur(function() {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});


	if (document.location.hash != "") {
		var hash = document.location.hash;
		hash = hash.replace(/\s/g, "_");
		hash = hash.replace(/&/g, "");
		hash = hash.replace(/%20/g, "_");
		hash = hash.replace("#", "");
		if ($('[data=' + hash + ']').length > 0) {
			// return false;
			//console.log(" СЃСѓС‰РµСЃС‚РІСѓРµС‚");
		} else {
			//console.log(" РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚");
			isset_product(hash);
		}
		$("div[data=" + hash + "] .product").css("box-shadow", "2px 2px 6px #FF4770, -2px -2px 6px #FF4770, -2px 2px 6px #FF4770, 2px -2px 6px #FF4770");
		$("div[data=" + hash + "]").attr('id', hash);
		$.scrollTo('#' + hash, 800, {
			offset: -80
		});
		// $('body').animate({scrollTop: $("div[data="+hash+"]").offset().top-100}, 800);
		// return false;
	}

	var popOverSettings = {
		selector: '.bs-component [data-toggle="popover"]'
	};

	$('body').popover(popOverSettings);


	$(".view-descr").click(function() {
		var ariaid = $(this).attr("aria-describedby");
		if ($(this).attr("aria-describedby")) {
			$(this).text("ПОСМОТРЕТЬ ОПИСАНИЕ");
		}
		if (!$("div#" + ariaid + "").is(".popover.fade.bottom.in")) {
			$(this).text("СКРЫТЬ ОПИСАНИЕ");
		}
	});



	$('#cart-modal ').on('click', '.btn-del', function(e){
		e.preventDefault();
		var product_id = $(this).data('product_id');
		delete_product_in_cart(product_id);
		return false;
	});
	$(".backing").click(function(e) {
		e.preventDefault();
		console.log("backing");
		var magnificPopup = $.magnificPopup.instance;
		magnificPopup.close();
		return false;
	});



		function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").text( pad(hrs));
		$(".timer .minutes").text( pad(min));
		$(".timer .seconds").text( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) { return ('00'+s).substr(-2) }
	update();








});

});