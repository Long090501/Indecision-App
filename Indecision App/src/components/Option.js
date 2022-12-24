import React from 'react'

class Option extends React.Component {
    render() {
        return (
            <div className='option'>
                <p className='option-count'>{`${this.props.index+1}. ${this.props.option}`}</p>
                <button className = 'remove-button' onClick = {(e) => {
                    this.props.handleRemove(this.props.index)
                    }}>Remove</button>
            </div>
        )
    }
}

export default Option