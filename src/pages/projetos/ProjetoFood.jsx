import React from "react";
import { useNavigate } from "react-router-dom";
import lukeHero from "../../assets/hero2.png";
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
        <img src={lukeHero} alt="Aplicativo Luke" />
        <h1>Aplicativo Luke</h1>
        <p className="subtitulo">Estudo de caso UX/UI Design • Inclusão e acessibilidade</p>
      </div>

      <div className="projeto-conteudo">
        <h2>📖 Contexto</h2>
        <p>
          O Luke é um aplicativo criado para auxiliar na comunicação e rotina de pessoas autistas,
          oferecendo uma interface visual intuitiva e adaptável às necessidades de cada usuário.
        </p>

        <h2>🎯 Objetivo</h2>
        <p>
          Melhorar a experiência e acessibilidade digital para pessoas com autismo, reduzindo a
          complexidade e ampliando a autonomia do usuário.
        </p>

        <h2>💡 Processo</h2>
        <p>
          Foram realizadas entrevistas com cuidadores e terapeutas, criação de personas, jornada
          do usuário, protótipos de baixa e alta fidelidade e testes com usuários reais.
        </p>

        <img className="projeto-imagem" src={lukeHero} alt="Tela do aplicativo Luke" />

        <h2>🧭 Resultado</h2>
        <p>
          O design final priorizou clareza, contraste e símbolos visuais simples. O resultado foi
          uma experiência mais empática e funcional, fortalecendo o vínculo entre usuário e
          cuidador.
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
