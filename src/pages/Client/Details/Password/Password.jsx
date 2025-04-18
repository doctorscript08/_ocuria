import "./password.css"
import "../../../../index.css"
import Input from "../../../../components/Input/Input"
import { useState } from "react"

const Password = () => {
    const [showPassword, setShowPassword] = useState(false)
    
    return (
        <>
        <main className="corpo w_f p_15">
            <section className="w_f">
                <h1 className="text_c">Alterar password</h1>
                <Input type={showPassword ? 'text' : 'password'} name={'password'} id={'password'} placeholder={'Password'} icone={'fa-solid fa-lock'} />
                <input type="checkbox" name="show_password" id="show_password" onInput={() => setShowPassword(!showPassword)}/>
                <label htmlFor="show_password">Mostrar password</label>
                <div className="w_f d_flex"><button className="btn">Salvar</button></div>
            </section>
        </main></>
    )
}

export default Password