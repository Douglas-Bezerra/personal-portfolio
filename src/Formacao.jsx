import './App.css'
import FatecLogo from './assets/fatec.png'
import InstagramLogo from './assets/instagram.png'
import DsmLogo from './assets/dsm.jpg'


function Formacao() {

    return (
        <>
            <section id='formacao'>
                <h1>Formação Acadêmica:</h1>
                <div className="card-formacao">
                    <a href="https://www.instagram.com/dsmfatecmarilia" target="_blank" rel="noopener noreferrer"><img src={DsmLogo} className="card-formacao-img-top" alt="Logo do curso de Desenvolvimento de Software Multiplataforma" /></a>
                    <div className="card-formacao-body">
                        <h5 className="card-formacao-title">Fatec Marília - Estudante Rafael Almeida Camarinha</h5>
                    </div>
                    <ul className="list-group-list-group-flush">
                        <li className="list-group-item">Curso: Desenvolvimento de Software Multiplataforma</li>
                        <li className="list-group-item">Modalidade: Tecnólogo</li>
                        <li className="list-group-item">Previsão de Formação: Dezembro/2026</li>
                    </ul>
                    <div className="card-formacao-body">
                        <a href="https://fatecmarilia.cps.sp.gov.br" target="_blank" rel="noopener noreferrer">
                            <img src={FatecLogo} alt="Logo da Fatec" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Formacao