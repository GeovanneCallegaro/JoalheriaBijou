import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'
import users from '../../../mocks/users.json'

export const Login = () => {
    const history = useHistory()

    const [data, setData] = useState({
        email: '', 
        password: ''
    })

    const handleChange = (e: any) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const formError = () => {
        const inputEmail = document.querySelector('#inputEmail') as HTMLElement
        const inputPassword = document.querySelector('#passwordEmail') as HTMLElement
        const errorEmail = document.querySelector('.errorEmail') as HTMLElement
        const errorPassword = document.querySelector('.errorPassword') as HTMLElement
        const errorEmailRegex = document.querySelector('.errorEmailRegex') as HTMLElement
        const errorEmailMatch = document.querySelector('.errorEmailMatch') as HTMLElement
        const errorPasswordMatch = document.querySelector('.errorPasswordMatch') as HTMLElement

        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

        if(!data.email) {
            inputEmail.style.border = '2px solid #ff4444'
            errorEmail.style.display = 'block'

            setInterval(() => {
                inputEmail.style.border = '2px solid var(--primary-color)'
                errorEmail.style.display = 'none'
            }, 5000)
        }

        if(emailRegex.test(data.email) === false) {
            inputEmail.style.border = '2px solid #ff4444'
            errorEmailRegex.style.display = 'block'

            setInterval(() => {
                inputEmail.style.border = '2px solid var(--primary-color)'
                errorEmailRegex.style.display = 'none'
            }, 5000)
        }

        if(data.email !== users.users[0].email) {
            inputEmail.style.border = '2px solid #ff4444'
            errorEmailMatch.style.display = 'block'

            setInterval(() => {
                inputEmail.style.border = '2px solid var(--primary-color)'
                errorEmailMatch.style.display = 'none'
            }, 5000)
        }

        if(!data.password) {
            inputPassword.style.border = '2px solid #ff4444'
            errorPassword.style.display = 'block'

            setInterval(() => {
                inputPassword.style.border = '2px solid var(--primary-color)'
                errorPassword.style.display = 'none'
            }, 5000)
        }

        if(data.password !== users.users[0].password) {
            inputPassword.style.border = '2px solid #ff4444'
            errorPasswordMatch.style.display = 'block'

            setInterval(() => {
                inputPassword.style.border = '2px solid var(--primary-color)'
                errorPasswordMatch.style.display = 'none'
            }, 5000)
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g
        

        if(!data.email) {
            formError()
        }

        
        if(emailRegex.test(data.email) === false) {
            formError()
        }
        
        if(data.email !== users.users[0].email) {
            formError()
        }
        
        if(data.password !== users.users[0].password) {
            formError()
        }

        if(!data.password) {
            formError()
        }

        if(data.email === users.users[0].email && data.password === users.users[0].password) {
            history.push('/inicio')
        }
    }


    return (
        <div className='loginPageContainer'>
            <div className='titleLoginContainer'>
                <h1>Login</h1>
            </div>
            <div className='line'></div>
            <div className='containerForm'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' onChange={(e) => handleChange(e)} id='inputEmail'/>
                    <p className='errorEmail'>O email é obrigatório!</p>
                    <p className='errorEmailRegex'>Insira um email válido!</p>
                    <p className='errorEmailMatch'>Email incorreto! Tente novamente!</p>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name='password' onChange={(e) => handleChange(e)} id='passwordEmail'/>
                    <p className='errorPassword'>A senha é obrigatória!</p>
                    <p className='errorPasswordMatch'>A senha está incorreta!</p>
                    <input type="submit" className='buttonSubmitLogin'/>
                </form>
            </div>
        </div>
    )
}