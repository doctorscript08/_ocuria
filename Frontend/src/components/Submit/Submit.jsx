import React from 'react'

const Submit = ({value, name, id}) => {
    
    return (
        <>
            <input type="submit" value={value} name={name} id={id} className="btn"/>
        </>
    )
}
export default Submit