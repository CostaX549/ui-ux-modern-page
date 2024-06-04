import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logocyber.png'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Quer entrar no futuro antes dos outros?</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Solicite acesso antecipado</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, Todos os direitos reservados</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Sobre Nós</p>  {/* Overrons translated to Sobre Nós */}
          <p>Redes Sociais</p>
          <p>Contato</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Empresa</h4>
          <p>Termos e Condições</p>
          <p>Política de Privacidade</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Entre em contato</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default Footer
