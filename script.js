/* ==========================================================
   CLÍNICA VIDA+
   SCRIPT.JS
========================================================== */


/* ==========================================================
   CONFIGURAÇÕES
========================================================== */

const CONFIG = {

  whatsapp: "5511999999999",

  whatsappMessage:
    "Olá! Gostaria de agendar uma consulta na Clínica Vida+.",

  email:
    "contato@clinicavidamais.com.br",

  instagram:
    "https://www.instagram.com/clinicavidamais"

};


/* ==========================================================
   ESPECIALIDADES
========================================================== */

const ESPECIALIDADES = [

  {
    nome: "Clínica Geral",

    desc:
      "Avaliação, prevenção, check-ups e acompanhamento contínuo.",

    icon: `
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 8v8M8 12h8"/>
    `
  },

  {
    nome: "Cardiologia",

    desc:
      "Prevenção e acompanhamento da saúde cardiovascular.",

    icon: `
      <path d="
        M12 20.5
        C7 17.2 3 14 3 9.5
        A4.5 4.5 0 0 1 12 7
        A4.5 4.5 0 0 1 21 9.5
        C21 14 17 17.2 12 20.5Z
      "/>
    `
  },

  {
    nome: "Pediatria",

    desc:
      "Acompanhamento do crescimento e desenvolvimento infantil.",

    icon: `
      <circle cx="12" cy="13" r="6"/>
      <path d="
        M9.5 15.2
        c1.4 1 2.6 1 4 0
        M12 7V4
      "/>
    `
  },

  {
    nome: "Ortopedia",

    desc:
      "Cuidados para ossos, articulações e sistema musculoesquelético.",

    icon: `
      <path d="M7 17 17 7"/>
      <path d="
        M5.5 18.5
        a2.5 2.5 0 1 0 0-5
        M18.5 10.5
        a2.5 2.5 0 1 0 0-5
      "/>
    `
  },

  {
    nome: "Dermatologia",

    desc:
      "Saúde e cuidados personalizados para pele, cabelos e unhas.",

    icon: `
      <path d="
        M12 3
        s6 6.8 6 11
        a6 6 0 0 1-12 0
        c0-4.2 6-11 6-11Z
      "/>
    `
  },

  {
    nome: "Psiquiatria",

    desc:
      "Atendimento reservado e acompanhamento da saúde mental.",

    icon: `
      <circle cx="12" cy="12" r="8.5"/>
      <path d="
        M8 10
        c1-2 3-2 4 0
        s3 2 4 0
      "/>
    `
  },

  {
    nome: "Nutrição",

    desc:
      "Orientação alimentar individualizada para cada fase da vida.",

    icon: `
      <path d="
        M6 20
        c8 0 12-6 12-14
        c-8 0-14 4-14 12
        c0 1 .1 1.5 .3 2Z
      "/>

      <path d="m6.5 19.5 4-4"/>
    `
  },

  {
    nome: "Fisioterapia",

    desc:
      "Reabilitação, prevenção e recuperação funcional.",

    icon: `
      <circle cx="12" cy="5" r="2"/>

      <path d="
        M12 7v5
        M12 12l-4 6
        M12 12l4 6
        M9 10h6
      "/>
    `
  }

];


/* ==========================================================
   PROFISSIONAIS / EQUIPE
========================================================== */

const PROFISSIONAIS = [

  {
    nome: "Dra. Mariana",

    papel: "Clínica Geral",

    foto: "images/dra-mariana.jpg",

    bio:
      "Atendimento de rotina e prevenção, com escuta atenta ao histórico de cada paciente."
  },

  {
    nome: "Dr. Rafael",

    papel: "Cardiologia",

    foto: "images/dr-rafael.jpg",

    bio:
      "Atuação em prevenção cardiovascular e acompanhamento clínico individualizado."
  },

  {
    nome: "Dra. Beatriz",

    papel: "Pediatria",

    foto: "images/dra-beatriz.jpg",

    bio:
      "Acompanhamento do crescimento infantil com atenção à criança e à família."
  },

  {
    nome: "Dr. Eduardo",

    papel: "Ortopedia",

    foto: "images/dr-eduardo.jpg",

    bio:
      "Cuidado com dores articulares, lesões esportivas e reabilitação."
  },

  {
    nome: "Dra. Juliana",

    papel: "Dermatologia",

    foto: "images/dra-juliana.jpg",

    bio:
      "Avaliação e tratamentos personalizados para diferentes necessidades dermatológicas."
  },

  {
    nome: "Dr. Otávio",

    papel: "Psiquiatria",

    foto: "images/dr-otavio.jpg",

    bio:
      "Consultas em ambiente reservado, com foco em acompanhamento contínuo."
  }

];


/* ==========================================================
   ESTRUTURA
========================================================== */

