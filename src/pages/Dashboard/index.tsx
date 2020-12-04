import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />

        <button type="submit"> Pesquisar </button>
      </Form>

      <Repositories>
        <a href="">
          <img
            src="https://avatars0.githubusercontent.com/u/49699668?s=460&u=cf84e7539177fe0b6d18832f37182c456f8e12f6&v=4"
            alt="Windsor Lima"
          />
          <div>
            <strong>windsorlima/sapataria_backend</strong>
            <p>Api feita para um app sobre sapatarias</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="">
          <img
            src="https://avatars0.githubusercontent.com/u/49699668?s=460&u=cf84e7539177fe0b6d18832f37182c456f8e12f6&v=4"
            alt="Windsor Lima"
          />
          <div>
            <strong>windsorlima/sapataria_backend</strong>
            <p>Api feita para um app sobre sapatarias</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="">
          <img
            src="https://avatars0.githubusercontent.com/u/49699668?s=460&u=cf84e7539177fe0b6d18832f37182c456f8e12f6&v=4"
            alt="Windsor Lima"
          />
          <div>
            <strong>windsorlima/sapataria_backend</strong>
            <p>Api feita para um app sobre sapatarias</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
