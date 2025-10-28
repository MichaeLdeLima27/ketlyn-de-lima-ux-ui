import React from "react";
import { useNavigate } from "react-router-dom";
import ProjetoSumup from "../../assets/projetosumup.png";
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
        <img src={ProjetoSumup} alt="Aplicativo Luke" />
        <h1>Projeto SumUp</h1>
        <p className="subtitulo">Designer de landing page e email.</p>
      </div>

      <div className="projeto-conteudo">
        <h2>📖 Contexto</h2>
        <p>
          O projeto SumUp teve como objetivo melhorar a experiência digital de usuários que utilizam a plataforma,
          focando em simplicidade, clareza e acessibilidade para todos os perfis de usuários.
        </p>

        <h2>🎯 Objetivo</h2>
        <p>
          Criar uma interface intuitiva e inclusiva, que facilite tarefas complexas, aumente a autonomia do usuário
          e reduza frustrações no uso diário da plataforma.
        </p>

        <h2>💡 Processo</h2>
        <p>
          Foram conduzidas pesquisas com usuários, análises de fluxos existentes, criação de personas, wireframes
          e protótipos de alta fidelidade, seguidos de testes de usabilidade para validar soluções.
        </p>

        <img className="projeto-imagem" src={ProjetoSumup} alt="Tela do aplicativo Luke" />

        <h2>🧭 Resultado</h2>
        <p>
          O Designer proporcionou uma experiência mais clara e funcional, com interface amigável, elementos visuais
          consistentes e fluxo simplificado, garantindo maior satisfação e engajamento dos usuários
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
