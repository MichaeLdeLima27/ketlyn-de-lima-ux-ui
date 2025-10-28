import React from "react";
import { useNavigate } from "react-router-dom";
import Projetoitau from "../../assets/projetoitau.png";
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
        <img src={Projetoitau} alt="Aplicativo Luke" />
        <h1>Projeto Itaú</h1>
        <p className="subtitulo">Designer de experiência bancária com foco em acessibilidade e clareza.</p>
      </div>

      <div className="projeto-conteudo">
        <h2>📖 Contexto</h2>
        <p>
          O projeto teve como objetivo aprimorar a jornada digital dos clientes do Itaú,
          especialmente pessoas com necessidades especiais, garantindo uma navegação mais intuitiva,
          moderna e acessível em todos os dispositivos.
        </p>

        <h2>🎯 Objetivo</h2>
        <p>
          Tornar a experiência bancária mais humana e eficiente, reduzindo barreiras de usabilidade
          e promovendo inclusão, sem perder a identidade visual e o padrão de segurança da marca.
        </p>

        <h2>💡 Processo</h2>
        <p>
          Foram realizadas pesquisas qualitativas, entrevistas com usuários, análises heurísticas e
          testes de usabilidade. Com base nos insights, foram criadas personas, fluxos de navegação,
          wireframes e protótipos de alta fidelidade no Figma.
        </p>

        <img className="projeto-imagem" src={Projetoitau} alt="Tela do aplicativo Luke" />

        <h2>🧭 Resultado</h2>
        <p>
          O Designer trouxe uma experiência mais clara, acessível e consistente. Elementos visuais
          foram simplificados, a hierarquia de informações aprimorada e as interações otimizadas
          para leitura e navegação com tecnologias assistivas
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
