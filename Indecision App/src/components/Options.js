import React from 'react'
import Option from './Option'

class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((element,index) => {
                        return <Option key = {element} option = {element} index = {index} handleRemove = {this.props.handleRemove}></Option>
                    })
                }
            </div>
        )
    }
}

export default Options