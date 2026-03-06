import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getArticleJsonLd } from "@/lib/seo";
import { BlogPostClient } from "@/components/blog/BlogPostClient";

// ─── Block Types ──────────────────────────────────────────────────────────────

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "list"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "divider" }
  | { type: "specs"; rows: { label: string; value: string }[] }
  | { type: "room-guide"; items: { room: string; fabric: string; why: string }[] }
  | { type: "image"; src: string; alt: string; caption?: string };

interface Post {
  title: string;
  description: string;
  date: string;
  image: string;
  desktopImage?: string;
  tags: string[];
  readingTime: number;
  toc?: { id: string; label: string }[];
  blocks: Block[];
}

// ─── Post Data ────────────────────────────────────────────────────────────────

const POSTS: Record<string, Post> = {
  "como-escolher-tecido-cortina": {
    title: "Como Escolher o Tecido Ideal para sua Cortina",
    description:
      "Voil, linho, blackout, seda ou veludo? Descubra como cada tecido influencia a luz, a privacidade e a estética do seu ambiente — com dicas práticas da nossa especialista.",
    date: "2026-02-01",
    image: "/images/blog/tecidos-cortina.jpg",
    desktopImage: "/images/blog/tecidos-cortina-desktop.png",
    tags: ["Cortinas", "Tecidos", "Dicas"],
    readingTime: 6,
    toc: [
      { id: "por-que-importa", label: "Por que o tecido importa?" },
      { id: "voil", label: "Voil" },
      { id: "linho", label: "Linho" },
      { id: "blackout", label: "Blackout" },
      { id: "seda", label: "Seda" },
      { id: "veludo", label: "Veludo" },
      { id: "guia-rapido", label: "Guia por ambiente" },
    ],
    blocks: [
      {
        type: "h2",
        id: "por-que-importa",
        text: "Por que o tecido é a decisão mais importante?",
      },
      {
        type: "p",
        text: "A cortina é o elemento têxtil de maior impacto visual em um cômodo — ela ocupa de piso ao teto, enquadra a janela e interage diretamente com a luz que entra. Escolher um modelo lindo no tecido errado pode resultar em um quarto claro demais, uma sala sem privacidade ou um ambiente que aquece demais no verão.",
      },
      {
        type: "p",
        text: "Antes de decidir o modelo, a cor ou o acabamento, defina o tecido. Cada material carrega três variáveis que moldam o resultado final: **opacidade** (quanto bloqueia a luz), **caimento** (como cai e se movimenta) e **textura** (como dialoga com o restante do décor).",
      },
      {
        type: "h2",
        id: "voil",
        text: "Voil — Leveza e Luminosidade",
      },
      {
        type: "p",
        text: "O voil é um tecido de trama aberta, leve e translúcido, que filtra a luz sem bloqueá-la. Ao atravessar o voil, a luz solar se difunde e cria aquela claridade suave e uniforme que ilumina o ambiente sem ofuscar. É a escolha perfeita para quem quer manter a conexão visual com o exterior sem abrir mão de um véu de privacidade.",
      },
      {
        type: "specs",
        rows: [
          { label: "Opacidade", value: "Muito baixa — luz e silhuetas atravessam o tecido" },
          { label: "Caimento", value: "Fluido, etéreo, com movimento suave ao vento" },
          { label: "Textura", value: "Lisa e quase invisível — a cor é o protagonista" },
          { label: "Manutenção", value: "Máquina (ciclo delicado a 30°C), seca rápido" },
          { label: "Indicado para", value: "Salas de estar, escritórios, varandas cobertas" },
        ],
      },
      {
        type: "tip",
        text: "Voil funciona muito bem em **dupla com blackout**: o blackout na face interna garante privacidade à noite, e o voil na frente suaviza a luz durante o dia. É a combinação mais pedida em projetos de quarto de casal.",
      },
      {
        type: "image",
        src: "/images/blog/tecidos-voil.png",
        alt: "Sala de estar com cortinas de voil branco filtrando a luz natural",
        caption: "Cortinas de voil transformam a luz solar direta em claridade difusa e aconchegante.",
      },
      {
        type: "h2",
        id: "linho",
        text: "Linho — Sofisticação Natural",
      },
      {
        type: "p",
        text: "O linho está no topo da preferência de designers de interiores por um motivo simples: ele envelhece bem. A trama ligeiramente irregular e a textura visível criam uma profundidade que tecidos sintéticos não conseguem imitar. Combinado com a paleta natural — areia, cru, cinza quente, verde oliva — o linho conversa com praticamente qualquer estilo.",
      },
      {
        type: "p",
        text: "Disponível em versões mais e menos translúcidas, o linho de gramatura média é o mais versátil: deixa passar luz de manhã e mantém privacidade razoável ao anoitecer.",
      },
      {
        type: "specs",
        rows: [
          { label: "Opacidade", value: "Média — meia transparência na maioria das gramaturas" },
          { label: "Caimento", value: "Estruturado, firme, com volume natural" },
          { label: "Textura", value: "Orgânica e visível — o maior charme do material" },
          { label: "Manutenção", value: "Lavar a frio, nunca torcer; passar a vapor para destorcer" },
          { label: "Indicado para", value: "Sala de estar, home office, quarto de casal" },
        ],
      },
      {
        type: "tip",
        text: "Para projetos minimalistas ou com inspiração biofílica, o linho em **tom natural não tingido** é a primeira escolha. Ele amacia a entrada de luz sem cortar a sensação de conexão com o exterior.",
      },
      {
        type: "h2",
        id: "blackout",
        text: "Blackout — Controle Total de Luz",
      },
      {
        type: "p",
        text: "O blackout é o tecido de maior performance funcional. Suas múltiplas camadas com revestimento opaco bloqueiam até 99% da luz, além de oferecer isolamento térmico e acústico. Para quem trabalha à noite, tem bebês em casa ou simplesmente precisa dormir no escuro absoluto, é a escolha óbvia.",
      },
      {
        type: "specs",
        rows: [
          { label: "Opacidade", value: "Máxima — 95 a 99% de bloqueio de luz" },
          { label: "Caimento", value: "Pesado e firme, com excelente cobertura lateral" },
          { label: "Textura", value: "Variável — liso, texturizado, impresso ou acetinado" },
          { label: "Manutenção", value: "Aspiração regular; lavagem eventual delicada" },
          { label: "Indicado para", value: "Quartos, home theater, salas de reunião" },
        ],
      },
      {
        type: "tip",
        text: "O blackout **não precisa ser escuro**. Hoje existe blackout branco, cru e em tons pastéis que funcionam muito bem em quartos infantis e ambientes modernos. O revestimento opaco fica na face interna — a aparência externa pode ser qualquer cor.",
      },
      {
        type: "p",
        text: "O blackout também cresce muito em **home theaters domésticos** e em salas de reunião, onde o controle de reflexo em telas de TV e projetores é essencial para o conforto visual.",
      },
      {
        type: "image",
        src: "/images/blog/tecidos-blackout.png",
        alt: "Quarto de casal com cortinas blackout, ambiente escuro e aconchegante",
        caption: "Blackout não significa escuridão pesada — em tons claros, cria um quarto sereno e com privacidade total.",
      },
      {
        type: "h2",
        id: "seda",
        text: "Seda — Puro Requinte",
      },
      {
        type: "p",
        text: "A seda — ou o silk artificial em sua versão mais acessível — é o tecido da sofisticação. Seu brilho satinado cria um jogo de luz único que muda conforme o ângulo de visão. O caimento é impecável: a cortina desce em ondas suaves e simétricas que parecem posicionadas à mão.",
      },
      {
        type: "specs",
        rows: [
          { label: "Opacidade", value: "Baixa a média — translúcido com reflexo dourado" },
          { label: "Caimento", value: "Fluido e elegante, com brilho espelhado" },
          { label: "Textura", value: "Lisíssima, com acabamento satinado" },
          { label: "Manutenção", value: "Lavagem a seco para seda natural; silk pode ir a frio" },
          { label: "Indicado para", value: "Sala de jantar, suíte master, ambientes nobres" },
        ],
      },
      {
        type: "tip",
        text: "A seda funciona melhor em ambientes com **pé-direito alto e janelas grandes**. Em janelas pequenas, o brilho pode parecer excessivo. Para o dia a dia, o silk artificial é visualmente idêntico, mais resistente e lavável.",
      },
      {
        type: "h2",
        id: "veludo",
        text: "Veludo — Drama e Aconchego",
      },
      {
        type: "p",
        text: "O veludo transformou salas de jantar e suítes ao redor do mundo. Seu pelo curto e denso absorve e reflete a luz de forma única, criando uma profundidade de cor que nenhum outro tecido alcança. O mesmo verde-esmeralda parece mais intenso e saturado em veludo do que em qualquer outro material.",
      },
      {
        type: "p",
        text: "Além da estética, o veludo tem uma função prática no inverno: seu peso e densidade criam uma barreira térmica natural, ajudando a manter o ambiente aquecido e reduzindo o ruído externo.",
      },
      {
        type: "specs",
        rows: [
          { label: "Opacidade", value: "Alta — bloqueia bem a luz dependendo da gramatura" },
          { label: "Caimento", value: "Pesado e dramático, com volume pronunciado" },
          { label: "Textura", value: "Pelo curto e tátil, com cor profunda e aveludada" },
          { label: "Manutenção", value: "Aspiração frequente; lavagem a seco para peças nobres" },
          { label: "Indicado para", value: "Sala de jantar, biblioteca, quarto sofisticado" },
        ],
      },
      {
        type: "tip",
        text: "Veludo em **verde-esmeralda ou azul marinho** com trilho dourado é uma combinação que nunca falha em sala de jantar. Evite em ambientes muito úmidos ou em casas com animais de pelo longo.",
      },
      { type: "divider" },
      {
        type: "h2",
        id: "guia-rapido",
        text: "Guia rápido: tecido certo para cada ambiente",
      },
      {
        type: "p",
        text: "Use esta referência antes de conversar com a especialista — ela vai ajudar a confirmar ou ajustar a escolha de acordo com as particularidades do seu espaço:",
      },
      {
        type: "room-guide",
        items: [
          { room: "Sala de Estar", fabric: "Voil ou Linho", why: "Luz natural com elegância" },
          { room: "Quarto de Casal", fabric: "Blackout + Voil", why: "Privacidade e leveza juntas" },
          { room: "Quarto Infantil", fabric: "Blackout claro", why: "Sono de qualidade, cor suave" },
          { room: "Sala de Jantar", fabric: "Veludo ou Seda", why: "Sofisticação e drama" },
          { room: "Home Office", fabric: "Linho ou Blackout", why: "Sem reflexo em tela, mais foco" },
          { room: "Varanda Coberta", fabric: "Voil ou Tecido Externo", why: "Resistência ao ambiente aberto" },
        ],
      },
    ],
  },

  "motorizacao-persianas-vale-a-pena": {
    title: "Motorização de Persianas: Vale a Pena?",
    description:
      "Praticidade, segurança e automação residencial: descubra quando investir em persianas motorizadas, quais tipos de motor existem e o que considerar antes de decidir.",
    date: "2026-01-20",
    image: "/images/persianas/persiana-02.jpg",
    desktopImage: "/images/persianas/persiana-hero-desktop.jpeg",
    tags: ["Persianas", "Motorização", "Automação"],
    readingTime: 5,
    toc: [
      { id: "manual-vs-motorizado", label: "Manual vs Motorizado" },
      { id: "vantagens", label: "Vantagens" },
      { id: "tipos-de-motor", label: "Tipos de motor" },
      { id: "quando-investir", label: "Quando vale a pena?" },
      { id: "custo-beneficio", label: "Custo-benefício" },
    ],
    blocks: [
      {
        type: "p",
        text: "Imagine acordar com as persianas abrindo sozinhas ao nascer do sol, ou fechar todas as janelas da casa com um único comando de voz antes de sair. Isso não é mais luxo de hotel — é tecnologia acessível que transforma a rotina em casa. Mas será que a motorização de persianas vale o investimento para o seu caso?",
      },
      {
        type: "h2",
        id: "manual-vs-motorizado",
        text: "Manual vs Motorizado: qual a diferença real?",
      },
      {
        type: "p",
        text: "A persiana manual funciona bem — e tem o seu lugar. Mas quando a janela é grande, fica em local de difícil acesso, ou quando o projeto envolve vários ambientes, o acionamento manual começa a ser um problema diário. A motorização resolve exatamente isso.",
      },
      {
        type: "specs",
        rows: [
          { label: "Acionamento", value: "Manual: cordão ou corrente · Motorizado: controle, app ou voz" },
          { label: "Automação", value: "Manual: não · Motorizado: horários, sensores e cenas programáveis" },
          { label: "Acesso", value: "Manual: presença física · Motorizado: de qualquer lugar" },
          { label: "Desgaste", value: "Manual: cordões e trilhos sofrem mais · Motorizado: movimento controlado" },
          { label: "Instalação", value: "Manual: simples · Motorizado: requer ponto de energia ou bateria" },
        ],
      },
      {
        type: "image",
        src: "/images/blog/persianas-motorizadas-controle.jpg",
        alt: "Persiana rolô motorizada sendo controlada por controle remoto em ambiente residencial",
        caption: "Persianas motorizadas se integram perfeitamente a ambientes modernos — sem cordões visíveis, sem mecanismos aparentes.",
      },
      {
        type: "h2",
        id: "vantagens",
        text: "Vantagens que fazem diferença no dia a dia",
      },
      {
        type: "list",
        items: [
          "**Praticidade total**: controle remoto, app no celular ou comando de voz — sem sair do sofá",
          "**Simulação de presença**: programe aberturas e fechamentos automáticos quando estiver viajando",
          "**Acessibilidade**: ideal para janelas altas, sacadas envidraçadas e pessoas com mobilidade reduzida",
          "**Integração com smart home**: compatível com Alexa, Google Home, Apple HomeKit e sistemas Tuya",
          "**Proteção ao tecido**: o movimento preciso evita dobras irregulares e prolonga a vida útil da persiana",
          "**Conforto térmico programado**: feche automaticamente no horário de maior incidência solar e reduza o calor sem pensar nisso",
        ],
      },
      {
        type: "tip",
        text: "Persianas programadas para abrir **gradualmente entre 6h e 7h** simulam o nascer do sol dentro do quarto — um despertar muito mais gentil do que qualquer alarme, e aprovado por especialistas do sono.",
      },
      {
        type: "image",
        src: "/images/blog/persianas-app-controle.jpg",
        alt: "Pessoa controlando persiana motorizada pelo aplicativo no smartphone",
        caption: "Integração com Alexa, Google Home e Apple HomeKit transforma persianas em parte do ecossistema da casa inteligente.",
      },
      {
        type: "h2",
        id: "tipos-de-motor",
        text: "Tipos de motor: qual escolher?",
      },
      {
        type: "p",
        text: "Nem todo motor é igual. A escolha certa depende do tipo de persiana, do tamanho da janela e da infraestrutura elétrica disponível no ambiente.",
      },
      {
        type: "specs",
        rows: [
          { label: "Motor de tubo", value: "Embutido no rolo — invisível, silencioso, ideal para rolô e double vision" },
          { label: "Motor lateral", value: "Fixado na lateral — mais acessível, indicado para persianas horizontais" },
          { label: "Motor solar", value: "Alimentado por painel fotovoltaico — sem fio, sem obra, ideal para sacadas" },
          { label: "Motor a bateria", value: "Sem ponto de energia necessário — prático para reformas e locações" },
          { label: "Motor 220V", value: "Alta performance para persianas grandes e pesadas, como as de tecido screen" },
        ],
      },
      {
        type: "h2",
        id: "quando-investir",
        text: "Quando a motorização realmente vale a pena?",
      },
      {
        type: "p",
        text: "Não é preciso motorizar tudo. A decisão inteligente é priorizar os ambientes e situações onde o ganho de conforto é mais evidente:",
      },
      {
        type: "room-guide",
        items: [
          { room: "Janelas altas ou sacadas", fabric: "Prioridade alta", why: "Acesso físico difícil ou impossível" },
          { room: "Quarto de casal", fabric: "Recomendado", why: "Controle de luz sem sair da cama" },
          { room: "Sala com parede de vidro", fabric: "Prioridade alta", why: "Múltiplas persianas em sincronia" },
          { room: "Home office", fabric: "Recomendado", why: "Controle de reflexo sem interromper o trabalho" },
          { room: "Quarto infantil", fabric: "Opcional", why: "Segurança: sem cordões acessíveis para crianças" },
          { room: "Ambientes comerciais", fabric: "Altamente recomendado", why: "Controle centralizado de luz e privacidade" },
        ],
      },
      {
        type: "h2",
        id: "custo-beneficio",
        text: "Custo-benefício: o que considerar",
      },
      {
        type: "p",
        text: "O motor adiciona entre 30% e 60% ao custo de uma persiana manual, dependendo do modelo e do tipo de acionamento. Para uma persiana rolô de qualidade, a diferença em reais costuma ser menor do que muita gente imagina — especialmente quando comparada ao valor total de um projeto de decoração.",
      },
      {
        type: "p",
        text: "Além da praticidade, considere dois fatores que tendem a ser subestimados: a **durabilidade** (motores de boa procedência têm garantia de 5 anos e vida útil muito maior) e a **valorização do imóvel** — automação residencial é um diferencial real no mercado de compra e locação em Florianópolis.",
      },
      {
        type: "tip",
        text: "Se o orçamento for limitado, comece pelos ambientes de maior impacto — geralmente o quarto de casal e a sala principal. É muito mais fácil motorizar uma persiana na instalação do que retrofitar depois.",
      },
      { type: "divider" },
      {
        type: "p",
        text: "Quer saber se a motorização faz sentido para o seu projeto? Nossa equipe avalia o ambiente, o tipo de persiana e o seu orçamento para indicar a solução mais eficiente.",
      },
    ],
  },

  "tendencias-decoracao-2026": {
    title: "Tendências de Decoração 2026: O que Esperar",
    description:
      "Cores terrosas, materiais naturais, texturas táteis e minimalismo aconchegante: veja como aplicar as principais tendências de decoração de 2026 com cortinas, persianas e papéis de parede.",
    date: "2026-01-10",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=600&fit=crop",
    tags: ["Tendências", "Decoração", "2026"],
    readingTime: 6,
    toc: [
      { id: "cores-terrosas", label: "Cores Terrosas" },
      { id: "materiais-naturais", label: "Materiais Naturais" },
      { id: "texturas", label: "Texturas Táteis" },
      { id: "minimalismo", label: "Minimalismo Aconchegante" },
      { id: "papel-de-parede", label: "Papel de Parede Expressivo" },
      { id: "como-aplicar", label: "Como aplicar na prática" },
    ],
    blocks: [
      {
        type: "p",
        text: "2026 é o ano do equilíbrio: depois de uma era de excessos visuais, o mercado de decoração caminha para ambientes que combinam sofisticação com conforto real. A palavra do ano é **intenção** — cada peça escolhida tem uma razão de estar ali, e as cortinas, persianas e papéis de parede lideram essa transformação.",
      },
      {
        type: "h2",
        id: "cores-terrosas",
        text: "Cores Terrosas Dominam a Paleta",
      },
      {
        type: "p",
        text: "Tons de terracota, areia, caramelo, siena e verde oliva dominam a paleta de 2026. Essas cores trazem aconchego imediato e uma sensação de conexão com a natureza que os ambientes urbanos tanto precisam. São cores que funcionam como neutros quentes — não disputam atenção com os móveis, mas aquecam o ambiente sem esforço.",
      },
      {
        type: "specs",
        rows: [
          { label: "Tom destaque", value: "Terracota, siena queimado, caramelo" },
          { label: "Neutros quentes", value: "Areia, cru, cappuccino, cinza bege" },
          { label: "Acento vegetal", value: "Verde oliva, sage, musgo apagado" },
          { label: "Onde aplicar", value: "Cortinas, papéis de parede, almofadas e tapetes" },
          { label: "Combina com", value: "Madeira natural, rattan, cerâmica e metal cobre" },
        ],
      },
      {
        type: "tip",
        text: "Cortinas em **terracota ou areia** na frente de paredes brancas criam um contraste quente que aquece o ambiente sem sobrecarregar. Deixe a cortina ser a peça de destaque — e simplifique o restante.",
      },
      {
        type: "image",
        src: "/images/blog/sala-tons-terrosos.jpg",
        alt: "Sala de estar com paleta de cores terrosas, cadeiras terracota e iluminação quente",
        caption: "Tons terrosos criam profundidade e calor sem competir com os móveis — a paleta que define 2026.",
      },
      {
        type: "h2",
        id: "materiais-naturais",
        text: "Materiais Naturais em Alta",
      },
      {
        type: "p",
        text: "Fibras naturais como linho, algodão orgânico, juta e bambu ganham protagonismo absoluto. Não é só uma questão estética: a sustentabilidade passou a ser um critério real de compra. Cortinas de linho orgânico, persianas de bambu e papéis de parede com base natural refletem esse movimento.",
      },
      {
        type: "p",
        text: "O apelo vai além do visual — é sobre textura que se sente ao toque, imperfeições que conferem identidade e materiais que envelhecem bem. Em um mundo de superfícies digitais e acabamentos sintéticos, o natural se destaca exatamente por sua imperfeição.",
      },
      {
        type: "tip",
        text: "Misture materiais naturais com intenção: **linho + rattan + cerâmica** formam uma tríade que funciona em qualquer sala. As cortinas de linho cru amarram o conjunto sem precisar competir com os outros elementos.",
      },
      {
        type: "h2",
        id: "texturas",
        text: "Texturas Táteis como Protagonistas",
      },
      {
        type: "p",
        text: "2026 recupera o que as telas não conseguem oferecer: a experiência tátil. Papéis de parede com relevo tridimensional, tecidos com trama visível e persianas com acabamento texturizado criam ambientes que convidam ao toque. A textura virou um argumento de projeto.",
      },
      {
        type: "p",
        text: "O relevo em papel de parede, por exemplo, transforma a forma como a luz percorre a parede ao longo do dia — de manhã cria sombras suaves, à tarde contrasta mais, à noite se mistura com a iluminação artificial. Um único material, múltiplos efeitos.",
      },
      {
        type: "tip",
        text: "Ao misturar texturas, siga a regra dos três planos: **parede texturizada + cortina lisa + tapete com pelo**. Ou o inverso: **parede lisa + cortina texturizada + tapete geométrico**. O que não funciona é textura em tudo ao mesmo tempo.",
      },
      {
        type: "h2",
        id: "minimalismo",
        text: "Minimalismo Aconchegante",
      },
      {
        type: "p",
        text: "Menos elementos, mas cada peça escolhida com profunda intenção. O minimalismo de 2026 abandonou a frieza escandinava dos anos anteriores e ganhou calor: tons quentes, materiais táteis e iluminação suave substituíram o branco asséptico e as superfícies frias.",
      },
      {
        type: "p",
        text: "Persianas rolô em linho ou tela screen se encaixam perfeitamente nesse estilo: são limpas visualmente, mas ricas em textura quando você se aproxima. Cortinas de linho natural com pregas simples completam o visual sem poluir o espaço.",
      },
      {
        type: "h2",
        id: "papel-de-parede",
        text: "Papel de Parede Expressivo: a parede que conversa",
      },
      {
        type: "p",
        text: "O papel de parede deixou de ser fundo e virou protagonista. Em 2026, a tendência é escolher um papel expressivo para uma parede de destaque — e deixar as demais respirarem. Padrões botânicos grandes, relevos geométricos e texturas que imitam materiais naturais (pedra, cimento, juta) lideram as buscas.",
      },
      {
        type: "p",
        text: "A parede com papel de parede pede que o restante do ambiente seja mais contido — cortinas lisas em tom neutro, móveis de linhas simples e iluminação que valorize o relevo. O papel faz o trabalho pesado; o décor sustenta.",
      },
      {
        type: "tip",
        text: "Para parede com papel expressivo, escolha cortinas em **tom análogo ao papel, mas neutro** — se o papel é verde-floresta, vá para o linho cru ou cinza quente. Evite estampas na cortina: o papel já é a estrela.",
      },
      {
        type: "image",
        src: "/images/blog/papel-parede-listrado.jpg",
        alt: "Ambiente com papel de parede listrado e móveis rústicos em madeira",
        caption: "Uma parede com papel expressivo redefine todo o ambiente — o segredo é deixá-la respirar sem competição.",
      },
      { type: "divider" },
      {
        type: "h2",
        id: "como-aplicar",
        text: "Como aplicar essas tendências na prática",
      },
      {
        type: "p",
        text: "Não é preciso reformar tudo para incorporar as tendências de 2026. Pequenas substituições estratégicas já transformam o ambiente:",
      },
      {
        type: "room-guide",
        items: [
          { room: "Sala de estar", fabric: "Cortina de linho em areia ou terracota", why: "Aquece sem reformar — troca rápida e impacto alto" },
          { room: "Quarto de casal", fabric: "Persiana rolô em tela + cortina de linho", why: "Controle de luz e textura natural em camadas" },
          { room: "Sala de jantar", fabric: "Papel de parede expressivo na parede principal", why: "Transforma o ambiente sem mexer nos móveis" },
          { room: "Home office", fabric: "Persiana screen com cortina de linho cru", why: "Foco visual limpo e sem reflexo na tela" },
          { room: "Corredor ou lavabo", fabric: "Papel de parede com relevo ou padrão", why: "Ambiente pequeno suporta mais ousadia" },
          { room: "Varanda", fabric: "Cortina de voil em tom natural", why: "Leveza, luz filtrada e conexão com o exterior" },
        ],
      },
    ],
  },
};

// ─── Static Params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) {
    return { title: "Post não encontrado | Stylo Decore" };
  }
  return {
    title: `${post.title} | Blog Stylo Decore`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="mb-4 font-serif text-3xl font-bold text-[#584738]">
          Post não encontrado
        </h1>
        <Link href="/blog" className="text-primary hover:underline">
          Voltar ao Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = Object.entries(POSTS)
    .filter(([s]) => s !== slug)
    .slice(0, 2)
    .map(([s, p]) => ({ slug: s, ...p }));

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ])}
      />
      <JsonLd
        data={getArticleJsonLd({
          title: post.title,
          description: post.description,
          date: post.date,
          image: post.image,
          slug,
        })}
      />
      <BlogPostClient post={post} slug={slug} relatedPosts={relatedPosts} />
    </>
  );
}

