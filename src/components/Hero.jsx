// Hero.jsx
import React from "react";
import "../App.css";
import profileImg from "../assets/profile.png";
import heroImg from "../assets/hero.jpg";
import project1 from "../assets/hero4.png";
import project2 from "../assets/hero2.png";
import project3 from "../assets/hero3.png";
import { FaLinkedin, FaMedium, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">Ketlyn Ribeiro Alves</div>
        <div className="navbar-right">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>
            UX/UI <br /> Design
          </h1>
          <p>
            Crio experiências digitais que unem design, estética e funcionalidade.
          </p>
          <a href="https://wa.me/5541987997602" target="_blank" rel="noreferrer">
            <button className="hero-button">Entre em Contato</button>
          </a>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="UX/UI" />
        </div>
      </section>

      {/* Sobre Section */}
      <section className="about-section" id="sobre">
        <div className="profile">
          <img src={profileImg} alt="Perfil" />
          <div className="circle"></div>
        </div>

        <div className="description">
          <h2>Sobre Mim</h2>
          <p>
            Sou Ketlyn Ribeiro Alves, formada em UX/UI Design, apaixonada por criar experiências digitais que unem design, estética e propósito. Acredito que boas interfaces têm o poder de transformar a forma como as pessoas interagem com o mundo digital, tornando cada experiência mais intuitiva e significativa.
          </p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/ketlyn-ribeiro-alves/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://wa.me/5541987997602" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            <a href="https://medium.com/@ketlynraa" target="_blank" rel="noreferrer"><FaMedium /></a>
          </div>
        </div>
      </section>

  <section className="projects-section" id="projetos">
  <h2>Meus Projetos</h2>
  <div className="projects-grid">
    <a
      href="https://medium.com/@ketlynraa/ux-ui-design-m%C3%B3dulo-20-dicas-para-elevar-o-n%C3%ADvel-das-suas-entregas-de-design-09b0e556e925"
      target="_blank"
      rel="noreferrer"
      className="project-card"
    >
      <img src={project1} alt="Projeto 1" />
      <div className="overlay">VER PROJETO COMPLETO</div>
    </a>

    <a
      href="https://medium.com/@ketlynraa/estudo-de-caso-de-ux-ui-aplicativo-de-autismo-luke-da-idea%C3%A7%C3%A3o-ao-prot%C3%B3tipo-717c82e11c45"
      target="_blank"
      rel="noreferrer"
      className="project-card"
    >
      <img src={project2} alt="Projeto 2" />
      <div className="overlay">VER PROJETO COMPLETO</div>
    </a>

    <a
      href="https://medium.com/@ketlynraa/estudo-de-caso-projeto-de-parceria-com-banco-ita%C3%BA-8b44896f258e"
      target="_blank"
      rel="noreferrer"
      className="project-card"
    >
      <img src={project3} alt="Projeto 3" />
      <div className="overlay">VER PROJETO COMPLETO</div>
    </a>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ketlyn de Lima. Todos os direitos reservados. Feito com ❤️</p>
        <div className="footer-profiles">
          <a href="https://www.linkedin.com/in/ketlyn-ribeiro-alves/" target="_blank" rel="noreferrer" className="profile-link">
            <FaLinkedin />
            <span>UX/UI Design - Ketlyn Ribeiro Alves</span>
          </a>
          <a href="https://www.linkedin.com/in/michelap19/" target="_blank" rel="noreferrer" className="profile-link">
            <FaLinkedin />
            <span>Desenvolvedor - Michael De Lima</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
