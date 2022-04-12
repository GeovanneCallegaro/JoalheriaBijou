/* import css */
import './styles.css'

export const Collection = () => {

    /* function to show preview div in image */
    const showVisualization = (event: any) => {
        const images = document.querySelectorAll('.imagem') as unknown as Array<HTMLElement>
        const visualization = document.querySelectorAll('.visualization') as unknown as Array<HTMLElement>
        const visualizationElements = [...visualization]
        const elementsImages = [...images]

        elementsImages.map((el, index) => {
            if(event.getAttribute('data-image') === visualizationElements[index].getAttribute('data-image')) {
                visualizationElements[index].classList.add('show') 
            }
            return el
        })
    }

    /* function to remove div from view in image */
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
        <div className="containerCollection">
            <div className='titleCollection'>
                <h1>Coleção</h1>
            </div>
            <div className='line'></div>
            <div className='imagesContainerCollection'>
                <div className="firstLineImages">
                    <div className="containerImages">
                        <div className='visualization collection' id='one' data-image>
                            <p>Visualização rápida</p>
                        </div>
                        <img 
                            src="https://static.wixstatic.com/media/157553_5c7bfd55032b47afbf0d5d6d21856b72.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_5c7bfd55032b47afbf0d5d6d21856b72.webp" 
                            alt="Imagem 1" 
                            onMouseEnter={(event) => showVisualization(event.target)} 
                            onMouseLeave={removeVisualization} 
                            className="imagem" 
                            data-image
                        />
                        <div className='textImageContainerCollection'>
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                    <div className="containerImages">
                    <div className='visualization collection' id='two' data-image='2'>
                            <p>Visualização rápida</p>
                        </div>
                        <img 
                            src="https://static.wixstatic.com/media/157553_477528c34660447a8a0afdbdf1a0fe05.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_477528c34660447a8a0afdbdf1a0fe05.webp" 
                            alt=""  
                            onMouseEnter={(event) => showVisualization(event.target)} 
                            onMouseLeave={removeVisualization} 
                            className="imagem" 
                            data-image='2'
                        />
                        <div className='textImageContainerCollection'>
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                    <div className="containerImages">
                    <div className='visualization collection' id='three' data-image='3'>
                            <p>Visualização rápida</p>
                        </div>
                        <img 
                            src="https://static.wixstatic.com/media/157553_693426837c2f455693946bd5ff85e975.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_693426837c2f455693946bd5ff85e975.webp" 
                            alt="" 
                            onMouseEnter={(event) => showVisualization(event.target)} 
                            onMouseLeave={removeVisualization} 
                            className="imagem" 
                            data-image='3'
                        />
                        <div className='textImageContainerCollection'>
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                    <div className="containerImages">
                    <div className='visualization collection' id='four' data-image='4'>
                            <p>Visualização rápida</p>
                        </div>
                        <img 
                            src="https://static.wixstatic.com/media/157553_abfd11f66c2a446595e5c09ce463b4b7.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_abfd11f66c2a446595e5c09ce463b4b7.webp" 
                            alt="" 
                            onMouseEnter={(event) => showVisualization(event.target)} 
                            onMouseLeave={removeVisualization} 
                            className="imagem" 
                            data-image='4'
                        />
                        <div className='textImageContainerCollection'>
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                </div>
                <div className="secondLineImages">
                    <div className="containerImages">
                    <div className='visualization collection' id='five' data-image='5'>
                            <p>Visualização rápida</p>
                        </div>
                        <img 
                            src="https://static.wixstatic.com/media/157553_1ce990329b054998baf81e8ab619a19c.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_1ce990329b054998baf81e8ab619a19c.webp" 
                            alt="" 
                            onMouseEnter={(event) => showVisualization(event.target)} 
                            onMouseLeave={removeVisualization} 
                            className="imagem" 
                            data-image='5'
                        />
                        <div className="textImageContainerCollection">
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                    <div className="containerImages">
                    <div className='visualization collection' id='six' data-image='6'>
                            <p>Visualização rápida</p>
                        </div>
                        <img 
                            src="https://static.wixstatic.com/media/157553_5f034647787d49fabb405a91c066a160.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_5f034647787d49fabb405a91c066a160.webp" 
                            alt="" 
                            onMouseEnter={(event) => showVisualization(event.target)} 
                            onMouseLeave={removeVisualization} 
                            className="imagem" 
                            data-image='6'
                        />
                        <div className="textImageContainerCollection">
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                    <div className="containerImages">
                    <div className='visualization collection' id='seventh' data-image='7'>
                            <p>Visualização rápida</p>
                        </div>
                        <img 
                            src="https://static.wixstatic.com/media/157553_00210e4f8a634d42b76649e84ff57028.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_00210e4f8a634d42b76649e84ff57028.webp" 
                            alt="" 
                            onMouseEnter={(event) => showVisualization(event.target)} 
                            onMouseLeave={removeVisualization} 
                            className="imagem" 
                            data-image='7'
                        />
                        <div className="textImageContainerCollection">
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                    <div className="containerImages">
                    <div className='visualization collection' id='eight' data-image='8'>
                            <p>Visualização rápida</p>
                        </div>
                        <img 
                            src="https://static.wixstatic.com/media/157553_b5e8a6f29be84fe2bebb54d0e2b1ca94.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_b5e8a6f29be84fe2bebb54d0e2b1ca94.webp" 
                            alt="" 
                            onMouseEnter={(event) => showVisualization(event.target)} 
                            onMouseLeave={removeVisualization} 
                            className="imagem" 
                            data-image='8'
                        />
                        <div className="textImageContainerCollection">
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}