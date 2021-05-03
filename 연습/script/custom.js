var typingEnd = false;

function typingStart() { //typingStart() 함수를 실행시키면 타이핑 효과가 시작되게 된다. 
    if (!typingEnd) {
        var typingBool = false;
        var typingIdx = 0;
        var typingTxt = $("#typing-txt").val(); // 타이핑될 텍스트를 가져온다
        typingTxt = typingTxt.split(""); // 한글자씩 자른다.
        if (typingBool == false) { // 타이핑이 진행되지 않았다면
            typingBool = true;

            var tyInt = setInterval(typing, 100); // 반복동작(타이핑 시간을 제어할 수 있음)
        }

        function typing() {
            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복
                $("#typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
                typingIdx++;
            } else {
                clearInterval(tyInt); //끝나면 반복종료
                typingEnd = true;
            }
        }
    }
}