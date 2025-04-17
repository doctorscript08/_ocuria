import "./input.css"
import "../../index.css"

const Input = ({type, name, id, placeholder, icone}) => {
    return (
        <>
            <div className="input-user w_f d_flex h-14 mt-4 rounded-full pl-2">
                <span className={`w-12 h-12 bg-white flex justify-center items-center text-2xl rounded-full`}><i className={icone}></i></span>
                <input type={type} name={name} id={id} placeholder={placeholder} className="w-3/5 input"/>
            </div>
        </>
    )
}

export default Input