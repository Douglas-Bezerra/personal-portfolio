import './App.css'



function Formulario() {

    return (
        <>

            <section id='formulario'>
                <h1>Fale Comigo: </h1>

                <form action="">

                    <label htmlFor="">Nome: </label>
                    <input type="text" id='nome' />

                    <label htmlFor="">Idade: </label>
                    <input type="number" id='idade' />

                    <label htmlFor="">Telefone: </label>
                    <input type="tel" id='telefone' />

                    <label htmlFor="">Assunto: </label>
                    <textarea id="assunto" name="mensagem" rows="5" cols="40"></textarea>

                    <button type="submit">Enviar</button>

                </form>

            </section>
        </>
    )
}

export default Formulario