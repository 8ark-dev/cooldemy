### useRouter()
router 변수로 useRouter()를 저장한 뒤 `router.pathname` , `router.query.변수~~` 등과 같이 사용할 수 있다.

dynamic variable이 한개라면 변수로 반환되지만, 두 개 이상이라면 Object로 반환된다.

### [...slug].js 꼴
위와 같이 한 뒤 `router.query`로 받게되면 Array형태로 한번에 값을 받아 활용할 수 있다.

### <Link>
React 컴포넌트의 업데이트 된 부분만 렌더링하기 위해 (재사용성) anchor 태그 대신 사용된다.

명령형으로는 `router.push()`를 통해 할 수 있으며
href attribute로 할 때에는 backtick, object(pathname, query) 등으로 할 수 있다.