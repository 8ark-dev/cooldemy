### <Link>와 <a>
Link 태그 내에 anchor태그가 렌더링되는데 이 때 사용자 지정 스타일링을 하기 위해서는 직접 명시해줘야 한다.

```
<Link>
  <a>
  </a>
</Link>
```

단 **Next ver 13**부터 위 방법을 사용하기 위해서는 Link 태그 내에 attribute로 *legacyBehavior*을 명시해줘야 한다.

### <Fragment>
React는 본래 하나의 컴포넌트를 반환해야 하나, Fragment로 묶어줌으로 이를 그룹화하여 여러 컴포넌트를 한번에 반환 할 수 있습니다.

[https://ko.legacy.reactjs.org/docs/fragments.html](참고 링크)
