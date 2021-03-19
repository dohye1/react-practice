# darkmode

react, typescript, styped-component를 사용해 다크모드 기능 구현해보기

# 알아두기

## 1. 절대경로설정 
   tsconfig파일에서 컴파일 옵션에
   `"baseUrl": "./src"`
   를 추가하면,

각 파일에서 src를 절대경로로, 다른 파일들을 import 할 수 있다.

그래서 파일의 경로가 복잡해져도 src기준으로 파일을 import 하기때문에 덜 복잡하게 사용할 수 있다.

## 2. 다크모드 구현시 중요?한 내용 (MDN 참고)

> `@media`

css에서 `@media`를 사용해 미디어 쿼리를 지정하면 해당 쿼리를 만족하는 장치에서만 css블록을 적용할 수 있다.

> `prefers-color-scheme`

- 사용자의 시스템이 라이트 테마나 다크 테마를 사용하는지 탐색하는 데에 사용한다.

- 사용자의 OS가 사용하는 테마를 감지하는 것임!!

- 이 속성이 가지는 값은

  1.  no-preference : 사용자가 시스템에 선호하는 테마를 알리지 않음
  2.  light : 사용자가 시스템에 라이트 테마를 적용하는 것을 선호한다고 알렸음
  3.  dark : 사용자가 시스템에 다크 테마를 적용하는 것을 선호한다고 알렸음

- 이 속성도 `@media`를 사용해 미디어 쿼리를 지정할 수 있다.

예를들어 css 파일 내에서

```css
@media (prefers-color-scheme: light) {
  .themed {
    background: white;
    color: black;
  }
}
```

`prefers-color-scheme`가 light 일때 적용할 css를 설정할 수 있다!

> `Window.matchMedia()`

주어진 미디어 쿼리 문자열의 분석 결과를 반환하는 메서드!

```js
if (window.matchMedia('(min-width: 400px)').matches) {
  /* 뷰포트 너비가 400 픽셀 이상 */
} else {
  /* 뷰포트 너비가 400 픽셀 미만 */
}
```

위의 예시처럼 원하는 조건을 문자열로 넘겨주고 matches 프로퍼티는 boolean 값을 반환한다.

### dark mode 구현

위의 메서드와 개념을 사용해 다크모드를 구현한 코드를 보면

OS가 사용하고 있는 모드에 대한 정보를 isBrowserDarkMode에 받고, 그 값을 사용해 initTheme에 dark나 light를 지정해준다.

```js
const isBrowserDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
  .matches
let initTheme = isBrowserDarkMode ? 'dark' : 'light'
```

그리고는 localStorage에 theme과 관련된 데이터가 있는지 확인한다.

이렇게 하게되면 OS가 특정 모드를 사용하고 있더라도, localStorage에 설정된 theme이 적용되도록 할 수있는것이다!

```js
const localSettingTheme = localStorage.getItem('theme')

if (localSettingTheme) {
  initTheme = localSettingTheme
}
```

그리고 사용자가 모드를 변경할때마다 변경된 theme을 localStorage에 저장해 준다.

그럼 다음에 해당 브라우저에서는 localStorage에 있는 theme이 적용되도록 할 수 있는것이다!

> 참고
> https://blog.woolta.com/categories/1/posts/199
