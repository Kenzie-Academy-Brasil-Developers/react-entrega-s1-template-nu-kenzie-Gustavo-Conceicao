import "./landing.css";

const Landing = () => {
  return (
    <body className="bodyLanding">
      <section className="sectionLeft">
        <h1>
          <img className="imgLogo" src="/img/Nu Kenzie (1).png" alt="Logo" />
        </h1>
        <p className="textLanding">Centralize o controle das suas finanças</p>
        <span className="spanLanding">de forma rápida e segura</span>
        <button className="btnLanding">Iniciar</button>
      </section>
      <section className="sectionRight">
        <img src="/img/illustration.svg" alt="illustration" />
      </section>
    </body>
  );
};

export default Landing;
