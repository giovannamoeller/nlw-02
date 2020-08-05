import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


const TeacherItem = () => {
    return (
        <main>
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars1.githubusercontent.com/u/47362960?s=460&u=99702db3dedab50f47b0f151acea1e2e9db1b3fc&v=4"
              alt=""
            />
            <div>
              <strong>Giovanna</strong>
              <span>Química</span>
            </div>
          </header>

          <div>
            <p>
              Entusiasta das melhores tecnologias de química avançada.
              <br />
              <br />
              Apaixonada por explodir coisas em laboratório e por mudar a vida
              das pessoas através de experiências. Mais de 200.000 pessoas já
              passaram por uma das minhas explosões.
            </p>
          </div>

          <footer>
            <p>Preço/hora
                <strong>R$ 80,00</strong>
            </p>

            <button type="button">
                <img src={whatsappIcon} alt=""/>Entrar em contato
            </button>
          </footer>

        </article>
      </main>
    )
}

export default TeacherItem;