import './styles.css'
import {BsCartCheck} from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom'


interface Props {
    navText: Array<any>
}

export const Header = ({...navText}: Props) => {
    const optionsMenu = navText.navText.map((item) => {
        return item
    })

    const handleMenu = () => {
        const menu = document.querySelector('.menuMobileOptions') as HTMLElement
        
        if(menu.classList.contains('show')) {
            menu.classList.remove('show')
        } else {
            menu.classList.add('show')
        }
    }

    return (
        <>
        <header>
            <div className='logoHeaderContainer'>
                <p>Logo</p>
            </div>
            <nav className='menuContainer'>
                <ul>
                    <Link to="/"><li>{optionsMenu[0]}</li></Link>
                    <Link to="/colecao"><li>{optionsMenu[1]}</li></Link>
                    <Link to="/loja"><li>{optionsMenu[2]}</li></Link>
                    <Link to="/sobre"><li>{optionsMenu[3]}</li></Link>
                    <Link to="/contato"><li>{optionsMenu[4]}</li></Link>
                </ul>
            </nav>

            <div className='loginSection'>
                <FaUserCircle className='userIcon'/>
                <p>Login</p>
                <BsCartCheck className='cartIcon'/>
            </div>

            <div className='menuMobile' >
                <BsCartCheck className='cartIcon'/>
                <AiOutlineMenu onClick={handleMenu} className='menuIcon'/>
            </div>
        </header>
        <nav className='menuMobileOptions'>
            <div className='loginSectionMobile'>
                <FaUserCircle className='userIcon'/>
                <p>Login</p>
            </div>
        <ul>
            {optionsMenu.map((option, key) => {
                return <li key={key}>{option}</li>
            })}
        </ul>
        </nav>
    </>
    )
}