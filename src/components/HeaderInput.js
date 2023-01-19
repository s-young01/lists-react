import React, { useEffect } from 'react';
import './TodoTotal.css';

const HeaderInput = ({inputText, onChange, onAddTodo}) => {
    useEffect(() => {
        console.log('🎨 headerinput 컴포넌트 그리기 🎨');
    })
    return (
        <div className='header'>
            <h2>To do List</h2>
            <div>
                <input value={inputText} onChange={onChange}/>
                <button onClick={onAddTodo}>+</button>
            </div>
        </div>
    );
};

export default HeaderInput;