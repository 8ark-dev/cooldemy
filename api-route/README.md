##### api 폴더

Next.js에서는 pages/api/ 가 React Component를 내보내지 않는다. 특수한 방식으로 처리된다.

client측에서 fetch를 보낸 req는 객체형태로 { property명 : 값 , ... } 로 사용되며
이는 api에서 req.body.property명 이렇게 받을 수 있다.