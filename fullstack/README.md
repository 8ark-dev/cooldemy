### Pre-Rendering Means

CSR인 React는 빈 HTML을 처음에 받아오고 렌더링이 완료될 시 한 번 더 받아와서 한 번에 화면을 보여준다.

반면 Nextjs는 최초 접속할 때 미리 모든 페이지에 대해 중요한 정보를 pre-render한다. 즉, 각 페이지의 HTML을 최소한의 JS로 사전에 생성하는 것이다. (SEO에 좋음)

이후 렌더링이 완료될 시 기존의 pre-rendered page를 대체하게 되는데 이 과정을 Hydrate라고 한다.

--- 
### Static-Generation

배포할 때 모든 데이터를 사전에 준비해 놓는 방법이다.
앱이 구축됐을 때 사전 페이지들은 CDN을 통해서 캐시로 저장된다.

**CDN이란**
Content Delivery Network의 약어이며, 각 지역에 분산배치 돼있는 캐시 서버가 존재한다. 이를 통해 빠르게 콘텐츠를 전달할 수 있다.


---
### Next.js에서 pre-render data를 지정하는 방법

*/pages* 내부에서 `getStaticProps()`라는 비동기함수를 통해 저장한다.
내부 코드는 클라이언트에 재전송되지 않는다. *db credential*과 같은 정보가 이에 해당한다.