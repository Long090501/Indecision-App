import React from 'react'
import ReactDOM from 'react-dom/client'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && (
            <div>
                <p>You have access to the info!</p>
                <WrappedComponent {...props}></WrappedComponent>
            </div>
            )}

            {!props.isAuthenticated && <p>Please login to see the info!</p>}
            
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)

const appRoot = document.getElementById('app')
const root = ReactDOM.createRoot(appRoot)
root.render(<AuthInfo isAuthenticated = {false} info = 'L95'></AuthInfo>)