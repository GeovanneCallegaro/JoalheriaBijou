import './styles.css'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

export const Contact = () => {
    const [data, setData] = useState({
        user_name: '',
        user_surename: '',
        user_email: '',
        data_message: ''
    })

    const handleChange = (e: any) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const checkFields = (e: any) => {
        e.preventDefault()

        const nameInput = document.querySelector('.nameField') as HTMLElement
        const emptyFieldName = document.querySelector('.emptyFieldName') as HTMLElement

        const surenameInput = document.querySelector('.surenameField') as HTMLElement
        const emptyFieldSurename = document.querySelector('.emptyFieldSurename') as HTMLElement

        const emailInput = document.querySelector('.emailField') as HTMLElement
        const emptyFieldEmail = document.querySelector('.emptyFieldEmail') as HTMLElement
        
        const dataField = document.querySelector('.dataField') as HTMLElement
        const emptyFieldData = document.querySelector('.emptyFieldData') as HTMLElement

        if(!data.user_name) {
            nameInput.style.border = '2px solid #ff4444'
            emptyFieldName.style.display = 'block'

            setInterval(() => {
                nameInput.style.border = '2px solid var(--primary-color)'
                emptyFieldName.style.display = 'none'
            }, 5000)
            return
        }

        if(!data.user_surename) {
            surenameInput.style.border = '2px solid #ff4444'
            emptyFieldSurename.style.display = 'block'

            setInterval(() => {
                surenameInput.style.border = '2px solid var(--primary-color)'
                emptyFieldSurename.style.display = 'none'
            }, 5000)
            return
        }

        if(!data.user_email) {
            emailInput.style.border = '2px solid #ff4444'
            emptyFieldEmail.style.display = 'block'

            setInterval(() => {
                emailInput.style.border = '2px solid var(--primary-color)'
                emptyFieldEmail.style.display = 'none'
            }, 5000)
            return
        }

        if(!data.data_message) {
            dataField.style.border = '2px solid #ff4444'
            emptyFieldData.style.display = 'block'

            setInterval(() => {
                dataField.style.border = '2px solid var(--primary-color)'
                emptyFieldData.style.display = 'none'
            }, 5000)
            return
        }

        if(data.user_name && data.user_surename && data.user_email && data.data_message) {
            sendEmail()
        }
    }

    const sendEmail = () => {
        const sucessField = document.querySelector('.sucessEmail') as HTMLElement

        emailjs.init('cxrDa6JnC1GJIdApn')

        emailjs.send('service_raxyksg', 'template_slsk82o', data)
            .then((response) => {
                if(response.status === 200) {
                    sucessField.style.display = 'block'

                    setInterval(() => {
                        sucessField.style.display = 'none'
                    }, 5000)

                    return
                }

                if(response.status !== 200) {
                    sucessField.innerText = 'Houve algum problema! Por favor, tente mais tarde!'
                    sucessField.style.display = 'block'
                    sucessField.style.color = '#ff4444'

                    setInterval(() => {
                        sucessField.style.display = 'none'
                    }, 5000)
                }

                console.log(response.text)
            })
            .catch(err => console.log(err.text))
    }

    return (
        <div className='containerContact'>
            <div className='titleContact'>
                <h1>Contato</h1>
            </div>
            <div className="line"></div>
            <div className='descriptionContact'>
                <p>Envie suas perguntas, dúvidas, ou comentários gerais no espaço abaixo com seu nome e email</p>
            </div>
            <div className='formSection'>
                <p className='sucessEmail'> Email enviado com sucesso! Obrigado!</p>

                <label className='name'>Nome</label>
                <input type="text" name='user_name' onChange={(e) => handleChange(e)} className='nameField'/>
                <p className='emptyFieldName'>O campo de nome é obrigatório!</p>
                <label>Sobrenome</label>
                <input type="text" name='user_surename' onChange={(e) => handleChange(e)} className='surenameField'/>
                <p className='emptyFieldSurename'>O campo de sobrenome é obrigatório!</p>
                <label className='email'>Email</label>
                <input type="email" name='user_email' onChange={(e) => handleChange(e)} className='emailField'/>
                <p className='emptyFieldEmail'>O campo de email não é válido!</p>
                <label>Mensagem</label>
                <textarea cols={10} rows={5} name='data_message' onChange={(e) => handleChange(e)} className='dataField'></textarea>
                <p className='emptyFieldData'>O campo de email não é válido!</p>
                <button onClick={(e) => checkFields(e)}>Enviar</button>
            </div> 
        </div>
    )
}