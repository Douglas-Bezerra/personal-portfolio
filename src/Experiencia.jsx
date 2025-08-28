import './App.css'
import Tauste from './assets/tauste.png'
import Tupperware from './assets/tupperware.png'



function Experiencia() {

    return (
        <>
            <section id='experiencia'>
                <h1>Experiência Profissional:</h1>
                <div className='card-deck'>
                    <div className='card'>
                        <img className='card-img-top' src={Tauste} alt='logo do supermercados tauste' />
                        <div className='card-body'>
                            <h5 id='tauste'>TAUSTE SUPERMERCADOS</h5>
                            <p className='card-text'>
                                Trabalhava como Assistente de Vendas no setor de matinais e realizava atividades como vencimentos, verificação de gôndolas, controle de estoque, verificação de preços e limpeza de gôndolas.
                            </p>
                        </div>
                        <div className='card-footer'>
                            <small className='text-muted'>
                                <span className="digitacao">12/2024 - 03/2025</span>
                            </small>
                        </div>
                    </div>
                    <div className='card'>
                        <img className='card-img-top' src={Tupperware} alt='logo da tupperware loja de utensílios domésticos' />
                        <div className='card-body'>
                            <h5 id='tupperware'>TUPPERWARE</h5>
                            <p className='card-text'>
                                Trabalhava como Assistente Geral, venda interna, ia no depósito fazer conferência de mercadorias e estoque disponível, montava planilhas no excel e extraía informações dos resultados e quanto faltava para as consultoras baterem as metas, cobrava pedidos e devedores, trabalhava com planilhas em cima de métricas e parâmetros, formulação de pedidos etc.
                            </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                                <span className="digitacao">03/2025 - 07/2025</span>
                            </small>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experiencia