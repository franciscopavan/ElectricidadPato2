import { Module } from '../types';

export const FREE_MODULES: Module[] = [
  {
    id: 'fundamentos',
    title: 'Fundamentos Eléctricos',
    description: 'Aprende qué es la electricidad desde cero, sin experiencia previa.',
    icon: '⚡',
    tier: 'free',
    color: '#69C11C',
    lessons: [
      {
        id: 'que-es-electricidad',
        title: '¿Qué es la electricidad?',
        description: 'Voltaje, corriente y resistencia explicados de forma sencilla.',
        duration: '8 min',
        tier: 'free',
        icon: '💡',
        tags: ['básico', 'conceptos'],
        content: `# ¿Qué es la electricidad?

La electricidad es el movimiento de electrones a través de un conductor. Piénsalo como agua fluyendo por una tubería.

## Los 3 conceptos clave

### Voltaje (V) — La presión
El voltaje es la "fuerza" que empuja los electrones. En México, el voltaje estándar en el hogar es **127V**.

> ⚠️ En México la CFE suministra 127V en instalaciones residenciales.

### Corriente (A) — El flujo
La corriente es la cantidad de electrones que fluyen. Se mide en **Amperes (A)**. Un foco LED usa ~0.07A, un aire acondicionado puede usar 10-15A.

### Resistencia (Ω) — La fricción
Se opone al flujo de electricidad. Se mide en **Ohms (Ω)**. Los cables metálicos tienen resistencia muy baja; el plástico tiene resistencia muy alta.

## La Ley de Ohm
**V = I × R**

- V = Voltaje (Volts)
- I = Corriente (Amperes)
- R = Resistencia (Ohms)

## Potencia Eléctrica (W)
La potencia es la energía consumida por segundo: **P = V × I**

Un foco de 60W a 127V consume: I = 60W / 127V = 0.47A

## Dato curioso 🦆
El cuerpo humano tiene ~1,000Ω de resistencia cuando está seco. Con 127V pueden fluir ~0.127A — suficiente para ser peligroso. ¡Por eso el pato no toca cables!`,
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

## Regla #1: Siempre corta la energía
Ve al tablero y apaga el interruptor del circuito. Luego verifica con un probador de voltaje que no hay energía. **Nunca asumas.**

## Regla #2: Verifica, no asumas
Aunque hayas apagado el interruptor, usa un multímetro o probador de voltaje para confirmar.

## Regla #3: Una mano en el bolsillo
Cuando trabajes cerca de partes energizadas, mete una mano al bolsillo. Evita que la corriente pase de una mano a otra (a través del corazón).

## Regla #4: No en superficies húmedas
El agua conduce electricidad. Nunca trabajes en instalaciones eléctricas con el piso mojado o las manos húmedas.

## Regla #5: Herramientas aisladas
Usa herramientas con mangos marcados con **1000V**.

## Regla #6: Nunca trabajes solo
Si algo sale mal, necesitas a alguien que pueda llamar a emergencias o aplicar primeros auxilios.

## ¿Cuándo llamar a un electricista?
- Chispas o quemaduras en contactos
- Interruptor que se dispara repetidamente
- Olor a quemado sin fuente obvia
- Para instalaciones nuevas o cambios de tablero
- Cualquier trabajo en 220V o trifásico

> 🦆 El pato estudia mucho, pero para trabajos reales siempre llama a un profesional.`,
      },
      {
        id: 'herramientas-basicas',
        title: 'Herramientas básicas del electricista',
        description: 'Qué necesitas antes de empezar cualquier trabajo eléctrico.',
        duration: '5 min',
        tier: 'free',
        icon: '🔧',
        tags: ['herramientas', 'básico'],
        content: `# Herramientas Básicas del Electricista

## Herramientas esenciales

### 1. Probador de voltaje (Testeador)
Lo más importante. Confirma si hay o no corriente antes de tocar cualquier cable. Los hay desde $50 pesos.

### 2. Multímetro
Mide voltaje, corriente y resistencia. Es el "termómetro" del electricista. Uno básico cuesta ~$200-400 pesos.

### 3. Desarmadores aislados
- Plano (paleta) y Phillips (cruz)
- Deben decir **1000V** en el mango

### 4. Pinzas
- **De punta**: para espacios pequeños
- **De corte**: para cortar cables
- **De electricista**: para todo

### 5. Pelacables
Para retirar el aislante sin cortar el conductor interno.

### 6. Cinta aislante (Teipe)
Para aislar empalmes. Usa de buena calidad (3M).

### 7. Lámpara de cabeza (Linterna)
Fundamental para trabajar en cajas y tableros oscuros.

## Herramientas intermedias
- **Pinza amperimétrica**: mide corriente sin cortar el circuito
- **Megóhmetro**: mide el aislamiento de cables
- **Telurómetro**: mide resistencia de tierra

## Equipo de Protección Personal (EPP)
- Guantes de hule dieléctricos
- Lentes de seguridad
- Calzado con suela de hule

## Lo que NO usar
- Desarmadores sin mango aislante
- Herramientas dañadas o con cables pelados
- Escaleras de metal cerca de instalaciones energizadas`,
      },
      {
        id: 'tipos-cables',
        title: 'Tipos de cables eléctricos',
        description: 'Los cables que se usan en instalaciones residenciales en México.',
        duration: '7 min',
        tier: 'free',
        icon: '🔌',
        tags: ['cables', 'básico', 'NOM'],
        content: `# Tipos de Cables Eléctricos en México

Los cables se identifican por su calibre en la escala **AWG** (American Wire Gauge).

> A mayor número AWG = cable más delgado. El 12 AWG es más grueso que el 14 AWG.

## Calibres más comunes en viviendas

| Calibre | Capacidad | Uso típico |
|---------|-----------|------------|
| 18 AWG  | 7A   | Extensiones ligeras, luminarias pequeñas |
| 16 AWG  | 13A  | Lámparas, aparatos pequeños |
| 14 AWG  | 15A  | Contactos e iluminación general |
| 12 AWG  | 20A  | Cocina, lavadora |
| 10 AWG  | 30A  | Secadora, A/C pequeño |
| 8 AWG   | 40A  | A/C grande, jacuzzi |
| 6 AWG   | 55A  | Entrada de servicio, hornos |

## Colores de cables (NOM México)
- 🔴 **Negro / Rojo**: Fase (¡CON VOLTAJE!)
- ⚪ **Blanco / Gris**: Neutro
- 🟢 **Verde / Verde-amarillo**: Tierra física

> ⚠️ En instalaciones antiguas los colores pueden no seguir esta convención. Siempre verifica con el multímetro.

## Tipos de cable por construcción
- **THW**: Para tubería conduit, sólido o cableado
- **THHW**: Mejor aislamiento, soporta más temperatura
- **THWN**: Con protección de nylon, ideal para conduit
- **Cable dúplex/triplex**: Para extensiones (NO para instalaciones fijas)
- **Cable XLP/XLPE**: Para alta temperatura e industria`,
      },
      {
        id: 'como-leer-recibo-cfe',
        title: 'Cómo leer tu recibo de CFE',
        description: 'Entiende tu factura eléctrica y detecta cobros incorrectos.',
        duration: '7 min',
        tier: 'free',
        icon: '📄',
        tags: ['CFE', 'ahorro', 'básico'],
        content: `# Cómo Leer tu Recibo de CFE

## Partes del recibo

### 1. Número de servicio
Es tu identificador único ante CFE. Lo necesitas para trámites y pagos.

### 2. Periodo de consumo
Las fechas de lectura anterior y actual. CFE lee el medidor cada 2 meses.

### 3. Consumo en kWh
**kWh = kilowatts × horas**

Si tienes un foco de 100W encendido 10 horas: 0.1 kW × 10h = 1 kWh

### 4. Tarifa doméstica
CFE tiene diferentes tarifas según tu consumo mensual:
- **Básico**: primeros kWh, precio más bajo
- **Intermedio**: siguiente rango, precio medio
- **Excedente**: consumo alto, precio más caro

> 🦆 En México mientras más consumes, más caro pagas por kWh. ¡El pato ahorra energía!

### 5. Cargos fijos
- Cargo fijo mensual (por tener el servicio)
- DAP (Derecho de Alumbrado Público)
- IVA

## Cómo calcular tu consumo antes de que llegue el recibo

1. Anota la lectura actual del medidor (número en el display)
2. Resta la lectura anterior (en tu recibo pasado)
3. La diferencia son los kWh consumidos
4. Multiplica por el precio de tu tarifa

## Señales de un cobro incorrecto
- Consumo muy superior al habitual sin razón
- Error en el número de servicio
- Periodo de facturación diferente al normal

Si detectas errores, puedes presentar una **aclaración ante CFE** con tu número de servicio.`,
      },
      {
        id: 'primeros-auxilios-descarga',
        title: 'Primeros auxilios por descarga eléctrica',
        description: 'Qué hacer si alguien recibe un choque eléctrico.',
        duration: '6 min',
        tier: 'free',
        icon: '🚑',
        tags: ['seguridad', 'emergencias', 'primeros auxilios'],
        content: `# Primeros Auxilios por Descarga Eléctrica

## ⚠️ IMPORTANTE
Esta información es educativa. Ante una emergencia real llama al **911** de inmediato.

## Qué pasa durante una descarga
La corriente eléctrica al pasar por el cuerpo puede causar:
- Quemaduras internas y externas
- Fibrilación ventricular (paro cardíaco)
- Paro respiratorio
- Daño neurológico
- Contracturas musculares que impiden soltar el cable

## Qué HACER si alguien recibe una descarga

### Paso 1: NO toques a la víctima todavía
Si la persona sigue en contacto con la fuente eléctrica, tocarla te convierte en conductor. **Primero corta la energía.**

### Paso 2: Corta la energía
- Ve al tablero y apaga el interruptor principal
- Si no puedes, usa un palo de madera seco para alejar el cable de la víctima

### Paso 3: Llama al 911
Hazlo inmediatamente. Proporciona dirección y descripción del accidente.

### Paso 4: Evalúa a la víctima
Una vez que no haya riesgo eléctrico:
- ¿Está consciente? ¿Respira?
- Si no respira: inicia RCP si estás capacitado
- No muevas a la víctima a menos que haya peligro inmediato

### Paso 5: Trata las quemaduras
- Cubre con tela limpia y húmeda
- NO apliques hielo, pomadas ni remedios caseros
- Espera al personal médico

## Lesiones que no se ven
Las descargas eléctricas pueden causar daño interno aunque la persona parezca bien. **Siempre lleva a la víctima al médico**, aunque diga que está bien.`,
      },
    ],
  },
];
