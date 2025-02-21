import React from 'react';

const ConditionalGreeting = () => {
    const isLoggedIn = true ;
    
    return (
        <div>
            {/*isLoggedIn ? <h1>Welcome User!</h1> : <h1>Please log in</h1>*/}
            { /*isLoggedIn && <h1> Welcome User </h1>}
                { !isLoggedIn && <h2> Please Log In </h2>*/}
            isLoggedIn ? <UserGreeting />
            <GuestGreeting />
        </div>
    )

    function UserGreeting(){
        return(
            <h1> Welcome User</h1>
        )
    }
     function GuestGreeting(){
        return(
            <h1> Please log in </h1>
        )
    }
}

export default ConditionalGreeting;
