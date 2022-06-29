const Comment = ({ avatar, author, date, text }) => {
    return (
        <div className="ui comment">
            <a className='avatar' href="http://google.com">
                <img src={avatar} alt='avatar' />
            </a>
            <div className="content">
                <a className='author' href="http://google.com">
                    {author}
                </a>
                <div className="metadata">
                    <span className='date'>{date}</span>
                </div>
                <div className="text">
                    {text}
                </div>
                <div className='actions'>
                    <a className='reply' href="http://google.com">
                        Reply
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Comment