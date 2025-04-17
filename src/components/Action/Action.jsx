import "./action.css"
import "../../index.css"

const Action = ({icon, title, paragraph, link}) => {
    return (
        <>
            <div className="action w_f d_flex transition">
                <div className="left d_flex">
                    <span><i className={icon}></i></span>
                    <div className="text">
                        <h3>{title}</h3>
                        <p>{paragraph}</p>
                    </div>
                </div>
                <div className="right text_c">
                    <a href={link} rel="next" hrefLang="pt-AO"><span><i className="fa-solid fa-angle-right"></i></span></a>
                </div>
            </div>
        </>
    )
}

export default Action