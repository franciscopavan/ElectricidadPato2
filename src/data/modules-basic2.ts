import { Module } from '../types';

export const BASIC2_MODULES: Module[] = [
  // ─── MÓDULO: BAÑO Y COCINA ──────────────────────────────────────────────────
  {
    id: 'bano-cocina',
    title: 'Instalaciones en Baño y Cocina',
    description: 'Zonas húmedas, circuitos dedicados y normativa especial.',
    icon: '🚿',
    tier: 'basic',
    color: '#00BCD4',
    lessons: [
      {
        id: 'electrica-bano',
        title: 'Instalación eléctrica en el baño',
        description: 'Zonas de seguridad, GFCI y normativa para instalaciones en baños.',
        duration: '14 min',
        tier: 'basic',
        icon: '🚿',
        tags: ['baño', 'GFCI', 'zonas', 'húmedo'],
        content: `# Instalación Eléctrica en el Baño

El baño es la zona de mayor riesgo eléctrico del hogar por la combinación de agua y electricidad. La NOM-001-SEDE y el NEC establecen zonas de protección.

## Zonas de seguridad (basado en IEC 60364-7-701)

### Zona 0: Dentro de la tina o regadera
- Prohibido cualquier aparato eléctrico
- Solo permitido: luminarias especiales IP67 para uso subacuático

### Zona 1: Sobre la tina/regadera hasta 2.25m de altura
- Solo permitido equipo de muy baja tensión (MBTS, máximo 12V)
- Luminarias IP44 mínimo
- Calentadores de toallas con protección especial

### Zona 2: 60cm alrededor de la zona 1
- Permitidos: contactos con GFCI, calentadores, secadoras de cabello con protección diferencial
- Luminarias IP44 mínimo
- Todos los contactos DEBEN ser GFCI

### Fuera de las zonas (>60cm de la zona 1)
- Contactos normales pero SIEMPRE con GFCI en baños
- El interruptor de luz puede estar aquí

## Requisitos de instalación según NOM

- **GFCI obligatorio**: Todos los contactos del baño deben tener protección diferencial
- **Sin contactos dentro de las zonas 0 y 1**
- **Igualación de potencial**: Todas las partes metálicas (tuberías, marcos de espejos, toalleros) conectadas a tierra

## Circuitos recomendados para el baño

| Circuito | Carga | Breaker |
|---------|-------|---------|
| Iluminación + extractor | 500W | 15A |
| Contactos GFCI | — | 20A GFCI |
| Calentador eléctrico (si aplica) | 1500-4500W | 20-40A exclusivo |

## Instalación del extractor de baño

- El extractor va en el techo o pared, fuera de las zonas 0 y 1
- Puede estar en el mismo circuito de iluminación
- También puede controlarse con temporizador (apaga 15min después de apagar la luz)
- Los modelos con sensor de humedad se activan automáticamente`,
      },
      {
        id: 'electrica-cocina',
        title: 'Circuitos eléctricos de la cocina',
        description: 'Circuitos dedicados, normativa y distribución en cocinas modernas.',
        duration: '13 min',
        tier: 'basic',
        icon: '🍳',
        tags: ['cocina', 'circuitos dedicados', 'NOM'],
        content: `# Circuitos Eléctricos de la Cocina

La cocina tiene los aparatos de mayor consumo del hogar y requiere múltiples circuitos dedicados.

## Circuitos mínimos según NOM-001-SEDE (Art. 210)

### Circuito de encimera/estufa
- **Mínimo 2 circuitos** de 20A para los contactos de la encimera
- Cable 12 AWG mínimo
- Contactos a máximo 60cm de separación a lo largo de la barra

### Circuito del refrigerador
- Circuito exclusivo de 20A
- El refrigerador no debe compartir circuito con otros aparatos
- El contacto debe estar detrás o junto al refrigerador

### Circuito del lavavajillas
- Circuito exclusivo de 20A
- Algunos modelos requieren 30A
- Verifica en la placa del aparato

### Circuito de la estufa/horno eléctrico
- Circuito exclusivo de 240V (bifásico)
- Breaker doble de 40A o 50A según la estufa
- Cable 8 AWG o 6 AWG

### Circuito del microondas
- Circuito exclusivo de 20A si está empotrado
- En encimera puede compartir, pero se recomienda exclusivo

## Altura y ubicación de contactos

- Encimera: contactos a 45-120cm del piso
- Contactos a máximo 1.2m del fregadero → GFCI obligatorio
- No instalar contactos directamente sobre el fregadero

## Consejos de instalación

- Planea los circuitos antes de instalar los muebles
- Los contactos de la isla de cocina requieren conduit desde el piso o techo
- Instala más contactos de los que crees necesitar — siempre hacen falta
- Considera circuito para campana de extracción si es de alta potencia (>300W)`,
      },
      {
        id: 'calentador-electrico',
        title: 'Calentadores de agua eléctricos',
        description: 'Tipos, selección e instalación de calentadores eléctricos.',
        duration: '12 min',
        tier: 'basic',
        icon: '🌡️',
        tags: ['calentador', 'agua caliente', 'resistencia'],
        content: `# Calentadores de Agua Eléctricos

## Tipos de calentadores eléctricos

### Calentador de depósito (boiler eléctrico)
- Calienta y almacena agua en un tanque (30-80 litros)
- Mantiene el agua caliente continuamente
- Mayor consumo que los instantáneos (mantiene temperatura)
- Instalación más simple

### Calentador instantáneo eléctrico (sin tanque)
- Calienta el agua al momento de usarla
- Sin pérdidas por almacenamiento
- Requiere mayor potencia instantánea (5,500-12,000W)
- Ideal para uno o dos puntos de uso

### Calentador de bomba de calor
- El más eficiente: COP de 2.5-4 (da 2.5-4 kWh de calor por 1 kWh consumido)
- Mayor costo inicial
- Requiere espacio con ventilación

## Dimensionamiento

### Calentador de depósito
- Familia de 2-3 personas: 80 litros
- Familia de 4-5 personas: 120-150 litros
- Tiempo de recuperación: 1-2 horas típicamente

### Calentador instantáneo
Potencia necesaria = Flujo (L/min) × ΔT (°C) × 0.0698 kW

Ejemplo: 6 L/min, agua fría a 18°C, deseada a 45°C (ΔT=27°C):
P = 6 × 27 × 0.0698 = **11.3 kW**

## Instalación eléctrica

| Tipo | Potencia típica | Circuito necesario |
|------|----------------|-------------------|
| Boiler 80L | 1500-2000W | 20A / 127V |
| Instantáneo pequeño | 5500W | 30A / 220V bifásico |
| Instantáneo grande | 8000-12000W | 40-60A / 220V bifásico |

> ⚠️ Los calentadores instantáneos de alta potencia requieren calibres grandes de cable y pueden necesitar actualización del servicio eléctrico de la vivienda.

## Conexión eléctrica
- Circuito exclusivo siempre
- Interruptor de desconexión accesible cerca del calentador
- Tierra física obligatoria
- Para calentadores de 220V: cable y breaker doble`,
      },
      {
        id: 'campana-extraccion',
        title: 'Campanas de extracción e instalaciones de ventilación',
        description: 'Instalación eléctrica de campanas y extractores industriales.',
        duration: '10 min',
        tier: 'basic',
        icon: '💨',
        tags: ['campana', 'extractor', 'ventilación'],
        content: `# Campanas de Extracción e Instalaciones de Ventilación

## Tipos de campanas

### Campana de recirculación
- No necesita ducto al exterior
- Filtra el aire con carbón activo y lo regresa a la cocina
- Solo elimina grasas y partículas, no vapores de gas
- Instalación eléctrica simple: un circuito de 120V/15A es suficiente

### Campana de extracción (ducto al exterior)
- Extrae el aire húmedo y con olores hacia fuera
- Más eficiente higiénicamente
- Requiere ducto de lámina hacia el exterior
- Motor más potente: puede requerir circuito de 20A

## Instalación eléctrica de campana

1. **Circuito dedicado recomendado** (campanas >300W)
2. El contacto o conexión directa debe estar dentro del gabinete de la campana
3. Cable de tierra obligatorio
4. Si la campana tiene iluminación LED, el circuito debe estar en el mismo interruptor o con control independiente

## Extractores industriales y comerciales

Para cocinas comerciales, talleres o áreas de producción con vapores:

- **Extractores centrífugos**: mayor presión estática, para ductos largos
- **Extractores axiales**: mayor caudal, para ductos cortos
- **Potencias**: desde 1/4 HP hasta varios HP

### Cálculo de ventilación
Caudal necesario (m³/h) = Volumen del local × Renovaciones/hora

| Tipo de local | Renovaciones/hora |
|--------------|------------------|
| Cocina doméstica | 10-15 |
| Cocina comercial | 30-60 |
| Taller con soldadura | 20-40 |
| Baño | 6-10 |

### Instalación de extractores industriales
- Motor trifásico para potencias >1HP
- Arrancador directo o estrella-delta según HP
- Protección contra sobretemperatura (termistores en el bobinado)
- Variador de frecuencia para control de caudal variable`,
      },
    ],
  },

  // ─── MÓDULO: CLIMATIZACIÓN ELÉCTRICA ───────────────────────────────────────
  {
    id: 'climatizacion',
    title: 'Climatización y Vehículos Eléctricos',
    description: 'Minisplits, calefacción eléctrica y carga de autos eléctricos.',
    icon: '❄️',
    tier: 'basic',
    color: '#00ACC1',
    lessons: [
      {
        id: 'minisplit-instalacion',
        title: 'Instalación eléctrica de minisplit',
        description: 'Dimensionamiento de circuito y conexión de unidades de A/C.',
        duration: '14 min',
        tier: 'basic',
        icon: '❄️',
        tags: ['minisplit', 'A/C', 'circuito dedicado'],
        content: `# Instalación Eléctrica de Minisplit

## Nomenclatura de capacidad
Los minisplits se especifican en **BTU/hr** o toneladas de refrigeración (TR):
- 1 TR = 12,000 BTU/hr

| Capacidad | Potencia eléctrica aprox. | Corriente a 127V |
|-----------|--------------------------|-----------------|
| 9,000 BTU (3/4 TR) | 700-900W | 6-8A |
| 12,000 BTU (1 TR) | 900-1200W | 8-10A |
| 18,000 BTU (1.5 TR) | 1300-1800W | 11-15A |
| 24,000 BTU (2 TR) | 1800-2400W | 15-20A |
| 36,000 BTU (3 TR) | 2700-3600W | 22-30A |

## Voltaje de operación

- Minisplits pequeños (<18,000 BTU): generalmente **127V monofásico**
- Minisplits medianos-grandes (≥18,000 BTU): pueden ser **220V bifásico**

> ⚠️ Siempre verifica la placa del equipo antes de instalar el circuito. No asumas el voltaje.

## Dimensionamiento del circuito

1. Lee la corriente máxima en la placa del minisplit (MCA o RLA)
2. El breaker debe ser ≥ 125% de la corriente de carga
3. El cable debe soportar la corriente del breaker

**Ejemplo**: Minisplit 1.5TR, corriente máxima 15A:
- Breaker = 15A × 1.25 = 18.75A → **usar 20A**
- Cable = 12 AWG (soporta 20A) ✓

## Instalación paso a paso

1. **Circuito dedicado** desde el tablero hasta la unidad exterior
2. **Interruptor de desconexión** (disconnect switch) junto a la unidad exterior: permite apagar para mantenimiento sin ir al tablero
3. **Cable de comunicación** entre unidad interior y exterior (incluido con el minisplit, no eléctrico)
4. **Conexión en la unidad exterior**: L1, L2 (o L y N), Tierra
5. **Tierra en ambas unidades** (interior y exterior)

## Mantenimiento preventivo eléctrico
- Revisar apriete de conexiones anualmente (vibración afloja tornillos)
- Verificar corriente de trabajo con pinza amperimétrica
- Comparar con la corriente nominal: diferencia >20% indica problema`,
      },
      {
        id: 'calefaccion-electrica',
        title: 'Sistemas de calefacción eléctrica',
        description: 'Resistencias, piso radiante y calefactores de diferentes tipos.',
        duration: '11 min',
        tier: 'basic',
        icon: '🔥',
        tags: ['calefacción', 'piso radiante', 'resistencia'],
        content: `# Sistemas de Calefacción Eléctrica

## Tipos de calefacción eléctrica

### Calefactores portátiles
- Resistencia eléctrica + ventilador o panel radiante
- 750W - 2000W
- Circuito de 15A-20A
- Para uso temporal o áreas pequeñas

### Calefactores de pared empotrados
- Se instalan en la pared como un plafón de iluminación
- Circuito dedicado según potencia
- Control de termostato integrado o externo

### Piso radiante eléctrico
- Cable resistivo o película calefactora bajo el piso
- Muy confortable: calor uniforme desde abajo
- Ideal para baños, cocinas, habitaciones
- **Potencia típica**: 150-200W/m²
- Controlado por termostato con sensor de piso

### Calefacción central eléctrica (furnace eléctrico)
- Gran resistencia con distribución de aire forzado
- 10-20 kW de potencia
- Requiere tablero de alta capacidad
- Menos común en México por costo de operación

## Dimensionamiento de calefacción

**Carga de calefacción aprox. (zonas frías México):**
- Zona cálida: 30-50W/m²
- Zona fría (norte): 60-100W/m²
- Zona muy fría (altiplano): 100-150W/m²

## Instalación de piso radiante eléctrico

1. **Planea la cobertura**: El cable no va bajo muebles fijos
2. **Tiende el cable** en serpentina según espaciado indicado (típico 8-10cm)
3. **Instala el sensor de temperatura** de piso
4. **Mide la resistencia** del cable antes de cubrir (debe coincidir con lo especificado)
5. **Conecta el termostato**: recibe cable del circuito y controla el cable de piso
6. **Cubre con mortero** y espera 28 días antes de encender

> 🦆 El pato tiene el piso calientito porque instaló correctamente su piso radiante.`,
      },
      {
        id: 'cargador-vehiculo-electrico',
        title: 'Cargadores de vehículos eléctricos (EVSE)',
        description: 'Niveles de carga, instalación en hogar y normativa.',
        duration: '15 min',
        tier: 'basic',
        icon: '⚡🚗',
        tags: ['EV', 'vehículo eléctrico', 'cargador', 'EVSE'],
        content: `# Cargadores de Vehículos Eléctricos (EVSE)

**EVSE = Electric Vehicle Supply Equipment**

## Niveles de carga

### Nivel 1 (Carga lenta)
- Voltaje: **127V** (contacto normal de hogar)
- Corriente: 12-16A
- Potencia: 1.4-1.9 kW
- Tiempo de carga (batería 60kWh): **31-43 horas**
- No requiere instalación especial, usa el cable que viene con el auto

### Nivel 2 (Carga normal — el más común en hogar)
- Voltaje: **220V bifásico**
- Corriente: 16-80A
- Potencia: 3.5-19 kW
- Tiempo de carga (batería 60kWh): **3-17 horas** según corriente
- **Requiere instalación específica**

### Nivel 3 / CCS / CHAdeMO (Carga rápida DC)
- Solo en estaciones públicas
- 50-350 kW
- Carga en 20-60 minutos
- No aplica para instalación residencial

## Estándar de conector en México

México adoptó el conector **SAE J1772** (Tipo 1) para Nivel 2, compatible con la mayoría de autos eléctricos y plug-in híbridos vendidos en el país.

## Instalación de cargador Nivel 2 en hogar

### Materiales
- EVSE (cargador) de 7.2 kW (32A) es lo más común para hogar
- Cable 8 AWG (para 40A) o 10 AWG (para 30A)
- Breaker doble de 40A o 50A (breaker = 125% × corriente del EVSE)
- Conduit desde tablero hasta el lugar de instalación
- Caja de pared para el EVSE

### Proceso
1. Verifica que el tablero tenga capacidad disponible (espacio y ampacidad)
2. Instala circuito dedicado 220V desde el tablero
3. Monta el EVSE en pared del garaje (o exterior, IP54)
4. Conecta y prueba

### Consideraciones
- Distancia máxima: el cable del EVSE al auto mide típico 7-8m
- Instala el EVSE a 45-120cm del piso
- Para exterior: EVSE con clasificación NEMA 4 o IP54

## Impacto en la instalación eléctrica
Un cargador de 32A a 220V consume 7 kW durante 6-8 horas, similar a tener encendidos 70 focos incandescentes. Asegúrate de que el servicio de CFE y el tablero principal tienen capacidad suficiente.`,
      },
    ],
  },

  // ─── MÓDULO: TELECOMUNICACIONES ────────────────────────────────────────────
  {
    id: 'telecomunicaciones',
    title: 'Telecomunicaciones y Redes',
    description: 'Cableado estructurado, TV, CCTV e internet en el hogar.',
    icon: '📡',
    tier: 'basic',
    color: '#607D8B',
    lessons: [
      {
        id: 'cableado-estructurado',
        title: 'Cableado estructurado (Cat5e/Cat6/Cat6A)',
        description: 'Instalación de redes de datos en hogares y oficinas.',
        duration: '14 min',
        tier: 'basic',
        icon: '🌐',
        tags: ['red', 'ethernet', 'Cat6', 'datos'],
        content: `# Cableado Estructurado para Redes de Datos

## Categorías de cable de red

| Categoría | Velocidad máx. | Frecuencia | Distancia max. |
|-----------|---------------|------------|----------------|
| Cat5e | 1 Gbps | 100 MHz | 100m |
| Cat6 | 10 Gbps | 250 MHz | 55m (10G) / 100m (1G) |
| Cat6A | 10 Gbps | 500 MHz | 100m |
| Cat8 | 40 Gbps | 2000 MHz | 30m |

**Para instalaciones nuevas**: usa **Cat6A** — es solo un poco más caro pero a prueba de futuro.

## Componentes de una instalación

- **Cable UTP/STP**: el cable en sí (U = no apantallado, S = apantallado)
- **Jack RJ45**: conector hembra que va en la pared
- **Patch panel**: tablero de conexiones en el rack/armario de red
- **Switch**: distribuye la red a los equipos
- **Router/modem**: conexión a internet

## Proceso de instalación

### 1. Planea la ubicación de los puntos de red
- Mínimo 1 punto por recámara
- 2-3 puntos en sala/comedor
- 1 punto por zona de trabajo
- Considera dónde irá el rack de red (armario de comunicaciones)

### 2. Tiende el cable
- Va en conduit separado del cableado eléctrico (mínimo 5cm de separación en paralelo)
- No doblar con radio menor a 4× el diámetro del cable
- No usar grapas que aplanen el cable
- Deja 30cm extra en cada extremo

### 3. Terminación en jack RJ45
El cable tiene 4 pares de colores. Usa el estándar **T568B**:
- Pin 1: Blanco/Naranja
- Pin 2: Naranja
- Pin 3: Blanco/Verde
- Pin 4: Azul
- Pin 5: Blanco/Azul
- Pin 6: Verde
- Pin 7: Blanco/Café
- Pin 8: Café

### 4. Certificación
Usa un certificador de cables (o probador básico) para verificar la continuidad y la secuencia correcta de pines.`,
      },
      {
        id: 'television-coaxial',
        title: 'TV, antenas y cableado coaxial',
        description: 'Cable coaxial RG6, distribución de señal de TV.',
        duration: '10 min',
        tier: 'basic',
        icon: '📺',
        tags: ['TV', 'antena', 'coaxial', 'señal'],
        content: `# TV, Antenas y Cableado Coaxial

## Tipos de cable coaxial

| Cable | Impedancia | Uso |
|-------|-----------|-----|
| RG59 | 75 Ω | TV antigua, CCTV (cortas distancias) |
| RG6 | 75 Ω | **TV actual**, satélite, cable, internet coaxial |
| RG11 | 75 Ω | Largas distancias (>50m), cable troncal |

**Usa siempre RG6 en instalaciones nuevas.**

## Conectores coaxiales
- **F**: El más común para TV/satélite (rosca metálica)
- **BNC**: Para CCTV y equipos de video profesional
- **RCA**: Equipos de audio/video doméstico

## Instalación de punto de TV

1. Tiende cable RG6 desde el punto de distribución hasta cada habitación
2. Mínimo 30cm extra en cada extremo
3. No doblar con radio menor a 10× el diámetro del cable
4. Instala conector F tipo compresión (mejor que los de crimpado) en cada extremo
5. Conecta a placa de pared con salida F

## Distribución de señal (antena o cable)

Para distribuir la señal a múltiples televisores:
- **Splitter pasivo**: divide la señal, pierde potencia (cada división -3.5 dB)
- **Amplificador de distribución**: amplifica y distribuye sin pérdida

Si tienes más de 3 televisores, usa amplificador de distribución.

## Distancias y pérdidas del RG6

- RG6 pierde aprox. 10 dB por 30m a 800 MHz
- Cada conector F pierde ~0.5 dB
- Con señal débil: usa preamplificador en la antena

## Antena digital TDT (TV abierta)
México usa el estándar **ATSC** (norteamericano) para televisión digital terrestre. Las antenas para UHF (470-700 MHz) capturan los canales digitales. No se requiere pago mensual.`,
      },
      {
        id: 'cctv-instalacion',
        title: 'Instalación de sistemas CCTV',
        description: 'Cámaras de seguridad analógicas e IP: cableado e instalación.',
        duration: '13 min',
        tier: 'basic',
        icon: '📷',
        tags: ['CCTV', 'cámaras', 'seguridad', 'videovigilancia'],
        content: `# Instalación de Sistemas CCTV

## Tecnologías de CCTV

### Sistemas analógicos (AHD/HDCVI/HDTVI)
- Cable coaxial RG59 o RG6 desde cámara hasta DVR
- Resoluciones: 1080p, 4MP, 8MP (4K)
- Distancias: hasta 500m con RG59
- DVR = grabador de video digital

### Sistemas IP (PoE)
- Cable Cat6 desde cámara hasta switch PoE (o NVR con puertos PoE)
- Resoluciones: 2MP hasta 4K y más
- PoE = Power over Ethernet (la cámara recibe energía por el mismo cable de red)
- Máximo 100m por segmento (puedes extender con switches PoE intermedios)
- NVR = grabador de video en red

**Para instalaciones nuevas**: sistemas IP son más flexibles y de mejor calidad.

## Planificación de la instalación

### Ubicación de cámaras
- Entradas principales (puertas, garage)
- Perímetro exterior
- Áreas internas críticas (caja, almacén)
- Altura recomendada: 2.5-3.5m del piso
- Evitar apuntar directo al sol o fuentes de luz brillante

### Cálculo de almacenamiento
**GB/día = Cámaras × Bitrate (Mbps) × 86,400s / 8 / 1024**

Ejemplo: 4 cámaras, 4 Mbps por cámara:
GB/día = 4 × 4 × 86,400 / 8 / 1024 = **168 GB/día**
Para 30 días: 5TB de disco

## Instalación eléctrica de cámaras

### Cámaras analógicas
- Cable coaxial RG59: señal de video
- Cable de alimentación: 12V DC o 24V AC
- Muchos instaladores usan cable siamés (coaxial + par eléctrico juntos)

### Cámaras IP con PoE
- **Solo cable Cat6** — lleva datos y alimentación
- El switch PoE debe tener suficiente presupuesto de potencia (watts totales)
- Potencia típica: 7-15W por cámara PoE; PTZ: hasta 30W

### Protección contra rayos
- Instalar arrester de voltaje entre cada cámara exterior y el grabador
- Conectar el chasis del grabador a tierra física`,
      },
      {
        id: 'sistemas-alarma',
        title: 'Sistemas de alarma e intrusión',
        description: 'Sensores, paneles de alarma y conexión eléctrica.',
        duration: '12 min',
        tier: 'basic',
        icon: '🚨',
        tags: ['alarma', 'seguridad', 'sensores', 'intrusión'],
        content: `# Sistemas de Alarma e Intrusión

## Componentes de un sistema de alarma

### Panel de control
- El "cerebro" del sistema
- Recibe señales de sensores y activa alarmas
- Se conecta a línea telefónica/celular/ethernet para central de monitoreo
- Requiere batería de respaldo (mínimo 4 horas)

### Sensores
- **Magnético de puerta/ventana**: Detecta apertura
- **PIR (infrarrojo pasivo)**: Detecta movimiento por calor corporal
- **Vibración/rotura de vidrio**: Detecta impactos
- **Humo y CO**: Detectan incendio y monóxido de carbono
- **Agua**: Detectan inundaciones

### Dispositivos de aviso
- **Sirena exterior**: 110 dB mínimo, con batería propia
- **Estrobo**: Flash visible para alertar a vecinos/policía
- **Sirena interior**: Para alertar a ocupantes

## Cableado del sistema

### Cableado convencional (por zonas)
- Cable de 4 conductores de 22 AWG (2 para sensor, 2 para tamper/manipulación)
- El panel detecta apertura o cortocircuito en cada zona
- Máximo resistencia del bucle: varía por panel (typical: 100Ω)

### Sistemas inalámbricos
- Sensores con batería (CR123, AA, etc.)
- Comunicación por radiofrecuencia 433MHz, 868MHz o Z-Wave
- Sin cableado, pero requiere cambio periódico de pilas

### Alimentación del panel
- Transformador de 127V a 12-18V DC
- Circuito dedicado de 15A para el panel y sus accesorios
- Batería sellada de plomo-ácido de respaldo (12V 7Ah típico)

## Normativa y consideraciones
- Los sistemas de alarma monitoreados deben registrarse en la SSC municipal
- Falsa alarma excesivas pueden resultar en multas
- Verifica que la central de monitoreo responde en menos de 30 segundos`,
      },
    ],
  },

  // ─── MÓDULO: GENERADORES Y RESPALDO ────────────────────────────────────────
  {
    id: 'respaldo-energia',
    title: 'Generadores y Respaldo de Energía',
    description: 'Generadores, UPS y transferencia automática para el hogar.',
    icon: '🔋',
    tier: 'basic',
    color: '#8BC34A',
    lessons: [
      {
        id: 'generadores-hogar',
        title: 'Generadores eléctricos para el hogar',
        description: 'Tipos de generadores, selección e instalación segura.',
        duration: '13 min',
        tier: 'basic',
        icon: '⚡',
        tags: ['generador', 'respaldo', 'emergencia'],
        content: `# Generadores Eléctricos para el Hogar

## Tipos de generadores

### Generador portátil a gasolina
- Potencia: 1,000-12,000W
- Para emergencias y uso temporal
- **NO usar en interiores** (monóxido de carbono)
- Conectar las cargas directamente al generador (NO al tablero sin interruptor de transferencia)

### Generador inverter (gasolina o gas)
- Produce energía limpia (baja THD <3%)
- Más silencioso y eficiente
- Ideal para equipos electrónicos sensibles
- Precio más alto pero mejor calidad de energía

### Generador estacionario (gas natural o propano)
- Instalación permanente con arranque automático
- Se activa en segundos tras un corte
- Vida útil: 20-30 años con mantenimiento
- Requiere instalación por técnico certificado

### Criterios de selección
- Suma las cargas que quieres alimentar + 25% de margen
- Para sistemas electrónicos: usa generador inverter
- Para zona con cortes frecuentes: considera estacionario con arranque automático

## Seguridad crítica con generadores

> ⚠️ NUNCA conectes un generador directamente al tablero sin interruptor de transferencia. Puede enviar voltaje a la red pública y matar a trabajadores de CFE.

### Modos seguros de conexión
1. **Cargas directas**: enchufa los aparatos directamente al generador con extensiones
2. **Interruptor de transferencia manual**: desconecta CFE y conecta el generador al tablero
3. **ATS (Automatic Transfer Switch)**: cambia automáticamente entre CFE y generador

## Dimensionamiento rápido

| Carga | Potencia aprox. |
|-------|----------------|
| Refrigerador | 200W (pico arranque: 800W) |
| Luces (10 LED) | 100W |
| TV + decodificador | 150W |
| Computadora | 200W |
| Bomba de agua | 500W (pico: 1500W) |
| A/C 1 TR | 1000W (pico: 2000W) |`,
      },
      {
        id: 'ups-sistemas',
        title: 'UPS para hogar y oficina',
        description: 'Selección e instalación de sistemas de alimentación ininterrumpida.',
        duration: '10 min',
        tier: 'basic',
        icon: '🔋',
        tags: ['UPS', 'no-break', 'respaldo', 'batería'],
        content: `# UPS para Hogar y Oficina

## ¿Qué es un UPS?
**UPS = Uninterruptible Power Supply** (No-Break en México)

Proporciona energía inmediata desde batería cuando falla CFE, sin interrupción. También filtra variaciones de voltaje.

## Tipos de UPS

### Offline (Standby)
- En operación normal: la carga recibe energía directamente de CFE
- Cuando falla: cambia a batería en 4-20ms
- Más económico
- Protección básica

### Line-Interactive
- Regula el voltaje continuamente sin usar batería
- Cuando falla CFE: cambia a batería en 2-4ms
- Buen equilibrio precio/protección
- Recomendado para computadoras y NVR

### Online doble conversión
- La carga SIEMPRE opera desde batería (que CFE mantiene cargada)
- Cambio a batería: 0ms (sin interrupción)
- Protección total contra variaciones de voltaje
- Más caro, más caliente, menor eficiencia
- Para servidores, equipos médicos, telecomunicaciones

## Selección del UPS

### Potencia necesaria
Suma la potencia de los equipos que protegerás y multiplica × 1.25

**Nota**: Los UPS se especifican en VA (voltio-amperes). Para convertir:
- Watts ≈ VA × factor de potencia (típico 0.6 para UPS offline, 0.9 para online)
- Computadora 200W → necesitas UPS ≥ 200W/0.6 = 333 VA → elige **500 VA**

### Tiempo de respaldo
El tiempo de respaldo depende de la batería y la carga:
- A plena carga: 5-15 minutos (para cerrar correctamente los equipos)
- Para mayor respaldo: UPS con banco externo de baterías

## Instalación
- Coloca el UPS en lugar ventilado (genera calor)
- No sobre alfombras (dificulta ventilación)
- Conecta primero el UPS a la red, luego los equipos al UPS
- Calibra o prueba la batería mensualmente (botón TEST)
- Reemplaza la batería cada 3-5 años`,
      },
      {
        id: 'transferencia-automatica',
        title: 'Transferencia automática (ATS)',
        description: 'Cómo funciona e instalar un interruptor de transferencia automática.',
        duration: '12 min',
        tier: 'basic',
        icon: '🔄',
        tags: ['ATS', 'transferencia', 'generador', 'respaldo'],
        content: `# Interruptor de Transferencia Automática (ATS)

## ¿Qué es un ATS?
**ATS = Automatic Transfer Switch**

Es un dispositivo que detecta la falla del suministro principal (CFE) y transfiere la carga a una fuente alternativa (generador, paneles solares con baterías) de forma automática, sin intervención humana.

## Tipos de ATS

### ATS residencial
- Capacidades: 16A a 100A
- Para generadores portátiles estacionarios
- Puede incluir solo algunos circuitos críticos
- Tiempo de transferencia: 10-30 segundos (tiempo de arranque del generador)

### ATS industrial
- Capacidades: 100A a miles de amperes
- Para subestaciones y edificios completos
- Monitoreo continuo de voltaje y frecuencia en ambas fuentes

### Módulo STS (Static Transfer Switch)
- Transferencia instantánea (electrónica, sin partes móviles)
- Para aplicaciones críticas con 0ms de interrupción
- Complementa sistemas UPS

## Funcionamiento del ATS

1. Monitorea continuamente el voltaje de CFE
2. Si detecta falla (voltaje fuera de rango por >5 segundos):
   - Envía señal de arranque al generador
   - Espera a que el generador alcance voltaje y frecuencia estables
   - Transfiere la carga del circuito de CFE al generador
3. Cuando CFE regresa estable:
   - Espera 30-120 segundos para confirmar estabilidad
   - Regresa la carga a CFE
   - Señal de parada al generador (enfriamiento de 2-3 minutos)

## Instalación básica (ATS residencial)

> ⚠️ Este trabajo debe realizarlo un electricista. Implica trabajo en el tablero principal.

1. El ATS se instala entre el medidor y el tablero principal
2. Se conectan: Entrada CFE, Entrada Generador, Salida al tablero
3. Cable de control al generador (señal de arranque/parada)
4. El ATS debe estar claramente etiquetado

## Circuitos críticos vs no críticos
Para instalaciones más económicas, solo transfiere los circuitos esenciales:
- Iluminación de emergencia
- Refrigerador
- Bombas de agua
- Equipo médico si aplica`,
      },
    ],
  },
];
