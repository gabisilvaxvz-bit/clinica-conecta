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

  const tratarKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    indice: number
  ) => {
    // Permite apagar com Backspace e mover o foco para o campo anterior
    if (e.key === "Backspace" && !codigo[indice] && indice > 0) {
      campos.current[indice - 1]?.focus();
    }
  };

  const verificarCodigo = () => {
    if (codigo.some((numero) => numero === "")) {
      alert("Preencha todos os campos do código.");
      return;
    }

    const codigoFinal = codigo.join("");
    alert(`Código preenchido (${codigoFinal})! Aguarde a validação.`);
  };

  return (
    <div className="min-h-screen bg-[#070d1e] text-white flex flex-col justify-center items-center relative p-6 font-sans select-none">
      {/* Botão Voltar */}
      <button 
        onClick={() => window.history.back()} 
        className="absolute top-8 left-8 flex items-center gap-2 text-[#4d82f3] hover:text-white transition-colors text-lg"
      >
        <span className="text-xl">&larr;</span> voltar
      </button>

      <div className="w-full max-w-md flex flex-col items-center text-center">
        {/* Logótipo */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full border-4 border-[#1e60f0] flex items-center justify-center bg-[#0d1b3e]">
            <svg className="w-8 h-8 text-[#1e60f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.022.547l-1.07 1.07a2 2 0 00-.585 1.414V20a1 1 0 001 1h16a1 1 0 001-1v-1.848a2 2 0 00-.585-1.414l-1.07-1.07z" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[#3b82f6] text-xl font-medium tracking-wide">Clínica</span>
            <span className="text-white text-3xl font-bold tracking-tight">Conecta</span>
          </div>
        </div>

        {/* Título e Instruções */}
        <h1 className="text-3xl font-bold mb-2">Verifique o seu e-mail</h1>
        <p className="text-slate-400 mb-8 text-sm sm:text-base">
          Introduza o código de 6 dígitos enviado para o seu e-mail para validar o acesso.
        </p>

        {/* Inputs do Código (6 Digitos) */}
        <div className="flex gap-2 sm:gap-3 mb-8 justify-center">
          {codigo.map((digito, index) => (
            <input
              key={index}
              ref={(el) => {campos.current[index] = el }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digito}
              onChange={(e) => atualizarCodigo(e.target.value, index)}
              onKeyDown={(e) => tratarKeyDown(e, index)}
              className="w-11 h-14 sm:w-12 sm:h-16 text-center text-2xl font-bold bg-[#162238] border-2 border-[#20314f] rounded-xl text-white focus:border-[#2563eb] focus:outline-none focus:ring-4 focus:ring-[#2563eb]/20 transition-all"
            />
          ))}
        </div>

        {/* Botão para Confirmar */}
        <button
          onClick={verificarCodigo}
          className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg text-lg"
        >
          Verificar Código
        </button>

        {/* Reenviar código */}
        <p className="mt-6 text-slate-400 text-sm">
          Não recebeu o código?{" "}
          <button className="text-[#3b82f6] hover:underline font-medium">
            Reenviar
          </button>
        </p>
      </div>
    </div>
  );
}
