import React from 'react'

function UserProfilePage(props) {
  return (
    <div>
        {/* 어느 사용자가 요청을 했는지 확인  */}
        <h1>{props.username}</h1>
    </div>
  )
}

export default UserProfilePage

export async function getServerSideProps(context) {
    const { params, req, res } = context;
    
    return {
        props: {
            username: 'Max'
        }
    }
}