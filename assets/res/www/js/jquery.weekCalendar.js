/**
* @author dh.lee@ttb.co.kr
* @version 0.1
* @param {int} day 시작 주를 지정할수 있다. 0 은 현재 주 
* @param {function} clickCallback 클릭 이벤트 
* @param {function} workCallback 일당 
* @since 2018.10.30
* @description 설명
*/
$.fn.weekCalendar = function(params){
    // console.log("weekCalendar::",this);
    var param = $.extend({},{
        day:0,
        clickCallback:function(e){ console.log("clickCallback::",e);},
        workCallback:function(e){ console.log("workCallback::",e);},
    },params);

    //파라미터로 받은 태그 가 실제로 있는지 확인

    //한주의 헤더 생성
    function week(day){
        var m = moment().add(day * 7, 'days')// 0 이면 오늘 ;
        // var today = m.date();
        // console.log(m.format("YYYY년 MM월"));
        $("#weeksRange").text(m.format("YYYY년 MM월"));

        //날짜 변경 및 날짜 속성 부여 
        $(".daliy .date").each(function(index,el){
            // console.log(index,el);
            // console.log(today);
            //날짜 채우기
            var day = m.day(index).date();
            $(el).text(day);

            //부모 태그에 시간정보 넣기
            // console.log(m.day(index).format());
            $(el).parents("li").data("time",m.day(index).format());
            // console.log($(el).data("time"));
            // var today = moment.duration(moment(moment().format()).diff(m.day(index).format()));
            // console.log(moment().format(),m.day(index).format());
            // console.log(today);

            //현재 날짜에 포커스 클래스 추가하기
            // console.log(moment().unix(),m.day(index).unix());
            if(moment().unix() == m.day(index).unix()){
                // $(".daliy").children(".on").removeClass("on");
                $(el).parents("li").addClass("on");
            }else{
                $(el).parents("li").removeClass("on");
            }

            // 데이터 붙여 넣기
            $(".daliy .work").each(function(index,el){
                // console.log(index,el,$(el).parents("li").data("time"));
                param.workCallback(index,el,$(el).parents("li").data("time"))
            });
        });
    }

    //클릭이벤트 속성 부여
    $(".daliy li").off("click").on("click",function(e){
        // console.log("li",e);
        // console.log("li",this);
        // console.log($(this).data("time"));
        param.clickCallback(e,this,$(this).data("time"));
    });

    $("#prevWeek").off("click").on("click",function(e){
        // console.log("prevWeek::",e);
        week(--param.day);
    });

    $("#nextWeek").off("click").on("click",function(e){
        // console.log("nextWeek::",e);
        week(++param.day);
    });
    $("#todayWeek").off("click").on("click",function(e){
        // console.log("todayWeek::",e);
        param.day = 0;
        week(param.day);
    });


    week(param.day);
}