// Multilingual blog post content — EN and ES translations
// PT content remains in src/app/blog/[slug]/page.tsx (used for server-side metadata)

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "list"; items: string[] }
  | { type: "tip"; text: string }
  | { type: "divider" }
  | { type: "specs"; rows: { label: string; value: string }[] }
  | { type: "room-guide"; items: { room: string; fabric: string; why: string }[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface PostMLContent {
  title: string;
  description: string;
  toc?: { id: string; label: string }[];
  blocks: Block[];
}

export const POSTS_TRANSLATIONS: Record<string, Partial<Record<"en" | "es", PostMLContent>>> = {

  // ─── Post 1: Tecidos ──────────────────────────────────────────────────────────

  "como-escolher-tecido-cortina": {
    en: {
      title: "How to Choose the Ideal Fabric for Your Curtain",
      description:
        "Voile, linen, blackout, silk or velvet? Discover how each fabric affects light, privacy and your room's aesthetic — with practical tips from our specialist.",
      toc: [
        { id: "por-que-importa", label: "Why does fabric matter?" },
        { id: "voil",            label: "Voile" },
        { id: "linho",           label: "Linen" },
        { id: "blackout",        label: "Blackout" },
        { id: "seda",            label: "Silk" },
        { id: "veludo",          label: "Velvet" },
        { id: "guia-rapido",     label: "Room guide" },
      ],
      blocks: [
        {
          type: "h2",
          id: "por-que-importa",
          text: "Why is fabric the most important decision?",
        },
        {
          type: "p",
          text: "The curtain is the textile element with the greatest visual impact in a room — it spans from floor to ceiling, frames the window and interacts directly with incoming light. Choosing a beautiful design in the wrong fabric can result in a room that is too bright, a living area without privacy or a space that overheats in summer.",
        },
        {
          type: "p",
          text: "Before deciding on the style, color or finish, define the fabric. Each material carries three variables that shape the final result: **opacity** (how much light it blocks), **drape** (how it falls and moves) and **texture** (how it relates to the rest of the décor).",
        },
        {
          type: "h2",
          id: "voil",
          text: "Voile — Lightness and Luminosity",
        },
        {
          type: "p",
          text: "Voile is an open-weave, light and translucent fabric that filters light without blocking it. As sunlight passes through voile, it diffuses and creates a soft, uniform brightness that illuminates the room without glare. It is the perfect choice for those who want to maintain a visual connection with the outdoors while still having a veil of privacy.",
        },
        {
          type: "specs",
          rows: [
            { label: "Opacity",     value: "Very low — light and silhouettes pass through" },
            { label: "Drape",       value: "Fluid, ethereal, with gentle movement in the breeze" },
            { label: "Texture",     value: "Smooth and almost invisible — color is the star" },
            { label: "Maintenance", value: "Machine wash (delicate 30°C), dries quickly" },
            { label: "Best for",    value: "Living rooms, offices, covered terraces" },
          ],
        },
        {
          type: "tip",
          text: "Voile works very well **paired with blackout**: the blackout on the inner face ensures privacy at night, and the voile in front softens the light during the day. This is the most requested combination in master bedroom projects.",
        },
        {
          type: "image",
          src: "/images/blog/tecidos-voil.png",
          alt: "Living room with white voile curtains filtering natural light",
          caption: "Voile curtains transform direct sunlight into soft, welcoming diffused light.",
        },
        {
          type: "h2",
          id: "linho",
          text: "Linen — Natural Sophistication",
        },
        {
          type: "p",
          text: "Linen tops the preference of interior designers for a simple reason: it ages well. The slightly irregular weave and visible texture create a depth that synthetic fabrics cannot imitate. Combined with a natural palette — sand, raw, warm grey, olive green — linen works with practically any style.",
        },
        {
          type: "p",
          text: "Available in more and less translucent versions, medium-weight linen is the most versatile: it lets light through in the morning and maintains reasonable privacy at nightfall.",
        },
        {
          type: "specs",
          rows: [
            { label: "Opacity",     value: "Medium — semi-transparent in most weights" },
            { label: "Drape",       value: "Structured, firm, with natural volume" },
            { label: "Texture",     value: "Organic and visible — the greatest charm of the material" },
            { label: "Maintenance", value: "Cold wash, never wring; steam to remove creases" },
            { label: "Best for",    value: "Living rooms, home office, master bedrooms" },
          ],
        },
        {
          type: "tip",
          text: "For minimalist or biophilic projects, linen in **undyed natural tone** is the first choice. It softens incoming light without cutting the sense of connection with the outdoors.",
        },
        {
          type: "h2",
          id: "blackout",
          text: "Blackout — Total Light Control",
        },
        {
          type: "p",
          text: "Blackout is the fabric with the highest functional performance. Its multiple layers with opaque coating block up to 99% of light, while also providing thermal and acoustic insulation. For those who work at night, have babies at home or simply need to sleep in complete darkness, it is the obvious choice.",
        },
        {
          type: "specs",
          rows: [
            { label: "Opacity",     value: "Maximum — 95 to 99% light blocking" },
            { label: "Drape",       value: "Heavy and firm, with excellent side coverage" },
            { label: "Texture",     value: "Variable — smooth, textured, printed or satin" },
            { label: "Maintenance", value: "Regular vacuuming; occasional delicate wash" },
            { label: "Best for",    value: "Bedrooms, home theaters, meeting rooms" },
          ],
        },
        {
          type: "tip",
          text: "Blackout **doesn't have to be dark**. Today there is white, off-white and pastel blackout that works very well in children's rooms and modern spaces. The opaque coating is on the inner face — the outer appearance can be any color.",
        },
        {
          type: "p",
          text: "Blackout also grows in popularity for **home theaters** and meeting rooms, where controlling reflections on TV and projector screens is essential for visual comfort.",
        },
        {
          type: "image",
          src: "/images/blog/tecidos-blackout.png",
          alt: "Master bedroom with blackout curtains, dark and cozy atmosphere",
          caption: "Blackout doesn't mean heavy darkness — in light tones, it creates a serene room with total privacy.",
        },
        {
          type: "h2",
          id: "seda",
          text: "Silk — Pure Refinement",
        },
        {
          type: "p",
          text: "Silk — or artificial silk in its more accessible version — is the fabric of sophistication. Its satin sheen creates a unique play of light that changes with the angle of view. The drape is impeccable: the curtain falls in smooth, symmetrical waves that look hand-positioned.",
        },
        {
          type: "specs",
          rows: [
            { label: "Opacity",     value: "Low to medium — translucent with golden shimmer" },
            { label: "Drape",       value: "Fluid and elegant, with a mirror-like sheen" },
            { label: "Texture",     value: "Very smooth, with satin finish" },
            { label: "Maintenance", value: "Dry clean for natural silk; artificial silk can be cold washed" },
            { label: "Best for",    value: "Dining rooms, master suites, prestigious spaces" },
          ],
        },
        {
          type: "tip",
          text: "Silk works best in rooms with **high ceilings and large windows**. In small windows, the sheen can seem excessive. For everyday use, artificial silk is visually identical, more durable and washable.",
        },
        {
          type: "h2",
          id: "veludo",
          text: "Velvet — Drama and Coziness",
        },
        {
          type: "p",
          text: "Velvet has transformed dining rooms and suites around the world. Its short, dense pile absorbs and reflects light in a unique way, creating a depth of color that no other fabric achieves. The same emerald green appears more intense and saturated in velvet than in any other material.",
        },
        {
          type: "p",
          text: "Beyond aesthetics, velvet has a practical function in winter: its weight and density create a natural thermal barrier, helping to keep the space warm and reducing outside noise.",
        },
        {
          type: "specs",
          rows: [
            { label: "Opacity",     value: "High — blocks light well depending on the weight" },
            { label: "Drape",       value: "Heavy and dramatic, with pronounced volume" },
            { label: "Texture",     value: "Short and tactile pile, with deep velvety color" },
            { label: "Maintenance", value: "Frequent vacuuming; dry clean for premium pieces" },
            { label: "Best for",    value: "Dining rooms, libraries, sophisticated bedrooms" },
          ],
        },
        {
          type: "tip",
          text: "Velvet in **emerald green or navy blue** with a gold rail is a combination that never fails in the dining room. Avoid in very humid rooms or in homes with long-haired pets.",
        },
        { type: "divider" },
        {
          type: "h2",
          id: "guia-rapido",
          text: "Quick guide: right fabric for each room",
        },
        {
          type: "p",
          text: "Use this reference before talking to our specialist — it will help confirm or adjust the choice according to the particularities of your space:",
        },
        {
          type: "room-guide",
          items: [
            { room: "Living Room",      fabric: "Voile or Linen",        why: "Natural light with elegance" },
            { room: "Master Bedroom",   fabric: "Blackout + Voile",      why: "Privacy and lightness together" },
            { room: "Children's Room",  fabric: "Light Blackout",        why: "Quality sleep, soft color" },
            { room: "Dining Room",      fabric: "Velvet or Silk",        why: "Sophistication and drama" },
            { room: "Home Office",      fabric: "Linen or Blackout",     why: "No screen glare, more focus" },
            { room: "Covered Terrace",  fabric: "Voile or Outdoor Fabric",why: "Resistance for open environments" },
          ],
        },
      ],
    },

    es: {
      title: "Cómo Elegir la Tela Ideal para su Cortina",
      description:
        "¿Voile, lino, blackout, seda o terciopelo? Descubra cómo cada tela influye en la luz, la privacidad y la estética de su ambiente — con consejos prácticos de nuestra especialista.",
      toc: [
        { id: "por-que-importa", label: "¿Por qué importa la tela?" },
        { id: "voil",            label: "Voile" },
        { id: "linho",           label: "Lino" },
        { id: "blackout",        label: "Blackout" },
        { id: "seda",            label: "Seda" },
        { id: "veludo",          label: "Terciopelo" },
        { id: "guia-rapido",     label: "Guía por ambiente" },
      ],
      blocks: [
        {
          type: "h2",
          id: "por-que-importa",
          text: "¿Por qué la tela es la decisión más importante?",
        },
        {
          type: "p",
          text: "La cortina es el elemento textil de mayor impacto visual en un ambiente — ocupa desde el suelo hasta el techo, enmarca la ventana e interactúa directamente con la luz que entra. Elegir un modelo hermoso en la tela incorrecta puede resultar en un cuarto demasiado luminoso, una sala sin privacidad o un ambiente que se calienta demasiado en verano.",
        },
        {
          type: "p",
          text: "Antes de decidir el modelo, el color o el acabado, defina la tela. Cada material tiene tres variables que moldean el resultado final: **opacidad** (cuánta luz bloquea), **caída** (cómo cae y se mueve) y **textura** (cómo dialoga con el resto de la decoración).",
        },
        {
          type: "h2",
          id: "voil",
          text: "Voile — Ligereza y Luminosidad",
        },
        {
          type: "p",
          text: "El voile es una tela de trama abierta, liviana y traslúcida, que filtra la luz sin bloquearla. Al atravesar el voile, la luz solar se difunde y crea esa claridad suave y uniforme que ilumina el ambiente sin deslumbrar. Es la elección perfecta para quienes quieren mantener la conexión visual con el exterior sin prescindir de un velo de privacidad.",
        },
        {
          type: "specs",
          rows: [
            { label: "Opacidad",      value: "Muy baja — la luz y las siluetas atraviesan la tela" },
            { label: "Caída",         value: "Fluida, etérea, con movimiento suave al viento" },
            { label: "Textura",       value: "Lisa y casi invisible — el color es el protagonista" },
            { label: "Mantenimiento", value: "Máquina (ciclo delicado 30°C), seca rápido" },
            { label: "Indicado para", value: "Salas de estar, oficinas, terrazas cubiertas" },
          ],
        },
        {
          type: "tip",
          text: "El voile funciona muy bien **combinado con blackout**: el blackout en la cara interna garantiza privacidad por la noche, y el voile al frente suaviza la luz durante el día. Es la combinación más solicitada en proyectos de dormitorio principal.",
        },
        {
          type: "image",
          src: "/images/blog/tecidos-voil.png",
          alt: "Sala de estar con cortinas de voile blanco filtrando la luz natural",
          caption: "Las cortinas de voile transforman la luz solar directa en claridad difusa y acogedora.",
        },
        {
          type: "h2",
          id: "linho",
          text: "Lino — Sofisticación Natural",
        },
        {
          type: "p",
          text: "El lino está en lo más alto de la preferencia de los diseñadores de interiores por una razón simple: envejece bien. La trama ligeramente irregular y la textura visible crean una profundidad que las telas sintéticas no pueden imitar. Combinado con la paleta natural — arena, crudo, gris cálido, verde oliva — el lino combina con prácticamente cualquier estilo.",
        },
        {
          type: "p",
          text: "Disponible en versiones más y menos traslúcidas, el lino de gramaje medio es el más versátil: deja pasar luz por la mañana y mantiene privacidad razonable al anochecer.",
        },
        {
          type: "specs",
          rows: [
            { label: "Opacidad",      value: "Media — semitransparente en la mayoría de los gramajes" },
            { label: "Caída",         value: "Estructurada, firme, con volumen natural" },
            { label: "Textura",       value: "Orgánica y visible — el mayor encanto del material" },
            { label: "Mantenimiento", value: "Lavar en frío, nunca retorcer; vapor para destorcer" },
            { label: "Indicado para", value: "Salas de estar, home office, dormitorio principal" },
          ],
        },
        {
          type: "tip",
          text: "Para proyectos minimalistas o con inspiración biofílica, el lino en **tono natural sin teñir** es la primera elección. Suaviza la entrada de luz sin cortar la sensación de conexión con el exterior.",
        },
        {
          type: "h2",
          id: "blackout",
          text: "Blackout — Control Total de Luz",
        },
        {
          type: "p",
          text: "El blackout es la tela de mayor rendimiento funcional. Sus múltiples capas con revestimiento opaco bloquean hasta el 99% de la luz, además de ofrecer aislamiento térmico y acústico. Para quienes trabajan de noche, tienen bebés en casa o simplemente necesitan dormir en oscuridad total, es la elección obvia.",
        },
        {
          type: "specs",
          rows: [
            { label: "Opacidad",      value: "Máxima — 95 a 99% de bloqueo de luz" },
            { label: "Caída",         value: "Pesada y firme, con excelente cobertura lateral" },
            { label: "Textura",       value: "Variable — liso, texturizado, estampado o satinado" },
            { label: "Mantenimiento", value: "Aspirado regular; lavado eventual delicado" },
            { label: "Indicado para", value: "Dormitorios, home theater, salas de reunión" },
          ],
        },
        {
          type: "tip",
          text: "El blackout **no tiene que ser oscuro**. Hoy existe blackout blanco, crudo y en tonos pastel que funcionan muy bien en habitaciones infantiles y ambientes modernos. El revestimiento opaco está en la cara interna — la apariencia externa puede ser cualquier color.",
        },
        {
          type: "p",
          text: "El blackout también crece en **home theaters domésticos** y salas de reunión, donde el control del reflejo en pantallas de TV y proyectores es esencial para la comodidad visual.",
        },
        {
          type: "image",
          src: "/images/blog/tecidos-blackout.png",
          alt: "Dormitorio principal con cortinas blackout, ambiente oscuro y acogedor",
          caption: "Blackout no significa oscuridad pesada — en tonos claros, crea un dormitorio sereno y con privacidad total.",
        },
        {
          type: "h2",
          id: "seda",
          text: "Seda — Puro Refinamiento",
        },
        {
          type: "p",
          text: "La seda — o el silk artificial en su versión más accesible — es la tela de la sofisticación. Su brillo satinado crea un juego de luz único que cambia según el ángulo de visión. La caída es impecable: la cortina desciende en ondas suaves y simétricas que parecen colocadas a mano.",
        },
        {
          type: "specs",
          rows: [
            { label: "Opacidad",      value: "Baja a media — traslúcida con reflejo dorado" },
            { label: "Caída",         value: "Fluida y elegante, con brillo espejado" },
            { label: "Textura",       value: "Muy lisa, con acabado satinado" },
            { label: "Mantenimiento", value: "Lavado en seco para seda natural; silk puede ir en frío" },
            { label: "Indicado para", value: "Comedores, suite principal, ambientes nobles" },
          ],
        },
        {
          type: "tip",
          text: "La seda funciona mejor en ambientes con **techos altos y ventanas grandes**. En ventanas pequeñas, el brillo puede parecer excesivo. Para el uso cotidiano, el silk artificial es visualmente idéntico, más resistente y lavable.",
        },
        {
          type: "h2",
          id: "veludo",
          text: "Terciopelo — Drama y Acogimiento",
        },
        {
          type: "p",
          text: "El terciopelo ha transformado comedores y suites en todo el mundo. Su pelo corto y denso absorbe y refleja la luz de manera única, creando una profundidad de color que ninguna otra tela alcanza. El mismo verde esmeralda parece más intenso y saturado en terciopelo que en cualquier otro material.",
        },
        {
          type: "p",
          text: "Más allá de la estética, el terciopelo tiene una función práctica en invierno: su peso y densidad crean una barrera térmica natural, ayudando a mantener el ambiente cálido y reduciendo el ruido exterior.",
        },
        {
          type: "specs",
          rows: [
            { label: "Opacidad",      value: "Alta — bloquea bien la luz dependiendo del gramaje" },
            { label: "Caída",         value: "Pesada y dramática, con volumen pronunciado" },
            { label: "Textura",       value: "Pelo corto y táctil, con color profundo y aterciopelado" },
            { label: "Mantenimiento", value: "Aspirado frecuente; lavado en seco para piezas nobles" },
            { label: "Indicado para", value: "Comedores, bibliotecas, dormitorios sofisticados" },
          ],
        },
        {
          type: "tip",
          text: "Terciopelo en **verde esmeralda o azul marino** con riel dorado es una combinación que nunca falla en el comedor. Evite en ambientes muy húmedos o en casas con mascotas de pelo largo.",
        },
        { type: "divider" },
        {
          type: "h2",
          id: "guia-rapido",
          text: "Guía rápida: tela correcta para cada ambiente",
        },
        {
          type: "p",
          text: "Use esta referencia antes de hablar con nuestra especialista — le ayudará a confirmar o ajustar la elección según las particularidades de su espacio:",
        },
        {
          type: "room-guide",
          items: [
            { room: "Sala de Estar",      fabric: "Voile o Lino",             why: "Luz natural con elegancia" },
            { room: "Dormitorio Principal",fabric: "Blackout + Voile",         why: "Privacidad y ligereza juntas" },
            { room: "Cuarto Infantil",     fabric: "Blackout claro",           why: "Sueño de calidad, color suave" },
            { room: "Comedor",             fabric: "Terciopelo o Seda",        why: "Sofisticación y drama" },
            { room: "Home Office",         fabric: "Lino o Blackout",          why: "Sin reflejo en pantalla, más foco" },
            { room: "Terraza Cubierta",    fabric: "Voile o Tela Exterior",    why: "Resistencia al ambiente abierto" },
          ],
        },
      ],
    },
  },

  // ─── Post 2: Motorização ──────────────────────────────────────────────────────

  "motorizacao-persianas-vale-a-pena": {
    en: {
      title: "Motorized Blinds: Is It Worth It?",
      description:
        "Convenience, safety and home automation: find out when to invest in motorized blinds, what motor types exist and what to consider before deciding.",
      toc: [
        { id: "manual-vs-motorizado", label: "Manual vs Motorized" },
        { id: "vantagens",            label: "Advantages" },
        { id: "tipos-de-motor",       label: "Motor types" },
        { id: "quando-investir",      label: "When is it worth it?" },
        { id: "custo-beneficio",      label: "Cost-benefit" },
      ],
      blocks: [
        {
          type: "p",
          text: "Imagine waking up with the blinds opening by themselves at sunrise, or closing all the windows in the house with a single voice command before leaving. This is no longer hotel luxury — it's accessible technology that transforms the daily routine at home. But is motorized blinds worth the investment for your situation?",
        },
        {
          type: "h2",
          id: "manual-vs-motorizado",
          text: "Manual vs Motorized: what's the real difference?",
        },
        {
          type: "p",
          text: "Manual blinds work well — and have their place. But when the window is large, located in a hard-to-reach spot, or when the project involves several rooms, manual operation starts to become a daily problem. Motorization solves exactly this.",
        },
        {
          type: "specs",
          rows: [
            { label: "Operation",     value: "Manual: cord or chain · Motorized: remote, app or voice" },
            { label: "Automation",    value: "Manual: no · Motorized: schedules, sensors and programmable scenes" },
            { label: "Access",        value: "Manual: physical presence · Motorized: from anywhere" },
            { label: "Wear",          value: "Manual: cords and rails suffer more · Motorized: controlled movement" },
            { label: "Installation",  value: "Manual: simple · Motorized: requires power point or battery" },
          ],
        },
        {
          type: "image",
          src: "/images/blog/persianas-motorizadas-controle.jpg",
          alt: "Motorized roller blind being controlled by remote in a residential setting",
          caption: "Motorized blinds integrate perfectly into modern spaces — no visible cords, no exposed mechanisms.",
        },
        {
          type: "h2",
          id: "vantagens",
          text: "Advantages that make a real difference every day",
        },
        {
          type: "list",
          items: [
            "**Total convenience**: remote control, phone app or voice command — without leaving the sofa",
            "**Presence simulation**: program automatic openings and closings when you are traveling",
            "**Accessibility**: ideal for high windows, glass balconies and people with reduced mobility",
            "**Smart home integration**: compatible with Alexa, Google Home, Apple HomeKit and Tuya systems",
            "**Fabric protection**: precise movement avoids irregular folds and extends the lifespan of the blind",
            "**Programmed thermal comfort**: automatically close at the peak sun hours and reduce heat without thinking about it",
          ],
        },
        {
          type: "tip",
          text: "Blinds programmed to open **gradually between 6am and 7am** simulate sunrise inside the bedroom — a much gentler awakening than any alarm clock, and approved by sleep specialists.",
        },
        {
          type: "image",
          src: "/images/blog/persianas-app-controle.jpg",
          alt: "Person controlling motorized blind through smartphone app",
          caption: "Integration with Alexa, Google Home and Apple HomeKit turns blinds into part of the smart home ecosystem.",
        },
        {
          type: "h2",
          id: "tipos-de-motor",
          text: "Motor types: which one to choose?",
        },
        {
          type: "p",
          text: "Not all motors are the same. The right choice depends on the type of blind, the window size and the electrical infrastructure available in the room.",
        },
        {
          type: "specs",
          rows: [
            { label: "Tube motor",    value: "Built into the roller — invisible, silent, ideal for roller and double vision" },
            { label: "Side motor",    value: "Mounted on the side — more affordable, suitable for horizontal blinds" },
            { label: "Solar motor",   value: "Powered by solar panel — no wiring, no construction, ideal for balconies" },
            { label: "Battery motor", value: "No power point required — practical for renovations and rentals" },
            { label: "220V motor",    value: "High performance for large, heavy blinds such as screen fabric blinds" },
          ],
        },
        {
          type: "h2",
          id: "quando-investir",
          text: "When does motorization really pay off?",
        },
        {
          type: "p",
          text: "It's not necessary to motorize everything. The smart decision is to prioritize the rooms and situations where the comfort gain is most evident:",
        },
        {
          type: "room-guide",
          items: [
            { room: "High windows or balconies",  fabric: "High priority",          why: "Difficult or impossible physical access" },
            { room: "Master bedroom",              fabric: "Recommended",            why: "Light control without getting out of bed" },
            { room: "Room with glass wall",        fabric: "High priority",          why: "Multiple blinds in sync" },
            { room: "Home office",                 fabric: "Recommended",            why: "Glare control without interrupting work" },
            { room: "Children's bedroom",          fabric: "Optional",               why: "Safety: no cords accessible to children" },
            { room: "Commercial spaces",           fabric: "Highly recommended",     why: "Centralized light and privacy control" },
          ],
        },
        {
          type: "h2",
          id: "custo-beneficio",
          text: "Cost-benefit: what to consider",
        },
        {
          type: "p",
          text: "The motor adds between 30% and 60% to the cost of a manual blind, depending on the model and type of operation. For a quality roller blind, the price difference is usually smaller than most people imagine — especially when compared to the total value of a decoration project.",
        },
        {
          type: "p",
          text: "In addition to convenience, consider two factors that tend to be underestimated: **durability** (good quality motors come with a 5-year warranty and a much longer lifespan) and **property value** — home automation is a real differentiator in the real estate market.",
        },
        {
          type: "tip",
          text: "If the budget is tight, start with the highest-impact rooms — usually the master bedroom and the main living room. It's much easier to motorize a blind during installation than to retrofit it later.",
        },
        { type: "divider" },
        {
          type: "p",
          text: "Want to know if motorization makes sense for your project? Our team evaluates the room, the type of blind and your budget to recommend the most efficient solution.",
        },
      ],
    },

    es: {
      title: "Persianas Motorizadas: ¿Vale la Pena?",
      description:
        "Practicidad, seguridad y domótica: descubra cuándo invertir en persianas motorizadas, qué tipos de motor existen y qué considerar antes de decidir.",
      toc: [
        { id: "manual-vs-motorizado", label: "Manual vs Motorizado" },
        { id: "vantagens",            label: "Ventajas" },
        { id: "tipos-de-motor",       label: "Tipos de motor" },
        { id: "quando-investir",      label: "¿Cuándo vale la pena?" },
        { id: "custo-beneficio",      label: "Costo-beneficio" },
      ],
      blocks: [
        {
          type: "p",
          text: "Imagine despertar con las persianas abriéndose solas al amanecer, o cerrar todas las ventanas de la casa con un único comando de voz antes de salir. Esto ya no es lujo de hotel — es tecnología accesible que transforma la rutina en casa. Pero ¿vale la pena la inversión en persianas motorizadas para su caso?",
        },
        {
          type: "h2",
          id: "manual-vs-motorizado",
          text: "Manual vs Motorizado: ¿cuál es la diferencia real?",
        },
        {
          type: "p",
          text: "Las persianas manuales funcionan bien — y tienen su lugar. Pero cuando la ventana es grande, está en un lugar de difícil acceso, o cuando el proyecto involucra varios ambientes, el accionamiento manual empieza a ser un problema cotidiano. La motorización resuelve exactamente eso.",
        },
        {
          type: "specs",
          rows: [
            { label: "Accionamiento",  value: "Manual: cordón o cadena · Motorizado: control, app o voz" },
            { label: "Automatización", value: "Manual: no · Motorizado: horarios, sensores y escenas programables" },
            { label: "Acceso",         value: "Manual: presencia física · Motorizado: desde cualquier lugar" },
            { label: "Desgaste",       value: "Manual: cordones y rieles sufren más · Motorizado: movimiento controlado" },
            { label: "Instalación",    value: "Manual: simple · Motorizado: requiere punto de energía o batería" },
          ],
        },
        {
          type: "image",
          src: "/images/blog/persianas-motorizadas-controle.jpg",
          alt: "Persiana enrollable motorizada siendo controlada por control remoto en ambiente residencial",
          caption: "Las persianas motorizadas se integran perfectamente en ambientes modernos — sin cordones visibles, sin mecanismos aparentes.",
        },
        {
          type: "h2",
          id: "vantagens",
          text: "Ventajas que marcan la diferencia en el día a día",
        },
        {
          type: "list",
          items: [
            "**Practicidad total**: control remoto, app en el móvil o comando de voz — sin levantarse del sofá",
            "**Simulación de presencia**: programe aperturas y cierres automáticos cuando esté de viaje",
            "**Accesibilidad**: ideal para ventanas altas, terrazas acristaladas y personas con movilidad reducida",
            "**Integración con smart home**: compatible con Alexa, Google Home, Apple HomeKit y sistemas Tuya",
            "**Protección de la tela**: el movimiento preciso evita pliegues irregulares y prolonga la vida útil de la persiana",
            "**Confort térmico programado**: cierre automáticamente en el horario de mayor incidencia solar y reduzca el calor sin pensarlo",
          ],
        },
        {
          type: "tip",
          text: "Las persianas programadas para abrirse **gradualmente entre las 6h y las 7h** simulan el amanecer dentro del dormitorio — un despertar mucho más suave que cualquier alarma, aprobado por especialistas del sueño.",
        },
        {
          type: "image",
          src: "/images/blog/persianas-app-controle.jpg",
          alt: "Persona controlando persiana motorizada por aplicación en smartphone",
          caption: "La integración con Alexa, Google Home y Apple HomeKit convierte las persianas en parte del ecosistema del hogar inteligente.",
        },
        {
          type: "h2",
          id: "tipos-de-motor",
          text: "Tipos de motor: ¿cuál elegir?",
        },
        {
          type: "p",
          text: "No todos los motores son iguales. La elección correcta depende del tipo de persiana, del tamaño de la ventana y de la infraestructura eléctrica disponible en el ambiente.",
        },
        {
          type: "specs",
          rows: [
            { label: "Motor de tubo",   value: "Embutido en el rollo — invisible, silencioso, ideal para enrollable y double vision" },
            { label: "Motor lateral",   value: "Fijado en el lateral — más económico, indicado para persianas horizontales" },
            { label: "Motor solar",     value: "Alimentado por panel fotovoltaico — sin cable, sin obra, ideal para terrazas" },
            { label: "Motor a batería", value: "Sin punto de energía necesario — práctico para reformas y alquileres" },
            { label: "Motor 220V",      value: "Alta potencia para persianas grandes y pesadas, como las de tela screen" },
          ],
        },
        {
          type: "h2",
          id: "quando-investir",
          text: "¿Cuándo vale realmente la pena motorizar?",
        },
        {
          type: "p",
          text: "No es necesario motorizar todo. La decisión inteligente es priorizar los ambientes y situaciones donde la ganancia en confort es más evidente:",
        },
        {
          type: "room-guide",
          items: [
            { room: "Ventanas altas o terrazas",   fabric: "Prioridad alta",           why: "Acceso físico difícil o imposible" },
            { room: "Dormitorio principal",         fabric: "Recomendado",              why: "Control de luz sin salir de la cama" },
            { room: "Sala con pared de vidrio",     fabric: "Prioridad alta",           why: "Múltiples persianas en sincronía" },
            { room: "Home office",                  fabric: "Recomendado",              why: "Control de reflejo sin interrumpir el trabajo" },
            { room: "Cuarto infantil",              fabric: "Opcional",                 why: "Seguridad: sin cordones accesibles para niños" },
            { room: "Ambientes comerciales",        fabric: "Altamente recomendado",    why: "Control centralizado de luz y privacidad" },
          ],
        },
        {
          type: "h2",
          id: "custo-beneficio",
          text: "Costo-beneficio: qué considerar",
        },
        {
          type: "p",
          text: "El motor agrega entre el 30% y el 60% al costo de una persiana manual, dependiendo del modelo y del tipo de accionamiento. Para una persiana enrollable de calidad, la diferencia suele ser menor de lo que mucha gente imagina — especialmente comparada con el valor total de un proyecto de decoración.",
        },
        {
          type: "p",
          text: "Además de la practicidad, considere dos factores que suelen subestimarse: la **durabilidad** (los motores de buena procedencia tienen garantía de 5 años y vida útil mucho mayor) y la **valorización del inmueble** — la domótica es un diferencial real en el mercado inmobiliario.",
        },
        {
          type: "tip",
          text: "Si el presupuesto es limitado, comience por los ambientes de mayor impacto — generalmente el dormitorio principal y la sala principal. Es mucho más fácil motorizar una persiana en la instalación que hacer un retrofit después.",
        },
        { type: "divider" },
        {
          type: "p",
          text: "¿Quiere saber si la motorización tiene sentido para su proyecto? Nuestro equipo evalúa el ambiente, el tipo de persiana y su presupuesto para indicar la solución más eficiente.",
        },
      ],
    },
  },

  // ─── Post 3: Tendências ───────────────────────────────────────────────────────

  "tendencias-decoracao-2026": {
    en: {
      title: "2026 Décor Trends: What to Expect",
      description:
        "Earthy tones, natural materials, tactile textures and cozy minimalism: see how to apply the top 2026 decoration trends with curtains, blinds and wallpaper.",
      toc: [
        { id: "cores-terrosas",   label: "Earthy Colors" },
        { id: "materiais-naturais",label: "Natural Materials" },
        { id: "texturas",         label: "Tactile Textures" },
        { id: "minimalismo",      label: "Cozy Minimalism" },
        { id: "papel-de-parede",  label: "Expressive Wallpaper" },
        { id: "como-aplicar",     label: "How to apply in practice" },
      ],
      blocks: [
        {
          type: "p",
          text: "2026 is the year of balance: after an era of visual excess, the decoration market is moving toward spaces that combine sophistication with real comfort. The word of the year is **intention** — every chosen piece has a reason to be there, and curtains, blinds and wallpaper are leading this transformation.",
        },
        {
          type: "h2",
          id: "cores-terrosas",
          text: "Earthy Colors Dominate the Palette",
        },
        {
          type: "p",
          text: "Shades of terracotta, sand, caramel, sienna and olive green dominate the 2026 palette. These colors bring immediate coziness and a sense of connection with nature that urban environments so desperately need. They function as warm neutrals — they don't compete with the furniture, but warm the room effortlessly.",
        },
        {
          type: "specs",
          rows: [
            { label: "Standout tone",  value: "Terracotta, burnt sienna, caramel" },
            { label: "Warm neutrals",  value: "Sand, raw, cappuccino, beige grey" },
            { label: "Vegetal accent", value: "Olive green, sage, muted moss" },
            { label: "Where to apply", value: "Curtains, wallpaper, cushions and rugs" },
            { label: "Pairs with",     value: "Natural wood, rattan, ceramic and copper metal" },
          ],
        },
        {
          type: "tip",
          text: "Curtains in **terracotta or sand** in front of white walls create a warm contrast that heats the room without overloading it. Let the curtain be the statement piece — and simplify everything else.",
        },
        {
          type: "image",
          src: "/images/blog/sala-tons-terrosos.jpg",
          alt: "Living room with earthy color palette, terracotta chairs and warm lighting",
          caption: "Earthy tones create depth and warmth without competing with the furniture — the palette that defines 2026.",
        },
        {
          type: "h2",
          id: "materiais-naturais",
          text: "Natural Materials on the Rise",
        },
        {
          type: "p",
          text: "Natural fibers such as linen, organic cotton, jute and bamboo take absolute center stage. It's not just an aesthetic issue: sustainability has become a real purchasing criterion. Organic linen curtains, bamboo blinds and wallpaper with a natural base reflect this movement.",
        },
        {
          type: "p",
          text: "The appeal goes beyond looks — it's about texture you can feel, imperfections that give identity and materials that age well. In a world of digital surfaces and synthetic finishes, the natural stands out precisely for its imperfection.",
        },
        {
          type: "tip",
          text: "Mix natural materials with intention: **linen + rattan + ceramic** form a trio that works in any living room. Raw linen curtains tie the whole together without competing with the other elements.",
        },
        {
          type: "h2",
          id: "texturas",
          text: "Tactile Textures as the Protagonist",
        },
        {
          type: "p",
          text: "2026 reclaims what screens cannot offer: the tactile experience. Three-dimensional wallpaper, fabrics with a visible weave and blinds with a textured finish create spaces that invite touch. Texture has become a design argument.",
        },
        {
          type: "p",
          text: "Textured wallpaper, for example, transforms how light moves across the wall throughout the day — in the morning it creates soft shadows, in the afternoon stronger contrast, at night it blends with artificial lighting. One material, multiple effects.",
        },
        {
          type: "tip",
          text: "When mixing textures, follow the three-plane rule: **textured wall + plain curtain + pile rug**. Or the reverse: **plain wall + textured curtain + geometric rug**. What doesn't work is texture everywhere at once.",
        },
        {
          type: "h2",
          id: "minimalismo",
          text: "Cozy Minimalism",
        },
        {
          type: "p",
          text: "Fewer elements, but each piece chosen with deep intention. The minimalism of 2026 has abandoned the Scandinavian coldness of previous years and gained warmth: warm tones, tactile materials and soft lighting have replaced the aseptic white and cold surfaces.",
        },
        {
          type: "p",
          text: "Roller blinds in linen or screen fabric fit perfectly into this style: they are visually clean, but rich in texture when you get close. Natural linen curtains with simple pleats complete the look without cluttering the space.",
        },
        {
          type: "h2",
          id: "papel-de-parede",
          text: "Expressive Wallpaper: the wall that speaks",
        },
        {
          type: "p",
          text: "Wallpaper has stopped being a background and become the protagonist. In 2026, the trend is to choose an expressive wallpaper for one feature wall — and let the others breathe. Large botanical patterns, geometric reliefs and textures that mimic natural materials (stone, concrete, jute) lead the searches.",
        },
        {
          type: "p",
          text: "A wallpaper wall calls for the rest of the room to be more restrained — plain curtains in a neutral tone, furniture with simple lines and lighting that enhances the texture. The wallpaper does the heavy lifting; the décor supports.",
        },
        {
          type: "tip",
          text: "For a wall with expressive wallpaper, choose curtains in **an analogous tone to the wallpaper, but neutral** — if the wallpaper is forest green, go for raw linen or warm grey. Avoid prints on the curtain: the wallpaper is already the star.",
        },
        {
          type: "image",
          src: "/images/blog/papel-parede-listrado.jpg",
          alt: "Room with striped wallpaper and rustic wooden furniture",
          caption: "A wall with expressive wallpaper redefines the entire room — the secret is to let it breathe without competition.",
        },
        { type: "divider" },
        {
          type: "h2",
          id: "como-aplicar",
          text: "How to apply these trends in practice",
        },
        {
          type: "p",
          text: "You don't need to renovate everything to incorporate 2026 trends. Small strategic substitutions already transform the space:",
        },
        {
          type: "room-guide",
          items: [
            { room: "Living room",     fabric: "Linen curtain in sand or terracotta",    why: "Warms up without renovating — quick swap, high impact" },
            { room: "Master bedroom",  fabric: "Roller screen blind + linen curtain",     why: "Light control and natural texture in layers" },
            { room: "Dining room",     fabric: "Expressive wallpaper on the main wall",   why: "Transforms the room without touching the furniture" },
            { room: "Home office",     fabric: "Screen blind with raw linen curtain",     why: "Clean visual focus and no screen glare" },
            { room: "Hallway or WC",   fabric: "Wallpaper with texture or pattern",       why: "Small space can handle more boldness" },
            { room: "Terrace",         fabric: "Natural-tone voile curtain",              why: "Lightness, filtered light and connection with the outdoors" },
          ],
        },
      ],
    },

    es: {
      title: "Tendencias de Decoración 2026: Qué Esperar",
      description:
        "Colores terrosos, materiales naturales, texturas táctiles y minimalismo acogedor: vea cómo aplicar las principales tendencias de decoración de 2026 con cortinas, persianas y papel tapiz.",
      toc: [
        { id: "cores-terrosas",    label: "Colores Terrosos" },
        { id: "materiais-naturais",label: "Materiales Naturales" },
        { id: "texturas",          label: "Texturas Táctiles" },
        { id: "minimalismo",       label: "Minimalismo Acogedor" },
        { id: "papel-de-parede",   label: "Papel Tapiz Expresivo" },
        { id: "como-aplicar",      label: "Cómo aplicar en la práctica" },
      ],
      blocks: [
        {
          type: "p",
          text: "2026 es el año del equilibrio: tras una era de excesos visuales, el mercado de decoración camina hacia ambientes que combinan sofisticación con confort real. La palabra del año es **intención** — cada pieza elegida tiene una razón de estar ahí, y las cortinas, persianas y papeles tapiz lideran esta transformación.",
        },
        {
          type: "h2",
          id: "cores-terrosas",
          text: "Los Colores Terrosos Dominan la Paleta",
        },
        {
          type: "p",
          text: "Tonos de terracota, arena, caramelo, siena y verde oliva dominan la paleta de 2026. Estos colores aportan calidez inmediata y una sensación de conexión con la naturaleza que los ambientes urbanos tanto necesitan. Son colores que funcionan como neutros cálidos — no compiten con los muebles, pero calientan el ambiente sin esfuerzo.",
        },
        {
          type: "specs",
          rows: [
            { label: "Tono destacado",  value: "Terracota, siena quemado, caramelo" },
            { label: "Neutros cálidos", value: "Arena, crudo, cappuccino, gris beige" },
            { label: "Acento vegetal",  value: "Verde oliva, sage, musgo apagado" },
            { label: "Dónde aplicar",   value: "Cortinas, papel tapiz, almohadones y alfombras" },
            { label: "Combina con",     value: "Madera natural, ratán, cerámica y metal cobre" },
          ],
        },
        {
          type: "tip",
          text: "Cortinas en **terracota o arena** frente a paredes blancas crean un contraste cálido que calienta el ambiente sin sobrecargarlo. Deje que la cortina sea la pieza protagonista — y simplifique el resto.",
        },
        {
          type: "image",
          src: "/images/blog/sala-tons-terrosos.jpg",
          alt: "Sala de estar con paleta de colores terrosos, sillas terracota e iluminación cálida",
          caption: "Los tonos terrosos crean profundidad y calor sin competir con los muebles — la paleta que define el 2026.",
        },
        {
          type: "h2",
          id: "materiais-naturais",
          text: "Materiales Naturales en Auge",
        },
        {
          type: "p",
          text: "Las fibras naturales como el lino, el algodón orgánico, el yute y el bambú ganan protagonismo absoluto. No es solo una cuestión estética: la sostenibilidad se ha convertido en un criterio real de compra. Las cortinas de lino orgánico, las persianas de bambú y los papeles tapiz con base natural reflejan este movimiento.",
        },
        {
          type: "p",
          text: "El atractivo va más allá de lo visual — se trata de texturas que se sienten al tacto, imperfecciones que confieren identidad y materiales que envejecen bien. En un mundo de superficies digitales y acabados sintéticos, lo natural se destaca exactamente por su imperfección.",
        },
        {
          type: "tip",
          text: "Mezcle materiales naturales con intención: **lino + ratán + cerámica** forman una tríada que funciona en cualquier sala. Las cortinas de lino crudo unen el conjunto sin necesidad de competir con los demás elementos.",
        },
        {
          type: "h2",
          id: "texturas",
          text: "Texturas Táctiles como Protagonistas",
        },
        {
          type: "p",
          text: "2026 recupera lo que las pantallas no pueden ofrecer: la experiencia táctil. Los papeles tapiz con relieve tridimensional, las telas con trama visible y las persianas con acabado texturizado crean ambientes que invitan al tacto. La textura se ha convertido en un argumento de proyecto.",
        },
        {
          type: "p",
          text: "El relieve en papel tapiz, por ejemplo, transforma la forma en que la luz recorre la pared a lo largo del día — por la mañana crea sombras suaves, por la tarde contrasta más, por la noche se mezcla con la iluminación artificial. Un único material, múltiples efectos.",
        },
        {
          type: "tip",
          text: "Al mezclar texturas, siga la regla de los tres planos: **pared texturizada + cortina lisa + alfombra con pelo**. O al revés: **pared lisa + cortina texturizada + alfombra geométrica**. Lo que no funciona es textura en todo al mismo tiempo.",
        },
        {
          type: "h2",
          id: "minimalismo",
          text: "Minimalismo Acogedor",
        },
        {
          type: "p",
          text: "Menos elementos, pero cada pieza elegida con profunda intención. El minimalismo de 2026 abandonó la frialdad escandinava de los años anteriores y ganó calidez: tonos cálidos, materiales táctiles e iluminación suave reemplazaron el blanco aséptico y las superficies frías.",
        },
        {
          type: "p",
          text: "Las persianas enrollables en lino o tela screen encajan perfectamente en este estilo: son limpias visualmente, pero ricas en textura cuando se acerca. Las cortinas de lino natural con pliegues simples completan el visual sin contaminar el espacio.",
        },
        {
          type: "h2",
          id: "papel-de-parede",
          text: "Papel Tapiz Expresivo: la pared que habla",
        },
        {
          type: "p",
          text: "El papel tapiz dejó de ser fondo y se convirtió en protagonista. En 2026, la tendencia es elegir un papel expresivo para una pared de destaque — y dejar que las demás respiren. Patrones botánicos grandes, relieves geométricos y texturas que imitan materiales naturales (piedra, cemento, yute) lideran las búsquedas.",
        },
        {
          type: "p",
          text: "La pared con papel tapiz pide que el resto del ambiente sea más contenido — cortinas lisas en tono neutro, muebles de líneas simples e iluminación que valorice el relieve. El papel hace el trabajo pesado; la decoración lo sostiene.",
        },
        {
          type: "tip",
          text: "Para una pared con papel expresivo, elija cortinas en **tono análogo al papel, pero neutro** — si el papel es verde bosque, opte por lino crudo o gris cálido. Evite estampados en la cortina: el papel ya es la estrella.",
        },
        {
          type: "image",
          src: "/images/blog/papel-parede-listrado.jpg",
          alt: "Ambiente con papel tapiz rayado y muebles rústicos de madera",
          caption: "Una pared con papel expresivo redefine todo el ambiente — el secreto es dejarla respirar sin competencia.",
        },
        { type: "divider" },
        {
          type: "h2",
          id: "como-aplicar",
          text: "Cómo aplicar estas tendencias en la práctica",
        },
        {
          type: "p",
          text: "No es necesario reformar todo para incorporar las tendencias de 2026. Pequeñas sustituciones estratégicas ya transforman el ambiente:",
        },
        {
          type: "room-guide",
          items: [
            { room: "Sala de estar",       fabric: "Cortina de lino en arena o terracota",      why: "Calienta sin reformar — cambio rápido y alto impacto" },
            { room: "Dormitorio principal", fabric: "Persiana screen + cortina de lino",          why: "Control de luz y textura natural en capas" },
            { room: "Comedor",             fabric: "Papel tapiz expresivo en la pared principal", why: "Transforma el ambiente sin tocar los muebles" },
            { room: "Home office",         fabric: "Persiana screen con cortina de lino crudo",  why: "Foco visual limpio y sin reflejo en pantalla" },
            { room: "Pasillo o lavabo",    fabric: "Papel tapiz con relieve o patrón",           why: "Ambiente pequeño soporta más audacia" },
            { room: "Terraza",             fabric: "Cortina de voile en tono natural",           why: "Ligereza, luz filtrada y conexión con el exterior" },
          ],
        },
      ],
    },
  },
};
