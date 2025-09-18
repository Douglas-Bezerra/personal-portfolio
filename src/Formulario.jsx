import './App.css'
import ShaderBackground from './components/lightswind/shader-background.js';

function Formulario() {
    return (
        <>
            <section id='formulario'>

                {/* Shader como background */}
                <ShaderBackground className="shader-background" />

                {/* Conteúdo do formulário */}
                <div className="form-container">
                    <h1>Fale Comigo: </h1>

                    <form action="">
                        <label htmlFor="">Nome: </label>
                        <input type="text" id='nome' />

                        <label htmlFor="">Idade: </label>
                        <input type="number" id='idade' min={1} step={1} />

                        <label htmlFor="">Telefone: </label>
                        <input type="tel" id='telefone' />

                        <label htmlFor="">Assunto: </label>
                        <textarea id="assunto"></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </div>

            </section>
        </>
    )
}

export default Formulario