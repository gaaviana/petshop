"use client";
import { useState } from "react";
import estilos from "./Formulario.module.css";
import { enviarContato } from "@/lib/enviarContato";
import {useFormStatus } from "react-dom";

function BotaoEnviar() {
  const { pending } = useFormStatus();
  return  <button type="submit" disabled={pending}
        >{pending ? "processando..." : "enviar"}</button>
}

export default function Formulario() {
  // estados para os textos da mensagens
  const [mensagem, setMensagem] = useState("");

  // estados para o tipo da mensagem
  const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">();

  async function processarDados(dadosForm: FormData) {
    /* Resey dos states votando ao valor padrao */
    setMensagem("");
    setTipoMensagem("");

    try {
      await enviarContato(dadosForm);
      setMensagem("mesagem enviada com sucesso!");
      setTipoMensagem("sucesso");
      dadosForm.set("nome", "");
      dadosForm.set("email", "");
      dadosForm.set("mensagem", "");
    } catch (error: unknown) {
        // verificando se é um erro do type error, para evitarerros no deploy
      setMensagem(error instanceof Error ? error.message : "Erro ao enviar");
      setTipoMensagem("erro");
    }
  }

  return (
    <form action={processarDados} className={estilos.formulario}>
      <div className={estilos.campo}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite o nome completo"
        />
      </div>

      <div className={estilos.campo}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Informe um e-mail valido"
        />
      </div>

      <div className={estilos.campo}>
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          name="mensagem"
          id="mensagem"
          rows={5}
          placeholder="escreva sua mensagem aqui"
        ></textarea>
      </div>

      <div className={estilos.campo}>
       <BotaoEnviar/>
      </div>
    </form>
  );
}
