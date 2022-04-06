import './styles.css'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'

export const Products = () => {
    
    const verifyVisualizationImage1 = () => {
        const visualization = document.querySelector('#one') as HTMLElement
        
        visualization.classList.add('show')
    }

    const verifyVisualizationImage2 = () => {
        const visualization = document.querySelector('#two') as HTMLElement
        
        visualization.classList.add('show')
    }

    const verifyVisualizationImage3 = () => {
        const visualization = document.querySelector('#three') as HTMLElement
        
        visualization.classList.add('show')
    }

    const verifyVisualizationImage4 = () => {
        const visualization = document.querySelector('#four') as HTMLElement
        
        visualization.classList.add('show')
    }

    const removeVisualization = () => {
        const visualization = document.querySelectorAll('.visualization') as unknown as Array<HTMLElement>
        const elements = [...visualization]

        elements.map((el) => {
            if(el.classList.contains('show')) {
                el.classList.remove('show')
            }
            return el
        })
    }

    return (
        <div className='containerProducts'>
            <div className='sliderContainerProducts'>
                <div className='arrowSliderLeft'>
                    <MdArrowBackIosNew />
                </div>
                
                <div className='imageContainer'>
                    <div className='visualization' id='one'>
                        <p>Visualização rápida</p>
                    </div>
                    <img src="https://static.wixstatic.com/media/157553_5c7bfd55032b47afbf0d5d6d21856b72.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_5c7bfd55032b47afbf0d5d6d21856b72.webp" alt="" onMouseEnter={verifyVisualizationImage1} onMouseLeave={removeVisualization} />
                    <div className='textImageContainer'>
                        <h3>Eu sou um produto!</h3>
                        <p>R$19.99</p>
                    </div>
                </div>
                <div className='imageContainer'>
                    <div className='visualization' id='two'>
                        <p>Visualização rápida</p>
                    </div>
                    <img src="https://static.wixstatic.com/media/157553_477528c34660447a8a0afdbdf1a0fe05.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_477528c34660447a8a0afdbdf1a0fe05.webp" alt="" onMouseEnter={verifyVisualizationImage2} onMouseLeave={removeVisualization}/>
                    <div className='textImageContainer'>
                        <h3>Eu sou um produto!</h3>
                        <p>R$19.99</p>
                    </div>
                </div>
                <div className='imageContainer'>
                    <div className='visualization' id='three'>
                        <p>Visualização rápida</p>
                    </div>
                    <img src="https://static.wixstatic.com/media/157553_693426837c2f455693946bd5ff85e975.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_693426837c2f455693946bd5ff85e975.webp" alt="" onMouseEnter={verifyVisualizationImage3} onMouseLeave={removeVisualization} />
                    <div className='textImageContainer'>
                        <h3>Eu sou um produto!</h3>
                        <p>R$19.99</p>
                    </div>
                </div>
                <div className='imageContainer'>
                    <div className='visualization' id='four'>
                        <p>Visualização rápida</p>
                    </div>
                    <img src="https://static.wixstatic.com/media/157553_abfd11f66c2a446595e5c09ce463b4b7.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_abfd11f66c2a446595e5c09ce463b4b7.webp" alt="" onMouseEnter={verifyVisualizationImage4} onMouseLeave={removeVisualization} />
                    <div className='textImageContainer'>
                        <h3>Eu sou um produto!</h3>
                        <p>R$19.99</p>
                    </div>
                </div>
                <div className='arrowSliderRight'>
                    <MdArrowForwardIos/>
                </div>
            </div>
        </div>
    )
}