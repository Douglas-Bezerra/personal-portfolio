import './App.css'
import ShaderBackground from './components/lightswind/shader-background.jsx';

function Formulario() {
    return (
        <>
            <section id='formulario'>

                <ShaderBackground className="shader-background"/>

                <div className="form-container">
                    <h1>Fale Comigo: </h1>

                    <form action="">
                        <label>Nome: </label>
                        <input type="text" id='nome'/>

                        <label>Idade: </label>
                        <input type="number" id='idade' min={1} step={1}/>

                        <label>Telefone: </label>
                        <input type="tel" id='telefone' min={1}/>

                        <label>Assunto: </label>
                        <textarea id="assunto"></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </div>

            </section>
        </>
    )
}

export default Formulario