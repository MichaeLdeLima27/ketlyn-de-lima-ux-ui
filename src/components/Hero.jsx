import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

// Imagens
import heroImg from "../assets/fundohero.jpg";
import profileImg from "../assets/profile.png";
import project1 from "../assets/projetoluke.png";
import project2 from "../assets/projetoitau2.png";
import project3 from "../assets/projetosumup.png";
import project4 from "../assets/projetomkfood.png";
import florImg from "../assets/flor2.jpg";
import Curriculo from "../assets/curriculo-ketlyn-ui-ux-designer.pdf";

// Ícones
import { FaLinkedin, FaMedium, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Hero = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // Mostrar botão "voltar ao topo"
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">Ketlyn Ribeiro Alves</div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
          <a href="#projetos" onClick={() => setMenuOpen(false)}>
            Projetos
          </a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>
            Sobre
          </a>
          <a
            href={Curriculo}
            download
            className="curriculo-btn"
            onClick={() => setMenuOpen(false)}
          >
            Baixar Currículo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text" data-aos="fade-up" data-aos-duration="3000">
          <h1>
            UX/UI <br /> Designer
          </h1>
          <p>
            Crio experiências digitais que unem design, estética e
            funcionalidade.
          </p>
          <a
            href="https://wa.me/5541987997602"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hero-button">Entre em Contato</button>
          </a>
        </div>

        <div className="hero-image" data-aos="fade-left" data-aos-duration="3000">
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
          <div className="profile" data-aos="zoom-in" data-aos-duration="3000">
            <img src={profileImg} alt="Perfil" />
          </div>

          <div className="description" data-aos="fade-up" data-aos-duration="3000">
            <h2>Sobre Mim</h2>
            <p>
              Oi! Me chamo <strong>Ketlyn Ribeiro Alves</strong>, sou{" "}
              <strong>Product Designer</strong> e{" "}
              <strong>UX/UI Designer</strong>, apaixonada por criar experiências
              de interfaces digitais modernas, funcionais e centradas no
              usuário.
            </p>
            <p>
              Atuo melhor como <strong>Design de Produto Digital</strong>, desde
              pesquisa com usuários, testes de usabilidade, definição de
              personas e mapas de jornada, até wireframes, protótipos e entrega
              de soluções web e mobile.
            </p>
            <p>
              Minha parte favorita é desenhar experiências que equilibram as
              dores dos usuários com as necessidades do negócio. Para mim,
              design é uma ponte entre pessoas e soluções.
            </p>

            <div className="icons">
              <a
                href="https://www.linkedin.com/in/ketlyn-ribeiro-alves/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/5541987997602"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://medium.com/@ketlynraa"
                target="_blank"
                rel="noreferrer"
              >
                <FaMedium />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section className="projects-section" id="projetos">
        <h2 data-aos="fade-up" data-aos-duration="2000">Meus Projetos</h2>
        <div className="projects-grid">
          <Link to="/projetos/luke" className="project-card" data-aos="zoom-in" data-aos-duration="3000">
            <img src={project1} alt="Aplicativo Luke" />
            <div className="card-content">
              <h3>Aplicativo Luke</h3>
              <p>
                Estudo de caso sobre UX/UI Design de um app inclusivo para
                autistas.
              </p>
            </div>
          </Link>

          <Link to="/projetos/itau" className="project-card" data-aos="zoom-in"data-aos-duration="3000">
            <img src={project2} alt="Projeto Itaú" />
            <div className="card-content">
              <h3>Projeto Itaú</h3>
              <p>
                Designer de experiência bancária com foco em acessibilidade e
                clareza.
              </p>
            </div>
          </Link>

          <Link to="/projetos/sumup" className="project-card" data-aos="zoom-in" data-aos-duration="3000">
            <img src={project3} alt="Projeto SumUp" />
            <div className="card-content">
              <h3>Projeto SumUp</h3>
              <p>Designer de landing page e email.</p>
            </div>
          </Link>

          <Link to="/projetos/food" className="project-card" data-aos="zoom-in" data-aos-duration="3000">
            <img src={project4} alt="Novo Projeto" />
            <div className="card-content">
              <h3>MKfood</h3>
              <p>Projeto de um App de Delivery</p>
            </div>
          </Link>
        </div>
      </section>

      <div className="projetos-btn">
        <a href={Curriculo} download>
          <button className="hero-button1">Baixar Currículo</button>
        </a>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ketlyn de Lima. Todos os direitos reservados. Feito com ❤️</p>
        <div className="footer-profiles">
          <a
            href="https://www.linkedin.com/in/ketlyn-ribeiro-alves/"
            target="_blank"
            rel="noreferrer"
            className="profile-link"
          >
            <FaLinkedin /> <span>UX/UI Designer - Ketlyn Ribeiro Alves</span>
          </a>
          <a
            href="https://www.linkedin.com/in/michelap19/"
            target="_blank"
            rel="noreferrer"
            className="profile-link"
          >
            <FaLinkedin /> <span>Desenvolvedor Fullstack - Michael De Lima</span>
          </a>
        </div>
      </footer>

      {/* Botão de voltar ao topo */}
      {showScroll && (
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Hero;
