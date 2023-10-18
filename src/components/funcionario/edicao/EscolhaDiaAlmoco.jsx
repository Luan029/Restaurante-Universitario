import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
// import './Edicao.css'

const EscolhaDiaAlmoco = () => {
  return (
    <React.Fragment>
      <Header titulo={'Escolha o dia da semana'} link={'/homeFuncionario'} />
      <main className='escolhasDias'>

        <section className='opcoesDuplas'>
          <Link className='buttons' to={`/HomeFuncionario/EditarCardapio/Almoco/${2}`}>Segunda</Link>
          <Link className='buttons' to={`/HomeFuncionario/EditarCardapio/Almoco/${3}`}>Terca</Link>
          <Link className='buttons' to={`/HomeFuncionario/EditarCardapio/Almoco/${4}`}>Quarta</Link>
          <Link className='buttons' to={`/HomeFuncionario/EditarCardapio/Almoco/${5}`}>Quinta</Link>
          <Link className='buttons' to={`/HomeFuncionario/EditarCardapio/Almoco/${6}`}>Sexta</Link>
          <Link className='buttons' to={`/HomeFuncionario/EditarCardapio/Almoco/${7}`}>Sábado</Link>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default EscolhaDiaAlmoco
