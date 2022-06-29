class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>My Image</h1>
                <img src="2.jpg"/>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'))