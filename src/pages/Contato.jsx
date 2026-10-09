import './Contato.css'

function Contato() {
  return (
    <main className="contato">
      <section className="contato-container">

        {/* CABEÇALHO */}
        <header className="contato-header">
          <span className="contato-eyebrow">
            Contato
          </span>

          <h1>
            Entre em <strong>contato.</strong>
          </h1>

          <p>
            Se quiser conhecer mais sobre meus projetos, acompanhar meu
            trabalho ou entrar em contato profissionalmente, você pode
            me encontrar nos canais abaixo.
          </p>
        </header>

        {/* CONTEÚDO */}
        <section className="contato-content">

          {/* CARD DECORATIVO */}
          <div className="contato-visual">
            <span className="decoracao-estrela">✦</span>

            <div className="contato-card-principal">
              <span className="card-tag">
                &lt;contact&gt;
              </span>

              <h2>Hello!</h2>

              <p>
                Estou aberta a novas oportunidades, conexões e
                experiências na área de tecnologia.
              </p>

              <span className="card-tag">
                &lt;/contact&gt;
              </span>
            </div>

            <span className="decoracao-circulo"></span>
          </div>

          {/* REDES */}
          <div className="contato-redes">

            {/* GITHUB */}
            <a
              href="https://github.com/stheclara"
              target="_blank"
              rel="noreferrer"
              className="rede-card"
            >
              <div className="rede-topo">
                <span className="rede-numero">
                  01
                </span>

                <span className="rede-seta">
                  ↗
                </span>
              </div>

              <div className="rede-conteudo">
                <span className="rede-label">
                  Projetos e códigos
                </span>

                <h2>GitHub</h2>

                <p>@stheclara</p>
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/sthefanie-teixeira/"
              target="_blank"
              rel="noreferrer"
              className="rede-card"
            >
              <div className="rede-topo">
                <span className="rede-numero">
                  02
                </span>

                <span className="rede-seta">
                  ↗
                </span>
              </div>

              <div className="rede-conteudo">
                <span className="rede-label">
                  Perfil profissional
                </span>

                <h2>LinkedIn</h2>

                <p>Sthefanie Teixeira</p>
              </div>
            </a>

          </div>

        </section>

        {/* RODAPÉ */}
        <footer className="contato-footer">
          <span className="footer-logo">
            ST.
          </span>

          <p>
            Feito com carinho e algumas linhas de código.
          </p>

          <span className="footer-star">
            ✦
          </span>
        </footer>

      </section>
    </main>
  )
}

export default Contato