function showFireDepartmentInfo() {
    const city = document.getElementById('citySelect').value;
    const infoDisplay = document.getElementById('infoDisplay');
  
    let info = '';
    switch(city) {
      case 'cidade1':
        info = `
          <div class="card">
            <h3>Bombeiros - Petrolina - PE</h3>
            <p><strong>Endereço:</strong> Av. Nilo Coelho, 155 - Gercino Coelho, Petrolina - PE</p>
            <p><strong>Telefone:</strong> (87) 3866-6315</p>
            <p><strong>Horário de atendimento:</strong> 24 horas</p>
            <p><strong>Serviços:</strong> Combate a incêndios, resgate e salvamento</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.3256231843984!2d-40.51138412497674!3d-9.392792790683773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x773706237ffff89%3A0x4fc050b18aa2b562!2sCorpo%20de%20Bombeiros%20Militar%20de%20Pernambuco!5e0!3m2!1spt-BR!2sbr!4v1730427843966!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        `;
        break;
      case 'cidade2':
        info = `
          <div class="card">
            <h3>Bombeiros - Juazeiro - BA</h3>
            <p><strong>Endereço:</strong> João Paulo II, Juazeiro - BA, Brasil</p>
            <p><strong>Telefone:</strong> (74) 3612-5094</p>
            <p><strong>Horário de atendimento:</strong> 24 horas</p>
            <p><strong>Serviços:</strong> Combate a incêndios, resgate, primeiros socorros</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.667310262916!2d-40.49572462497597!3d-9.450543290628632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x773718aa47ce523%3A0x966a73cb5e8f2d06!2s9%C2%BA%20Batalh%C3%A3o%20de%20Bombeiros%20Militar!5e0!3m2!1spt-BR!2sbr!4v1730428520183!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        `;
        break;
      case 'cidade3':
        info = `
          <div class="card">
            <h3>Bombeiros - Casa Nova - BA</h3>
            <p><strong>Endereço:</strong> Praça C, 789</p>
            <p><strong>Telefone:</strong> (31) 1122-3344</p>
            <p><strong>Horário de atendimento:</strong> 24 horas</p>
            <p><strong>Serviços:</strong> Salvamento aquático, combate a incêndios, resgate</p>
          </div>
        `;
        break;
      default:
        info = `<p>Por favor, selecione uma cidade.</p>`;
    }
  
    infoDisplay.innerHTML = info;
  
    // Abre o modal programaticamente
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'));
    infoModal.show();
  }