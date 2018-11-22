/**
* @author dh.lee@ttb.co.kr
* @since 2018.10.22
* @description 모든 페이지 에서 주로 사용되는 공통 모듈을 정의
*/
/**
* @author dh.lee@ttb.co.kr
* @version 0.2
* @param {object} pageData 페이지 이동시 전달할 데이터
* @since 2018.10.22
* @description 페이지 이동 이벤트 통합 관리
* 태그의 속성으로 이벤트를 제어 한다. 
* data-event-page : 이동할 페이지 정보 
* data-event-animat : 이동시 에니메이션 효과 정보
* data-event-back : 이전페이지로 이동
* version 0.2
* - data-event-data 기능 추가 구현
*   주의사항 data-event-data='{"no":1}' 형식처럼 '' 안에 데이터를 넣고 키는 "" 으로 감싸야만 한다. 
*   그래야 $(this).data("eventData") 호출시 객체로 자동 변환되어 넘어 온다. 
*/
function pageNav(pageData) {
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
                console.log("Nav eventData::",$(this).data("eventData"));
                var option = { 
                    param:$.extend({},{ 'NAME' : $(this).data("eventPage")},pageData,$(this).data("eventData")),
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

  /**
    * @author dh.lee@ttb.co.kr
    * @version 0.1
    * @since 2018.11.07
    * @description 모피어스 데이터 피커 공통화 
    */
$.fn.mDate = function(param){
    var defParam = $.extend({},{ 
        type : 'YMD',
        // initDate : moment().day(0).format("YYYYMMDD"), //이번주 첫번째 날짜
        initDate : moment().format("YYYYMMDD"), //현재 날짜
        startDate : '', 
        endDate : '',
        callback:null
    },param);

    // 이벤트 걸기 
    $(this).each(function(){
        console.log(this);
        $(this).off("click").on("click", function(){
            //M.pop.date 이용해서 date 선택창 노출
            console.log("date click",$(this));
            // 네이티브 데이트 피커를 호출 한다.
            // - HM12 // - HM24 // - YMD // - YM
            // : MMddAM (ex> 1130PM or 1130AM) : HHmm (ex> 2310)
            // : yyyyMMdd (ex> 20110102)
            // : yyyyMM (ex> 201101)
            // - MMYYYY : MMyyyy (ex> 012011)
            var that = this;
            M.pop.date({ 
                type : defParam.type,
                initDate : defParam.initDate, //현재 날짜 +1 하면 오늘 기준 내일 -1 하면 오늘기준 어제 
                startDate : defParam.startDate, 
                endDate : defParam.endDate,
                callback:function(result, option) {
                    console.log("date :: ",result, option,this);
                    // result :: { MM: "04", dd: "07", status: "SUCCESS", week: 6 ,yyyy: "2018"}
                    // 선택한 시간이 json 형태로 리턴 된다.
                    // - HM12 // - HM24 // - YMD
                    // : {"HH":"08","mm":"40","part":"AM"} : {"HH":"20","mm":"40"}
                    // : {"yyyy":"2010","MM":"01","dd":"01"}
                    // - YM : {"yyyy":"2010","MM":"01"}
                    // - MMYYYY : {"yyyy":"2010","MM":"01"} var year = result.yyyy;
        
                    if(result.status == "SUCCESS"){
                        console.log(moment(result.yyyy+result.MM+result.dd).format("YYYYMMDD"));
        
                        // nodeName : 실행할 함수 이름
                        var type = {
                            "INPUT":"val"
                        }
                        //input 인경우 값을 넣어준다. 
                        $(that)[type[that.nodeName]](moment(result.yyyy+result.MM+result.dd).format("YYYYMMDD"));
        
                        //콜백 실행
                        if(defParam.callback) defParam.callback(result,moment(result.yyyy+result.MM+result.dd).format("YYYYMMDD"));
                    }
                }   
            });
        });
    });
};

/**
* @author dh.lee@ttb.co.kr
* @version 0.1
* @since 2018.11.08
* @description 사인패드 유틸리티
*/
$.fn.signPad = function(param){
    var defParam = $.extend({},{
    },param);
    $(this).addClass("signature-pad--body").append("<canvas></canvas>");
    var canvas = $(this).children("canvas")[0];

    var signaturePad = new SignaturePad(canvas, {
        // backgroundColor: 'rgb(255, 255, 255)'
    });

    function resizeCanvas() {
        var ratio =  Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
        signaturePad.clear();
    }
    
    resizeCanvas();
    
    $(window).off("resize").on("resize",function(){
        resizeCanvas();
    });
    return {
        save: function(callback){
            if(callback){
                //empty signFlag, data
                callback(!signaturePad.isEmpty(),signaturePad.toDataURL());
            }
        },
        resize:function(){
            resizeCanvas();
        }
    }
}

/**
* @author hy.lee@ttb.co.kr
* @version 0.2
* @since 2018.11.08
* @description 사진 불러오기
* 이미지 불러오기 버튼을 selector로 사용
* 버튼 속성: `data-image-for`
* ul 속성: `data-image-list`
* 위 두 속성의 값이 같으면 해당 버튼이 해당 ul에 이미지를 뿌려준다.
*/
$.fn.camAlbum = function(param){
    var defParam = $.extend({},{
    },param);
    
    $(this).off("click").on("click", function(){
        var imageList = $('[data-image-list="' + $(this).attr("data-image-for") + '"]');
        var images = $(imageList).find("img");

        // 카메라, 앨범 선택 팝업
        M.pop.list({
            mode: "SINGLE",
            title: "프로필 사진",
            button: [],	// `취소` 버튼이 무조건 생성됨..
            list: [
                { title: "카메라", value: "camera" },
                { title: "갤러리", value: "album" }
            ],
            callback: function(buttonIdx, rowInfo, setting) {
                var non_images = $(images).filter("[src='../img/content/test_img.gif']");
                console.log(non_images);
                if(non_images.length < 1) {
                    M.pop.alert("사진을 더 이상 첨부 할 수 없습니다.");
                    return;
                }

                // 카메라
                if(rowInfo.value === "camera") {
                    M.media.camera({
                        path: "/Media",
                        mediaType: "PHOTO",
                        saveAlbum: true,
                        callback: function(status, result) {
                            if (status == 'SUCCESS') {
                                $(non_images[0]).attr("src", result.path);
                            } else {
                                // Error handling here..
                            }
                        }
                    });
                } 
                // 앨범
                else if(rowInfo.value === "album") {
                    M.media.picker({
                        mode: "MULTI",
                        media: "PHOTO",
                        // path: "/media",
                        maxCount: non_images.length,
                        column: 4,
                        detail: true,
                        callback: function(status, result) {
                            if(status === "SUCCESS") {
                                // 사진 등록
                                result.map(function(photo, index) {
                                    $(non_images[index]).attr("src", photo.path);
                                });
                            } else {
                                // Error handling here..
                            }
                        }
                    });
                }
            }
        });
    });

    // 이미지 클릭 시 원본 크기로 보여주기
    $("li a img").off("click").on("click", function() {
        console.log(this);
        if($(this).attr('src') === '../img/content/test_img.gif') {
            return;
        }
        $('#img_popup').find('img').attr('src', $(this).attr('src'));
        popupOpen('#img_popup');
    });
    
    // 등록한 사진 삭제
    $(".btn_delete").off("click").on("click", function() {
        $(this).siblings().children("img").attr("src", "../img/content/test_img.gif");
    });
}

/**
* @author dh.lee@ttb.co.kr
* @version 0.1
* @since 2018.11.21
* @description M.net.http.send 공통화 함수
*/
function httpSend(param){
    console.log("httpSend CALL::",param);
    var defParam = $.extend({},{
        path:null,
        data:{},
        successCallback:function(receivedData){console.log("** onSuccess", receivedData)},
        errorCallback:function(errCode, errMsg){console.log("** onError", errCode, errMsg);}
    },param);

    //검증 
    if(defParam.path == null){
        console.error("설정된 패스가 없습니다. 패스를 설정해 주세요");
        return;
    }

    M.net.http.send({
        server: "TEST_SERVER",
        path: defParam.path,
        method: "POST",
        timeout: 5000,
        data: defParam.data,
        success: function(receivedData) {
            defParam.successCallback(receivedData);
        },
        error: function(errCode, errMsg) {
            defParam.errorCallback(errCode, errMsg);
        },
        indicator: {
            show : true,
            message : '통신중입니다.',
            cancelable : false
        }
    });
}