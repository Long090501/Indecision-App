import React from 'react'
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: [],
            selectedOption: undefined
        };
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {            
                const json = JSON.stringify(this.state.options)    //chuyển object về chuỗi JSON
                localStorage.setItem('options', json)       

            }    
    }

    handlePick() {
        const random = Math.floor(Math.random()* this.state.options.length)
        this.setState(() => ({selectedOption: this.state.options[random]}))
    }

    handleRemoveAll() {
        this.setState(() => ({options: []}))
    }

    handleAdd(option) {
        this.setState((prevState) => ({options: prevState.options.concat([option])}))
    }

    handleRemove(id) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((element, index) => {
                    return index !== id
                })
            }
        })        
    }

    handleClose() {
        this.setState(() => ({selectedOption: false}))
    }
    
    render() {
        return (
            <div>
                <Header></Header>
            <div className = 'container'>
                <Action
                    options = {this.state.options}
                    handlePick = {this.handlePick}
                    handleRemoveAll = {this.handleRemoveAll}>
                </Action>
                <div className='widget'>
                <div className='widget-content'>
                <p>Please add an option to get started!</p>
                </div>
                <Options options = {this.state.options} handleRemove = {this.handleRemove}></Options>
                <AddOption handleAdd = {this.handleAdd}></AddOption>
                </div>
            </div>
                <OptionModal selectedOption = {this.state.selectedOption} handleClose = {this.handleClose}></OptionModal>
            </div>
        )
    }
}

export default IndecisionApp