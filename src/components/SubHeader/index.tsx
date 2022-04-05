import './styles.css'
import {FaWhatsapp} from 'react-icons/fa'
import {AiOutlineInfoCircle, AiOutlineSearch} from 'react-icons/ai'

export const SubHeader = () => {
    return (
        <div className='subHeaderContainer'>
            <div className='contactSubHeader'>
                <div className='firstIconsSubHeader whatsappDiv'>
                    <a href="/"> <FaWhatsapp className='iconWhatsapp'/> <p>Fale pelo whatsapp</p></a>
                </div>
                <div className="firstIconsSubHeader">
                    <a href="/"><AiOutlineInfoCircle className='iconQuestions'/> <p>Tire suas dúvidas</p></a>
                </div>
            </div>
            <div className='searchSubHeader'>
                <input type="text" name='text' placeholder="Pesquisar" /> <AiOutlineSearch className='searchIcon'/>
            </div>
        </div>
    )
}