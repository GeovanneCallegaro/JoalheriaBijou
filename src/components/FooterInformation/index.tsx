import './styles.css'
import {BsShieldShaded} from 'react-icons/bs'

interface Props {
    navText: Array<any>
}

export const FooterInformation = ({...navText}: Props) => {
    const optionsUl = navText.navText.map((item: any) => {
        return item
    })

    return (
        <section className='containerAllInformations'>
            <div className='descriptionShop'>
                <h3>Loja</h3>
                <ul>
                    {optionsUl.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='informationShop'>
                <div className='titleInformation'>
                    <BsShieldShaded className='icon'/>
                    <p>Segurança</p>
                </div>
                <div className="pInformation">
                    <p>Ambiente 100% Seguro</p>
                    <p>Sua Informação é Protegida Pela</p>
                    <p>Criptografia SSL 256-Bit</p>
                </div>
                <div className='paymentInformation'>
                    <p>Métodos De</p>
                    <p>Pagamentos Aceitos</p>
                    <img src="https://static.wixstatic.com/media/8a3e6d_fab7c93ba6764213af63053aefc382b9~mv2.png/v1/crop/x_45,y_39,w_1322,h_477/fill/w_204,h_73,al_c,usm_0.66_1.00_0.01,enc_auto/Me%CC%81todos%20de%20pagamentos%20aceitos.png" alt="" />
                </div>
            </div>
            <div className='formContact'>
                <h3>Cadastre-se para receber nossas ofertas</h3>
                <form>
                    <label htmlFor="email">Insira seu email aqui *</label>
                    <input type="email" />
                    <button disabled>Inscrever-se</button>
                </form>
            </div>
        </section>
    )
}