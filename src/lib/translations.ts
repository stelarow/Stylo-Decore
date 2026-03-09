export type Language = "pt" | "en" | "es";

export const LANGUAGES = [
  { code: "pt" as Language, label: "PT", name: "Português", flag: "🇧🇷" },
  { code: "en" as Language, label: "EN", name: "English", flag: "🇺🇸" },
  { code: "es" as Language, label: "ES", name: "Español", flag: "🇪🇸" },
];

export const NAV_TRANSLATIONS: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    "/": "Home",
    "/cortinas": "Cortinas",
    "/cortinas/tecido": "Cortinas de Tecido",
    "/cortinas/prega-americana": "Prega Americana",
    "/cortinas/ilhos": "Cortina com Ilhós",
    "/cortinas/wave": "Cortina Wave",
    "/cortinas/blackout-acusticas": "Blackout & Acústicas",
    "/persianas": "Persianas",
    "/persianas/horizontais": "Horizontais",
    "/persianas/verticais": "Verticais",
    "/persianas/rolo-double-vision": "Rolô & Double Vision",
    "/papeis-de-parede": "Papel de Parede",
    "/papeis-de-parede/geometricos": "Geométricos",
    "/papeis-de-parede/infantil": "Infantil",
    "/papeis-de-parede/cozinha": "Cozinha",
    "/tapetes": "Tapetes",
    "/tapetes/sob-medida": "Sob Medida",
    "/tapetes/decorativo": "Decorativo",
    "/tapetes/passadeira": "Passadeira",
    "/blog": "Blog",
    "/contato": "Contato",
    viewAll: "Ver todos",
    whatsappCta: "WhatsApp",

    // Hero
    "hero.title": "20 anos de experiência transformando ambientes",
    "hero.subtitle": "Sofisticação e conforto em cada detalhe da sua casa.",
    "hero.ctaPrimary": "Solicitar Orçamento",
    "hero.ctaSecondary": "Ver Coleções",
    "hero.whatsapp": "Olá! Gostaria de solicitar um orçamento.",

    // Home — Collections
    "home.collections": "Nossas Coleções",

    // Home — Service
    "home.service.eyebrow": "Formas de Atendimento",
    "home.service.title": "Escolha como começar",
    "home.service.subtitle":
      "Duas opções pensadas para se adaptar ao seu momento — da praticidade do digital ao atendimento exclusivo em casa.",
    "home.online.badge": "Online · Gratuito",
    "home.online.title": "Orçamento Online Gratuito",
    "home.online.desc":
      "Envie fotos e medidas do seu ambiente pelo WhatsApp e receba uma estimativa rápida, sem sair de casa e sem compromisso.",
    "home.online.step1": "Tire fotos do ambiente e anote as medidas",
    "home.online.step2":
      "Envie pelo WhatsApp — recebemos e te enviamos opções de tecidos e acabamentos para escolher",
    "home.online.step3": "Receba a estimativa de custo rapidamente",
    "home.online.cta": "Quero uma estimativa agora",
    "home.premium.badge": "Mais Recomendado",
    "home.premium.label": "Premium · Presencial",
    "home.premium.title": "Consultoria Presencial Premium",
    "home.premium.desc":
      "Nossa especialista vai até você com mostruário exclusivo, orienta na escolha de cores e tecidos, e realiza a medição com precisão milimétrica.",
    "home.premium.f1": "Visita técnica no seu ambiente",
    "home.premium.f2": "Mostruário exclusivo levado até você",
    "home.premium.f3": "Orientação com profissional qualificado",
    "home.premium.f4": "Medição precisa garantida",
    "home.premium.f5":
      "Valor da consultoria 100% revertido nos produtos adquiridos",
    "home.premium.cta": "Agendar Consultoria Profissional",
    "home.premium.whatsapp":
      "Olá! Gostaria de agendar uma Consultoria Presencial Premium com a Stylo Decore.",

    // Home — Differentials
    "home.diff.eyebrow": "Incluso em cada projeto",
    "home.diff.title": "Comprando, você recebe",
    "home.diff.d1.title": "Medição Gratuita",
    "home.diff.d1.text":
      "Nossos consultores vão até você sem custo para garantir medidas perfeitas.",
    "home.diff.d2.title": "20 Anos de Experiência",
    "home.diff.d2.text":
      "Duas décadas transformando ambientes com qualidade e sofisticação.",
    "home.diff.d3.title": "Instalação Inclusa",
    "home.diff.d3.text":
      "Instalação profissional inclusa em todos os projetos sob medida.",

    // Home — Blog
    "home.blog.eyebrow": "Blog",
    "home.blog.title": "Dicas & Inspirações",
    "home.blog.viewAll": "Ver todos os artigos",
    "home.blog.readingTime": "min de leitura",
    "home.blog.readArticle": "Ler artigo",

    // Contact Section
    "contact.eyebrow": "Fale Conosco",
    "contact.title": "Entre em Contato",
    "contact.subtitle":
      "Preencha o formulário e iniciamos o atendimento pelo WhatsApp — sem compromisso, com total atenção ao seu projeto.",
    "contact.location": "Localização",
    "contact.hours": "Atendimento",
    "contact.quote":
      '"Cada detalhe conta — do tecido escolhido à instalação final. Nosso compromisso é transformar o seu espaço com sofisticação."',
    "contact.whatsappDirect": "Ir direto ao WhatsApp",
    "contact.fieldName": "Nome completo *",
    "contact.namePlaceholder": "Seu nome",
    "contact.fieldPhone": "WhatsApp *",
    "contact.fieldEmail": "E-mail (opcional)",
    "contact.fieldInterest": "Produto de interesse",
    "contact.fieldMessage": "Mensagem (opcional)",
    "contact.messagePlaceholder":
      "Conte um pouco sobre o seu projeto, ambiente ou dúvidas...",
    "contact.send": "Enviar mensagem",
    "contact.sending": "Enviando...",
    "contact.sent": "Enviado!",
    "contact.successTitle": "Mensagem enviada!",
    "contact.successText":
      "Recebemos seu contato. O WhatsApp foi aberto para continuar o atendimento.",
    "contact.errorTitle": "Erro ao enviar",
    "contact.errorText":
      "Não foi possível enviar sua mensagem. Por favor, fale conosco diretamente pelo WhatsApp.",
    "contact.privacy": "Seus dados são tratados com total confidencialidade.",
    "contact.selected": "selecionado",
    "contact.selectedPlural": "selecionados",
    "contact.i.curtains": "Cortinas",
    "contact.i.blinds": "Persianas",
    "contact.i.wallpaper": "Papéis de Parede",
    "contact.i.rugs": "Tapetes",
    "contact.i.full": "Projeto completo",
    "contact.desc":
      "Estamos prontos para ajudar você a transformar seus ambientes. O atendimento é feito diretamente pelo WhatsApp para mais agilidade.",
    "contact.whatsappPrompt": "Atendimento rápido e personalizado →",
    "contact.addressLabel": "Endereço",
    "contact.hoursLabel": "Horário de Atendimento",
    "contact.telephone": "Telefone",

    // Footer
    "footer.desc":
      "Há mais de 20 anos transformando ambientes com cortinas, persianas, papéis de parede e tapetes sob medida.",
    "footer.excellence": "20 anos de excelência",
    "footer.products": "Produtos",
    "footer.institutional": "Institucional",
    "footer.home": "Início",
    "footer.rights": "Todos os direitos reservados.",

    // Category Page
    "cat.consultancy.title": "Consultoria Personalizada",
    "cat.consultancy.desc":
      "Nossa especialista vai até você para medição e consultoria gratuita.",
    "cat.consultancy.cta": "Agendar Agora",
    "cat.consultancy.whatsapp":
      "Olá! Gostaria de agendar uma consultoria para ",

    // Subcategory Page
    "sub.designAutoral": "Design Autoral",
    "sub.interest": "Tenho interesse neste modelo",
    "sub.customProject": "Solicite Seu Projeto Sob Medida",
    "sub.specs.title": "Especificações Premium",
    "sub.specs.spec1.title": "Confecção Artesanal",
    "sub.specs.spec1.desc": "Cada peça é costurada e finalizada por nossos artesãos experientes.",
    "sub.specs.spec2.title": "Barra Dupla de 20cm",
    "sub.specs.spec2.desc": "Garante o caimento pesado e elegante típico de hotéis de luxo.",
    "sub.specs.spec3.title": "Forro Blackout Opcional",
    "sub.specs.spec3.desc": "Tecnologia soft-touch que não compromete a estética da cortina.",
    "page.geometricos.desc": "Padrões modernos e abstratos que criam dinamismo e sofisticação. A coleção Geométricos traz formas, linhas e texturas que transformam paredes em elementos de design.",
    "page.cozinha.desc": "Revestimentos e estampas exclusivas para cozinhas sofisticadas. De azulejos portugueses a mármores calacata, transforme sua cozinha em um ambiente de design único.",
    "sub.showroom.title": "Solicite um Orçamento",
    "sub.showroom.desc":
      "Receba uma proposta personalizada para o seu projeto. Nossa equipe vai te ajudar a escolher a solução ideal para o seu espaço.",
    "sub.showroom.cta": "Solicitar Orçamento",
    "sub.excellence": "20 anos de excelência",
    "sub.footer": "Design de Interiores • Tecidos Nobres • Acabamentos",
    "sub.whatsapp.interest": "Olá! Tenho interesse neste modelo de",
    "sub.whatsapp.info": "Gostaria de mais informações.",
    "sub.whatsapp.project": "Olá! Estou interessado(a) em",
    "sub.whatsapp.projectEnd":
      "e gostaria de solicitar um projeto sob medida.",
    "sub.whatsapp.showroom":
      "Olá! Gostaria de solicitar um orçamento para",

    // Testimonials
    "testimonials.label": "Depoimentos",
    "testimonials.title": "O que nossos clientes dizem",
    "testimonials.subtitle":
      "Cada projeto é uma história de transformação. Veja o que quem já confiou na Stylo Decore tem a dizer.",

    // Map Section
    "map.label": "Localização",
    "map.title": "Onde Estamos Localizados",
    "map.desc":
      "Nossa loja fica em Campeche, Florianópolis. Entre em contato pelo WhatsApp para tirar dúvidas ou solicitar um orçamento personalizado.",
    "map.address": "Endereço",
    "map.hours": "Horários",
    "map.phone": "Telefone / WhatsApp",
    "map.route": "Traçar rota",
    "map.schedule": "Falar pelo WhatsApp",
    "map.waMsg": "Olá! Gostaria de saber mais sobre os produtos e serviços da Stylo Decore.",

    // FAQ
    "faq.label": "Dúvidas Frequentes",
    "faq.title": "Perguntas Frequentes",
    "faq.desc1":
      "Reunimos as dúvidas mais comuns dos nossos clientes. Não encontrou o que precisa?",
    "faq.desc2": "Fale conosco pelo WhatsApp",
    "faq.q1": "Vocês atendem em quais cidades?",
    "faq.a1":
      "Atendemos Florianópolis e toda a Grande Florianópolis, incluindo São José, Palhoça, Biguaçu, Governador Celso Ramos e regiões próximas. Entre em contato para confirmar disponibilidade na sua localidade.",
    "faq.q2": "Como funciona a medição gratuita?",
    "faq.a2":
      "Após o contato inicial, agendamos uma visita técnica no seu endereço. Nossa consultora vai até você com o mostruário completo, realiza a medição com precisão milimétrica e apresenta as melhores opções para o seu projeto — tudo sem custo adicional.",
    "faq.q3": "Qual é o prazo de entrega e instalação?",
    "faq.a3":
      "O prazo médio é de 15 a 25 dias úteis após a aprovação do orçamento e confirmação do pedido. Projetos maiores ou produtos especiais podem ter prazos diferentes, sempre informados com antecedência.",
    "faq.q4": "A instalação está inclusa no preço?",
    "faq.a4":
      "Sim! A instalação profissional está inclusa em todos os projetos sob medida. Nossa equipe cuida de todo o processo, do início ao acabamento final, sem nenhum custo extra para você.",
    "faq.q5": "Posso solicitar um orçamento sem compromisso?",
    "faq.a5":
      "Com certeza. Tanto o orçamento online (via WhatsApp) quanto a consultoria presencial são sem compromisso. Você recebe todas as informações e decide com calma, no seu tempo.",
    "faq.q6": "Vocês trabalham com produtos totalmente sob medida?",
    "faq.a6":
      "Sim, todos os nossos produtos são confeccionados sob medida para o seu ambiente específico. Isso garante caimento perfeito, acabamento impecável e um resultado muito mais sofisticado do que produtos prontos.",
    "faq.q7": "Como escolho o tecido certo para cada cômodo?",
    "faq.a7":
      "Nossa consultora orienta você em cada escolha levando em conta a entrada de luz desejada, a privacidade necessária, a decoração existente e o estilo que você quer alcançar. Levamos amostras físicas para que você veja as opções no ambiente real antes de decidir.",
    "faq.q8": "As cortinas blackout realmente bloqueiam toda a luz?",
    "faq.a8":
      "As cortinas blackout de alta qualidade bloqueiam entre 95% e 100% da luminosidade, dependendo do tecido e da forma de instalação. Para bloqueio total, recomendamos a instalação com sobreposição nas laterais — detalhe que nossa equipe já considera no projeto.",
    "faq.q9": "Qual a diferença entre persiana e cortina?",
    "faq.a9":
      "As persianas são estruturas rígidas (lâminas, tecido enrolável, etc.) que oferecem controle preciso da luz e são ideais para ambientes funcionais como escritórios e cozinhas. As cortinas são em tecido, conferem leveza e sofisticação, sendo muito versáteis em salas e quartos. O ideal para cada espaço depende do estilo e das necessidades — nossa consultora te ajuda nessa escolha.",
    "faq.q10": "Como faço a manutenção das cortinas e persianas?",
    "faq.a10":
      "Cortinas de tecido geralmente podem ser lavadas à máquina em ciclo delicado ou à mão — orientamos conforme o material. Persianas devem ser limpas com pano úmido ou aspirador, sem uso de produtos abrasivos. Ao receber seu produto, fornecemos todas as instruções de cuidado específicas para o material escolhido.",

    // Blog list page
    "blog.featured": "Destaque",
    "blog.listTitle": "Dicas da Especialista",
    "blog.listDesc": "Inspirações, tendências e orientações práticas para transformar seus ambientes com personalidade e elegância.",
    "blog.readArticle": "Ler artigo",
    "blog.read": "Ler",
    "blog.readMin": "min",

    // Blog post page
    "blog.tocLabel": "Neste artigo",
    "blog.tipLabel": "Dica da Especialista",
    "blog.consultaLabel": "Consultoria gratuita",
    "blog.sidebarTitle": "Dúvidas sobre qual escolher?",
    "blog.sidebarDesc": "Entre em contato e receba orientação personalizada para o seu ambiente.",
    "blog.sidebarCta": "Fale com a gente →",
    "blog.backToBlog": "Voltar ao Blog",
    "blog.expertRole": "Especialista em Design",
    "blog.minRead": "min de leitura",
    "blog.liked": "Gostou deste artigo?",
    "blog.ctaDesc": "Fale com a gente diretamente pelo WhatsApp e receba orientação personalizada para o seu ambiente.",
    "blog.ctaBtn": "Entre em contato",
    "blog.continueReading": "Continue lendo",
    "blog.otherArticles": "Outros Artigos",
    "blog.notFound": "Post não encontrado",
    "blog.company": "Nilza Terezinha Duarte Bueno",
    "blog.waMessage": "Olá! Li o artigo no blog e gostaria de mais informações.",
    "blog.waSidebar": "Olá! Li o artigo e gostaria de ajuda para escolher.",

    // Questionário — UI
    "q.step1": "Produtos",
    "q.step2": "Preferências",
    "q.step3": "Resumo",
    "q.step4": "Contato",
    "q.step1of4": "Passo 1 de 4",
    "q.step3of4": "Passo 3 de 4",
    "q.step4of4": "Passo 4 de 4",
    "q.title": "O que você está buscando?",
    "q.subtitle": "Selecione um ou mais produtos para personalizar sua consulta.",
    "q.continue": "Continuar",
    "q.back": "Voltar",
    "q.next": "Próximo",
    "q.seeSummary": "Ver resumo",
    "q.summaryTitle": "Seu resumo",
    "q.summarySubtitle": "Tudo pronto. Confira antes de continuar.",
    "q.editAnswers": "Editar respostas",
    "q.product": "produto",
    "q.products": "produtos",
    "q.answers": "respostas",
    "q.almostTitle": "Quase lá!",
    "q.almostSubtitle": "Como podemos te contatar para continuar o atendimento?",
    "q.nameLabel": "Nome completo",
    "q.waLabel": "WhatsApp com DDD",
    "q.emailLabel": "E-mail",
    "q.namePlaceholder": "Seu nome",
    "q.sending": "Enviando…",
    "q.send": "Enviar",
    "q.successTitle": "Mensagem enviada!",
    "q.successDesc": "Recebemos sua solicitação. Em breve entraremos em contato pelo WhatsApp ou e-mail.",
    "q.backHome": "Voltar à página inicial",
    "q.errorTitle": "Erro ao enviar",
    "q.errorText": "Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.",
    "q.emailInvalid": "Digite um e-mail válido",
    "q.measurePlaceholder": "Ou informe a medida exata (ex: 2,40 × 1,80 m)",

    // Questionário — products
    "q.p.curtains.desc": "Tecido, wave, blackout e mais",
    "q.p.blinds.desc": "Horizontal, vertical, rolô",
    "q.p.wallpaper.desc": "Breeze, Geométricos, Infantil",
    "q.p.rugs.desc": "Sob medida, decorativo",

    // Questionário — question labels
    "q.ql.tipoC": "Que tipo de cortina você busca?",
    "q.ql.tipoP": "Que tipo de persiana você prefere?",
    "q.ql.tipoT": "Que tipo de tapete você procura?",
    "q.ql.colecao": "Qual coleção te interessa?",
    "q.ql.ambiente": "Qual é o ambiente?",
    "q.ql.prioridade": "Qual é a prioridade principal?",
    "q.ql.estilo": "Qual estilo combina com o seu espaço?",
    "q.ql.tamanhoJ": "Qual é o tamanho aproximado da janela?",
    "q.ql.tamanhoP": "Qual é o tamanho aproximado?",
    "q.ql.prazo": "Qual é o seu prazo para este projeto?",
    "q.ql.luz": "Como prefere o controle de luz?",
    "q.ql.acionamento": "Qual acionamento prefere?",
    "q.ql.visual": "Que visual você busca?",
    "q.ql.estadoParede": "A parede já possui papel de parede?",
    "q.ql.area": "Qual é a área aproximada?",
    "q.ql.uso": "Qual é o uso principal?",
    "q.ql.material": "Material preferido?",

    // Questionário — answer labels (summary)
    "q.l.tipo": "Tipo",
    "q.l.ambiente": "Ambiente",
    "q.l.tamanho": "Tamanho",
    "q.l.colecao": "Coleção",
    "q.l.area": "Área",
    "q.l.prioridade": "Prioridade",
    "q.l.estilo": "Estilo",
    "q.l.prazo": "Prazo",
    "q.l.luz": "Controle de luz",
    "q.l.acionamento": "Acionamento",
    "q.l.visual": "Visual desejado",
    "q.l.estadoParede": "Estado da parede",
    "q.l.uso": "Uso principal",
    "q.l.material": "Material",

    // Blog Contact Form
    "bcf.eyebrow": "Fale com a especialista",
    "bcf.title1": "Transforme seu",
    "bcf.titleHighlight": "ambiente",
    "bcf.title2": "com a gente",
    "bcf.desc": "Mais de 20 anos de experiência em design de interiores. Descreva o seu espaço e receba orientações personalizadas diretamente pelo WhatsApp.",
    "bcf.trust1": "Atendimento em Florianópolis e região",
    "bcf.trust2": "Resposta em até 2 horas úteis",
    "bcf.trust3": "Orçamento sem compromisso",
    "bcf.nameLabel": "Nome completo",
    "bcf.phoneLabel": "Telefone",
    "bcf.productLabel": "Produto de interesse",
    "bcf.messageLabel": "Mensagem (opcional)",
    "bcf.selectCategory": "Selecione uma categoria",
    "bcf.messagePlaceholder": "Conte um pouco sobre seu ambiente...",
    "bcf.sendWhatsapp": "Enviar pelo WhatsApp",
    "bcf.directChat": "Conversa direta",
    "bcf.p.multiple": "Mais de um produto",

    // About Section
    "about.eyebrow": "Nossa equipe",
    "about.title": "Sobre Nós",
    "about.subtitle":
      "Com mais de 20 anos de experiência em design de interiores, transformamos ambientes com soluções sob medida e atendimento consultivo personalizado em Florianópolis e região.",
    "about.nilza.role": "Fundadora & Designer",
    "about.nilza.bio":
      "Mais de 20 anos dedicados ao design de interiores e decoração. Especialista em criar ambientes que equilibram estética, funcionalidade e a personalidade de cada cliente.",
    "about.clarice.role": "Designer de Interiores",
    "about.clarice.bio":
      "Especialista em composição de ambientes e seleção de materiais. Traduz o estilo e as necessidades de cada cliente em projetos únicos, com atenção aos detalhes que fazem a diferença.",

    // FAQ — Default
    "faq.default.q1": "Como funciona a medição?",
    "faq.default.a1": "Nossa especialista vai até o seu endereço para realizar a medição técnica sem custo. Garantimos precisão milimétrica para que o resultado fique perfeito.",
    "faq.default.q2": "Qual o prazo de entrega e instalação?",
    "faq.default.a2": "O prazo varia conforme o produto e a complexidade do projeto. Em geral, de 15 a 30 dias úteis após a aprovação do orçamento. A instalação é inclusa.",
    "faq.default.q3": "Vocês atendem toda Florianópolis e região?",
    "faq.default.a3": "Sim! Atendemos Florianópolis, São José, Palhoça, Biguaçu e toda a Grande Florianópolis.",
    "faq.default.q4": "Posso solicitar amostras de tecido ou material?",
    "faq.default.a4": "Claro! Durante a consultoria, levamos amostras para você visualizar cores, texturas e caimento diretamente no seu ambiente.",

    // FAQ — Cortinas
    "faq.cortinas.q1": "Qual a diferença entre cortina com prega americana e cortina wave?",
    "faq.cortinas.a1": "A prega americana é um modelo clássico com dobras simétricas na parte superior, ideal para ambientes mais tradicionais e elegantes. Já a cortina wave tem um caimento ondulado suave e contínuo, com visual contemporâneo e limpo. Na consultoria ajudamos você a escolher o modelo que melhor combina com o seu espaço.",
    "faq.cortinas.q2": "Preciso de blackout total ou um filtro de luz é suficiente?",
    "faq.cortinas.a2": "Depende do ambiente e do objetivo. Quartos geralmente pedem blackout para bloquear 100% da luz e garantir um sono mais qualificado. Para salas e escritórios, tecidos com filtro de luz criam um ambiente suave e aconchegante sem escurecer totalmente. Levamos amostras na visita para você comparar diretamente no seu espaço.",
    "faq.cortinas.q3": "O varão ou trilho fica incluso no projeto?",
    "faq.cortinas.a3": "Sim! Todo o sistema de fixação — seja varão, trilho suíço ou bandô — faz parte do projeto e é apresentado no orçamento. Trabalhamos com acabamentos em diversas cores e materiais para harmonizar com a decoração do seu ambiente.",
    "faq.cortinas.q4": "Qual a vantagem de uma cortina sob medida em relação às de loja?",
    "faq.cortinas.a4": "Cortinas de loja vêm em tamanhos padrão e muitas vezes ficam curtas ou largas para o vão, comprometendo o resultado final. As nossas são produzidas milimetricamente para a sua janela, com tecido, modelo, dobras e comprimento exatos — o resultado estético é completamente diferente.",

    // FAQ — Persianas
    "faq.persianas.q1": "Qual a diferença entre persiana horizontal e vertical?",
    "faq.persianas.a1": "As persianas horizontais têm lâminas na direção lateral e são ideais para janelas padrão — muito usadas em ambientes corporativos e residências modernas. As verticais têm lâminas na direção vertical e funcionam melhor em janelas amplas, portas de vidro e pé-direito alto. A escolha depende do formato da abertura e do estilo do ambiente.",
    "faq.persianas.q2": "Persiana rolô ou Double Vision: qual escolher?",
    "faq.persianas.a2": "A persiana rolô é a mais versátil: disponível em blackout, screen ou tecidos coloridos, se adapta a qualquer ambiente. A Double Vision combina duas camadas de tecido que se alternam para criar desde penumbra total até plena iluminação com um único movimento — ideal para quem quer máximo controle de luz com design sofisticado.",
    "faq.persianas.q3": "Persianas funcionam bem em ambientes úmidos como banheiro e cozinha?",
    "faq.persianas.a3": "Sim, com a escolha certa de material. Para ambientes úmidos, recomendamos persianas de alumínio, PVC ou tecidos tecnológicos tratados contra umidade. Durante a consultoria indicamos exatamente o modelo mais adequado para cada cômodo.",
    "faq.persianas.q4": "O acionamento é manual ou pode ser motorizado?",
    "faq.persianas.a4": "Oferecemos ambas as opções. O acionamento manual com corrente é o mais comum e econômico. A versão motorizada, com controle remoto ou integração a sistemas de automação residencial, é recomendada para janelas de difícil acesso ou projetos mais sofisticados. Apresentamos as opções no orçamento.",

    // FAQ — Papéis de Parede
    "faq.papeis.q1": "Vocês fazem a aplicação do papel de parede ou só vendem?",
    "faq.papeis.a1": "Fazemos tudo: vistoria prévia da parede, aplicação profissional com cola técnica adequada a cada coleção e acabamento impecável nas emendas e cantos. O processo varia de 1 a 2 dias dependendo da metragem e do modelo escolhido.",
    "faq.papeis.q2": "O papel de parede pode ser instalado em paredes com umidade ou irregulares?",
    "faq.papeis.a2": "Paredes com umidade ativa precisam ser tratadas antes da aplicação para garantir a durabilidade. Pequenas irregularidades podem ser corrigidas com massa corrida. Fazemos uma vistoria técnica antes de confirmar o projeto para evitar surpresas e garantir o melhor resultado.",
    "faq.papeis.q3": "Qual a diferença entre as coleções Geométricos, Infantil e Cozinha?",
    "faq.papeis.a3": "São linhas com propostas distintas: os Geométricos destacam-se por padrões modernos e abstratos que criam dinamismo e sofisticação, ideais para salas e escritórios. O Infantil é dedicado aos quartos das crianças, com estampas divertidas, personagens e padrões encantadores. A Cozinha traz revestimentos e estampas exclusivas — de azulejos portugueses a mármores — que transformam esse ambiente em um espaço de design único.",
    "faq.papeis.q4": "É possível remover o papel de parede depois sem danificar a parede?",
    "faq.papeis.a4": "Depende do tipo de papel e da qualidade da aplicação. Os papéis de nossas coleções são projetados para durabilidade, mas podem ser removidos com técnica adequada — especialmente em paredes bem preparadas. Ao final do ciclo do papel, podemos avaliar e indicar a melhor forma de troca.",

    // FAQ — Tapetes
    "faq.tapetes.q1": "Vocês fazem tapetes em qualquer medida personalizada?",
    "faq.tapetes.a1": "Sim! Nossos tapetes sob medida são confeccionados nas dimensões exatas que você precisa — formatos convencionais, circulares, para corredores ou escadas. Na consultoria medimos o espaço e apresentamos as opções de tamanho, forma e material mais adequadas para cada ambiente.",
    "faq.tapetes.q2": "Quais materiais estão disponíveis para os tapetes?",
    "faq.tapetes.a2": "Trabalhamos com diversas fibras: lã natural (sofisticada e durável), viscose (brilho sedoso), polipropileno (resistente a manchas e tráfego intenso) e blends mistos. Cada material tem características diferentes de toque, durabilidade e manutenção — ajudamos na escolha conforme o uso e o ambiente.",
    "faq.tapetes.q3": "Posso usar uma passadeira tanto no corredor quanto na escada?",
    "faq.tapetes.a3": "Sim, a passadeira é ideal para ambas as aplicações. Para escadas, é fundamental um corte preciso e fixação adequada para evitar dobras ou deslizamento. Produzimos passadeiras com as medidas exatas de cada degrau e corredor, com acabamento nas bordas para um resultado limpo e profissional.",
    "faq.tapetes.q4": "Como cuidar e limpar o tapete no dia a dia?",
    "faq.tapetes.a4": "Em geral, aspiração semanal e remoção imediata de manchas com pano úmido e produto neutro são suficientes para o cuidado diário. Para limpeza mais profunda, recomendamos lavagem especializada a cada 6 a 12 meses. Fornecemos orientações específicas para cada material no momento da entrega.",
  },

  en: {
    // Navigation
    "/": "Home",
    "/cortinas": "Curtains",
    "/cortinas/tecido": "Fabric Curtains",
    "/cortinas/prega-americana": "American Pleat",
    "/cortinas/ilhos": "Eyelet Curtains",
    "/cortinas/wave": "Wave Curtains",
    "/cortinas/blackout-acusticas": "Blackout & Acoustic",
    "/persianas": "Blinds",
    "/persianas/horizontais": "Horizontal",
    "/persianas/verticais": "Vertical",
    "/persianas/rolo-double-vision": "Roller & Double Vision",
    "/papeis-de-parede": "Wallpaper",
    "/papeis-de-parede/geometricos": "Geométricos",
    "/papeis-de-parede/infantil": "Infantil",
    "/papeis-de-parede/cozinha": "Kitchen",
    "/tapetes": "Rugs",
    "/tapetes/sob-medida": "Custom Made",
    "/tapetes/decorativo": "Decorative",
    "/tapetes/passadeira": "Runner",
    "/blog": "Blog",
    "/contato": "Contact",
    viewAll: "View all",
    whatsappCta: "WhatsApp",

    // Hero
    "hero.title": "20 years of experience transforming spaces",
    "hero.subtitle": "Sophistication and comfort in every detail of your home.",
    "hero.ctaPrimary": "Request a Quote",
    "hero.ctaSecondary": "View Collections",
    "hero.whatsapp": "Hello! I'd like to request a quote.",

    // Home — Collections
    "home.collections": "Our Collections",

    // Home — Service
    "home.service.eyebrow": "Service Options",
    "home.service.title": "Choose how to start",
    "home.service.subtitle":
      "Two options designed to fit your needs — from the convenience of digital to an exclusive in-home consultation.",
    "home.online.badge": "Online · Free",
    "home.online.title": "Free Online Quote",
    "home.online.desc":
      "Send photos and measurements of your space via WhatsApp and receive a quick estimate from the comfort of your home, with no commitment.",
    "home.online.step1": "Take photos of the space and note the measurements",
    "home.online.step2":
      "Send via WhatsApp — we'll reply with fabric and finish options for you to choose from",
    "home.online.step3": "Receive your cost estimate quickly",
    "home.online.cta": "Get an estimate now",
    "home.premium.badge": "Most Recommended",
    "home.premium.label": "Premium · In-Home",
    "home.premium.title": "Premium In-Home Consultation",
    "home.premium.desc":
      "Our specialist comes to you with an exclusive sample collection, guides you in choosing colors and fabrics, and measures with millimeter precision.",
    "home.premium.f1": "Technical visit to your space",
    "home.premium.f2": "Exclusive sample collection brought to you",
    "home.premium.f3": "Professional guidance on colors and fabrics",
    "home.premium.f4": "Precise measurement guaranteed",
    "home.premium.f5":
      "Consultation fee 100% applied toward purchased products",
    "home.premium.cta": "Schedule Professional Consultation",
    "home.premium.whatsapp":
      "Hello! I'd like to schedule a Premium In-Home Consultation with Stylo Decore.",

    // Home — Differentials
    "home.diff.eyebrow": "Included in every project",
    "home.diff.title": "When you buy, you get",
    "home.diff.d1.title": "Free Measurement",
    "home.diff.d1.text":
      "Our consultants come to you at no cost to ensure perfect measurements.",
    "home.diff.d2.title": "20 Years of Experience",
    "home.diff.d2.text":
      "Two decades transforming spaces with quality and sophistication.",
    "home.diff.d3.title": "Installation Included",
    "home.diff.d3.text":
      "Professional installation included in all custom-made projects.",

    // Home — Blog
    "home.blog.eyebrow": "Blog",
    "home.blog.title": "Tips & Inspiration",
    "home.blog.viewAll": "View all articles",
    "home.blog.readingTime": "min read",
    "home.blog.readArticle": "Read article",

    // Contact Section
    "contact.eyebrow": "Get in Touch",
    "contact.title": "Contact Us",
    "contact.subtitle":
      "Fill out the form and we'll start the conversation via WhatsApp — no commitment, with full attention to your project.",
    "contact.location": "Location",
    "contact.hours": "Business Hours",
    "contact.quote":
      '"Every detail matters — from the chosen fabric to the final installation. Our commitment is to transform your space with sophistication."',
    "contact.whatsappDirect": "Go directly to WhatsApp",
    "contact.fieldName": "Full name *",
    "contact.namePlaceholder": "Your name",
    "contact.fieldPhone": "WhatsApp *",
    "contact.fieldEmail": "E-mail (optional)",
    "contact.fieldInterest": "Product of interest",
    "contact.fieldMessage": "Message (optional)",
    "contact.messagePlaceholder":
      "Tell us about your project, space, or any questions you have...",
    "contact.send": "Send message",
    "contact.sending": "Sending...",
    "contact.sent": "Sent!",
    "contact.successTitle": "Message sent!",
    "contact.successText":
      "We received your contact. WhatsApp has been opened to continue the conversation.",
    "contact.errorTitle": "Failed to send",
    "contact.errorText":
      "We couldn't send your message. Please contact us directly via WhatsApp.",
    "contact.privacy": "Your data is handled with complete confidentiality.",
    "contact.selected": "selected",
    "contact.selectedPlural": "selected",
    "contact.i.curtains": "Curtains",
    "contact.i.blinds": "Blinds",
    "contact.i.wallpaper": "Wallpaper",
    "contact.i.rugs": "Rugs",
    "contact.i.full": "Full project",
    "contact.desc":
      "We're ready to help you transform your spaces. Service is done directly via WhatsApp for faster response.",
    "contact.whatsappPrompt": "Fast and personalized service →",
    "contact.addressLabel": "Address",
    "contact.hoursLabel": "Business Hours",
    "contact.telephone": "Phone",

    // Footer
    "footer.desc":
      "For over 20 years transforming spaces with curtains, blinds, wallpaper and custom rugs.",
    "footer.excellence": "20 years of excellence",
    "footer.products": "Products",
    "footer.institutional": "Company",
    "footer.home": "Home",
    "footer.rights": "All rights reserved.",

    // Category Page
    "cat.consultancy.title": "Personalized Consultancy",
    "cat.consultancy.desc":
      "Our specialist comes to you for free measurement and consultation.",
    "cat.consultancy.cta": "Schedule Now",
    "cat.consultancy.whatsapp":
      "Hello! I'd like to schedule a consultation for ",

    // Subcategory Page
    "sub.designAutoral": "Authorial Design",
    "sub.interest": "I'm interested in this model",
    "sub.customProject": "Request Your Custom Project",
    "sub.specs.title": "Premium Specifications",
    "sub.specs.spec1.title": "Artisanal Craftsmanship",
    "sub.specs.spec1.desc": "Each piece is sewn and finished by our experienced artisans.",
    "sub.specs.spec2.title": "Double Rod of 20cm",
    "sub.specs.spec2.desc": "Ensures the heavy, elegant drape typical of luxury hotels.",
    "sub.specs.spec3.title": "Optional Blackout Lining",
    "sub.specs.spec3.desc": "Soft-touch technology that doesn't compromise the curtain's aesthetics.",
    "page.geometricos.desc": "Modern and abstract patterns that create dynamism and sophistication. The Geométricos collection brings shapes, lines and textures that transform walls into design elements.",
    "page.cozinha.desc": "Exclusive coverings and prints for sophisticated kitchens. From Portuguese tiles to Calacata marble, transform your kitchen into a unique design space.",
    "sub.showroom.title": "Request a Quote",
    "sub.showroom.desc":
      "Receive a personalized proposal for your project. Our team will help you choose the ideal solution for your space.",
    "sub.showroom.cta": "Request a Quote",
    "sub.excellence": "20 years of excellence",
    "sub.footer": "Interior Design • Noble Fabrics • Fine Finishes",
    "sub.whatsapp.interest": "Hello! I'm interested in this model of",
    "sub.whatsapp.info": "I'd like more information.",
    "sub.whatsapp.project": "Hello! I'm interested in",
    "sub.whatsapp.projectEnd": "and I'd like to request a custom project.",
    "sub.whatsapp.showroom":
      "Hello! I'd like to request a quote for",

    // Testimonials
    "testimonials.label": "Testimonials",
    "testimonials.title": "What our clients say",
    "testimonials.subtitle":
      "Each project is a story of transformation. See what those who have trusted Stylo Decore have to say.",

    // Map Section
    "map.label": "Location",
    "map.title": "Where We Are Located",
    "map.desc":
      "Our store is in Campeche, Florianópolis. Contact us via WhatsApp to ask questions or request a personalized quote.",
    "map.address": "Address",
    "map.hours": "Hours",
    "map.phone": "Phone / WhatsApp",
    "map.route": "Get directions",
    "map.schedule": "Chat on WhatsApp",
    "map.waMsg": "Hello! I'd like to learn more about Stylo Decore's products and services.",

    // FAQ
    "faq.label": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.desc1":
      "We've gathered the most common questions from our clients. Didn't find what you need?",
    "faq.desc2": "Talk to us via WhatsApp",
    "faq.q1": "Which cities do you serve?",
    "faq.a1":
      "We serve Florianópolis and the greater Florianópolis area, including São José, Palhoça, Biguaçu, Governador Celso Ramos and nearby regions. Please contact us to confirm availability in your location.",
    "faq.q2": "How does the free measurement work?",
    "faq.a2":
      "After initial contact, we schedule a technical visit to your address. Our consultant comes to you with the complete sample collection, takes precise millimeter-perfect measurements and presents the best options for your project — all at no additional cost.",
    "faq.q3": "What is the delivery and installation lead time?",
    "faq.a3":
      "The average lead time is 15 to 25 business days after the quote is approved and the order confirmed. Larger projects or special products may have different timelines, always communicated in advance.",
    "faq.q4": "Is installation included in the price?",
    "faq.a4":
      "Yes! Professional installation is included in all custom-made projects. Our team handles the entire process from start to final finish at no extra cost to you.",
    "faq.q5": "Can I request a quote with no commitment?",
    "faq.a5":
      "Absolutely. Both the online quote (via WhatsApp) and the in-home consultation are no-commitment. You receive all the information and decide at your own pace.",
    "faq.q6": "Do you work with fully custom-made products?",
    "faq.a6":
      "Yes, all our products are made to measure for your specific space. This ensures a perfect fit, impeccable finish and a much more sophisticated result than ready-made products.",
    "faq.q7": "How do I choose the right fabric for each room?",
    "faq.a7":
      "Our consultant guides you in each choice, taking into account the desired light entry, required privacy, existing décor and the style you want to achieve. We bring physical samples so you can see the options in the actual space before deciding.",
    "faq.q8": "Do blackout curtains really block all light?",
    "faq.a8":
      "High-quality blackout curtains block between 95% and 100% of light, depending on the fabric and installation method. For complete blackout, we recommend installation with overlap on the sides — a detail our team already accounts for in the project.",
    "faq.q9": "What is the difference between blinds and curtains?",
    "faq.a9":
      "Blinds are rigid structures (slats, roller fabric, etc.) that provide precise light control and are ideal for functional spaces such as offices and kitchens. Curtains are made of fabric, providing lightness and sophistication, and are very versatile in living rooms and bedrooms. The ideal choice depends on style and needs — our consultant helps you decide.",
    "faq.q10": "How do I maintain my curtains and blinds?",
    "faq.a10":
      "Fabric curtains can generally be machine washed on a delicate cycle or hand washed — we advise based on the material. Blinds should be cleaned with a damp cloth or vacuum cleaner, without abrasive products. When you receive your product, we provide all specific care instructions for the chosen material.",

    // Blog list page
    "blog.featured": "Featured",
    "blog.listTitle": "Expert Tips",
    "blog.listDesc": "Inspirations, trends and practical guidance to transform your spaces with personality and elegance.",
    "blog.readArticle": "Read article",
    "blog.read": "Read",
    "blog.readMin": "min",

    // Blog post page
    "blog.tocLabel": "In this article",
    "blog.tipLabel": "Expert Tip",
    "blog.consultaLabel": "Free consultation",
    "blog.sidebarTitle": "Not sure which to choose?",
    "blog.sidebarDesc": "Contact us and receive personalized guidance for your space.",
    "blog.sidebarCta": "Talk to us →",
    "blog.backToBlog": "Back to Blog",
    "blog.expertRole": "Design Specialist",
    "blog.minRead": "min read",
    "blog.liked": "Did you enjoy this article?",
    "blog.ctaDesc": "Talk to us directly via WhatsApp and receive personalized guidance for your space.",
    "blog.ctaBtn": "Contact us",
    "blog.continueReading": "Keep reading",
    "blog.otherArticles": "More Articles",
    "blog.notFound": "Post not found",
    "blog.company": "Nilza Terezinha Duarte Bueno",
    "blog.waMessage": "Hello! I read the article on the blog and would like more information.",
    "blog.waSidebar": "Hello! I read the article and would like help choosing.",

    // Questionário — UI
    "q.step1": "Products",
    "q.step2": "Preferences",
    "q.step3": "Summary",
    "q.step4": "Contact",
    "q.step1of4": "Step 1 of 4",
    "q.step3of4": "Step 3 of 4",
    "q.step4of4": "Step 4 of 4",
    "q.title": "What are you looking for?",
    "q.subtitle": "Select one or more products to personalize your consultation.",
    "q.continue": "Continue",
    "q.back": "Back",
    "q.next": "Next",
    "q.seeSummary": "View summary",
    "q.summaryTitle": "Your summary",
    "q.summarySubtitle": "All set. Review before continuing.",
    "q.editAnswers": "Edit answers",
    "q.product": "product",
    "q.products": "products",
    "q.answers": "answers",
    "q.almostTitle": "Almost there!",
    "q.almostSubtitle": "How can we contact you to continue the consultation?",
    "q.nameLabel": "Full name",
    "q.waLabel": "WhatsApp with area code",
    "q.emailLabel": "E-mail",
    "q.namePlaceholder": "Your name",
    "q.sending": "Sending…",
    "q.send": "Send",
    "q.successTitle": "Message sent!",
    "q.successDesc": "We received your request. We'll be in touch soon via WhatsApp or e-mail.",
    "q.backHome": "Back to home",
    "q.errorTitle": "Failed to send",
    "q.errorText": "We couldn't send your request. Please try again or contact us via WhatsApp.",
    "q.emailInvalid": "Enter a valid email address",
    "q.measurePlaceholder": "Or enter the exact measurement (e.g. 2.40 × 1.80 m)",

    // Questionário — products
    "q.p.curtains.desc": "Fabric, wave, blackout and more",
    "q.p.blinds.desc": "Horizontal, vertical, roller",
    "q.p.wallpaper.desc": "Breeze, Geométricos, Infantil",
    "q.p.rugs.desc": "Custom made, decorative",

    // Questionário — question labels
    "q.ql.tipoC": "What type of curtain are you looking for?",
    "q.ql.tipoP": "What type of blind do you prefer?",
    "q.ql.tipoT": "What type of rug are you looking for?",
    "q.ql.colecao": "Which collection interests you?",
    "q.ql.ambiente": "What is the room/space?",
    "q.ql.prioridade": "What is the main priority?",
    "q.ql.estilo": "What style fits your space?",
    "q.ql.tamanhoJ": "What is the approximate window size?",
    "q.ql.tamanhoP": "What is the approximate size?",
    "q.ql.prazo": "What is your timeline for this project?",
    "q.ql.luz": "How do you prefer to control light?",
    "q.ql.acionamento": "What control method do you prefer?",
    "q.ql.visual": "What look are you going for?",
    "q.ql.estadoParede": "Does the wall already have wallpaper?",
    "q.ql.area": "What is the approximate area?",
    "q.ql.uso": "What is the main use?",
    "q.ql.material": "Preferred material?",

    // Questionário — answer labels (summary)
    "q.l.tipo": "Type",
    "q.l.ambiente": "Room",
    "q.l.tamanho": "Size",
    "q.l.colecao": "Collection",
    "q.l.area": "Area",
    "q.l.prioridade": "Priority",
    "q.l.estilo": "Style",
    "q.l.prazo": "Timeline",
    "q.l.luz": "Light control",
    "q.l.acionamento": "Control",
    "q.l.visual": "Desired look",
    "q.l.estadoParede": "Wall condition",
    "q.l.uso": "Main use",
    "q.l.material": "Material",

    // Blog Contact Form
    "bcf.eyebrow": "Talk to the specialist",
    "bcf.title1": "Transform your",
    "bcf.titleHighlight": "space",
    "bcf.title2": "with us",
    "bcf.desc": "Over 20 years of interior design experience. Describe your space and receive personalized guidance directly via WhatsApp.",
    "bcf.trust1": "Serving Florianópolis and surrounding area",
    "bcf.trust2": "Response within 2 business hours",
    "bcf.trust3": "No-commitment quote",
    "bcf.nameLabel": "Full name",
    "bcf.phoneLabel": "Phone",
    "bcf.productLabel": "Product of interest",
    "bcf.messageLabel": "Message (optional)",
    "bcf.selectCategory": "Select a category",
    "bcf.messagePlaceholder": "Tell us about your space...",
    "bcf.sendWhatsapp": "Send via WhatsApp",
    "bcf.directChat": "Direct chat",
    "bcf.p.multiple": "More than one product",

    // About Section
    "about.eyebrow": "Our team",
    "about.title": "About Us",
    "about.subtitle":
      "With over 20 years of experience in interior design, we transform spaces with custom solutions and personalized consultative service in Florianópolis and the surrounding region.",
    "about.nilza.role": "Founder & Designer",
    "about.nilza.bio":
      "Over 20 years dedicated to interior design and decoration. Specialist in creating spaces that balance aesthetics, functionality, and the personality of each client.",
    "about.clarice.role": "Interior Designer",
    "about.clarice.bio":
      "Specialist in space composition and material selection. Translates each client's style and needs into unique projects, with attention to the details that make a difference.",

    // FAQ — Default
    "faq.default.q1": "How does the measurement work?",
    "faq.default.a1": "Our specialist comes to your address to carry out the technical measurement at no cost. We guarantee millimeter precision so that the result is perfect.",
    "faq.default.q2": "What is the delivery and installation lead time?",
    "faq.default.a2": "The lead time varies depending on the product and project complexity. Generally, 15 to 30 business days after quote approval. Installation is included.",
    "faq.default.q3": "Do you serve all of Florianópolis and the surrounding region?",
    "faq.default.a3": "Yes! We serve Florianópolis, São José, Palhoça, Biguaçu and all of Greater Florianópolis.",
    "faq.default.q4": "Can I request fabric or material samples?",
    "faq.default.a4": "Of course! During the consultation, we bring samples so you can visualize colors, textures and drape directly in your space.",

    // FAQ — Curtains
    "faq.cortinas.q1": "What is the difference between an American pleat curtain and a wave curtain?",
    "faq.cortinas.a1": "The American pleat is a classic style with symmetrical folds at the top, ideal for more traditional and elegant spaces. The wave curtain has a soft, continuous wave drape with a contemporary, clean look. During the consultation we help you choose the style that best fits your space.",
    "faq.cortinas.q2": "Do I need full blackout or is a light-filtering fabric enough?",
    "faq.cortinas.a2": "It depends on the room and the goal. Bedrooms usually call for blackout to block 100% of light for better sleep quality. For living rooms and offices, light-filtering fabrics create a soft, cozy atmosphere without fully darkening the space. We bring samples on the visit so you can compare directly in your space.",
    "faq.cortinas.q3": "Is the rod or track included in the project?",
    "faq.cortinas.a3": "Yes! The entire mounting system — whether rod, Swiss track or pelmet — is part of the project and included in the quote. We work with finishes in various colors and materials to complement your décor.",
    "faq.cortinas.q4": "What is the advantage of a custom curtain over a store-bought one?",
    "faq.cortinas.a4": "Store-bought curtains come in standard sizes and often end up too short or too wide for the opening, compromising the final result. Ours are made to the millimeter for your specific window — exact fabric, style, folds and length — the aesthetic difference is remarkable.",

    // FAQ — Blinds
    "faq.persianas.q1": "What is the difference between horizontal and vertical blinds?",
    "faq.persianas.a1": "Horizontal blinds have slats running sideways and are ideal for standard windows — widely used in corporate environments and modern homes. Vertical blinds have slats running vertically and work better on wide windows, glass doors and high ceilings. The choice depends on the shape of the opening and the style of the space.",
    "faq.persianas.q2": "Roller blind or Double Vision: which one to choose?",
    "faq.persianas.a2": "The roller blind is the most versatile: available in blackout, screen or colored fabrics, it adapts to any environment. The Double Vision combines two fabric layers that alternate to create everything from full blackout to complete illumination with a single movement — ideal for those who want maximum light control with sophisticated design.",
    "faq.persianas.q3": "Do blinds work well in humid environments like bathrooms and kitchens?",
    "faq.persianas.a3": "Yes, with the right choice of material. For humid environments, we recommend aluminum, PVC or moisture-treated technical fabric blinds. During the consultation we indicate exactly the most suitable model for each room.",
    "faq.persianas.q4": "Is the control manual or can it be motorized?",
    "faq.persianas.a4": "We offer both options. Manual cord control is the most common and economical. The motorized version, with remote control or integration with home automation systems, is recommended for hard-to-reach windows or more sophisticated projects. We present the options in the quote.",

    // FAQ — Wallpaper
    "faq.papeis.q1": "Do you install the wallpaper or just sell it?",
    "faq.papeis.a1": "We do everything: pre-installation wall inspection, professional application with the appropriate technical adhesive for each collection, and impeccable finishing at seams and corners. The process takes 1 to 2 days depending on the area and the chosen design.",
    "faq.papeis.q2": "Can wallpaper be installed on walls with moisture or imperfections?",
    "faq.papeis.a2": "Walls with active moisture need to be treated before application to ensure durability. Minor imperfections can be corrected with leveling compound. We carry out a technical inspection before confirming the project to avoid surprises and guarantee the best result.",
    "faq.papeis.q3": "What is the difference between the Geometric, Kids and Kitchen collections?",
    "faq.papeis.a3": "They are lines with distinct concepts: the Geometric collection stands out for its modern, abstract patterns that create dynamism and sophistication, ideal for living rooms and offices. The Kids collection is dedicated to children's rooms, featuring fun prints, characters and enchanting patterns. The Kitchen collection brings exclusive coverings and prints — from Portuguese tiles to marbles — that transform this space into a unique design environment.",
    "faq.papeis.q4": "Is it possible to remove the wallpaper later without damaging the wall?",
    "faq.papeis.a4": "It depends on the type of paper and the quality of the application. The papers in our collections are designed for durability, but can be removed with the proper technique — especially on well-prepared walls. At the end of the wallpaper's lifecycle, we can assess and recommend the best way to replace it.",

    // FAQ — Rugs
    "faq.tapetes.q1": "Do you make rugs in any custom size?",
    "faq.tapetes.a1": "Yes! Our custom-made rugs are crafted in the exact dimensions you need — conventional formats, circular, for hallways or stairs. During the consultation we measure the space and present the most suitable size, shape and material options for each environment.",
    "faq.tapetes.q2": "What materials are available for the rugs?",
    "faq.tapetes.a2": "We work with various fibers: natural wool (sophisticated and durable), viscose (silky sheen), polypropylene (stain-resistant and high-traffic) and mixed blends. Each material has different characteristics in terms of feel, durability and maintenance — we help you choose based on usage and the environment.",
    "faq.tapetes.q3": "Can I use a runner in both a hallway and on stairs?",
    "faq.tapetes.a3": "Yes, runners are ideal for both applications. For stairs, precise cutting and proper fastening are essential to prevent folding or slipping. We produce runners with the exact measurements of each step and hallway, with edge finishing for a clean and professional result.",
    "faq.tapetes.q4": "How do I care for and clean the rug day-to-day?",
    "faq.tapetes.a4": "Generally, weekly vacuuming and immediate stain removal with a damp cloth and mild cleaner are sufficient for daily care. For deeper cleaning, we recommend professional washing every 6 to 12 months. We provide specific care instructions for each material at the time of delivery.",
  },

  es: {
    // Navigation
    "/": "Inicio",
    "/cortinas": "Cortinas",
    "/cortinas/tecido": "Cortinas de Tela",
    "/cortinas/prega-americana": "Pliegue Americano",
    "/cortinas/ilhos": "Cortinas con Ojales",
    "/cortinas/wave": "Cortinas Wave",
    "/cortinas/blackout-acusticas": "Blackout & Acústicas",
    "/persianas": "Persianas",
    "/persianas/horizontais": "Horizontales",
    "/persianas/verticais": "Verticales",
    "/persianas/rolo-double-vision": "Enrollable & Double Vision",
    "/papeis-de-parede": "Papel Tapiz",
    "/papeis-de-parede/geometricos": "Geométricos",
    "/papeis-de-parede/infantil": "Infantil",
    "/papeis-de-parede/cozinha": "Cocina",
    "/tapetes": "Alfombras",
    "/tapetes/sob-medida": "A Medida",
    "/tapetes/decorativo": "Decorativo",
    "/tapetes/passadeira": "Pasillo",
    "/blog": "Blog",
    "/contato": "Contacto",
    viewAll: "Ver todos",
    whatsappCta: "WhatsApp",

    // Hero
    "hero.title": "20 años de experiencia transformando ambientes",
    "hero.subtitle": "Sofisticación y confort en cada detalle de su hogar.",
    "hero.ctaPrimary": "Solicitar Presupuesto",
    "hero.ctaSecondary": "Ver Colecciones",
    "hero.whatsapp": "¡Hola! Me gustaría solicitar un presupuesto.",

    // Home — Collections
    "home.collections": "Nuestras Colecciones",

    // Home — Service
    "home.service.eyebrow": "Formas de Atención",
    "home.service.title": "Elija cómo empezar",
    "home.service.subtitle":
      "Dos opciones pensadas para adaptarse a su momento — de la comodidad de lo digital a la atención exclusiva en su hogar.",
    "home.online.badge": "Online · Gratuito",
    "home.online.title": "Presupuesto Online Gratuito",
    "home.online.desc":
      "Envíe fotos y medidas de su ambiente por WhatsApp y reciba una estimación rápida, sin salir de casa y sin compromiso.",
    "home.online.step1": "Tome fotos del ambiente y anote las medidas",
    "home.online.step2":
      "Envíe por WhatsApp — le respondemos con opciones de telas y acabados para elegir",
    "home.online.step3": "Reciba la estimación de costo rápidamente",
    "home.online.cta": "Quiero una estimación ahora",
    "home.premium.badge": "Más Recomendado",
    "home.premium.label": "Premium · Presencial",
    "home.premium.title": "Consultoría Presencial Premium",
    "home.premium.desc":
      "Nuestra especialista va hasta usted con muestrario exclusivo, orienta en la elección de colores y telas, y realiza la medición con precisión milimétrica.",
    "home.premium.f1": "Visita técnica en su ambiente",
    "home.premium.f2": "Muestrario exclusivo llevado hasta usted",
    "home.premium.f3": "Orientación profesional de colores y telas",
    "home.premium.f4": "Medición precisa garantizada",
    "home.premium.f5":
      "El valor de la consultoría se aplica 100% a los productos adquiridos",
    "home.premium.cta": "Agendar Consultoría Profesional",
    "home.premium.whatsapp":
      "¡Hola! Me gustaría agendar una Consultoría Presencial Premium con Stylo Decore.",

    // Home — Differentials
    "home.diff.eyebrow": "Incluido en cada proyecto",
    "home.diff.title": "Al comprar, usted recibe",
    "home.diff.d1.title": "Medición Gratuita",
    "home.diff.d1.text":
      "Nuestros consultores van hasta usted sin costo para garantizar medidas perfectas.",
    "home.diff.d2.title": "20 Años de Experiencia",
    "home.diff.d2.text":
      "Dos décadas transformando ambientes con calidad y sofisticación.",
    "home.diff.d3.title": "Instalación Incluida",
    "home.diff.d3.text":
      "Instalación profesional incluida en todos los proyectos a medida.",

    // Home — Blog
    "home.blog.eyebrow": "Blog",
    "home.blog.title": "Consejos e Inspiración",
    "home.blog.viewAll": "Ver todos los artículos",
    "home.blog.readingTime": "min de lectura",
    "home.blog.readArticle": "Leer artículo",

    // Contact Section
    "contact.eyebrow": "Contáctenos",
    "contact.title": "Póngase en Contacto",
    "contact.subtitle":
      "Complete el formulario e iniciamos la atención por WhatsApp — sin compromiso, con total atención a su proyecto.",
    "contact.location": "Ubicación",
    "contact.hours": "Atención",
    "contact.quote":
      '"Cada detalle importa — desde la tela elegida hasta la instalación final. Nuestro compromiso es transformar su espacio con sofisticación."',
    "contact.whatsappDirect": "Ir directamente al WhatsApp",
    "contact.fieldName": "Nombre completo *",
    "contact.namePlaceholder": "Su nombre",
    "contact.fieldPhone": "WhatsApp *",
    "contact.fieldEmail": "E-mail (opcional)",
    "contact.fieldInterest": "Producto de interés",
    "contact.fieldMessage": "Mensaje (opcional)",
    "contact.messagePlaceholder":
      "Cuéntenos sobre su proyecto, ambiente o dudas...",
    "contact.send": "Enviar mensaje",
    "contact.sending": "Enviando...",
    "contact.sent": "¡Enviado!",
    "contact.successTitle": "¡Mensaje enviado!",
    "contact.successText":
      "Recibimos su contacto. Se abrió WhatsApp para continuar la atención.",
    "contact.errorTitle": "Error al enviar",
    "contact.errorText":
      "No fue posible enviar su mensaje. Por favor, contáctenos directamente por WhatsApp.",
    "contact.privacy":
      "Sus datos son tratados con total confidencialidad.",
    "contact.selected": "seleccionado",
    "contact.selectedPlural": "seleccionados",
    "contact.i.curtains": "Cortinas",
    "contact.i.blinds": "Persianas",
    "contact.i.wallpaper": "Papel Tapiz",
    "contact.i.rugs": "Alfombras",
    "contact.i.full": "Proyecto completo",
    "contact.desc":
      "Estamos listos para ayudarle a transformar sus ambientes. La atención es directamente por WhatsApp para mayor agilidad.",
    "contact.whatsappPrompt": "Atención rápida y personalizada →",
    "contact.addressLabel": "Dirección",
    "contact.hoursLabel": "Horario de Atención",
    "contact.telephone": "Teléfono",

    // Footer
    "footer.desc":
      "Por más de 20 años transformando ambientes con cortinas, persianas, papel tapiz y alfombras a medida.",
    "footer.excellence": "20 años de excelencia",
    "footer.products": "Productos",
    "footer.institutional": "Institucional",
    "footer.home": "Inicio",
    "footer.rights": "Todos los derechos reservados.",

    // Category Page
    "cat.consultancy.title": "Consultoría Personalizada",
    "cat.consultancy.desc":
      "Nuestra especialista va hasta usted para medición y consultoría gratuita.",
    "cat.consultancy.cta": "Agendar Ahora",
    "cat.consultancy.whatsapp":
      "¡Hola! Me gustaría agendar una consultoría para ",

    // Subcategory Page
    "sub.designAutoral": "Diseño Autoral",
    "sub.interest": "Me interesa este modelo",
    "sub.customProject": "Solicite Su Proyecto a Medida",
    "sub.specs.title": "Especificaciones Premium",
    "sub.specs.spec1.title": "Confección Artesanal",
    "sub.specs.spec1.desc": "Cada pieza es cosida y terminada por nuestros artesanos experimentados.",
    "sub.specs.spec2.title": "Barra Doble de 20cm",
    "sub.specs.spec2.desc": "Garantiza la caída pesada y elegante típica de hoteles de lujo.",
    "sub.specs.spec3.title": "Forro Blackout Opcional",
    "sub.specs.spec3.desc": "Tecnología soft-touch que no compromete la estética de la cortina.",
    "page.geometricos.desc": "Patrones modernos y abstractos que crean dinamismo y sofisticación. La colección Geométricos trae formas, líneas y texturas que transforman paredes en elementos de diseño.",
    "page.cozinha.desc": "Revestimientos y estampados exclusivos para cocinas sofisticadas. De azulejos portugueses a mármoles calacata, transforma tu cocina en un ambiente de diseño único.",
    "sub.showroom.title": "Solicite un Presupuesto",
    "sub.showroom.desc":
      "Reciba una propuesta personalizada para su proyecto. Nuestro equipo le ayudará a elegir la solución ideal para su espacio.",
    "sub.showroom.cta": "Solicitar Presupuesto",
    "sub.excellence": "20 años de excelencia",
    "sub.footer": "Diseño de Interiores • Telas Nobles • Acabados",
    "sub.whatsapp.interest": "¡Hola! Me interesa este modelo de",
    "sub.whatsapp.info": "Me gustaría más información.",
    "sub.whatsapp.project": "¡Hola! Estoy interesado(a) en",
    "sub.whatsapp.projectEnd":
      "y me gustaría solicitar un proyecto a medida.",
    "sub.whatsapp.showroom":
      "¡Hola! Me gustaría solicitar un presupuesto para",

    // Testimonials
    "testimonials.label": "Testimonios",
    "testimonials.title": "Lo que dicen nuestros clientes",
    "testimonials.subtitle":
      "Cada proyecto es una historia de transformación. Vea lo que quienes confiaron en Stylo Decore tienen que decir.",

    // Map Section
    "map.label": "Ubicación",
    "map.title": "Dónde Estamos",
    "map.desc":
      "Nuestra tienda está en Campeche, Florianópolis. Contáctenos por WhatsApp para consultas o solicitar un presupuesto personalizado.",
    "map.address": "Dirección",
    "map.hours": "Horarios",
    "map.phone": "Teléfono / WhatsApp",
    "map.route": "Cómo llegar",
    "map.schedule": "Hablar por WhatsApp",
    "map.waMsg": "¡Hola! Me gustaría saber más sobre los productos y servicios de Stylo Decore.",

    // FAQ
    "faq.label": "Preguntas Frecuentes",
    "faq.title": "Preguntas Frecuentes",
    "faq.desc1":
      "Reunimos las dudas más comunes de nuestros clientes. ¿No encontró lo que necesita?",
    "faq.desc2": "Contáctenos por WhatsApp",
    "faq.q1": "¿En qué ciudades atienden?",
    "faq.a1":
      "Atendemos Florianópolis y toda el área metropolitana de Florianópolis, incluyendo São José, Palhoça, Biguaçu, Governador Celso Ramos y regiones cercanas. Contáctenos para confirmar disponibilidad en su localidad.",
    "faq.q2": "¿Cómo funciona la medición gratuita?",
    "faq.a2":
      "Tras el contacto inicial, programamos una visita técnica en su dirección. Nuestra consultora va hasta usted con el muestrario completo, realiza la medición con precisión milimétrica y presenta las mejores opciones para su proyecto — todo sin costo adicional.",
    "faq.q3": "¿Cuál es el plazo de entrega e instalación?",
    "faq.a3":
      "El plazo promedio es de 15 a 25 días hábiles tras la aprobación del presupuesto y confirmación del pedido. Proyectos más grandes o productos especiales pueden tener plazos diferentes, siempre comunicados con anticipación.",
    "faq.q4": "¿La instalación está incluida en el precio?",
    "faq.a4":
      "¡Sí! La instalación profesional está incluida en todos los proyectos a medida. Nuestro equipo se encarga de todo el proceso, desde el inicio hasta el acabado final, sin ningún costo adicional para usted.",
    "faq.q5": "¿Puedo solicitar un presupuesto sin compromiso?",
    "faq.a5":
      "Por supuesto. Tanto el presupuesto online (vía WhatsApp) como la consultoría presencial son sin compromiso. Usted recibe toda la información y decide con calma, a su tiempo.",
    "faq.q6": "¿Trabajan con productos totalmente a medida?",
    "faq.a6":
      "Sí, todos nuestros productos son confeccionados a medida para su ambiente específico. Esto garantiza una caída perfecta, un acabado impecable y un resultado mucho más sofisticado que los productos estándar.",
    "faq.q7": "¿Cómo elijo la tela correcta para cada habitación?",
    "faq.a7":
      "Nuestra consultora la orienta en cada elección teniendo en cuenta la entrada de luz deseada, la privacidad necesaria, la decoración existente y el estilo que desea lograr. Llevamos muestras físicas para que vea las opciones en el ambiente real antes de decidir.",
    "faq.q8": "¿Las cortinas blackout realmente bloquean toda la luz?",
    "faq.a8":
      "Las cortinas blackout de alta calidad bloquean entre el 95% y el 100% de la luminosidad, dependiendo del tejido y la forma de instalación. Para un bloqueo total, recomendamos la instalación con superposición en los laterales — un detalle que nuestro equipo ya contempla en el proyecto.",
    "faq.q9": "¿Cuál es la diferencia entre persiana y cortina?",
    "faq.a9":
      "Las persianas son estructuras rígidas (lamas, tela enrollable, etc.) que ofrecen un control preciso de la luz y son ideales para ambientes funcionales como oficinas y cocinas. Las cortinas son de tela, aportan ligereza y sofisticación, y son muy versátiles en salas y dormitorios. Lo ideal para cada espacio depende del estilo y las necesidades — nuestra consultora le ayuda en esa elección.",
    "faq.q10": "¿Cómo mantengo mis cortinas y persianas?",
    "faq.a10":
      "Las cortinas de tela generalmente pueden lavarse a máquina en ciclo delicado o a mano — le orientamos según el material. Las persianas deben limpiarse con un paño húmedo o aspiradora, sin usar productos abrasivos. Al recibir su producto, le proporcionamos todas las instrucciones de cuidado específicas para el material elegido.",

    // Blog list page
    "blog.featured": "Destacado",
    "blog.listTitle": "Consejos de la Especialista",
    "blog.listDesc": "Inspiraciones, tendencias y consejos prácticos para transformar sus ambientes con personalidad y elegancia.",
    "blog.readArticle": "Leer artículo",
    "blog.read": "Leer",
    "blog.readMin": "min",

    // Blog post page
    "blog.tocLabel": "En este artículo",
    "blog.tipLabel": "Consejo de la Especialista",
    "blog.consultaLabel": "Consulta gratuita",
    "blog.sidebarTitle": "¿No sabe cuál elegir?",
    "blog.sidebarDesc": "Contáctenos y reciba orientación personalizada para su espacio.",
    "blog.sidebarCta": "Háblenos →",
    "blog.backToBlog": "Volver al Blog",
    "blog.expertRole": "Especialista en Decoración",
    "blog.minRead": "min de lectura",
    "blog.liked": "¿Le gustó este artículo?",
    "blog.ctaDesc": "Háblenos directamente por WhatsApp y reciba orientación personalizada para su espacio.",
    "blog.ctaBtn": "Contáctenos",
    "blog.continueReading": "Seguir leyendo",
    "blog.otherArticles": "Más Artículos",
    "blog.notFound": "Artículo no encontrado",
    "blog.company": "Nilza Terezinha Duarte Bueno",
    "blog.waMessage": "¡Hola! Leí el artículo en el blog y me gustaría más información.",
    "blog.waSidebar": "¡Hola! Leí el artículo y me gustaría ayuda para elegir.",

    // Questionário — UI
    "q.step1": "Productos",
    "q.step2": "Preferencias",
    "q.step3": "Resumen",
    "q.step4": "Contacto",
    "q.step1of4": "Paso 1 de 4",
    "q.step3of4": "Paso 3 de 4",
    "q.step4of4": "Paso 4 de 4",
    "q.title": "¿Qué está buscando?",
    "q.subtitle": "Seleccione uno o más productos para personalizar su consultoría.",
    "q.continue": "Continuar",
    "q.back": "Volver",
    "q.next": "Siguiente",
    "q.seeSummary": "Ver resumen",
    "q.summaryTitle": "Su resumen",
    "q.summarySubtitle": "Todo listo. Revise antes de continuar.",
    "q.editAnswers": "Editar respuestas",
    "q.product": "producto",
    "q.products": "productos",
    "q.answers": "respuestas",
    "q.almostTitle": "¡Casi listo!",
    "q.almostSubtitle": "¿Cómo podemos contactarle para continuar la consultoría?",
    "q.nameLabel": "Nombre completo",
    "q.waLabel": "WhatsApp con código de área",
    "q.emailLabel": "E-mail",
    "q.namePlaceholder": "Su nombre",
    "q.sending": "Enviando…",
    "q.send": "Enviar",
    "q.successTitle": "¡Mensaje enviado!",
    "q.successDesc": "Recibimos su solicitud. Nos pondremos en contacto pronto por WhatsApp o e-mail.",
    "q.backHome": "Volver al inicio",
    "q.errorTitle": "Error al enviar",
    "q.errorText": "No fue posible enviar su solicitud. Inténtelo nuevamente o contáctenos por WhatsApp.",
    "q.emailInvalid": "Ingrese una dirección de e-mail válida",
    "q.measurePlaceholder": "O ingrese la medida exacta (ej: 2.40 × 1.80 m)",

    // Questionário — products
    "q.p.curtains.desc": "Tela, wave, blackout y más",
    "q.p.blinds.desc": "Horizontal, vertical, enrollable",
    "q.p.wallpaper.desc": "Breeze, Geométricos, Infantil",
    "q.p.rugs.desc": "A medida, decorativo",

    // Questionário — question labels
    "q.ql.tipoC": "¿Qué tipo de cortina busca?",
    "q.ql.tipoP": "¿Qué tipo de persiana prefiere?",
    "q.ql.tipoT": "¿Qué tipo de alfombra busca?",
    "q.ql.colecao": "¿Qué colección le interesa?",
    "q.ql.ambiente": "¿Cuál es el ambiente/espacio?",
    "q.ql.prioridade": "¿Cuál es la prioridad principal?",
    "q.ql.estilo": "¿Qué estilo se adapta a su espacio?",
    "q.ql.tamanhoJ": "¿Cuál es el tamaño aproximado de la ventana?",
    "q.ql.tamanhoP": "¿Cuál es el tamaño aproximado?",
    "q.ql.prazo": "¿Cuál es su plazo para este proyecto?",
    "q.ql.luz": "¿Cómo prefiere controlar la luz?",
    "q.ql.acionamento": "¿Qué método de control prefiere?",
    "q.ql.visual": "¿Qué aspecto visual busca?",
    "q.ql.estadoParede": "¿La pared ya tiene papel tapiz?",
    "q.ql.area": "¿Cuál es el área aproximada?",
    "q.ql.uso": "¿Cuál es el uso principal?",
    "q.ql.material": "¿Material preferido?",

    // Questionário — answer labels (summary)
    "q.l.tipo": "Tipo",
    "q.l.ambiente": "Ambiente",
    "q.l.tamanho": "Tamaño",
    "q.l.colecao": "Colección",
    "q.l.area": "Área",
    "q.l.prioridade": "Prioridad",
    "q.l.estilo": "Estilo",
    "q.l.prazo": "Plazo",
    "q.l.luz": "Control de luz",
    "q.l.acionamento": "Control",
    "q.l.visual": "Aspecto deseado",
    "q.l.estadoParede": "Estado de la pared",
    "q.l.uso": "Uso principal",
    "q.l.material": "Material",

    // Blog Contact Form
    "bcf.eyebrow": "Hable con la especialista",
    "bcf.title1": "Transforme su",
    "bcf.titleHighlight": "espacio",
    "bcf.title2": "con nosotros",
    "bcf.desc": "Más de 20 años de experiencia en decoración de interiores. Describa su espacio y reciba orientación personalizada directamente por WhatsApp.",
    "bcf.trust1": "Atendemos Florianópolis y región",
    "bcf.trust2": "Respuesta en hasta 2 horas hábiles",
    "bcf.trust3": "Presupuesto sin compromiso",
    "bcf.nameLabel": "Nombre completo",
    "bcf.phoneLabel": "Teléfono",
    "bcf.productLabel": "Producto de interés",
    "bcf.messageLabel": "Mensaje (opcional)",
    "bcf.selectCategory": "Seleccione una categoría",
    "bcf.messagePlaceholder": "Cuéntenos sobre su espacio...",
    "bcf.sendWhatsapp": "Enviar por WhatsApp",
    "bcf.directChat": "Chat directo",
    "bcf.p.multiple": "Más de un producto",

    // About Section
    "about.eyebrow": "Nuestro equipo",
    "about.title": "Sobre Nosotros",
    "about.subtitle":
      "Con más de 20 años de experiencia en diseño de interiores, transformamos espacios con soluciones a medida y atención consultiva personalizada en Florianópolis y la región.",
    "about.nilza.role": "Fundadora & Diseñadora",
    "about.nilza.bio":
      "Más de 20 años dedicados al diseño de interiores y decoración. Especialista en crear ambientes que equilibran estética, funcionalidad y la personalidad de cada cliente.",
    "about.clarice.role": "Diseñadora de Interiores",
    "about.clarice.bio":
      "Especialista en composición de ambientes y selección de materiales. Traduce el estilo y las necesidades de cada cliente en proyectos únicos, con atención a los detalles que marcan la diferencia.",

    // FAQ — Default
    "faq.default.q1": "¿Cómo funciona la medición?",
    "faq.default.a1": "Nuestra especialista va a su domicilio para realizar la medición técnica sin costo. Garantizamos precisión milimétrica para que el resultado sea perfecto.",
    "faq.default.q2": "¿Cuál es el plazo de entrega e instalación?",
    "faq.default.a2": "El plazo varía según el producto y la complejidad del proyecto. En general, de 15 a 30 días hábiles tras la aprobación del presupuesto. La instalación está incluida.",
    "faq.default.q3": "¿Atienden en toda Florianópolis y la región?",
    "faq.default.a3": "¡Sí! Atendemos Florianópolis, São José, Palhoça, Biguaçu y toda el Gran Florianópolis.",
    "faq.default.q4": "¿Puedo solicitar muestras de tela o material?",
    "faq.default.a4": "¡Claro! Durante la consultoría, llevamos muestras para que visualice colores, texturas y caída directamente en su ambiente.",

    // FAQ — Cortinas
    "faq.cortinas.q1": "¿Cuál es la diferencia entre cortina con pliegue americano y cortina wave?",
    "faq.cortinas.a1": "El pliegue americano es un modelo clásico con dobleces simétricas en la parte superior, ideal para ambientes más tradicionales y elegantes. La cortina wave tiene una caída ondulada suave y continua, con un aspecto contemporáneo y limpio. En la consultoría le ayudamos a elegir el modelo que mejor combine con su espacio.",
    "faq.cortinas.q2": "¿Necesito blackout total o con un filtro de luz es suficiente?",
    "faq.cortinas.a2": "Depende del ambiente y el objetivo. Los dormitorios generalmente necesitan blackout para bloquear el 100% de la luz y garantizar un sueño de mayor calidad. Para salas y oficinas, las telas con filtro de luz crean un ambiente suave y acogedor sin oscurecer totalmente. Llevamos muestras en la visita para que compare directamente en su espacio.",
    "faq.cortinas.q3": "¿El varón o riel está incluido en el proyecto?",
    "faq.cortinas.a3": "¡Sí! Todo el sistema de fijación — varón, riel suizo o cenefa — forma parte del proyecto y se incluye en el presupuesto. Trabajamos con acabados en diversos colores y materiales para armonizar con la decoración de su ambiente.",
    "faq.cortinas.q4": "¿Cuál es la ventaja de una cortina a medida respecto a las de tienda?",
    "faq.cortinas.a4": "Las cortinas de tienda vienen en tallas estándar y a menudo quedan cortas o anchas para el vano, comprometiendo el resultado final. Las nuestras se producen milimétricamente para su ventana, con tela, modelo, pliegues y largo exactos — el resultado estético es completamente diferente.",

    // FAQ — Persianas
    "faq.persianas.q1": "¿Cuál es la diferencia entre persiana horizontal y vertical?",
    "faq.persianas.a1": "Las persianas horizontales tienen lamas en dirección lateral y son ideales para ventanas estándar — muy utilizadas en ambientes corporativos y residencias modernas. Las verticales tienen lamas en dirección vertical y funcionan mejor en ventanas amplias, puertas de vidrio y techos altos. La elección depende del formato de la apertura y el estilo del ambiente.",
    "faq.persianas.q2": "¿Persiana enrollable o Double Vision: cuál elegir?",
    "faq.persianas.a2": "La persiana enrollable es la más versátil: disponible en blackout, screen o telas de colores, se adapta a cualquier ambiente. La Double Vision combina dos capas de tela que se alternan para crear desde penumbra total hasta plena iluminación con un único movimiento — ideal para quienes desean el máximo control de luz con un diseño sofisticado.",
    "faq.persianas.q3": "¿Las persianas funcionan bien en ambientes húmedos como baño y cocina?",
    "faq.persianas.a3": "Sí, con la elección correcta de material. Para ambientes húmedos, recomendamos persianas de aluminio, PVC o telas tecnológicas tratadas contra la humedad. Durante la consultoría indicamos exactamente el modelo más adecuado para cada ambiente.",
    "faq.persianas.q4": "¿El accionamiento es manual o puede ser motorizado?",
    "faq.persianas.a4": "Ofrecemos ambas opciones. El accionamiento manual con cordón es el más habitual y económico. La versión motorizada, con control remoto o integración con sistemas de domótica, es recomendable para ventanas de difícil acceso o proyectos más sofisticados. Presentamos las opciones en el presupuesto.",

    // FAQ — Papel Tapiz
    "faq.papeis.q1": "¿Ustedes realizan la instalación del papel tapiz o solo venden?",
    "faq.papeis.a1": "Hacemos todo: inspección previa de la pared, instalación profesional con el pegamento técnico adecuado para cada colección y acabado impecable en las uniones y esquinas. El proceso tarda entre 1 y 2 días según la metraje y el modelo elegido.",
    "faq.papeis.q2": "¿Se puede instalar papel tapiz en paredes con humedad o irregulares?",
    "faq.papeis.a2": "Las paredes con humedad activa deben ser tratadas antes de la instalación para garantizar la durabilidad. Las pequeñas irregularidades se pueden corregir con pasta niveladora. Realizamos una inspección técnica antes de confirmar el proyecto para evitar sorpresas y garantizar el mejor resultado.",
    "faq.papeis.q3": "¿Cuál es la diferencia entre las colecciones Geométricos, Infantil y Cocina?",
    "faq.papeis.a3": "Son líneas con propuestas distintas: los Geométricos se destacan por patrones modernos y abstractos que crean dinamismo y sofisticación, ideales para salas y oficinas. El Infantil está dedicado a las habitaciones de los niños, con estampados divertidos, personajes y patrones encantadores. La Cocina ofrece revestimientos y estampados exclusivos — desde azulejos portugueses hasta mármoles — que transforman ese espacio en un ambiente de diseño único.",
    "faq.papeis.q4": "¿Es posible retirar el papel tapiz después sin dañar la pared?",
    "faq.papeis.a4": "Depende del tipo de papel y la calidad de la instalación. Los papeles de nuestras colecciones están diseñados para durar, pero pueden retirarse con la técnica adecuada — especialmente en paredes bien preparadas. Al final del ciclo del papel, podemos evaluar e indicar la mejor manera de reemplazarlo.",

    // FAQ — Alfombras
    "faq.tapetes.q1": "¿Hacen alfombras en cualquier medida personalizada?",
    "faq.tapetes.a1": "¡Sí! Nuestras alfombras a medida se confeccionan en las dimensiones exactas que necesita — formatos convencionales, circulares, para corredores o escaleras. En la consultoría medimos el espacio y presentamos las opciones de tamaño, forma y material más adecuadas para cada ambiente.",
    "faq.tapetes.q2": "¿Qué materiales están disponibles para las alfombras?",
    "faq.tapetes.a2": "Trabajamos con diversas fibras: lana natural (sofisticada y duradera), viscosa (brillo sedoso), polipropileno (resistente a manchas y tráfico intenso) y mezclas. Cada material tiene características distintas de tacto, durabilidad y mantenimiento — le ayudamos a elegir según el uso y el ambiente.",
    "faq.tapetes.q3": "¿Puedo usar un pasillo tanto en el corredor como en la escalera?",
    "faq.tapetes.a3": "Sí, el pasillo es ideal para ambas aplicaciones. Para las escaleras, es fundamental un corte preciso y una fijación adecuada para evitar dobleces o deslizamientos. Producimos pasillos con las medidas exactas de cada escalón y corredor, con acabado en los bordes para un resultado limpio y profesional.",
    "faq.tapetes.q4": "¿Cómo cuidar y limpiar la alfombra en el día a día?",
    "faq.tapetes.a4": "En general, la aspiración semanal y la eliminación inmediata de manchas con un paño húmedo y producto neutro son suficientes para el cuidado diario. Para una limpieza más profunda, recomendamos un lavado especializado cada 6 a 12 meses. Proporcionamos instrucciones específicas de cuidado para cada material en el momento de la entrega.",
  },
};
