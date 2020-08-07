import React from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/global.css";
import "./style.css";

import PageHeader from "../../components/PageHeader";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <div className="input-block">
            <label htmlFor="name">Nome completo</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="input-block">
            <label htmlFor="avatar_url">Avatar</label>
            <input type="text" name="avatar_url" id="avatar_url" />
          </div>

          <div className="input-block">
            <label htmlFor="whatsapp">WhatsApp</label>
            <input type="text" name="whatsapp" id="whatsapp" />
          </div>

        </fieldset>
      </main>
    </div>
  );
}

export default TeacherForm;
