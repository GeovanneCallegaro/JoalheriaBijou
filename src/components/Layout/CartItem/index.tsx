import './styles.css'
import {BsTrash} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { toogleProduct } from '../../../store/Products/Products.actions'
import { useDispatch } from 'react-redux'

export const CartItem = (props: any) => {
    const {classname, products, removeDropdown, totalPrice} = props
    const dispatch = useDispatch()

    const removeItemToCart = (id: number) => {
        dispatch(toogleProduct(id))
    }

    return (
        <div className="modalContainer">
            <div className={`${classname} modal`}>
                <div className="titleCart">
                    <h3>Seu carrinho de compras</h3>
                    <AiOutlineClose className='icon' onClick={removeDropdown}/>
                </div>
                <div className='modalItemsContent'>
                    {products.length > 0 ?
                        (products.map((product: any) => (
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
                                    <BsTrash style={{cursor: 'pointer', color: 'red'}} onClick={() => removeItemToCart(product.id)}/>
                                </div>
                            </div>
                        ))) : (
                            <>
                                <p className='emptyCart'>Não há items no seu carrinho. Vamos comprar!</p>
                            </>)
                    }
                </div>
                {products.length > 0 ? (
                    <div className='totalPrice'>
                        <p>Total: <span>{totalPrice.toLocaleString('pt-bt', {
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL'
                        })}</span></p>
                    </div>
                ): ''}
            </div>
        </div>
    )
}