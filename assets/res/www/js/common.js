$(document).ready(function(){
	
	//gnb
	$('.btn_gnb').on('click',function(){
		var gnb = $('.gnb');
		gnb.toggleClass('on');
		if(gnb.is('.on')){
			gnb.slideDown(150);
			$('.wrap').append('<span class="gnb_dim"></span>');
		}else{
			gnb.slideUp(50);
			$('.gnb_dim').remove();
		}
	});
	$('.gnb a').on('click',function(){
		$(this).closest('.gnb').slideUp(50).removeClass('on');
		$('.gnb_dim').remove();
	});
	

	//검색
	$('.srch_wrap .btn_srch_open').on('click',function(){
		$(this).closest('.srch_wrap').toggleClass('on');
	});
	$('.srch_wrap .btn_cls').on('click',function(){
		$(this).closest('.srch_wrap').removeClass('on');
	});

	//accordion
	$('.accordion').each(function(){
		var acdnBtn = $(this).find('a');
		acdnBtn.on('click',function(){
			$(this).closest('dt').toggleClass('on');
		});
	});
	
	// 견적보기 테이블 목록 열기
	$('.business_dl  .table_list').on('click',function(){
		$(this).parents('.business_dl').toggleClass('on');
	});
	$('.business_dl .btn_cls').on('click',function(){
		$(this).parents('.business_dl').removeClass('on');
	});

	//input, textarea 초기화
	var iptReset = $('.input_wrap .btn_reset');
	iptReset.on('click',function(){
		$(this).siblings('input , textarea').val('');
	});
	
});

//탭메뉴
$.fn.fnTab = function(clickCallback){
	var $id = $(this).attr('id');
	var $idNum = $id.replace('tab','');
	var tabContId = $('#tab_cont' + $idNum);
	var btn = $(this).find('a');
	var idx = $(this).find('li.on').index();
	tabContId.find('> .panel').hide().eq(idx).show();
	btn.on('click', function(e){
		var targetLink = $(this).attr('href')
		btn.parent().removeClass('on');
		$(this).parent().addClass('on');
		tabContId.find('> .panel').hide();
        $(targetLink).show();
        if(clickCallback) clickCallback();
		e.preventDefault();
	});
}

//레이어 팝업열기
function popupOpen(id){
	$(id).parent('.layer_wrap').css('display','block');
	var clientW = document.documentElement.clientWidth;
	var clientH = document.documentElement.clientHeight;
	var popupW = $(id).width();
	var popupH = $(id).height();
	
	$(id).css({
		'left' : (clientW-popupW)/2,
		'top' : (clientH-popupH)/2
	});
	$('body').bind('touchmove', function(e){e.preventDefault()}).addClass('stop_scroll');
}

//레이어 팝업닫기
function popupClose(e){
	$(e).parents('.layer_wrap:visible').hide();
	$('body').unbind('touchmove').removeClass('stop_scroll');
}