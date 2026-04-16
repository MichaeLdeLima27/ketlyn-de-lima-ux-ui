import React from "react";
import { useNavigate } from "react-router-dom";
import ProjetoSumup from "../../assets/supercarnes.jpg";
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
        <h1>Projeto Super Carnes</h1>
        <p className="subtitulo">Designer de UX/UI – Tela de Checkout (E-commerce)</p>
      </div>

      <div className="projeto-conteudo">
        <h2>📖 Contexto</h2>
        <p>
          O projeto SupperCarnes foi desenvolvido como parte de um teste prático de UX/UI Design, com o objetivo de criar a tela de checkout de um e-commerce de carnes frescas, porcionadas e personalizadas, com entrega direta ao cliente. O desafio focou na aplicação de boas práticas de design, organização e consistência visual dentro do Figma.
        </p>

        <h2>🎯 Objetivo</h2>
        <p>
          Projetar uma experiência de checkout clara, intuitiva e eficiente, permitindo que o usuário visualize o resumo do pedido, escolha a forma de pagamento e finalize a compra de maneira simples e sem fricções.
        </p>

        <h2>💡 Processo</h2>
        <p>
          O desenvolvimento envolveu a criação da interface para desktop e versão responsiva para mobile, utilizando auto-layout para garantir espaçamentos consistentes e adaptabilidade. Foram construídos componentes seguindo a metodologia Atomic Design (como botões, inputs e cards de produto), além da definição de estilos e variáveis para cores e tipografia. O arquivo foi estruturado de forma organizada, com páginas separadas para desktop, mobile, componentes e documentação
        </p>

        <img className="projeto-imagem" src={ProjetoSumup} alt="Tela do aplicativo Luke" />

        <h2>🧭 Resultado</h2>
        <p>
          O resultado foi uma interface de checkout funcional, organizada e visualmente consistente, proporcionando uma experiência fluida ao usuário. O projeto demonstra domínio de hierarquia visual, responsividade e boas práticas de UX/UI, contribuindo para um fluxo de compra mais eficiente e agradáv
        </p>

        <a
          href="https://www.figma.com/design/4NgvC6ofv1bAvd5P05pYMq/SupperCarnes?node-id=2315-192&t=Va58kwhLCfnlDJH3-1"
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
