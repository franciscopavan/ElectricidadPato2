import { QuizQuestion } from '../types';

export const QUIZZES: Record<string, QuizQuestion[]> = {
  'que-es-electricidad': [
    {
      id: 'q1',
      question: '¿Cuál es el voltaje estándar que suministra la CFE en instalaciones residenciales en México?',
      options: ['110V', '127V', '220V', '240V'],
      correctIndex: 1,
      explanation: 'En México la CFE suministra 127V en instalaciones residenciales, aunque en algunos equipos y documentos también se menciona 120V.',
    },
    {
      id: 'q2',
      question: '¿Qué mide el voltaje en un circuito eléctrico?',
      options: [
        'La cantidad de electrones que fluyen',
        'La oposición al flujo de electricidad',
        'La fuerza o presión que empuja los electrones',
        'La velocidad de los electrones',
      ],
      correctIndex: 2,
      explanation: 'El voltaje es la "presión" o fuerza que empuja los electrones a través del conductor, similar a la presión del agua en una tubería.',
    },
    {
      id: 'q3',
      question: 'Según la Ley de Ohm, si tienes 127V y una resistencia de 100Ω, ¿cuánta corriente fluye?',
      options: ['0.127 A', '1.27 A', '12.7 A', '127 A'],
      correctIndex: 1,
      explanation: 'I = V / R → I = 127V / 100Ω = 1.27 A. La Ley de Ohm establece V = I × R, por lo tanto I = V / R.',
    },
    {
      id: 'q4',
      question: '¿En qué unidad se mide la resistencia eléctrica?',
      options: ['Amperes (A)', 'Volts (V)', 'Watts (W)', 'Ohms (Ω)'],
      correctIndex: 3,
      explanation: 'La resistencia se mide en Ohms (Ω), en honor al físico alemán Georg Simon Ohm.',
    },
  ],

  'seguridad-basica': [
    {
      id: 'q1',
      question: '¿Cuál es el PRIMER paso antes de trabajar en cualquier instalación eléctrica?',
      options: [
        'Comprar herramientas nuevas',
        'Cortar la energía en el tablero y verificar con probador',
        'Ponerse guantes de látex',
        'Avisar a los vecinos',
      ],
      correctIndex: 1,
      explanation: 'Siempre debes cortar la energía en el tablero Y verificar con un probador de voltaje que no haya corriente. Nunca asumas que está sin energía.',
    },
    {
      id: 'q2',
      question: '¿Por qué se recomienda meter una mano al bolsillo al trabajar cerca de partes energizadas?',
      options: [
        'Para tener mejor equilibrio',
        'Para guardar las herramientas',
        'Para evitar que la corriente pase de una mano a otra (a través del corazón)',
        'Es solo una costumbre, no tiene razón técnica',
      ],
      correctIndex: 2,
      explanation: 'Si la corriente entra por una mano y sale por la otra, pasa a través del corazón, lo cual puede ser fatal. Con una mano en el bolsillo se elimina ese riesgo.',
    },
    {
      id: 'q3',
      question: '¿Cuándo debes llamar a un electricista profesional?',
      options: [
        'Solo cuando no tienes las herramientas',
        'Cuando hay chispas, cortocircuitos repetidos, olor a quemado o trabajos en 220V',
        'Únicamente para instalaciones industriales',
        'Nunca, todo se puede hacer solo con videos de YouTube',
      ],
      correctIndex: 1,
      explanation: 'Hay situaciones que requieren un profesional: chispas visibles, interruptores que se disparan repetidamente, olor a quemado, instalaciones 220V/trifásicas y cambios de tablero.',
    },
    {
      id: 'q4',
      question: '¿Qué tipo de herramientas debes usar para trabajo eléctrico?',
      options: [
        'Cualquier herramienta metálica sirve',
        'Herramientas con mangos de madera húmeda',
        'Herramientas con mangos aislantes marcados con 1000V',
        'Solo herramientas de plástico',
      ],
      correctIndex: 2,
      explanation: 'Las herramientas para trabajo eléctrico deben tener mangos aislantes certificados a 1000V. Busca el símbolo de doble triángulo o la marca IEC 60900.',
    },
  ],

  'herramientas-basicas': [
    {
      id: 'q1',
      question: '¿Cuál es la herramienta más importante para un electricista antes de tocar cualquier cable?',
      options: [
        'El desarmador Phillips',
        'El probador de voltaje o testeador',
        'Las pinzas de corte',
        'El pelacables',
      ],
      correctIndex: 1,
      explanation: 'El probador de voltaje es lo primero que debes usar. Te confirma si hay o no corriente antes de tocar cualquier cosa.',
    },
    {
      id: 'q2',
      question: '¿Qué mide un multímetro?',
      options: [
        'Solo voltaje',
        'Solo corriente',
        'Voltaje, corriente y resistencia',
        'Solo resistencia',
      ],
      correctIndex: 2,
      explanation: 'El multímetro es el instrumento más versátil del electricista: mide voltaje (V), corriente (A) y resistencia (Ω), además de otras funciones según el modelo.',
    },
    {
      id: 'q3',
      question: '¿Para qué sirve el pelacables?',
      options: [
        'Para cortar cables por completo',
        'Para retirar el aislante del cable sin cortarlo',
        'Para unir dos cables',
        'Para medir el grosor del cable',
      ],
      correctIndex: 1,
      explanation: 'El pelacables retira el aislante plástico de los cables para dejar expuesto el conductor metálico, sin dañar los hilos internos.',
    },
    {
      id: 'q4',
      question: '¿Cuál es el EPP (Equipo de Protección Personal) mínimo para trabajo eléctrico?',
      options: [
        'Solo un casco',
        'Guantes de hule, lentes de seguridad y calzado con suela de hule',
        'Guantes de tela y tapones para oídos',
        'Un overol y botas de acero',
      ],
      correctIndex: 1,
      explanation: 'El EPP básico para electricidad incluye guantes de hule (aislantes), lentes de seguridad (contra arco eléctrico) y calzado con suela de hule (aislante).',
    },
  ],

  'tipos-cables': [
    {
      id: 'q1',
      question: 'En la escala AWG, ¿qué cable es más GRUESO?',
      options: ['Cable 18 AWG', 'Cable 14 AWG', 'Cable 12 AWG', 'Cable 16 AWG'],
      correctIndex: 2,
      explanation: 'En AWG (American Wire Gauge) es contraintuitivo: a menor número, cable más grueso. El 12 AWG es más grueso que el 14, 16 y 18 AWG.',
    },
    {
      id: 'q2',
      question: '¿De qué color debe ser el cable de TIERRA FÍSICA según la NOM en México?',
      options: ['Rojo', 'Blanco', 'Negro', 'Verde o verde con franja amarilla'],
      correctIndex: 3,
      explanation: 'El cable de tierra física debe ser verde o verde con franja amarilla. El negro/rojo son fases (vivos) y el blanco/gris es neutro.',
    },
    {
      id: 'q3',
      question: '¿Qué calibre de cable se recomienda como mínimo para contactos de cocina según la NOM?',
      options: ['18 AWG', '16 AWG', '14 AWG', '12 AWG'],
      correctIndex: 3,
      explanation: 'Los contactos de cocina requieren mínimo cable 12 AWG con interruptor de 20A, ya que se usan aparatos de mayor consumo como microondas y refrigerador.',
    },
    {
      id: 'q4',
      question: '¿Qué tipo de cable es el más adecuado para instalaciones dentro de tubería conduit?',
      options: ['Cable dúplex', 'Cable THW o THWN', 'Cable de extensión', 'Cable coaxial'],
      correctIndex: 1,
      explanation: 'El cable THW, THHW o THWN está diseñado para instalaciones en conduit. El cable dúplex es para extensiones temporales, no para instalaciones fijas.',
    },
  ],

  'conectar-contacto': [
    {
      id: 'q1',
      question: 'Al instalar un contacto, ¿a qué terminal va el cable NEGRO (fase)?',
      options: [
        'Terminal verde (tierra)',
        'Terminal plateada (neutro)',
        'Terminal dorada o de latón (fase)',
        'Cualquier terminal disponible',
      ],
      correctIndex: 2,
      explanation: 'El cable negro (fase) siempre va al tornillo dorado o de latón. El plateado es para el neutro (blanco) y el verde para tierra.',
    },
    {
      id: 'q2',
      question: '¿Cuánto voltaje debe leer el multímetro entre la fase y el neutro de un contacto bien instalado en México?',
      options: ['110V', '120V', '127V', '220V'],
      correctIndex: 2,
      explanation: 'Un contacto residencial correctamente instalado en México debe medir ~127V entre la terminal de fase y la de neutro.',
    },
    {
      id: 'q3',
      question: '¿Qué debes hacer ANTES de retirar un contacto viejo?',
      options: [
        'Fotografiarlo para recordar cómo estaba conectado',
        'Cortar la energía en el tablero Y verificar con probador de voltaje',
        'Jalar fuerte para que salga más rápido',
        'Mojar los dedos para sentir si hay corriente',
      ],
      correctIndex: 1,
      explanation: 'Siempre corta la energía en el tablero Y verifica con probador antes de tocar cualquier cosa. Fotografiar el cableado anterior también es una buena práctica adicional.',
    },
    {
      id: 'q4',
      question: 'Si al instalar el contacto los cables están sin tierra (solo fase y neutro), ¿qué debes hacer?',
      options: [
        'Conectar los dos cables a cualquier terminal y listo',
        'Llamar a un electricista, la instalación necesita actualizarse',
        'Conectar el neutro al terminal de tierra',
        'Ignorarlo, la tierra no es importante',
      ],
      correctIndex: 1,
      explanation: 'Una instalación sin tierra es un riesgo de seguridad. Lo correcto es consultar a un electricista para actualizar la instalación con tierra física.',
    },
  ],

  'instalar-apagador': [
    {
      id: 'q1',
      question: '¿Cuántos terminales tiene un apagador de 3 vías?',
      options: ['1', '2', '3', '4'],
      correctIndex: 2,
      explanation: 'Un apagador de 3 vías tiene 3 terminales: un terminal común (COM) y dos terminales traveler que conectan los dos apagadores entre sí.',
    },
    {
      id: 'q2',
      question: 'En un apagador sencillo, ¿qué pasa si intercambias los dos cables entre sí?',
      options: [
        'El apagador se quema',
        'No pasa nada, funciona igual',
        'La lámpara queda siempre encendida',
        'Genera un cortocircuito inmediato',
      ],
      correctIndex: 1,
      explanation: 'En un apagador sencillo los dos cables son fases, por lo que intercambiarlos no afecta el funcionamiento. El apagador sigue controlando la lámpara igual.',
    },
    {
      id: 'q3',
      question: 'Si tienes dos apagadores de 3 vías y la lámpara siempre está encendida (no apaga), ¿cuál es el problema más probable?',
      options: [
        'El cable de tierra está mal conectado',
        'Los cables traveler están invertidos',
        'Falta el cable neutro',
        'El foco está fundido',
      ],
      correctIndex: 1,
      explanation: 'Cuando la lámpara siempre está encendida con apagadores de 3 vías, generalmente los cables traveler están cruzados. Intercambiarlos soluciona el problema.',
    },
  ],

  'circuitos-residenciales': [
    {
      id: 'q1',
      question: '¿Qué es el Centro de Carga (tablero)?',
      options: [
        'El medidor de CFE',
        'El transformador de la calle',
        'La central de mando eléctrica que distribuye y protege los circuitos de la casa',
        'La caja donde se guardan los fusibles quemados',
      ],
      correctIndex: 2,
      explanation: 'El Centro de Carga es la central de distribución eléctrica de la vivienda. Contiene el interruptor principal y los interruptores termomagnéticos de cada circuito.',
    },
    {
      id: 'q2',
      question: '¿Por qué se dispara un interruptor termomagnético (ITM)?',
      options: [
        'Solo por lluvia o humedad',
        'Por sobrecarga, cortocircuito o falla a tierra',
        'Solo cuando hay cortes de CFE',
        'Cuando lleva más de 10 años instalado',
      ],
      correctIndex: 1,
      explanation: 'Un ITM se dispara por tres razones: sobrecarga (demasiada corriente), cortocircuito (contacto fase-neutro directo) o falla a tierra (corriente yéndose por tierra).',
    },
    {
      id: 'q3',
      question: '¿Qué calibre mínimo de cable indica la NOM para circuitos de iluminación?',
      options: ['18 AWG', '16 AWG', '14 AWG', '12 AWG'],
      correctIndex: 2,
      explanation: 'La NOM-001-SEDE requiere mínimo cable 14 AWG para circuitos de iluminación con interruptor de 15A.',
    },
  ],

  'iluminacion-led': [
    {
      id: 'q1',
      question: '¿Cuántos Watts consume un LED equivalente a un foco incandescente de 60W?',
      options: ['40W', '25W', '15W', '9W'],
      correctIndex: 3,
      explanation: 'Un LED de 9W produce la misma cantidad de luz (lumens) que un foco incandescente de 60W, con un ahorro del 85% en consumo eléctrico.',
    },
    {
      id: 'q2',
      question: '¿Qué temperatura de color es mejor para una recámara donde quieres ambiente relajante?',
      options: ['6500K (blanco frío)', '4000K (blanco neutro)', '2700K-3000K (blanco cálido)', '10000K (luz ultravioleta)'],
      correctIndex: 2,
      explanation: 'Para ambientes relajantes como recámaras se recomienda luz cálida (2700K-3000K, tono amarillento). La luz fría (6500K) es mejor para talleres y lugares de trabajo.',
    },
    {
      id: 'q3',
      question: '¿Cuál es el casquillo (base) más común en México para focos de uso general?',
      options: ['E14', 'E27', 'GU10', 'GU5.3'],
      correctIndex: 1,
      explanation: 'El casquillo E27 (rosca mediana de 27mm de diámetro) es el más común en México para lámparas de uso general en hogares y oficinas.',
    },
  ],

  'introduccion-nom': [
    {
      id: 'q1',
      question: '¿Qué establece la NOM-001-SEDE?',
      options: [
        'Los precios de la electricidad en México',
        'Los requisitos de seguridad para instalaciones eléctricas en México',
        'El procedimiento para solicitar servicio de CFE',
        'Las especificaciones de los aparatos eléctricos importados',
      ],
      correctIndex: 1,
      explanation: 'La NOM-001-SEDE establece los requisitos mínimos de seguridad que deben cumplir todas las instalaciones eléctricas de utilización en México.',
    },
    {
      id: 'q2',
      question: '¿Cuántos circuitos mínimos de iluminación requiere la NOM-001 para una vivienda de 66m²?',
      options: ['1', '2', '3', '4'],
      correctIndex: 1,
      explanation: 'La NOM requiere 1 circuito de iluminación por cada 33m². Para 66m² se necesitan mínimo 2 circuitos de iluminación.',
    },
    {
      id: 'q3',
      question: '¿Qué resistencia máxima permite la NOM-001 para el sistema de puesta a tierra en instalaciones residenciales?',
      options: ['5 Ω', '10 Ω', '25 Ω', '100 Ω'],
      correctIndex: 2,
      explanation: 'La NOM-001-SEDE establece que la resistencia del electrodo de tierra no debe exceder 25 Ω en instalaciones residenciales.',
    },
    {
      id: 'q4',
      question: '¿Qué artículo de la NOM-001 regula la puesta a tierra?',
      options: ['Artículo 100', 'Artículo 210', 'Artículo 250', 'Artículo 300'],
      correctIndex: 2,
      explanation: 'El Artículo 250 de la NOM-001-SEDE regula todos los aspectos de puesta a tierra: electrodos, conductores, conexiones y requisitos de resistencia.',
    },
  ],

  'diagramas-electricos': [
    {
      id: 'q1',
      question: '¿Qué tipo de diagrama representa el sistema eléctrico completo usando una sola línea para todos los conductores?',
      options: ['Diagrama esquemático', 'Diagrama unifilar', 'Diagrama de planta', 'Diagrama de bloques'],
      correctIndex: 1,
      explanation: 'El diagrama unifilar usa una sola línea para representar todos los conductores del sistema, siendo el más usado para planear instalaciones eléctricas.',
    },
    {
      id: 'q2',
      question: '¿Qué símbolo representa un contacto con tierra en los planos eléctricos según la NOM?',
      options: ['⊡', '⊡T', '◯', '/'],
      correctIndex: 1,
      explanation: 'En la simbología NOM, ⊡T representa un contacto (tomacorriente) con tierra física. La "T" indica que incluye terminal de tierra.',
    },
    {
      id: 'q3',
      question: 'Para calcular la carga de iluminación de una vivienda según el Art. 220 NOM, ¿cuántos VA por m² se usan?',
      options: ['10 VA/m²', '23 VA/m²', '33 VA/m²', '50 VA/m²'],
      correctIndex: 2,
      explanation: 'El Artículo 220 de la NOM-001 establece 33 VA/m² como carga unitaria mínima para calcular la iluminación en viviendas residenciales.',
    },
  ],

  'puesta-a-tierra': [
    {
      id: 'q1',
      question: '¿Cuál es la longitud mínima de una varilla coperweld (electrodo de tierra) según la NOM?',
      options: ['1.0 m', '1.5 m', '2.0 m', '2.4 m'],
      correctIndex: 3,
      explanation: 'La NOM-001 especifica que las varillas de tierra (coperweld) deben tener una longitud mínima de 2.4 metros (8 pies) para asegurar contacto suficiente con el suelo.',
    },
    {
      id: 'q2',
      question: '¿Con qué instrumento se mide la resistencia del sistema de puesta a tierra?',
      options: ['Multímetro', 'Amperímetro de gancho', 'Telurómetro', 'Megóhmetro'],
      correctIndex: 2,
      explanation: 'El telurómetro (earth resistance meter) es el instrumento específico para medir la resistencia de los sistemas de puesta a tierra, usando el método de los 3 picos.',
    },
    {
      id: 'q3',
      question: '¿Qué resistencia máxima de tierra se requiere para equipos de cómputo y telecomunicaciones?',
      options: ['25 Ω', '5 Ω', '1 Ω', '0.1 Ω'],
      correctIndex: 2,
      explanation: 'Los equipos de cómputo y telecomunicaciones requieren una resistencia de tierra ≤ 1 Ω para garantizar su correcto funcionamiento y protección contra transitorios.',
    },
  ],

  'instalaciones-trifasicas': [
    {
      id: 'q1',
      question: '¿Cuántos grados de desfase hay entre cada fase en un sistema trifásico?',
      options: ['45°', '90°', '120°', '180°'],
      correctIndex: 2,
      explanation: 'En un sistema trifásico las tres corrientes están desfasadas 120° entre sí (360° / 3 fases = 120°), lo que garantiza una entrega de potencia constante.',
    },
    {
      id: 'q2',
      question: 'En México, ¿cuál es el voltaje fase a fase en un sistema trifásico residencial/comercial estándar?',
      options: ['127V', '208V', '220V', '440V'],
      correctIndex: 2,
      explanation: 'En México, el sistema trifásico residencial/comercial más común es 127V/220V: 127V de fase a neutro y 220V de fase a fase (línea a línea).',
    },
    {
      id: 'q3',
      question: '¿Cuál es la principal ventaja de un motor trifásico sobre uno monofásico?',
      options: [
        'Es más barato de comprar',
        'No necesita conexión a tierra',
        'Es más eficiente y no requiere capacitor de arranque',
        'Funciona con cualquier voltaje',
      ],
      correctIndex: 2,
      explanation: 'Los motores trifásicos son más eficientes, tienen arranque suave natural y no necesitan capacitores de arranque como los monofásicos, lo que los hace más simples y confiables.',
    },
    {
      id: 'q4',
      question: '¿Qué método de arranque reduce la corriente inicial de un motor de más de 5HP?',
      options: ['Arranque directo', 'Arranque estrella-delta', 'Arranque con fusible', 'Arranque manual'],
      correctIndex: 1,
      explanation: 'El arranque estrella-delta reduce la corriente de arranque a 1/3 de la corriente de arranque directo. Es el método más usado para motores de más de 5HP.',
    },
  ],

  // ─────────────────────── BASIC 2: BAÑO Y COCINA ───────────────────────────
  'electrica-bano': [
    {
      id: 'q1',
      question: '¿En qué zona de un baño (según IEC 60364-7-701) está PROHIBIDO instalar cualquier aparato eléctrico?',
      options: ['Zona 2 (60cm alrededor)', 'Zona 1 (sobre la tina/regadera)', 'Zona 0 (dentro de la tina/regadera)', 'Zona 3 (más de 60cm)'],
      correctIndex: 2,
      explanation: 'La Zona 0 es el interior de la tina o regadera. En esta zona está prohibido cualquier aparato eléctrico. Solo se permiten luminarias especiales IP67 para uso subacuático.',
    },
    {
      id: 'q2',
      question: '¿Qué tipo de protección es OBLIGATORIA para todos los contactos eléctricos en un baño?',
      options: ['Fusible de vidrio', 'GFCI (diferencial de fuga)', 'Breaker magnético', 'Protector de sobretensión'],
      correctIndex: 1,
      explanation: 'Todos los contactos en el baño deben tener protección GFCI (diferencial de fuga a tierra). Esto protege contra electrocución por contacto accidental con agua.',
    },
    {
      id: 'q3',
      question: '¿Qué es la "igualación de potencial" en un baño?',
      options: [
        'Instalar el mismo voltaje en todos los contactos',
        'Conectar todas las partes metálicas (tuberías, toalleros) al mismo potencial de tierra',
        'Equilibrar la carga entre fases',
        'Usar el mismo calibre de cable en todos los circuitos',
      ],
      correctIndex: 1,
      explanation: 'La igualación de potencial conecta todas las partes metálicas del baño (tuberías, marcos de espejos, toalleros metálicos) para que estén al mismo potencial. Esto evita diferencias de potencial peligrosas.',
    },
  ],

  'electrica-cocina': [
    {
      id: 'q1',
      question: 'Según la NOM-001-SEDE, ¿cuántos circuitos mínimo de 20A se requieren para los contactos de la encimera/barra en la cocina?',
      options: ['1 circuito', '2 circuitos', '3 circuitos', '4 circuitos'],
      correctIndex: 1,
      explanation: 'La NOM-001-SEDE requiere mínimo 2 circuitos de 20A para los contactos de la encimera/barra de la cocina, para distribuir las cargas de los aparatos.',
    },
    {
      id: 'q2',
      question: '¿A qué distancia del fregadero son OBLIGATORIOS los contactos con protección GFCI?',
      options: ['30cm', '60cm', '1.2m', '1.5m'],
      correctIndex: 2,
      explanation: 'Los contactos a menos de 1.2m del fregadero requieren protección GFCI obligatoria, ya que están en zona donde puede haber contacto con agua.',
    },
    {
      id: 'q3',
      question: '¿Cuántos volts y qué tipo de circuito requiere típicamente una estufa/horno eléctrico?',
      options: ['127V monofásico 20A', '127V monofásico 30A', '220V bifásico 40-50A', '220V bifásico 15A'],
      correctIndex: 2,
      explanation: 'Las estufas y hornos eléctricos requieren circuito exclusivo de 220V (bifásico) con breaker doble de 40A o 50A y cable 8 AWG o 6 AWG.',
    },
  ],

  'calentador-electrico': [
    {
      id: 'q1',
      question: '¿Qué tipo de calentador de agua eléctrico tiene mayor eficiencia energética?',
      options: ['De depósito (boiler)', 'Instantáneo de resistencia', 'Bomba de calor', 'De paso con termostato'],
      correctIndex: 2,
      explanation: 'El calentador de bomba de calor tiene COP de 2.5-4, lo que significa que entrega 2.5-4 kWh de calor por cada kWh consumido, siendo el más eficiente.',
    },
    {
      id: 'q2',
      question: 'Un calentador instantáneo necesita calentar 6 L/min con ΔT de 27°C. ¿Qué potencia aproximada necesita?',
      options: ['3.5 kW', '7 kW', '11.3 kW', '20 kW'],
      correctIndex: 2,
      explanation: 'P = 6 × 27 × 0.0698 = 11.3 kW. Los calentadores instantáneos de alta capacidad requieren circuitos de 220V con breakers de 40-60A.',
    },
    {
      id: 'q3',
      question: '¿Qué elemento de seguridad es obligatorio junto a un calentador de agua eléctrico?',
      options: ['Fusible de cristal', 'Interruptor de desconexión accesible', 'Regulador de voltaje', 'Transformador de aislamiento'],
      correctIndex: 1,
      explanation: 'Debe instalarse un interruptor de desconexión accesible cerca del calentador para permitir cortar la energía durante mantenimiento sin ir al tablero principal.',
    },
  ],

  'campana-extraccion': [
    {
      id: 'q1',
      question: '¿Cuál es la principal diferencia entre una campana de recirculación y una de extracción?',
      options: [
        'La de recirculación consume más energía',
        'La de extracción filtra con carbón activo, la de recirculación no',
        'La de recirculación regresa el aire filtrado a la cocina, la de extracción lo saca al exterior',
        'La de extracción es para uso doméstico, la de recirculación es industrial',
      ],
      correctIndex: 2,
      explanation: 'La campana de recirculación filtra el aire (con carbón activo) y lo regresa al ambiente. La campana de extracción saca el aire directamente al exterior por un ducto, siendo más eficiente higiénicamente.',
    },
    {
      id: 'q2',
      question: 'Para calcular el caudal de ventilación necesario en un local, ¿qué datos se necesitan?',
      options: [
        'Área del local y número de personas',
        'Volumen del local y renovaciones de aire por hora',
        'Longitud del ducto y diámetro',
        'Potencia del motor y voltaje de operación',
      ],
      correctIndex: 1,
      explanation: 'Caudal (m³/h) = Volumen del local × Renovaciones por hora. Una cocina doméstica requiere 10-15 renovaciones/hora.',
    },
    {
      id: 'q3',
      question: '¿Cuántas renovaciones de aire por hora se recomiendan típicamente en una cocina comercial?',
      options: ['6-10', '10-15', '30-60', '100-200'],
      correctIndex: 2,
      explanation: 'Las cocinas comerciales requieren 30-60 renovaciones de aire por hora, significativamente más que las domésticas (10-15), por los mayores niveles de vapores y grasas generados.',
    },
  ],

  // ─── BASIC 2: CLIMATIZACIÓN ────────────────────────────────────────────────
  'minisplit-instalacion': [
    {
      id: 'q1',
      question: 'Un minisplit de 18,000 BTU consume 1,500W a 127V. ¿Cuánta corriente máxima consume aproximadamente?',
      options: ['5A', '7A', '11.8A', '18A'],
      correctIndex: 2,
      explanation: 'I = P / V = 1500W / 127V = 11.8A. Para dimensionar el breaker: 11.8A × 1.25 = 14.8A → usar breaker de 15A.',
    },
    {
      id: 'q2',
      question: '¿Por qué se instala un interruptor de desconexión (disconnect switch) junto a la unidad exterior del minisplit?',
      options: [
        'Para ahorrar energía en horas pico',
        'Para controlar la temperatura sin el control remoto',
        'Para permitir apagar el equipo para mantenimiento sin ir al tablero',
        'Es decorativo y no tiene función técnica',
      ],
      correctIndex: 2,
      explanation: 'El disconnect switch junto a la unidad exterior permite al técnico de mantenimiento desconectar el circuito de forma segura sin ir al tablero. Es un requisito de seguridad.',
    },
    {
      id: 'q3',
      question: '¿Cuál es el calibre mínimo de cable para un minisplit con corriente máxima de 15A?',
      options: ['14 AWG', '12 AWG', '10 AWG', '8 AWG'],
      correctIndex: 1,
      explanation: 'Para 15A de corriente, el breaker será de 20A (15×1.25=18.75, redondea a 20A). El cable 12 AWG soporta hasta 20A, siendo el correcto para este caso.',
    },
  ],

  'calefaccion-electrica': [
    {
      id: 'q1',
      question: '¿Qué tipo de calefacción eléctrica instala cable resistivo directamente bajo el piso?',
      options: ['Calefactor portátil', 'Calefactor de pared empotrado', 'Piso radiante eléctrico', 'Furnace eléctrico central'],
      correctIndex: 2,
      explanation: 'El piso radiante eléctrico usa cable resistivo o película calefactora instalada bajo el piso, controlado por un termostato. Es muy confortable por el calor uniforme desde abajo.',
    },
    {
      id: 'q2',
      question: '¿Cuántos días mínimo debe esperar el mortero antes de encender un piso radiante eléctrico?',
      options: ['7 días', '14 días', '28 días', '60 días'],
      correctIndex: 2,
      explanation: 'El mortero debe esperar 28 días para curar completamente antes de encender el piso radiante. Encender antes puede causar expansión desigual y dañar el sistema.',
    },
    {
      id: 'q3',
      question: '¿Cuál es la potencia típica del piso radiante eléctrico en zonas frías de México?',
      options: ['30-50 W/m²', '60-100 W/m²', '150-200 W/m²', '300-500 W/m²'],
      correctIndex: 2,
      explanation: 'El piso radiante eléctrico usa típicamente 150-200 W/m². Para una zona fría de México (norte o altiplano) puede ser necesario 100-150 W/m² de calefacción, por lo que el piso radiante cubre bien la demanda.',
    },
  ],

  'cargador-vehiculo-electrico': [
    {
      id: 'q1',
      question: '¿Cuánto tiempo aprox. tarda un cargador Nivel 1 (127V, 16A) en cargar una batería de 60 kWh?',
      options: ['3-5 horas', '8-10 horas', '15-20 horas', '31-43 horas'],
      correctIndex: 3,
      explanation: 'Un cargador Nivel 1 a 1.4-1.9 kW tardaría 60/1.5 ≈ 40 horas para una batería de 60 kWh. Es muy lento, por eso se recomienda el Nivel 2 para uso diario.',
    },
    {
      id: 'q2',
      question: '¿Qué conector adoptó México como estándar para la carga Nivel 2 de vehículos eléctricos?',
      options: ['Tesla Supercharger', 'CHAdeMO (japonés)', 'SAE J1772 (Tipo 1)', 'CCS Combo 2 (europeo)'],
      correctIndex: 2,
      explanation: 'México adoptó el conector SAE J1772 (Tipo 1) para Nivel 2, compatible con la mayoría de vehículos eléctricos y plug-in híbridos vendidos en el país.',
    },
    {
      id: 'q3',
      question: 'Un EVSE (cargador) de 32A a 220V consume 7 kW. ¿Qué impacto tiene en la instalación residencial?',
      options: [
        'Ninguno, es como un foco',
        'Es como tener encendidos 70 focos incandescentes durante 6-8 horas',
        'Solo afecta si se carga en el día',
        'Es igual al consumo de un refrigerador',
      ],
      correctIndex: 1,
      explanation: 'Un EVSE de 7 kW cargando 8 horas añade 56 kWh al consumo diario. Esto es significativo y requiere verificar que el servicio de CFE y el tablero principal tienen capacidad suficiente.',
    },
  ],

  // ─── BASIC 2: TELECOMUNICACIONES ──────────────────────────────────────────
  'cableado-estructurado': [
    {
      id: 'q1',
      question: '¿Cuál es la categoría de cable de red recomendada para instalaciones nuevas que soporte 10 Gbps a 100m?',
      options: ['Cat5e', 'Cat6', 'Cat6A', 'Cat8'],
      correctIndex: 2,
      explanation: 'Cat6A soporta 10 Gbps a 100m de distancia y opera hasta 500 MHz. Es la recomendación para instalaciones nuevas por ser a prueba de futuro con un costo ligeramente mayor que Cat6.',
    },
    {
      id: 'q2',
      question: 'En el estándar de terminación T568B, ¿qué par de colores va en los pines 1 y 2?',
      options: ['Azul y blanco/azul', 'Naranja y blanco/naranja', 'Verde y blanco/verde', 'Café y blanco/café'],
      correctIndex: 1,
      explanation: 'En T568B: Pin 1 = Blanco/Naranja, Pin 2 = Naranja. Este es el estándar más usado en América del Norte para terminaciones de cableado estructurado.',
    },
    {
      id: 'q3',
      question: '¿Qué separación mínima se debe mantener entre cables de red y cables eléctricos en instalaciones paralelas?',
      options: ['1 cm', '5 cm', '30 cm', '1 metro'],
      correctIndex: 1,
      explanation: 'Se requiere mínimo 5cm de separación entre cables de datos y cables eléctricos cuando van en paralelo, y deben cruzarse en ángulo de 90° para reducir la interferencia electromagnética.',
    },
  ],

  'television-coaxial': [
    {
      id: 'q1',
      question: '¿Qué tipo de cable coaxial se recomienda para instalaciones de TV y satélite nuevas?',
      options: ['RG59 (75Ω)', 'RG6 (75Ω)', 'RG11 (75Ω)', 'RG58 (50Ω)'],
      correctIndex: 1,
      explanation: 'El RG6 es el estándar actual para TV, satélite, cable e internet coaxial. El RG59 es más antiguo y delgado; el RG11 es para distancias muy largas (>50m).',
    },
    {
      id: 'q2',
      question: 'Cada vez que divides la señal de TV con un splitter pasivo, ¿cuántos dB pierde aproximadamente la señal?',
      options: ['0.5 dB', '3.5 dB', '10 dB', '20 dB'],
      correctIndex: 1,
      explanation: 'Cada división con splitter pasivo pierde aproximadamente 3.5 dB de señal. Para más de 3 televisores es recomendable usar un amplificador de distribución.',
    },
    {
      id: 'q3',
      question: '¿Qué estándar de televisión digital terrestre usa México?',
      options: ['DVB-T2 (europeo)', 'ISDB-T (japonés-brasileño)', 'ATSC (norteamericano)', 'DTMB (chino)'],
      correctIndex: 2,
      explanation: 'México usa el estándar ATSC (norteamericano) para televisión digital terrestre, también conocido como TDT. No requiere pago mensual y capta canales en la banda UHF (470-700 MHz).',
    },
  ],

  'cctv-instalacion': [
    {
      id: 'q1',
      question: '¿Qué significa PoE en sistemas de CCTV IP?',
      options: [
        'Protocol of Ethernet',
        'Power over Ethernet (la cámara recibe alimentación por el cable de red)',
        'Point of Entry (punto de entrada del sistema)',
        'Passive optical Element',
      ],
      correctIndex: 1,
      explanation: 'PoE = Power over Ethernet. El switch o NVR PoE envía tanto datos como alimentación eléctrica por el mismo cable Cat6, eliminando la necesidad de un cable de alimentación separado para cada cámara.',
    },
    {
      id: 'q2',
      question: '¿Cuántos GB por día aproximados genera un sistema de 4 cámaras IP a 4 Mbps por cámara?',
      options: ['42 GB/día', '84 GB/día', '168 GB/día', '336 GB/día'],
      correctIndex: 2,
      explanation: 'GB/día = 4 cámaras × 4 Mbps × 86,400s / 8 / 1024 = 168 GB/día. Para 30 días de grabación se necesitan aproximadamente 5 TB de almacenamiento.',
    },
    {
      id: 'q3',
      question: '¿A qué altura se recomiendan instalar cámaras de seguridad para buena visibilidad?',
      options: ['1-1.5m del piso', '1.5-2m del piso', '2.5-3.5m del piso', '5-6m del piso'],
      correctIndex: 2,
      explanation: 'La altura recomendada para cámaras es 2.5-3.5m del piso. Esto permite capturar rostros sin que las cámaras sean fácilmente manipuladas y proporciona buen ángulo de visión.',
    },
  ],

  'sistemas-alarma': [
    {
      id: 'q1',
      question: '¿Qué tipo de sensor detecta movimiento por el calor corporal de las personas?',
      options: ['Sensor magnético', 'Sensor PIR (infrarrojo pasivo)', 'Sensor de vibración', 'Sensor ultrasónico'],
      correctIndex: 1,
      explanation: 'El sensor PIR (Passive Infrared) detecta la radiación infrarroja (calor) emitida por el cuerpo humano. Es el sensor de movimiento más común en sistemas de alarma residenciales.',
    },
    {
      id: 'q2',
      question: '¿Por cuánto tiempo mínimo debe durar la batería de respaldo de un panel de alarma?',
      options: ['30 minutos', '1 hora', '4 horas', '24 horas'],
      correctIndex: 2,
      explanation: 'El panel de alarma debe tener batería de respaldo para operar mínimo 4 horas sin energía de la red. Esto garantiza que el sistema siga funcionando durante cortes de luz.',
    },
    {
      id: 'q3',
      question: '¿Qué calibre de cable se usa típicamente para el cableado convencional de zonas de alarma?',
      options: ['8 AWG', '14 AWG', '22 AWG (4 conductores)', '18 AWG (2 conductores)'],
      correctIndex: 2,
      explanation: 'El cableado de zonas de alarma usa cable de 22 AWG con 4 conductores: 2 para el sensor y 2 para el tamper (detector de manipulación). La baja corriente no requiere calibres gruesos.',
    },
  ],

  // ─── BASIC 2: RESPALDO DE ENERGÍA ─────────────────────────────────────────
  'generadores-hogar': [
    {
      id: 'q1',
      question: '¿Por qué NUNCA se debe usar un generador a gasolina dentro de un garage o cuarto cerrado?',
      options: [
        'Porque consume más gasolina en espacios cerrados',
        'Porque produce monóxido de carbono (CO), gas tóxico e inodoro',
        'Porque el ruido puede dañar el oído',
        'Porque puede provocar incendio por las chispas',
      ],
      correctIndex: 1,
      explanation: 'Los generadores a gasolina producen monóxido de carbono (CO), un gas tóxico e inodoro que puede matar en minutos en espacios cerrados. SIEMPRE deben usarse al exterior.',
    },
    {
      id: 'q2',
      question: '¿Por qué es peligroso conectar un generador directamente al tablero sin interruptor de transferencia?',
      options: [
        'El generador puede sobrecargarse',
        'El voltaje puede variar demasiado',
        'Puede enviar voltaje peligroso a la red pública y matar a trabajadores de CFE',
        'Solo es peligroso si el generador es de más de 5,000W',
      ],
      correctIndex: 2,
      explanation: 'Sin interruptor de transferencia, el generador puede "retroalimentar" la red pública. Los trabajadores de CFE que reparan la línea asumen que no hay voltaje, pero podría haberlo. Esto puede ser mortal.',
    },
    {
      id: 'q3',
      question: 'Para alimentar un refrigerador (200W, pico 800W) y 10 luces LED (100W) con el generador, ¿qué potencia mínima necesitas?',
      options: ['500W', '800W', '1,200W', '2,000W'],
      correctIndex: 2,
      explanation: 'Consumo normal: 200+100=300W. Pero el refrigerador tiene pico de arranque de 800W. El generador debe manejar ese pico: 800+100=900W + margen → mínimo 1,200W.',
    },
  ],

  'ups-sistemas': [
    {
      id: 'q1',
      question: '¿Qué tipo de UPS tiene tiempo de conmutación de 0ms porque la carga siempre opera desde el inversor?',
      options: ['UPS Offline (Standby)', 'UPS Line-Interactive', 'UPS Online doble conversión', 'UPS de bypass estático'],
      correctIndex: 2,
      explanation: 'El UPS Online de doble conversión convierte la energía de AC a DC y luego de DC a AC. La carga siempre opera desde el inversor, por lo que no hay tiempo de conmutación (0ms) cuando falla la red.',
    },
    {
      id: 'q2',
      question: 'Una computadora consume 200W. Si el UPS Offline tiene factor de potencia 0.6, ¿qué tamaño mínimo en VA se necesita?',
      options: ['200 VA', '333 VA → 500 VA', '600 VA', '1000 VA'],
      correctIndex: 1,
      explanation: 'VA = W / FP = 200W / 0.6 = 333 VA. Se redondea al modelo comercial siguiente, que sería 500 VA. Los UPS se especifican en VA, no en Watts directamente.',
    },
    {
      id: 'q3',
      question: '¿Cada cuánto tiempo aproximado se debe reemplazar la batería de un UPS tipo VRLA?',
      options: ['Cada 6 meses', 'Cada 1-2 años', 'Cada 3-5 años', 'Nunca, es de por vida'],
      correctIndex: 2,
      explanation: 'Las baterías VRLA de UPS tienen vida útil de 3-5 años en condiciones normales. La temperatura acelera el envejecimiento: por cada 8°C sobre 25°C, la vida útil se reduce a la mitad.',
    },
  ],

  'transferencia-automatica': [
    {
      id: 'q1',
      question: '¿Qué hace un ATS (Automatic Transfer Switch) cuando detecta falla en el suministro de CFE?',
      options: [
        'Apaga todos los circuitos para proteger los equipos',
        'Envía señal de arranque al generador y transfiere las cargas automáticamente',
        'Activa una alarma pero requiere intervención manual',
        'Solo protege el tablero principal sin transferir cargas',
      ],
      correctIndex: 1,
      explanation: 'El ATS detecta la falla de CFE, envía señal de arranque al generador, espera que alcance voltaje y frecuencia estables, y luego transfiere automáticamente las cargas. Todo sin intervención humana.',
    },
    {
      id: 'q2',
      question: '¿Por qué el ATS debe tener enclavamiento (interlock) entre el interruptor de CFE y el de generador?',
      options: [
        'Para ahorrar energía',
        'Para evitar que CFE y el generador estén conectados al mismo tiempo (peligroso)',
        'Para controlar la prioridad de carga',
        'Para reducir el tiempo de transferencia',
      ],
      correctIndex: 1,
      explanation: 'El enclavamiento (mecánico o eléctrico) impide que CFE y el generador estén cerrados simultáneamente. Si ambas fuentes se conectaran al mismo tiempo, podrían dañarse mutuamente y causar arcos peligrosos.',
    },
    {
      id: 'q3',
      question: '¿Cuánto tiempo espera típicamente el ATS antes de regresar las cargas a CFE después de que el suministro se restaura?',
      options: ['Inmediatamente (0 segundos)', '5-10 segundos', '30-120 segundos', '10-30 minutos'],
      correctIndex: 2,
      explanation: 'El ATS espera 30-120 segundos para confirmar que el suministro de CFE es estable antes de regresar las cargas. Esto evita ciclos de transferencia frecuentes si CFE tiene inestabilidad.',
    },
  ],

  // ─── PRO 2: PROTECCIÓN CONTRA RAYOS ───────────────────────────────────────
  'pararrayos-sistemas': [
    {
      id: 'q1',
      question: '¿Cuál es la resistencia máxima del electrodo de tierra recomendada para un sistema de protección contra rayos (SPR)?',
      options: ['100 Ω', '50 Ω', '25 Ω', '10 Ω'],
      correctIndex: 3,
      explanation: 'Para sistemas de protección contra rayos, la resistencia del electrodo de tierra debe ser ≤10 Ω. Una resistencia mayor no permite disipar eficientemente la energía del rayo hacia tierra.',
    },
    {
      id: 'q2',
      question: '¿En qué lugar y en qué orden deben instalarse los DPS (protectores de sobretensión) en cascada?',
      options: [
        'Solo en el tablero principal, un DPS Clase I',
        'DPS Clase I en tablero principal, Clase II en subtableros, Clase III en el equipo',
        'DPS Clase III en tablero principal, Clase II en subtableros',
        'Un solo DPS de alta capacidad es suficiente para todo el sistema',
      ],
      correctIndex: 1,
      explanation: 'Los DPS se instalan en cascada: Clase I (10/350µs) en el tablero principal para rayos directos, Clase II en subtableros para sobretensiones de maniobra, y Clase III directamente en equipos sensibles.',
    },
    {
      id: 'q3',
      question: '¿Cuál de los siguientes sistemas pararrayos protege toda la azotea con una red de conductores?',
      options: ['Sistema Franklin (punta simple)', 'Sistema PDCE', 'Sistema Faraday (jaula)', 'Sistema Bergmann'],
      correctIndex: 2,
      explanation: 'El sistema Faraday usa una red de conductores sobre toda la azotea con múltiples conductores de bajada. Ofrece protección completa para toda la estructura y es recomendado para edificios medianos y grandes.',
    },
  ],

  'apantallamiento-emi': [
    {
      id: 'q1',
      question: '¿Qué técnica de apantallamiento protege mejor contra campos magnéticos de baja frecuencia?',
      options: [
        'Jaula de Faraday de cobre',
        'Cable coaxial estándar',
        'Materiales ferromagnéticos (acero, mu-metal)',
        'Aislamiento plástico grueso',
      ],
      correctIndex: 2,
      explanation: 'Para campos magnéticos de baja frecuencia se necesitan materiales ferromagnéticos como hierro, acero o mu-metal. La jaula de Faraday es efectiva para campos eléctricos pero no para magnéticos de baja frecuencia.',
    },
    {
      id: 'q2',
      question: 'Al separar cables de potencia y cables de señal analógica que van en paralelo, ¿cuál es la separación mínima recomendada?',
      options: ['1 cm', '5 cm', '15-30 cm', '1 metro'],
      correctIndex: 2,
      explanation: 'Se recomienda mínimo 15-30cm de separación entre cables de potencia y cables de señal analógica cuando van en paralelo. Cuando deben cruzarse, deben hacerlo a 90° para minimizar la interferencia.',
    },
    {
      id: 'q3',
      question: '¿En qué extremo del cable apantallado se conecta la pantalla a tierra para señales analógicas?',
      options: ['En ambos extremos siempre', 'Solo en un extremo (típicamente el lado de la fuente)', 'En ningún extremo', 'En el extremo más alejado de la fuente'],
      correctIndex: 1,
      explanation: 'Para señales analógicas, la pantalla del cable se conecta a tierra en UN SOLO extremo (generalmente el lado de la fuente). Si se conecta en ambos, se forma un lazo de tierra que puede inducir corrientes de interferencia.',
    },
  ],

  'reles-proteccion': [
    {
      id: 'q1',
      question: '¿Qué número ANSI corresponde a la protección diferencial?',
      options: ['ANSI 50', 'ANSI 51', 'ANSI 67', 'ANSI 87'],
      correctIndex: 3,
      explanation: 'El ANSI 87 es la protección diferencial. Detecta diferencias entre la corriente que entra y sale de un equipo (transformador, motor, generador), lo que indica una falla interna.',
    },
    {
      id: 'q2',
      question: '¿Qué significa el "Dial de tiempo" (TD) en un relé 51 de sobrecorriente temporizado?',
      options: [
        'El tiempo máximo de operación del relé en segundos',
        'La corriente mínima que activa el relé',
        'Un multiplicador que escala la curva tiempo-corriente (mayor TD = más tiempo)',
        'La frecuencia de operación del relé',
      ],
      correctIndex: 2,
      explanation: 'El Dial de tiempo (TD) es un multiplicador que escala verticalmente la curva tiempo-corriente del relé 51. A mayor TD, el relé tardará más en disparar para el mismo nivel de sobrecorriente.',
    },
    {
      id: 'q3',
      question: '¿Cuál es el CTI (Coordination Time Interval) mínimo entre niveles de protección con relés digitales modernos?',
      options: ['0.1 segundos', '0.2 segundos', '0.4 segundos', '1 segundo'],
      correctIndex: 1,
      explanation: 'Con relés digitales modernos, el CTI mínimo entre niveles de protección es de 0.2 segundos. Con relés electromecánicos antiguos se requieren 0.3-0.4 segundos por su menor precisión.',
    },
  ],

  // ─── PRO 2: CALIDAD DE ENERGÍA ─────────────────────────────────────────────
  'armonicos': [
    {
      id: 'q1',
      question: '¿Cuál es la frecuencia del 5° armónico en un sistema de 60Hz?',
      options: ['120 Hz', '180 Hz', '240 Hz', '300 Hz'],
      correctIndex: 3,
      explanation: 'El 5° armónico = 5 × 60 Hz = 300 Hz. Los armónicos son múltiplos de la frecuencia fundamental. Los VFD tipicamente generan 5°, 7°, 11° y 13° armónicos.',
    },
    {
      id: 'q2',
      question: '¿Cuál es el límite de THD de voltaje en baja tensión según IEEE 519?',
      options: ['1.5%', '2.5%', '5%', '10%'],
      correctIndex: 2,
      explanation: 'Según IEEE 519, el límite de THD de voltaje en baja tensión (<1kV) es 5%. En media tensión (1-69kV) el límite es 2.5% y en alta tensión (>69kV) es 1.5%.',
    },
    {
      id: 'q3',
      question: '¿Por qué en sistemas trifásicos con cargas no lineales el neutro puede tener MÁS corriente que las fases?',
      options: [
        'Por un error de diseño del sistema',
        'Porque los armónicos de 3° orden se suman en el neutro en lugar de cancelarse',
        'Porque el neutro es más delgado y tiene más resistencia',
        'Por desequilibrio de fases en el sistema',
      ],
      correctIndex: 1,
      explanation: 'Los armónicos de orden 3 (y sus múltiplos: 9, 15...) se suman aritméticamente en el neutro en lugar de cancelarse como lo hacen las frecuencias fundamentales. El neutro puede llegar a 1.73× la corriente de fase.',
    },
  ],

  'factor-potencia-reactiva': [
    {
      id: 'q1',
      question: 'Una carga tiene P=100 kW y S=125 kVA. ¿Cuál es su factor de potencia?',
      options: ['0.6', '0.75', '0.8', '0.95'],
      correctIndex: 2,
      explanation: 'FP = P / S = 100 kW / 125 kVA = 0.8. Un factor de potencia de 0.8 significa que el 80% de la corriente hace trabajo real y el 20% es corriente reactiva que no hace trabajo útil.',
    },
    {
      id: 'q2',
      question: '¿Qué dispositivo se usa para compensar la potencia reactiva inductiva de los motores?',
      options: ['Reactor (inductor)', 'Resistencia', 'Capacitor (banco de capacitores)', 'Transformador de aislamiento'],
      correctIndex: 2,
      explanation: 'Los capacitores generan potencia reactiva capacitiva que compensa la potencia reactiva inductiva de los motores. Los bancos de capacitores son la solución estándar para corrección de factor de potencia.',
    },
    {
      id: 'q3',
      question: '¿Qué puede ocurrir si se instalan capacitores para corrección de FP sin reactancias de dessintonización en un sistema con armónicos?',
      options: [
        'El FP no mejora',
        'Los capacitores amplifican los armónicos por resonancia (puede dañar equipos)',
        'Los capacitores se dañan por sobrevoltaje',
        'El neutro queda sin corriente',
      ],
      correctIndex: 1,
      explanation: 'Los capacitores pueden resonar con las inductancias del sistema a frecuencias de armónicos, amplificando enormemente las corrientes armónicas. Esto puede dañar equipos y causar problemas graves. Se usan reactancias de dessintonización para evitarlo.',
    },
  ],

  'flicker-variaciones': [
    {
      id: 'q1',
      question: '¿Qué duración tiene un "sag" (hueco de tensión) típico causado por una falla en la red?',
      options: ['Menos de 1 ciclo', '100ms - 1 segundo', '1 - 5 minutos', 'Más de 5 minutos'],
      correctIndex: 1,
      explanation: 'Los sags causados por fallas en la red duran típicamente de 100ms a 1 segundo, el tiempo que tarda la protección en aislar la falla. Aunque son cortos, pueden parar variadores, PLC y equipos electrónicos.',
    },
    {
      id: 'q2',
      question: '¿Qué causa principalmente el "flicker" (parpadeo de luminarias)?',
      options: [
        'Caídas de tensión sostenidas (subtensión)',
        'Fluctuaciones rápidas y repetitivas de voltaje causadas por cargas variables',
        'Sobretensión continua en la red',
        'Alto contenido de armónicos (THD >10%)',
      ],
      correctIndex: 1,
      explanation: 'El flicker es causado por fluctuaciones rápidas y repetitivas del voltaje, típicamente por soldadoras de arco, hornos de arco o arranques frecuentes de motores. La fluctuación de voltaje se convierte en variación de luminosidad perceptible.',
    },
    {
      id: 'q3',
      question: '¿Qué dispositivo puede proteger cargas críticas contra sags de voltaje de hasta 150ms?',
      options: ['Fusible de alta capacidad', 'UPS online de doble conversión', 'Variac (autotransformador variable)', 'Capacitor de corrección de FP'],
      correctIndex: 1,
      explanation: 'Un UPS online de doble conversión tiene 0ms de tiempo de conmutación porque la carga siempre opera desde el inversor. Protege perfectamente contra cualquier sag o interrupción.',
    },
  ],

  'auditoria-energia': [
    {
      id: 'q1',
      question: '¿Qué significa EUI en el contexto de auditoría energética?',
      options: [
        'Electric Utility Index (índice de utilidad eléctrica)',
        'Energy Use Intensity (kWh/m²/año, intensidad de uso de energía)',
        'Efficiency Upgrade Indicator (indicador de mejora de eficiencia)',
        'Electrical Utility Infrastructure',
      ],
      correctIndex: 1,
      explanation: 'EUI = Energy Use Intensity = kWh/año dividido entre los m² del edificio. Es el indicador estándar para comparar edificios similares y detectar oportunidades de ahorro.',
    },
    {
      id: 'q2',
      question: '¿Cuál de las siguientes ECMs (Energy Conservation Measures) tiene típicamente el payback más corto?',
      options: [
        'Aislamiento térmico de techos',
        'Sistema de gestión BMS completo',
        'Corrección de factor de potencia',
        'Cambio de sistema de HVAC',
      ],
      correctIndex: 2,
      explanation: 'La corrección de factor de potencia tiene payback de 1-2 años porque elimina penalizaciones de CFE y reduce pérdidas en cables inmediatamente con inversión relativamente baja en capacitores.',
    },
    {
      id: 'q3',
      question: '¿En una auditoría Nivel 2, qué instrumento se usa para detectar conexiones flojas o puntos calientes en tableros?',
      options: ['Multímetro digital', 'Osciloscopo', 'Cámara termográfica infrarroja', 'Megóhmetro'],
      correctIndex: 2,
      explanation: 'La cámara termográfica infrarroja detecta diferencias de temperatura causadas por conexiones flojas, sobrecarga o fallas en tableros eléctricos, sin necesidad de contacto físico y con el equipo en operación.',
    },
  ],

  // ─── PRO 2: SISTEMAS DE EMERGENCIA ────────────────────────────────────────
  'ups-industrial': [
    {
      id: 'q1',
      question: '¿Qué topología de UPS tiene el mayor consumo eléctrico en operación normal pero protección total?',
      options: ['Offline (Standby)', 'Line-Interactive', 'Online doble conversión (VFI)', 'Delta conversión'],
      correctIndex: 2,
      explanation: 'El UPS VFI (doble conversión online) tiene eficiencia menor (~94%) porque siempre convierte AC→DC→AC, pero ofrece protección total con 0ms de conmutación. El delta-conversión logra hasta 99% de eficiencia.',
    },
    {
      id: 'q2',
      question: '¿Qué ocurre con la vida útil de una batería VRLA cuando la temperatura ambiente sube de 25°C a 33°C (+8°C)?',
      options: ['Se reduce a la mitad', 'Aumenta un 20%', 'No cambia', 'Se reduce un 20%'],
      correctIndex: 0,
      explanation: 'Por cada 8°C de aumento sobre 25°C, la vida útil de las baterías VRLA se reduce a la mitad. A 33°C una batería de vida nominal 5 años durará aproximadamente 2.5 años.',
    },
    {
      id: 'q3',
      question: '¿Qué clasificación Tier de centro de datos requiere que no haya necesidad de apagado para realizar mantenimiento?',
      options: ['Tier I', 'Tier II', 'Tier III', 'Tier IV'],
      correctIndex: 2,
      explanation: 'Tier III tiene redundancia N+1 y no requiere apagado del sistema para mantenimiento preventivo, con disponibilidad del 99.982%. Tier IV además tolera fallas sin interrupción (99.995%).',
    },
  ],

  'grupos-electrogenos-industrial': [
    {
      id: 'q1',
      question: '¿Cuál es el tiempo de transferencia máximo para sistemas de emergencia Clase 10 según NFPA 110 (para hospitales y data centers)?',
      options: ['5 segundos', '10 segundos', '30 segundos', '60 segundos'],
      correctIndex: 1,
      explanation: 'La Clase 10 de NFPA 110 requiere que el sistema de emergencia esté operativo en máximo 10 segundos. Es el requisito para hospitales, data centers y otras instalaciones críticas.',
    },
    {
      id: 'q2',
      question: '¿Qué tipo de potencia (PRP, ESP, COP) se debe especificar para un generador en un hospital que necesita operar las 24 horas del día?',
      options: [
        'ESP (Emergency Standby Power): máximo 500 horas/año',
        'PRP (Prime Power): operación continua sin límite de horas',
        'COP (Continuous Power): carga constante pero no crítica',
        'Cualquier tipo, no importa para hospitales',
      ],
      correctIndex: 1,
      explanation: 'PRP (Prime Power) es la especificación para operación continua sin límite de horas anuales. Un hospital necesita PRP porque el generador puede necesitar operar continuamente durante desastres o cortes prolongados.',
    },
    {
      id: 'q3',
      question: '¿Cuántos litros de diesel aproximados consume un generador de 100 kW por kWh generado?',
      options: ['0.05 L/kWh', '0.25 L/kWh', '1.0 L/kWh', '2.5 L/kWh'],
      correctIndex: 1,
      explanation: 'El consumo típico de diesel en generadores es aproximadamente 0.25 L/kWh. Un generador de 100 kW a plena carga consume ~25 L/hora. Con este dato se calcula la capacidad necesaria del tanque.',
    },
  ],

  'iluminacion-emergencia': [
    {
      id: 'q1',
      question: '¿Cuánto tiempo mínimo debe operar una luminaria autónoma de emergencia cuando falla la red?',
      options: ['15 minutos', '30 minutos', '90 minutos', '4 horas'],
      correctIndex: 2,
      explanation: 'Según las normas de seguridad (NFPA 101, NOM-002-STPS), las luminarias de emergencia deben operar mínimo 90 minutos tras la falla del suministro principal para permitir la evacuación completa.',
    },
    {
      id: 'q2',
      question: '¿Cuál es la iluminancia mínima en el eje central de una vía de evacuación según normas de emergencia?',
      options: ['0.1 lux', '1 lux', '5 lux', '50 lux'],
      correctIndex: 1,
      explanation: 'Las vías de evacuación requieren mínimo 1 lux en el eje central durante la iluminación de emergencia. Las salidas de emergencia requieren 5 lux mínimo para facilitar la apertura de puertas y lectura de señales.',
    },
    {
      id: 'q3',
      question: '¿Qué color de señalización indica "ruta de evacuación/salida de emergencia" según NOM-026?',
      options: ['Rojo con figura blanca', 'Verde con figura blanca', 'Amarillo con figura negra', 'Azul con figura blanca'],
      correctIndex: 1,
      explanation: 'El color verde con figura blanca indica salidas y rutas de evacuación según NOM-026-STPS. El rojo es para equipo contra incendio, amarillo para precaución y azul para elementos obligatorios (EPP).',
    },
  ],

  // ─── PRO 2: INSTALACIONES ESPECIALES ──────────────────────────────────────
  'lugares-clasificados': [
    {
      id: 'q1',
      question: '¿En qué zona (sistema IEC) hay atmósfera explosiva de gases de forma CONTINUA (+1000 horas/año)?',
      options: ['Zona 0', 'Zona 1', 'Zona 2', 'Zona 3'],
      correctIndex: 0,
      explanation: 'La Zona 0 (equivalente a División 1 del sistema NEC) corresponde a áreas donde la atmósfera explosiva está presente de forma continua o por largos periodos, más de 1000 horas al año.',
    },
    {
      id: 'q2',
      question: '¿Qué método de protección (ATEX) encierra las partes que generan chispas en una carcasa resistente a la explosión?',
      options: ['Ex e (seguridad aumentada)', 'Ex ia (seguridad intrínseca)', 'Ex d (a prueba de explosión)', 'Ex p (presurizado)'],
      correctIndex: 2,
      explanation: 'Ex d (a prueba de explosión o antideflagrante) encierra los componentes que pueden generar chispas en una carcasa resistente. Si hay una explosión interna, la carcasa la contiene sin encender la atmósfera exterior.',
    },
    {
      id: 'q3',
      question: '¿Cuál es la función de los sellados de conduit en instalaciones en zonas peligrosas?',
      options: [
        'Impedir la entrada de agua a los conduits',
        'Reducir la resistencia eléctrica del circuito',
        'Evitar que gases inflamables migren por el conduit hacia zonas seguras',
        'Mejorar la conducción térmica del circuito',
      ],
      correctIndex: 2,
      explanation: 'Los sellados de conduit se instalan para evitar que gases o vapores inflamables puedan migrar por el interior del conduit desde una zona peligrosa hacia áreas seguras donde podrían encenderse.',
    },
  ],

  'instalaciones-hospitalarias': [
    {
      id: 'q1',
      question: '¿Cuál es el tiempo máximo de transferencia al sistema de emergencia en áreas críticas hospitalarias (Clase 10)?',
      options: ['2 segundos', '5 segundos', '10 segundos', '30 segundos'],
      correctIndex: 2,
      explanation: 'Las instalaciones hospitalarias requieren transferencia al sistema de emergencia en máximo 10 segundos (Clase 10, NFPA 110). Esto aplica a quirófanos, UCI y urgencias.',
    },
    {
      id: 'q2',
      question: '¿Por qué se usan sistemas IT (transformadores de aislamiento) en quirófanos?',
      options: [
        'Para ahorrar energía en el quirófano',
        'Para que un primer fallo a tierra no cause cortocircuito ni apague equipos durante cirugía',
        'Para reducir la factura de CFE del hospital',
        'Para proteger los equipos contra rayos',
      ],
      correctIndex: 1,
      explanation: 'En el sistema IT hospitalario, un primer fallo a tierra no causa cortocircuito porque el sistema está aislado galvánicamente. El LIM (monitor de aislamiento) alarma, pero la operación puede continuar con seguridad.',
    },
    {
      id: 'q3',
      question: '¿Cuál es la diferencia de potencial máxima permitida entre equipos médicos y tierra en áreas de cuidado crítico?',
      options: ['5 mV', '40 mV', '100 mV', '500 mV'],
      correctIndex: 1,
      explanation: 'La NFPA 99 establece que la diferencia de potencial máxima entre cualquier equipo médico y el bus de tierra de referencia no debe exceder 40 mV en áreas de cuidado crítico, para prevenir microelectrocución.',
    },
  ],

  'instalaciones-albercas': [
    {
      id: 'q1',
      question: '¿A qué distancia horizontal del borde de la alberca está prohibido instalar cajas o equipos eléctricos?',
      options: ['30 cm', '60 cm', '1.5 m', '3 m'],
      correctIndex: 2,
      explanation: 'La Zona A (0-1.5m del agua) tiene prohibición de instalar cualquier caja o equipo eléctrico. Esto incluye contactos, cajas de paso y cualquier elemento eléctrico.',
    },
    {
      id: 'q2',
      question: '¿Cuál es el propósito del "bonding equipotencial" en una alberca?',
      options: [
        'Conectar todas las luminarias a la misma fase',
        'Conectar todos los elementos metálicos entre sí para evitar diferencias de potencial en el agua',
        'Poner a tierra todos los equipos eléctricos de la alberca',
        'Proteger el motor de la bomba contra sobrecorriente',
      ],
      correctIndex: 1,
      explanation: 'El bonding equipotencial conecta todos los elementos conductores (escaleras, tuberías, armado de concreto) al mismo potencial. Esto evita diferencias de potencial en el agua que podrían atrapar o electrocutar a nadadores.',
    },
    {
      id: 'q3',
      question: '¿Qué voltaje máximo se recomienda para la iluminación subacuática de albercas?',
      options: ['12V (extra baja tensión)', '36V', '127V con GFCI', '220V trifásico'],
      correctIndex: 0,
      explanation: 'Las luminarias subacuáticas de 12V son las más seguras. A 12V, incluso si hubiera un fallo de aislamiento en el agua, la energía disponible no es suficiente para causar electrocución. Se alimentan con transformador de aislamiento.',
    },
  ],

  // ─── PRO 2: SCADA Y REDES INDUSTRIALES ────────────────────────────────────
  'scada-sistemas': [
    {
      id: 'q1',
      question: '¿Qué significa SCADA?',
      options: [
        'System Control And Data Architecture',
        'Supervisory Control And Data Acquisition',
        'Standard Control And Distribution Automation',
        'Safety Control And Device Administration',
      ],
      correctIndex: 1,
      explanation: 'SCADA = Supervisory Control And Data Acquisition. Es un sistema para supervisar y controlar procesos industriales de forma remota, adquiriendo datos de sensores y enviando comandos a actuadores.',
    },
    {
      id: 'q2',
      question: '¿Cuál es el protocolo de comunicación más usado en distribución eléctrica de México y utilities?',
      options: ['Modbus TCP', 'DNP3', 'Profibus DP', 'MQTT'],
      correctIndex: 1,
      explanation: 'DNP3 (Distributed Network Protocol 3) es el estándar predominante en distribución eléctrica en México y utilities norteamericanas. Está diseñado específicamente para telecomunicaciones de sistemas eléctricos.',
    },
    {
      id: 'q3',
      question: '¿Por qué las redes SCADA eléctricas deben estar aisladas de internet y redes corporativas (air gap)?',
      options: [
        'Para reducir el consumo de ancho de banda',
        'Para evitar ataques cibernéticos que podrían interrumpir el suministro eléctrico',
        'Porque los protocolos SCADA no son compatibles con TCP/IP',
        'Por requisito del fabricante de los equipos',
      ],
      correctIndex: 1,
      explanation: 'Las redes SCADA son infraestructura crítica. Un ataque cibernético exitoso podría interrumpir el suministro eléctrico a ciudades enteras. El aislamiento (air gap) y otras medidas de ciberseguridad son esenciales.',
    },
  ],

  'redes-industriales': [
    {
      id: 'q1',
      question: '¿Cuántos dispositivos esclavos máximo soporta una red Modbus RTU en RS-485?',
      options: ['16 esclavos', '32 esclavos', '64 esclavos', '247 esclavos'],
      correctIndex: 3,
      explanation: 'Modbus RTU sobre RS-485 soporta hasta 247 dispositivos esclavos (direcciones 1-247). La dirección 0 está reservada para broadcast (mensaje a todos los esclavos simultáneamente).',
    },
    {
      id: 'q2',
      question: '¿Qué registro Modbus se usa para leer y escribir parámetros de un variador de frecuencia?',
      options: ['Coils (0x)', 'Discrete Inputs (1x)', 'Input Registers (3x)', 'Holding Registers (4x)'],
      correctIndex: 3,
      explanation: 'Los Holding Registers (función 4x, código de función 03) son registros de lectura/escritura de 16 bits. Se usan para parámetros de variadores, setpoints de PID, configuración de equipos y estados modificables.',
    },
    {
      id: 'q3',
      question: '¿Cuál es la principal ventaja de EtherNet/IP sobre Modbus TCP para aplicaciones industriales de alta velocidad?',
      options: [
        'EtherNet/IP es más económico',
        'EtherNet/IP es más simple de configurar',
        'EtherNet/IP tiene determinismo y sincronización de tiempo (CIP Sync) para control en tiempo real',
        'EtherNet/IP funciona en cables más largos',
      ],
      correctIndex: 2,
      explanation: 'EtherNet/IP con CIP Sync proporciona sincronización de tiempo precisa y determinismo mediante QoS, permitiendo control de movimiento coordinado (robótica, servo drives) que Modbus TCP no puede garantizar.',
    },
  ],

  'edificios-inteligentes': [
    {
      id: 'q1',
      question: '¿Qué protocolo de automatización de edificios es el más usado globalmente para control de HVAC?',
      options: ['KNX', 'BACnet', 'LonWorks', 'DALI'],
      correctIndex: 1,
      explanation: 'BACnet (Building Automation and Control Networks, ANSI/ASHRAE 135) es el protocolo más usado globalmente para HVAC en edificios. Es un estándar abierto soportado por la mayoría de fabricantes de equipos HVAC.',
    },
    {
      id: 'q2',
      question: '¿Cuántas luminarias se pueden controlar en un bus DALI?',
      options: ['16 luminarias', '32 luminarias', '64 luminarias', '256 luminarias'],
      correctIndex: 2,
      explanation: 'DALI (Digital Addressable Lighting Interface) soporta hasta 64 luminarias por bus, con control individual de cada una en 256 niveles de dimmer. Se pueden crear grupos y escenas de iluminación.',
    },
    {
      id: 'q3',
      question: '¿Cuánto ahorro energético típico se logra en iluminación y HVAC con control inteligente en un edificio?',
      options: ['5-10%', '10-15%', '20-40%', '60-80%'],
      correctIndex: 2,
      explanation: 'Los sistemas de automatización de edificios (BAS) logran típicamente 20-40% de ahorro en energía de iluminación y HVAC, principalmente por ajustar automáticamente las condiciones según ocupación, horario y condiciones exteriores.',
    },
  ],

  // ─── PRO 2: MEDIA Y ALTA TENSIÓN ──────────────────────────────────────────
  'subestaciones-mt': [
    {
      id: 'q1',
      question: '¿En qué nivel de tensión recibe suministro la mayoría de industrias y comercios grandes en México?',
      options: ['440V trifásico', '4.16 kV', '13.8 kV (tarifa HM/HSL)', '115 kV'],
      correctIndex: 2,
      explanation: 'La mayoría de clientes industriales y comerciales grandes reciben suministro a 13.8 kV bajo tarifas HM (alta tensión media punta) o HSL de CFE, que requieren subestación propia del cliente.',
    },
    {
      id: 'q2',
      question: '¿Cuál es la diferencia principal entre un interruptor de potencia y un seccionalizador?',
      options: [
        'El seccionalizador es más barato pero tiene la misma función',
        'El interruptor puede abrir en carga y cortocircuito; el seccionalizador solo abre en vacío',
        'El interruptor es para BT; el seccionalizador es para MT',
        'No hay diferencia funcional',
      ],
      correctIndex: 1,
      explanation: 'El interruptor de potencia puede interrumpir corrientes de carga y cortocircuito. El seccionalizador solo puede operar en vacío (sin carga) y no puede interrumpir cortocircuitos. Por eso siempre va acompañado de protecciones.',
    },
    {
      id: 'q3',
      question: '¿Por qué el gas SF6 se usa como medio de extinción en interruptores de MT?',
      options: [
        'Es el gas más barato disponible',
        'Tiene excelentes propiedades dieléctricas y de extinción del arco eléctrico',
        'No conduce electricidad bajo ninguna circunstancia',
        'Es ecológicamente favorable',
      ],
      correctIndex: 1,
      explanation: 'El SF6 (hexafluoruro de azufre) tiene excelentes propiedades dieléctricas (muy alta rigidez dieléctrica) y de extinción del arco. Sin embargo, es un gas de efecto invernadero con GWP de 23,500 veces el CO2, por lo que está siendo remplazado gradualmente.',
    },
  ],

  'cables-media-tension': [
    {
      id: 'q1',
      question: '¿Para qué sirve la pantalla semiconductora en los cables de media tensión?',
      options: [
        'Para identificar el cable por su color',
        'Para aumentar la capacidad de corriente del conductor',
        'Para distribuir uniformemente el campo eléctrico y evitar descargas parciales',
        'Para proteger contra humedad',
      ],
      correctIndex: 2,
      explanation: 'La pantalla semiconductora (interior y exterior) distribuye el campo eléctrico de forma uniforme alrededor del conductor, evitando concentraciones de campo que causarían descargas parciales y deterioro prematuro del aislamiento.',
    },
    {
      id: 'q2',
      question: '¿Cuál es la profundidad mínima de instalación para cables de MT directamente enterrados en áreas de tráfico vehicular?',
      options: ['30 cm', '60 cm', '90 cm', '1.5 m'],
      correctIndex: 2,
      explanation: 'Los cables de MT directamente enterrados en áreas de tráfico vehicular deben instalarse a mínimo 0.9m (90cm) de profundidad, más arena de cama y cinta de advertencia naranja a 30cm sobre el cable.',
    },
    {
      id: 'q3',
      question: '¿Qué prueba detecta defectos en el aislamiento de cables MT sin necesidad de desmontarlos?',
      options: [
        'Prueba de continuidad con multímetro',
        'Prueba de resistencia de aislamiento (Megger)',
        'Detección de descargas parciales',
        'Prueba de caída de tensión',
      ],
      correctIndex: 2,
      explanation: 'La detección de descargas parciales identifica defectos localizados en el aislamiento que todavía no han causado falla total. Permite tomar acción preventiva antes de que el cable falle completamente en servicio.',
    },
  ],

  'transformadores-potencia': [
    {
      id: 'q1',
      question: 'Un transformador tiene 1000 vueltas en el primario y 100 vueltas en el secundario. Si el primario tiene 13,800V, ¿cuánto hay en el secundario?',
      options: ['138V', '1,380V', '13,800V', '138,000V'],
      correctIndex: 1,
      explanation: 'V₂ = V₁ × (N₂/N₁) = 13,800 × (100/1000) = 1,380V. La relación de transformación determina la relación de voltajes e inversamente la relación de corrientes.',
    },
    {
      id: 'q2',
      question: '¿Qué conexión trifásica es la estándar de CFE para transformadores de distribución en México?',
      options: ['Yy0 (estrella-estrella)', 'Dy11 (delta-estrella)', 'Yd11 (estrella-delta)', 'Dd0 (delta-delta)'],
      correctIndex: 1,
      explanation: 'Dy11 (delta en el primario, estrella en el secundario, desfase 330°) es la conexión estándar de CFE para transformadores de distribución. La conexión delta en el primario elimina los armónicos de 3° orden.',
    },
    {
      id: 'q3',
      question: '¿Qué prueba de mantenimiento en un transformador de aceite detecta problemas internos por los gases que se forman?',
      options: [
        'Prueba de relación de transformación (TTR)',
        'Análisis de gases disueltos en aceite (DGA)',
        'Prueba de resistencia de aislamiento (Megger)',
        'Medición de pérdidas en vacío',
      ],
      correctIndex: 1,
      explanation: 'El Análisis de Gases Disueltos (DGA) detecta problemas internos por los gases que generan: acetileno indica arco eléctrico, metano sobrecalentamiento de aceite, etileno sobrecalentamiento severo. Es la herramienta más valiosa de mantenimiento predictivo.',
    },
  ],

  // ─── PRO 2: CARRERA PROFESIONAL ───────────────────────────────────────────
  'documentacion-proyectos': [
    {
      id: 'q1',
      question: '¿Qué son los planos "as-built" o "como quedó"?',
      options: [
        'Los planos originales del proyecto antes de la construcción',
        'Los planos actualizados reflejando los cambios realizados durante la obra',
        'Los planos de mantenimiento preventivo',
        'Los planos de las instalaciones eléctricas anteriores',
      ],
      correctIndex: 1,
      explanation: 'Los planos as-built son los planos actualizados después de la obra, que reflejan exactamente cómo quedó la instalación (cambios de trayectorias, equipos, etc.). Son esenciales para el mantenimiento futuro.',
    },
    {
      id: 'q2',
      question: '¿Qué documento del expediente técnico contiene el listado de cargas y el cálculo de conductores?',
      options: ['Especificaciones técnicas', 'Memoria de cálculo', 'Catálogo de conceptos', 'Bitácora de obra'],
      correctIndex: 1,
      explanation: 'La memoria de cálculo contiene: listado de cargas, demanda máxima, cálculo de conductores (capacidad de corriente y caída de tensión), cálculo de cortocircuito, sistema de tierras y coordinación de protecciones.',
    },
    {
      id: 'q3',
      question: '¿Qué software especializado se usa para cálculos de sistemas eléctricos (cortocircuito, coordinación, flujos de carga)?',
      options: ['AutoCAD eléctrico', 'ETAP o SKM PowerTools', 'Microsoft Project', 'Revit MEP'],
      correctIndex: 1,
      explanation: 'ETAP y SKM PowerTools son los softwares estándar para análisis eléctricos (cortocircuito, coordinación de protecciones, flujos de carga, estabilidad). AutoCAD Electrical es para planos y diagramas.',
    },
  ],

  'certificaciones-mexico': [
    {
      id: 'q1',
      question: '¿Qué documento legal habilita el ejercicio profesional de la ingeniería eléctrica en México?',
      options: ['Diploma de bachillerato técnico', 'Certificado ANCE', 'Cédula profesional (SEP)', 'Credencial de elector'],
      correctIndex: 2,
      explanation: 'La cédula profesional emitida por la SEP es el documento que legalmente habilita el ejercicio de la ingeniería eléctrica en México. Se obtiene tras completar una licenciatura universitaria con RVOE.',
    },
    {
      id: 'q2',
      question: '¿Qué organismo en México certifica que los productos eléctricos cumplen las NOM?',
      options: ['IMSS', 'ANCE (Asociación de Normalización y Certificación)', 'PROFECO', 'CONUEE'],
      correctIndex: 1,
      explanation: 'ANCE (Asociación de Normalización y Certificación) es el organismo de certificación de productos eléctricos más importante en México. Certifica equipos, instalaciones y también habilita a profesionales como peritos.',
    },
    {
      id: 'q3',
      question: '¿Cuál de las siguientes certificaciones internacionales es más relevante para instaladores de sistemas fotovoltaicos?',
      options: ['LEED AP (edificios sustentables)', 'NABCEP (North American Board of Certified Energy Practitioners)', 'CEA (Certified Energy Auditor)', 'IBEW Journeyman (electricista EE.UU.)'],
      correctIndex: 1,
      explanation: 'NABCEP (PV Installation Professional) es la certificación más reconocida para instaladores de sistemas solares fotovoltaicos en Norteamérica, valorada por clientes y empresas del sector solar.',
    },
  ],

  'calculo-presupuesto': [
    {
      id: 'q1',
      question: 'En la estructura de costos de un proyecto eléctrico, ¿qué incluye el "costo directo"?',
      options: [
        'Solo el costo de los materiales',
        'Materiales, mano de obra y herramienta/equipo usado directamente en la obra',
        'Todos los costos incluyendo la utilidad del contratista',
        'Solo la mano de obra del electricista',
      ],
      correctIndex: 1,
      explanation: 'El costo directo incluye: materiales (cables, tableros, contactos), mano de obra (electricistas, ayudantes incluyendo prestaciones) y herramienta/equipo. Los costos indirectos (administración, seguros) y la utilidad son adicionales.',
    },
    {
      id: 'q2',
      question: '¿Qué porcentaje de anticipo es típico y recomendable pedir antes de iniciar una obra?',
      options: ['0% (se cobra todo al final)', '10-15%', '30%', '80%'],
      correctIndex: 2,
      explanation: 'Un anticipo del 30% es estándar para proyectos eléctricos. Permite comprar los materiales sin que el contratista ponga capital propio. La estructura típica es: 30% anticipo, 40% a mitad, 30% al terminar.',
    },
    {
      id: 'q3',
      question: 'Un trabajo cuesta $9,280 pesos en costos directos, con indirectos de 15% y utilidad de 25%. ¿Cuánto es el total sin IVA?',
      options: ['$11,136', '$12,042', '$13,332', '$15,200'],
      correctIndex: 2,
      explanation: 'Indirectos: $9,280 × 0.15 = $1,392. Subtotal con indirectos: $10,672. Utilidad: $10,672 × 0.25 = $2,660 (o aplicada sobre el directo: $9,280 × 0.25 = $2,320). Total ≈ $13,332.',
    },
  ],

  'mantenimiento-preventivo': [
    {
      id: 'q1',
      question: '¿Cuál es el tipo de mantenimiento que detecta fallas ANTES de que ocurran mediante análisis de tendencias?',
      options: ['Mantenimiento correctivo', 'Mantenimiento preventivo', 'Mantenimiento predictivo', 'Mantenimiento proactivo'],
      correctIndex: 2,
      explanation: 'El mantenimiento predictivo usa monitoreo continuo de variables (temperatura, vibración, calidad de aceite) para detectar tendencias y predecir cuándo fallará un equipo, permitiendo intervenir antes de la falla.',
    },
    {
      id: 'q2',
      question: 'En termografía infrarroja, ¿qué diferencia de temperatura (ΔT) entre una conexión y otra similar requiere reparación INMEDIATA?',
      options: ['ΔT de 1-5°C', 'ΔT de 5-10°C', 'ΔT de 10-30°C', 'ΔT mayor de 30°C'],
      correctIndex: 3,
      explanation: 'Una diferencia de temperatura mayor a 30°C entre una conexión y otra similar (o >40°C sobre la temperatura ambiente) indica un problema severo que requiere reparación inmediata antes de que cause una falla.',
    },
    {
      id: 'q3',
      question: '¿Con qué frecuencia se recomienda realizar análisis de calidad de energía (analizador de redes) en instalaciones industriales?',
      options: ['Mensualmente', 'Trimestralmente', 'Anualmente', 'Solo cuando hay problemas'],
      correctIndex: 2,
      explanation: 'El análisis de calidad de energía se recomienda anualmente en el programa de mantenimiento preventivo, para detectar deterioro en el factor de potencia, incremento de armónicos y variaciones de voltaje que indiquen cambios en el proceso.',
    },
  ],
};
