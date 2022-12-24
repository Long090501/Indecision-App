class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        };
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        })
    }

    render() {
        return (
            <div>
                <h1>VisibilityToggle</h1>
                <button onClick = {this.handleToggle}>{this.state.visible ? 'Hide Info' : 'Show Info'}</button>
                {this.state.visible && (<p>This is the information</p>)}
            </div>
        )
    }
}

const appRoot = document.getElementById('app')
const root = ReactDOM.createRoot(appRoot)
root.render(<VisibilityToggle></VisibilityToggle>)