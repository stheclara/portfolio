import './Projetos.css'

function Projetos() {
  return (
    <main className="projetos">
      <section className="projetos-container">

        {/* CABEÇALHO */}
        <header className="projetos-header">
          <span className="projetos-eyebrow">
            O que venho construindo
          </span>

          <h1>
            Meus <strong>projetos.</strong>
          </h1>

          <p>
            Projetos desenvolvidos para colocar meus conhecimentos em prática,
            explorar novas tecnologias e transformar ideias em soluções reais.
          </p>
        </header>

        <div className="projetos-lista">

          {/* 01 — PORTFÓLIO */}
          <article className="projeto-card">

            <div className="projeto-visual">
              <div className="visual-browser">
                <div className="visual-browser-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="visual-portfolio">
                  <span className="visual-small">PORTFÓLIO</span>

                  <strong>ST.</strong>

                  <p>Sthefanie Teixeira</p>

                  <div className="visual-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="projeto-info">

              <div className="projeto-meta">
                <span className="projeto-numero">01</span>

                <span className="projeto-status desenvolvimento">
                  Em desenvolvimento
                </span>
              </div>

              <h2>Portfólio Pessoal</h2>

              <p>
                Portfólio desenvolvido para apresentar minha trajetória,
                tecnologias e projetos de forma moderna, responsiva e
                personalizada, com navegação entre páginas e modo claro e escuro.
              </p>

              <div className="projeto-tech">
                <span>React</span>
                <span>Vite</span>
                <span>CSS</span>
                <span>React Router</span>
              </div>

              <div className="projeto-links">
                <a
                  href="https://portfolio-sthe4.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver projeto <span>↗</span>
                </a>

                <a
                  href="https://github.com/stheclara/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <span>↗</span>
                </a>
              </div>

            </div>
          </article>

          {/* 02 — FINORA */}
          <article className="projeto-card projeto-card-reverse">

            <div className="projeto-visual">
              <div className="visual-finora">
                <span className="visual-small">
                  BOOTCAMP SANTANDER
                </span>

                <strong>FINORA</strong>

                <p>Organização financeira</p>

                <div className="finora-chart">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="projeto-info">

              <div className="projeto-meta">
                <span className="projeto-numero">02</span>

                <span className="projeto-status concluido">
                  Concluído
                </span>
              </div>

              <h2>Finora</h2>

              <p>
                Projeto desenvolvido durante o Bootcamp Santander,
                voltado para organização e educação financeira.
              </p>

              <div className="projeto-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="projeto-links">
                <a href="#">
                  Ver projeto <span>↗</span>
                </a>

                <a href="#">
                  GitHub <span>↗</span>
                </a>
              </div>

            </div>
          </article>

          {/* 03 — AGENDAMENTO */}
          <article className="projeto-card">

            <div className="projeto-visual">
              <div className="visual-agendamento">

                <div className="calendar-top">
                  <span></span>
                  <span></span>
                </div>

                <div className="calendar-title">
                  <span>Agenda</span>
                  <strong>24</strong>
                </div>

                <div className="calendar-grid">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <span key={index}></span>
                  ))}
                </div>

              </div>
            </div>

            <div className="projeto-info">

              <div className="projeto-meta">
                <span className="projeto-numero">03</span>

                <span className="projeto-status desenvolvimento">
                  Em desenvolvimento
                </span>
              </div>

              <h2>Sistema de Agendamento</h2>

              <p>
                Sistema de gestão de agendamentos para uma clínica de saúde,
                pensado para organizar pacientes, profissionais, horários,
                atendimentos e informações administrativas.
              </p>

              <div className="projeto-tech">
                <span>Excel</span>
                <span>Gestão de Dados</span>
                <span>Dashboard</span>
              </div>

            </div>
          </article>

          {/* 04 — SISTEMA DE ESTUDOS */}
          <article className="projeto-card projeto-card-reverse">

            <div className="projeto-visual">
              <div className="visual-study">

                <span className="visual-small">
                  STUDY TRACKER
                </span>

                <strong>75%</strong>

                <p>Progresso semanal</p>

                <div className="study-progress">
                  <span></span>
                </div>

                <div className="study-items">
                  <span>✓</span>
                  <span>✓</span>
                  <span>○</span>
                </div>

              </div>
            </div>

            <div className="projeto-info">

              <div className="projeto-meta">
                <span className="projeto-numero">04</span>

                <span className="projeto-status planejado">
                  Planejado
                </span>
              </div>

              <h2>Sistema de Estudos</h2>

              <p>
                Aplicação para organizar a rotina de estudos com calendário,
                metas, tarefas e acompanhamento de progresso.
              </p>

              <div className="projeto-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>Banco de Dados</span>
              </div>

            </div>
          </article>

          {/* 05 — CHAT COM IA */}
          <article className="projeto-card">

            <div className="projeto-visual">
              <div className="visual-ai">

                <span className="ai-spark">✦</span>

                <strong>AI</strong>

                <div className="ai-message ai-message-one">
                  Como posso ajudar?
                </div>

                <div className="ai-message ai-message-two">
                  ✦ Gerando resposta...
                </div>

              </div>
            </div>

            <div className="projeto-info">

              <div className="projeto-meta">
                <span className="projeto-numero">05</span>

                <span className="projeto-status planejado">
                  Planejado
                </span>
              </div>

              <h2>Chat com IA</h2>

              <p>
                Aplicação de conversa integrada a uma API de Inteligência
                Artificial, com interface própria e histórico de mensagens.
              </p>

              <div className="projeto-tech">
                <span>React</span>
                <span>API</span>
                <span>Inteligência Artificial</span>
              </div>

            </div>
          </article>

          {/* 06 — PDFs */}
          <article className="projeto-card projeto-card-reverse">

            <div className="projeto-visual">
              <div className="visual-pdf">

                <div className="pdf-document">
                  <span>PDF</span>

                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                <span className="pdf-spark">✦</span>

              </div>
            </div>

            <div className="projeto-info">

              <div className="projeto-meta">
                <span className="projeto-numero">06</span>

                <span className="projeto-status planejado">
                  Planejado
                </span>
              </div>

              <h2>Organizador Inteligente de PDFs</h2>

              <p>
                Aplicação para centralizar, organizar e facilitar o acesso
                a documentos PDF, com recursos inteligentes para trabalhar
                com os arquivos.
              </p>

              <div className="projeto-tech">
                <span>React</span>
                <span>Python</span>
                <span>IA</span>
              </div>

            </div>
          </article>

          {/* 07 — DASHBOARD */}
          <article className="projeto-card">

            <div className="projeto-visual">
              <div className="visual-dashboard">

                <span className="visual-small">
                  DASHBOARD
                </span>

                <div className="dashboard-numbers">
                  <div>
                    <strong>128</strong>
                    <span>Registros</span>
                  </div>

                  <div>
                    <strong>+24%</strong>
                    <span>Crescimento</span>
                  </div>
                </div>

                <div className="dashboard-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>
            </div>

            <div className="projeto-info">

              <div className="projeto-meta">
                <span className="projeto-numero">07</span>

                <span className="projeto-status planejado">
                  Planejado
                </span>
              </div>

              <h2>Dashboard Administrativo</h2>

              <p>
                Painel administrativo para visualização de indicadores,
                acompanhamento de dados, gráficos e informações importantes
                para gestão.
              </p>

              <div className="projeto-tech">
                <span>React</span>
                <span>Dashboard</span>
                <span>Banco de Dados</span>
              </div>

            </div>
          </article>

          {/* 08 — HERO CLICKER */}
          <article className="projeto-card projeto-card-reverse">

            <div className="projeto-visual">
              <div className="visual-clicker">

                <span className="clicker-spark clicker-one">✦</span>
                <span className="clicker-spark clicker-two">✦</span>

                <div className="clicker-coin">
                  ★
                </div>

                <strong>+1</strong>

                <p>CLICK!</p>

              </div>
            </div>

            <div className="projeto-info">

              <div className="projeto-meta">
                <span className="projeto-numero">08</span>

                <span className="projeto-status planejado">
                  Planejado
                </span>
              </div>

              <h2>Hero Clicker</h2>

              <p>
                Jogo estilo clicker com progressão de personagem, inimigos,
                moedas, melhorias e salvamento do progresso do jogador.
              </p>

              <div className="projeto-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>MySQL</span>
              </div>

            </div>
          </article>

        </div>
      </section>
    </main>
  )
}

export default Projetos