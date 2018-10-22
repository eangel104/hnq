$(document).ready(function(){
    $.fn.header = function(type,title){
        /**
        * @author dh.lee@ttb.co.kr
        * @version 0.1
        * @since 2018.10.22
        * @description 헤더 공통 모듈 
        * - 이벤트는  data-event 속성을 이용해서 연결된다. 
        *   -  data-event-page : 페이지 이동 이벤트 
        *   -  data-event-back : 이전 페이지 이동 이벤트
        * - empty.html 는 현재 네이계이션 페이지가 없는 것이다. 
        */

        //페이지 설정 
        var page = {
            
        }
        //랜더러 설정
        var config = {
            sales:{
                title:(title)? title : "영업활동",
                nav:[
                    "<li><a href='#' data-event-page='empty.html'>일정/업무</a></li>",
                    "<li><a href='#' data-event-page='empty.html'>거래처정보</a></li>",
                    "<li><a href='#' data-event-page='empty.html'>주문현황</a></li>",
                    "<li><a href='#' data-event-page='empty.html'>기상담관리</a></li>",
                    "<li><a href='#' data-event-page='empty.html'>B2C진도관리</a></li>",
                    "<li><a href='#' data-event-page='empty.html'>단가표조회</a></li>",
                    "<li><a href='#' data-event-page='empty.html'>재고조회</a></li>",
                    "<li><a href='#' data-event-page='empty.html'>주문요청</a></li>",
                    "<li><a href='#' data-event-page='empty.html'>간단견적</a></li>",
                    "<li><a href='#' data-event-page='empty.html'>이슈관리</a></li>",
                    "<li><a href='#' data-event-page='empty.html'>실측승인관리</a></li>",
                    "<li><a href='#' data-event-page='empty.html'>시공승인관리</a></li>",
                ].join("")
            },
            construction:{
                title:(title)? title : "시공",
                nav:[
                    "<li><a href='#' data-event-page='empty.html'>실측관리</a></li>",
                    "<li><a href='#' data-event-page='empty.html'>시공관리</a></li>",
                ].join(""),
            }
        }
        //헤더 태그 랜더링
        var $header = $('<h1 class="page_title">'+config[type].title+'</h1><a href="#n" class="btn_gnb">전체메뉴</a><div class="gnb"><ul>'+config[type].nav+'</ul></div><a href="#n" class="page_prev" data-event-back>이전페이지</a>');
        $(this).append($header);

        //event
        $("[data-event-page]").each(function(){
            $(this).off().on("click",function(e){
                console.log("dasdf",$(this).data("eventPage"));
                M.page.back();
            })
        });
        $("[data-event-back]").each(function(){
            $(this).off().on("click",function(e){
                M.page.back();
            })
        });
    }

    $(".header").header("construction");
});