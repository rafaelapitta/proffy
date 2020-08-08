import React from 'react'
import whatsApp from '../../assets/images/icons/whatsapp.svg';
import './styles.css'

function TeacherItem() {
  return (

    <article className="teacher-item">
    <header>
      <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8ryZgeKihW1aGwhiDd3UZvoEl9lmNrz9tpni-c=s192-c-mo" alt="Rafaela Pitta"/>
    <div>
      <strong>Rafaela Pitta</strong>
      <span>ReactJs</span>
    </div>
    </header>

    <p>Apaixona pelas melhores tecnologias de desenvolvimento
      <br/> Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
    </p>

    <footer>
        <p>Preço/hora
        <strong>$ 80,00</strong>
        </p>
        <button type="button">
        <img src={whatsApp} alt="WhatsApp"/>
        Entrar em contato
        </button>
    </footer>
    </article>
  )
}

export default TeacherItem