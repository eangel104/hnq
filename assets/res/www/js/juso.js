/**
 * result of properties: https://www.juso.go.kr/addrlink/devAddrLinkRequestGuide.do?menu=roadApi
 * 
 * 사용법 예시
 * juso(1, 10, '디지털로27라길')
        .then(function(result){
            var errCode = result.results.common.errorCode;
            var errDesc = result.results.common.errorMessage;
            if(errCode != "0"){
                alert(errCode + "=" + errDesc);
            }else{
                if(result != null){
                    // 데이터 처리..
                }
            }
        })
        .catch(function(xhr, status, error){
            alert("에러발생"); // AJAX 호출 에러
        });
    });
 *
 * @param {number} currentPage
 * @param {number} countPerPage
 * @param {string} keyword 검색어
 * @returns promise
 */
function juso(currentPage, countPerPage, keyword){
    return $.ajax({
        url:"http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do",
        type: "post",
        data: {
            currentPage: (currentPage) ? currentPage : 1,
            countPerPage: (countPerPage) ? countPerPage : 10,
            keyword: keyword,
            confmKey: "U01TX0FVVEgyMDE2MTAxMDExMjcyMTE1NjMx",   // 한화에서 발급 받은 Key
            resultType: "json"
        },
        dataType: "jsonp", // 크로스도메인으로 인한 jsonp 이용
        crossDomain: true
    });
}