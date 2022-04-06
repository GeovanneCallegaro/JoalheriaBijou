import './styles.css'
import {BsCartCheck} from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'


interface Props {
    navText: Array<any>
}

export const Header = ({...navText}: Props) => {
    const optionsMenu = navText.navText.map((item) => {
        return item
    })

    return (
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
        </header>
    )
}