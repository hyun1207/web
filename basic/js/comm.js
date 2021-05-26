$(function(){
    
    // .slideshow를 각각 움직여주세요.
    $('.slideshow').each(function(){
        // 변수 선언
        let $슬라이드이미지 = $(this).find('img'),
            슬라이드갯수 = $슬라이드이미지.length,
            현재이미지 = 0

        // 1. 첫번째 이미지 페이드-인
        $슬라이드이미지.eq(현재이미지).fadeIn()

        // 2. 3초 마다 실행
        setInterval(다음슬라이드, 3000)

        // 다음슬라이드를 표시하는 함수
        function 다음슬라이드(){
            // 다음 슬라이드의 인덱스 값
            // 만약 마지막 슬라이드라면 처음으로 돌아가기
            // 슬라이드 갯수를 나눈 나머지 값 (%)
            // (0+1) / 4 = 1(나머지) = 다음이미지의 인덱스 값
            // (3+1) / 4 = 0(나머지) = 다음이미지의 인덱스 값
            let 다음이미지 = (현재이미지 + 1) % 슬라이드갯수 

            // 현재 이미지가 페이드-아웃
            $슬라이드이미지.eq(현재이미지).fadeOut()
            // 다음 이미지가 페이드-인
            $슬라이드이미지.eq(다음이미지).fadeIn()
            
            // 현재이미지 = 현재이미지 + 1
            현재이미지 = 다음이미지
        }
        


    })


})