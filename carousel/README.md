# Carousel Basic

<p align="center">
  <img src="https://media.vlpt.us/images/dolarge/post/dc85c2b0-b1fe-4218-b1a8-c0c219661c06/ezgif.com-gif-maker%20(33).gif" />
  </p>

---

리액트를 사용해서 캐러셀을 만들어 봤다.

vanillaJS를 사용해서 만들 때 보다 시간이 더 걸린것 같다... 머선일이고...

# 구현 내용

- upbit 에서 API 요청으로 데이터를 얻어와서 증시정보를 보여주는 carousel을 구현

- carousel의 오른쪽에 있는 화살표 버튼을 누르면 다음 박스가 보여지는 방식으로 구현했다.

# (나한텐) 중요한 코드

1.

```js
transform: `translate3d(calc(-600px * ${curIndexRef.current}), 0, 0)`;
```

`calc` 메서드를 사용해야 하는지 모르고 몇시간은 흘려보낸듯..ㅜㅠㅠㅠ

그런데 최종적으로는 css 말고 js파일에서 translate3d 설정을 해주었기 때문에,
실제 코드에서는 위의 방식대로는 하지 않았지만 알고있으면 좋을것같아서 적어놓는다잉

2. useRef를 컴포넌트 내에서 변수처럼 사용해 market의 정보를 처리하고,

`const MARKETS = ['BTC', 'ETH', 'XRP', 'PCI'];`

MARKETS 배열 중 몇번째 인덱스의 정보를 보여줄지 useRef를 사용해서 관리했다.

# 알게된 내용

- css에서 계산을 하려면 `calc()` 메서드를 사용해야 한다!

# 추가할 부분

- [x] 자동으로 슬라이드 되도록 구현 > 디바운스로 구현 완료
- [x] carousel의 끝으로 갔을때의 처리를 부드럽게 하기(원형으로 작동하는것처럼 보이게) > 구현완료
- [x] BOX의 개수 줄이기(box 1개가 보일때 나머지 5개는 화면에 안보이므로 박스개수 최소화 해보기) > 박스 개수를 총 3개로 줄임
