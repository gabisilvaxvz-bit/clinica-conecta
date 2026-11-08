
import { useRef, useState } from "react";

export default function VerificarEmail() {
  const [codigo, setCodigo] = useState([
    "", "", "", "", "", ""
  ]);

  const campos = useRef<(HTMLInputElement | null)[]>([]);

  const atualizarCodigo = (
    valor: string,
    indice: number
  ) => {
    const numero = valor.replace(/\D/g, "").slice(-1);

    const novoCodigo = [...codigo];
    novoCodigo[indice] = numero;

    setCodigo(novoCodigo);

    if (numero && indice < 5) {
      campos.current[indice + 1]?.focus();
    }
  };

  const verificarCodigo = () => {
    if (codigo.some((numero) => numero === "")) {
      alert("Preencha todos os campos do código.");
      return;
    }

    alert("Código preenchido! Aguarde a validação.");
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Cabeçalho */}
      <header className="h-16 bg-[#292929] flex items-center justify-center relative">

        <h1 className="text-white text-xl font-normal">
          Clínica Conecta
        </h1>

        <button className="absolute left-5 text-white text-2xl">
          ☰
        </button>

      </header>

      {/* Conteúdo */}
      <main className="w-[90%] max-w-[950px] min-h-[440px] mx-auto mt-[70px] bg-[#0D1937] text-white text-center px-6 py-12 relative">

        {/* Voltar */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-6 left-6 text-blue-400 text-sm"
        >
          ← Voltar
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8 mt-4">

          {/* Substituir pelo logotipo original da clínica */}
          <img
            src="/images/logo-conecta.svg"
            alt="Logo Clínica Conecta"
            className="w-14 h-14 object-contain"
          />

          <div className="text-left">
            <span className="block text-sm text-blue-400">
              Clínica
            </span>

            <strong className="text-xl text-[#B9D9EC]">
              Conecta
            </strong>
          </div>

        </div>

        {/* Título */}
        <h2 className="text-xl font-semibold mb-3">
          Verifique seu e-mail
        </h2>

        <p className="text-sm text-[#C6D0DF] leading-relaxed mb-10">
          Enviamos um código de verificação para seu e-mail.
          <br />
          Digite-o abaixo para confirmar sua conta.
        </p>

        {/* Campos do código */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-10">

          {codigo.map((numero, indice) => (
            <input
              key={indice}
              ref={(elemento) => {
                campos.current[indice] = elemento;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={numero}
              aria-label={`Dígito ${indice + 1}`}
              onChange={(e) =>
                atualizarCodigo(e.target.value, indice)
              }
              onKeyDown={(e) => {
                if (
                  e.key === "Backspace" &&
                  !codigo[indice] &&
                  indice > 0
                ) {
                  campos.current[indice - 1]?.focus();
                }
              }}
              className="w-10 h-12 sm:w-14 sm:h-14 bg-[#29445F] border-2 border-[#1759B5] rounded-lg text-center text-xl text-white outline-none focus:border-blue-400"
            />
          ))}

        </div>

        {/* Botão */}
        <button
          onClick={verificarCodigo}
          className="w-full max-w-[350px] bg-[#1055B3] hover:bg-[#176BCB] text-white py-3 rounded-lg text-base transition-colors"
        >
          Verificar e-mail
        </button>

        {/* Reenviar código */}
        <p className="mt-7 text-sm text-[#D3DCE9]">

          Não recebeu o código?{" "}

          <button
            onClick={() =>
              alert("O reenvio será integrado ao sistema de e-mail.")
            }
            className="text-[#91C4ED] underline"
          >
            Reenviar o código.
          </button>

        </p>

      </main>

    </div>
  );
}