import Link from "next/link"

function HomePage() {
  return (
    <div>
        <h1>Home Page</h1>

        <ul>
            {/* <li>
            앱에 머무르게 하기 위해서는(SPA) href는 적절하지 않다.
                <a href="/portfolio">Portfolio</a>
            </li> */}

            {/* 백엔드에 http 요청을 보내는 것이 아니라, 프론트엔드에서 라우팅을 처리한다. */}
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/clients">Clients</Link></li>
            
        </ul>
    </div>
  )
}

export default HomePage