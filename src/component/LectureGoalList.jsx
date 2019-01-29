import React from 'react';

// component 실습
// functional 한 컴포넌트
// Function 은 대문자로 시작 해야 한다.
const LectureGoalList = () =>{
  return(
    // 아래 클래스이름 정한 이유는 최종화면에서 그려지는 컴포넌트에서 잘못그려질경우
    // 어느 소스인지 분간이 어려워 className을 적어두면 찾기쉬워짐(강사님 tip)
    <div className="LectureGoalList">
      <h1>강의목표</h1>
      <h2><input type="checkbox" checked="true"/> 자바스크립트 문법을 익힌다. ES2015(ES6), ES7, ES8</h2>
      <h2><input type="checkbox"/> React 개발에 필요한 환경을 구축한다.</h2>
      <h2><input type="checkbox"/> 개발편의를 위한 VSCode IDE를 익힌다.</h2>
      <h2><input type="checkbox"/> 기본적인 Git사용법을 익힌다.</h2>
      <h2><input type="checkbox"/> PR코드 리뷰를 응용한 개발 프로세스를 익힌다.</h2>
      <h2><input type="checkbox"/> React로 간단한 노트앱을 만들어본다.</h2>
    </div>
  )
}
// 외부 참조를 위해 export 한다.
export default LectureGoalList;

