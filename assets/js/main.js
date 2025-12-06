// assets/js/main.js

// 1. DADOS DAS CERTIFICAÇÕES
// IMPORTANTE: Certifique-se que os arquivos na pasta 'assets/images/' 
// tenham exatamente os nomes definidos em 'imgName'.
const certifications = [
  { 
    title: 'ISO 9001', 
    imgName: 'iso-9001.png',
    short: 'Gestão da Qualidade.',
    description: 'A norma assegura que a empresa possui um Sistema de Gestão da Qualidade voltada para os produtos e serviços que produz. O foco é unir a satisfação do cliente, melhoria contínua dos processos, engajamento da equipe visando a sustentabilidade do negócio. Com a certificação ISO 9001, as empresas passam a ser reconhecidas e aumenta a credibilidade perante o mercado.' 
  },
  { 
    title: 'ISO 14001', 
    imgName: 'iso-14001.png',
    short: 'Gestão Ambiental.',
    description: 'Voltada para um Sistema de Gestão Ambiental, com foco em melhorar a performance ambiental da empresa, unindo sustentabilidade ambiental e econômica. Independente do tamanho de sua Organização, é através de um Sistema de Gestão Ambiental estruturado que sua empresa passa a reduzir o impacto ambiental.' 
  },
  { 
    title: 'ISO 21001', 
    imgName: 'iso-21001.png',
    short: 'Excelência em Serviços Educativos.',
    description: 'Visa garantir excelência em serviços educativos, como Escolas, Universidades, Educação Corporativa, Instituições de Treinamentos, etc. para assegurar a qualidade do ensino. É uma ferramenta de gestão direcionada para alavancar o programa educacional da Organização.' 
  },
  { 
    title: 'ISO 22000', 
    imgName: 'iso-22000.png',
    short: 'Segurança Alimentar.',
    description: 'Os benefícios de certificar a sua empresa em uma norma de segurança alimentar é proporcionar confiança a todos os envolvidos em uma cadeia de suprimentos alimentares, identificando os riscos inerentes ao negócio e atuando em trazer soluções eficazes para o processo.' 
  },
  { 
    title: 'ISO 27001', 
    imgName: 'iso-27001.png',
    short: 'Segurança da Informação.',
    description: 'Traz como diretriz um Sistema de Gestão da Segurança da Informação (SGSI), para que aumente os controles de segurança através de análises e antecipações de riscos e reconhecimento das vulnerabilidades, atuando para trazer soluções em defesas. Buscar a certificação 27001 é uma iniciativa que oferece um diferencial de mercado, afinal, proteger dados e informações confidenciais é primordial.' 
  },
  { 
    title: 'ISO 37001', 
    imgName: 'iso-37001.png',
    short: 'Antissuborno e Compliance.',
    description: 'Voltada para desenvolver uma cultura antissuborno na Organização. Pode ser aplicada em Organizações públicas ou privadas, visando integridade financeira, melhoria da imagem da Instituição e ajudando a implementar a cultura da transparência e confiança no ambiente de trabalho, para fortalecimento da marca.' 
  },
  { 
    title: 'ISO 41001', 
    imgName: 'iso-41001.png',
    short: 'Facilities & Infraestrutura.',
    description: 'Estabelece diretrizes para gestão de pessoas e instalações, buscando redução de custo, ganhos de eficiência, otimização de processos, etc. A norma visa que a Organização estabeleça um gerenciamento da infraestrutura, como limpeza, instalações prediais, layout produtivo e organizacional, segurança, facilities, entre outros. O intuito é aprimorar os sistemas de gestão para atingir um ambiente produtivo.' 
  },
  { 
    title: 'ISO 45001', 
    imgName: 'iso-45001.png',
    short: 'Saúde e Segurança no Trabalho.',
    description: 'Segurança é algo que não pode ser negligenciado, pois afeta diretamente a vida! Gerenciar um Sistema de Gestão voltado para Segurança no Trabalho é mais do que necessário, pois é um caminho assertivo para minimizar os acidentes de trabalho e oferecer um ambiente seguro, através do aprimoramento das condições de trabalho e cultura de prevenção dos acidentes de trabalho.' 
  },
  { 
    title: 'ISO 50001', 
    imgName: 'iso-50001.png',
    short: 'Eficiência Energética.',
    description: 'Norma pautada em eficiência energética, para comprovar que a Organização estabelece práticas de melhoria contínua focada em desempenho energético, levando em consideração redução do custo, emissão de gases de efeito estufa, otimização da matriz energética da empresa.' 
  },
  { 
    title: 'ISO 13485', 
    imgName: 'iso-13485.png',
    short: 'Dispositivos Médicos.',
    description: 'Essa norma é amplamente divulgada na indústria da saúde, pois a norma consolida e orienta como os fabricantes de dispositivos médicos devem agir para fornecer produtos de qualidade e com confiabilidade.' 
  },
  { 
    title: 'ISO 42001', 
    imgName: 'iso-42001.png',
    short: 'Inteligência Artificial',
    description: 'Estabelece requisitos para que as empresas que desenvolvem ou utilizem Inteligência Artificial em um Sistema de Gestão responsável, enfatizando princípios éticos, governança em IA, conformidade legal e transparência. O objetivo é gerar confiabilidade e vantagem competitiva.' 
  },
  { 
    title: 'HALAL', 
    imgName: 'halal.png',
    short: 'Conformidade Islâmica.',
    description: 'Visa reconhecer as empresas que agem em conformidade com procedimentos específicos e matérias-primas autorizadas pelo islã, tornando apto o produto para ser consumido pela comunidade dos mulçumanos. É um certificado muito exigido para as empresas que desejam exportar produtos para países e mercados mulçumanos. A palavra Halal no idioma árabe significa permitido. Podem se certificar empresas da área alimentar, cosméticos, farmacêutico, etc. Além de expandir o seu mercado, a certificação HALAL agrega valor ao produto e sua empresa passa a pertencer ao mercado com esse diferencial.' 
  },
];

