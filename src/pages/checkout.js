import Header from "../components/Header";
import Image from 'next/image';
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import BasketItem from "../components/BasketItem";
import { useSession } from "next-auth/client";
import Currency from 'react-currency-formatter';





function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();

    return (
        <div className='bg-gray-200'>
            <Header/>
            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/* left side */}
                <div className='flex-grow m-5 shadow-sm'>
                    <Image
                    src='https://links.papareact.com/ikj'
                    width={1020}
                    height={250}
                    objectFit="contain"
                    />
                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? 'Your amazon basket is empty' : 'Shopping Basket'}</h1>
                        {items.map(({id, title, price,rating, description, category, image,hashPrime}, index)=>(
                            <BasketItem key={index}
                            id={id}
                            title={title}
                            price={price}
                            rating= {rating}
                            description = {description}
                            category={category}
                            image={image}
                            hashPrime={hashPrime}
                            />
                        ))}
                    </div>

                </div>
                {/* right side */}
                <div className="flex flex-col bg-white p-5 m-5 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">SubTotal ({items.length} items) : 
                            <span className='font-bold'>
                                <Currency
                                quantity={total}
                                currency='USD'
                                />
                            </span>
                            </h2>
                            <button 
                            role='link'
                            disabled={!session}
                            className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!session ? "Sign in to checkout" : "Proceed to checkout"}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout
