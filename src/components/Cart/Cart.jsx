import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data = [
        {
            id:1,
            img: 'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            img2: 'https://images.pexels.com/photos/9983599/pexels-photo-9983599.jpeg',
            title: 'Long sleeve',
            desc: 'Long sleeve',
            isNew: true,
            oldPrice: 17,
            price:15,
        },
        {
            id:2,
            img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Long shirt',
            desc: 'Long shirt',
            isNew: false,
            oldPrice: 23,
            price:5,
        },
        {
            id:3,
            img: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Coat',
            desc: 'Coat',
            isNew: true,
            oldPrice: 75,
            price:19,
        },
    ]

  return (
   <div className="cart">
    <h1>Products in your Cart</h1>
    {data?.map(item => (
        <div className="item"key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className="price">1 x ${item.price}</div>
            </div>
            <DeleteOutlinedIcon className='delete'/>
        </div>
    ))}
    <div className="total">
        <span>SUBTOTAL</span>
        <span>$3524.98</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className='reset'>Reset Cart</span>
   </div>
  )
}

export default Cart