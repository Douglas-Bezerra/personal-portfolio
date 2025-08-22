import Douglas from './assets/douglas.jpg'
import './App.css'



//Componenete para setar a cor do texto mais fácil
const Highlight = ({ color, children }) => (
    <span
        style={{
            color,
            textShadow: `0 0 6px ${color}, 0 0 14px ${color}, 0 0 24px ${color}`
        }}
    >
        {children}
    </span>
);



function Sobre() {

    return (
        <>
            <section id='sobre'>

                <img id='douglas-foto' src={Douglas} alt="Foto do Douglas Bezerra" />

                <div className='h1ep'>
                    <h1>Sobre mim:</h1>

                    <p id='texto-sobre-mim'>
                        Olá, visitante! Sou o Douglas e estou trilhando minha jornada na área de programação, com um foco especial em
                        Desenvolvimento Front-End. Comecei me interessando pelo front, pois achei que seria mais simples para começar.
                        Atrevido a entender sobre como as interfaces ganham vida, desde a estrutura até os detalhes visuais e a experiência do usuário.
                        Agora, estou colocando essa curiosidade em prática estudando{" "}
                        <Highlight color="rgb(236, 100, 50)">HTML</Highlight>,{" "}
                        <Highlight color="rgb(0, 133, 198)">CSS</Highlight>,{" "}
                        <Highlight color="rgb(234, 180, 48)">JavaScript</Highlight>{" "}
                        e começando a explorar bibliotecas como{" "}
                        <Highlight color="rgb(94, 211, 243)">React</Highlight>{" "}
                        e frameworks como{" "}
                        <Highlight color="rgb(112, 16, 239)">Bootstrap</Highlight>.
                        Estou em busca de aprender cada vez mais, trocar experiências e me conectar com pessoas que também enxergam,
                        na tecnologia e inovação, oportunidades promissoras.
                    </p>

                </div>

            </section>
        </>
    )
}

export default Sobre