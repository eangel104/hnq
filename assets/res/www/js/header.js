$(document).ready(function(){
    $.fn.header = function(argParam){
        /**
        * @author dh.lee@ttb.co.kr
        * @version 0.1
        * @param {string} type 메뉴 타입 으로 sales(영업사원), construction (시공사)로 구분 한다. 
        * @param {string} title 타이틀 문자 를 받는다. 
        * @param {string} page 헤터 종류로 main, menu(홈버튼이 있다.), 그외 가 있다. 헤더가 다 틀려서 만듬
        * @param {function} callback 콜백이 있는경우 헤더 태그를 인자로 넣어서 실행해 준다.  
        * @since 2018.10.22
        * @description 헤더 공통 모듈 
        * - 이벤트는  data-event 속성을 이용해서 연결된다. 
        *   -  data-event-page : 페이지 이동 이벤트 
        *   -  data-event-back : 이전 페이지 이동 이벤트
        * - empty.html 는 현재 네이게이션 페이지가 없는 것이다. 
        */
        //랜더러 설정
        //TODO: 전체 페이지 연결 미비
        var param = $.extend({},{
            type:null,
            title:null,
            headerType:null,
            callback:null
        },argParam)

        // 현재 페이지 이름 가져오기
        var path = location.pathname.split("/").pop();

        // 동일한 페이지 인경우에 대한 처리를 수행한다. 
        function pathFilter(tagString){
            //동일한 페이지 인경우 이벤트를 삭제 하고 해당 태그는 선택 클래스를 추가한다. 
            var $el = $(tagString);

            // console.log($el);
            // console.log($($el)[0].outerHTML);
            // console.log(path,$($el).find("a").data("eventPage"));

            if(path === $($el).find("a").data("eventPage")){
                $($el).find("a").removeAttr("data-event-page").addClass("gnb_on");
                // console.log($($el).find("a"),$($el)[0].outerHTML);
                return $($el)[0].outerHTML;
            }else{
                return tagString;
            }
        }

        // 화면 랜더링 설정파일 
        var config = {
            sales:{
                title:(param.title)? param.title : "영업활동",
                home:'L_01_08.html',//메인 페이지 정보
                nav:[
                    '<li class="yellow"><a href="#" data-event-page="B_02_11.html">일정/업무</a></li>',
                    '<li class="blue"><a href="#" data-event-page="E_03_21.html">상재단가조회</a></li>',
                    '<li class="blue"><a href="#" data-event-page="E_03_44.html">가구PS 간단견적</a></li>',
                    '<li class="yellow"><a href="#" data-event-page="B_02_21.html">거래처 정보</a></li>',
                    '<li class="blue"><a href="#" data-event-page="E_03_21.html">재고조회</a></li>',
                    '<li class="pink"><a href="#" data-event-page="I_04_01.html">이슈관리</a></li>',
                    '<li class="yellow"><a href="#" data-event-page="B_02_31.html">주문현황</a></li>',
                    '<li class="blue"><a href="#" data-event-page="E_03_31.html">주문요청</a></li>',
                    '<li class="green"><a href="#" data-event-page="S_06_11.html">실측관리</a></li>',
                    '<li class="yellow"><a href="#" data-event-page="B_02_41.html">기 상담관리</a></li>',
                    '<li class="blue"><a href="#" data-event-page="A_05_01.html">실측승인 관리</a></li>',
                    '<li class="green"><a href="#" data-event-page="C_07_11.html">시공관리</a></li>',
                    '<li class="yellow"><a href="#" data-event-page="B_02_51.html">B2C 진도관리</a></li>',
                    '<li class="blue"><a href="#" data-event-page="A_05_02.html">시공승인관리</a></li>',
                    '<li class="setting"><a href="#" data-event-page="L_01_07.html"><span>설정</span></a></li>',
                ].map(pathFilter)
                .join(""),
            },
            construction:{
                title:(param.title)? param.title : "시공",
                home:'L_01_09.html',//메인 페이지 정보
                nav:[
                    '<li class="green"><a href="#" data-event-page="S_06_11.html">실측관리</a></li>',
                    '<li class="green"><a href="#" data-event-page="C_07_11.html">시공관리</a></li>',
                    '<li class="setting"><a href="#" data-event-page="L_01_07.html"><span>설정</span></a></li>',
                ].map(pathFilter)
                .join(""),
            }
        };
        //헤더 태그 랜더링
        if(param.headerType == "main"){
            $(this).append($([
                '<h1 class="logo">Home &amp; Q</h1>',
                '<a href="#" class="btn_gnb">전체메뉴</a>',
                '<div class="gnb"><ul>'+config[param.type].nav+'</ul></div>',
                '<a href="#" class="page_prev" data-event-back>이전페이지</a>',
            ].join("")));
        }else if(param.headerType == "menu"){
            $(this).append($([
                '<h1 class="page_title">'+config[param.type].title+'</h1>',
                '<a href="#" data-event-page="'+config[param.type].home+'" class="btn_home">home</a>',
                '<a href="#" class="btn_gnb">전체메뉴</a>',
                '<div class="gnb"><ul>'+config[param.type].nav+'</ul></div>',
                '<a href="#" class="page_prev" data-event-back>이전페이지</a>',
            ].join("")));
        }else{
            $(this).append($([
                '<h1 class="page_title">'+config[param.type].title+'</h1>',
                '<a href="#" class="page_prev" data-event-back>이전페이지</a>'
            ].join("")));
        }

        //callback 실행
        (param.callback)?param.callback(this):"";
    }

    // $(".header").header("construction","영업활동");
});