import React from 'react'

function UserIdpage(props) {
  return (
    <div>
        <h1>{props.id}</h1>
    </div>
  )
}

export default UserIdpage

export async function getServerSideProps(context) {
    const { params } = context;

    const userId = params.uid;

    return {
        props: {
            id: 'userid-' + userId
        }
    }
}