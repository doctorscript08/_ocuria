import React from 'react'
import "./textArea.css"

const TextArea = ({nome, id, placeholder, rows, columns}) => {
    return (
        <>
            <textarea name={nome} id={id}  placeholder={placeholder} cols={columns} rows={rows} className="msg"></textarea>
        </>
    )
}

export default TextArea