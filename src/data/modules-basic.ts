import { Module } from '../types';

export const BASIC_MODULES: Module[] = [
  // ─── MÓDULO: INSTALACIONES BÁSICAS ─────────────────────────────────────────
  {
    id: 'instalaciones-basicas',
    title: 'Instalaciones Básicas del Hogar',
    description: 'Conecta contactos, apagadores, lámparas y más con seguridad.',
    icon: '🔌',
    tier: 'basic',
    color: '#F5C800',
    lessons: [
      {
        id: 'conectar-contacto',
        title: 'Cómo conectar un contacto (tomacorriente)',
        description: 'Paso a paso para instalar o reemplazar un contacto eléctrico.',
        duration: '12 min',
        tier: 'basic',
        icon: '🔌',
        tags: ['contacto', 'instalación', 'residencial'],
        content: `# Cómo Conectar un Contacto Eléctrico

## Materiales necesarios
- Contacto nuevo (10A o 15A, doble polo con tierra)
- Desarmador plano y Phillips aislados
- Probador de voltaje / multímetro
- Cinta aislante

## Paso 1: Corta la energía
Ve al tablero y apaga el interruptor. **Verifica con el probador** que no hay voltaje.

## Paso 2: Retira el contacto viejo
Quita la tapa, luego los tornillos del contacto. Jala suavemente y observa cómo están los cables.

## Paso 3: Identifica los cables
- **Negro o Rojo**: Fase → terminal pequeño (dorado)
- **Blanco**: Neutro → terminal grande (plateado)
- **Verde o desnudo**: Tierra → terminal verde

## Paso 4: Conecta el nuevo contacto
Pela ~2cm de cada cable:
1. Tierra (verde) → tornillo verde
2. Neutro (blanco) → tornillo plateado (ranura larga)
3. Fase (negro) → tornillo dorado (ranura corta)

Aprieta bien. El cable no debe moverse.

## Paso 5: Prueba
Regresa el interruptor y mide: debe leer ~127V entre fase y neutro.

> ⚠️ Si los cables llegan sueltos, sin tierra, o con aislante dañado, llama a un electricista.

## Tipos de contactos
- **Sencillo**: 1 toma, 10A
- **Doble**: 2 tomas, 15A (el más común)
- **Con tierra (polo a tierra)**: 3 terminales, obligatorio en cocinas y baños
- **GFCI (diferencial)**: Detecta fugas y se dispara; obligatorio cerca de agua`,
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
- **Sencillo (1 vía)**: Un apagador controla una lámpara
- **3 vías (two-way)**: Dos apagadores controlan la misma lámpara (escaleras)
- **4 vías**: Entre dos de 3 vías para control desde 3+ puntos
- **Dimmer**: Regula la intensidad de la luz

## Apagador Sencillo

1. Corta la energía y verifica con probador
2. Retira el apagador viejo
3. En un apagador sencillo hay 2 cables de fase
4. Conecta un cable a cada terminal de latón
5. Tierra verde → tornillo verde (si existe)
6. Atornilla, pon tapa, restaura energía y prueba

## Apagador de 3 Vías

Tiene 3 terminales: **COM** (común, negro o marcado) y 2 **travelers**.

**Conexión:**
- COM del apagador 1 → fase viva
- Travelers → conectan ambos apagadores entre sí (2 cables)
- COM del apagador 2 → a la lámpara

> 💡 Si la lámpara no enciende o siempre está encendida, los travelers están invertidos. Intercámbialos.

## Apagador de 4 Vías
Se conecta entre dos apagadores de 3 vías. Tiene 4 terminales: dos pares de travelers. Permite controlar una lámpara desde 3 o más puntos.

## Dimmers (atenuadores)
- Solo para cargas compatibles (LED regulable, incandescente)
- NO usar con motores, fluorescentes o LED no regulables
- Tienen límite de carga (típico 150W-600W)
- Requieren cable de tierra`,
      },
      {
        id: 'instalar-lampara',
        title: 'Cómo instalar una lámpara de techo',
        description: 'Instalación segura de lámparas colgantes y plafones.',
        duration: '10 min',
        tier: 'basic',
        icon: '🔆',
        tags: ['lámpara', 'iluminación', 'techo'],
        content: `# Cómo Instalar una Lámpara de Techo

## Antes de empezar
- Corta la energía en el tablero
- Verifica que el apagador esté apagado Y que no haya voltaje en la caja

## Tipos de cajas eléctricas en techo
- **Caja octagonal**: Para lámparas ligeras (hasta ~5kg)
- **Caja con soporte reforzado**: Para lámparas pesadas o ventiladores
- **Gancho de expansión**: Para plafones en losa sin caja previa

> ⚠️ Si vas a instalar un ventilador o lámpara pesada (>5kg), necesitas una caja certificada para ese peso.

## Proceso de instalación

### 1. Retira la lámpara anterior
Desconecta los cables anotando cuál es cuál.

### 2. Identifica los cables del techo
- **Negro/Rojo**: Fase
- **Blanco**: Neutro
- **Verde/desnudo**: Tierra

### 3. Conecta la nueva lámpara
Une cables del mismo color con conectores (wire nuts) o tornillos:
- Negro con negro (fase)
- Blanco con blanco (neutro)
- Verde/desnudo con tierra

### 4. Asegura la conexión
Envuelve cada conector con cinta aislante. Dobla los cables en "S" para que quepan en la caja.

### 5. Monta la lámpara
Atornilla al soporte de la caja. Instala focos. Restaura energía y prueba.

## Solución de problemas
- **Lámpara no enciende**: Verifica el foco, el apagador y las conexiones
- **Parpadea**: Foco incompatible con dimmer, o conexión floja
- **Se dispara el interruptor**: La carga supera la capacidad del circuito`,
      },
      {
        id: 'ventilador-techo',
        title: 'Instalación de ventilador de techo',
        description: 'Instala un minisplit o ventilador de techo de forma segura.',
        duration: '12 min',
        tier: 'basic',
        icon: '🌀',
        tags: ['ventilador', 'instalación', 'techo'],
        content: `# Instalación de Ventilador de Techo

## Diferencias con una lámpara
Los ventiladores de techo tienen motor y son más pesados que una lámpara. Requieren:
- Caja de techo reforzada (certificada para ventiladores)
- En algunos modelos: cable extra para control de velocidad y luz por separado

## Cables típicos en un ventilador

### Conexión con un solo apagador
- **Negro**: Fase (alimenta motor y luz)
- **Blanco**: Neutro
- **Verde**: Tierra
- El ventilador trae su propio interruptor de cadena

### Conexión con dos apagadores (luz y motor por separado)
- **Negro**: Motor del ventilador
- **Azul**: Kit de luz
- **Blanco**: Neutro compartido
- **Verde**: Tierra

## Paso a paso

1. **Instala la caja reforzada** en la losa (las de expansión no requieren caja previa)
2. **Monta el soporte del ventilador** siguiendo las instrucciones del fabricante
3. **Conecta los cables** según el tipo de instalación (1 o 2 apagadores)
4. **Cuelga las aspas** y asegura todos los tornillos
5. **Prueba sin aspas** primero para verificar que gira correctamente
6. **Instala las aspas** y verifica el balance (el ventilador no debe vibrar)

## Solución de problemas
- **Vibración excesiva**: Aspas desbalanceadas (usa kit de balanceo)
- **Ruido**: Tornillos flojos en aspas o caja
- **Solo funciona una velocidad**: Cable de control desconectado`,
      },
      {
        id: 'extensiones-regletas',
        title: 'Extensiones y regletas: uso correcto',
        description: 'Cómo usar extensiones sin riesgo de incendio.',
        duration: '8 min',
        tier: 'basic',
        icon: '🔋',
        tags: ['extensión', 'seguridad', 'hogar'],
        content: `# Extensiones y Regletas: Uso Correcto

Las extensiones eléctricas son una de las causas más comunes de incendios en el hogar cuando se usan incorrectamente.

## Lo que NO debes hacer

- ❌ Conectar extensión a extensión (cascada)
- ❌ Usar bajo alfombras o tapetes
- ❌ Pasar por debajo de puertas o paredes
- ❌ Cubrir con ropa, muebles o cualquier material
- ❌ Conectar más cargas de las que soporta el calibre
- ❌ Usarlas como instalación permanente

## Cómo elegir la extensión correcta

### Por calibre (AWG)
| Calibre | Capacidad | Uso |
|---------|-----------|-----|
| 18 AWG  | 10A / 1250W | Lámparas, cargadores |
| 16 AWG  | 13A / 1625W | Computadoras, TVs |
| 14 AWG  | 15A / 1875W | Herramientas ligeras |
| 12 AWG  | 20A / 2500W | Herramientas eléctricas, A/C portátil |

### Por longitud
A mayor longitud, mayor caída de voltaje. Para extensiones largas (+15m) usa calibre más grueso.

## Regletas con protección

Busca regletas con:
- **Supresor de picos** (surge protector): protege equipos de sobretensiones
- **Interruptor automático**: corta si hay sobrecarga
- **Toma de tierra** (3 patas)

> 🦆 Una regleta de $50 pesos sin supresor NO protege tu computadora. Vale la pena invertir en una buena.

## Señales de una extensión dañada
- Cable caliente al tacto durante uso normal
- Chispas al conectar
- Olor a quemado
- Aislante agrietado o pelado`,
      },
      {
        id: 'timbre-electrico',
        title: 'Cómo instalar un timbre eléctrico',
        description: 'Timbres de bajo voltaje y inalámbricos, paso a paso.',
        duration: '10 min',
        tier: 'basic',
        icon: '🔔',
        tags: ['timbre', 'instalación', 'bajo voltaje'],
        content: `# Instalación de Timbre Eléctrico

## Tipos de timbres

### Timbre de bajo voltaje (tradicional)
Funciona a 8-24V AC usando un **transformador** que reduce los 127V del hogar. Es el sistema más común y duradero.

Componentes:
- **Transformador**: 127V → 16-24V (típico)
- **Botón de timbre**: solo es un interruptor simple
- **Campana/zumbador**: el dispositivo que suena

### Timbre inalámbrico
- No requiere cables entre botón y receptor
- El botón corre con pilas
- El receptor se enchufa a un contacto
- Fácil de instalar, menos duradero

## Instalación del timbre de bajo voltaje

### Materiales
- Transformador de timbre (disponible en ferreterías)
- Cable calibre 18 AWG (2 hilos) — se puede usar casi cualquier calibre bajo
- Botón de timbre
- Campana o zumbador

### Paso a paso
1. **Conecta el transformador** a un circuito de 127V (busca un contacto cerca de la puerta principal). El transformador tiene terminales de entrada (127V) y salida (baja tensión).
2. **Tiende el cable de bajo voltaje** desde el transformador hasta donde va el botón, y de regreso hasta la campana.
3. **Conecta el botón**: va en serie (interrumpe uno de los cables)
4. **Conecta la campana** a los terminales de salida del transformador

> 💡 El cable de bajo voltaje puede ir sin conduit si va embutido en la pared, ya que opera a voltaje seguro (bajo).

## Solución de problemas
- **No suena**: Verifica el transformador (¿tiene 16-24V en la salida?) y las conexiones
- **Suena solo**: Botón pegado o cortocircuito en el cable
- **Sonido débil**: Transformador subdimensionado o cables muy largos`,
      },
    ],
  },

  // ─── MÓDULO: CENTRO DE CARGA ────────────────────────────────────────────────
  {
    id: 'centro-de-carga',
    title: 'Centro de Carga y Protecciones',
    description: 'Entiende y gestiona el tablero eléctrico de tu hogar.',
    icon: '⚙️',
    tier: 'basic',
    color: '#2196F3',
    lessons: [
      {
        id: 'centro-carga-intro',
        title: '¿Qué es el Centro de Carga?',
        description: 'La central eléctrica de tu hogar: cómo funciona y qué contiene.',
        duration: '10 min',
        tier: 'basic',
        icon: '⚙️',
        tags: ['tablero', 'circuitos', 'NOM'],
        content: `# El Centro de Carga (Tablero Eléctrico)

Es la "central de mando" eléctrica de tu casa. Aquí llega la energía de CFE y se distribuye a cada área.

## Recorrido de la energía

CFE → Transformador en la calle → Medidor → **Centro de Carga** → Circuitos de la casa

## Componentes del Centro de Carga

### Interruptor General (Main Breaker)
- Corta TODA la energía de la casa
- Capacidad típica: 60A, 100A o 200A según el tamaño de la vivienda

### Barras de distribución
- **Barra de fase**: recibe la energía del interruptor general
- **Barra de neutro**: conexión de todos los neutros
- **Barra de tierra**: conexión de todos los cables de tierra

### Interruptores Termomagnéticos (ITM / Breakers)
- Protegen cada circuito individual
- Se disparan (saltan) cuando hay sobrecarga o cortocircuito
- Capacidades típicas: 15A, 20A, 30A, 40A

## Organización de un tablero

Un tablero bien organizado tiene:
- Etiquetas en cada breaker indicando qué circuito protege
- Espacios libres para agregar circuitos futuros
- Tapa completa sin huecos abiertos

## ¿Qué hacer cuando se dispara un breaker?

1. Identifica qué circuito se disparó (busca el que no está completamente encendido ni apagado)
2. **Desconecta todos los aparatos** de ese circuito
3. Restablece el breaker: apágalo completamente, luego enciéndelo
4. Conecta los aparatos de uno en uno hasta encontrar el que causó el problema
5. Si el breaker se dispara solo (sin carga) o no resetea, llama a un electricista`,
      },
      {
        id: 'tipos-interruptores',
        title: 'Tipos de interruptores y protecciones',
        description: 'ITM, GFCI, AFCI y fusibles: cuándo usar cada uno.',
        duration: '12 min',
        tier: 'basic',
        icon: '🔐',
        tags: ['protecciones', 'ITM', 'GFCI', 'seguridad'],
        content: `# Tipos de Interruptores y Protecciones

## Interruptor Termomagnético (ITM / Breaker)
El más común. Tiene dos mecanismos de protección:
- **Térmico**: se dispara por sobrecarga (bimetálico que se dobla con el calor)
- **Magnético**: se dispara instantáneamente por cortocircuito

**Usos**: Protección de todos los circuitos residenciales e industriales.

## Interruptor Diferencial (GFCI)
**GFCI = Ground Fault Circuit Interrupter**

Detecta diferencias entre la corriente que sale por fase y la que regresa por neutro. Si la diferencia supera 5mA (corriente que se va a tierra o al cuerpo), se dispara en <25ms.

**Obligatorio según NOM en**:
- Baños
- Cocinas (contactos a menos de 1.8m del fregadero)
- Garajes
- Exteriores
- Albercas y jacuzzis
- Sótanos

Tiene botones **TEST** y **RESET** en su cara frontal.

## Interruptor AFCI
**AFCI = Arc Fault Circuit Interrupter**

Detecta arcos eléctricos (chispas en cables dañados o conexiones flojas) antes de que causen incendio.

Requerido en recámaras, salas y pasillos en las versiones más recientes del NEC/NOM.

## Fusibles
Tecnología más antigua. Un hilo conductor se funde cuando hay sobrecorriente, interrumpiendo el circuito. Son de un solo uso (hay que reemplazarlos).

Aún se encuentran en:
- Instalaciones eléctricas antiguas
- Tableros de vehículos
- Equipos electrónicos

> ⚠️ NUNCA reemplaces un fusible quemado con uno de mayor capacidad. Es extremadamente peligroso.

## Cortacircuitos vs Breaker
Los cortacircuitos (fusibles de tapón) en instalaciones antiguas deben modernizarse a ITM por seguridad.`,
      },
      {
        id: 'agregar-circuito',
        title: 'Cómo agregar un circuito nuevo',
        description: 'Planear y agregar un circuito al tablero paso a paso.',
        duration: '18 min',
        tier: 'basic',
        icon: '➕',
        tags: ['circuito nuevo', 'tablero', 'instalación'],
        content: `# Cómo Agregar un Circuito Nuevo

Agregar un circuito es un trabajo que requiere cuidado. Involucra trabajo en el Centro de Carga con la energía activa en partes del tablero.

> ⚠️ Si no tienes experiencia, contrata a un electricista. Este contenido es para que entiendas el proceso.

## Cuándo necesitas un circuito nuevo
- Quieres instalar un A/C, secadora o horno eléctrico
- El circuito actual se dispara frecuentemente por sobrecarga
- Quieres agregar contactos en un área nueva

## Materiales necesarios
- Breaker nuevo del amperaje correcto
- Cable del calibre adecuado (ver tabla en la lección de tipos de cables)
- Caja eléctrica y contacto (si aplica)
- Conduit y accesorios

## Paso 1: Planear la carga
Calcula cuánta corriente necesitará el circuito:
- I = P (watts) / V (127V)
- Agrega 25% de margen de seguridad

Ejemplo: Aire acondicionado de 1200W: I = 1200/127 = 9.4A → usa breaker de 15A y cable 14 AWG.

## Paso 2: Tendido del cable
- Tiende el cable por conduit desde el tablero hasta la carga
- Respeta los radios de curvatura del conduit
- Fija el conduit a la pared cada 1.5m máximo

## Paso 3: Instalar el breaker
1. **Corta el interruptor general** (aún habrá voltaje en las barras de entrada)
2. Introduce el cable al tablero y pela 15cm del extremo
3. Conecta **tierra** a la barra de tierra
4. Conecta **neutro** a la barra de neutro
5. Conecta **fase** al breaker nuevo
6. Inserta el breaker en la ranura libre del tablero

## Paso 4: Prueba
Etiqueta el circuito nuevo en el tablero antes de restaurar la energía.`,
      },
      {
        id: 'calcular-carga-electrica',
        title: 'Cómo calcular la carga eléctrica',
        description: 'Dimensiona correctamente tus circuitos antes de instalar.',
        duration: '14 min',
        tier: 'basic',
        icon: '🧮',
        tags: ['cálculo', 'carga', 'dimensionamiento'],
        content: `# Cómo Calcular la Carga Eléctrica

## ¿Por qué es importante?
Si conectas más carga de la que soporta un circuito, el cable se sobrecalienta y puede causar un incendio. El breaker protege el cable, no los aparatos.

## Conceptos básicos

### Potencia (W o kW)
**P = V × I**
- P = Watts
- V = Voltaje (127V o 220V)
- I = Corriente en Amperes

### Energía (kWh)
**E = P × t**
- E = Energía en kWh
- P = Potencia en kW
- t = Tiempo en horas

## Cómo calcular la carga de un circuito

**Ejemplo**: ¿Puedo conectar estos aparatos en un circuito de 15A a 127V?
- Licuadora: 500W → 500/127 = 3.9A
- Tostador: 800W → 800/127 = 6.3A
- Cafetera: 600W → 600/127 = 4.7A
- **Total: 14.9A** — ¡Está al límite!

La NOM recomienda no superar el **80% de la capacidad** del circuito: 15A × 0.8 = 12A máximo continuo.

## Tabla de consumos típicos

| Aparato | Potencia típica | Corriente a 127V |
|---------|----------------|-----------------|
| Foco LED | 9W | 0.07A |
| TV 55" | 150W | 1.2A |
| Computadora | 200W | 1.6A |
| Microondas | 1200W | 9.4A |
| Lavadora | 500W | 3.9A |
| A/C 1 ton | 1000W | 7.9A |
| Horno eléctrico | 2400W | 18.9A (necesita 220V) |
| Secadora | 5500W | 25A a 220V |

## Factor de demanda
No todos los aparatos funcionan al mismo tiempo. La NOM permite aplicar factores de demanda para dimensionar el tablero principal:
- Primeros 3000W al 100%
- Resto al 35%`,
      },
      {
        id: 'puesta-tierra-residencial',
        title: 'Puesta a tierra residencial',
        description: 'Por qué es obligatoria y cómo funciona la tierra física en casa.',
        duration: '11 min',
        tier: 'basic',
        icon: '🌍',
        tags: ['tierra', 'seguridad', 'NOM'],
        content: `# Puesta a Tierra Residencial

## ¿Qué es la tierra física?
Es un conductor que conecta la instalación eléctrica directamente al suelo, proporcionando un camino de baja resistencia para corrientes de falla.

## ¿Para qué sirve?

### 1. Proteger personas
Si un aparato tiene falla interna y su carcasa metálica queda "viva" (con voltaje), la tierra la descarga de forma segura antes de que alguien la toque.

### 2. Activar las protecciones
Los interruptores GFCI y los breakers de falla a tierra necesitan la tierra para funcionar correctamente.

### 3. Proteger equipos
Disipa sobretensiones y transitorios (rayos, cambios de voltaje) que podrían dañar equipos electrónicos.

## Cómo se instala en una casa

1. **Varilla coperweld**: se clava verticalmente en el suelo junto a la cimentación, mínimo 2.4m de profundidad
2. **Cable de tierra principal**: del calibre adecuado (mínimo 8 AWG para instalaciones residenciales)
3. **Barra de tierra** en el tablero: todos los cables de tierra de los circuitos se conectan aquí
4. El cable principal de tierra va de la barra a la varilla enterrada

## Cómo saber si tu casa tiene tierra
Revisa los contactos: si tienen **3 orificios** (dos ranuras + un hueco redondo abajo), tienen tierra. Si solo tienen 2 ranuras, no tienen tierra.

Puedes verificar con un multímetro:
- Fase a Neutro: ~127V ✓
- Fase a Tierra: ~127V ✓
- Neutro a Tierra: ~0V ✓ (si hay diferencia mayor a 3V hay un problema)

> ⚠️ Instalar adaptadores de 3 a 2 patas "resuelve" el problema del enchufe pero NO agrega tierra real. Es una solución falsa y peligrosa.`,
      },
    ],
  },

  // ─── MÓDULO: MEDICIÓN Y DIAGNÓSTICO ────────────────────────────────────────
  {
    id: 'medicion-diagnostico',
    title: 'Medición y Diagnóstico Eléctrico',
    description: 'Usa el multímetro y la pinza amperimétrica como un profesional.',
    icon: '📊',
    tier: 'basic',
    color: '#9C27B0',
    lessons: [
      {
        id: 'uso-multimetro',
        title: 'Uso del multímetro',
        description: 'Aprende a medir voltaje, corriente y resistencia paso a paso.',
        duration: '15 min',
        tier: 'basic',
        icon: '📊',
        tags: ['multímetro', 'medición', 'herramientas'],
        content: `# Uso del Multímetro

El multímetro es la herramienta más versátil del electricista. Aprende a usarlo correctamente.

## Partes del multímetro
- **Display**: muestra la lectura
- **Selector**: elige la función y el rango
- **Terminales**: COM (negro), VΩmA (rojo), 10A (rojo para corrientes altas)

## Cómo medir Voltaje AC (VAC)

1. Selector en **VAC** (o ~V), rango mayor al esperado (200V o 750V)
2. Cable negro en **COM**, rojo en **VΩmA**
3. Puntas en los terminales del contacto o cable
4. No toques las puntas metálicas

**Lecturas esperadas en México:**
- Fase-Neutro: ~127V
- Fase-Tierra: ~127V
- Neutro-Tierra: ~0-3V
- Fase-Fase (bifásico): ~220V

## Cómo medir Resistencia (Ω)

1. **Corta la energía** — NUNCA midas resistencia en circuitos energizados
2. Selector en **Ω**
3. Puntas en los extremos del componente a medir
4. Espera a que la lectura se estabilice

## Cómo medir Voltaje DC (VDC)

Para baterías, fuentes DC, sistemas fotovoltaicos:
1. Selector en **VDC** (o =V)
2. Cable rojo al positivo (+), negro al negativo (-)
3. Si sale número negativo, invertiste las puntas

## Cómo medir Continuidad

Detecta si un cable está completo (sin cortes):
1. Selector en continuidad (símbolo de bocina o diodo)
2. El multímetro emite un **bip** si hay continuidad
3. Útil para verificar fusibles, cables, interruptores

## Medir Corriente con multímetro
Solo para corrientes bajas (<200mA). Para corrientes mayores usa pinza amperimétrica. Requiere abrir el circuito (el multímetro va en serie).`,
      },
      {
        id: 'pinza-amperimetrica',
        title: 'Uso de la pinza amperimétrica',
        description: 'Mide corriente sin cortar el circuito.',
        duration: '10 min',
        tier: 'basic',
        icon: '🔍',
        tags: ['pinza', 'amperímetro', 'medición'],
        content: `# Uso de la Pinza Amperimétrica

La pinza amperimétrica mide corriente eléctrica **sin cortar el circuito**, usando el campo magnético que genera la corriente.

## Principio de funcionamiento
Cualquier conductor por el que fluye corriente genera un campo magnético. La pinza mide este campo y calcula la corriente sin contacto directo.

## Cómo usar la pinza amperimétrica

1. Selector en **A AC** (corriente alterna) o **A DC** si aplica
2. Abre la mordaza (el "abrazadera")
3. Rodea **UN SOLO CABLE** con la mordaza — si rodeas dos cables la lectura se cancela
4. Cierra la mordaza y lee el resultado

> 💡 Para cables muy cortos, puedes enrollar el cable varias veces en la mordaza y dividir la lectura entre el número de vueltas.

## Lecturas normales vs anormales

| Circuito | Corriente normal |
|---------|-----------------|
| Iluminación LED (10 focos) | 1-3A |
| Contactos sala (TV, computadora) | 2-5A |
| Refrigerador | 1-3A |
| Lavadora en centrifugado | 8-12A |
| Microondas en potencia máxima | 8-10A |

## Diagnóstico con pinza amperimétrica

### ¿Por qué se dispara el breaker?
Mide la corriente total del circuito con la pinza. Si supera el 80% del breaker, hay sobrecarga.

### Detectar fugas de corriente
Mide el cable neutro del tablero principal. Debería ser igual a la suma de las fases. Si hay diferencia significativa, hay fuga a tierra.

### Comparar fases en sistema bifásico
Las dos fases deben estar equilibradas. Diferencias grandes indican carga desbalanceada.`,
      },
      {
        id: 'detectar-cortocircuito',
        title: 'Cómo detectar y reparar un cortocircuito',
        description: 'Diagnóstico paso a paso cuando se dispara el breaker.',
        duration: '13 min',
        tier: 'basic',
        icon: '🔥',
        tags: ['cortocircuito', 'diagnóstico', 'reparación'],
        content: `# Cómo Detectar y Reparar un Cortocircuito

## ¿Qué es un cortocircuito?
Es el contacto directo (accidental o por falla) entre el conductor de fase y el neutro o tierra. Genera una corriente enorme que el breaker interrumpe en milisegundos.

## Diferencia entre sobrecarga y cortocircuito

| | Sobrecarga | Cortocircuito |
|--|-----------|--------------|
| Causa | Demasiados aparatos | Cables en contacto |
| Velocidad | Gradual (breaker térmico) | Instantáneo (magnético) |
| Señal | Breaker caliente | Chispa, olor, quemadura |
| Solución | Reducir carga | Encontrar la falla |

## Proceso de diagnóstico

### Paso 1: Identifica el circuito
¿Cuál breaker se disparó? Eso te dice en qué área de la casa está el problema.

### Paso 2: Desconecta todo
Desenchufa TODOS los aparatos del circuito afectado. Si el breaker resetea y se vuelve a disparar solo → el problema está en el cableado fijo.

### Paso 3: Aísla la falla
Si al resetear no se dispara:
- Conecta los aparatos de uno en uno
- El que cause el disparo tiene un cortocircuito interno → deséchalos o repáralos

### Paso 4: Buscar la falla en el cableado
Si el breaker se dispara solo (sin carga conectada):
1. Corta la energía
2. Mide la resistencia entre fase y neutro en la caja más cercana
3. Si lees casi 0Ω, hay cortocircuito en ese segmento
4. Divide el circuito a la mitad para localizar la falla (método bisección)

## Causas comunes de cortocircuito en cableado
- Cable pelado rozando con otro cable o con la pared
- Conector suelto que permite contacto entre conductores
- Humedad en la caja eléctrica
- Ratones que mordieron el aislante`,
      },
      {
        id: 'lectura-medidor-cfe',
        title: 'Lectura del medidor de CFE',
        description: 'Interpreta el medidor eléctrico y verifica tu consumo.',
        duration: '8 min',
        tier: 'basic',
        icon: '📟',
        tags: ['medidor', 'CFE', 'consumo'],
        content: `# Lectura del Medidor de CFE

## Tipos de medidores

### Medidor electromecánico (disco giratorio)
El disco gira más rápido cuanto más consumes. Tiene un display de diales o cilindros numéricos.

**Cómo leer los diales:**
- Lee los números de izquierda a derecha
- Si el puntero está entre dos números, usa el menor
- La diferencia entre lecturas = consumo del periodo

### Medidor electrónico (digital)
Display LCD con números directos. Más preciso y fácil de leer. Algunos muestran:
- Consumo acumulado (kWh)
- Potencia instantánea (kW)
- Historial por hora/día

### Medidor inteligente (AMI/AMR)
Transmite la lectura automáticamente a CFE. Permite a CFE leer remotamente sin visita.

## Cómo verificar tu consumo

1. Anota la lectura actual del display
2. Resta la lectura de hace 1 mes (o del recibo anterior)
3. La diferencia son tus kWh consumidos
4. Multiplica por el precio de tu tarifa

## Detectar pérdidas de energía

### Método del "medidor lento"
1. Apaga el interruptor general del tablero
2. El disco del medidor debe detenerse completamente
3. Si sigue girando → hay consumo antes del tablero (¿instalación irregular?)

### Detectar consumo fantasma
Con todo apagado pero el interruptor general encendido:
- El medidor debe moverse MUY lentamente
- Si gira rápido → algo está consumiendo aunque "esté apagado"
- Desconecta aparatos de uno en uno hasta encontrarlo`,
      },
    ],
  },

  // ─── MÓDULO: ILUMINACIÓN PROFESIONAL ───────────────────────────────────────
  {
    id: 'iluminacion-profesional',
    title: 'Iluminación y Eficiencia Energética',
    description: 'Diseña sistemas de iluminación eficientes y modernos.',
    icon: '💡',
    tier: 'basic',
    color: '#FF9800',
    lessons: [
      {
        id: 'iluminacion-led',
        title: 'LED y ahorro de energía',
        description: 'Tipos de luminarias, comparativa y cómo calcular tu consumo.',
        duration: '10 min',
        tier: 'basic',
        icon: '💡',
        tags: ['LED', 'ahorro', 'iluminación'],
        content: `# Iluminación LED y Ahorro de Energía

## Comparativa de tecnologías

| Tecnología | Watts | Lumens | Vida útil | Costo inicial |
|-----------|-------|--------|-----------|--------------|
| Incandescente | 60W | 800lm | 1,000 hrs | Bajo |
| Fluorescente compacta (CFL) | 15W | 800lm | 8,000 hrs | Medio |
| LED | 9W | 800lm | 25,000 hrs | Medio |

Un LED de 9W reemplaza un foco de 60W con 85% menos consumo.

## Temperatura de color

- **2700K - 3000K**: Blanco cálido (amarillo) — recámaras, salas
- **4000K**: Blanco neutro — cocinas, oficinas
- **5000K - 6500K**: Blanco frío / luz de día — talleres, garajes

## Cálculo de niveles de iluminación (Lux)

**Lux = Lumens / m²**

Niveles recomendados:
- Recámara: 100-150 lux
- Sala: 150-300 lux
- Cocina: 300-500 lux
- Oficina: 500 lux
- Taller: 500-1000 lux

## Tipos de luminarias LED

- **Foco E27**: Reemplaza incandescente estándar
- **Foco PAR/GU10**: Spots empotrados
- **Tubo LED T8**: Reemplaza fluorescente lineal
- **Panel LED**: Para oficinas y comercios
- **Tira LED**: Iluminación decorativa y acento

## Cálculo de ahorro

Si cambias 10 focos de 60W a LED de 9W, usados 5h/día:
- Ahorro diario: (60-9) × 10 × 5 / 1000 = 2.55 kWh
- Ahorro mensual: 76.5 kWh × $2.50/kWh = **~$191 pesos/mes**`,
      },
      {
        id: 'diseno-iluminacion',
        title: 'Diseño básico de iluminación',
        description: 'Planea la iluminación de un espacio como un profesional.',
        duration: '12 min',
        tier: 'basic',
        icon: '🎨',
        tags: ['diseño', 'iluminación', 'planificación'],
        content: `# Diseño Básico de Iluminación

## Los 3 niveles de iluminación

### 1. Iluminación General (Ambiental)
Ilumina todo el espacio uniformemente. Ejemplo: plafón central, paneles LED.

### 2. Iluminación de Tarea
Para actividades específicas: cocinar, leer, trabajar. Ejemplo: lámpara de escritorio, luz bajo gabinetes de cocina.

### 3. Iluminación de Acento
Para destacar elementos decorativos. Ejemplo: spots sobre cuadros, tiras LED en libreros.

## Método de cálculo simplificado

### Paso 1: Calcula los lumens necesarios
**Lumens = Lux requerido × m² del espacio**

Ejemplo: Sala de 20m², nivel deseado 200 lux:
200 lux × 20m² = **4,000 lumens totales**

### Paso 2: Elige las luminarias
Si usas focos de 800 lumens: 4,000 / 800 = **5 focos**

### Paso 3: Distribución
Para iluminación uniforme, las luminarias deben estar separadas entre sí una distancia equivalente a 1x la altura del techo.

## Consideraciones de diseño

- **Evita el deslumbramiento**: No coloques luminarias donde brillen directamente a los ojos
- **Apunta al trabajo**: Las luces de tarea van sobre la superficie de trabajo, no detrás
- **Temperatura consistente**: Mezclar 2700K con 6500K se ve mal
- **Dimmers**: Permiten adaptar la iluminación al ambiente y ahorrar energía`,
      },
      {
        id: 'iluminacion-exterior',
        title: 'Iluminación exterior e impermeabilización',
        description: 'Instalaciones a la intemperie: materiales y normas.',
        duration: '11 min',
        tier: 'basic',
        icon: '🌧️',
        tags: ['exterior', 'impermeabilización', 'IP'],
        content: `# Iluminación Exterior e Impermeabilización

## Grado de Protección IP

El **Índice de Protección (IP)** indica qué tan resistente es una luminaria a polvo y agua.

**Formato: IP XX**
- Primer dígito: Protección contra polvo (0-6)
- Segundo dígito: Protección contra agua (0-9)

| Código IP | Protección |
|-----------|------------|
| IP20 | Interior seco (sala, recámara) |
| IP44 | Salpicaduras desde cualquier dirección (baño) |
| IP65 | Chorros de agua (exterior cubierto) |
| IP67 | Inmersión temporal (jardín, alberca) |
| IP68 | Inmersión continua |

## Materiales para instalaciones exteriores

- **Conduit metálico rígido (IMC/RMC)**: Para instalaciones enterradas o expuestas
- **Conduit PVC grueso**: Para instalaciones enterradas
- **Cajas IP65**: Para conexiones en exterior
- **Cable tipo THHW o MTW**: Resistente a humedad
- **Sellos de conduit**: Donde el conduit entra a una caja para evitar entrada de agua

## Instalación de focos para jardín

1. Usa **luminarias certificadas para exterior** (IP65 mínimo)
2. El cable debe ir en conduit enterrado a mínimo **50cm de profundidad**
3. Todas las cajas de conexiones deben ser a prueba de agua
4. El circuito debe tener **protección GFCI** (obligatorio en exteriores según NOM)

## Iluminación de fachada

- **Apliques de pared**: Deben ser IP54 mínimo
- **Reflectores**: IP65 para exteriores, apuntan hacia la fachada
- **Tiras LED para cornisa**: Usar versiones IP65 con transformador en interior

> 🦆 El pato sabe nadar, pero los cables no deben. Siempre IP65+ en exterior.`,
      },
    ],
  },
];
