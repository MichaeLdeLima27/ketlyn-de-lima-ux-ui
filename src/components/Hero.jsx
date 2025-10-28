// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

// Imagens
import heroImg from "../assets/hero.jpg";
import profileImg from "../assets/profile.png";
import project1 from "../assets/projetoluke.png";
import project2 from "../assets/projetoitau2.png";
import project3 from "../assets/projetosumup.png";
import project4 from "../assets/projetomkfood.png";
import florImg from "../assets/flor2.jpg";

// Ícones
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
            UX/UI <br /> Designer
          </h1>
          <p>Crio experiências digitais que unem design, estética e funcionalidade.</p>
          <a href="https://wa.me/5541987997602" target="_blank" rel="noreferrer">
            <button className="hero-button">Entre em Contato</button>
          </a>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="UX/UI" />
        </div>
      </section>

      {/* Sobre Section */}
      <section
        className="about-section"
        id="sobre"
        style={{
          backgroundImage: `url(${florImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="overlay-bg">
          <div className="profile">
            <img src={profileImg} alt="Perfil" />
            <div className="circle"></div>
          </div>

          <div className="description">
            <h2>Sobre Mim</h2>
            <p>
              Oi! Me chamo <strong>Ketlyn Ribeiro Alves</strong>, sou <strong>Product Designer</strong> e <strong>UX/UI Designer</strong>, apaixonada por criar experiências de interfaces digitais modernas, funcionais e centradas no usuário.
            </p>
            <p>
              Atuo melhor como <strong>Design de Produto Digital</strong>, desde pesquisa com usuários, testes de usabilidade, definição de personas e mapas de jornada, até wireframes, protótipos de baixa e alta fidelidade e entrega de soluções web e mobile.
            </p>
            <p>
              Minha parte favorita é desenhar experiências que equilibram as dores dos usuários com as necessidades do negócio. Para mim, design é uma ponte entre pessoas e soluções.
            </p>

            <div className="icons">
              <a href="https://www.linkedin.com/in/ketlyn-ribeiro-alves/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://wa.me/5541987997602" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
              <a href="https://medium.com/@ketlynraa" target="_blank" rel="noreferrer"><FaMedium /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section className="projects-section" id="projetos">
        <h2>Meus Projetos</h2>

        <div className="projects-grid">
          <Link to="/projetos/luke" className="project-card">
            <img src={project1} alt="Aplicativo Luke" />
            <div className="card-content">
              <h3>Aplicativo Luke</h3>
              <p>Estudo de caso sobre UX/UI Design de um app inclusivo para autistas.</p>
            </div>
          </Link>

          <Link to="/projetos/itau" className="project-card">
            <img src={project2} alt="Projeto Itaú" />
            <div className="card-content">
              <h3>Projeto Itaú</h3>
              <p>Designer de experiência bancária com foco em acessibilidade e clareza.</p>
            </div>
          </Link>
          <Link to="/projetos/sumup" className="project-card">
            <img src={project3} alt="Projeto Itau" />
            <div className="card-content">
              <h3>Projeto SumUp</h3>
              <p>Designer de landing page e email.</p>
            </div>
          </Link>

          <Link to="/projetos/food" className="project-card">
            <img src={project4} alt="Novo Projeto" />
            <div className="card-content">
              <h3>MKfood</h3>
              <p>Projeto de um App de Delivery</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ketlyn de Lima. Todos os direitos reservados. Feito com ❤️</p>
        <div className="footer-profiles">
          <a href="https://www.linkedin.com/in/ketlyn-ribeiro-alves/" target="_blank" rel="noreferrer" className="profile-link">
            <FaLinkedin /> <span>UX/UI Designer - Ketlyn Ribeiro Alves</span>
          </a>
          <a href="https://www.linkedin.com/in/michelap19/" target="_blank" rel="noreferrer" className="profile-link">
            <FaLinkedin /> <span>Desenvolvedor Fullstack - Michael De Lima</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
