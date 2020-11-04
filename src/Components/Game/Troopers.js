import React, { useState } from 'react';

function Troopers(props) {
    let [isEditing, setIsEditing] = useState(false)
    let [nameInput, setNameInput] = useState('')

    const handleEdit = (id) => {
        props.nameFn(id, nameInput);
        setIsEditing(!isEditing);
    }


    return (
        <div>
            <img src={props.troopers.image} alt={props.troopers.name} />
            {isEditing
                ? (
                    <div>
                        <input className='gamer'
                            value={nameInput}
                            onChange={e => setNameInput(e.target.value)} />
                        <button className='gamer' onClick={() => handleEdit(props.troopers.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{props.troopers.name}</p>
                        <button className='gamer' onClick={()=>{setIsEditing(!isEditing)}}>Edit Value</button>
                    </div>
                )}
            <button className='gamer' onClick={() => props.KIAFn(props.troopers.id)}>Reset</button>
        </div>
    )
}

export default Troopers;
