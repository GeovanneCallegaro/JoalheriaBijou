import './styles.css'

export const Slider = () => {

    const handleImageOne = () => {
        const sliderContainer = document.querySelector('.sliderContainer') as HTMLElement

        sliderContainer.style.backgroundImage = `url('https://hectoralbertazzi.vteximg.com.br/arquivos/ids/171772/Desktop-Categoria-Colares%20(1).png?v=637419963878600000')`
    }

    const handleImageTwo = () => {
        const sliderContainer = document.querySelector('.sliderContainer') as HTMLElement

        sliderContainer.style.backgroundImage = `url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`
    }

    const handleImageThree = () => {
        const sliderContainer = document.querySelector('.sliderContainer') as HTMLElement

        sliderContainer.style.backgroundImage = `url('https://images.unsplash.com/photo-1620656798579-1984d9e87df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`
    }

    return (
        <div className='sliderContainer' style={{
            backgroundImage: `url('https://hectoralbertazzi.vteximg.com.br/arquivos/ids/171772/Desktop-Categoria-Colares%20(1).png?v=637419963878600000')`
        }}>
            <div className='contentContainer'>
                <div className='textContainer'>
                    <h2>A Nova Coleção de </h2><span>Ouro Minimalista</span>
                    <div className='buttonDiv'>
                        Comprar
                    </div>
                </div>
            </div>
            <div className='spinnerContainer'>
                <div className='buttonSpinner one' onClick={handleImageOne}></div>
                <div className='buttonSpinner two' onClick={handleImageTwo}></div>
                <div className='buttonSpinner three' onClick={handleImageThree}></div>
            </div>
        </div>
    )
}