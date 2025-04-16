import "./textArea.css"

function TextArea({name, id, placeholder,}) {
    return (
        <>
            <textarea name={name} id={id}  placeholder={placeholder} className="msg"></textarea>
        </>
    )
}

export default TextArea