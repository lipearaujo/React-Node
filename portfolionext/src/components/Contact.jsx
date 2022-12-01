import React from "react";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import styles from "../styles/Home.module.css";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:filipecensi@hotmail.com?subject=${data.assunto}&body=Olá, meu nome é ${data.nome}. ${data.mensagem} (${data.email})`;
    console.log(data);
  };

  return (
    <div className={styles.contact}>
      <h2>Contato</h2>
      <form className={styles.contact__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.contact__form__input}>
          <input
            type="text"
            {...register("nome", { required: true })}
            placeholder="Nome"
            className={styles.contact__input}
          />
          <input
            type="text"
            {...register("email", { required: true })}
            placeholder="Email"
            className={styles.contact__input}
          />
        </div>

        <input
          type="text"
          {...register("assunto", { required: true })}
          placeholder="Assunto"
          className={styles.contact__subject}
        />
        <textarea
          {...register("mensagem", { required: true })}
          placeholder="Mensagem"
          className={styles.contact__textarea}
        ></textarea>

        <button className={styles.contact__btn} type="submit">
          Enviar
        </button>
      </form>

      <div className={styles.contact__infos}>
        <div className={styles.contact__info__card}>
          <AiFillPhone id={styles.phone__icon} />
          <p>(67)99977-3545</p>
        </div>
        <div className={styles.contact__info__card}>
          <AiOutlineMail id={styles.email__icon} />
          <p>filipecensi@hotmail.com</p>
        </div>
        <div className={styles.contact__info__card}>
          <AiFillEnvironment id={styles.pin__icon} />
          <p>Dourados / MS</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$
