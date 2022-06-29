class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machine</h1>
                <Machine
                    s1='X'
                    s2='Y'
                    s3='Z'
                />
                <Machine
                    s1='X'
                    s2='X'
                    s3='X'
                />
                <Machine
                    s1='X'
                    s2='X'
                    s3='Z'
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))