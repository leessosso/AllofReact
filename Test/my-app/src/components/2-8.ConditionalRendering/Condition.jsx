import React from 'react'

function UserGreeting(props) {
    return <h1>{props.name && props.name + ","} Welcome It's {props.count} time.</h1> //숫자 0은 falsy
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}

function Greeting(props) {
    // if(props.isLoggedIn){
    //     return <UserGreeting name="Jimmy" count={0} />
    // } return <GuestGreeting />
    return props.isLoggedIn ? <UserGreeting  count={0} /> : <GuestGreeting />
}

export default function Condition() {
    const isLoggedIn = true;

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
        </div>
    )
}
