import React from "react";
import { useNavigate } from "react-router-dom";
import ProjetoMkfood from "../../assets/projetomkfood.png";
import "./Projeto.css";

export default function ProjetoLuke() {
  const navigate = useNavigate(); // Hook para navegar

  return (
    <section className="projeto-page">
      {/* Botão Voltar */}
      <button className="voltar-btn" onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <div className="projeto-hero">
        <img src={ProjetoMkfood} alt="Aplicativo Luke" />
        <h1>Aplicativo Luke</h1>
        <p className="subtitulo">Estudo de caso UX/UI Design • Inclusão e acessibilidade</p>
      </div>

      <div className="projeto-conteudo">
        <h2>📖 Contexto</h2>
        <p>
          O MkFood é um aplicativo voltado para facilitar pedidos de alimentos de forma rápida e intuitiva,
          garantindo uma experiência inclusiva e adaptável a diferentes perfis de usuários.
        </p>

        <h2>🎯 Objetivo</h2>
        <p>
          Melhorar a experiência de compra digital, tornando a navegação mais clara, rápida e acessível,
          reduzindo fricções e aumentando a autonomia do usuário.
        </p>

        <h2>💡 Processo</h2>
        <p>
          Realizamos pesquisas com usuários, definição de personas, mapeamento de jornada, criação de wireframes
          e protótipos de alta fidelidade, seguidos de testes de usabilidade para validar as soluções.
        </p>

        <img className="projeto-imagem" src={ProjetoMkfood} alt="Tela do aplicativo Luke" />

        <h2>🧭 Resultado</h2>
        <p>
          O design final trouxe uma interface clara e funcional, elementos visuais consistentes e fluxo simplificado,
          garantindo maior eficiência, satisfação e engajamento dos usuários.
        </p>

        <a
          href="https://www.figma.com/proto/luke"
          className="projeto-botao"
          target="_blank"
          rel="noreferrer"
        >
          Ver Protótipo no Figma
        </a>
      </div>
    </section>
  );
}
