import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice'


function BasketItem({
    id,
    title,
    price,
    description,
    rating,
    category, 
    image,
    hashPrime
}) {

    const dispacth = useDispatch();
    
    const addItemToBasket = () =>{
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            hashPrime, 
            rating
        }
        dispacth(addToBasket(product));
    }

    const removeToBasket = () =>{
        dispacth(removeFromBasket({id}))
    }

    return (
        <div className='grid grid-cols-5'>
            <Image
            src={image}
            width={200}
            height={200}
            objectFit="contain"
            />
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_,i)=>(
                        <StarIcon
                        key={i}
                        className='h-4 text-yellow-500'
                         />
                    ))}
                </div>
                <p className='text-xs mt-2 my-2 line-clamp-3'>{description}</p>
                <Currency 
                quantity={price}
                currency="USD"
                />
                {hashPrime && (
                    <div className='flex items-center space-x-2'>
                        <img
                        loading="lazy"
                        className='w-12'
                        src='https://links.papareact.com/fdw'
                        />
                        <p className='text-xs text-gray-50'>FREE Next-day Delivering</p>
                    </div>
                )}
            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button onClick={addItemToBasket} className='button'>Add to Basket </button>
                <button onClick={removeToBasket} className='button'>Remove to basket</button>
            </div>
        </div>
    )
}

export default BasketItem
