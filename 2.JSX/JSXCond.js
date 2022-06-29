const getNum = () => {
    const randomNum = Math.floor(Math.random() * 5)
    return randomNum;
}

// To embeed JS use curly braces inside JSX
class JSXDemo extends React.Component {
    render() {
        const num = getNum()
        let msg
        if (num === 4) {
            msg =
                <div>
                    <h3>Congrats!</h3>
                    <img src='2.jpg'/>
                </div>
        } else {
            msg = <p>Unlucky!</p>
        }
        return (
            <div>
                <h1>My number is : {num}</h1>
                {msg}
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))