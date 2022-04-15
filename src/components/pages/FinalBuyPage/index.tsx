import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectSelectedProducts, totalPriceProducts } from '../../../store/Products/Products.selectors'
import './styles.css'

export const FinalBuyPage = () => {
    const products = useSelector(selectSelectedProducts)
    const totalPrice = useSelector(totalPriceProducts)
    const [cepValue, setCepValue] = useState('')
    const [cepInformation, setCepInformation] = useState({}) as any

    const handleCep = async (e: any) => {
        e.preventDefault()
        const localInformationsByCep = document.querySelector('.localInformationsByCep') as HTMLElement

        const data = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
            .then((response) => response.json())
            
        setCepInformation(data)

        localInformationsByCep.style.display = 'flex'
    
    }

    return (
        <div className='contentFinalBuy'>
            <div className='productsBuy'>
                {products.map((product: any) => (
                    <div className='productBuy'>
                        <div className='infoProduct'>
                            <img src={product.src[0]} alt="Imagem do produto" />
                            <div className='productPrice'>
                                <h3>{product.name}</h3>
                                <p>R$ {product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='totalPriceBuy'>
                    {products.length > 0 ? (
                        <p>Total: <span>{totalPrice.toLocaleString('pt-bt', {
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL'
                        })}</span></p>
                    ): ('')}
                </div>
            </div>
            <div className='informationBuy'>
                <div className='localInformationsByCep'>
                    <h1>Bairro: {cepInformation.bairro}</h1>
                    <p>Rua: {cepInformation.logradouro}</p>
                </div>
                <div className='cepForm'>
                    <input type="number" name='cep' value={cepValue} onChange={(e) => (setCepValue(e.target.value))} placeholder="Digite seu cep"/>
                    <button onClick={(e) => handleCep(e)}>Pesquisar</button>
                </div>
                <div className='buyButtonFinal'>
                    <button>Realizar compra</button>
                </div>
            </div>
        </div>
    )
}