import { Module } from '../types';

export const PRO_MODULES: Module[] = [
  // ─── MÓDULO: NOM-001-SEDE ────────────────────────────────────────────────────
  {
    id: 'normas-nom',
    title: 'NOM-001-SEDE: Reglamento Oficial',
    description: 'El reglamento oficial de instalaciones eléctricas en México.',
    icon: '📋',
    tier: 'pro',
    color: '#FF6B00',
    lessons: [
      {
        id: 'introduccion-nom',
        title: 'Introducción a la NOM-001-SEDE',
        description: 'Qué es, para qué sirve y cómo aplicar la norma oficial mexicana.',
        duration: '20 min',
        tier: 'pro',
        icon: '📋',
        tags: ['NOM', 'normas', 'regulación'],
        content: `# NOM-001-SEDE: La Norma Oficial Mexicana

## ¿Qué es?
La **Norma Oficial Mexicana NOM-001-SEDE** establece los requisitos mínimos de seguridad que deben cumplir TODAS las instalaciones eléctricas en México. Es el equivalente al NEC (National Electrical Code) de EE.UU.

## ¿Quién la exige?
- **CFE**: Para dar servicio a un inmueble
- **STPS**: Para instalaciones industriales (junto con NOM-029)
- **Municipios**: Para permisos de construcción
- **Aseguradoras**: Para validar instalaciones

## Estructura de la norma

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

## Circuitos mínimos para vivienda (Art. 210)
- 1 circuito de iluminación por cada 33m²
- 1 circuito de contactos por cada 33m²
- Circuito exclusivo para cocina
- Circuito exclusivo para lavadora
- Circuito exclusivo para A/C (si existe)
- Circuito exclusivo para cada carga mayor a 1500W

## Métodos de cableado permitidos (Art. 300)
- Tubería conduit metálica (IMC, EMT, RMC)
- Tubería conduit PVC
- Canaletas metálicas o plásticas
- Cable armado (MC)
- Cable en bandeja portacable

**NO se permite**: Cable directo en la pared sin protección de conduit.`,
      },
      {
        id: 'diagramas-electricos',
        title: 'Diagramas eléctricos profesionales',
        description: 'Aprende a leer e interpretar planos eléctricos.',
        duration: '25 min',
        tier: 'pro',
        icon: '📐',
        tags: ['diagramas', 'planos', 'professional'],
        content: `# Diagramas Eléctricos Profesionales

## Tipos de diagramas

### 1. Diagrama Unifilar
Representa el sistema completo con una sola línea para todos los conductores. Es el más usado en proyectos de ingeniería.

### 2. Diagrama Esquemático (Multifilar)
Muestra cada conductor individualmente. Usado para entender el funcionamiento detallado.

### 3. Diagrama de Planta (Arquitectónico)
El plano de la construcción con la ubicación física de cada elemento eléctrico.

### 4. Diagrama de Control
Para circuitos de mando: arrancadores, PLC, automatización.

## Simbología NOM/IEC

| Símbolo | Elemento |
|---------|---------|
| ◯ con cruz | Luminaria general |
| ◯ con flecha | Luminaria de emergencia |
| ⊡ | Contacto sencillo |
| ⊡T | Contacto con tierra |
| / | Apagador sencillo |
| /3 | Apagador 3 vías |
| [ITM] | Interruptor termomagnético |
| [GFCI] | Interruptor diferencial |
| △ | Tablero / Centro de carga |
| ⊕ | Caja de conexiones |
| M | Motor |
| T | Transformador |

## Cómo leer un diagrama unifilar

1. Identifica la acometida (entrada de CFE)
2. Localiza el medidor y el interruptor general
3. Sigue los alimentadores hasta el tablero
4. Identifica cada circuito derivado con su:
   - Capacidad del breaker (15A, 20A, etc.)
   - Calibre del cable (14 AWG, 12 AWG, etc.)
   - Tipo de circuito (monofásico, bifásico, trifásico)
5. Verifica que los calibres corresponden a las protecciones

## Cálculo de carga (Art. 220 NOM)

1. Área en m² × 33 VA/m² = carga de iluminación
2. + 1,500 VA por cada circuito de cocina
3. + cargas de aparatos específicos (A/C, secadora, etc.)
4. Aplicar factores de demanda del Art. 220
5. Resultado = capacidad mínima del tablero en VA`,
      },
      {
        id: 'acometidas-medidores',
        title: 'Acometidas y medidores',
        description: 'Conexión desde CFE hasta el tablero principal.',
        duration: '18 min',
        tier: 'pro',
        icon: '🏭',
        tags: ['acometida', 'CFE', 'medidor', 'NOM-230'],
        content: `# Acometidas y Medidores

## ¿Qué es la acometida?
Es el conjunto de conductores y accesorios que conectan la red de distribución de CFE con la instalación del cliente. Está regulada por el **Artículo 230 de la NOM-001-SEDE**.

## Tipos de acometida

### Acometida aérea
Los conductores van desde el poste hasta la fachada del edificio.
- Mínimo 3m de altura sobre zonas peatonales
- Mínimo 5.5m sobre zonas vehiculares
- Los conductores son de la CFE hasta el punto de entrega

### Acometida subterránea
Los conductores van enterrados bajo tierra.
- Mayor inversión inicial
- Más segura y estética
- Obligatoria en algunas zonas urbanas

## Componentes de la acometida

### 1. Muerto o cabezal de entrada
Tubo curvo en la fachada por donde entran los conductores. Protege contra la lluvia.

### 2. Conductores de acometida
- Calibre mínimo según la carga del inmueble
- Deben soportar 125% de la carga calculada

### 3. Medidor (watthorímetro)
Lo instala y es propiedad de CFE. Mide el consumo en kWh.

### 4. Interruptor General de Acometida
Antes del tablero principal. Permite cortar toda la energía del inmueble.

## Protección de la acometida

Según el Art. 230 NOM-001:
- Máximo 6 ITM como protección de acometida
- El interruptor general debe estar accesible
- Deben estar protegidos contra daño físico

## Trámite ante CFE

Para obtener o modificar un servicio:
1. Solicitud en oficina CFE o en línea
2. Estudio de carga y presupuesto de CFE
3. Pago de derechos de conexión
4. Instalación por parte de CFE
5. Inspección y conexión`,
      },
      {
        id: 'puesta-a-tierra',
        title: 'Sistemas de puesta a tierra (Art. 250)',
        description: 'Diseño, instalación y verificación de sistemas de tierra física.',
        duration: '22 min',
        tier: 'pro',
        icon: '🌍',
        tags: ['tierra', 'seguridad', 'NOM-250'],
        content: `# Sistemas de Puesta a Tierra (Art. 250 NOM)

## Tipos de electrodos de tierra

### Varilla coperweld
- Acero recubierto de cobre, mínimo 2.4m de largo
- Diámetro mínimo 15.9mm (5/8")
- Se clava verticalmente junto a la cimentación

### Placa de cobre
- Mínimo 0.186m² de superficie
- Enterrada a mínimo 1.5m de profundidad

### Electrodo de varilla múltiple
- Cuando una sola varilla no alcanza 25Ω
- Mínimo 1.8m entre varillas

### Malla de tierra
- Para instalaciones industriales críticas
- Conductores interconectados formando una cuadrícula enterrada

## Resistencia de tierra requerida

| Tipo de instalación | Resistencia máxima |
|--------------------|-------------------|
| Residencial | 25 Ω |
| Comercial | 10 Ω |
| Industrial general | 5 Ω |
| Cómputo / telecomunicaciones | 1 Ω |
| Hospitales / áreas críticas | 0.5 Ω |

## Cómo medir la resistencia de tierra (Método 3 picos)

1. Electrodo a medir (P) en el centro
2. Electrodo auxiliar de corriente (C) a 10m
3. Electrodo de voltaje (V) a 6.1m del principal
4. Telurómetro inyecta corriente y mide voltaje
5. R = V/I (el equipo lo calcula automáticamente)

## Calibre del conductor de tierra (Art. 250.66)

| Calibre fase | Conductor tierra mínimo |
|-------------|------------------------|
| Hasta 4 AWG | 8 AWG |
| 3-1 AWG | 6 AWG |
| 1/0-2/0 AWG | 4 AWG |
| 3/0-4/0 AWG | 2 AWG |

## Requisito NOM: Igualación de potencial
En baños, cocinas y áreas húmedas, todas las partes metálicas (tuberías, marcos, aparatos) deben conectarse a tierra para que estén al mismo potencial. Esto previene diferencias de voltaje peligrosas.`,
      },
      {
        id: 'seleccion-conductores',
        title: 'Selección de conductores y protecciones',
        description: 'Cómo elegir el cable y breaker correctos según la NOM.',
        duration: '20 min',
        tier: 'pro',
        icon: '📏',
        tags: ['conductores', 'protecciones', 'dimensionamiento', 'NOM'],
        content: `# Selección de Conductores y Protecciones

## Principio fundamental
El calibre del conductor determina la corriente máxima. El breaker protege al conductor, no a la carga. Si el breaker es mayor que la capacidad del cable, el cable puede quemarse antes de que el breaker se dispare.

## Capacidad de conducción (ampacidad) según NOM

| Calibre | Tipo THW (60°C) | Tipo THHW (75°C) | Tipo XHHW (90°C) |
|---------|----------------|-----------------|-----------------|
| 14 AWG | 15A | 20A | 25A |
| 12 AWG | 20A | 25A | 30A |
| 10 AWG | 30A | 35A | 40A |
| 8 AWG | 40A | 50A | 55A |
| 6 AWG | 55A | 65A | 75A |
| 4 AWG | 70A | 85A | 95A |
| 2 AWG | 95A | 115A | 130A |
| 1/0 AWG | 125A | 150A | 170A |

## Factores de corrección

### Por temperatura ambiente
- A 30°C: factor 1.0 (valor de tabla)
- A 40°C: factor 0.88
- A 50°C: factor 0.75

### Por número de conductores en conduit
- 3 conductores: factor 1.0
- 4-6 conductores: factor 0.80
- 7-9 conductores: factor 0.70
- 10-20 conductores: factor 0.50

## Reglas de selección del breaker

1. El breaker NO debe superar la ampacidad del conductor
2. Para cargas continuas (>3 horas): el breaker debe ser ≥ 125% de la carga
3. Para motores: el breaker puede ser hasta 250% de la corriente nominal del motor
4. Mínimo para circuitos de iluminación: 15A con cable 14 AWG
5. Mínimo para circuitos de contactos: 20A con cable 12 AWG

## Ejemplo de cálculo completo

Circuito para minisplit de 1.5 ton (1800W):
1. Corriente: I = 1800W / 127V = 14.2A
2. Corriente de diseño (125%): 14.2 × 1.25 = 17.7A
3. Breaker: 20A (siguiente estándar)
4. Cable mínimo: 12 AWG (20A a 75°C) ✓`,
      },
    ],
  },

  // ─── MÓDULO: CÁLCULO Y DISEÑO ──────────────────────────────────────────────
  {
    id: 'calculo-diseno',
    title: 'Cálculo y Diseño de Instalaciones',
    description: 'Diseña instalaciones eléctricas completas desde cero.',
    icon: '📐',
    tier: 'pro',
    color: '#E91E63',
    lessons: [
      {
        id: 'memoria-calculo',
        title: 'Memoria de cálculo eléctrica',
        description: 'Aprende a elaborar la memoria de cálculo según la NOM.',
        duration: '25 min',
        tier: 'pro',
        icon: '📝',
        tags: ['memoria', 'cálculo', 'diseño', 'NOM'],
        content: `# Memoria de Cálculo Eléctrica

La memoria de cálculo es el documento técnico que justifica el dimensionamiento de toda la instalación eléctrica. Es requisito para trámites de permiso y conexión con CFE.

## Contenido mínimo de una memoria de cálculo

1. Datos generales del proyecto
2. Descripción de la instalación
3. Cálculo de cargas por circuito y total
4. Selección de conductores
5. Selección de protecciones
6. Cálculo del alimentador principal
7. Cálculo de la puesta a tierra
8. Caídas de tensión

## 1. Cálculo de cargas (Art. 220 NOM)

### Cargas de iluminación
- Área total × 33 VA/m² = carga de iluminación base

### Cargas de contactos
- Circuitos de contactos generales: 1,500 VA por circuito

### Cargas especiales (valor real)
- A/C, calentador, secadora, etc.: valor de placa × 1.25

### Factor de demanda (vivienda)
| Carga total | Factor de demanda |
|-------------|------------------|
| Primeros 3,000 VA | 100% |
| Resto | 35% |

## 2. Cálculo de caída de tensión

La NOM permite máximo **3% de caída de tensión** en circuitos derivados y **5% total** (acometida + alimentador + derivado).

**Fórmula para circuitos monofásicos:**
ΔV = 2 × L × I × R_cable

Donde:
- L = longitud del cable en metros
- I = corriente en Amperes
- R = resistencia del cable en Ω/m (ver tablas)

**Para 14 AWG cobre**: R = 0.00827 Ω/m
**Para 12 AWG cobre**: R = 0.00521 Ω/m

**Ejemplo:**
Circuito de 15A, cable 12 AWG, longitud 20m:
ΔV = 2 × 20 × 15 × 0.00521 = **3.13V** (2.5% de 127V) ✓

## 3. Diseño del tablero

Determina la capacidad del interruptor general:
- Suma todas las cargas con factores de demanda
- Divide entre 127V (monofásico) o 220V (bifásico)
- Multiplica por 1.25 (margen de seguridad)
- Selecciona el interruptor estándar inmediato superior`,
      },
      {
        id: 'planos-electricos',
        title: 'Elaboración de planos eléctricos',
        description: 'Cómo dibujar planos eléctricos con simbología NOM.',
        duration: '22 min',
        tier: 'pro',
        icon: '🗺️',
        tags: ['planos', 'dibujo', 'simbología', 'CAD'],
        content: `# Elaboración de Planos Eléctricos

## Tipos de planos en un proyecto

### 1. Plano arquitectónico de referencia
Base sobre la que se trazan los elementos eléctricos.

### 2. Plano de iluminación
- Ubicación de todas las luminarias
- Circuitos de iluminación con su número
- Ubicación de apagadores y su conexión a las luminarias

### 3. Plano de contactos
- Ubicación de todos los contactos
- Circuitos de contactos
- Indicación de contactos especiales (GFCI, alta tensión)

### 4. Plano del tablero (unifilar)
- Interruptor general
- Cada circuito con su breaker y calibre de cable
- Cargas totales

### 5. Plano de tierra física
- Ubicación del electrodo de tierra
- Recorrido del conductor de tierra principal

## Convenciones de dibujo

### Líneas de circuito
- Línea continua: cable visible o en canal
- Línea discontinua: cable oculto (dentro de muro o losa)
- Número sobre la línea: número de circuito

### Numeración de circuitos
- C-1, C-2, etc. para circuitos de iluminación
- F-1, F-2, etc. para circuitos de fuerza (contactos)
- A-1 para alimentadores

## Software de dibujo

### Para profesionales
- **AutoCAD** con biblioteca de simbología eléctrica
- **AutoCAD Electrical**: especializado para instalaciones
- **ETAP**: para cálculos y diagramas unifilares

### Opciones gratuitas
- **LibreCAD**: AutoCAD open source básico
- **DraftSight**: versión gratuita para 2D
- **QCAD**: bueno para planos básicos
- **Caneco** (versión demo): específico para instalaciones eléctricas

## Lista de materiales (Bill of Materials)
Un buen plano siempre incluye:
- Tabla de circuitos con descripción, carga y protección
- Lista de materiales con cantidades
- Notas generales y especificaciones`,
      },
      {
        id: 'caida-tension',
        title: 'Cálculo de caída de tensión',
        description: 'Evita pérdidas de voltaje que dañan equipos y desperdician energía.',
        duration: '18 min',
        tier: 'pro',
        icon: '📉',
        tags: ['caída de tensión', 'cálculo', 'NOM'],
        content: `# Cálculo de Caída de Tensión

## ¿Qué es la caída de tensión?
Es la reducción de voltaje que ocurre a lo largo de un conductor por su resistencia. A mayor longitud y corriente, mayor caída de tensión.

## Límites según NOM-001-SEDE
- **Circuitos derivados**: máximo 3% de caída (3.81V en sistema 127V)
- **Alimentadores**: máximo 2%
- **Total (acometida + alimentador + derivado)**: máximo 5%

## Fórmulas de cálculo

### Sistema monofásico (127V)
**ΔV = 2 × L × I × r**

### Sistema bifásico (220V, 2 hilos)
**ΔV = 2 × L × I × r**

### Sistema trifásico
**ΔV = √3 × L × I × r**

Donde:
- ΔV = Caída de tensión (Volts)
- L = Longitud del circuito en metros (solo ida)
- I = Corriente en Amperes
- r = Resistencia del conductor en Ω/m

## Resistencia de conductores de cobre a 75°C

| Calibre | Resistencia (Ω/m) |
|---------|------------------|
| 14 AWG | 0.00827 |
| 12 AWG | 0.00521 |
| 10 AWG | 0.00328 |
| 8 AWG  | 0.00206 |
| 6 AWG  | 0.00130 |
| 4 AWG  | 0.000815 |
| 2 AWG  | 0.000513 |
| 1/0 AWG | 0.000323 |

## Ejemplo práctico

**Problema**: Circuito de iluminación de oficina, 12A, longitud 40m, cable 12 AWG. ¿Es aceptable?

**Solución**:
ΔV = 2 × 40m × 12A × 0.00521 Ω/m = **5.0V**
% ΔV = 5.0V / 127V × 100 = **3.94%** — ❌ Supera el 3% permitido

**Corrección**: Usar cable 10 AWG:
ΔV = 2 × 40 × 12 × 0.00328 = **3.15V** = 2.48% ✓`,
      },
      {
        id: 'coordinacion-protecciones',
        title: 'Coordinación de protecciones',
        description: 'Asegura que la protección correcta actúe ante cada falla.',
        duration: '20 min',
        tier: 'pro',
        icon: '🛡️',
        tags: ['coordinación', 'protecciones', 'selectividad'],
        content: `# Coordinación de Protecciones

## ¿Qué es la coordinación?
Es el proceso de seleccionar las protecciones (breakers, fusibles) para que ante una falla, actúe **solo la protección más cercana** a la falla, sin afectar el resto del sistema.

## Conceptos clave

### Selectividad
La protección aguas arriba (tablero principal) no debe dispararse si la falla está en un circuito derivado que tiene su propia protección.

### Tiempo de operación
- Breaker derivado: disparo instantáneo
- Breaker principal: disparo temporizado (o mayor capacidad)

## Principios de coordinación

### 1. Regla de la relación de corrientes
Para garantizar selectividad, la corriente de disparo del breaker superior debe ser al menos **1.6 veces** la corriente del inferior.

### 2. Jerarquía de protecciones
Derivado → Alimentador → Principal → Acometida
Cada nivel debe tener mayor capacidad que el anterior.

### 3. Coordinación tiempo-corriente
Se grafican las curvas de disparo de cada protección en una gráfica logarítmica. No deben cruzarse en la zona de operación normal.

## Ejemplo de coordinación residencial

- Circuito de cocina: ITM 20A
- Alimentador de cocina: ITM 40A
- Interruptor general: ITM 100A

Verificación:
- 40A > 20A × 1.6 = 32A ✓
- 100A > 40A × 1.6 = 64A ✓

## Protección de respaldo
Cuando no es posible la selectividad perfecta, el ITM superior actúa como "respaldo" para fallas que el inferior no puede interrumpir (por su baja capacidad de ruptura).`,
      },
    ],
  },

  // ─── MÓDULO: INSTALACIONES INDUSTRIALES ────────────────────────────────────
  {
    id: 'instalaciones-industriales',
    title: 'Instalaciones Industriales',
    description: 'Motores, tableros de distribución y sistemas trifásicos.',
    icon: '🏭',
    tier: 'pro',
    color: '#795548',
    lessons: [
      {
        id: 'instalaciones-trifasicas',
        title: 'Sistemas trifásicos',
        description: 'Fundamentos, motores y tableros de distribución trifásica.',
        duration: '30 min',
        tier: 'pro',
        icon: '⚡',
        tags: ['trifásico', 'industrial', 'motores'],
        content: `# Instalaciones Trifásicas

## ¿Qué es la corriente trifásica?
Tres corrientes alternas iguales desfasadas 120° entre sí. Permite transmitir más potencia con menos conductor y es ideal para motores.

## Configuraciones trifásicas en México

### Delta (Δ) — 220V / 440V
- Tres fases, sin neutro
- Típico en motores industriales
- Voltaje fase-fase: 220V o 440V

### Estrella (Y) con neutro — 127V/220V
- Tres fases + neutro
- Permite usar 127V (fase-neutro) o 220V (fase-fase)
- Más común en edificios y viviendas

## Voltajes de referencia en México
| Sistema | Fase-Neutro | Fase-Fase |
|---------|------------|-----------|
| Residencial | 127V | 220V |
| Industrial | — | 440V |
| Media tensión | — | 13.8 kV, 23 kV |

## Motores trifásicos de inducción

### Datos de la placa del motor
- **Potencia**: HP o kW
- **Voltaje**: 220V o 440V (o dual 220/440)
- **Corriente nominal**: para dimensionar conductores
- **Factor de potencia (FP)**: típico 0.85
- **Eficiencia (η)**: típico 88-95%
- **Velocidad**: RPM (1750, 3500, etc.)
- **Clase de aislamiento**: F (155°C) o H (180°C)

### Fórmula de corriente nominal
**I = P / (√3 × V × FP × η)**

Ejemplo: Motor 10HP (7460W), 440V, FP=0.85, η=0.90:
I = 7460 / (1.732 × 440 × 0.85 × 0.90) = **12.8A**

## Métodos de arranque de motores
- **Directo (DOL)**: Simple, pico de corriente 5-8× la nominal
- **Estrella-Delta (Y-Δ)**: Reduce a 1/3 la corriente de arranque
- **Autotransformador**: Reducción configurable (50%, 65%, 80%)
- **Variador de Frecuencia (VFD)**: Control total, el más eficiente`,
      },
      {
        id: 'tableros-distribucion',
        title: 'Tableros de distribución industrial',
        description: 'Diseño y componentes de tableros industriales.',
        duration: '25 min',
        tier: 'pro',
        icon: '🗄️',
        tags: ['tablero', 'industrial', 'distribución'],
        content: `# Tableros de Distribución Industrial

## Tipos de tableros

### Tablero de Distribución Principal (TDP)
Recibe energía de la subestación o acometida y la distribuye a tableros secundarios o cargas principales.

### Tablero de Distribución Secundario (TDS)
Alimentado desde el TDP, distribuye a circuitos derivados de un área específica.

### Tablero de Control (TC)
Contiene el equipo de mando y protección para motores y procesos.

### Centro de Control de Motores (CCM / MCC)
Agrupa arrancadores, variadores y protecciones de múltiples motores.

## Componentes de un tablero industrial

### Interruptores de potencia
- **MCCB** (Molded Case Circuit Breaker): hasta 2500A
- **ACB** (Air Circuit Breaker): para corrientes muy altas
- **Fusibles de potencia**: respaldo para faltas severas

### Medición integrada
- Voltímetros y amperímetros por fase
- Medidor de energía kWh
- Analizador de red (calidad de energía)

### Protecciones adicionales
- Relé de sobrecarga para motores
- Relé diferencial para transformadores
- Supresores de transitorios (SPD)

## Especificaciones de gabinete

### Tipos según NEMA
- **NEMA 1**: Interior, protección básica
- **NEMA 3R**: Exterior, lluvia
- **NEMA 4/4X**: Hermético, lavable (acero inox)
- **NEMA 12**: Industrial, polvo y aceite

### Grado de protección IP (equivalente)
- NEMA 1 ≈ IP20
- NEMA 3R ≈ IP44
- NEMA 4 ≈ IP66
- NEMA 4X ≈ IP66 + anticorrosión

## Diseño del tablero

### Principios de distribución de barras
- Barras de cobre dimensionadas para la corriente máxima
- Separación entre fases: mínimo 25mm
- Distancia de fuga según el voltaje de trabajo

### Etiquetado (NOM-001 y NOM-026-STPS)
- Cada circuito claramente identificado
- Señales de peligro eléctrico (triángulo amarillo con rayo)
- Voltaje nominal en la puerta del tablero`,
      },
      {
        id: 'arrancadores-motores',
        title: 'Arrancadores y control de motores',
        description: 'Arrancadores directos, estrella-delta y variadores de frecuencia.',
        duration: '28 min',
        tier: 'pro',
        icon: '🔄',
        tags: ['arrancador', 'motor', 'VFD', 'control'],
        content: `# Arrancadores y Control de Motores

## Componentes de un arrancador directo (DOL)

### Contactor
Es un interruptor electromagnético que cierra/abre el circuito de potencia del motor. Se activa con una bobina de 24V, 110V o 220V.

Partes:
- Contactos principales (potencia): A1, A2, L1-L3, T1-T3
- Bobina: A1-A2 (tensión de mando)
- Contactos auxiliares: para enclavamientos y señalización

### Relé de sobrecarga (térmico)
Protege el motor de sobrecargas prolongadas. Se ajusta a la corriente nominal del motor ±10%.

### Pulsadores
- **Verde**: Marcha (normalmente abierto, NA)
- **Rojo/Negro**: Paro (normalmente cerrado, NC)
- **Hongo rojo**: Paro de emergencia (PE) con enclavamiento

## Diagrama de mando básico (DOL)

  L1 ──[F]──[PE]──[STOP]──┬──[START]──[Aux KM1]──[Bobina KM1]── L2
                           └──[Aux KM1]──────────────────────────┘
                                (auto-retención)

F = Fusibles de mando | PE = Paro de emergencia | KM1 = Contactor principal

## Arranque Estrella-Delta

### Propósito
Reducir la corriente de arranque de ~7× a ~2.5× la corriente nominal.

### Secuencia
1. **Estrella (Y)**: Motor arranca con devanados en estrella → menor voltaje por fase → menor corriente
2. Después de ~5-10 segundos (o cuando la velocidad se estabiliza)
3. **Delta (Δ)**: Motor pasa a conexión delta → voltaje nominal completo

### Componentes adicionales
- Contactor de estrella (KM2)
- Contactor de delta (KM3)
- Temporizador (TR1): controla el tiempo de transición

## Variadores de Frecuencia (VFD)

### Ventajas
- Arranque suave sin picos de corriente
- Control de velocidad de 0 a 100% (y más)
- Ahorro de energía en cargas variables (bombas, ventiladores: hasta 50%)
- Protección integrada del motor

### Parámetros de programación básicos
- **P01**: Frecuencia mínima (0-5 Hz)
- **P02**: Frecuencia máxima (50-60 Hz)
- **P03**: Tiempo de aceleración (0.1-999s)
- **P04**: Tiempo de desaceleración
- **P05**: Corriente nominal del motor`,
      },
      {
        id: 'compensacion-reactiva',
        title: 'Factor de potencia y compensación reactiva',
        description: 'Bancos de capacitores y corrección del factor de potencia.',
        duration: '22 min',
        tier: 'pro',
        icon: '⚖️',
        tags: ['factor de potencia', 'capacitores', 'eficiencia'],
        content: `# Factor de Potencia y Compensación Reactiva

## ¿Qué es el factor de potencia?

**FP = Potencia Activa (kW) / Potencia Aparente (kVA)**

- **Potencia Activa (P en kW)**: La que realiza trabajo real
- **Potencia Reactiva (Q en kVAR)**: La que cargan los motores y transformadores
- **Potencia Aparente (S en kVA)**: La que realmente suministra CFE

Un FP de 1.0 es ideal. Motores e inductores reducen el FP.

## ¿Por qué importa el factor de potencia?

Con bajo factor de potencia:
- CFE cobra penalización (FP < 0.90 en tarifa industrial)
- Los conductores llevan más corriente para la misma potencia útil
- Mayor pérdida de energía en conductores y transformadores
- El transformador trabaja con mayor carga aparente

## Cómo mejorar el factor de potencia

### Banco de capacitores
Los capacitores generan potencia reactiva capacitiva que compensa la inductiva de los motores.

**kVAR necesarios** = P (kW) × (tan φ₁ - tan φ₂)

Donde:
- φ₁ = ángulo con FP actual
- φ₂ = ángulo con FP deseado (mínimo 0.95)

### Ejemplo
Planta con carga de 500 kW, FP actual = 0.75, FP deseado = 0.95:
- tan(arccos 0.75) = 0.882
- tan(arccos 0.95) = 0.329
- kVAR = 500 × (0.882 - 0.329) = **276.5 kVAR**

## Tipos de compensación

### Fija
- Banco de capacitores conectado permanentemente
- Simple y económico
- Riesgo de sobrecompensación en carga baja

### Automática (banco escalonado)
- Controlador mide el FP en tiempo real
- Conecta/desconecta grupos de capacitores según necesidad
- Mantiene el FP en el rango óptimo

### Local (en cada motor)
- Capacitor conectado directamente al motor
- Compensa solo cuando el motor está encendido
- Ideal para motores grandes`,
      },
      {
        id: 'subestaciones',
        title: 'Subestaciones eléctricas',
        description: 'Transformadores, subestaciones y media tensión.',
        duration: '25 min',
        tier: 'pro',
        icon: '🏗️',
        tags: ['subestación', 'transformador', 'media tensión'],
        content: `# Subestaciones Eléctricas

## ¿Qué es una subestación?
Es el conjunto de equipos que transforma la energía eléctrica de un nivel de voltaje a otro. Permite distribuir energía desde la generación hasta los usuarios.

## Tipos de subestaciones

### Subestación de distribución (CFE)
Transforma de transmisión (alta tensión: 115 kV, 230 kV) a distribución (media tensión: 13.8 kV, 23 kV).

### Subestación de usuario (industrial)
Transforma de media tensión (13.8 kV) al voltaje de utilización (220V, 440V). Es propiedad y responsabilidad del usuario.

## Componentes de una subestación de usuario

### Transformador de potencia
- Convierte el voltaje de media tensión al nivel industrial
- Se especifica por: kVA, voltaje primario/secundario, impedancia (%)
- Tipos: en aceite (exterior) o seco (interior)

### Celda de media tensión
- Interruptor de media tensión (SF6, vacío)
- Seccionadores
- Transformadores de corriente (TC) y voltaje (TP) para medición

### Tablero de distribución principal
- En el lado de baja tensión
- Alimenta los tableros secundarios y grandes cargas

## Transformadores: conceptos clave

### Relación de transformación
**n = V₁/V₂ = N₁/N₂ = I₂/I₁**

Si V₁ = 13,800V y V₂ = 440V: n = 31.36

### Pérdidas en el transformador
- **Pérdidas en el hierro (vacío)**: constantes, existentes aunque no haya carga
- **Pérdidas en el cobre (carga)**: proporcionales al cuadrado de la corriente

### Impedancia del transformador (%)
Indica la caída de tensión a plena carga. Típico: 4-6% para transformadores industriales.

Impacta la corriente de cortocircuito disponible, importante para seleccionar protecciones.`,
      },
    ],
  },

  // ─── MÓDULO: SEGURIDAD INDUSTRIAL ──────────────────────────────────────────
  {
    id: 'seguridad-industrial',
    title: 'Seguridad Eléctrica Industrial',
    description: 'NOM-029-STPS, LOTO, arco eléctrico y protección personal avanzada.',
    icon: '🦺',
    tier: 'pro',
    color: '#F44336',
    lessons: [
      {
        id: 'nom-029-stps',
        title: 'NOM-029-STPS: Seguridad eléctrica en el trabajo',
        description: 'La norma de seguridad eléctrica laboral en México.',
        duration: '20 min',
        tier: 'pro',
        icon: '📑',
        tags: ['NOM-029', 'STPS', 'seguridad laboral'],
        content: `# NOM-029-STPS: Seguridad Eléctrica en el Trabajo

## ¿Qué es la NOM-029-STPS?
La **NOM-029-STPS-2011** establece las condiciones de seguridad para prevenir los riesgos de trabajo en instalaciones eléctricas en los centros de trabajo de México.

## Campo de aplicación
Aplica en todos los centros de trabajo donde existan instalaciones eléctricas, excepto instalaciones de CFE y similares.

## Obligaciones del patrón

### Condiciones de seguridad
- Mantener las instalaciones en condiciones seguras
- Señalizar todos los riesgos eléctricos (NOM-026-STPS)
- Proveer EPP adecuado y verificar su uso
- Realizar revisiones periódicas de las instalaciones

### Capacitación obligatoria
Todo trabajador que realice actividades con riesgo eléctrico debe recibir capacitación sobre:
- Riesgos de la electricidad
- Procedimientos de trabajo seguro
- Uso correcto del EPP
- Procedimientos de emergencia

### Programa de mantenimiento
La NOM-029 exige un programa documentado de mantenimiento preventivo de instalaciones eléctricas.

## Distancias de seguridad

| Nivel de tensión | Distancia mínima sin protección |
|-----------------|-------------------------------|
| Hasta 750V | Sin restricción con EPP |
| 750V - 15 kV | 1.5m |
| 15 kV - 36 kV | 2.0m |
| 36 kV - 72.5 kV | 2.5m |

## Trabajo en instalaciones energizadas
Solo permitido cuando:
- No es posible desenergizar
- La empresa tiene procedimiento específico aprobado
- El personal tiene capacitación y EPP para tensión de trabajo
- Se usa el principio de "trabajo con una mano"

## Registro y documentación
- Bitácora de mantenimiento
- Registros de capacitación
- Checklist de inspección periódica
- Reportes de incidentes eléctricos`,
      },
      {
        id: 'loto',
        title: 'Bloqueo y Etiquetado (LOTO)',
        description: 'Procedimiento LOTO para trabajo seguro en equipos eléctricos.',
        duration: '18 min',
        tier: 'pro',
        icon: '🔐',
        tags: ['LOTO', 'bloqueo', 'seguridad', 'procedimiento'],
        content: `# Bloqueo y Etiquetado (LOTO)

**LOTO = Lock Out / Tag Out** (Bloqueo / Etiquetado)

Es el procedimiento que garantiza que una máquina o equipo está completamente desenergizado y no puede encenderse accidentalmente mientras se realizan trabajos de mantenimiento.

## ¿Por qué es crítico el LOTO?

Miles de trabajadores mueren o se lesionan cada año por el arranque inesperado de equipos durante mantenimiento. El LOTO es la medida de control más efectiva.

## Los 8 pasos del LOTO

### 1. Preparación
Identificar todas las fuentes de energía del equipo: eléctrica, neumática, hidráulica, mecánica (muelles), gravitatoria, térmica.

### 2. Notificación
Informar al personal afectado que el equipo va a ser bloqueado.

### 3. Apagado del equipo
Seguir el procedimiento normal de apagado.

### 4. Aislamiento de energía
Abrir el interruptor, cerrar válvulas, desconectar neumática. Cada fuente debe ser aislada.

### 5. Bloqueo (Lock Out)
Colocar un candado personal en cada punto de aislamiento. **Solo el trabajador que pone el candado puede quitarlo.**

### 6. Etiquetado (Tag Out)
Colocar etiqueta que indique: nombre del trabajador, fecha, razón del bloqueo y que está prohibido operar.

### 7. Liberación de energía residual
- Descargar condensadores eléctricos
- Purgar presión neumática/hidráulica
- Bloquear partes mecánicas que puedan caer

### 8. Verificación
Comprobar que NO hay energía: intentar arrancar el equipo, medir voltaje, verificar presión.

## Bloqueo grupal
Cuando varios trabajadores intervienen el mismo equipo, cada uno pone su propio candado. El equipo no puede encenderse hasta que **todos** hayan retirado sus candados.

## EPP para LOTO
- Candados individuales (color por área/turno)
- Etiquetas de advertencia
- Hasps (abrazaderas para múltiples candados)
- Tapas de bloqueo para interruptores`,
      },
      {
        id: 'arco-electrico',
        title: 'Arco eléctrico y protección NFPA 70E',
        description: 'El peligro más subestimado: el arco eléctrico y cómo protegerse.',
        duration: '22 min',
        tier: 'pro',
        icon: '💥',
        tags: ['arco eléctrico', 'NFPA 70E', 'EPP', 'quemaduras'],
        content: `# Arco Eléctrico y Protección NFPA 70E

## ¿Qué es un arco eléctrico?

Es una descarga eléctrica a través del aire entre dos conductores. Cuando ocurre un arco eléctrico:
- **Temperatura**: Puede alcanzar 20,000°C (4× la temperatura del sol)
- **Onda de presión**: Expansión de aire caliente puede lanzar personas y equipo
- **Radiación UV**: Quema la piel y los ojos instantáneamente
- **Metal fundido**: Gotitas de metal a 2,000°C
- **Ruido**: Puede causar daño auditivo permanente

## Causas de arcos eléctricos
- Herramientas que tocan partes energizadas
- Polvo conductor acumulado en tableros
- Corrosión que causa falla de aislamiento
- Error humano al trabajar en tableros energizados
- Animales o insectos en tableros

## Energía incidente (NFPA 70E)

La energía incidente mide la cantidad de energía de arco que puede llegar a un trabajador. Se mide en **cal/cm²** (calorías por centímetro cuadrado).

La temperatura a la que el tejido humano sufre quemadura de segundo grado: **1.2 cal/cm²**

## Categorías de PPE por energía incidente (NFPA 70E)

| Categoría | Energía incidente | Ropa mínima |
|-----------|-----------------|-------------|
| 1 | Hasta 4 cal/cm² | Camisa y pantalón arco eléctrico 4 cal |
| 2 | Hasta 8 cal/cm² | Traje de arco 8 cal |
| 3 | Hasta 25 cal/cm² | Traje de arco 25 cal + capucha |
| 4 | Hasta 40 cal/cm² | Traje de arco 40 cal + capucha |

## EPP para trabajo en partes energizadas

### Ropa ignífuga (FR)
- No se derrite ni gotea al quemarse
- Carbonizan sin propagar llama
- Materiales: Nomex, Modacryl, FR algodón

### Casco de arco eléctrico
- Escudo facial con clasificación cal/cm²
- Clase G o E según voltaje

### Guantes de hule dieléctrico
- Clasificados por voltaje: Clase 0 (1000V), Clase 1 (7500V), Clase 2 (17000V)
- Deben usarse con guantes de cuero encima
- Revisión periódica obligatoria (prueba de inflado)

## Análisis de peligro de arco (NFPA 70E)
Antes de trabajar en equipos energizados, se debe realizar un **análisis de peligro de arco** para determinar la energía incidente y seleccionar el EPP adecuado.`,
      },
      {
        id: 'inspeccion-instalaciones',
        title: 'Inspección y mantenimiento de instalaciones',
        description: 'Programa de inspección y mantenimiento preventivo eléctrico.',
        duration: '16 min',
        tier: 'pro',
        icon: '🔎',
        tags: ['inspección', 'mantenimiento', 'preventivo'],
        content: `# Inspección y Mantenimiento de Instalaciones Eléctricas

## ¿Por qué el mantenimiento preventivo?

Las instalaciones eléctricas se degradan con el tiempo por:
- Calentamiento y enfriamiento cíclico (aflojan conexiones)
- Oxidación y corrosión
- Contaminación (polvo, aceite, humedad)
- Vibraciones mecánicas
- Envejecimiento del aislamiento

Un programa de mantenimiento preventivo evita fallos, incendios y accidentes.

## Frecuencias de mantenimiento recomendadas

### Mensual
- Inspección visual de tableros (señales de calor, quemado, humedad)
- Verificar que todas las tapas estén completas
- Limpiar polvo con aire comprimido seco

### Trimestral
- Verificar apriete de conexiones en tableros
- Inspeccionar cables por daños en el aislante
- Revisar condiciones de contactos y apagadores
- Probar botón TEST de interruptores GFCI

### Anual
- **Termografía infrarroja**: detecta conexiones calientes antes de que fallen
- Medición de resistencia de tierra (≤25Ω)
- Prueba de aislamiento con megóhmetro
- Revisión completa del tablero
- Apriete de todas las conexiones con torquímetro

### Cada 5 años
- Prueba de operación de interruptores
- Revisión del sistema de puesta a tierra
- Inspección de conduits y cajas

## Termografía infrarroja

Es la herramienta más efectiva para mantenimiento preventivo eléctrico. Detecta:
- Conexiones flojas (temperatura elevada)
- Breakers defectuosos
- Desbalance de cargas
- Contactos deteriorados

**Temperatura de alerta:**
- ΔT 1-10°C sobre referencia: monitorear
- ΔT 10-30°C: programar mantenimiento pronto
- ΔT >30°C: acción inmediata

## Prueba de aislamiento con megóhmetro

Mide la resistencia del aislamiento del cable para detectar degradación.

**Valores mínimos aceptables:**
- Cables nuevos: >100 MΩ
- Cables en servicio: >1 MΩ por kV de voltaje de operación

Una lectura baja indica aislamiento degradado → riesgo de cortocircuito o choque eléctrico.`,
      },
    ],
  },

  // ─── MÓDULO: ENERGÍAS RENOVABLES ───────────────────────────────────────────
  {
    id: 'energias-renovables',
    title: 'Energías Renovables y Solar',
    description: 'Sistemas fotovoltaicos, conexión a la red y almacenamiento.',
    icon: '☀️',
    tier: 'pro',
    color: '#4CAF50',
    lessons: [
      {
        id: 'fundamentos-solar',
        title: 'Fundamentos de energía solar fotovoltaica',
        description: 'Cómo funcionan los paneles solares y sus componentes.',
        duration: '20 min',
        tier: 'pro',
        icon: '☀️',
        tags: ['solar', 'fotovoltaico', 'paneles'],
        content: `# Fundamentos de Energía Solar Fotovoltaica

## Efecto fotovoltaico
Las celdas solares convierten la luz solar directamente en corriente eléctrica DC gracias al efecto fotovoltaico. Las celdas se conectan en serie/paralelo para formar un panel solar.

## Parámetros de un panel solar

### Condiciones estándar de prueba (STC)
Los paneles se especifican a: 1000 W/m², 25°C, AM1.5

| Parámetro | Símbolo | Descripción |
|-----------|---------|-------------|
| Potencia pico | Wp | Potencia a STC |
| Voltaje circuito abierto | Voc | Sin carga conectada |
| Corriente cortocircuito | Isc | Con terminales en corto |
| Voltaje máxima potencia | Vmp | Punto operación óptimo |
| Corriente máxima potencia | Imp | Punto operación óptimo |
| Eficiencia | η | % de luz convertida en electricidad |

### Panel típico residencial (400Wp)
- Voc: ~49V
- Isc: ~10A
- Vmp: ~41V
- Imp: ~9.8A
- Eficiencia: ~21%

## Conexiones de paneles

### Serie (aumenta voltaje)
- Voc total = Voc × N paneles
- Isc total = Isc (igual)

### Paralelo (aumenta corriente)
- Voc total = Voc (igual)
- Isc total = Isc × N paneles

### Serie-Paralelo
Combinación para alcanzar el voltaje de entrada del inversor y la corriente deseada.

## Efecto de la temperatura
Los paneles silicio cristalino pierden aproximadamente **0.4% de potencia por cada °C** sobre 25°C. En climas cálidos esto es significativo.

Panel de 400Wp a 55°C (típico en verano en México):
400Wp × (1 - 0.004 × (55-25)) = 400 × 0.88 = **352W real**`,
      },
      {
        id: 'dimensionamiento-solar',
        title: 'Dimensionamiento de sistema solar',
        description: 'Calcula el sistema fotovoltaico correcto para tu consumo.',
        duration: '25 min',
        tier: 'pro',
        icon: '🧮',
        tags: ['solar', 'dimensionamiento', 'cálculo'],
        content: `# Dimensionamiento de Sistema Solar Fotovoltaico

## Tipos de sistemas

### Sistema On-Grid (conectado a la red)
- Conectado a la red de CFE
- Sin baterías (más económico)
- Puede exportar excedentes a CFE (net metering)
- Se apaga si CFE falla (por seguridad del personal de CFE)

### Sistema Off-Grid (autónomo)
- No conectado a CFE
- Requiere baterías para uso nocturno o días nublados
- Para zonas sin red eléctrica

### Sistema Híbrido
- Conectado a red + baterías
- Permite uso nocturno con energía solar almacenada
- Funciona durante cortes de CFE

## Método de dimensionamiento (On-Grid)

### Paso 1: Determinar el consumo
Obtén tu consumo mensual en kWh de tu recibo de CFE.
Ejemplo: **450 kWh/mes** = 15 kWh/día

### Paso 2: Calcular las Horas Solar Pico (HSP)
Depende de tu ubicación. México tiene excelente recurso solar:
- Norte (Sonora, Chihuahua): 6.0-6.5 HSP
- Centro (CDMX, Jalisco): 5.0-5.5 HSP
- Sur (Chiapas, Oaxaca): 4.5-5.5 HSP

Promedio nacional: **5.5 HSP**

### Paso 3: Calcular potencia del sistema
**kWp necesarios = Consumo diario (kWh) / HSP / Factor de rendimiento**

Factor de rendimiento del sistema: ~80% (pérdidas por temperatura, cables, inversor)

kWp = 15 kWh / 5.5 HSP / 0.80 = **3.4 kWp**

### Paso 4: Número de paneles
Con paneles de 400Wp:
N = 3,400W / 400W = **8.5 → 9 paneles**

### Paso 5: Selección del inversor
Potencia del inversor ≈ Potencia del arreglo × 1.0 a 1.2

Para 9 × 400W = 3,600W → **Inversor de 4 kW**

## Net Metering en México (Interconexión CFE)

La resolución de interconexión CFE permite:
- Instalar sistema solar y conectarlo a la red
- Los excedentes se "inyectan" a la red
- CFE los acredita en tu siguiente recibo
- Trámite: Contrato de Interconexión CFE + permiso de la CFE local`,
      },
      {
        id: 'inversores-baterias',
        title: 'Inversores y sistemas de almacenamiento',
        description: 'Tecnologías de inversores y baterías para sistemas solares.',
        duration: '22 min',
        tier: 'pro',
        icon: '🔋',
        tags: ['inversor', 'baterías', 'almacenamiento', 'solar'],
        content: `# Inversores y Sistemas de Almacenamiento

## El inversor solar

### Función
Convierte la corriente DC de los paneles en corriente AC (127V/220V, 60Hz) compatible con la red y los aparatos del hogar.

### Tipos de inversores

#### String Inverter (central)
- Un inversor para todo el arreglo
- El panel con menor producción limita a todo el string
- Más económico
- Vida útil: 10-15 años

#### Micro-inversores
- Un inversor por panel
- Máxima producción de cada panel independientemente
- Ideal cuando hay sombra parcial
- Más caro, pero mayor producción

#### Optimizadores de potencia + inversor central
- Optimizador por panel + un inversor central
- Compromiso entre costo y eficiencia

### Parámetros clave del inversor
- **Potencia nominal (W)**: Potencia AC máxima continua
- **Rango de voltaje MPPT**: Voltaje DC de entrada aceptado
- **Eficiencia**: Típico 97-98% para inversores modernos
- **THD**: Distorsión armónica total (<3%)

## Baterías para sistemas solares

### Tecnologías

#### Plomo-ácido (AGM/Gel)
- La más económica
- Vida útil: 3-7 años / 300-700 ciclos
- Profundidad de descarga: 50% máximo
- Temperatura ideal: 20-25°C

#### Litio LFP (LiFePO4)
- Mayor costo inicial, mejor ciclo de vida
- Vida útil: 10-15 años / 3000-6000 ciclos
- Profundidad de descarga: 80-90%
- Más segura que otras química de litio

#### Litio NMC
- Mayor densidad de energía (más kWh en menos espacio)
- Ligeramente menos segura que LFP
- Usada en Tesla Powerwall y similares

### Dimensionamiento de baterías

**Capacidad necesaria (kWh) = Consumo nocturno × Días de autonomía / DOD**

Ejemplo: Consumo nocturno 5 kWh, 1 día autonomía, DOD 80%:
5 / 0.80 = **6.25 kWh** de capacidad de batería

Con baterías de 100Ah a 51.2V (LFP):
Capacidad = 100Ah × 51.2V / 1000 = 5.12 kWh → **2 baterías en paralelo**`,
      },
      {
        id: 'otras-renovables',
        title: 'Otras energías renovables',
        description: 'Eólica, minihidráulica y cogeneración a escala pequeña.',
        duration: '15 min',
        tier: 'pro',
        icon: '🌬️',
        tags: ['eólica', 'hidráulica', 'renovables'],
        content: `# Otras Energías Renovables

## Energía Eólica

### Pequeños aerogeneradores
Para uso residencial o rural. Potencias: 500W a 10 kW.

**Ventajas**:
- Genera energía de día y de noche (cuando hay viento)
- Complementa bien a los paneles solares (viento en invierno, sol en verano)

**Desventajas**:
- Requiere vientos constantes (>4 m/s promedio)
- Mantenimiento mecánico (rodamientos, aspas)
- Puede generar ruido y afectar aves

**Requisitos de instalación**:
- Torre de al menos 10m sobre los obstáculos más cercanos
- Estudio de recurso eólico del sitio
- Regulaciones municipales variables

### Componentes del sistema eólico
- Aerogenerador (rotor + generador)
- Controlador de carga
- Banco de baterías (para sistemas off-grid)
- Inversor

## Energía Minihidráulica

### Pequeñas centrales (microhidráulica: <100 kW)
Ideal para propiedades con arroyos o caudales constantes.

**Potencia disponible: P = η × ρ × g × Q × H**
- η = eficiencia turbina (0.6-0.8)
- ρ = densidad del agua (1000 kg/m³)
- g = 9.81 m/s²
- Q = caudal (m³/s)
- H = altura de caída (m)

### Tipos de turbinas según la altura
- **Pelton**: Altas caídas (>50m), bajo caudal
- **Francis**: Caídas medias (10-50m)
- **Kaplan**: Bajas caídas (<10m), alto caudal

## Cogeneración
Producción simultánea de electricidad y calor (o frío) desde una misma fuente de energía.

Ejemplo: Un motor de gas genera electricidad Y el calor del escape se usa para calentar agua o aire de proceso. Eficiencias totales: 70-85%.

## Regulación en México
- **Ley de la Industria Eléctrica (LIE)**
- **CRE**: regula permisos para generación privada
- Contrato de interconexión con CFE para net metering`,
      },
    ],
  },

  // ─── MÓDULO: AUTOMATIZACIÓN ────────────────────────────────────────────────
  {
    id: 'automatizacion',
    title: 'Automatización y Control Eléctrico',
    description: 'PLC, domótica, redes industriales y automatización básica.',
    icon: '🤖',
    tier: 'pro',
    color: '#3F51B5',
    lessons: [
      {
        id: 'logica-control',
        title: 'Lógica de control eléctrico',
        description: 'Circuitos de mando con contactores, relés y temporizadores.',
        duration: '22 min',
        tier: 'pro',
        icon: '🔀',
        tags: ['control', 'contactores', 'relés', 'lógica'],
        content: `# Lógica de Control Eléctrico

## Circuitos de control vs circuitos de potencia

- **Circuito de potencia**: alimenta la carga (motor, calentador). Voltaje alto, corriente alta.
- **Circuito de control (mando)**: activa/desactiva el circuito de potencia. Voltaje bajo (24V o 110V), corriente baja.

## Elementos de control

### Contactores
Interruptores electromagnéticos de potencia controlados por señal de baja corriente. Ver lección de arrancadores para detalle.

### Relés de control
Similar al contactor pero para señales de control. Tienen contactos NA (normalmente abierto) y NC (normalmente cerrado).

### Temporizadores (Timers)
- **TON** (Timer On Delay): contacto cierra después de un tiempo
- **TOF** (Timer Off Delay): contacto abre después de un tiempo
- **TP** (Timer Pulse): contacto cierra por tiempo definido

### Sensores
- **Final de carrera**: detección mecánica de posición
- **Sensor inductivo**: detección de metales sin contacto
- **Sensor capacitivo**: detección de cualquier material
- **Fotocélula**: detección por haz de luz
- **Encoder**: mide posición y velocidad

## Lógica fundamental

### AND (Serie)
Ambos contactos deben cerrarse para activar la salida.

  ---[A]---[B]---( Y )---

Y = A AND B

### OR (Paralelo)
Cualquiera de los contactos activa la salida.

  ---[A]---┐
           ├---( Y )---
  ---[B]---┘

Y = A OR B

### Auto-retención
El circuito se mantiene activo aunque se suelte el botón de arranque.

  ---[STOP NC]---[START NA]---┬---[Bobina KM1]---
                              │
                     [Aux KM1 NA]

## Enclavamientos

### Enclavamiento eléctrico
Previene que dos contactores actúen simultáneamente (ej: adelante/atrás de un motor).
El contactor KM1 tiene un NC en el circuito de KM2 y viceversa.

### Enclavamiento mecánico
Interlock físico entre dos contactores que impide que ambos cierren al mismo tiempo.`,
      },
      {
        id: 'plc-basico',
        title: 'Introducción a PLC',
        description: 'Qué es un PLC, su programación básica y aplicaciones.',
        duration: '25 min',
        tier: 'pro',
        icon: '💻',
        tags: ['PLC', 'programación', 'automatización'],
        content: `# Introducción a PLC (Controlador Lógico Programable)

## ¿Qué es un PLC?

Un **PLC (Programmable Logic Controller)** es una computadora industrial diseñada para controlar procesos y maquinaria. Reemplaza miles de relés, temporizadores y contadores con software.

## Arquitectura de un PLC

### CPU (Unidad Central de Procesamiento)
- Ejecuta el programa de control
- Ciclo de scan: Lee entradas → Ejecuta programa → Actualiza salidas

### Módulos de E/S (Entradas/Salidas)

**Entradas digitales (DI)**:
- Señales ON/OFF de sensores, botones, finales de carrera
- 24V DC comúnmente

**Salidas digitales (DO)**:
- Activan contactores, válvulas, pilotos
- Relé (libre de voltaje) o transistor (24V DC)

**Entradas analógicas (AI)**:
- Señales de 4-20mA o 0-10V de sensores de temperatura, presión, nivel

**Salidas analógicas (AO)**:
- Controlan variadores de frecuencia, válvulas proporcionales

## Lenguajes de programación (IEC 61131-3)

### Ladder Diagram (LD)
El más usado. Imita los circuitos de relés. Fácil de entender para electricistas.

  |---[I0.0]---[/I0.1]---( Q0.0 )---|
  |                                  |
  |---[Q0.0]------------------       |

### Function Block Diagram (FBD)
Bloques gráficos interconectados. Bueno para procesos continuos.

### Structured Text (ST)
Similar a Pascal/Basic. Ideal para cálculos matemáticos.

### Sequential Function Chart (SFC)
Para procesos secuenciales: paso 1 → paso 2 → paso 3...

## Marcas de PLC comunes en México

| Marca | Modelo popular | Mercado |
|-------|---------------|---------|
| Siemens | S7-1200, S7-300 | Industrial |
| Allen-Bradley | Micro820, CompactLogix | Industrial |
| Mitsubishi | FX3U, iQ-F | Industrial |
| Schneider | M221, M241 | Industrial |
| CLICK (Automation Direct) | Serie CLICK | Pequeñas máquinas |

## Comunicaciones industriales
- **Modbus RTU/TCP**: El más simple y universal
- **Profibus**: Siemens, para distancias largas
- **EtherNet/IP**: Allen-Bradley, basado en Ethernet
- **Profinet**: Siemens, basado en Ethernet`,
      },
      {
        id: 'domotica',
        title: 'Domótica e instalaciones inteligentes',
        description: 'Sistemas de automatización del hogar y edificios.',
        duration: '18 min',
        tier: 'pro',
        icon: '🏠',
        tags: ['domótica', 'smart home', 'automatización'],
        content: `# Domótica e Instalaciones Inteligentes

## ¿Qué es la domótica?
Es la automatización del hogar: control de iluminación, climatización, seguridad, electrodomésticos y otros sistemas mediante tecnología.

## Niveles de automatización

### Nivel 1: Control básico
- Interruptores con temporizador
- Enchufes inteligentes individuales
- Termostatos programables

### Nivel 2: Sistemas integrados Wi-Fi
- Dispositivos que se controlan desde smartphone
- Asistentes de voz (Alexa, Google Home, Siri)
- Automatizaciones simples (si X → haz Y)

### Nivel 3: Sistema KNX / BACnet / Control4
- Protocolo profesional para edificios
- Integración total de todos los sistemas
- Programación avanzada
- Requiere instalador certificado

## Protocolos de comunicación

### Zigbee
- Baja potencia, larga batería
- Red en malla (los dispositivos se repiten entre sí)
- Hubs: Philips Hue, IKEA, Amazon Echo

### Z-Wave
- Rango mayor que Zigbee
- Menos interferencias con Wi-Fi
- Frecuencia: 908 MHz (EE.UU./México), 868 MHz (Europa)

### Wi-Fi (2.4/5 GHz)
- Sin hub adicional (se conecta directo al router)
- Mayor consumo eléctrico
- Ideal para enchufes y dispositivos fijos

### KNX
- Protocolo industrial para edificios
- Cables propios de 2 hilos (bus KNX)
- Muy confiable, escalable, largo plazo

## Instalación eléctrica para domótica

### Conduit extra
Siempre instala conduit adicional en paredes, incluso si no lo usas ahora. Pasar cables después es carísimo.

### Neutro en cada caja de apagador
Los switches inteligentes generalmente necesitan neutro. La instalación tradicional solo lleva la fase al apagador.

### Alimentación central
Para sistemas KNX o centralizados, planea un rack de comunicaciones con alimentación regulada y UPS.

## Retorno de inversión
Un sistema de automatización bien diseñado puede reducir el consumo energético 15-30% mediante:
- Apagado automático de luces
- Climatización solo cuando hay ocupación
- Optimización según tarifas de CFE`,
      },
    ],
  },
];
