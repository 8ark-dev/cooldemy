## 공부 내용 정리

---

### {props.children}

children으로 컴포넌트의 모든 컨텐츠를 ui 내부에 바로 넣을 수 있다.

---

### useRef()

입력하거나 값을 읽어올 때에 useRef의 current 등으로 쉽게 불러올 수 있다.

> > 값이 변할 때 마다 re-rendring ? useState() : useRef()

---

### useEffect()

컴포넌트를 불러올 때 이전 dependencies 배열을 검사해서 실행하는 구조이다.
따라서 []로 해놓으면 처음 불러올 때에만 실행하게 되는 것이다.
