import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <main className="home">
      <section className="hero">

        <div className="hero-content">
          <span className="hero-intro">
            Olá, eu sou Sthefanie!!
          </span>

          <h1>
            Transformando ideias em
            <span> experiências digitais.</span>
          </h1>

          <p>
            Estudante de Análise e Desenvolvimento de Sistemas
            com foco em desenvolvimento front-end e interesse
            em Inteligência Artificial.
          </p>

          <div className="hero-buttons">
            <Link to="/projetos" className="button-primary">
              Conheça meus projetos
            </Link>

            <Link to="/sobre" className="button-secondary">
              Sobre mim
            </Link>
          </div>

          <div className="hero-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">

            <div className="code-card-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-tag">
                  &lt;hello&gt;
                </span>
              </p>

              <h2>Sthefanie</h2>

              <p className="code-text">
                criando, aprendendo
                <br />
                e transformando ideias.
              </p>

              <p>
                <span className="code-tag">
                  &lt;/hello&gt;
                </span>
              </p>
            </div>

            <span className="decoration decoration-one">
              ✦
            </span>

            <span className="decoration decoration-two">
              ✦
            </span>

            <span className="decoration decoration-three">
              ○
            </span>

          </div>
        </div>

      </section>
    </main>
  )
}

export default Home