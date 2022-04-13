import './styles.css'
import { AiOutlineClose } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { toogleProduct } from '../../../store/Products/Products.actions'
import { useDispatch } from 'react-redux'


export const CartItem = (props: any) => {
    const {products, totalPrice, className, closeCart} = props
    const dispatch = useDispatch()

    const handleToggle = (id: number) => {
        dispatch(toogleProduct(id))
    }

    return (
        <div className={`containerCart ${className}`}>
            <div className='headerCartContainer'>
                <AiOutlineClose onClick={closeCart}/>
                <h2>SEU CARRINHO ({products.length} {products.length === 1 ? 'Item' : 'Itens'})</h2>
            </div>
            
            {products.length > 0 ? (
                <div className='containerCartItems'>
                    {products.map((product: any) => (
                        <div className='containerCartItem'>
                            <div className='imageCartItem'>
                                <img src={product.src} />
                            </div>
                            <div className='infosCartItem'>
                                <h4>{product.name}</h4>
                                <p>R$ {product.price}</p>
                            </div>
                            <div className='excludeCartItem'>
                                <BsTrash onClick={() => handleToggle(product.id)}/>
                            </div>
                        </div>
                    ))}
                </div>
            ): ('')}
            {products.length === 0 ? (
                <>
                <div className='containerEmpty'>
                    <div className='textEmptyCartContainer'>
                        <h2>Seu carrinho de compras está vazio</h2>
                        <p>Navegue pelas categorias da loja ou faça uma busca pelo seu produto</p>
                        <div onClick={closeCart}>Continuar Comprando</div>
                    </div>
                </div>
                </>
            ): ('')}
            <div className='totalPriceContainer'>
                {products.length > 0 ? (
                    <div className='totalPrice'>
                        <p>Subtotal: <span>{totalPrice.toLocaleString('pt-bt', {
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL'
                        })}</span></p>
                    </div>
                ): ('')}
            </div>

                {products.length > 0 ? (
                    <div className='buttonsSection'>
                        <div className='continuesCart' onClick={closeCart}>Continuar Comprando</div>
                        <div className='finishCart'>Finalizar Compra</div>
                    </div>
                ): ('')}
        </div>
    )
}