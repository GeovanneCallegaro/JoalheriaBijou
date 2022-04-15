import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectAllProducts } from '../../../store/Products/Products.selectors'
import './styles.css'
import {AiOutlineHeart} from 'react-icons/ai'
import { toogleProduct } from '../../../store/Products/Products.actions'

export const ProductPage = (props: any) => {
    const {...id} = useParams()
    const dispatch = useDispatch()
    const {handleCart} = props

    const products = useSelector(selectAllProducts)
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const numberID = Number(Object.values(id))
        
        if(loading === true) {
            const productFilter = products.filter((product: any) => product.id === numberID)
            setProduct(productFilter)
            setLoading(false)
        }

    }, [loading, product, id])

    const handleAddCart = () => {
        handleCart()
        dispatch(toogleProduct(Number(Object.values(id))))
    }


    return (
        <div className='contentProduct'>
            {loading === false ? (
                <div className='contentProductPage'>
                    <div className='imageAndAboutProduct'>
                        <div className='imageSpotlight'>
                            <img 
                                src={product[0].src[0]}
                                alt='Imagem do produto'
                                className='imageSpotlightExibition'
                            />
                        </div>
                        <div className='totalImagesProduct'>
                            {product[0].src.map((src: any) => (
                                <img 
                                    src={src}
                                    alt="Imagem do projeto"
                                    onClick={(e) => {
                                        const event = e.target as unknown as HTMLElement
                                        const imageSpotlight = document.querySelector('.imageSpotlightExibition') as HTMLElement
                                        const src = event.getAttribute('src') as string
                                        
                                        imageSpotlight.setAttribute('src', src)
                                    }}
                                />
                            ))}
                        </div>
                        <div className='aboutProductText'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores odit ab assumenda magni deserunt molestias enim suscipit quasi quos laborum tempore, saepe blanditiis impedit libero fugiat eveniet vel vitae sunt?</p>
                        </div>
                    </div>

                    <div className='buyProductSection'>
                        <div className='infoBuyProduct'>
                            <h1>{product[0].name}</h1>

                            <p>R$ {product[0].price}</p>
                        </div>

                        <div className='buttonsProductBuy'>
                            <div className='buttonAddCartSection'>
                                <button onClick={handleAddCart}>Adicionar ao carrinho</button>
                                <div className='buttonHeart'><AiOutlineHeart /></div>
                            </div>
                            <button className='buttonBuyProduct'>Comprar</button>
                        </div>
                    </div>
                </div>
            ) : ('')}

            {loading === true ? (
                <div className='loader'>
                    <div className="inner one"></div>
                    <div className="inner two"></div>
                    <div className="inner three"></div>
                </div>
            ): ('')}
        </div>
    )
}