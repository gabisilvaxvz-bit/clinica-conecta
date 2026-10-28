import Sidebar ../../Sidebar;

import React, { useState } from 'react';

interface AlertState {
  sms: boolean;
  email: boolean;
  push: boolean;
}

export const FilaOnline: React.FC = () => {
  const [alerts, setAlerts] = useState<AlertState>({
    sms: true,
    email: true,
    push: false,
  });

  const toggleAlert = (key: keyof AlertState) => {
    setAlerts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="container-fluid p-4 bg-light text-dark min-vh-100">
      {/* Cabeçalho */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="fw-bold mb-1 text-dark">Fila online</h2>
          <p className="text-muted small mb-0">
            Acompanhe a espera após o check-in e fique por perto para sua chamada.
          </p>
        </div>
        <button 
          type="button" 
          className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-semibold"
          onClick={() => window.location.reload()}
        >
          🔄 Atualizar fila
        </button>
      </div>

      {/* Banner de Status */}
      <div className="card border-0 mb-4 px-3 py-2 bg-white shadow-sm rounded-3">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-primary rounded-circle p-1"> </span>
            <span className="small text-muted">
              <strong className="text-dark">Você está na fila</strong> · Check-in realizado às 09h12
            </span>
          </div>
          <span className="small text-muted">19 out 2026 · Atualizado às 09h18</span>
        </div>
      </div>

      <div className="row g-4">
        {/* Coluna Principal */}
        <div className="col-lg-8">
          {/* Card Principal Azul */}
          <div className="card border-0 bg-primary text-white p-4 mb-4 shadow-sm rounded-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-normal mb-0">Seu atendimento está chegando.</h5>
              <span className="badge bg-white text-primary px-3 py-2 rounded-pill fw-bold">
                Aguardando
              </span>
            </div>

            <div className="row align-items-center mb-4">
              <div className="col-6 border-end border-white border-opacity-25">
                <div className="display-3 fw-bold lh-1">03</div>
                <div className="small opacity-75 mt-1">sua posição na fila</div>
              </div>
              <div className="col-6 ps-4">
                <div className="fs-3 fw-bold mb-1">
                  ⏱️ 12–18 min
                </div>
                <div className="small opacity-75">
                  Espera estimada · 2 pessoas à sua frente
                </div>
              </div>
            </div>

            <p className="small opacity-75 mb-0">
              A previsão pode variar conforme a duração dos atendimentos e as prioridades assistenciais. Sua posição não é uma garantia de horário.
            </p>
          </div>

          {/* Seção Cada Passo */}
          <div className="card border-0 p-4 mb-4 shadow-sm rounded-4">
            <h6 className="fw-bold mb-4">Cada passo</h6>

            <div className="row text-center">
              <div className="col-4">
                <div className="mb-2">
                  <span className="badge bg-primary-subtle text-primary p-3 rounded-circle fs-5">✓</span>
                </div>
                <div className="fw-semibold small">Chegada confirmada</div>
                <div className="text-muted extra-small">09h12 · Recepção</div>
              </div>

              <div className="col-4">
                <div className="mb-2">
                  <span className="badge bg-primary text-white p-3 rounded-circle fs-5">🕒</span>
                </div>
                <div className="fw-semibold small">Aguardando chamada</div>
                <div className="text-primary fw-bold extra-small">Você está aqui</div>
              </div>

              <div className="col-4">
                <div className="mb-2">
                  <span className="badge bg-light text-secondary p-3 rounded-circle fs-5">🩺</span>
                </div>
                <div className="fw-semibold small text-muted">Em atendimento</div>
                <div className="text-muted extra-small">Aguarde a equipe</div>
              </div>
            </div>
          </div>

          {/* Alerta de Recepção */}
          <div className="p-3 bg-primary-subtle text-primary-emphasis rounded-3 border border-primary-subtle d-flex align-items-center gap-2">
            <span>🔔</span>
            <span className="small">
              Permaneça na unidade e acompanhe a chamada da equipe. A fila online é um apoio, não substitui as orientações da recepção.
            </span>
          </div>
        </div>

        {/* Coluna Lateral */}
        <div className="col-lg-4">
          {/* Detalhes da Consulta */}
          <div className="card border-0 p-4 mb-4 shadow-sm rounded-4">
            <h6 className="fw-bold mb-4">Seu atendimento de hoje</h6>

            <div className="mb-3">
              <div className="text-muted small">Paciente</div>
              <div className="fw-semibold">Milena Mattos</div>
            </div>

            <div className="mb-3">
              <div className="text-muted small">Consulta</div>
              <div className="fw-semibold">Clínica médica · Dra. Beatriz Santos</div>
            </div>

            <div className="mb-3">
              <div className="text-muted small">Agendado para</div>
              <div className="fw-semibold">19 out 2026 · 09h30</div>
            </div>

            <div className="mb-4">
              <div className="text-muted small">Onde aguardar</div>
              <div className="fw-semibold">Unidade Centro · Sala de espera</div>
            </div>

            <p className="text-muted mb-0 small">
              A sala de atendimento será informada pela equipe no momento da chamada.
            </p>
          </div>

          {/* Configuração de Alertas */}
          <div className="card border-0 p-4 shadow-sm rounded-4">
            <h6 className="fw-bold mb-3">Alertas</h6>

            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span className="small fw-medium">SMS</span>
              <div className="form-check form-switch m-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={alerts.sms}
                  onChange={() => toggleAlert('sms')}
                />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <span className="small fw-medium">E-mail</span>
              <div className="form-check form-switch m-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={alerts.email}
                  onChange={() => toggleAlert('email')}
                />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center py-2 pt-3">
              <span className="small fw-medium">Push</span>
              <div className="form-check form-switch m-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={alerts.push}
                  onChange={() => toggleAlert('push')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-muted small mt-5">
        Ambiente demonstrativo · Todos os dados são fictícios | Privacidade · Acessibilidade · Ajuda
      </div>
    </div>
  );
};

export default FilaOnline;