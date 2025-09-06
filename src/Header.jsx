import './App.css'

function Header() {

  return (
    <>
      <header>
        <nav>
          <a className='a-header' href="">{"< Douglas Bezerra />"}</a>
          <a className='a-header' href="#sobre">Sobre</a>
          <a className='a-header' href="#skills">Skills</a>
          <a className='a-header' href="#experiencia">Experiência</a>
          <a className='a-header' href="#formacao">Formação</a>
          <a className='a-header' href="#formulario">Contato</a>
        </nav>
      </header>
    </>
  )
}

export default Header