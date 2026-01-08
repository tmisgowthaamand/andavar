import React from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react'
import { getImageUrl } from '../utils/imageUtils'

const Cart: React.FC = () => {
    const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCartStore()

    if (items.length === 0) {
        return (
            <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl max-w-md w-full text-center">
                    <div className="bg-red-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShoppingBag className="h-12 w-12 text-[#800000]" />
                    </div>
                    <h1 className="font-title text-2xl font-bold text-[#222222] mb-4">Your cart is empty</h1>
                    <p className="font-text text-gray-600 mb-8">
                        Looks like you haven't added anything to your cart yet. Explore our premium collection and start shopping!
                    </p>
                    <Link
                        to="/products"
                        className="inline-flex items-center justify-center bg-[#800000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#600000] transition-all transform hover:-translate-y-0.5"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Explore Products
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="font-title text-3xl font-bold text-[#222222] mb-8">Your Shopping Cart</h1>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img
                                        src={getImageUrl(item.image)}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex-1 text-center sm:text-left min-w-0 w-full">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                                        <div>
                                            <h3 className="font-title text-lg font-bold text-[#222222] truncate">{item.name}</h3>
                                            <p className="font-text text-sm text-gray-500 capitalize">{item.category}</p>
                                        </div>
                                        <p className="font-title text-xl font-bold text-[#800000]">
                                            ₹{item.price.toLocaleString()}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-4">
                                        <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                                            <button
                                                onClick={() => updateQuantity(item.id, Math.max(item.minOrder, item.quantity - 1))}
                                                className="p-2 text-gray-600 hover:text-[#800000] transition-colors disabled:opacity-30"
                                                disabled={item.quantity <= item.minOrder}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </button>
                                            <span className="w-12 text-center font-semibold text-gray-800">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-2 text-gray-600 hover:text-[#800000] transition-colors"
                                            >
                                                <Plus className="h-4 w-4" />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="flex items-center text-gray-400 hover:text-red-600 transition-colors text-sm font-medium"
                                        >
                                            <Trash2 className="h-4 w-4 mr-1" />
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                <div className="hidden sm:block text-right min-w-[120px]">
                                    <p className="text-gray-500 text-xs mb-1">Subtotal</p>
                                    <p className="font-title text-lg font-bold text-[#222222]">
                                        ₹{(item.price * item.quantity).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <Link to="/products" className="inline-flex items-center text-[#800000] font-semibold hover:underline mt-4">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Continue Shopping
                        </Link>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg sticky top-24">
                            <h2 className="font-title text-xl font-bold text-[#222222] mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Total Items</span>
                                    <span>{getTotalItems()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>₹{getTotalPrice().toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-xl font-bold">
                                    <span className="text-[#222222]">Total</span>
                                    <span className="text-[#800000]">₹{getTotalPrice().toLocaleString()}</span>
                                </div>
                            </div>

                            <Link
                                to="/checkout"
                                className="w-full bg-[#800000] text-white py-4 rounded-xl font-bold text-center flex items-center justify-center group hover:bg-[#600000] transition-all transform hover:-translate-y-1 shadow-md"
                            >
                                Proceed to Checkout
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <div className="mt-6 flex flex-col items-center">
                                <div className="flex space-x-2 mb-2">
                                    <div className="h-6 w-8 bg-gray-200 rounded"></div>
                                    <div className="h-6 w-8 bg-gray-200 rounded"></div>
                                    <div className="h-6 w-8 bg-gray-200 rounded"></div>
                                </div>
                                <p className="text-[10px] text-gray-400 max-w-[150px] leading-tight text-center">
                                    Secure & Encrypted Payments. 100% Genuine Products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
