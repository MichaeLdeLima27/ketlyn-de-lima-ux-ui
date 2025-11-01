import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import lukeHero from "../../assets/projetoluke.png";
import "./Projeto.css";

export default function ProjetoLuke() {
  const navigate = useNavigate();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="projeto-page fade-in">
      {/* Botão Voltar */}
      <button className="voltar-btn" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className="projeto-hero fade-up">
        <h1>Aplicativo Luke</h1>
        <p className="subtitulo">
          Estudo de caso UX/UI Design • Inclusão e acessibilidade
        </p>
        <img src={lukeHero} alt="Aplicativo Luke" />
      </div>

      <div className="projeto-conteudo">
        <div className="card fade-up">
          <h2>📖 Contexto</h2>
          <p>
            Durante o curso “Profissão: UX/UI Designer” da EBAC, surgiu a
            proposta de criar um aplicativo voltado para a comunicação de pessoas
            com autismo não verbal. O maior problema identificado é a interação
            dos pais com o filhos. Existe a dificuldade dos pais saberem se a
            criança está com fome, entediada, machucada ou interessada em algo.
          </p>
        </div>

        <div className="card fade-up">
          <h2>🎯 Objetivo</h2>
          <p>
            Desenvolver uma solução digital intuitiva e acessível que permita à
            pessoa autista expressar suas necessidades e que auxilie os pais ou
            cuidadores a entenderem essas necessidades. A interface deveria ser
            simples, com contraste de cores, imagens ilustrativas, histórico de
            interações e considerar reconhecimento facial ou de voz como possíveis
            recursos.
          </p>
        </div>

        <div className="card fade-up">
          <h2>💡 Processo</h2>
        <p>
          <strong>Pesquisa:</strong> Desk research sobre autismo não verbal e entrevistas quantitativas via Google Forms e qualitativas pelo WhatsApp. Analisei as respostas para identificar padrões e necessidades comuns entre os usuários. <br />
          <br />
          <strong>Stakeholders & Protopersonas:</strong>  Criação de protopersonas para representar as necessidades dos usuários (ex: a criança autista, os pais). <br />
          <br />
          <strong>Ideação & Jornada do Usuário:</strong> Mapa de empatia, declaração de necessidades, cenário do usuário, jornada ideal ou real.<br />
          <br />
          <strong>Protótipo de Baixa Fidelidade:</strong> Desenvolvimento inicial para testar hipóteses.<br />
          <br />
          <strong>Testes de Usabilidade & Iteração:</strong>  Realização de testes com usuários reais, ajustes baseados no feedback.<br />
          <br />
          <strong>Guia de Estilo e Protótipo de Alta Fidelidade:</strong>{" "}
          Guia de Estilo e Protótipo de Alta Fidelidade: Definição de tipografia, paleta de cores, componentes (UI Kit) e criação de protótipo final para mobile, tablet e desktop.
        </p>
        </div>

        <img
          className="projeto-imagem fade-up"
          src={lukeHero}
          alt="Tela do aplicativo Luke"
        />

        <div className="card fade-up">
          <h2>🧭 Resultado</h2>
          <p>
            O projeto resultou em um protótipo de alta fidelidade navegável para
            múltiplas plataformas (mobile/tablet/desktop) e numa solução com forte
            propósito social, baseada em empatia e acessibilidade. Nesse projeto
            desenvolvi não apenas habilidades técnicas, mas também uma visão mais
            humana do design: “o design é uma ponte entre pessoas e soluções”.
          </p>

          <a
            href="https://medium.com/@ketlynraa/estudo-de-caso-de-ux-ui-aplicativo-de-autismo-luke-da-idea%C3%A7%C3%A3o-ao-prot%C3%B3tipo-717c82e11c45"
            className="projeto-botao"
            target="_blank"
            rel="noreferrer"
          >
            Ver Protótipo completo no Medium
          </a>
        </div>
      </div>

      {/* Botão de subir ao topo */}
      {showTopBtn && (
        <button className="topo-btn" onClick={scrollToTop}>
          <ArrowUp size={20} />
        </button>
      )}
    </section>
  );
}
