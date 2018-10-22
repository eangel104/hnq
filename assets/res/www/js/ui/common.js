(function(window, undefined) {

M.onBack(function(e) {	
	if(M.info.stack().length == 1){
		M.pop.alert('앱을 종료하시겠습니까?', {
	        title   : '알림',
	        buttons : [ '확인', '취소'],
	        callback: function(index){
	        	if(index == 0){
	        		M.sys.exit();	
	        	}else{
	        		//
	        	}
	        }
		});
	}else{
		M.page.back();
	}
});


window.hasPage=function(pageName){
	var stack = M.info.stack();

    for( var i=0, len=stack.length; i<len; i++ ){
        var current = stack[i];
        if(current.key.indexOf(pageName) != -1){
           return true;
        }
    }

    return false;
}

window.removeStackByPageName=function(pageName, delay){
    if(delay != undefined){
        setTimeout(function(){
            __removeStackByPageName(pageName);
        }, delay);
    }else{
        __removeStackByPageName(pageName);
    }    
}


function __removeStackByPageName(pageName){
    var stack = M.info.stack();

    for( var i=0, len=stack.length; i<len; i++ ){
        var current = stack[i];
        if(current.key.indexOf(pageName) != -1){
            M.page.remove(current.key);
        }
    }
}


})(window);