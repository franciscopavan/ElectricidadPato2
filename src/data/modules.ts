import { Module } from '../types';

export const MODULES: Module[] = [
  // ─── FREE ───────────────────────────────────────────────────────────────────
  {
    id: 'fundamentos',
    title: 'Fundamentos Eléctricos',
    description: 'Aprende qué es la electricidad desde cero, sin experiencia previa.',
    icon: '⚡',
    tier: 'free',
    color: '#4CAF50',
    lessons: [
      {
        id: 'que-es-electricidad',
        title: '¿Qué es la electricidad?',
        description: 'Conceptos básicos: voltaje, corriente y resistencia explicados de forma sencilla.',
        duration: '8 min',
        tier: 'free',
        icon: '💡',
        tags: ['básico', 'conceptos'],
        content: `# ¿Qué es la electricidad?

La electricidad es el movimiento de electrones a través de un conductor. Piénsalo como agua fluyendo por una tubería.

## Los 3 conceptos clave

### Voltaje (V) — La presión
El voltaje es la "fuerza" que empuja los electrones. En México, el voltaje estándar en el hogar es **127V** (en algunos lugares 120V).

> ⚠️ En México la CFE suministra 127V en instalaciones residenciales.

### Corriente (A) — El flujo
La corriente es la cantidad de electrones que fluyen. Se mide en **Amperes (A)**. Un foco normal usa ~0.5A, un aire acondicionado puede usar 10-15A.

### Resistencia (Ω) — La fricción
La resistencia es lo que se opone al flujo de electricidad. Se mide en **Ohms (Ω)**. Los cables tienen resistencia muy baja; los aislantes tienen resistencia muy alta.

## La Ley de Ohm
La relación entre estos tres es simple:

**V = I × R**

- V = Voltaje (Volts)
- I = Corriente (Amperes)
- R = Resistencia (Ohms)

## ¿Por qué importa esto?
Si conectas un aparato que necesita más corriente de la que el cable puede manejar, el cable se calienta y puede causar un incendio. Por eso existen los fusibles y los interruptores termomagnéticos.

## Dato curioso 🦆
El cuerpo humano tiene una resistencia de ~1,000 Ω cuando está seco. Por eso, con 127V podrían fluir ~0.127A a través de ti, suficiente para ser peligroso. ¡Por eso el pato no toca cables!`,
      },
      {
        id: 'seguridad-basica',
        title: 'Seguridad eléctrica básica',
        description: 'Reglas de oro para no electrocutarte en casa.',
        duration: '6 min',
        tier: 'free',
        icon: '🦺',
        tags: ['seguridad', 'básico'],
        content: `# Seguridad Eléctrica Básica

Antes de tocar cualquier instalación eléctrica, debes conocer estas reglas. No son opcionales.

## Regla #1: Siempre corta la energía
Ve a tu tablero (centro de carga) y apaga el interruptor del circuito en el que vas a trabajar. Luego verifica con un probador de voltaje que no hay energía.

> ⚡ **NUNCA** trabajes con corriente viva si no tienes entrenamiento.

## Regla #2: Verifica, no asumas
Aunque hayas apagado el interruptor, usa un multímetro o probador de voltaje para confirmar que no hay electricidad en los cables.

## Regla #3: Una mano en el bolsillo
Cuando trabajes cerca de partes energizadas, mete una mano en el bolsillo. Esto evita que la corriente pase de una mano a otra (a través del corazón).

## Regla #4: No en superficies húmedas
El agua conduce electricidad. Nunca trabajes en instalaciones eléctricas con el piso mojado o las manos húmedas.

## Regla #5: Herramientas aisladas
Usa desarmadores, pinzas y demás herramientas con mangos de hule o plástico aislante. Busca la marca de 1000V en las herramientas.

## ¿Cuándo llamar a un electricista?
- Cuando hay chispas o quemaduras en contactos
- Cuando se dispara repetidamente un interruptor
- Cuando hueles a quemado sin fuente obvia
- Para instalaciones nuevas o cambios de tablero
- Para cualquier trabajo en 220V o trifásico`,
      },
      {
        id: 'herramientas-basicas',
        title: 'Herramientas básicas del electricista',
        description: 'Qué necesitas tener antes de empezar cualquier trabajo eléctrico.',
        duration: '5 min',
        tier: 'free',
        icon: '🔧',
        tags: ['herramientas', 'básico'],
        content: `# Herramientas Básicas del Electricista

Para hacer trabajos eléctricos básicos en casa necesitas este kit mínimo:

## Herramientas esenciales

### 1. Probador de voltaje (Testeador)
El más importante. Antes de tocar cualquier cable, prueba si tiene corriente. Los hay desde $50 pesos.

### 2. Multímetro
Mide voltaje, corriente y resistencia. Es el "termómetro" del electricista. Uno básico cuesta ~$200-400 pesos.

### 3. Desarmadores aislados
- Plano (de paleta)
- Phillips (de cruz)
Asegúrate de que digan **1000V** en el mango.

### 4. Pinzas
- **Pinzas de punta** (para agarrar cables en espacios pequeños)
- **Pinzas de corte** (para cortar cables)
- **Pinzas de electricista** (para todo)

### 5. Pelacables
Para retirar el aislante de los cables sin cortarlos.

### 6. Cinta aislante (Teipe)
Para aislar empalmes y conexiones. Usa de buena calidad (3M es la referencia).

### 7. Cúter o navaja
Para quitar aislante de cables más gruesos.

## Equipo de protección personal (EPP)
- **Guantes de hule** (para trabajo en partes con potencial energía)
- **Lentes de seguridad**
- **Calzado con suela de hule**

## Lo que NO usar
- Desarmadores sin aislante en el mango
- Herramientas con cables o mangos dañados
- Escaleras de metal cerca de instalaciones energizadas`,
      },
      {
        id: 'tipos-cables',
        title: 'Tipos de cables eléctricos',
        description: 'Conoce los cables que se usan en instalaciones residenciales en México.',
        duration: '7 min',
        tier: 'free',
        icon: '🔌',
        tags: ['cables', 'básico', 'NOM'],
        content: `# Tipos de Cables Eléctricos en México

En México, los cables se rigen por la **NOM-001-SEDE** y se identifican principalmente por su calibre en la escala **AWG** (American Wire Gauge).

## ¿Qué es el calibre AWG?
Contraintuitivo: a mayor número AWG, cable más delgado.
- Cable 14 AWG → más grueso que cable 18 AWG
- Cable 12 AWG → más grueso que cable 14 AWG

## Cables más comunes en viviendas

| Calibre | Capacidad | Uso típico |
|---------|-----------|------------|
| 18 AWG  | 7A        | Extensiones ligeras, luminarias pequeñas |
| 16 AWG  | 13A       | Lámparas, aparatos pequeños |
| 14 AWG  | 15A       | Contactos e iluminación general |
| 12 AWG  | 20A       | Contactos de cocina, lavadora |
| 10 AWG  | 30A       | Secadora, A/C pequeño |
| 8 AWG   | 40A       | A/C grande, jacuzzi |
| 6 AWG   | 55A       | Entrada de servicio, hornos |

## Colores de cables (NOM México)
- 🔴 **Rojo / Negro**: Fase (línea viva) — ¡CON VOLTAJE!
- ⚪ **Blanco / Gris**: Neutro
- 🟢 **Verde / Verde-amarillo**: Tierra física

> ⚠️ En instalaciones antiguas los colores pueden no seguir esta convención. Siempre verifica con el multímetro.

## Tipos de cable por construcción
- **THW**: Cable sólido o cableado, para tubería conduit
- **THHW**: Mejor aislamiento, soporta más temperatura
- **THWN**: Con protección de nylon, ideal para conduit
- **Cable dúplex**: Para extensiones y conexiones temporales`,
      },
    ],
  },

  // ─── BASIC ($5/mes) ─────────────────────────────────────────────────────────
  {
    id: 'instalaciones-basicas',
    title: 'Instalaciones Básicas',
    description: 'Aprende a conectar contactos, apagadores y más con seguridad.',
    icon: '🔌',
    tier: 'basic',
    color: '#2196F3',
    lessons: [
      {
        id: 'conectar-contacto',
        title: 'Cómo conectar un contacto (tomacorriente)',
        description: 'Paso a paso para instalar o reemplazar un contacto eléctrico en casa.',
        duration: '12 min',
        tier: 'basic',
        icon: '🔌',
        tags: ['contacto', 'instalación', 'residencial'],
        content: `# Cómo Conectar un Contacto Eléctrico

Un contacto (tomacorriente) es uno de los trabajos más comunes. Sigue estos pasos con cuidado.

## Materiales necesarios
- Contacto nuevo (10A o 15A, doble polo con tierra)
- Desarmador plano y Phillips aislados
- Probador de voltaje / multímetro
- Cinta aislante

## Paso 1: Corta la energía
Ve al tablero y apaga el interruptor del circuito. **Verifica con el probador** que el contacto no tenga voltaje.

## Paso 2: Retira el contacto viejo
Quita la tapa (1 o 2 tornillos). Luego quita los tornillos del contacto a la caja. Jala suavemente el contacto y observa cómo están conectados los cables.

## Paso 3: Identifica los cables
- **Negro o Rojo**: Fase (va al terminal más pequeño, latón dorado)
- **Blanco**: Neutro (va al terminal plateado)
- **Verde o desnudo**: Tierra (va al terminal verde)

## Paso 4: Conecta el nuevo contacto
Pela ~2cm de cada cable. Conecta:
1. Tierra (verde) → tornillo verde del contacto
2. Neutro (blanco) → tornillo plateado (lado derecho, ranura larga)
3. Fase (negro) → tornillo dorado (lado izquierdo, ranura corta)

Aprieta bien cada tornillo. El cable no debe moverse.

## Paso 5: Prueba y cierra
Dobla los cables en acordeón, mete el contacto a la caja. Pon los tornillos y la tapa. Regresa al tablero y enciende el interruptor. Verifica con el multímetro: debe leer ~127V entre fase y neutro.

> ⚠️ Si los cables llegan sueltos, sin tierra, o ves daños en el aislante, llama a un electricista.`,
      },
      {
        id: 'instalar-apagador',
        title: 'Cómo instalar un apagador',
        description: 'Apagadores sencillos, de 3 vías y de 4 vías explicados.',
        duration: '15 min',
        tier: 'basic',
        icon: '💡',
        tags: ['apagador', 'switch', 'instalación'],
        content: `# Cómo Instalar un Apagador

## Tipos de apagadores
- **Sencillo (1 vía)**: Un apagador controla una lámpara desde un solo punto.
- **3 vías (two-way)**: Dos apagadores controlan la misma lámpara (típico en escaleras).
- **4 vías**: Se usa entre dos apagadores de 3 vías para control desde 3+ puntos.

## Apagador Sencillo — Paso a paso

### Materiales
- Apagador sencillo 10A/127V
- Herramientas aisladas, probador de voltaje

### Procedimiento
1. **Corta la energía** en el tablero. Verifica con probador.
2. Retira la tapa y el apagador viejo.
3. Identifica los cables:
   - Generalmente verás 2 cables (en apagadores sencillos no hay distinción neutro/fase en el switch, ambos son "fases")
4. Conecta un cable a cada terminal del apagador (los tornillos de latón).
5. Si hay cable de tierra verde: conéctalo al tornillo verde.
6. Regresa a la caja, atornilla, pon la tapa.
7. Restaura energía y prueba.

## Apagador de 3 Vías

Tiene 3 terminales: uno común (COM, generalmente negro o marcado) y dos traveler terminals.

- El **COM** del primer apagador recibe la fase viva.
- Los **travelers** conectan los dos apagadores entre sí (2 cables entre ellos).
- El **COM** del segundo apagador va a la lámpara.

> 💡 Si la lámpara no enciende o siempre está encendida, probablemente los travelers están invertidos. Intercámbialos.`,
      },
      {
        id: 'circuitos-residenciales',
        title: 'Circuitos residenciales',
        description: 'Cómo funciona la instalación eléctrica de una casa.',
        duration: '14 min',
        tier: 'basic',
        icon: '🏠',
        tags: ['circuitos', 'residencial', 'NOM'],
        content: `# Circuitos Residenciales

## ¿Cómo llega la luz a tu casa?

1. **CFE** genera y transmite energía en alta tensión (miles de voltios)
2. Un **transformador** en tu colonia baja el voltaje a 127V (o 240V bifásico)
3. Llega al **medidor CFE** en tu casa
4. Del medidor pasa al **Centro de Carga (tablero)**
5. Del tablero salen los **circuitos** hacia cada área de tu casa

## El Centro de Carga (Tablero)
Es la "central de mando" eléctrica de tu casa. Contiene:
- **Interruptor principal**: Corta toda la energía de la casa
- **Interruptores termomagnéticos (ITM)**: Protegen cada circuito

## Tipos de circuitos en vivienda (NOM-001-SEDE)

| Circuito | Calibre mínimo | Interruptor | Uso |
|----------|---------------|-------------|-----|
| Iluminación | 14 AWG | 15A | Lámparas |
| Contactos generales | 12 AWG | 20A | Sala, recámaras |
| Cocina | 12 AWG | 20A | Refrigerador, microondas |
| Lavadora | 12 AWG | 20A | Solo lavadora |
| A/C | 10-8 AWG | 30-40A | Minisplit o A/C ventana |

## Interruptores Termomagnéticos (ITM)
Los "breakers" protegen el cable del calor excesivo. Si un circuito consume más corriente de la permitida, el ITM se dispara (se "brinca").

**¿Por qué se dispara un ITM?**
- Sobrecarga: demasiados aparatos en el circuito
- Cortocircuito: contacto directo fase-neutro
- Falla a tierra: corriente yéndose por la tierra física

> ✅ Si un ITM se dispara frecuentemente, NO lo ignores. Hay un problema real en el circuito.`,
      },
      {
        id: 'iluminacion-led',
        title: 'Iluminación LED y ahorro de energía',
        description: 'Tipos de luminarias, comparativa y cómo calcular tu consumo.',
        duration: '10 min',
        tier: 'basic',
        icon: '💡',
        tags: ['LED', 'ahorro', 'iluminación'],
        content: `# Iluminación LED y Ahorro de Energía

## Comparativa de tecnologías

| Tecnología | Watts típicos | Lumens | Vida útil | Costo |
|-----------|--------------|--------|-----------|-------|
| Incandescente | 60W | 800lm | 1,000 hrs | Bajo |
| Fluorescente compacta | 15W | 800lm | 8,000 hrs | Medio |
| LED | 9W | 800lm | 25,000 hrs | Medio-alto |

**Conclusión**: Un LED de 9W reemplaza un foco incandescente de 60W, con 25x más vida útil.

## Cómo calcular tu ahorro
Si tienes 10 focos incandescentes de 60W que usas 5 horas/día:
- Consumo actual: 10 × 60W × 5h = 3,000 Wh = **3 kWh/día**
- Con LED 9W: 10 × 9W × 5h = 450 Wh = **0.45 kWh/día**
- Ahorro: 2.55 kWh/día × 30 días = **76.5 kWh/mes**
- A ~$1.5/kWh en CFE = **~$115 pesos menos por mes**

## Tipos de casquillos (base)
- **E27**: El más común (rosca mediana)
- **E14**: Rosca pequeña (lámparas decorativas)
- **GU10**: Para spots empotrados
- **GU5.3 / MR16**: Para rieles de iluminación

## Color de la luz (temperatura de color)
- **2700K - 3000K**: Blanco cálido (amarillo) — relajante, para recámaras
- **4000K**: Blanco neutro — para oficinas y cocinas
- **6500K**: Blanco frío / luz de día — para talleres y garajes`,
      },
    ],
  },

  // ─── PRO ($20/mes) ──────────────────────────────────────────────────────────
  {
    id: 'normas-nom',
    title: 'Normas NOM-001-SEDE',
    description: 'El reglamento oficial de instalaciones eléctricas en México.',
    icon: '📋',
    tier: 'pro',
    color: '#F5A623',
    lessons: [
      {
        id: 'introduccion-nom',
        title: 'Introducción a la NOM-001-SEDE',
        description: 'Qué es, para qué sirve y cómo aplicar la norma oficial mexicana.',
        duration: '20 min',
        tier: 'pro',
        icon: '📋',
        tags: ['NOM', 'normas', 'regulación'],
        content: `# NOM-001-SEDE: La Norma Oficial Mexicana de Instalaciones Eléctricas

## ¿Qué es la NOM-001-SEDE?
La **Norma Oficial Mexicana de Seguridad para Instalaciones de Utilización de Energía Eléctrica** es el marco regulatorio que deben cumplir TODAS las instalaciones eléctricas en México.

Es equivalente al NEC (National Electrical Code) de EE.UU. pero adaptado a la regulación mexicana.

## ¿Quién la exige?
- **CFE**: Para dar servicio a un inmueble
- **IMSS / ISSSTE**: Para instalaciones industriales
- **Municipios**: Para permisos de construcción
- **Aseguradoras**: Para validar instalaciones

## Estructura de la norma
La NOM-001-SEDE se divide en artículos que cubren:

| Artículo | Tema |
|---------|------|
| 100 | Definiciones |
| 200 | Cableado y protecciones |
| 210 | Circuitos derivados |
| 215 | Alimentadores |
| 220 | Cálculo de cargas |
| 230 | Acometidas |
| 240 | Protección contra sobre-corriente |
| 250 | Puesta a tierra |
| 300-399 | Métodos de cableado |
| 400-499 | Equipo para uso general |

## Puntos clave para residencial

### Circuitos mínimos (Art. 210)
Toda vivienda debe tener como mínimo:
- 1 circuito de iluminación por cada 33m²
- 1 circuito de contactos por cada 33m²
- Circuito exclusivo para cocina
- Circuito exclusivo para lavadora
- Circuito exclusivo para A/C (si existe)

### Puesta a tierra (Art. 250)
Obligatoria en toda instalación nueva. El electrodo de tierra debe tener resistencia ≤ 25Ω.

### Tubería conduit (Art. 300)
Todo cableado empotrado debe ir en tubería conduit. El cable no debe ir directo en la pared sin protección.`,
      },
      {
        id: 'diagramas-electricos',
        title: 'Lectura e interpretación de diagramas eléctricos',
        description: 'Aprende a leer planos eléctricos, diagramas unifilares y esquemáticos.',
        duration: '25 min',
        tier: 'pro',
        icon: '📐',
        tags: ['diagramas', 'planos', 'professional'],
        content: `# Diagramas Eléctricos

## Tipos de diagramas

### 1. Diagrama Unifilar
Representa el sistema completo usando una sola línea para todos los conductores. Es el más usado para planear instalaciones.

Símbolos clave:
- **━━━** Línea de alimentación
- **⊠** Transformador
- **[ITM]** Interruptor termomagnético
- **○** Foco / luminaria
- **⊡** Contacto

### 2. Diagrama Esquemático
Muestra todas las conexiones individuales. Se usa para entender el funcionamiento de un circuito.

### 3. Diagrama de Planta (Arquitectónico)
El plano de la construcción con la ubicación de cada elemento eléctrico.

## Simbología NOM (basada en IEC/NEMA)

| Símbolo | Elemento |
|---------|---------|
| ◯ con cruz | Luminaria general |
| ◯ con flecha | Luminaria de emergencia |
| ⊡ | Contacto sencillo |
| ⊡⊡ | Contacto doble |
| ⊡T | Contacto con tierra |
| / | Apagador sencillo |
| /3 | Apagador 3 vías |
| [F] | Fusible |
| [ITM] | Interruptor termomagnético |
| △ | Tablero / Centro de carga |

## Cómo leer un diagrama unifilar
1. Identifica la acometida (entrada de CFE)
2. Localiza el medidor
3. Sigue hasta el tablero principal
4. Identifica cada circuito derivado
5. Verifica las protecciones (ITM) de cada circuito
6. Confirma calibres de cable anotados

## Cálculo de carga (Art. 220 NOM)
Para calcular la carga total de una vivienda:
1. Área en m² × 33 VA/m² = carga de iluminación
2. + cargas de aparatos específicos (A/C, horno, etc.)
3. Aplicar factores de demanda
4. Resultado = capacidad mínima del tablero en VA`,
      },
      {
        id: 'puesta-a-tierra',
        title: 'Sistemas de puesta a tierra',
        description: 'Diseño, instalación y verificación de sistemas de tierra física.',
        duration: '22 min',
        tier: 'pro',
        icon: '🌍',
        tags: ['tierra', 'seguridad', 'NOM-001'],
        content: `# Sistemas de Puesta a Tierra

## ¿Por qué es fundamental la tierra?
La tierra física es la medida de seguridad más importante en una instalación eléctrica. Su función es:
1. **Proteger a las personas**: Si un aparato tiene una falla interna y su carcasa metálica queda energizada, la tierra la descarga de forma segura.
2. **Proteger equipos**: Disipa sobretensiones y transitorios.
3. **Hacer funcionar las protecciones**: Los interruptores diferenciales (GFCI) necesitan tierra para operar correctamente.

## Tipos de electrodos de tierra (NOM-001 Art. 250)

### Varilla coperweld (electrodo de varilla)
- Más común en México
- Varilla de acero recubierta de cobre
- Longitud mínima: 2.4 m
- Diámetro mínimo: 15.9 mm (5/8")
- Se clava verticalmente en el suelo

### Placa de cobre
- Usada cuando no es posible usar varilla
- Mínimo 0.186 m² de superficie
- Enterrada a mínimo 1.5 m de profundidad

### Red de tierra (malla)
- Para instalaciones industriales o donde se requiere baja resistencia
- Conductores enterrados formando una malla

## Resistencia de tierra
- **Residencial**: ≤ 25 Ω (NOM-001)
- **Industrial crítico**: ≤ 5 Ω
- **Equipos de cómputo/telecomunicaciones**: ≤ 1 Ω

## Cómo medir la resistencia de tierra
Se usa un **telurómetro** (earth resistance meter) con el método de los 3 picos (fall of potential method):
1. Clava la varilla de tierra principal (P)
2. A 10m: clava electrodo auxiliar de corriente (C)
3. A 6m del principal: clava electrodo de voltaje (V)
4. El telurómetro inyecta corriente entre P y C, mide voltaje entre P y V
5. R = V/I (el instrumento lo calcula automáticamente)

## Cable del electrodo de tierra
| Calibre fase | Cable mínimo de tierra |
|-------------|----------------------|
| 6 AWG - 2 AWG | 8 AWG |
| 1 AWG - 2/0 AWG | 6 AWG |
| 3/0 AWG - 350 MCM | 4 AWG |`,
      },
      {
        id: 'instalaciones-trifasicas',
        title: 'Instalaciones trifásicas',
        description: 'Fundamentos, motores y tableros de distribución trifásica.',
        duration: '30 min',
        tier: 'pro',
        icon: '⚡',
        tags: ['trifásico', 'industrial', 'motores'],
        content: `# Instalaciones Trifásicas

## ¿Qué es la corriente trifásica?
La corriente trifásica consiste en tres corrientes alternas iguales pero desfasadas 120° entre sí. Es el sistema que usan las industrias, edificios comerciales y equipos de alta potencia.

## Ventajas sobre el sistema monofásico
- Transmite 3x más potencia con los mismos conductores
- Los motores trifásicos son más eficientes y simples (sin capacitores de arranque)
- Voltaje más estable

## Configuraciones trifásicas en México

### Delta (Δ) — 220V / 440V
- Tres fases, sin neutro
- Típico en motores industriales
- Voltaje línea a línea: 220V o 440V

### Estrella (Y) con neutro — 127V/220V
- Tres fases + neutro
- Permite usar 127V (fase-neutro) o 220V (fase-fase)
- El más común en México para edificios

## Voltajes de referencia en México
| Sistema | Fase-Neutro | Fase-Fase |
|---------|------------|-----------|
| Residencial | 127V | 220V |
| Industrial media tensión | — | 440V |
| Alta tensión | — | 13.8 kV, 23 kV, etc. |

## Motores trifásicos
Los motores de inducción trifásicos son los más usados en la industria.

### Datos de la placa del motor
- **Potencia (HP o kW)**
- **Voltaje (V)**
- **Corriente nominal (A)** — para dimensionar conductores e ITM
- **Factor de potencia (FP o cos φ)**
- **Velocidad (RPM)**
- **Clase de aislamiento**

### Fórmula de corriente nominal
Para motor trifásico:
**I = P / (√3 × V × FP × η)**

Donde:
- P = Potencia en Watts
- V = Voltaje línea a línea
- FP = Factor de potencia (típico 0.85)
- η = Eficiencia (típico 0.90)

## Arranque de motores
- **Arranque directo**: Simple pero causa pico de corriente (5-8x la nominal)
- **Estrella-Delta**: Reduce corriente de arranque, para motores >5HP
- **Variador de frecuencia (VFD)**: Control total de velocidad, el más eficiente`,
      },
    ],
  },
];
