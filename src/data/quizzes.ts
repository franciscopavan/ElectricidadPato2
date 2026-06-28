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
};
