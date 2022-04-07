import './styles.css'

export const Collection = () => {

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

    const verifyVisualizationImage5 = () => {
        const visualization = document.querySelector('#five') as HTMLElement
        
        visualization.classList.add('show')
    }

    const verifyVisualizationImage6 = () => {
        const visualization = document.querySelector('#six') as HTMLElement
        
        visualization.classList.add('show')
    }

    const verifyVisualizationImage7 = () => {
        const visualization = document.querySelector('#seventh') as HTMLElement
        
        visualization.classList.add('show')
    }

    const verifyVisualizationImage8 = () => {
        const visualization = document.querySelector('#eight') as HTMLElement
        
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
        <div className="containerCollection">
            <div className='titleCollection'>
                <h1>Coleção</h1>
            </div>
            <div className='line'></div>
            <div className='imagesContainerCollection'>
                <div className="firstLineImages">
                    <div className="containerImages">
                        <div className='visualization' id='one'>
                            <p>Visualização rápida</p>
                        </div>
                        <img src="https://static.wixstatic.com/media/157553_5c7bfd55032b47afbf0d5d6d21856b72.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_5c7bfd55032b47afbf0d5d6d21856b72.webp" alt="" onMouseEnter={verifyVisualizationImage1} onMouseLeave={removeVisualization}/>
                        <div className='textImageContainer'>
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                    <div className="containerImages">
                    <div className='visualization' id='two'>
                            <p>Visualização rápida</p>
                        </div>
                        <img src="https://static.wixstatic.com/media/157553_477528c34660447a8a0afdbdf1a0fe05.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_477528c34660447a8a0afdbdf1a0fe05.webp" alt="" onMouseEnter={verifyVisualizationImage2} onMouseLeave={removeVisualization}/>
                        <div className='textImageContainer'>
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                    <div className="containerImages">
                    <div className='visualization' id='three'>
                            <p>Visualização rápida</p>
                        </div>
                        <img src="https://static.wixstatic.com/media/157553_693426837c2f455693946bd5ff85e975.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_693426837c2f455693946bd5ff85e975.webp" alt="" onMouseEnter={verifyVisualizationImage3} onMouseLeave={removeVisualization}/>
                        <div className='textImageContainer'>
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                    <div className="containerImages">
                    <div className='visualization' id='four'>
                            <p>Visualização rápida</p>
                        </div>
                        <img src="https://static.wixstatic.com/media/157553_abfd11f66c2a446595e5c09ce463b4b7.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_abfd11f66c2a446595e5c09ce463b4b7.webp" alt="" onMouseEnter={verifyVisualizationImage4} onMouseLeave={removeVisualization}/>
                        <div className='textImageContainer'>
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                </div>
                <div className="secondLineImages">
                    <div className="containerImages">
                    <div className='visualization' id='five'>
                            <p>Visualização rápida</p>
                        </div>
                        <img src="https://static.wixstatic.com/media/157553_1ce990329b054998baf81e8ab619a19c.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_1ce990329b054998baf81e8ab619a19c.webp" alt="" onMouseEnter={verifyVisualizationImage5} onMouseLeave={removeVisualization}/>
                        <div className="textImageContainer">
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                    <div className="containerImages">
                    <div className='visualization' id='six'>
                            <p>Visualização rápida</p>
                        </div>
                        <img src="https://static.wixstatic.com/media/157553_5f034647787d49fabb405a91c066a160.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_5f034647787d49fabb405a91c066a160.webp" alt="" onMouseEnter={verifyVisualizationImage6} onMouseLeave={removeVisualization}/>
                        <div className="textImageContainer">
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                    <div className="containerImages">
                    <div className='visualization' id='seventh'>
                            <p>Visualização rápida</p>
                        </div>
                        <img src="https://static.wixstatic.com/media/157553_00210e4f8a634d42b76649e84ff57028.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_00210e4f8a634d42b76649e84ff57028.webp" alt="" onMouseEnter={verifyVisualizationImage7} onMouseLeave={removeVisualization}/>
                        <div className="textImageContainer">
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                    <div className="containerImages">
                    <div className='visualization' id='eight'>
                            <p>Visualização rápida</p>
                        </div>
                        <img src="https://static.wixstatic.com/media/157553_b5e8a6f29be84fe2bebb54d0e2b1ca94.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/157553_b5e8a6f29be84fe2bebb54d0e2b1ca94.webp" alt="" onMouseEnter={verifyVisualizationImage8} onMouseLeave={removeVisualization}/>
                        <div className="textImageContainer">
                            <h3>Eu sou um produto!</h3>
                            <p>R$19.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}