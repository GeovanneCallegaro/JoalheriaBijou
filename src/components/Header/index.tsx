import './styles.css'
import {BsCartCheck} from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'



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
                    {optionsMenu.map((option, key) => {
                        return <li key={key}>{option}</li>
                    })}
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