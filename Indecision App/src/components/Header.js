import React from "react"

const Header = (props) => {
    return (
        <div className = "header">
            <div className = 'container'>
                <h1 className = "title">{props.title}</h1>
                <p className = "subtitle">{props.subTitle}</p>
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision app',
    subTitle: 'What should i eat for lunch?'
} 

export default Header