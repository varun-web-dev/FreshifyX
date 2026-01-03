import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decreaseQty, addToCart } from "../../redux/cartSlice";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce(
        (acc, item) => acc + Number(item.price || 0) * Number(item.qty || 0),
        0
    );

    const totalItems = cart.reduce(
        (acc, item) => acc + Number(item.qty || 0),
        0
    );



    if (cart.length === 0) {
        return (
            <p className="text-center mt-24 text-xl font-semibold text-zinc-600">
                🛒 Your cart is empty
            </p>
        );
    }

    return (
        <div className="max-w-[1100px] mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
            

            {/*  CART ITEMS */}
            <div className="md:col-span-2 space-y-6">
                {cart.map(item => {
                    const itemTotal = Number(item.price || 0) * Number(item.qty || 0);

                    return (
                        <div
                            key={item.id}
                            className="flex flex-col md:flex-row gap-6 md:items-center bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 object-contain mx-auto md:mx-0"
                            />

                            {/* Info */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-green-600 font-bold mt-1">
                                    ${Number(item.price).toFixed(2)}
                                </p>
                            </div>

                            {/* Qty + Total */}
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                {/* Quantity */}
                                <div className="flex items-center gap-3 bg-zinc-100 px-4 py-2 rounded-full">
                                    <button onClick={() => dispatch(decreaseQty(item.id))}>
                                        <FaMinus />
                                    </button>

                                    <span className="font-semibold">{item.qty}</span>

                                    <button onClick={() => dispatch(addToCart(item))}>
                                        <FaPlus />
                                    </button>
                                </div>

                                {/* Item Total */}
                                <div className="text-center min-w-[90px]">
                                    <p className="text-zinc-500 text-sm">Total</p>
                                    <p className="text-lg font-bold text-green-600">
                                        ${itemTotal.toFixed(2)}
                                    </p>
                                </div>
                            </div>

                            {/* Remove */}
                            <button
                                onClick={() => dispatch(removeFromCart(item.id))}
                                className="text-red-500 text-2xl md:text-3xl self-center md:self-auto"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    );
                })}

            </div>

            {/* SUMMARY */}
            <div className="bg-white p-6 rounded-xl shadow-lg h-fit space-y-auto">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="flex justify-between mb-3">
                    <span>Total Items</span>
                    <span className="font-semibold">{totalItems}</span>
                </div>

                <div className="flex justify-between mb-6">
                    <span>Total Price</span>
                    <span className="font-bold text-green-600">
                        ${totalPrice.toFixed(2)}
                    </span>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default ShoppingCart;
