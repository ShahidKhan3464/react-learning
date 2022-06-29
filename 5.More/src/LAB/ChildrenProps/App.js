import React from 'react'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'
import Comment from './Comment'

export default function App() {
    return (
        <div className='ui container comments'>
            <div className='ui cards'>
                <ApprovalCard>
                    <div className='ui comments'>
                        <Comment
                            avatar={faker.image.avatar()}
                            author={faker.name.firstName()}
                            date={faker.date.weekday() + ''}
                            text={faker.lorem.sentence()}
                        />
                    </div>
                </ApprovalCard>
            </div>
        </div>
    )
}
