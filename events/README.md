### Head

서로다른 Head 태그여도 Next.js는 알아서 병합해준다. 또한 겹치는 속성에 대해서는 최근에(아래쪽에) 작성된 것을 우선으로 보여준다.

_app.js는 App의 Shell로 <body>태그의 루트 컴포넌트라고 볼 수 있다.
_document.js는 HTML 파일의 루트 컴포넌트라고 볼 수 있다.
 - 기본 구조에서 커스텀하기 위해 사용한다 (modal 개발할 때 좋을 듯)

---
 ### <Image />

 이미지 최적화를 위해 Next.js에서 제공하는 태그이다. 기본 이미지 태그에서 width, height 속성이 추가된다.
+ lazy loading을 지원한다.
