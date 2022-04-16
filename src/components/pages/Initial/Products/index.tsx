import { useDispatch, useSelector } from 'react-redux'
import { toogleProduct } from '../../../../store/Products/Products.actions'
import { selectAllProducts } from '../../../../store/Products/Products.selectors'
import './styles.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { useState } from 'react'

export const Products = (props: any) => {
    const {handleCart} = props
    const [scrollX, setScrollX] = useState(0)

    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)

    const handleToggle = (id: number) => {
        handleCart()
        dispatch(toogleProduct(id))
    }

    const showVisualization = (event: any, product: any) => {
        const images = document.querySelectorAll('.imagemInitial') as unknown as Array<HTMLElement>
        const visualization = document.querySelectorAll('.visualization') as unknown as Array<HTMLElement>
        const visualizationElements = [...visualization]
        const elementsImages = [...images]

        elementsImages.map((el, index) => {
            if(event.getAttribute('data-initial') === visualizationElements[index].getAttribute('data-initial')) {
                visualizationElements[index].classList.add('show') 
                event.setAttribute('src', product[1])
            }
            return el
        })
    }
    
    const removeVisualization = (event: any, product: any) => {
        const visualization = document.querySelectorAll('.visualization') as unknown as Array<HTMLElement>
        const elements = [...visualization]

        elements.map((el) => {
            if(el.classList.contains('show')) {
                el.classList.remove('show')
                event.setAttribute('src', product[0])
            }
            return el
        })
    }

    const moveImagesLeft = () => {
        let valueScroll = scrollX + Math.round(window.innerWidth / 2);
        if(valueScroll > 0) {
            valueScroll = 0
        }
        setScrollX(valueScroll)
    }

    const moveImagesRight = () => {
        const listWidth = products.length * 250

        if(window.innerWidth < 540) {
            if((scrollX * -1) >= (listWidth - 250)) {
                setScrollX(0)
            } else {
                setScrollX((s) => s - 250)
            }
        }
        
        if(window.innerWidth > 540) {
            if((scrollX * -1) >= (listWidth - 500)) {
                setScrollX(0)
            } else {
                setScrollX((s) => s - 250)
            }
        }

        if(window.innerWidth > 790) {
            if((scrollX * -1) >= (listWidth - 750)) {
                setScrollX(0)
            } else {
                setScrollX((s) => s - 0)
            }
        }

        if(window.innerWidth > 1040) {
            if((scrollX * -1) >= (listWidth / 2)) {
                setScrollX(0)
            } else {
                setScrollX((s) => s - 0)
            }
        }
    }

    return (
        <div className='containerProducts'>
            <div className='arrowMoveSliderContent'>
                    <AiOutlineArrowLeft className='arrowSliderLeft' onClick={moveImagesLeft}/>
            </div>
            <div className='sliderContainerProducts' >
                <div className='listProducts' style={{
                    marginLeft: scrollX,
                    width: products.length * 250
                }}>
                {products.map((product: any) => (
                        <div className='imageContainer'>
                            <div className='visualization' data-initial={product.id}>
                                <p>Visualização rápida</p>
                            </div>
                            <Link to={`/product/${product.id}`}>
                                <img 
                                    src={product.src}
                                    alt={product.id}
                                    onMouseEnter={(event) => showVisualization(event.target, product.src)} 
                                    onMouseLeave={(event) => removeVisualization(event.target, product.src)}
                                    className='imagemInitial'
                                    data-initial={product.id}
                                />
                            </Link>
                            <div className='textImageContainer'>
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>R$ {product.price}</p>
                                </div>
                                <div className='plusDiv'>
                                    <AiOutlineShoppingCart className='iconPlus' onClick={() => handleToggle(product.id)}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                <div className='arrowMoveSliderContent'>
                    <AiOutlineArrowRight className='arrowSliderRight' onClick={moveImagesRight}/>
                </div>
        </div>
    )
}