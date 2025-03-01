function Input({type, name, id, placeholder, icone}) {
    return (
        <>
            <div className="input_user flex w-full h-14 mt-4 rounded-full pl-2">
                <span className={`w-12 h-12 bg-white flex justify-center items-center text-2xl rounded-full`}><i className={icone}></i></span>
                <input type={type} name={name} id={id} placeholder={placeholder} className="w-3/5"/>
            </div>
        </>
    )
}

export default Input