// 2. LISTA DE TREINAMENTOS
const trainingList = [
  'ISO 9001','ISO 14001','ISO 22000','ISO 27001','ISO 42001','ISO 45001','ISO 13485',
  'ISO 17021','HALAL','GMP','Adequações para LGPD','Cadeia de Custódia (PEFC/FSC®)',
  'Formação de Auditores Internos','Formação de Auditores Líderes (Inglês)',
  'Liderança','Tratamento de Reclamações','Gestão de Não Conformidades','Combate ao Assédio'
];

// 3. LISTA DE DEPOIMENTOS (ATUALIZADO COM OS PRINTS)
const testimonials = [
  {
    name: 'Luiz Goulart',
    role: 'Participante',
    text: 'Participei do treinamento do Método Mais e foi, sem dúvidas, uma das melhores experiências que já tive. A didática foi extremamente inclusiva, com um formato de ensino acessível, claro e envolvente. Me senti acolhido e verdadeiramente motivado a aprender.'
  },
  {
    name: 'Camila Bistene',
    role: 'Participante',
    text: 'Participei do curso Método MAIS e foi uma experiência muito boa. O conteúdo foi claro e direto, e ajudou bastante a entender como funciona uma auditoria. Gostei muito da parte de oratória, que me mostrou uma visão diferente ao como se portar em um discurso em publico. Foi um curso prático e objetivo, recomendo!'
  },
  {
    name: 'Gabriel Soquetti dos Reis',
    role: 'Participante',
    text: 'Gostei bastante do treinamento de ISO 9001, curso bem completo, as dúvidas bem esclarecidas. As dinâmicas foram bem legais também, deixou o treinamento mais descontraído.'
  },
  {
    name: 'André Uechi',
    role: 'Participante',
    text: 'Fiz o treinamento Método MAIS e achei super dinâmico, descontraído, interativo! Com certeza fará a diferença em minha carreira!'
  },
  {
    name: 'Gabriel NL',
    role: 'Participante',
    text: 'O método MAIS é incrível, entrei do absoluto zero e aprendi muito sobre auditoria, comunicação e muitos insights. A forma da Fernanda explicar que é o diferencial muito claro. Participaria outra vez.'
  },
  {
    name: 'Elias Gobo',
    role: 'Participante',
    text: 'Participei do treinamento método mais e foi uma ótima experiência de aprendizado. Foi muito esclarecedor e fácil de compreender.'
  }
];

function initCertifications(){
  const container = document.getElementById('cert-cards');
  if(!container) return;
   
  certifications.forEach(cert=>{
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6'; 
    
    // Criando card
    const card = document.createElement('div');
    card.className = 'service-card h-100 text-center p-3'; 
    card.setAttribute('role','button');
    
    card.innerHTML = `
      <div class="icon mb-3 d-flex justify-content-center">
        <img src="assets/images/${cert.imgName}" alt="Ícone ${cert.title}" style="max-height: 64px; max-width: 100%; object-fit: contain;">
      </div>
      <h5 class="fw-bold text-primary">${cert.title}</h5>
      <p class="text-dark fw-medium mb-1">${cert.short}</p>
      <p class="text-muted small" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${cert.description}</p>
      <div class="mt-auto pt-3 w-100">
        <a class="btn btn-sm btn-outline-primary btn-cta w-100" data-title="${cert.title}" href="#">Ver Detalhes</a>
      </div>
    `;

    col.appendChild(card);
    container.appendChild(col);
  });

  document.querySelectorAll('.btn-cta, .service-card').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      let title = this.getAttribute('data-title');
      if(!title) {
         const btn = this.querySelector('.btn-cta');
         if(btn) title = btn.getAttribute('data-title');
      }

      const cert = certifications.find(c => c.title === title);
      if (!cert) return;
      openCertModal(cert);
    });
  });
}

