class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <JSXDemo />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))