class Machine extends React.Component {
    render() {
        const { s1, s2, s3 } = this.props
        const winner = (s1 === s2) && (s2 === s3)
        const color = { fontSize: '25px' }
        return (
            <div className="machine">
                <p style={color}>{s1} {s2} {s3}</p>
                <p className={winner ? 'win' : 'lose'}>{winner ? 'Winner!' : 'Loser!'}</p>
            </div>
        )
    }
}