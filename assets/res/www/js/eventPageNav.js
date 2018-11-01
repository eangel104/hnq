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

    //page 정보
    var pageInfo = {
        "4.1":	"로그인-메인",
        "L_01_01.html":	"인트로",
        "L_01_02.html":	"로그인",
        "L_01_03.html":	"위치정보 이용 동의 팝업",
        "L_01_04.html":	"이용약관 ",
        "L_01_05.html":	"개인정보취급방침",
        "L_01_06.html":	"위치정보 이용약관 (팝업)",
        "L_01_07.html":	"설정",
        "L_01_08.html":	"메인페이지 화면 구성(영업사원)",
        "L_01_09.html":	"메인페이지 화면 구성(시공사)",
        "L_01_10.html":	"공지사항_목록",
        "L_01_11.html":	"공지사항_ 상세",
        "4.2:":"영업활동",
        "B_02_11.html":	"일정 / 업무",
        "B_02_12.html":	"일정 / 업무 등록",
        "B_02_13.html":	"일정 / 업무 수정",
        "B_02_21.html":	"거래처 정보 조회(거래처 특징)",
        "B_02_22.html":	"거래처 특징 입력",
        "B_02_23.html":	"거래처 정보 조회(샘플북 전달)",
        "B_02_24.html":	"거래처 정보 조회 화면(일자별 메모)",
        "B_02_25.html":	"거래처 정보 입력",
        "B_02_31.html":	"주문 현황 조회 ",
        "B_02_32.html":	"제품군별 현황 조회",
        "B_02_41.html":	"기상담관리 목록",
        "B_02_42.html":	"기상담관리 상세",
        "B_02_51.html":	"B2C 진도 관리 목록",
        "B_02_52.html":	"B2C 진도 관리 상세",
        "4.3":"견적보기",
        "E_03_11.html":	"단가표 조회",
        "E_03_21.html":	"재고조회 전체 직영점",
        "E_03_22.html":	"재고조회 전체 직영점(상세)",
        "E_03_31.html":	"상재 주문 주문요쳥(주문 기본 정보)",
        "E_03_32.html":	"상재 주문 주문요쳥(자재/부자재주문정보)",
        "E_03_33.html":	"상재 주문 주문요쳥(기타부자재주문정보)",
        "E_03_34.html":	"상재 주문 주문요쳥(주문내역리스트정보)",
        "E_03_35.html":	"상재 주문 거래처 조회 팝업",
        "E_03_36.html":	"상재 주문 주소 조회 팝업",
        "E_03_37.html":	"상재 주문 제품 조회 팝업(공통)",
        "E_03_41.html":	"간단 견적 가구",
        "E_03_42":"간단 견적 운영 상품 기기(팝업)",
        "E_03_43":"간단 견적 추가 비용 안내(팝업)",
        "E_03_44":"간단 견적 PS",
        "E_03_45":"간단 견적 PS 상세",
        "4.4":	"이슈관리",
        "I_04_01.html":	"이슈관리 - 조회",
        "I_04_03.html":	"이슈관리 - 리스트",
        "I_04_04.html":	"이슈관리 - 상세",
        "4.5":"승인관리",
        "A_05_01.html":	"승인요청내역 조회 실측 리스트",
        "A_05_02.html":	"승인요청내역 조회 시공 리스트",
        "A_05_03.html":	"시공내역조회 실측",
        "A_05_04.html":	"시공내역조회 시공",
        "A_05_05.html":	"시공내역조회 승인",
        "A_05_06.html":	"시공내역조회 반려",
        "4.6":"실측",
        "S_06_11.html":	"실측 리스트",
        "S_06_12.html":	"실측 리스트 검색",
        "S_06_13.html":	"실측 리스트 예약접수 > 미접수 실측",
        "S_06_14.html":	"실측 리스트 예약접수 > 신규 예약 접수",
        "S_06_15.html":	"실측 리스트 예약접수 > 배정관리",
        "S_06_21.html":	"실측 상세",
        "S_06_22.html":	"실측상세_현장도착(등록전)",
        "S_06_23.html":	"실측상세_현장도착(현장도착시간 등록 후)",
        "S_06_24.html":	"실측상세_실측완료",
        "S_06_26.html":	"실측상세_실측완료",
        "S_06_27.html":	"실측상세_실측완료 승인요청",
        "4.7":"시공",
        "C_07_11.html":	"시공리스트",
        "C_07_12.html":	"시공리스트 검색 ",
        "C_07_13.html":	"시공 리스트 주문접수 > 미접수 신고",
        "C_07_14.html":	"시공 리스트 주문접수 > 신규 주문 접수",
        "C_07_16.html":	"시공 리스트 주문접수 > 배정관리",
        "C_07_21.html":	"시공상세",
        "C_07_22.html":	"시공상세 실측지",
        "C_07_23.html":	"시공상세 현장정보",
        "C_07_24.html":	"시공상세 제품 정보",
        "C_07_25.html":	"시공상세 현장 이슈",
        "C_07_26.html":	"시공상세 이슈 상세",
        "C_07_27.html":	"시공상세_시공인원도착 (등록 전)",
        "C_07_28.html":	"시공상세_시공인원도착(인원도착 등록 후)",
        "C_07_29.html":	"시공상세_제품인수",
        "C_07_30.html":	"시공 상세 보양",
        "C_07_31.html":	"시공 상세 철거",
        "C_07_33.html":	"시공 상세 시공 완료",
        "C_07_34.html":	"시공 상세 고객 확인",
        "C_07_35.html":	"시공 상세 시공완료 승인 요청",
    };

    function init(){
        //event
        $("[data-event-page]").each(function(){
            $(this).off().on("click",function(e){
                console.log("Nav eventPage::",$(this).data("eventPage"),pageInfo[$(this).data("eventPage")]);
                console.log("Nav eventAnimat::",animation[$(this).data("eventAnimat")]);
                var option = { 
                    param:{ 'NAME' : $(this).data("eventPage")},
                    animation : (animation[$(this).data("eventAnimat")])?animation[$(this).data("eventAnimat")]:animation["def"], 
                    action : 'NEW_SCR',
                    // orient : 'PORT'
                }
                console.log(option);
                M.page.html($(this).data("eventPage"),option);
                // M.page.tab.html($(this).data("eventPage"),option);
            })
        });
        $("[data-event-back]").each(function(){
            $(this).off().on("click",function(e){
                console.log("back::");
                M.page.back();
                // M.page.tab.back();
            });
        });
    }

    //초기화 실행
    init();
}