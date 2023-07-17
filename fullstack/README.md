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

##### getStaticProps()

**사전 생성되어야 하는 페이지**임을 고지하는 함수
해당 함수는 props 키를 포함한 객체를 반환해야한다.

서버 사이드에서 실행되기 때문에 *Node.js*모듈 사용이 용이하다.

> 해당 함수내에서 Node.js의 모듈인 fs, path등을 활용하여 데이터를 불러올 수 있다. path.join(현재위치, 접근하려는 위치, 파일명)로 Path를 저장하고 fs.readFile()로 데이터를 받아온다.

자주 바뀌는 데이터에 대해서 오래된 데이터를 먼저 보여주면서 **useEffect()**로 fetch해서 갱신해준다.

##### ISR

배포 후에도 일정 시간마다 re-deploy되게 하는 방법
getStaticProps() 내부 객체에 `props` 뿐만 아니라 `revalidate`를 추가한다.

##### context

추가정보를 위한 getStaticProps()의 객체형 매개변수

---
### getStaticPaths()

dynamic routing을 할 때 getStaticProps에서 바로 가져올 수 없다

> 사전 생성될 페이지의 개수를 Next가 알 수 없기 때문이다.

따라서 이 경우에는 `getStaticPaths`라는 함수에서 사전 생성될 페이지를 객체로 넣어 만들 수 있다.

이 때 fallback 기능을 통해 방문율이 높은 페이지만 pre-render이 가능하다.
`fallback : 'blocking'`을 하게되면 에러는 안뜨지만 커스텀페이지 대신 빈 페이지로 기다리게할 수 있다. 

---
### getServerSideProps()

SSR에서 페이지 생성을 위해 쓰이는 메소드로 `getStaticProps()`와 같은 기능을 한다. 따라서 **동시에** 사용해서는 안된다.

getStaticProps()와 다르게 들어오는 요청마다 서버사이드에서 매번 실행하므로 `revalidate` attribute는 필요 없다.

> 매 초마다 여러번 바뀌는 데이터에 대해서는 해당 메소드를 써야 하나 자원을 생각하면 getStaticProps()로 pre-render해두는게 더 이득 아닌가..? 

getServerSideProps()에서 dynamic routing을 할 때에는 굳이 getStaticPaths와 같은 메소드를 사용할 필요가 없다.