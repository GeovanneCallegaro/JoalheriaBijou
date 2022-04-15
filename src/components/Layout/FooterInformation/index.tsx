/* import css and icons */
import './styles.css'
import {BsShieldShaded} from 'react-icons/bs'

import emailjs from '@emailjs/browser'
import { useState } from 'react'

/* typescript interface for props */
interface Props {
    navText: Array<any>
}

export const FooterInformation = ({...navText}: Props) => {
    const [value, setValue] = useState('')

    /* anonymous function to map props to a constant */
    const optionsUl = navText.navText.map((item: any) => {
        return item
    })

    const checkEmail = (e: any) => {
        e.preventDefault()
        
        const p = document.querySelector('.paragraphErrorEmail') as HTMLElement
        const input = document.querySelector('.inputEmailFooter') as HTMLElement
        const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g
        
        if(!value ) {
            input.style.border = '2px solid #ff4444'
            p.style.display = 'block'

            setInterval(() => {
                input.style.border = '2px solid var(--primary-color)'
                p.style.display = 'none'
            }, 5000)

            return
        } 

        if(emailRegex.test(value) === false) {
            input.style.border = '2px solid #ff4444'
            p.style.display = 'block'

            setInterval(() => {
                input.style.border = '2px solid var(--primary-color)'
                p.style.display = 'none'
            }, 5000)
            return
        }

        sendEmail()
    }

    const sendEmail = () => {
        emailjs.init('cxrDa6JnC1GJIdApn')

        emailjs.send('service_raxyksg', 'template_inimkvb', {
            email_user: value,
            name_emprise: 'Geovanne Callegaro', 
        })
            .then(response => console.log('Sucess' + response.status + response.text))
            .catch(err => console.log('Error!' + err.status + err.text))
    }

    return (
        <section className='containerAllInformations'>
            <div className='descriptionShop'>
                <h3>Loja</h3>
                <ul>
                    {/*map to list for footer information*/}
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
                <form onSubmit={(e) => checkEmail(e)}>
                    <label htmlFor="email">Insira seu email aqui *</label>
                    <input type="email" value={value} onChange={(e) => setValue(e.target.value)} className='inputEmailFooter'/>
                    <p className='paragraphErrorEmail'>Insira um email válido!</p>
                    <input type="submit" className='inputButtonSubmit' value='Inscrever-se'/>
                </form>
            </div>
        </section>
    )
}