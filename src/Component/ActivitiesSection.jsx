'use client';
import { useEffect, useState } from "react";

export default function Fetch() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/carts?limit=10', {
            method: 'GET',
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const json = await res.json();
        setData(json);
    };

    useEffect(() => {
        fetchData().catch(console.error);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-8">
            <h1 className="text-3xl text-white font-bold mb-6">🛒 Cart List</h1>

            {data && data.carts ? (
                data.carts.filter((cart) => cart.id <= 5) 
                .map((cart) => (
                    <div 
                        key={cart.id} 
                        className="bg-[#1f1f1f] m-4 p-6 rounded-lg text-white shadow-lg hover:scale-105 transition-transform"
                    >
                        <h2 className="text-xl font-semibold mb-4">Cart ID: {cart.id}</h2>

                        {/* Only show 5 products */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cart.products.slice(0, 5).map((product) => (
                                <div 
                                    key={product.id} 
                                    className="bg-[#2c2c2c] p-4 rounded-lg shadow-md hover:bg-[#333] transition-colors"
                                >
                                    <img 
                                        src={product.thumbnail} 
                                        alt={product.title} 
                                        className="w-full h-40 object-cover rounded mb-2"
                                    />
                                    <h3 className="text-lg font-medium">{product.title}</h3>
                                    <p className="text-sm text-gray-300">Price: ${product.price}</p>
                                    <p className="text-sm text-gray-300">Quantity: {product.quantity}</p>
                                    <p className="text-sm text-green-400 font-semibold">Total: ${product.total}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-white">Loading...</p>
            )}
        </div>
    );
}
