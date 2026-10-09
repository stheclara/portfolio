import './Tecnologias.css'

function Tecnologias() {
  return (
    <main className="tecnologias">
      <section className="tecnologias-container">

        {/* CABEÇALHO */}
        <header className="tecnologias-header">
          <span className="tecnologias-eyebrow">
            Minha caixa de ferramentas
          </span>

          <h1>
            Tecnologias que fazem parte da
            <strong> minha jornada.</strong>
          </h1>

          <p>
            Ferramentas e tecnologias que utilizo nos meus projetos
            e que venho explorando ao longo dos meus estudos.
          </p>
        </header>


        {/* DESTAQUE */}
        <section className="tech-featured">

          <div className="featured-text">
            <span className="featured-number">01</span>

            <h2>Desenvolvimento Front-end</h2>

            <p>
              É onde concentro meus estudos atualmente, criando interfaces
              responsivas e transformando ideias em aplicações web.
            </p>
          </div>

          <div className="featured-code">
            <div className="featured-code-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="featured-code-content">
              <p>
                <span className="code-symbol">&lt;</span>
                <span className="code-name">developer</span>
                <span className="code-symbol">&gt;</span>
              </p>

              <strong>React</strong>
              <strong>JavaScript</strong>
              <strong>HTML + CSS</strong>

              <p>
                <span className="code-symbol">&lt;/</span>
                <span className="code-name">developer</span>
                <span className="code-symbol">&gt;</span>
              </p>
            </div>
          </div>

        </section>


        {/* TECNOLOGIAS */}
        <section className="tech-section">

          <div className="tech-section-title">
            <span>02</span>

            <div>
              <h2>Tecnologias</h2>
              <p>
                Linguagens e tecnologias presentes nos meus estudos
                e projetos.
              </p>
            </div>
          </div>


          <div className="tech-grid">

            <article className="tech-card">
              <div className="tech-icon">
                &lt;/&gt;
              </div>

              <div>
                <h3>HTML</h3>
                <p>Estruturação de páginas e aplicações web.</p>
              </div>

              <span className="tech-label">Front-end</span>
            </article>


            <article className="tech-card">
              <div className="tech-icon">
                ✦
              </div>

              <div>
                <h3>CSS</h3>
                <p>
                  Estilização, responsividade e construção de interfaces.
                </p>
              </div>

              <span className="tech-label">Front-end</span>
            </article>


            <article className="tech-card">
              <div className="tech-icon">
                JS
              </div>

              <div>
                <h3>JavaScript</h3>
                <p>
                  Interatividade e lógica para aplicações web.
                </p>
              </div>

              <span className="tech-label">Front-end</span>
            </article>


            <article className="tech-card">
              <div className="tech-icon">
                ⚛
              </div>

              <div>
                <h3>React</h3>
                <p>
                  Desenvolvimento de interfaces através de componentes.
                </p>
              </div>

              <span className="tech-label">Front-end</span>
            </article>


            <article className="tech-card">
              <div className="tech-icon">
                Py
              </div>

              <div>
                <h3>Python</h3>
                <p>
                  Linguagem que venho explorando durante meus estudos.
                </p>
              </div>

              <span className="tech-label tech-learning">
                Estudando
              </span>
            </article>


            <article className="tech-card">
              <div className="tech-icon">
                DB
              </div>

              <div>
                <h3>Banco de Dados</h3>
                <p>
                  Fundamentos de armazenamento e organização de dados.
                </p>
              </div>

              <span className="tech-label tech-learning">
                Estudando
              </span>
            </article>

          </div>
        </section>


        {/* FERRAMENTAS */}
        <section className="tools-section">

          <div className="tech-section-title">
            <span>03</span>

            <div>
              <h2>Ferramentas</h2>

              <p>
                Ferramentas que fazem parte do meu processo
                de desenvolvimento.
              </p>
            </div>
          </div>


          <div className="tools-list">

            <div className="tool-item">
              <span>01</span>
              <strong>Git</strong>
              <p>Versionamento</p>
            </div>

            <div className="tool-item">
              <span>02</span>
              <strong>GitHub</strong>
              <p>Repositórios</p>
            </div>

            <div className="tool-item">
              <span>03</span>
              <strong>VS Code</strong>
              <p>Desenvolvimento</p>
            </div>

            <div className="tool-item">
              <span>04</span>
              <strong>Vite</strong>
              <p>Ambiente React</p>
            </div>

          </div>
        </section>


        {/* FINAL */}
        <section className="tech-footer">
          <span>✦</span>

          <p>
            Sempre aprendendo algo novo.
          </p>

          <span>✦</span>
        </section>

      </section>
    </main>
  )
}

export default Tecnologias