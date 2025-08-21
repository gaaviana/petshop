"use server";

import { supabase } from "./supabase";

export async function enviarContato(dadosForm: FormData) {
    /* Extraindo e tratando os dados de cada campo do formulario */
    const nome = dadosForm.get("nome")?.toString().trim();
    const email = dadosForm.get("email")?.toString().trim();
    const mensagem = dadosForm.get("mensagem")?.toString().trim();

    /* validação basica no back-end */
    if(!nome || !email || !mensagem){
        throw new Error("Todos os campos devem ser preenchidos")
    }

    /* Executando o insert atraves da lib supabase. Capturamos tambem */
    const { error } = await supabase.from('form').insert({nome, email, mensagem})

    if (error){
        throw new Error("Não foi possivel enviar sua mensagem. Tente mais tarde.")
    }
}