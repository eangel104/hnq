/**
* @author dh.lee@ttb.co.kr
* @version 0.1
* @since 2018.10.22
* @description 페이지 이동 이벤트 통합 관리
* 태그의 속성으로 이벤트를 제어 한다. 
* data-event-page : 이동할 페이지 정보 
* data-event-animat : 이동시 에니메이션 효과 정보
*/
function pageNav() {
    // DEFALUT : 왼쪽으로 이동되는 슬라이드 효과(SLIDE_LEFT)
    // NONE : 애니메이션 효과 없음
    // SLIDE_LEFT : 왼쪽으로 이동되는 슬라이드 효과
    // SLIDE_RIGHT : 오른쪽으로 이동되는 슬라이드 효과
    // SLIDE_TOP : 위쪽으로 이동되는 슬라이드 효과
    // SLIDE_BOTTOM : 아래쪽으로 이동되는 슬라이드 효과
    // ZOOM_IN : 줌인 효과
    // ZOOM_OUT : 줌아웃 효과
    // FADE : 페이드 효과
    // MODAL_UP : 원본 화면은 고정되어 있고 대상 화면만 위쪽으로 이동되는 슬라이드 효과
    // MODAL_DOWN : 원본 화면은 고정되어 있고 대상 화면만 아래쪽으로 이동되는 슬라이드 효과
    var animation = {
        "def":"DEFALUT",
        "none":"NONE",
        "left":"SLIDE_LEFT",
        "right":"SLIDE_RIGHT",
        "top":"SLIDE_TOP",
        "bottom":"SLIDE_BOTTOM",
        "in":"ZOOM_IN",
        "out":"ZOOM_OUT",
        "fade":"FADE",
        "up":"MODAL_UP",
        "down":"MODAL_DOWN",
    };

    return{
        init:function(){
            //event
            $("[data-event-page]").each(function(){
                $(this).off().on("click",function(e){
                    console.log("Nav eventPage::",$(this).data("eventPage"),$(this).data("eventAnimat"));
                    console.log("Nav eventAnimat::",animation[$(this).data("eventAnimat")]);
                    var option = { 
                        param:{ 'NAME' : $(this).data("eventPage")},
                        animation : (animation[$(this).data("eventAnimat")])?animation[$(this).data("eventAnimat")]:animation["def"], 
                        action : 'NEW_SCR',
                        // orient : 'PORT'
                    }
                    console.log(option);
                    M.page.html($(this).data("eventPage"),option);
                })
            });
            $("[data-event-back]").each(function(){
                $(this).off().on("click",function(e){
                    console.log("back::");
                    M.page.back();
                });
            });
        }
    }
}