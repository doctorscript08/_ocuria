import "../../index.css"
import "./item.css"

const CartItem = ({restaurant_name, order_name, price, quantity}) => {
    return (
        <>
            <section className="item p_15 d_flex">
                <div className="check">
                    <input type="checkbox" name="confirmar" id="confirmar" />
                </div>
                <div className="info d_flex">
                    <div className="names_info">
                        <h2 className="order_name">{order_name}</h2>
                        <span className="restaurant_name">{restaurant_name}</span>
                    </div>
                    <div className="price_actions d_flex w_f">
                        <div className="price_quantity">
                            <span className="preco">{price}</span>
                            <span className="quantity">{quantity}</span>
                        </div>
                        <div className="order_actions">
                            <span>
                                <i class="fa-solid fa-pen-to-square"></i>
                            </span>
                            <span>
                                <i class="fa-solid fa-trash"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartItem