import './styles.css'
import {AiOutlineInbox} from 'react-icons/ai'
import {RiMap2Line} from 'react-icons/ri'
import {VscCreditCard} from 'react-icons/vsc'
import {BiLike} from 'react-icons/bi'

export const SectionInformation = () => {
    return (
        <section className='container'>
            <div className='containerFrete'>
                <AiOutlineInbox className='icon'/>
                <h3>Frete Grátis</h3>
                <span>Confira Condições</span>
            </div>
            <div className='containerMap'>
                <RiMap2Line className='icon'/>
                <h3>Enviamos</h3>
                <span>para todo o brasil</span>
            </div>
            <div className='containerCard'>
                <VscCreditCard className='icon'/>
                <h3>Até 12x sem juros</h3>
                <span>10% off no boleto</span>
            </div>
            <div className='containerSecurity'>
                <BiLike className='icon'/>
                <h3>100% Seguro</h3>
                <span>Certificado SSL</span>
            </div>
        </section>
    )
}