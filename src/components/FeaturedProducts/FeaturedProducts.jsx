
import React from 'react'
import './FeaturedProducts.scss'
import Card from './../Card/Card';

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id:1,
            img: 'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/9983599/pexels-photo-9983599.jpeg',
            title: 'Long sleeve',
            isNew: true,
            oldPrice: 19,
            price:12,
        },
        {
            id:2,
            img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Long shirt',
            isNew: false,
            oldPrice: 19,
            price:12,
        },
        {
            id:3,
            img: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Coat',
            isNew: true,
            oldPrice: 19,
            price:12,
        },
        {
            id:4,
            img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Hat',
            isNew: false,
            oldPrice: 19,
            price:12,
        },
    ]

  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis aut esse, rerum velit modi. Voluptas, porro quibusdam aliquid sapiente temporibus modi a rem iusto? Sit ab quam enim minus temporibus, mollitia doloremque expedita? Similique, molestiae. Omnis repudiandae laudantium voluptate.</p>
        </div>
        <div className="bottom">
            {data.map(item=> (<Card item={item} key= {item.id}/>))}
        </div>
    </div>
  )
}

export default FeaturedProducts