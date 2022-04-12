import './styles.css'

export const About = () => {
    return (
        <div className='aboutContainer'>
            <div className='titleAbout'>
                <h1>Nossa História</h1>
            </div>
            <div className='line'></div>
            <div className='textAbout'>
                <p className='firstPAbout'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis perspiciatis ullam dicta cumque distinctio exercitationem velit adipisci, ut maiores possimus ad voluptates atque nemo nam veniam delectus enim temporibus nulla?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam necessitatibus rerum maxime, mollitia fugiat, laudantium qui iusto nam explicabo nemo consectetur. Ut nesciunt ad similique laborum voluptatem at delectus quidem?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt id ea ullam sequi, commodi totam veniam inventore cumque consectetur quaerat, ipsam eveniet est repudiandae nisi earum distinctio numquam maxime quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni culpa corporis, tenetur dolorem repellendus architecto. Non vel soluta rem assumenda ea, inventore esse, porro id blanditiis, quasi quidem maiores sunt?</p>
            </div>
            <div className='imageContainerAbout'>
                <img src="https://static.wixstatic.com/media/157553_85e6da704e15413f9e2c35bc45140e1f.jpg/v1/fill/w_412,h_297,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/157553_85e6da704e15413f9e2c35bc45140e1f.jpg" alt="" className='firstImageAbout'/>
                <img src="https://static.wixstatic.com/media/157553_ff2a433785774361b1bc29d256d92b9d.jpg/v1/fill/w_312,h_297,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/157553_ff2a433785774361b1bc29d256d92b9d.jpg" alt="" />
            </div>
        </div>
    )
}