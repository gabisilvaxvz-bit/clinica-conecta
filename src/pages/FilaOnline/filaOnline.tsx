import Layout from '@components/Layout';

export default function FilaOnline() {
  return (
    <Layout title="Fila Online">
      <div className="content-container">
        <div className="checkin-banner">
          <span className="checkin-dot"></span>
          <span>Você está na fila - Check-in realizado às 09h12</span>
          <span className="checkin-date">19 out 2026 - Atualizado às 09h18</span>
        </div>

        <div className="fila-grid">
          <div className="fila-main">
            <div className="card-status-grande">
              <div className="card-header-status">
                <h2>Seu atendimento está chegando.</h2>
                <span className="badge-aguardando">Aguardando</span>
              </div>

              <div className="card-body-status">
                <div className="posicao-box">
                  <span className="numero-posicao">03</span>
                  <span className="texto-posicao">sua posição na fila</span>
                </div>

                <div className="tempo-box">
                  <div className="tempo-info">
                    <i className="icon-relogio">🕒</i>
                    <h3>12–18 min</h3>
                  </div>
                  <p>Espera estimada - 2 pessoas à sua frente</p>
                </div>
              </div>

              <p className="aviso-rodape">
                A previsão pode variar conforme a duração dos atendimentos e as prioridades assistenciais. Sua posição não é uma garantia de horário.
              </p>
            </div>

            <div className="card-passos">
              <h3>Cada passo</h3>
              <div className="passos-steps">
                <div className="passo done">
                  <div className="passo-icon">✓</div>
                  <div className="passo-info">
                    <h4>Chegada confirmada</h4>
                    <p>09h12 - Recepção</p>
                  </div>
                </div>

                <div className="passo active">
                  <div className="passo-icon">🕒</div>
                  <div className="passo-info">
                    <h4>Aguardando chamada</h4>
                    <p className="destaque">Você está aqui</p>
                  </div>
                </div>

                <div className="passo">
                  <div className="passo-icon">🩺</div>
                  <div className="passo-info">
                    <h4>Em atendimento</h4>
                    <p>Aguarde a equipe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-rodape-unidade">
              <span>🔔 Permaneça na unidade e acompanhe a chamada da equipe. A fila online é um apoio, não substitui as orientações da recepção.</span>
            </div>
          </div>

          <div className="fila-sidebar">
            <div className="card-detalhes">
              <h3>Seu atendimento de hoje</h3>
              <div className="detalhe-item">
                <span className="label">Paciente</span>
                <span className="valor">Milena Mattos</span>
              </div>
              <div className="detalhe-item">
                <span className="label">Consulta</span>
                <span className="valor">Clínica médica · Dra. Beatriz Santos</span>
              </div>
              <div className="detalhe-item">
                <span className="label">Agendado para</span>
                <span className="valor">19 out 2026 - 09h30</span>
              </div>
              <div className="detalhe-item">
                <span className="label">Onde aguardar</span>
                <span className="valor">Unidade Centro · Sala de espera</span>
              </div>
              <p className="sala-aviso">A sala de atendimento será informada pela equipe no momento da chamada.</p>
            </div>

            <div className="card-alertas">
              <h3>Alertas</h3>
              <div className="alerta-toggle">
                <span>SMS</span>
                <input type="checkbox" defaultChecked className="toggle-switch" />
              </div>
              <div className="alerta-toggle">
                <span>E-mail</span>
                <input type="checkbox" defaultChecked className="toggle-switch" />
              </div>
              <div className="alerta-toggle">
                <span>Push</span>
                <input type="checkbox" className="toggle-switch" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}