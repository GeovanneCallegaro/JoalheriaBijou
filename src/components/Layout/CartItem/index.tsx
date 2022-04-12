import './styles.css'
import {BsTrash} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'

export const CartItem = (props: any) => {
    const {classname, products} = props

    return (
        <div className="modalContainer">
            <div className={`${classname} modal`}>
                <div className="titleCart">
                    <h3>Seu carrinho de compras</h3>
                    <AiOutlineClose className='icon'/>
                </div>
                <div className='modalItemsContent'>
                    {products.map((product: any) => (
                        <div className="itemModal">
                            <div className="infoItem">
                                <img 
                                    src={product.src}
                                    alt={product.id}
                                />
                                <p>{product.name}</p>
                            </div>
                            <p>R$ {product.price}</p>
                            <div className='excludeIcon'>
                                <BsTrash style={{cursor: 'pointer'}}/>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='totalPrice'>
                    <p>Total: <span>R$8000</span></p>
                </div>
            </div>
        </div>
    )
}