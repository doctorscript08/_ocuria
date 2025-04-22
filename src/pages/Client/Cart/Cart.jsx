import CartItem from "../../../components/CartItem/Item"
import Footer from "../../../components/Footer/Footer"
import "../../../index.css"
import "./cart.css"

const Cart = () => {
    return (
        <>
            <main className="corpo w_f p_15">
                <h1 className="text_c">Pedidos</h1>
                <CartItem restaurant_name={'Nome do restaurante'} order_name={'Nome do pedido'} price={'Preço'} quantity={'Quantidade'}/>

                <div className="cart_details w_f">
                    <span className="total">Total a pagar</span>
                    <span className="orders_quantity">Quantidade de pedidos</span>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Cart