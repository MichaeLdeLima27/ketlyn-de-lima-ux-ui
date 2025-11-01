import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Projetoitau from "../../assets/itau3.webp";
import Projetoitau1 from "../../assets/itau2.jpg";
import { ArrowUp } from "lucide-react";
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

      <div className="projeto-hero">
        <h1>Projeto Itaú</h1>
        <p className="subtitulo">
          Designer de experiência bancária com foco em acessibilidade e clareza.
        </p>
        <img src={Projetoitau} alt="Aplicativo Luke" className="fade-up" />
      </div>

      <div className="projeto-conteudo">
        <h2>📖 Contexto</h2>
        <p>
          Durante o curso EBAC (Escola Britânica de Artes e Tecnologia) de UX/UI Design, fui convidado a desenvolver um projeto de parceria com o Banco Itaú. A proposta consistia em identificar oportunidades de melhoria em suas soluções financeiras digitais e apresentar novas sugestões para tornar a experiência do cliente mais fluida e intuitiva.
        </p>

        <h2>🎯 Objetivo</h2>
        <p>
          Meu objetivo principal era investigar de forma aprofundada as dores e reclamações dos usuários nas plataformas do Banco Itaú, gerar insights que pudessem embasar hipóteses de melhoria, e em seguida projetar e testar protótipos com foco em navegabilidade, responsividade e usabilidade para desktop, mobile e até smartwatch
        </p>

        <h2>💡 Processo</h2>
        <p>
          <strong>Pesquisa:</strong> Iniciei com uma research de mesa (desk research): analisei avaliações nas redes sociais e na Play Store do Banco Itaú para mapear os principais pontos de atrito relatados pelos clientes. <br />
          <br />
          <strong>Stakeholders & Protopersonas:</strong> Em seguida, defini personas, mapas de empatia e jornadas de usuário, com base nos dados que encontrei. <br />
          <br />
          <strong>Protótipo de Baixa Fidelidade:</strong> Depois criei os wireframes de baixa fidelidade para desktop e mobile, mapeando a estratégia de navegação entre as soluções propostas.  <br />
          <br />
          <strong>Testes de Usabilidade & Iteração:</strong> Conduzi testes de usabilidade com três usuários, propondo tarefas que permitissem avaliar os protótipos. Os participantes conseguiram completar as tarefas com sucesso, o que validou nossas soluções iniciais.  <br />
          <br />
          <strong>Guia de Estilo e Protótipo de Alta Fidelidade:</strong>{" "}
          Por fim, desenvolvi o design responsivo completo: telas para desktop, mobile e smartwatch — totalizando 12 entregáveis responsivos.
        </p>

        <img className="projeto-imagem fade-up" src={Projetoitau1} alt="projeto itau" />

        <h2>🧭 Resultado</h2>
        <p>
          O resultado do projeto foi um protótipo de alta fidelidade alinhado com a identidade visual do Banco Itaú, totalmente responsivo e validado via testes de usabilidade. Fui parabenizado pela coordenação do curso pelo nível de documentação, pela clareza no mapeamento das personas e jornadas, e pela consistência em todo o fluxo entre pesquisa, ideação, protótipo e teste.
        </p>

        <a
          href="https://medium.com/@ketlynraa/estudo-de-caso-projeto-de-parceria-com-banco-ita%C3%BA-8b44896f258e"
          className="projeto-botao"
          target="_blank"
          rel="noreferrer"
        >
          Ver Protótipo completo no Medium
        </a>
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
