import './styles.css'

export const Contact = () => {
    return (
        <div className='containerContact'>
            <div className='titleContact'>
                <h1>Contato</h1>
            </div>
            <div className="line"></div>
            <div className='descriptionContact'>
                <p>Envie suas perguntas, dúvidas, ou comentários gerais no espaço abaixo com seu nome e email</p>
            </div>
            <div className='formSection'>
                <label className='name'>Nome</label>
                <input type="text" />
                <label>Sobrenome</label>
                <input type="text" />
                <label className='email'>Email</label>
                <input type="email" />
                <label>Mensagem</label>
                <textarea cols={10} rows={5}></textarea>
                <button disabled>Enviar</button>
            </div>
        </div>
    )
}