function initTrainings(){
  const trainingsContainer = document.querySelector('#treinamentos-lista');
  if(!trainingsContainer) return;

  trainingList.forEach(item=>{
    const col = document.createElement('div');
    col.className = 'col-6 col-md-3 mb-3';
    col.innerHTML = `<div class="bg-white p-3 border shadow-sm text-center rounded h-100 d-flex align-items-center justify-content-center fw-medium">${item}</div>`;
    trainingsContainer.appendChild(col);
  });
}

// Inicializa os Depoimentos
function initTestimonials() {
  const container = document.getElementById('depoimentos-container');
  if (!container) return;

  testimonials.forEach((depoimento, index) => {
    const item = document.createElement('div');
    // O primeiro item precisa da classe 'active' para o carrossel funcionar
    item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    
    item.innerHTML = `
      <div class="card border-0 bg-light rounded-3 p-4 mx-5 text-center">
        <div class="card-body">
          <div class="mb-3">
             <i class="bi bi-quote fs-1 text-primary opacity-25"></i>
          </div>
          <p class="card-text fs-5 fst-italic text-dark">"${depoimento.text}"</p>
          <div class="mt-4">
            <h6 class="fw-bold mb-0 text-primary">${depoimento.name}</h6>
            <small class="text-muted">${depoimento.role}</small>
          </div>
        </div>
      </div>
    `;

    container.appendChild(item);
  });
}

// Abre o modal de Contato Genérico
function openContactModal(subject){
  const titleEl = document.getElementById('modalTitle');
  titleEl.textContent = subject || 'Contato';
  const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
  contactModal.show();
}

// Abre o modal de Detalhes da Certificação
function openCertModal(cert){
  const certModalEl = document.getElementById('certModal');
  if (!certModalEl) return;
   
  certModalEl.querySelector('#certModalTitle').textContent = cert.title;
  // Aqui usamos a descrição completa
  certModalEl.querySelector('#certModalDescription').innerHTML = cert.description;
   
  const certModal = new bootstrap.Modal(certModalEl);
   
  // Botão do WhatsApp no modal
  const whatsappBtn = certModalEl.querySelector('#certWhatsappBtn');
  const newBtn = whatsappBtn.cloneNode(true);
  whatsappBtn.parentNode.replaceChild(newBtn, whatsappBtn);
   
  newBtn.addEventListener('click', () => {
    const message = `Olá! Gostaria de mais informações sobre a certificação *${cert.title}*.`;
    const url = `https://wa.me/5511968687778?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });
   
  certModal.show();
}

// Lógica do Formulário de Contato
function handleContactForm(){
  const form = document.getElementById('contactForm');
  if(!form) return;

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const company = document.getElementById('company').value.trim();
    const subject = document.getElementById('modalTitle').textContent || 'Contato';

    const message = `*Novo Contato via Site*\n\n*Assunto:* ${subject}\n*Nome:* ${name}\n*E-mail:* ${email}\n*Empresa:* ${company}`;
    const whatsappUrl = `https://wa.me/5511968687778?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Fechar modal e limpar form
    const modalEl = document.getElementById('contactModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if(modalInstance) modalInstance.hide();
    form.reset();
  })
}

// Inicialização
window.addEventListener('DOMContentLoaded', ()=>{
  initCertifications();
  initTrainings();
  initTestimonials(); // Iniciando os depoimentos
  handleContactForm();

  // Botões manuais
  const btnContact = document.getElementById('openContactModalBtn');
  if(btnContact) {
      btnContact.addEventListener('click', ()=> openContactModal('Solicitar Proposta'));
  }
   
  const btnTraining = document.getElementById('openTrainingModalBtn');
  if(btnTraining) {
      btnTraining.addEventListener('click', ()=> openContactModal('Inscrição em Treinamentos'));
  }
   
  const btnTransfer = document.getElementById('btnTransferencia');
  if(btnTransfer) {
      btnTransfer.addEventListener('click', ()=> {
           const url = `https://wa.me/5511968687778?text=${encodeURIComponent("Olá! Tenho interesse na Transferência de Certificação.")}`;
           window.open(url, '_blank');
      });
  }

  // Atualizar ano
  const yearSpan = document.getElementById('year');
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();
});