const ESTRUTURA = [

  [
    "01",
    "Recepção acolhedora",
    "Ambiente confortável e organizado para tornar a chegada mais tranquila."
  ],

  [
    "02",
    "Consultórios modernos",
    "Salas privativas, silenciosas e preparadas para diferentes especialidades."
  ],

  [
    "03",
    "Tecnologia e praticidade",
    "Processos digitais para tornar o atendimento mais simples e eficiente."
  ],

  [
    "04",
    "Sala de procedimentos",
    "Estrutura preparada para procedimentos ambulatoriais de menor complexidade."
  ],

  [
    "05",
    "Acessibilidade",
    "Espaços planejados para facilitar a circulação e o acesso de todos."
  ],

  [
    "06",
    "Localização estratégica",
    "Endereço de fácil acesso, com opções de transporte e estacionamento próximo."
  ]

];


/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

  setupContactLinks();

  setYear();

  buildEspecialidades();

  buildProfissionais();

  buildEstrutura();

  highlightToday();

  buildMenu();

});


/* ==========================================================
   LINKS DE CONTATO
========================================================== */

function setupContactLinks() {

  const whatsappUrl =
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
      CONFIG.whatsappMessage
    )}`;


  document
    .querySelectorAll("[data-whatsapp]")
    .forEach(link => {

      link.href = whatsappUrl;

    });


  document
    .querySelectorAll("[data-email]")
    .forEach(link => {

      link.href =
        `mailto:${CONFIG.email}`;

    });


  document
    .querySelectorAll("[data-instagram]")
    .forEach(link => {

      link.href =
        CONFIG.instagram;

    });

}


/* ==========================================================
   ANO
========================================================== */

function setYear() {

  const year =
    document.getElementById("year");

  if (year) {

    year.textContent =
      new Date().getFullYear();

  }

}


/* ==========================================================
   MENU MOBILE
========================================================== */

function buildMenu() {

  const button =
    document.getElementById("menuToggle");

  const nav =
    document.getElementById("nav");

  if (!button || !nav) {
    return;
  }


  button.addEventListener("click", () => {

    const open =
      nav.classList.toggle("open");

    button.setAttribute(
      "aria-expanded",
      String(open)
    );

    button.setAttribute(
      "aria-label",
      open
        ? "Fechar menu"
        : "Abrir menu"
    );

  });


  nav
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener("click", () => {

        nav.classList.remove("open");

        button.setAttribute(
          "aria-expanded",
          "false"
        );

        button.setAttribute(
          "aria-label",
          "Abrir menu"
        );

      });

    });


  document.addEventListener("click", event => {

    const clickedInsideMenu =
      nav.contains(event.target);

    const clickedButton =
      button.contains(event.target);

    if (
      !clickedInsideMenu &&
      !clickedButton &&
      nav.classList.contains("open")
    ) {

      nav.classList.remove("open");

      button.setAttribute(
        "aria-expanded",
        "false"
      );

      button.setAttribute(
        "aria-label",
        "Abrir menu"
      );

    }

  });

}


/* ==========================================================
   ESPECIALIDADES
========================================================== */

function buildEspecialidades() {

  const grid =
    document.getElementById(
      "especialidadesGrid"
    );

  if (!grid) {
    return;
  }


  grid.innerHTML =
    ESPECIALIDADES
      .map(item => {

        return `

          <article class="spec-card">

            <svg
              class="spec-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >

              ${item.icon}

            </svg>

            <h3>
              ${item.nome}
            </h3>

            <p>
              ${item.desc}
            </p>

          </article>

        `;

      })
      .join("");

}


/* ==========================================================
   PROFISSIONAIS
========================================================== */

function buildProfissionais() {

  const grid =
    document.getElementById(
      "doctorGrid"
    );

  if (!grid) {
    return;
  }


  grid.innerHTML =
    PROFISSIONAIS
      .map(profissional => {

        return `

          <article class="doctor-card">

            <div class="doctor-photo">

              <img
                src="${profissional.foto}"
                alt="${profissional.nome} — ${profissional.papel}"
                loading="lazy"
                onerror="this.style.display='none'"
              >

            </div>

            <div class="doctor-info">

              <h3>
                ${profissional.nome}
              </h3>

              <div class="doctor-role">
                ${profissional.papel}
              </div>

              <p>
                ${profissional.bio}
              </p>

            </div>

          </article>

        `;

      })
      .join("");

}


/* ==========================================================
   ESTRUTURA
========================================================== */

function buildEstrutura() {

  const grid =
    document.getElementById(
      "estruturaGrid"
    );

  if (!grid) {
    return;
  }


  grid.innerHTML =
    ESTRUTURA
      .map(item => {

        return `

          <article class="feature">

            <div class="feature-number">
              ${item[0]}
            </div>

            <h3>
              ${item[1]}
            </h3>

            <p>
              ${item[2]}
            </p>

          </article>

        `;

      })
      .join("");

}


/* ==========================================================
   DESTACAR DIA ATUAL
========================================================== */

function highlightToday() {

  const day =
    new Date().getDay();

  const row =
    document.querySelector(
      `.hours-row[data-day="${day}"]`
    );

  if (row) {

    row.classList.add("today");

  }

}
