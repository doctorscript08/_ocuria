import "./textArea.css"

function TextArea({nome, id, placeholder, rows, columns}) {
    return (
        <>
            <textarea name={nome} id={id}  placeholder={placeholder} cols={columns} rows={rows} className="msg"></textarea>
        </>
    )
}

export default TextArea