import React from 'react'
import './todoitems.css'
const ampo = (props) => {
    const { items, deletitem } = props;
    let length = items.length;
    const list = length ? (
        items.map(item => {
            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={() => deletitem(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (
        <p>no items show</p>
    )
    return (
        <div className="listed">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {list}
        </div>
    )
};

export default ampo;