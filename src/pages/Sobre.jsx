import './Sobre.css'

function Sobre() {
  return (
    <main className="sobre">
      <section className="sobre-container">

        <div className="sobre-title">
          <span>Um pouco sobre mim</span>

          <h1>
            Aprendendo,
            <br />
            criando e
            <strong> evoluindo.</strong>
          </h1>
        </div>

        <div className="sobre-content">
          <p>
            Sou <strong>Sthefanie Teixeira</strong>, estudante de Análise e
            Desenvolvimento de Sistemas, com foco em desenvolvimento front-end
            e interesse em Inteligência Artificial.
          </p>

          <p>
            Atualmente, estou construindo minha experiência por meio de projetos
            práticos, desenvolvendo sites e aplicações web com HTML, CSS,
            JavaScript e React, além de ampliar meus conhecimentos em Python e
            bancos de dados.
          </p>

          <p>
            Minha trajetória profissional também inclui experiência nas áreas
            administrativa, financeira e de social media, que me proporcionou
            habilidades como organização, comunicação, responsabilidade e
            atenção aos detalhes.
          </p>

          <p>
            Na tecnologia, busco transformar o que aprendo em projetos reais,
            explorando novas ferramentas e desenvolvendo minhas habilidades
            na prática.
          </p>

          <div className="sobre-highlights">
            <div className="highlight-card">
              <span>01</span>
              <h3>Formação</h3>
              <p>Análise e Desenvolvimento de Sistemas</p>
            </div>

            <div className="highlight-card">
              <span>02</span>
              <h3>Foco atual</h3>
              <p>Front-end e Inteligência Artificial</p>
            </div>

            <div className="highlight-card">
              <span>03</span>
              <h3>Construindo</h3>
              <p>Projetos práticos para meu portfólio</p>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}

export default Sobre