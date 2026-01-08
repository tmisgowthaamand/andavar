import React from 'react'
import { Link, useLocation, Navigate } from 'react-router-dom'
import { CheckCircle2, ShoppingBag, Home, Phone, Mail, ArrowRight } from 'lucide-react'

const OrderSuccess: React.FC = () => {
    const location = useLocation()
    const orderId = location.state?.orderId

    // If no order ID, redirect to products
    if (!orderId) {
        return <Navigate to="/products" replace />
    }

    return (
        <div className="pt-20 lg:pt-28 min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
            <div className="max-w-2xl w-full">
                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
                    {/* Success Banner */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 sm:p-12 text-center text-white">
                        <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                            <CheckCircle2 className="h-12 w-12 text-white" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-black mb-2 tracking-tight">Order Successful!</h1>
                        <p className="text-green-50/90 text-lg font-medium">Your request has been received</p>
                    </div>

                    <div className="p-8 sm:p-12">
                        {/* Order Details */}
                        <div className="text-center mb-10">
                            <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">Your Order Reference</p>
                            <div className="inline-block bg-gray-50 px-8 py-4 rounded-2xl border-2 border-dashed border-gray-200">
                                <span className="text-2xl sm:text-3xl font-black text-[#800000] font-mono">
                                    {orderId}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6 mb-10">
                            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 flex gap-4">
                                <div className="bg-blue-100 p-3 rounded-xl h-fit">
                                    <ShoppingBag className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-900 mb-1">What happens next?</h3>
                                    <p className="text-blue-700/80 text-sm leading-relaxed">
                                        Our team is reviewing your order. We will contact you via phone or email within 24 hours to confirm pricing and shipping details.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="flex items-center gap-3 text-gray-700 mb-1">
                                        <Phone className="h-4 w-4 text-[#800000]" />
                                        <span className="font-bold text-sm">Call Us</span>
                                    </div>
                                    <p className="text-xs text-gray-500 font-medium">+91 93427 52821</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="flex items-center gap-3 text-gray-700 mb-1">
                                        <Mail className="h-4 w-4 text-[#800000]" />
                                        <span className="font-bold text-sm">Email Us</span>
                                    </div>
                                    <p className="text-xs text-gray-500 font-medium">info@andavartextiles.shop</p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/products"
                                className="flex-1 bg-[#800000] text-white py-4 rounded-xl font-bold text-center hover:bg-[#600000] transition-all shadow-lg hover:shadow-red-900/20 active:scale-95 flex items-center justify-center group"
                            >
                                Continue Shopping
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                to="/"
                                className="flex-1 bg-white text-gray-700 border-2 border-gray-100 py-4 rounded-xl font-bold text-center hover:bg-gray-50 transition-all flex items-center justify-center"
                            >
                                <Home className="mr-2 h-5 w-5" />
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>

                <p className="text-center text-gray-400 text-xs mt-8 font-medium">
                    © {new Date().getFullYear()} Andavar Textile. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default OrderSuccess
