import './styles.css'

export const Shop = () => {
    return (
        <div className="containerShop">
            <div className="firstTextSection">
                <h1>Loja</h1>
                <div className="line"></div>
                <p>Nossa coleção está disponível em nossas lojas em São Paulo e no Rio de Janeiro</p>
            </div>
            <div className="textEnderation">
                <div className="enderationDiv">
                    <h3>NOME SP</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className="enderationDiv">
                    <h3>NOME RJ</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>Rio de Janeiro, RJ 12345-678</p>
                </div>
            </div>
            <div className="revendersSection">
                <h2>Revendedores</h2>
                <div className="line"></div>
                <div className="revendedorName">
                    <p className='firstPRevendedor'>Jewels</p>
                    <p>Belo Horizonte, MG</p>
                </div>
                <div className="revendedorName">
                    <p className='firstPRevendedor'>J Boutique</p>
                    <p>Coritiba, PR</p>
                </div>
                <div className="revendedorName">
                    <p className='firstPRevendedor'>Pandora's Dream</p>
                    <p>Londres, UK</p>
                </div>
                <div className="revendedorName">
                    <p className='firstPRevendedor'>Premier Jewelry</p>
                    <p>Sydney, Australia</p>
                </div>
                <div className="revendedorName">
                    <p className='firstPRevendedor'>Zou Bijoux</p>
                    <p>Paris, França</p>
                </div>
            </div>
        </div>
    )
}