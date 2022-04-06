import './styles.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

export const Footer = () => {
    return (
        <footer>
            <div className="socialInformation">
                <div className='socialIcon'>
                    <a href="https://github.com/GeovanneCallegaro" target="_blank" rel='noreferrer'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/geovanne-callegaro-76b1a8216/" target="_blank" rel='noreferrer'><FaLinkedin /></a>
                    <a href="mailto:callegarog00@gmail.com" target="_blank" rel='noreferrer'><AiOutlineMail/></a>
                </div>
                <a href="https://devgeovannecallegaro.vercel.app" target="_blank" rel='noreferrer'>devgeovannecallegaro.vercel.app</a>
            </div>
            <div className='textFooter'>
                <p><strong style={{color: '#000'}}>Template e Design</strong> - Design reservado a wix.com</p>
                <p>Site totalmente desenvolvido pelo desenvolvedor <a href="ttps://devgeovannecallegaro.vercel.app">Geovanne Callegaro</a></p>
            </div>
        </footer>
    )
}