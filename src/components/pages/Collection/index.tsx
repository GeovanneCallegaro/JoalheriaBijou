/* import css */
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toogleProduct } from '../../../store/Products/Products.actions'
import { selectFiveProducts, selectFourProducts } from '../../../store/Products/Products.selectors'
import './styles.css'
import { Link } from 'react-router-dom'

export const Collection = (props: any) => {
    const {handleCart} = props

    const productsFour = useSelector(selectFourProducts)
    const allProducts = useSelector(selectFiveProducts)
    const dispatch = useDispatch()

    const handleToggle = (id: number) => {
        handleCart()
        dispatch(toogleProduct(id))
    }

    /* function to show preview div in image */
    const showVisualization = (event: any) => {
        const images = document.querySelectorAll('.imagem') as unknown as Array<HTMLElement>
        const visualization = document.querySelectorAll('.visualization') as unknown as Array<HTMLElement>
        const visualizationElements = [...visualization]
        const elementsImages = [...images]

        elementsImages.map((el, index) => {
            if(event.getAttribute('data-image') === visualizationElements[index].getAttribute('data-image')) {
                visualizationElements[index].classList.add('show') 
            }
            return el
        })
    }

    /* function to remove div from view in image */
    const removeVisualization = () => {
        const visualization = document.querySelectorAll('.visualization') as unknown as Array<HTMLElement>
        const elements = [...visualization]

        elements.map((el) => {
            if(el.classList.contains('show')) {
                el.classList.remove('show')
            }
            return el
        })
    }

    return (
        <div className="containerCollection">
            <div className='titleCollection'>
                <h1>Coleção</h1>
            </div>
            <div className='line'></div>
            <div className='imagesContainerCollection'>
                <div className="firstLineImages">
                    {productsFour.map((product: any) => (
                        <div className="containerImages">
                            <div className='visualization collection' data-image={product.id}>
                                <p>Visualização rápida</p>
                            </div>
                            <Link to={`/product/${product.id}`}>
                                <img 
                                    src={product.src}
                                    alt={product.id}
                                    onMouseEnter={(event) => showVisualization(event.target)}
                                    onMouseLeave={removeVisualization}
                                    className="imagem"
                                    data-image={product.id}
                                />
                            </Link>
                            <div className='textImageContainerCollection'>
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>{product.price}</p>
                                </div>
                                <div className='plusDiv'>
                                    <AiOutlineShoppingCart className='iconPlus' onClick={() => handleToggle(product.id)}/>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
                <div className='secondLineImages'>
                    {allProducts.map((product: any) => (
                        <div className="containerImages">
                        <div className='visualization collection' data-image={product.id}>
                            <p>Visualização rápida</p>
                        </div>
                        <Link to={`/product/${product.id}`}>
                            <img 
                                src={product.src}
                                alt={product.id}
                                onMouseEnter={(event) => showVisualization(event.target)}
                                onMouseLeave={removeVisualization}
                                className="imagem"
                                data-image={product.id}
                            />
                        </Link>
                        <div className='textImageContainerCollection'>
                            <div>
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </div>
                            <div className='plusDiv'>
                                    <AiOutlineShoppingCart className='iconPlus' onClick={() => handleToggle(product.id)}/>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}