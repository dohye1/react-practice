# Carousel Basic

<p align="center">
  <img src="https://media.vlpt.us/images/dolarge/post/db6b8cb2-9140-44e9-9657-9e92659b08fe/ezgif.com-gif-maker%20(29).gif" />
  </p>

---

리액트를 사용해서 캐러셀을 만들어 봤다.

vanillaJS를 사용해서 만들 때 보다 시간이 더 걸린것 같다... 머선일이고...

아직 완성된건 아니지만 만들어 나가는 과정을 정리해보려고 한다!

아직 파일도 나누지 않았고, 지저분한 부분이 많다

# 구현 내용

- upbit 에서 API데이터를 얻어와서 증권정보를 보여주는 carousel을 구현

- carousel의 오른쪽에 있는 화살표 버튼을 누르면 다음 박스가 보여지는 방식으로 구현했다.(추후 자동으로 박스가 슬라이드되는 기능 구현하고자함)

- carousel이 동작할 수 있도록 하는 핵심?코드는

```js
transform: `translate3d(calc(-600px * ${curIndexRef.current}), 0, 0)`;
```

위의 코드이다.

`calc` 메서드를 사용해야 하는지 모르고 몇시간은 흘려보낸듯..ㅜㅠㅠㅠ

# 알게된 내용

- css에서 계산을 하려면 `calc()` 메서드를 사용해야 한다!

# 추가할 부분

- [ ] 자동으로 슬라이드 되도록
- [ ] carousel의 끝으로 갔을때의 처리를 부드럽게 하기(원형으로 작동하는것처럼 보이게)
- [ ] BOX의 개수 줄이기(box 1개가 보일때 나머지 5개는 화면에 안보이므로 박스개수 최소화 해보기)
