import { Module } from '../types';

export const PRO2_MODULES: Module[] = [
  // ─── MÓDULO: PROTECCIÓN CONTRA RAYOS ───────────────────────────────────────
  {
    id: 'proteccion-rayos',
    title: 'Protección contra Rayos y Apantallamiento',
    description: 'Sistemas pararrayos, apantallamiento electromagnético y protecciones.',
    icon: '⚡🌩️',
    tier: 'pro',
    color: '#FF6F00',
    lessons: [
      {
        id: 'pararrayos-sistemas',
        title: 'Sistemas de protección contra rayos (SPR)',
        description: 'Franklin, Faraday, PDCE y normativa NOM/NFC.',
        duration: '16 min',
        tier: 'pro',
        icon: '🌩️',
        tags: ['pararrayos', 'rayo', 'NFPA 780', 'tierra'],
        content: `# Sistemas de Protección contra Rayos (SPR)

Norma aplicable en México: **NOM-022-ENER** y **NFPA 780** (adoptada como referencia)

## ¿Por qué proteger contra rayos?

Un rayo puede transportar 1-5 billones de joules y 200,000 amperios. Causa:
- Incendios estructurales
- Daño a equipos electrónicos por sobretensión
- Riesgo de vida a personas dentro y fuera del edificio

## Tipos de sistemas pararrayos

### Sistema Franklin (punta simple)
- Punta metálica elevada sobre el edificio
- Conductor de bajada hasta la tierra
- Radio de protección limitado (~45° de conicidad)
- Económico para estructuras pequeñas

### Sistema Faraday (jaula)
- Red de conductores sobre toda la azotea
- Conductores de bajada múltiples (mínimo 2)
- Protección completa para toda la estructura
- Recomendado para edificios medianos/grandes

### PDCE (Punta disipadora de carga electrostática)
- Tecnología europea, más cara
- Supuestamente previene la descarga en lugar de capturarla
- No hay evidencia científica concluyente de ventaja sobre Franklin/Faraday

## Componentes del SPR

1. **Terminal aérea (punta)**: capta el rayo
2. **Conductor de bajada**: cable desnudo de cobre 35-50mm² o 2 AWG
3. **Contactor de prueba**: permite desconectar bajada para medir tierra
4. **Electrodo de tierra**: malla o varillas en el suelo (resistencia ≤10Ω recomendado)
5. **DPS (Dispositivo de Protección contra Sobretensión)**: protege equipos electrónicos

## DPS (Protectores de Sobretensión)

Los DPS se instalan en cascada:
- **DPS Clase I (en el tablero principal)**: para rayos directos, 10/350µs
- **DPS Clase II (en subtableros)**: para sobretensiones de maniobra
- **DPS Clase III (en el equipo)**: protección fina, 8/20µs

> ⚠️ Un DPS sin tierra física es inútil. La tierra debe tener resistencia ≤10Ω para SPR.`,
      },
      {
        id: 'apantallamiento-emi',
        title: 'Apantallamiento electromagnético y EMC',
        description: 'Compatibilidad electromagnética y técnicas de blindaje.',
        duration: '14 min',
        tier: 'pro',
        icon: '📡',
        tags: ['EMC', 'EMI', 'apantallamiento', 'interferencia'],
        content: `# Apantallamiento Electromagnético y EMC

**EMC** = Compatibilidad Electromagnética
**EMI** = Interferencia Electromagnética

## ¿Por qué importa la EMC?

Equipos eléctricos/electrónicos pueden:
1. **Emitir** perturbaciones que afectan otros equipos
2. **Ser susceptibles** a perturbaciones externas

La EMC asegura que los equipos coexistan sin interferir entre sí.

## Fuentes comunes de EMI

- Variadores de frecuencia (VFD)
- Motores y contactores (transitorios de conmutación)
- Fuentes de alimentación conmutadas (SMPS)
- Rayos y descargas electrostáticas (ESD)
- Radiofrecuencia (celulares, radio, Wi-Fi)
- Welders (soldaduras)

## Técnicas de apantallamiento

### Apantallamiento de campo eléctrico
- Jaula de Faraday: recinto conductor continuo
- El conductor intercepta el campo y lo conduce a tierra
- Eficacia: el blindaje de cobre 100% apantalla mejor que mallas con huecos

### Apantallamiento de campo magnético
- Requiere materiales ferromagnéticos (hierro, acero, mu-metal)
- Para bajas frecuencias: el apantallamiento eléctrico no es suficiente
- En transformadores: núcleo magnético sirve también de pantalla

### Cable apantallado vs. sin apantallar
| Tipo | Uso |
|------|-----|
| Par trenzado UTP | Cancela EMI por trenzado (no blindaje físico) |
| Par trenzado apantallado STP/FTP | Mejor rechazo de EMI |
| Coaxial | Señales RF, alta frecuencia |
| Triaxial | Señales de muy baja amplitud (instrumentación) |

## Reglas de instalación para buena EMC

1. **Separar cables de potencia y señal** (mínimo 15-30cm en paralelo, cruzar a 90°)
2. **Poner en conduit metálico** cables de señal cerca de fuentes de EMI
3. **Terminal de pantalla**: conectar la pantalla del cable a tierra en UN solo extremo para señales analógicas, o en ambos extremos para señales digitales/RF
4. **Ferrite cores**: instalar en cables para reducir EMI de alta frecuencia
5. **Filtros EMI** en entradas de alimentación de equipos sensibles`,
      },
      {
        id: 'reles-proteccion',
        title: 'Relés de protección eléctrica',
        description: 'Relés 51, 50, 87, 67, 27/59: función, ajuste y coordinación.',
        duration: '18 min',
        tier: 'pro',
        icon: '🔲',
        tags: ['relé', 'protección', 'coordinación', 'ANSI'],
        content: `# Relés de Protección Eléctrica

Los relés de protección detectan condiciones anormales y ordenan la apertura de interruptores para proteger el sistema.

## Numeración ANSI (estándar internacional)

| Número ANSI | Función | Descripción |
|-------------|---------|-------------|
| 27 | Undervoltage | Protección de baja tensión |
| 50 | Overcurrent instantáneo | Disparo instantáneo por sobrecorriente |
| 51 | Overcurrent temporizado | Disparo temporizado por sobrecorriente |
| 59 | Overvoltage | Protección de sobretensión |
| 67 | Overcurrent direccional | Sobrecorriente con dirección de flujo |
| 87 | Diferencial | Protección diferencial (transformadores, motores) |
| 79 | Reconectador | Recloser automático |
| 81 | Frecuencia | Protección de subfrecuencia/sobrefrecuencia |

## Relé 51: Sobrecorriente de tiempo inverso

La curva de tiempo inverso: mayor corriente → disparo más rápido

**Tipos de curvas (IEC 60255)**:
- SI (Inversamente Estándar): para cargas normales
- VI (Muy Inversa): para motores con alta corriente de arranque
- EI (Extremadamente Inversa): para líneas con alta corriente de fallo

**Ajustes del relé 51**:
- **Tap (pick-up)**: corriente mínima que activa el relé (ej. 1.2× corriente nominal)
- **Dial de tiempo (TD)**: escala de multiplicación del tiempo (mayor TD = mayor tiempo)

## Relé 87: Protección diferencial

Principio: La corriente que ENTRA a un equipo debe ser IGUAL a la que SALE.
Si hay diferencia → hay una falla interna → disparo inmediato.

Aplicaciones: Transformadores, motores, generadores, barras

Los TC (transformadores de corriente) en ambos lados del equipo protegido alimentan el relé. El relé calcula la diferencia (corriente diferencial Id).

## Coordinación de protecciones

El objetivo es que la falla sea eliminada por la protección MÁS CERCANA al punto de falla, protegiendo la menor parte del sistema posible.

**Tiempo de coordinación** (CTI = Coordination Time Interval): mínimo 0.3-0.4 segundos entre niveles de protección en sistemas con relés electromecánicos; 0.2s con digitales.

**Curvas de coordinación (TCC)**: Gráficas Corriente-Tiempo que muestran cómo operan las protecciones en secuencia.`,
      },
    ],
  },

  // ─── MÓDULO: CALIDAD DE ENERGÍA ────────────────────────────────────────────
  {
    id: 'calidad-energia',
    title: 'Calidad de Energía Eléctrica',
    description: 'Armónicos, flicker, factor de potencia y análisis de redes.',
    icon: '📊',
    tier: 'pro',
    color: '#7C4DFF',
    lessons: [
      {
        id: 'armonicos',
        title: 'Armónicos y distorsión armónica total (THD)',
        description: 'Causas, efectos y mitigación de armónicos en redes eléctricas.',
        duration: '16 min',
        tier: 'pro',
        icon: '〰️',
        tags: ['armónicos', 'THD', 'calidad', 'distorsión'],
        content: `# Armónicos y Distorsión Armónica Total (THD)

## ¿Qué son los armónicos?

La energía eléctrica ideal es una onda senoidal perfecta a 60 Hz. Los armónicos son componentes de frecuencia a múltiplos de 60 Hz (120, 180, 240... Hz) que se suman a la onda fundamental, distorsionándola.

**Orden de armónico (n)** = n × 60 Hz

- 2° armónico: 120 Hz
- 3° armónico: 180 Hz
- 5° armónico: 300 Hz
- 7° armónico: 420 Hz

## THD (Total Harmonic Distortion)

El THD mide el total de armónicos como porcentaje de la fundamental:

THD = √(V₂² + V₃² + V₄² + ...) / V₁ × 100%

**Límites según IEEE 519 y CFE**:
| Punto de medición | THDv máx. |
|------------------|-----------|
| Alta tensión (>69kV) | 1.5% |
| Media tensión (1-69kV) | 2.5% |
| Baja tensión (<1kV) | 5% |

## Fuentes de armónicos

- **Variadores de frecuencia (VFD)**: producen 5°, 7°, 11°, 13°
- **Fuentes de poder conmutadas** (computadoras, cargadores): 3°, 5°, 7°
- **Lámparas fluorescentes con balastro electrónico**: 3°, 5°
- **Hornos de arco eléctrico**: armónicos de bajo orden
- **UPS de doble conversión**

## Efectos de los armónicos

1. **Sobrecalentamiento de transformadores**: las pérdidas en el núcleo aumentan con la frecuencia
2. **Sobrecalentamiento del neutro**: en sistemas trifásicos, los armónicos de 3° se suman en el neutro (el neutro puede tener MÁS corriente que las fases)
3. **Errores en medidores de energía** (medidores de inducción)
4. **Interferencia con sistemas de comunicación y control**
5. **Resonancia con capacitores** de corrección de factor de potencia

## Mitigación de armónicos

- **Filtros pasivos**: circuito LC sintonizado a la frecuencia del armónico
- **Filtros activos**: inyectan corrientes de compensación en oposición
- **Transformadores con bobinado en zig-zag**: eliminan 3° armónico en el neutro
- **VFD con front-end activo (AFE)**: reducen THD corriente a <5%
- **Reactancias de línea (AC line reactor)**: 3-5% impedancia, reducen armónicos de VFD`,
      },
      {
        id: 'factor-potencia-reactiva',
        title: 'Factor de potencia y compensación reactiva',
        description: 'Potencia activa, reactiva, aparente y bancos de capacitores.',
        duration: '15 min',
        tier: 'pro',
        icon: '📐',
        tags: ['factor de potencia', 'capacitor', 'KVAR', 'reactiva'],
        content: `# Factor de Potencia y Compensación Reactiva

## El triángulo de potencias

En circuitos AC con cargas inductivas:
- **P (kW)**: Potencia activa — trabajo real realizado
- **Q (kVAR)**: Potencia reactiva — energía "prestada" por la inductancia
- **S (kVA)**: Potencia aparente — lo que suministra el generador/transformador

**Factor de potencia (FP)** = P / S = cos(φ)

Un FP de 0.85 significa que el 85% de la corriente hace trabajo real y el 15% circula en vaivén sin hacer trabajo útil.

## ¿Por qué el FP bajo es un problema?

- La red (cables, transformadores) deben conducir la corriente aparente (S), no solo la activa (P)
- A mayor corriente → mayores pérdidas (I²R)
- CFE cobra penalización cuando FP < 0.9 en tarifas industriales
- El transformador se satura antes de su capacidad nominal

## Causas de bajo factor de potencia

- Motores de inducción (especialmente a carga parcial)
- Transformadores en vacío
- Balastros magnéticos de fluorescentes
- Hornos de inducción

## Corrección de FP con capacitores

Los capacitores generan potencia reactiva capacitiva (Q_C negativa) que compensa la inductiva (Q_L positiva).

**Cálculo de capacitor necesario:**
Q_C = P × (tan φ₁ - tan φ₂)

Donde φ₁ = ángulo actual (FP bajo) y φ₂ = ángulo objetivo (FP deseado)

**Ejemplo:**
- P = 100 kW, FP actual = 0.75 (φ₁ = 41.4°), FP objetivo = 0.95 (φ₂ = 18.2°)
- Q_C = 100 × (tan 41.4° - tan 18.2°) = 100 × (0.882 - 0.329) = **55.3 kVAR**

## Tipos de bancos de capacitores

| Tipo | Descripción |
|------|-------------|
| Fijo | Sin control, para cargas constantes |
| Paso a paso | Varios pasos con contactores, controlado por regulador |
| Dinámico (STATCOM) | Control instantáneo con electrónica de potencia |

> ⚠️ Los capacitores pueden resonar con los armónicos. Usa reactancias en serie con los capacitores para evitar resonancia (banco de potencia con dessintonización).`,
      },
      {
        id: 'flicker-variaciones',
        title: 'Flicker, dips y variaciones de voltaje',
        description: 'Causas y medición de variaciones de tensión que afectan equipos.',
        duration: '12 min',
        tier: 'pro',
        icon: '💫',
        tags: ['flicker', 'sag', 'swell', 'calidad de tensión'],
        content: `# Flicker, Dips y Variaciones de Voltaje

## Clasificación de perturbaciones de voltaje (IEEE 1159)

### Por duración:
| Tipo | Duración |
|------|---------|
| Transitorio | <1 ciclo (< 16.7ms a 60Hz) |
| Instantáneo | 0.5 - 30 ciclos |
| Momentáneo | 30 ciclos - 3 segundos |
| Temporal | 3s - 1 minuto |
| Sostenido | >1 minuto |

### Por magnitud:
| Tipo | Magnitud |
|------|---------|
| Microcorte (interruption) | <10% del nominal |
| Sag (depresión) | 10-90% del nominal |
| Swell (elevación) | 110-180% del nominal |
| Sobretensión sostenida | >110% del nominal |
| Subtensión sostenida | <90% del nominal |

## Flicker (Parpadeo)

El flicker es la percepción visual de las variaciones rápidas de luminosidad causadas por fluctuaciones de voltaje.

**Causas comunes**: soldadoras de arco, hornos de arco, motores de laminadores, sierras de madera, arranques frecuentes de motores.

**Medición**: Índice de perturbación corta (Pst) y larga (Plt) según IEC 61000-4-15.
- Pst ≤ 1.0 es aceptable según norma
- Plt = valor promedio de 12 periodos Pst de 10 minutos

## Sags de voltaje (huecos de tensión)

Causa más frecuente de problemas en procesos industriales:
- **Origen**: fallas en la red (cortocircuitos en otra parte del sistema, arranques de grandes motores)
- **Duración típica**: 100ms - 1 segundo
- **Efecto**: paro de variadores, PLC, contadores, etc.

**Soluciones**:
- UPS (protege cargas críticas)
- DVR (Dynamic Voltage Restorer): inyecta voltaje en serie durante el sag
- Generadores con ATS (para interrupciones >30s)
- Rediseño del proceso para tolerar sags de hasta 150ms

## Analizadores de calidad de energía

Los analizadores (Fluke 435, Hioki PW3360, Dewesoft, etc.) miden:
- THD de voltaje y corriente
- FP y KVAR
- Flicker Pst/Plt
- Eventos de sag/swell/interrupción
- Desequilibrio de tensiones
- Potencias activa, reactiva, aparente, distorsión`,
      },
      {
        id: 'auditoria-energia',
        title: 'Auditoría energética eléctrica',
        description: 'Diagnóstico de consumo, identificación de ahorros y reporte.',
        duration: '16 min',
        tier: 'pro',
        icon: '📋',
        tags: ['auditoría', 'eficiencia', 'ahorro', 'consumo'],
        content: `# Auditoría Energética Eléctrica

## ¿Qué es una auditoría energética?

Proceso sistemático para:
1. Cuantificar el consumo energético actual
2. Identificar oportunidades de ahorro
3. Calcular el retorno de inversión (ROI) de las mejoras

## Tipos de auditorías (ASHRAE)

| Nivel | Profundidad | Duración típica |
|-------|-------------|-----------------|
| Nivel 1 (Walk-through) | Inspección visual, análisis de recibos | 1-2 días |
| Nivel 2 | Mediciones detalladas, análisis por sistemas | 1-2 semanas |
| Nivel 3 (Inversión de capital) | Ingeniería de proyecto, simulación | 1-3 meses |

## Proceso de auditoría Nivel 2

### Paso 1: Recopilación de datos históricos
- Recibos de CFE de los últimos 12 meses
- Inventario de equipos (motores, iluminación, A/C, procesos)
- Horarios de operación

### Paso 2: Mediciones en campo
- Analizador de energía en acometida principal
- Medición por circuito/equipo importante
- Temperatura de tableros (termografía)
- Factor de potencia global y por carga

### Paso 3: Benchmarking
Comparar el **EUI (Energy Use Intensity)** del edificio con edificios similares:
- EUI = kWh/año / m² de área

| Tipo de edificio | EUI típico (kWh/m²/año) |
|-----------------|------------------------|
| Oficinas México | 100-200 |
| Hospital | 300-600 |
| Centro comercial | 200-400 |
| Planta industrial | Variable |

### Paso 4: Identificación de medidas de ahorro (ECMs)

**ECM = Energy Conservation Measure**

| ECM | Ahorro típico | Payback típico |
|-----|-------------|----------------|
| Sustitución a LED | 50-70% iluminación | 1-3 años |
| VFD en bombas/HVAC | 20-50% motor | 2-4 años |
| Corrección FP | 5-15% factura | 1-2 años |
| Aislamiento térmico | 15-30% climatización | 3-5 años |
| Submedición y control | 5-20% global | 1-3 años |

### Paso 5: Informe de auditoría
- Resumen ejecutivo (consumo actual, potencial de ahorro, inversión requerida)
- Detalle por ECM con cálculo de ROI
- Plan de implementación priorizado por ROI`,
      },
    ],
  },

  // ─── MÓDULO: SISTEMAS DE EMERGENCIA ────────────────────────────────────────
  {
    id: 'sistemas-emergencia',
    title: 'Sistemas de Emergencia y Respaldo Industrial',
    description: 'UPS industriales, grupos electrógenos, transferencia y piso técnico.',
    icon: '🏭🔋',
    tier: 'pro',
    color: '#E65100',
    lessons: [
      {
        id: 'ups-industrial',
        title: 'UPS industriales y de centros de datos',
        description: 'Topologías, dimensionamiento y mantenimiento de UPS de alta potencia.',
        duration: '16 min',
        tier: 'pro',
        icon: '🔋',
        tags: ['UPS', 'centro de datos', 'respaldo', 'VRLA'],
        content: `# UPS Industriales y Centros de Datos

## Topologías de UPS de alta potencia

### Doble conversión online (VFI)
- **VFI** = Voltage and Frequency Independent
- La carga SIEMPRE opera desde el inversor (0ms de conmutación)
- El rectificador AC→DC mantiene las baterías cargadas y alimenta el inversor
- Si falla el rectificador: las baterías alimentan el inversor
- Si falla el inversor: bypass estático conecta la carga directamente a la red

### Interactiva de línea (VI)
- **VI** = Voltage Independent
- Solo corrige el voltaje con regulador ferromagnético o AVR
- Cambia a batería en 4-10ms cuando falla CFE
- Más eficiente que doble conversión (97% vs 94%)

### Delta conversión
- Procesamiento solo del delta (diferencia) de energía
- Eficiencia hasta 99%
- Usado en UPS de gran potencia (>500 kVA)

## Baterías para UPS

### VRLA (Valve Regulated Lead Acid)
- Las más comunes: selladas, libre mantenimiento
- Vida útil: 5 años (datos) a 10 años (industriales)
- Temperatura crítica: a 25°C vida nominal; por cada 8°C más, la vida se reduce a la mitad

### Litio (LFP, LiPo)
- Más ligeras, 3× más densidad de energía
- Ciclos: 2000-5000 vs 300-500 de VRLA
- Carga más rápida (15 min vs 4-8 horas)
- Mayor costo inicial pero mejor TCO (costo total de propiedad)

### Dimensionamiento de baterías
**Energía requerida (kWh)** = Carga (kW) × Tiempo de respaldo (horas) / Eficiencia UPS

Incluir margen del 25% por envejecimiento y temperatura.

## Configuraciones de redundancia para centros de datos

| Tier | Descripción | Disponibilidad |
|------|-------------|---------------|
| Tier I | Sin redundancia | 99.671% |
| Tier II | Redundancia parcial | 99.741% |
| Tier III | N+1, sin apagado para mantenimiento | 99.982% |
| Tier IV | 2N+1, falla tolerante | 99.995% |

**N+1**: Un UPS de respaldo por cada N en operación.
**2N**: Dos sistemas completos e independientes (A y B).`,
      },
      {
        id: 'grupos-electrogenos-industrial',
        title: 'Grupos electrógenos industriales',
        description: 'Dimensionamiento, instalación y transferencia en instalaciones industriales.',
        duration: '15 min',
        tier: 'pro',
        icon: '⚙️',
        tags: ['generador', 'grupo electrógeno', 'diesel', 'ATS industrial'],
        content: `# Grupos Electrógenos Industriales

## Clasificación por combustible

| Tipo | Ventajas | Aplicación |
|------|---------|------------|
| Diesel | Mayor densidad energética, confiable | Industria, data centers |
| Gas natural | Sin almacenamiento, más limpio | Plantas con gas disponible |
| Gas LP | Portable, disponible en rural | Vivienda, comercio |
| Bi-fuel | Diesel + gas (reduce consumo diesel) | Grandes instalaciones |

## Categorías de aplicación (NFPA 110)

| Categoría | Tiempo de transferencia | Tiempo de operación mínimo |
|-----------|------------------------|--------------------------|
| Clase 10 | ≤10 segundos | 2 horas |
| Clase 30 | ≤30 segundos | 2 horas |
| Clase 60 | ≤60 segundos | 2 horas |
| Clase 120 | ≤120 segundos | 2 horas |

Para hospitales y centros de datos críticos: Clase 10 (10 segundos).

## Dimensionamiento del grupo electrógeno

### Paso 1: Lista de cargas
- Cargas normales (kW)
- Corriente de arranque de motores (kVA de arranque = kW × 6-8)

### Paso 2: Factor de demanda
No todas las cargas operan simultáneamente.
Carga de demanda = Suma cargas × Factor de demanda (0.6-0.9 típico)

### Paso 3: Margen de crecimiento
Agregar 25% para expansión futura.

### Paso 4: Selección
La potencia nominal del generador debe ser ≥ carga calculada.
- **PRP** (Prime Power): operación continua sin límite de horas
- **ESP** (Emergency Standby Power): máximo 500 horas/año de emergencia
- **COP** (Continuous Power): carga constante 24/7

## Instalación eléctrica del grupo electrógeno

1. **Tablero de transferencia (ATS)**:
   - Interruptor de CFE (N/C) y de Generador (N/O)
   - Enclavamiento mecánico o eléctrico (no pueden estar cerrados simultáneamente)

2. **Cables de potencia**:
   - Dimensionar para la potencia del generador
   - Conduit o bandeja metálica hasta el tablero

3. **Cableado de control** (12-14 AWG):
   - Señal de arranque/parada desde ATS al generador
   - Señal de falla del generador hacia el ATS

4. **Tanque de combustible**:
   - Debe cumplir NOM contra incendio
   - Calcular autonomía: consumo diesel ≈ 0.25 L/kWh generado

5. **Sistema de escape**:
   - Al exterior, alejado de ventanas y entradas de aire
   - Silenciador obligatorio en zonas urbanas`,
      },
      {
        id: 'iluminacion-emergencia',
        title: 'Iluminación de emergencia y señalización',
        description: 'NOM-026, equipos autónomos, señales de evacuación y centrales.',
        duration: '12 min',
        tier: 'pro',
        icon: '🔆',
        tags: ['emergencia', 'evacuación', 'NOM-026', 'iluminación'],
        content: `# Iluminación de Emergencia y Señalización

## Marco normativo en México

- **NOM-026-STPS**: Colores y señales de seguridad e higiene
- **NOM-002-STPS**: Condiciones de seguridad, prevención y protección contra incendio
- **NOM-001-SEDE Art. 700**: Sistemas de emergencia

## Tipos de iluminación de emergencia

### Luminaria autónoma (con batería interna)
- Batería NiMH, NiCd o Li-Ion recargable
- Se carga continuamente desde la red
- Al fallar la red: opera la batería por mínimo 90 minutos
- Tipos: siempre encendida (non-maintained) o solo en emergencia (maintained)
- Ventaja: sin cableado adicional, fácil instalación
- Desventaja: requiere revisión individual

### Sistema centralizado con baterías
- Una central de baterías alimenta todas las luminarias de emergencia
- Monitoreo desde la central
- Prueba automática programable
- Más costoso pero fácil mantenimiento

### Circuito de emergencia desde UPS/generador
- Las luminarias de emergencia van en circuito separado alimentado por UPS o generador
- La luminaria no necesita batería propia
- Requiere ATS que transfiera este circuito en milisegundos (UPS) o segundos (generador)

## Nivel de iluminación requerido

| Área | Iluminancia mínima en emergencia |
|------|--------------------------------|
| Vías de evacuación | 1 lux en el eje central |
| Salidas de emergencia | 5 lux mínimo |
| Áreas de riesgo elevado | 10% de la iluminación normal |

## Señales de evacuación (NOM-026)

- **Verde con figura blanca**: salida, ruta de evacuación
- **Rojo con figura blanca**: equipo contra incendio
- **Amarillo/naranja**: precaución, riesgo
- **Azul**: obligatorio (uso de EPP)
- Las señales de evacuación deben tener iluminación propia o ser retroiluminadas
- Distancia de visibilidad: la altura de la señal en cm × 10 = distancia en metros`,
      },
    ],
  },

  // ─── MÓDULO: INSTALACIONES ESPECIALES ──────────────────────────────────────
  {
    id: 'instalaciones-especiales',
    title: 'Instalaciones Eléctricas Especiales',
    description: 'Lugares clasificados, hospitales, albercas y edificios especiales.',
    icon: '🏥',
    tier: 'pro',
    color: '#C62828',
    lessons: [
      {
        id: 'lugares-clasificados',
        title: 'Instalaciones en lugares peligrosos (NOM Art. 500-516)',
        description: 'Clasificación de zonas, equipos antiexplosivos y normativa.',
        duration: '18 min',
        tier: 'pro',
        icon: '💥',
        tags: ['peligroso', 'antiexplosivo', 'ATEX', 'División', 'Zona'],
        content: `# Instalaciones en Lugares Peligrosos

NOM-001-SEDE Artículos 500-516 / NEC Artículo 500-516

## ¿Qué es un lugar peligroso?

Área donde puede haber presencia de gases, vapores, líquidos inflamables, polvos combustibles o fibras que creen riesgo de explosión o incendio.

## Clasificación por tipo de material

| Clase | Material |
|-------|---------|
| Clase I | Gases o vapores inflamables |
| Clase II | Polvos combustibles |
| Clase III | Fibras o materiales fácilmente encendibles |

## Clasificación por probabilidad (Sistema americano NEC)

| División | Probabilidad |
|---------|-------------|
| División 1 | El material peligroso NORMALMENTE está presente (operación normal o reparación) |
| División 2 | El material peligroso solo está presente en condiciones ANORMALES (falla, rotura) |

## Sistema de zonas (IEC — más usado en México industrial)

| Zona | Equivalente NEC | Descripción |
|------|----------------|-------------|
| Zona 0 | División 1 | Atmosfera explosiva CONTINUA (>1000 h/año) |
| Zona 1 | División 1 | Atmosfera explosiva PERIODICAMENTE |
| Zona 2 | División 2 | Atmosfera explosiva RARAMENTE y brevemente |

## Categorías de equipo (ATEX/IECEx)

| Categoría | Zona permitida |
|-----------|---------------|
| Categoría 1G | Zona 0, 1, 2 |
| Categoría 2G | Zona 1, 2 |
| Categoría 3G | Solo Zona 2 |

El sufijo G = Gas, D = Dust (polvo)

## Métodos de protección para equipos eléctricos en zonas peligrosas

| Código | Método | Descripción |
|--------|--------|-------------|
| Ex d | A prueba de explosión | Encierra las partes que pueden generar chispa en una carcasa resistente |
| Ex e | Seguridad aumentada | Elimina fuentes de ignición por diseño (no genera chispa) |
| Ex ia/ib | Seguridad intrínseca | Limita energía a niveles que no pueden encender la atmósfera |
| Ex p | Presurizado | Carcasa presurizada con gas inerte para excluir atmósfera explosiva |
| Ex n | No incendiario | Para Zona 2, no genera chispas en operación normal |

> ⚠️ En Zona 0 solo se permite seguridad intrínseca (Ex ia) o su equivalente.

## Instalación de cableado en zonas peligrosas

- **Zona 1**: conduit rígido metálico, cable mineral o sellado cada cruce de zona
- **Zona 2**: conduit, cable aprobado o bandeja con cable especial
- **Sellados de conduit**: cada 45cm desde un equipo en Zona 1, en cada cruce de zona
- Los sellados evitan que gases migren por el conduit hacia zonas seguras`,
      },
      {
        id: 'instalaciones-hospitalarias',
        title: 'Instalaciones eléctricas en hospitales',
        description: 'Sistemas críticos, IT médica, tierra paciente y normativa.',
        duration: '16 min',
        tier: 'pro',
        icon: '🏥',
        tags: ['hospital', 'médico', 'IT médica', 'tierra paciente'],
        content: `# Instalaciones Eléctricas en Hospitales

NOM-001-SEDE Art. 517 / NFPA 99

## Categorías de áreas hospitalarias

| Categoría | Descripción | Ejemplo |
|-----------|-------------|---------|
| 1 (Crítica) | Falla de suministro = riesgo de vida | Quirófano, UCI, urgencias |
| 2 (General) | Falla de suministro = interrupción de atención | Laboratorio, farmacia |
| 3 (Soporte) | Falla de suministro = inconveniencia | Administración, estacionamiento |

## Sistemas eléctricos en hospitales

### Sistema normal (CFE)
Suministro principal de la red pública.

### Sistema de emergencia (generador + ATS)
- Tiempo de transferencia: **10 segundos máximo** (Clase 10, NFPA 110)
- Ramificaciones del sistema de emergencia:
  - **Rama de vida segura**: iluminación de pasillos/salidas, alarmas, intercomunicación
  - **Rama crítica**: equipos de la UCI, quirófanos, unidades de enfermería
  - **Rama de equipo**: HVAC quirófanos, equipos de esterilización

### Sistema ininterrumpible (UPS)
Para equipos que no toleran ni 10 segundos:
- Monitores de signos vitales en UCI
- Equipos de imagen (Rx, TAC)
- Sistemas de información hospitalaria (HIS)

## Sistemas IT (aislados) en quirófanos

En quirófanos y áreas de cuidado crítico, el sistema eléctrico se aisla galvánicamente de tierra mediante un **transformador de aislamiento**.

**Ventaja**: Un solo fallo (fase o neutro) a tierra NO produce un cortocircuito ni activa el interruptor. El cirujano puede continuar. Solo un **monitor de aislamiento (LIM)** alarma cuando la resistencia de aislamiento baja.

El segundo fallo sí causa cortocircuito, pero para entonces ya se ha tomado acción.

## Tierra de referencia para pacientes

En áreas donde se conectan electrodos al paciente:
- Todos los equipos deben tener potencial igual (misma tierra)
- Diferencia de potencial máxima entre cualquier equipo y tierra: **40 mV** (NFPA 99)
- Se usa un bus de tierra de referencia al que se conectan todos los chasis metálicos

> ⚠️ La microelectrocución (50-150μA) puede provocar fibrilación ventricular si los electrodos conectan directamente al corazón (catéter cardíaco). Por eso los hospitales tienen normativa tan estricta.`,
      },
      {
        id: 'instalaciones-albercas',
        title: 'Instalaciones en albercas y fuentes',
        description: 'Zonas, bonding equipotencial, GFCI y seguridad en áreas acuáticas.',
        duration: '12 min',
        tier: 'pro',
        icon: '🏊',
        tags: ['alberca', 'fuente', 'bonding', 'GFCI', 'zona'],
        content: `# Instalaciones Eléctricas en Albercas y Fuentes

NOM-001-SEDE Art. 680 / NEC Article 680

## Zonas alrededor de albercas

| Zona | Distancia horizontal | Restricciones |
|------|---------------------|--------------|
| Zona A | 0-1.5m del agua | Prohibido cualquier caja o equipo |
| Zona B | 1.5-3m del agua | Solo circuitos GFCI, IP67 |
| Zona C | 3-7.5m del agua | Circuitos GFCI recomendados |

Altura: Las restricciones aplican hasta 2.5m de altura sobre el nivel del agua.

## Bonding equipotencial (igualación de potencial)

**El bonding es la medida de seguridad más importante en albercas.**

Si hay una diferencia de potencial eléctrico en el agua, una persona puede quedar atrapada por los músculos contraídos o sufrir electrocución.

**Todo lo que sea conductor dentro de la zona de la alberca debe estar interconectado:**
- Escaleras y pasamanos metálicos
- Sistema de tuberías metálicas
- Equipo de bombas y filtros
- Armado (varillas de acero) del concreto de la alberca
- Marco de ventanas metálicas adyacentes
- Luz de la alberca (carcasa metálica)
- Riel de unión equipotencial a 1.5m de la orilla

El bonding NO se conecta a tierra (es equipotencial, no tierra de protección).

## Iluminación subacuática

- Solo luminarias listadas para uso subacuático
- Voltaje de alimentación: máximo 150V
- Las luminarias de 12V son las más seguras (transformador aislado junto a la alberca)
- El transformador de alimentación debe estar a mínimo 1.5m de la orilla
- GFCI 5mA obligatorio en el circuito de iluminación subacuática

## Tomas de corriente y equipos

- Ningún contacto a menos de 1.5m del borde de la alberca
- Todos los contactos a menos de 3m: GFCI obligatorio
- Secadoras de cabello y planchas están prohibidas cerca de albercas
- Señalización: "Peligro – No introducir aparatos eléctricos"`,
      },
    ],
  },

  // ─── MÓDULO: SISTEMAS SCADA Y AUTOMATIZACIÓN AVANZADA ─────────────────────
  {
    id: 'scada-avanzado',
    title: 'SCADA, Redes Industriales y BAS',
    description: 'Supervisión remota, protocolos industriales y edificios inteligentes.',
    icon: '🖥️',
    tier: 'pro',
    color: '#0277BD',
    lessons: [
      {
        id: 'scada-sistemas',
        title: 'Sistemas SCADA para instalaciones eléctricas',
        description: 'Arquitectura SCADA, RTU, HMI y supervisión de redes eléctricas.',
        duration: '17 min',
        tier: 'pro',
        icon: '🖥️',
        tags: ['SCADA', 'HMI', 'RTU', 'supervisión'],
        content: `# Sistemas SCADA para Instalaciones Eléctricas

**SCADA** = Supervisory Control and Data Acquisition

## ¿Para qué se usa SCADA en electricidad?

- Monitoreo de subestaciones eléctricas
- Control de distribución de energía (apertura/cierre remota de interruptores)
- Supervisión de generadores y grupos electrógenos
- Monitoreo de calidad de energía en tiempo real
- Alarmas de fallas eléctricas
- Registro de datos para análisis posterior

## Arquitectura SCADA

### Nivel 0: Campo
Sensores y actuadores: TC (transformadores de corriente), TP (de potencial), medidores, relés de protección, interruptores con motor de accionamiento.

### Nivel 1: Control local (RTU/IED)
- **RTU** (Remote Terminal Unit): adquiere datos de campo y los envía al SCADA
- **IED** (Intelligent Electronic Device): relés digitales modernos que también son RTU
- Comunicación con el nivel 2 por protocolo estándar

### Nivel 2: Supervisión (HMI/SCADA Server)
- **HMI** (Human Machine Interface): pantalla donde el operador ve el estado del sistema
- **SCADA Server**: base de datos histórica, lógica de alarmas, gestión de comunicaciones

### Nivel 3: Gestión empresarial (EMS/DMS)
- Integración con ERP, facturación, mantenimiento
- Optimización de despacho de generación (EMS = Energy Management System)
- Gestión de distribución (DMS = Distribution Management System)

## Protocolos de comunicación SCADA eléctrico

| Protocolo | Uso |
|-----------|-----|
| DNP3 | Distribución eléctrica (estándar en CFE y utilities) |
| IEC 61850 | Protección y control en subestaciones (moderno) |
| Modbus RTU/TCP | Industrial general, medidores |
| IEC 60870-5-101/104 | Telecontrol de sistemas de potencia |

## Seguridad cibernética en SCADA (NERC CIP)

Las redes SCADA eléctricas son infraestructura crítica. Los principios de ciberseguridad incluyen:
- Aislamiento de red (air gap) entre SCADA y redes corporativas/internet
- Autenticación fuerte para acceso al SCADA
- Cifrado de comunicaciones
- Registro de auditoría de operaciones
- Plan de respuesta a incidentes cibernéticos`,
      },
      {
        id: 'redes-industriales',
        title: 'Redes industriales: Modbus, Profibus, EtherNet/IP',
        description: 'Protocolos de comunicación para control y automatización industrial.',
        duration: '15 min',
        tier: 'pro',
        icon: '🔗',
        tags: ['Modbus', 'Profibus', 'EtherNet/IP', 'fieldbus'],
        content: `# Redes Industriales: Protocolos de Comunicación

## ¿Por qué protocolos industriales?

Los PLC, variadores, medidores y robots necesitan intercambiar datos. Las redes industriales están diseñadas para:
- Tiempo de respuesta determinístico (garantizado, no variable)
- Alta confiabilidad en ambientes electromagnéticamente ruidosos
- Topologías sin punto único de falla

## Modbus (el más común)

**Creado**: 1979, Modicon. El más extendido por su simplicidad y libre uso.

**Variantes**:
- **Modbus RTU**: RS-232 o RS-485 (serial, hasta 247 esclavos, 1.2km)
- **Modbus ASCII**: Similar pero en texto ASCII, menos eficiente
- **Modbus TCP/IP**: Sobre Ethernet, el más usado hoy

**Principio**: Maestro-esclavo. El maestro (PLC/SCADA) solicita; el esclavo (medidor/VFD) responde.

**Tipos de datos (registros)**:
| Función | Tipo | Acceso |
|---------|------|--------|
| Coils (0x) | Salidas digitales | Lectura/escritura |
| Discrete Inputs (1x) | Entradas digitales | Solo lectura |
| Input Registers (3x) | Entradas analógicas | Solo lectura |
| Holding Registers (4x) | Parámetros y salidas | Lectura/escritura |

## Profibus

Estándar europeo (Siemens). Muy usado en industria automotriz y química.

- **Profibus DP**: Para E/S distribuidas rápidas (hasta 12 Mbit/s, 126 esclavos)
- **Profibus PA**: Para instrumentación en zonas peligrosas (Ex), bus de potencia + datos

## EtherNet/IP (Industrial Protocol)

Protocolo de Rockwell Automation / ODVA sobre Ethernet estándar:
- Velocidades de Ethernet (100Mbps, 1Gbps)
- Compatible con switches Ethernet comerciales
- Protocolo CIP (Common Industrial Protocol) sobre TCP/IP y UDP/IP
- Determinismo por QoS (prioridad de paquetes)

## PROFINET

Ethernet industrial de Siemens:
- Hasta 10 Gbps en versiones recientes
- Alta precisión de sincronización (100µs en modo IRT)
- Ampliamente usado con PLC Siemens S7

## Tendencia: Industrial IoT (IIoT)

Las fábricas modernas integran protocolos industriales con la nube mediante:
- **OPC-UA**: Protocolo de plataforma cruzada y seguro para IIoT
- **MQTT**: Protocolo ligero para IoT (publicar/suscribirse)
- **Edge computing**: Procesamiento local antes de enviar datos a la nube`,
      },
      {
        id: 'edificios-inteligentes',
        title: 'Edificios inteligentes y sistemas BAS/BMS',
        description: 'Automatización de edificios, KNX, DALI y gestión de energía.',
        duration: '14 min',
        tier: 'pro',
        icon: '🏢',
        tags: ['edificio inteligente', 'BAS', 'KNX', 'DALI', 'domótica profesional'],
        content: `# Edificios Inteligentes y Sistemas BAS/BMS

**BAS** = Building Automation System
**BMS** = Building Management System

## ¿Qué integra un edificio inteligente?

- **HVAC** (calefacción, ventilación, A/C): mayor consumo energético del edificio
- **Iluminación**: control por zonas, horarios, ocupación, luz natural
- **Seguridad**: control de acceso, CCTV, alarmas
- **Contraincendios**: detección, supresión, evacuación
- **Energía**: medición por piso/área, gestión de demanda
- **Elevadores y escaleras eléctricas**
- **Plomería**: monitoreo de bombas, presión

## Protocolos de automatización de edificios

### BACnet (Building Automation and Control Networks)
- Estándar ANSI/ASHRAE 135
- El más usado globalmente para HVAC
- Diferentes capas físicas: BACnet/IP, BACnet MS/TP (RS-485), BACnet Ethernet

### LonWorks
- Desarrollado por Echelon, muy usado en edificios corporativos
- Neuron chip en cada dispositivo
- Más costoso pero muy robusto

### KNX
- Estándar europeo, muy usado en Europa y creciendo en México
- Cable par trenzado (KNX TP), RF inalámbrico (KNX RF), IP
- Certificación KNX: todos los dispositivos son interoperables sin importar fabricante
- Aplicaciones: iluminación, persianas, HVAC, alarmas, contadores de energía

### DALI (Digital Addressable Lighting Interface)
- Protocolo específico para iluminación
- Hasta 64 equipos por bus DALI
- Control individual de luminarias con 256 niveles de dimmer
- Grupos y escenas programables

## Certificaciones de edificios inteligentes

| Certificación | Enfoque |
|--------------|---------|
| LEED (USGBC) | Sostenibilidad, eficiencia energética |
| WELL | Salud y bienestar de ocupantes |
| BOMA 360 | Gestión y operación del edificio |
| EDGE (IFC) | Edificios eficientes países en desarrollo |

## ROI de un edificio inteligente

- **Ahorro en energía**: 20-40% en iluminación y HVAC con control inteligente
- **Mantenimiento predictivo**: monitoreo continuo reduce fallas no planificadas 30-50%
- **Productividad de ocupantes**: mejora del 5-10% en confort y calidad del aire`,
      },
    ],
  },

  // ─── MÓDULO: MEDIA Y ALTA TENSIÓN ──────────────────────────────────────────
  {
    id: 'media-alta-tension',
    title: 'Media y Alta Tensión',
    description: 'Subestaciones, cables MT, transformadores de potencia y redes primarias.',
    icon: '🗼',
    tier: 'pro',
    color: '#880E4F',
    lessons: [
      {
        id: 'subestaciones-mt',
        title: 'Subestaciones de media tensión',
        description: 'Equipos, diagramas unifilares y operación de subestaciones MT.',
        duration: '20 min',
        tier: 'pro',
        icon: '🏭',
        tags: ['subestación', 'media tensión', 'interruptor', 'SF6'],
        content: `# Subestaciones de Media Tensión

## Niveles de tensión en México (CFE)

| Nivel | Tensión nominal |
|-------|----------------|
| Alta tensión (AT) | 115, 230, 400 kV |
| Media tensión (MT) | 4.16, 6.9, 13.8, 23, 34.5 kV |
| Baja tensión (BT) | 127/220V, 220/380V |

La mayoría de industriales y comerciales grandes reciben suministro en **13.8 kV** (CFE tarifa HM, HSL).

## Diagrama unifilar de subestación

El diagrama unifilar muestra el sistema eléctrico con una línea por circuito (en lugar de las 3 fases):

**Componentes típicos de una subestación de cliente MT:**

1. **Acometida de CFE** (13.8 kV): llegada del servicio
2. **Interruptor de media tensión** (entrada): protección y control del suministro
3. **Transformador de instrumentos**: TC y TP para medición y protección
4. **Medidor de energía MT**: para la facturación de CFE
5. **Interruptores de salida** (para cada transformador o circuito)
6. **Transformadores de potencia**: 13.8 kV → 480V o 220V BT
7. **Tableros de distribución BT**: distribución a usuarios finales

## Equipos de media tensión

### Interruptor de potencia
- Abre/cierra circuitos en carga y en cortocircuito
- Medios de extinción del arco:
  - **SF6 (hexafluoruro de azufre)**: el más común, excelente extinción, pero es gas de efecto invernadero
  - **Vacío (Vacuum CB)**: muy confiable, sin mantenimiento, para <36kV
  - **Aire comprimido**: para alta tensión

### Seccionalizador
- Abre en vacío (sin carga)
- No interrumpe cortocircuitos
- Se usa para aislar secciones del sistema para mantenimiento

### Cuchillas desconectadoras (switches)
- Sin capacidad de interrumpir corriente (solo cambian configuración en vacío)
- Visualmente abiertas/cerradas (requisito de seguridad para LOTO en MT)

### Fusibles de alta tensión
- Protección contra cortocircuitos en transformadores MT
- Fusibles tipo expulsión (Bayo) o tipo limitador de corriente

## Pruebas en subestaciones MT

- **Prueba dieléctrica de cables**: 2×Vn+1kV DC o según norma
- **Megger en transformadores**: resistencia de aislamiento bobinados
- **Relación de transformación (TTR)**: verifica la relación de vueltas del transformador
- **Resistencia de contactos**: con micróhmetro en contactos de interruptores`,
      },
      {
        id: 'cables-media-tension',
        title: 'Cables de media tensión',
        description: 'Tipos, instalación, pruebas y terminaciones de cables MT.',
        duration: '15 min',
        tier: 'pro',
        icon: '🔌',
        tags: ['cable MT', 'XLPE', 'terminación', 'prueba dieléctrica'],
        content: `# Cables de Media Tensión

## Tipos de cable MT

| Tipo | Aislamiento | Temperatura máx. | Aplicación |
|------|-------------|-----------------|------------|
| XLPE (polietileno reticulado) | 90-105°C | El más común hoy |
| EPR (caucho etileno propileno) | 105°C | Más flexible, para MT |
| PVC (cloruro de polivinilo) | 70-90°C | BT, poco en MT |
| PILC (papel impregnado con plomo) | 70°C | Instalaciones antiguas |

## Capas de un cable MT (XLPE)

De adentro hacia afuera:
1. **Conductor** (cobre o aluminio)
2. **Pantalla semiconductora interior**: campo eléctrico uniforme
3. **Aislamiento XLPE**: la barrera dieléctrica
4. **Pantalla semiconductora exterior**: controla el campo externo
5. **Pantalla metálica** (cintas de cobre o alambre): drena corrientes capacitivas y de falla
6. **Cubierta de PVC**: protección mecánica

## Por qué la pantalla es crítica en MT

En cables MT, el campo eléctrico es muy intenso. Sin pantalla semiconductora, el campo se concentraría en puntos irregulares del aislamiento, causando descargas parciales y falla prematura del cable.

## Instalación de cables MT

### Ductos y conduits
- Conduit de PVC o HDPE para cables MT (no galvanizado: las corrientes inducen calor)
- Separación mínima entre cables: 1× diámetro exterior
- Radio mínimo de curvatura: 12-15× diámetro del cable

### Directamente enterrado
- Arena limpia como cama (mínimo 10cm bajo y 10cm sobre el cable)
- Cinta de advertencia (naranja) a 30cm sobre el cable
- Profundidad mínima: 0.9m en áreas de tráfico, 0.6m en áreas peatonales

### En bandeja
- Para interiores y subestaciones
- Separación entre cables según ampacidad
- Cubierta sobre la bandeja para protección mecánica

## Terminaciones y empalmes

Las terminaciones son el punto más crítico del cable MT:
- Requieren remoción cuidadosa de cada capa
- Cono de estrés: control del campo eléctrico en el corte de la pantalla
- Usar terminaciones listadas para la clase de voltaje del cable
- **Tipos**: termocontráctil, fríocontraíble, porcelana (para intemperie)

## Pruebas al cable instalado

1. **Resistencia de aislamiento** (Megger): 5kV o 10kV DC, mínimo 1 GΩ/km
2. **Prueba dieléctrica de alta tensión** (hipot): voltaje de prueba = 2.5 × Vn (DC) o según norma
3. **Detección de descargas parciales**: identifica defectos en el aislamiento`,
      },
      {
        id: 'transformadores-potencia',
        title: 'Transformadores de potencia y distribución',
        description: 'Tipos, conexiones, pruebas y mantenimiento de transformadores.',
        duration: '18 min',
        tier: 'pro',
        icon: '🔄',
        tags: ['transformador', 'delta', 'estrella', 'aceite', 'seco'],
        content: `# Transformadores de Potencia y Distribución

## Principio de funcionamiento

El transformador transfiere energía entre dos circuitos por inducción electromagnética sin conexión eléctrica directa.

**Relación de transformación**:
V₁/V₂ = N₁/N₂ = I₂/I₁

Donde V = voltaje, N = número de vueltas, I = corriente

Si el voltaje sube, la corriente baja proporcionalmente (la potencia se conserva).

## Tipos de transformadores

### Por refrigeración
| Tipo | Descripción | Ventajas |
|------|-------------|---------|
| ONAN (aceite natural, aire natural) | Sumergido en aceite mineral | Barato, para exteriores |
| ONAF (aceite natural, aire forzado) | Aceite + ventiladores | Mayor capacidad |
| ANAN (aislamiento seco, aire natural) | Sin aceite, resina | Interior, libre mantenimiento |
| ANAF (seco, aire forzado) | Tipo seco + ventiladores | Para alta potencia en interiores |

### Por aplicación
- **Transformador de distribución**: cliente final, 13.8kV→220/127V, 5-2500 kVA
- **Transformador de potencia**: subestaciones de transmisión, MW, AT-MT
- **Transformador de instrumentos (TC/TP)**: para medición y protección (ver clase abajo)
- **Autotransformador**: bobinado común (más económico para pequeña relación)

## Conexiones trifásicas (grupos vectoriales)

| Conexión | Código | Descripción |
|---------|--------|-------------|
| Estrella-Estrella | Yy0 | Mismo desfase, requiere neutro |
| Delta-Estrella | Dy11 | Elimina 3° armónico en delta, para distribución |
| Estrella-Delta | Yd11 | Para subestaciones de transmisión |
| Delta-Delta | Dd0 | Para cargas sin neutro, industria |

**Dy11** es la conexión estándar de CFE para transformadores de distribución.
El número (0, 6, 11) indica el desfase en "horas de reloj": 11 = 330° de desfase.

## Pruebas de aceptación en transformadores

| Prueba | Mide | Criterio |
|--------|------|---------|
| Relación de transformación (TTR) | Relación de vueltas | ±0.5% del nominal |
| Resistencia de aislamiento | Megger | >1 GΩ a temperatura normal |
| Índice de polarización (PI) | Calidad del aislamiento | PI = R10min/R1min > 2.0 |
| Pérdidas en vacío | Pérdidas en el núcleo | Según placa |
| Pérdidas en cortocircuito | Pérdidas en bobinados | Según placa |
| Análisis de aceite (DGA) | Gases disueltos en aceite | No acetileno, bajo H₂ |

## Mantenimiento preventivo

- **Análisis de aceite** anual: detecta problemas internos por gases disueltos (acetileno=arco, metano=sobrecalentamiento)
- **Termografía infrarroja**: busca puntos calientes en conexiones y radiadores
- **Limpieza de radiadores**: la suciedad reduce la refrigeración
- **Verificar nivel de aceite y nitrógeno** (transformadores sellados)
- **Revisión de bucholz y relés de protección**: cada año`,
      },
    ],
  },

  // ─── MÓDULO: PROYECTOS Y CARRERA PROFESIONAL ───────────────────────────────
  {
    id: 'carrera-profesional',
    title: 'Proyectos, Certificaciones y Carrera',
    description: 'Documentación de proyectos, certificaciones en México y cómo crecer.',
    icon: '🎓',
    tier: 'pro',
    color: '#1B5E20',
    lessons: [
      {
        id: 'documentacion-proyectos',
        title: 'Documentación completa de proyectos eléctricos',
        description: 'Expediente técnico, especificaciones, as-built y entregables.',
        duration: '14 min',
        tier: 'pro',
        icon: '📂',
        tags: ['documentación', 'expediente', 'as-built', 'especificaciones'],
        content: `# Documentación Completa de Proyectos Eléctricos

## El expediente técnico

Un proyecto eléctrico bien documentado es requisito legal y protege al profesionista responsable. Los documentos se clasifican en:

### Etapa de diseño

**1. Memoria de cálculo**
- Listado de cargas y demanda máxima
- Cálculo de conductores (caída de tensión, capacidad de corriente)
- Cálculo de corto circuito y selección de capacidad de ruptura
- Cálculo del sistema de tierras
- Coordinación de protecciones

**2. Planos del proyecto**
- Diagrama unifilar (obligatorio)
- Planos de planta con trayectorias de circuitos
- Plano de tablero (diagrama de panelboard)
- Plano de tierras
- Detalles constructivos

**3. Especificaciones técnicas**
- Normas aplicables (NOM-001-SEDE, versión)
- Materiales especificados por nombre, número de catálogo o estándar
- Procedimientos de instalación y pruebas
- Requisitos de calidad y tolerancias

**4. Catálogo de conceptos (presupuesto)**
- Partidas con unidades, cantidades y precios unitarios
- Total del proyecto

### Etapa de construcción

**5. Bitácora de obra**
- Registro cronológico de avances, cambios y acuerdos
- Firmada por residente y superintendente

**6. Reportes de pruebas**
- Resultados de megger, continuidad, tierra, GFCI
- Firmados por responsable de pruebas

### Etapa de entrega

**7. Planos as-built ("como quedó")**
- Planos actualizados con los cambios realizados durante la obra
- Base para mantenimiento futuro

**8. Manual de operación y mantenimiento**
- Descripción de sistemas instalados
- Procedimientos de operación normal y emergencia
- Plan de mantenimiento preventivo
- Datos de contacto del fabricante de equipos

**9. Garantías y fichas técnicas**
- Garantías de materiales y equipos
- Fichas técnicas de todos los equipos principales

## Software de documentación

- **AutoCAD Electrical**: para planos eléctricos y diagramas unifilares
- **ETAP / SKM PowerTools**: para cálculos de sistemas eléctricos
- **Revit MEP / AutoCAD MEP**: para modelado BIM de instalaciones
- **Microsoft Excel / Python**: para memorias de cálculo`,
      },
      {
        id: 'certificaciones-mexico',
        title: 'Certificaciones y cédula profesional en México',
        description: 'Ingeniero electricista, perito, ANCE y cómo conseguir clientes.',
        duration: '13 min',
        tier: 'pro',
        icon: '📜',
        tags: ['cédula', 'perito', 'ANCE', 'certificación', 'México'],
        content: `# Certificaciones y Cédula Profesional en México

## Cédula Profesional (SEP)

La cédula profesional es el documento que habilita legalmente el ejercicio profesional de la ingeniería eléctrica en México.

### Carreras con cédula para trabajo eléctrico:
- Ingeniería Eléctrica o Electrónica
- Ingeniería Eléctrico-Mecánica
- Ingeniería en Sistemas Eléctricos de Potencia
- Ingeniería Mecatrónica (con algunas limitaciones)

### Trámite de cédula:
1. Título y acta de examen profesional
2. Solicitud al RVOE de la institución
3. Trámite en línea en SEP (cedulaprofesional.sep.gob.mx)
4. Tiempo: 3-6 meses

## Registro de Perito en Instalaciones Eléctricas

Los peritos son profesionistas habilitados para firmar proyectos y dictámenes eléctricos ante autoridades.

**Instituciones que otorgan habilitación de perito**:
- **Colegio de Ingenieros Mecánicos y Electricistas (CIME)**
- **ANCE** (Asociación de Normalización y Certificación)
- Delegaciones de CFE (para peritos en instalaciones de CFE)

**Requisitos generales**:
- Cédula profesional vigente
- Experiencia mínima (3-5 años según institución)
- Examen de conocimientos
- Cursos de actualización periódicos

## ANCE (Asociación de Normalización y Certificación)

ANCE es el organismo de certificación de productos eléctricos más importante en México.

### ¿Qué certifica ANCE?
- Equipos eléctricos (que el producto cumple las NOM)
- Instalaciones eléctricas (que la instalación cumple NOM-001-SEDE)
- Profesionales (perito ANCE)

### Certificado de instalación ANCE
Para instalaciones residenciales y comerciales, se puede obtener el certificado ANCE que avala que la instalación cumple la normativa. Esto tiene valor para seguros y para propietarios de inmuebles.

## Certificaciones internacionales útiles

| Certificación | Organismo | Valor |
|--------------|-----------|-------|
| Journeyman/Master Electrician | IBEW (EE.UU.) | Para trabajo en EE.UU. |
| CompTIA PLC Technician | CompTIA | Automatización |
| Certified Energy Auditor (CEA) | AEE | Auditoría energética |
| LEED AP | USGBC | Edificios sustentables |
| NABCEP (Solar) | NABCEP | Instalaciones solares |

## Cómo conseguir clientes como electricista independiente

1. **Legaliza tu actividad**: RFC, alta en IMSS, facturas electrónicas (CFDI)
2. **Presencia digital**: Google Business Profile con fotos de trabajos
3. **Red de referidos**: arquitectos, constructoras, inmobiliarias
4. **Especialización**: es mejor ser "el experto en cargadores EV" que generalista
5. **Certificaciones visibles**: el sello ANCE en tu presupuesto da confianza`,
      },
      {
        id: 'calculo-presupuesto',
        title: 'Cómo calcular y presentar presupuestos',
        description: 'Estructura de costos, utilidad y presentación profesional de cotizaciones.',
        duration: '12 min',
        tier: 'pro',
        icon: '💰',
        tags: ['presupuesto', 'cotización', 'precios', 'negocio'],
        content: `# Cómo Calcular y Presentar Presupuestos Eléctricos

## Estructura de costos de un proyecto eléctrico

### Costo Directo
Todos los recursos que se utilizan directamente en la obra:

**Materiales**:
- Cables, conduits, cajas, tableros, contactos, interruptores
- Equipo especial (paneles, transformadores, UPS)
- Consumibles (cinta, tornillería, silicón, etc.)

**Mano de obra**:
- Horas-hombre de técnico electricista
- Horas-hombre de oficial (ayudante)
- Salarios + prestaciones + IMSS = costo real (aprox. 1.5× el salario base)

**Herramienta y equipo**:
- Renta o amortización de herramienta especial
- Transporte/gasolina

### Costos Indirectos
- Gastos de oficina (papelería, teléfono, internet)
- Salario de personal administrativo
- Seguros (responsabilidad civil, accidentes)

### Utilidad
- Margen neto deseado sobre el costo total
- En México, margen de 20-40% es típico en instalaciones

### Factor de overhead
Factores de indirectos + utilidad expresados como factor multiplicador:
Si indirectos son 20% y utilidad 25%: Factor ≈ 1.50-1.60 sobre costo directo

## Ejemplo de estructura de presupuesto

| Concepto | Cantidad | Unidad | P.U. | Total |
|---------|---------|--------|------|-------|
| Cable 12 AWG THW | 150 | metros | $15 | $2,250 |
| Conduit PVC 19mm | 30 | tramos | $45 | $1,350 |
| Tablero 12 circuitos | 1 | pza | $1,200 | $1,200 |
| Breaker 20A | 4 | pza | $120 | $480 |
| Mano de obra | 16 | hrs | $250 | $4,000 |
| **Subtotal directo** | | | | **$9,280** |
| Indirectos (15%) | | | | $1,392 |
| Utilidad (25%) | | | | $2,660 |
| **TOTAL SIN IVA** | | | | **$13,332** |
| IVA 16% | | | | $2,133 |
| **TOTAL** | | | | **$15,465** |

## Tips para presentar cotizaciones profesionalmente

1. **Logo y datos fiscales** en el encabezado
2. **Descripción clara** del alcance de trabajo (qué incluye y qué NO incluye)
3. **Validez de la cotización** (30 días recomendado)
4. **Condiciones de pago** (30% anticipo, 40% a mitad, 30% al terminar)
5. **Garantía ofrecida** (1 año en mano de obra, garantía del fabricante en materiales)
6. **Tiempo de ejecución** estimado
7. **Firma y datos del responsable** técnico (con cédula si aplica)

> Un presupuesto profesional genera confianza y justifica precios más altos que la competencia informal.`,
      },
      {
        id: 'mantenimiento-preventivo',
        title: 'Programas de mantenimiento preventivo eléctrico',
        description: 'Planes anuales, termografía, pruebas y gestión de activos eléctricos.',
        duration: '14 min',
        tier: 'pro',
        icon: '🔧',
        tags: ['mantenimiento', 'preventivo', 'termografía', 'predictivo'],
        content: `# Programas de Mantenimiento Preventivo Eléctrico

## Tipos de mantenimiento

| Tipo | Descripción | Cuándo |
|------|-------------|--------|
| Correctivo | Reparar lo que ya falló | Cuando ocurre la falla |
| Preventivo | Tareas programadas antes de que falle | Calendarios fijos |
| Predictivo | Monitoreo continuo para predecir fallas | Análisis de tendencias |
| Proactivo | Eliminar causas raíz de fallas | Mejora continua |

## Filosofía del mantenimiento eléctrico

El mantenimiento preventivo bien aplicado:
- Reduce paros no programados (hasta 75%)
- Extiende la vida de los equipos
- Cumple requisitos de seguros y normas (NOM-029-STPS)
- Reduce el costo total de propiedad (TCO)

## Plan anual de mantenimiento preventivo

### Mensual
- Inspección visual de tableros (temperatura, ruidos, aromas)
- Verificar indicadores y alarmas
- Limpiar filtros de VFD y paneles de control
- Registro de lecturas de medidores

### Trimestral
- Verificar apriete de conexiones en barras del tablero
- Probar interruptores diferenciales (GFCI) con botón de prueba
- Verificar nivel de electrolito en baterías (si son VRLA abiertas)
- Revisar estado de cables en áreas con movimiento o vibración

### Semestral
- Termografía infrarroja de tableros y conexiones (con carga mínima del 40%)
- Pruebas de continuidad de tierra
- Inspección de cables en bandejas y conduits
- Prueba de UPS y baterías bajo carga

### Anual
- Megger en cables de alimentación y motores
- Revisión de relés de protección (ajustes y pruebas de disparo)
- Análisis de aceite en transformadores
- Análisis de calidad de energía (analizador de redes)
- Actualización de planos y documentación

## Termografía infrarroja (IR)

La termografía detecta puntos calientes ANTES de que causen una falla:
- Una conexión floja = mayor resistencia = más calor = arco eventual
- Un breaker con sobrecarga = temperatura elevada antes de disparar

**Criterios de severidad (según NETA y NFPA 70B)**:
| ΔT vs. similar | ΔT vs. ambiente | Acción |
|--------------|----------------|--------|
| 1-10°C | <10°C | Investigar, próxima MP |
| 10-30°C | 10-40°C | Reparar pronto (<1 mes) |
| >30°C | >40°C | Reparar inmediatamente |

## Software de gestión de mantenimiento (CMMS)

Para instalaciones grandes:
- **Maximo (IBM)**: estándar industrial
- **SAP PM**: integrado con ERP SAP
- **eMaint/Fiix**: para medianas empresas
- **Excel avanzado**: para pequeños electricistas independientes

Un buen CMMS genera órdenes de trabajo, historial de intervenciones y reportes de KPIs de mantenimiento (MTBF, MTTR, disponibilidad).`,
      },
    ],
  },
];
