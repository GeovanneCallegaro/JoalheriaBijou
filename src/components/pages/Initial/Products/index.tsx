import './styles.css'

export const Products = () => {

    const showVisualization = (event: any) => {
        const images = document.querySelectorAll('.imagemInitial') as unknown as Array<HTMLElement>
        const visualization = document.querySelectorAll('.visualization') as unknown as Array<HTMLElement>
        const visualizationElements = [...visualization]
        const elementsImages = [...images]

        elementsImages.map((el, index) => {
            if(event.getAttribute('data-initial') === visualizationElements[index].getAttribute('data-initial')) {
                visualizationElements[index].classList.add('show') 
            }
            return el
        })
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
                <div className='imageContainer'>
                    <div className='visualization' id='one' data-initial>
                        <p>Visualização rápida</p>
                    </div>
                    <img 
                        src="https://static.wixstatic.com/media/157553_5c7bfd55032b47afbf0d5d6d21856b72.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_5c7bfd55032b47afbf0d5d6d21856b72.webp"
                        alt="" 
                        onMouseEnter={(event) => showVisualization(event.target)} 
                        onMouseLeave={removeVisualization} 
                        className='imagemInitial'
                        data-initial
                    />
                    <div className='textImageContainer'>
                        <h3>Eu sou um produto!</h3>
                        <p>R$19.99</p>
                    </div>
                </div>
                <div className='imageContainer'>
                    <div className='visualization' id='two' data-initial='2'>
                        <p>Visualização rápida</p>
                    </div>
                    <img 
                        src="https://static.wixstatic.com/media/157553_477528c34660447a8a0afdbdf1a0fe05.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_477528c34660447a8a0afdbdf1a0fe05.webp" 
                        alt="" 
                        onMouseEnter={(event) => showVisualization(event.target)} 
                        onMouseLeave={removeVisualization}
                        className="imagemInitial"
                        data-initial='2'    
                    />
                    <div className='textImageContainer'>
                        <h3>Eu sou um produto!</h3>
                        <p>R$19.99</p>
                    </div>
                </div>
                <div className='imageContainer'>
                    <div className='visualization' id='three' data-initial='3'>
                        <p>Visualização rápida</p>
                    </div>
                    <img 
                        src="https://static.wixstatic.com/media/157553_693426837c2f455693946bd5ff85e975.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_693426837c2f455693946bd5ff85e975.webp" 
                        alt="" 
                        onMouseEnter={(event) => showVisualization(event.target)} 
                        onMouseLeave={removeVisualization} 
                        className='imagemInitial'
                        data-initial='3'
                    />
                    <div className='textImageContainer'>
                        <h3>Eu sou um produto!</h3>
                        <p>R$19.99</p>
                    </div>
                </div>
                <div className='imageContainer'>
                    <div className='visualization' id='four' data-initial='4'>
                        <p>Visualização rápida</p>
                    </div>
                    <img 
                        src="https://static.wixstatic.com/media/157553_abfd11f66c2a446595e5c09ce463b4b7.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_abfd11f66c2a446595e5c09ce463b4b7.webp" 
                        alt="" 
                        onMouseEnter={(event) => showVisualization(event.target)} 
                        onMouseLeave={removeVisualization}
                        className="imagemInitial"
                        data-initial='4' 
                    />
                    <div className='textImageContainer'>
                        <h3>Eu sou um produto!</h3>
                        <p>R$19.99</p>
                    </div>
                </div>
            </div>
        </div>
    )
}