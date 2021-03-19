# darkmode

react, typescript, styped-component를 사용해 다크모드 만들기

# 알아두기

1. tsconfig파일에서 컴파일 옵션에
   `"baseUrl": "./src"`
   를 추가하면,

각 파일에서 src를 절대경로로, 다른 파일들을 import 할 수 있다.
그래서 파일의 경로가 복잡해져도 src기준으로 파일을 import 하기때문에 덜 복잡하게 사용할 수 있다.
