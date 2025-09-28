import { Post } from '../interfaces/posts.interface';

export const posts: Post[] = [
  {
    id: "post-001",
    authorId: 1,
    content: "Hoy probé una receta de pastel de zanahoria y salió increíble 🤩. Creo que voy a compartir la receta en un próximo post.",
    categories: ["cocina", "repostería", "recetas"],
    createdAt: "2025-09-25T14:32:00Z",
    reactions: {
      like: [{ authorId: 2 }, { authorId: 3 }],
      love: [{ authorId: 5 }],
      laugh: [],
      wow: [{ authorId: 4 }],
      sad: [],
      angry: []
    },
    comments: [
      {
        id: "c-001",
        authorId: 2,
        content: "¡Eso suena delicioso! ¿Ya pensaste en hacer un video tutorial?",
        createdAt: "2025-09-25T15:01:00Z"
      },
      {
        id: "c-002",
        authorId: 5,
        content: "Me anoto cuando compartas la receta 👀",
        createdAt: "2025-09-25T15:12:00Z"
      }
    ]
  },
  {
    id: "post-002",
    authorId: 4,
    content: "Estoy experimentando con una IA que genera ilustraciones, es increíble cómo la tecnología puede ayudar también en el arte 🎨🤖.",
    categories: ["tecnología", "IA", "arte"],
    createdAt: "2025-09-26T09:10:00Z",
    reactions: {
      like: [{ authorId: 1 }, { authorId: 3 }],
      love: [{ authorId: 2 }],
      laugh: [],
      wow: [{ authorId: 5 }],
      sad: [],
      angry: []
    },
    comments: [
      {
        id: "c-003",
        authorId: 3,
        content: "¡Qué interesante! Podrías combinarlo con fotografía, seguro salen cosas locas.",
        createdAt: "2025-09-26T09:45:00Z"
      },
      {
        id: "c-004",
        authorId: 1,
        content: "¿Se puede usar gratis o hay que pagar? 👀",
        createdAt: "2025-09-26T09:58:00Z"
      }
    ]
  },
  {
    id: "post-003",
    authorId: 3,
    content: "Hoy me encontré un paisaje increíble en las afueras de la ciudad. Amanecía y la niebla cubría los árboles como un manto. 🌲🌫️",
    categories: ["fotografía", "naturaleza", "paisajes"],
    createdAt: "2025-09-27T06:15:00Z",
    reactions: {
      like: [{ authorId: 1 }, { authorId: 4 }],
      love: [],
      laugh: [],
      wow: [{ authorId: 2 }, { authorId: 5 }],
      sad: [],
      angry: []
    },
    comments: [
      {
        id: "c-005",
        authorId: 5,
        content: "¡Suena a una foto de portada! ¿La subiste a algún lado?",
        createdAt: "2025-09-27T07:00:00Z"
      },
      {
        id: "c-006",
        authorId: 2,
        content: "Ese tipo de paisajes me inspiran para mis esculturas. Qué buena vibra.",
        createdAt: "2025-09-27T07:15:00Z"
      }
    ]
  },
  {
    id: "post-004",
    authorId: 12,
    content: "Acabo de volver de mi viaje a la Patagonia y las vistas fueron una locura. Adjunto una foto del Glaciar Perito Moreno. La fotografía es un arte que te permite revivir momentos. ¿Cuál es su lugar favorito para fotografiar?",
    categories: ["viajes", "fotografia", "naturaleza"],
    createdAt: "2025-08-20T10:00:00Z",
    reactions: {
      like: [{ authorId: 30 }, { authorId: 55 }, { authorId: 18 }],
      love: [{ authorId: 41 }],
      laugh: [],
      wow: [{ authorId: 15 }, { authorId: 62 }],
      sad: [],
      angry: []
    },
    comments: [
      {
        id: "c-007",
        authorId: 16,
        content: "¡Impresionante! Yo soy diseñador gráfico y siempre me inspiro en esos paisajes. ¡Gran toma!",
        createdAt: "2025-08-20T11:15:00Z"
      },
      {
        id: "c-008",
        authorId: 7,
        content: "Maravilloso, aunque a mi me parece que el sur de Chile tiene mejor luz para este tipo de fotografía de paisaje. Soy biólogo y la flora de la región me fascina más allí.",
        createdAt: "2025-08-20T13:40:00Z"
      }
    ]
  },
  {
    id: "post-005",
    authorId: 65,
    content: "El auge de la Inteligencia Artificial en la generación de código está llevando a una crisis de programadores junior. Sinceramente, no creo que haya trabajo para todos en 5 años. La habilidad humana se está volviendo obsoleta, y como ingeniero de software, lo digo con preocupación.",
    categories: ["tecnologia", "ia", "programacion", "empleo"],
    createdAt: "2025-08-15T19:45:00Z",
    reactions: {
      like: [{ authorId: 3 }, { authorId: 19 }],
      love: [],
      laugh: [{ authorId: 22 }],
      wow: [{ authorId: 60 }],
      sad: [{ authorId: 52 }],
      angry: [{ authorId: 44 }, { authorId: 15 }, { authorId: 10 }]
    },
    comments: [
      {
        id: "c-009",
        authorId: 33,
        content: "¡Qué exageración! La IA es una herramienta, no un reemplazo. Como abogado, veo que en mi campo sucede lo mismo, pero la ética y el juicio humano son irremplazables. Estamos evolucionando, no muriendo.",
        createdAt: "2025-08-16T08:00:00Z"
      },
      {
        id: "c-010",
        authorId: 45,
        content: "Estoy de acuerdo con el abogado. El problema no es la IA, sino la falta de adaptación. Soy arquitecto y si no hubiera adoptado el software 3D, ya estaría fuera. Hay que capacitarse.",
        createdAt: "2025-08-16T10:30:00Z"
      }
    ]
  },
  {
    id: "post-006",
    authorId: 22,
    content: "Finalmente terminé la composición de mi nueva pieza para violonchelo. Siento que esta tiene un toque más melancólico de lo habitual, quizás influenciado por la lluvia de esta semana. La música clásica sigue viva. ¿Algún músico en la sala que quiera compartir sus proyectos?",
    categories: ["arte", "musica", "composicion"],
    createdAt: "2025-08-27T16:20:00Z",
    reactions: {
      like: [{ authorId: 11 }, { authorId: 23 }, { authorId: 35 }, { authorId: 47 }],
      love: [{ authorId: 6 }, { authorId: 8 }],
      laugh: [],
      wow: [],
      sad: [{ authorId: 59 }],
      angry: []
    },
    comments: [
      {
        id: "c-011",
        authorId: 15,
        content: "¡Qué emoción! Espero que la subas pronto a Spotify. Como profesora de literatura, la música es mi escape favorito.",
        createdAt: "2025-08-27T17:01:00Z"
      },
      {
        id: "c-012",
        authorId: 23,
        content: "El violonchelo es un instrumento subestimado. ¡Dale duro! Soy periodista pero en mi tiempo libre toco el piano, quizás te comparto una melodía.",
        createdAt: "2025-08-27T18:55:00Z"
      }
    ]
  },
  {
    id: "post-007",
    authorId: 41,
    content: "La burbuja de las criptomonedas va a explotar, y lo digo como analista financiero con 20 años de experiencia. Quienes invierten en 'memecoins' simplemente están jugando a la ruleta. Es un fraude que solo beneficia a los primeros. ¿Por qué la gente no invierte en activos reales y tangibles?",
    categories: ["finanzas", "economia", "inversion", "polemica"],
    createdAt: "2025-08-01T09:10:00Z",
    reactions: {
      like: [{ authorId: 28 }],
      love: [],
      laugh: [{ authorId: 50 }],
      wow: [],
      sad: [{ authorId: 18 }],
      angry: [{ authorId: 33 }, { authorId: 65 }, { authorId: 9 }, { authorId: 13 }]
    },
    comments: [
      {
        id: "c-013",
        authorId: 15,
        content: "Con todo respeto, te falta actualización. Como desarrollador de blockchain, las cripto son mucho más que 'memecoins', son una revolución tecnológica y social. Estás viendo el mundo con gafas de hace 20 años.",
        createdAt: "2025-08-01T10:40:00Z"
      },
      {
        id: "c-014",
        authorId: 49,
        content: "😂 Me da risa cómo los veteranos de Wall Street no entienden que el mundo cambió. Es una inversión de riesgo, sí, ¿pero 'fraude'? Hay mucha ingeniería y matemáticas detrás.",
        createdAt: "2025-08-01T11:59:00Z"
      }
    ]
  },
  {
    id: "post-008",
    authorId: 14,
    content: "Mi primer maratón fue un éxito rotundo. El entrenamiento de 6 meses dio sus frutos. Para todos los que inician, no subestimen la importancia de un buen calzado y, sobre todo, la hidratación. ¡Vamos por el siguiente! También soy fisioterapeuta y me ofrezco a responder dudas sobre prevención de lesiones.",
    categories: ["salud", "ejercicio", "deporte", "maraton"],
    createdAt: "2025-08-10T06:05:00Z",
    reactions: {
      like: [{ authorId: 1 }, { authorId: 2 }, { authorId: 4 }, { authorId: 6 }, { authorId: 8 }],
      love: [{ authorId: 14 }, { authorId: 25 }],
      laugh: [],
      wow: [{ authorId: 31 }, { authorId: 58 }],
      sad: [],
      angry: []
    },
    comments: [
      {
        id: "c-015",
        authorId: 9,
        content: "¡Felicidades! Una pregunta: ¿Qué opinas de las rodilleras de compresión para corredores de larga distancia? Soy chef, pero corro para compensar mi trabajo.",
        createdAt: "2025-08-10T08:00:00Z"
      },
      {
        id: "c-016",
        authorId: 8,
        content: "Increíble logro. Confirmo la importancia de la hidratación y el descanso activo. ¡Gran consejo!",
        createdAt: "2025-08-10T09:15:00Z"
      }
    ]
  },
  {
    id: "post-009",
    authorId: 54,
    content: "El descubrimiento de nuevos fósiles en África está reescribiendo partes de la historia evolutiva humana. Es fascinante cómo cada hallazgo desafía lo que creíamos saber sobre el género *Homo*. Como paleontóloga, creo que aún hay muchísimos eslabones perdidos por encontrar. ¿Qué opinan de la teoría de la 'isla de los hobbits'?",
    categories: ["biologia", "evolucion", "paleontologia", "ciencia"],
    createdAt: "2025-08-05T12:00:00Z",
    reactions: {
      like: [{ authorId: 45 }, { authorId: 47 }, { authorId: 10 }],
      love: [{ authorId: 39 }],
      laugh: [],
      wow: [{ authorId: 24 }, { authorId: 27 }],
      sad: [],
      angry: []
    },
    comments: [
      {
        id: "c-017",
        authorId: 41,
        content: "¡Totalmente de acuerdo! Como antropólogo, me parece que la evidencia reciente de cruces con neandertales complica la línea recta de la evolución. Es más un arbusto que una rama.",
        createdAt: "2025-08-05T14:30:00Z"
      },
      {
        id: "c-018",
        authorId: 55,
        content: "Siendo un simple profesor de secundaria, me cuesta seguir el ritmo de los nuevos descubrimientos. Me parece increíble que la ciencia cambie tan rápido.",
        createdAt: "2025-08-05T16:15:00Z"
      }
    ]
  },
  {
    id: "post-010",
    authorId: 13,
    content: "Es hora de dejar de glorificar a ciertas figuras históricas. La historia no es blanco y negro. Muchos de nuestros 'héroes' nacionales participaron en atrocidades o tuvieron posturas éticamente dudosas. Como historiador, creo que necesitamos una mirada más crítica y menos mitológica. ¿Qué personaje creen que merece ser revisado?",
    categories: ["historia", "politica", "polemica", "sociedad"],
    createdAt: "2025-08-22T18:40:00Z",
    reactions: {
      like: [{ authorId: 13 }, { authorId: 56 }],
      love: [],
      laugh: [],
      wow: [{ authorId: 29 }],
      sad: [],
      angry: [{ authorId: 40 }, { authorId: 63 }, { authorId: 16 }]
    },
    comments: [
      {
        id: "c-019",
        authorId: 40,
        content: "Absolutamente en desacuerdo. El contexto de la época es fundamental. No podemos juzgar con la moral del siglo XXI. Yo soy militar y respeto la base fundacional de la nación.",
        createdAt: "2025-08-23T09:10:00Z"
      },
      {
        id: "c-020",
        authorId: 56,
        content: "Necesario y valiente. Como filósofa, la deconstrucción de los mitos fundacionales es vital para una sociedad madura. ¡El pasado debe ser un objeto de estudio, no de culto!",
        createdAt: "2025-08-23T11:45:00Z"
      }
    ]
  },
  {
    id: "post-011",
    authorId: 20,
    content: "El debate de 'lo análogo vs. lo digital' en la producción musical está muerto. Los mejores *tracks* de la última década usan una mezcla de ambos. El sonido no es solo tecnología, es emoción. Si eres productor musical, ¿cuál es tu *plugin* VST 'secreto' favorito para bajos?",
    categories: ["musica", "produccion", "tecnologia", "arte"],
    createdAt: "2025-08-14T15:00:00Z",
    reactions: {
      like: [{ authorId: 37 }, { authorId: 51 }, { authorId: 16 }],
      love: [{ authorId: 14 }],
      laugh: [],
      wow: [{ authorId: 48 }],
      sad: [],
      angry: []
    },
    comments: [
      {
        id: "c-021",
        authorId: 15,
        content: "Soy ingeniero de sonido y estoy 100% contigo. Lo análogo te da el color, lo digital la flexibilidad. Mi secreto: el *Waves L2* para masterización, es un clásico que no falla.",
        createdAt: "2025-08-14T16:10:00Z"
      },
      {
        id: "c-022",
        authorId: 63,
        content: "¡Grande! Como DJ veo que el público ya no distingue tanto, pero sí valora la calidad. El sonido es el mensaje. Yo mezclo vinilos con *Ableton Live*.",
        createdAt: "2025-08-14T17:55:00Z"
      }
    ]
  },
  {
    id: "post-012",
    authorId: 49,
    content: "Sigo pensando que la inversión masiva en la colonización de Marte es una distracción peligrosa. Tenemos problemas urgentes aquí en la Tierra: cambio climático, pobreza... Como ecólogo, no creo que debamos exportar nuestros problemas a otros planetas antes de solucionarlos en casa. ¿Deberíamos priorizar la Tierra o el espacio?",
    categories: ["ciencia", "astronomia", "ecologia", "politica"],
    createdAt: "2025-08-09T07:30:00Z",
    reactions: {
      like: [{ authorId: 53 }, { authorId: 45 }, { authorId: 16 }],
      love: [],
      laugh: [],
      wow: [],
      sad: [{ authorId: 36 }],
      angry: [{ authorId: 61 }, { authorId: 34 }]
    },
    comments: [
      {
        id: "c-023",
        authorId: 61,
        content: "¡Falso dilema! La investigación espacial produce tecnologías que vuelven a la Tierra (paneles solares, purificación de agua...). Soy ingeniero aeroespacial y digo: ¡Podemos hacer ambas cosas!",
        createdAt: "2025-08-09T09:40:00Z"
      },
      {
        id: "c-024",
        authorId: 37,
        content: "Concuerdo con el autor. Veo que los recursos están pésimamente distribuidos. Es utópico pensar en Marte cuando aquí falta lo básico. Los problemas terrestres son prioridad.",
        createdAt: "2025-08-09T11:05:00Z"
      }
    ]
  },
  {
    id: "post-013",
    authorId: 44,
    content: "Los últimos avances en la técnica CRISPR para la edición genética son prometedores, pero la ética de la biología molecular avanza más rápido que la ley. Abrir la puerta a la modificación de la línea germinal humana es un riesgo que debemos debatir seriamente. Como genetista, me emociona la ciencia, pero me preocupa su mal uso.",
    categories: ["biologia", "ciencia", "salud", "etica"],
    createdAt: "2025-08-18T14:15:00Z",
    reactions: {
      like: [{ authorId: 20 }, { authorId: 43 }, { authorId: 57 }],
      love: [],
      laugh: [],
      wow: [{ authorId: 24 }],
      sad: [{ authorId: 26 }],
      angry: []
    },
    comments: [
      {
        id: "c-025",
        authorId: 26,
        content: "¡Es un campo minado ético! Y veo el potencial para erradicar enfermedades, pero el riesgo de 'bebés de diseño' es real. Necesitamos una regulación global URGENTE.",
        createdAt: "2025-08-18T16:00:00Z"
      },
      {
        id: "c-026",
        authorId: 74,
        content: "El miedo nunca debe frenar el avance científico. Los beneficios para la salud son inconmensurables. Yo, como enfermera, preferiría un mundo sin tantas enfermedades genéticas.",
        createdAt: "2025-08-18T17:35:00Z"
      }
    ]
  },
  {
    id: "post-014",
    authorId: 69,
    content: "Es increíble cómo la gente gasta fortunas en el 'nuevo' superalimento X por puro *marketing*. No hay evidencia científica *robusta* que justifique esos precios. Como nutricionista, lo digo: una manzana sigue siendo más útil que cualquier baya exótica de moda. Pero, claro, ¿quién quiere 'simple' cuando puede tener 'detox milagroso'?",
    categories: ["salud", "ciencia", "nutricion", "polemica"],
    createdAt: "2025-08-11T10:20:00Z",
    reactions: {
      like: [{ authorId: 27 }, { authorId: 54 }],
      love: [],
      laugh: [{ authorId: 46 }],
      wow: [],
      sad: [],
      angry: [{ authorId: 83 }]
    },
    comments: [
      {
        id: "c-027",
        authorId: 83,
        content: "Que alguien avise al nutricionista que la ciencia avanza. Hay estudios serios. ¿O acaso no leyó el meta-análisis de la Universidad de Copenhague? Busque 'beneficios X berry' en Google.",
        createdAt: "2025-08-11T12:00:00Z"
      },
      {
        id: "c-028",
        authorId: 46,
        content: "Tranquilo. Es solo gente buscando soluciones mágicas. Supongo que su 'evidencia robusta' está en la sección de 'Consejos de la Abuela'. Si no es un estudio doble ciego publicado en *The Lancet*, no existe, ¿verdad? 🙄",
        createdAt: "2025-08-11T13:45:00Z"
      }
    ]
  },
  {
    id: "post-015",
    authorId: 53,
    content: "Los coches autónomos son la próxima catástrofe social. Entregar el juicio moral de un accidente a un algoritmo es una receta para el caos. El 'Problema del Tranvía' no se resuelve con más líneas de código. ¿De verdad creen que un ingeniero de software de 25 años es más apto para decidir quién vive o muere que un conductor humano?",
    categories: ["tecnologia", "etica", "ia", "polemica"],
    createdAt: "2025-08-25T11:50:00Z",
    reactions: {
      like: [{ authorId: 18 }, { authorId: 36 }],
      love: [],
      laugh: [],
      wow: [{ authorId: 15 }],
      sad: [],
      angry: [{ authorId: 51 }, { authorId: 76 }]
    },
    comments: [
      {
        id: "c-029",
        authorId: 76,
        content: "Qué visión tan corta. La tasa de accidentes por humanos es patética. ¿Prefiere un conductor borracho o un sistema que tiene millones de horas de simulación? Ya se demostró que salvan más vidas.",
        createdAt: "2025-08-25T13:30:00Z"
      },
      {
        id: "c-030",
        authorId: 51,
        content: "Es sarcástico, ¿no? Si su principal preocupación es el 'juicio moral', supongo que propone prohibir los aviones que usan pilotos automáticos... que son *muchísimo* más complejos. Soy científico de datos; el miedo a la IA es puro melodrama.",
        createdAt: "2025-08-25T15:05:00Z"
      }
    ]
  },
  {
    id: "post-016",
    authorId: 10,
    content: "Es un chiste que los museos occidentales sigan aferrándose a artefactos y reliquias robados durante la época colonial. No son 'tesoros universales'; son propiedad cultural de las naciones que fueron saqueadas. Como curadora de arte no colonial, me da vergüenza la hipocresía. ¿Por qué el 'Museo Británico' aún tiene el mármol del Partenón?",
    categories: ["historia", "cultura", "etica", "polemica"],
    createdAt: "2025-08-03T17:10:00Z",
    reactions: {
      like: [{ authorId: 34 }, { authorId: 59 }, { authorId: 68 }],
      love: [{ authorId: 13 }],
      laugh: [],
      wow: [],
      sad: [],
      angry: [{ authorId: 22 }]
    },
    comments: [
      {
        id: "c-031",
        authorId: 22,
        content: "Ay, la 'justicia histórica' con 200 años de retraso. El arte está mejor conservado y es más accesible donde está ahora. ¿O de verdad cree que esos países tienen la infraestructura para proteger algo así? Lean sobre la Ley de Adquisición de 1816.",
        createdAt: "2025-08-04T09:00:00Z"
      },
      {
        id: "c-032",
        authorId: 68,
        content: "El argumento de 'mejor conservado' es la excusa más elitista que he oído. Como arqueólogo, te digo que la procedencia legal y ética debería primar sobre la conveniencia museística. Dejen de justificar el robo con ese paternalismo.",
        createdAt: "2025-08-04T11:20:00Z"
      }
    ]
  },
  {
    id: "post-017",
    authorId: 32,
    content: "La Renta Básica Universal (RBU) es la solución que el capitalismo no quiere admitir que necesita. El trabajo se automatizará, la desigualdad es insostenible. Dar dinero incondicionalmente a la gente no es 'regalar', es invertir en la economía del futuro. ¿O preferimos tener una masa de gente desempleada y sin poder adquisitivo? Como economista, lo veo clarísimo.",
    categories: ["economia", "politica", "futuro", "polemica"],
    createdAt: "2025-08-19T08:45:00Z",
    reactions: {
      like: [{ authorId: 7 }, { authorId: 14 }, { authorId: 42 }],
      love: [],
      laugh: [{ authorId: 80 }],
      wow: [],
      sad: [],
      angry: [{ authorId: 69 }]
    },
    comments: [
      {
        id: "c-033",
        authorId: 69,
        content: "Claro, 'invertir'. Y yo soy la Reina de Inglaterra. ¿Quién paga eso? Aumentar impuestos a la clase media para subvencionar la pereza. Y el mercado laboral se desintegra. Léase el fracaso del experimento en Finlandia.",
        createdAt: "2025-08-19T10:15:00Z"
      },
      {
        id: "c-034",
        authorId: 80,
        content: "El 'economista' de turno que cree que el dinero cae de los árboles. La RBU suena genial en un seminario universitario, pero en la práctica genera inflación y quita incentivos. Supongo que su 'solución' es que todos nos volvamos poetas y vivamos del arte subvencionado. 😂",
        createdAt: "2025-08-19T12:00:00Z"
      }
    ]
  },
  {
    id: "post-018",
    authorId: 58,
    content: "El modelo educativo tradicional, enfocado en memorizar y hacer exámenes estandarizados, está obsoleto. Estamos educando 'máquinas de prueba' en lugar de pensadores críticos. La educación debe priorizar la creatividad y la resolución de problemas. Como pedagoga, creo que el sistema mata la curiosidad innata de los niños.",
    categories: ["educacion", "sociedad", "polemica", "aprendizaje"],
    createdAt: "2025-08-07T13:00:00Z",
    reactions: {
      like: [{ authorId: 11 }, { authorId: 43 }, { authorId: 78 }],
      love: [{ authorId: 9 }],
      laugh: [],
      wow: [],
      sad: [],
      angry: [{ authorId: 5 }, { authorId: 28 }]
    },
    comments: [
      {
        id: "c-035",
        authorId: 5,
        content: "¡Qué bonito suena el idealismo! Pero sin bases sólidas (memorizar, repetición), no hay pensamiento crítico. ¿Quiere que el próximo cirujano 'sea creativo' en lugar de saber la anatomía? Hay que ser serios. [Artículo de opinión: thetimes.co.uk/editorial/standards-not-creativity-2025].",
        createdAt: "2025-08-07T14:45:00Z"
      },
      {
        id: "c-036",
        authorId: 28,
        content: "Típico lamento de pedagogo que no valora la disciplina. La vida es un examen constante. ¿O acaso el mercado laboral acepta 'pensamiento crítico' sin la habilidad de entregar resultados? Sarcasmo aparte, la estructura es necesaria.",
        createdAt: "2025-08-07T16:20:00Z"
      }
    ]
  },
  {
    id: "post-019",
    authorId: 14,
    content: "Acabo de terminar mi investigación sobre la comunicación química entre hongos y plantas. Es fascinante cómo las redes de micorrizas pueden conectar bosques enteros, compartiendo nutrientes e información. Literalmente, internet natural 🍄🌲 #Biología",
    categories: ["biología", "ecología", "investigación"],
    createdAt: "2025-07-15T14:23:00Z",
    reactions: {
      like: [{ authorId: 32 }, { authorId: 56 }, { authorId: 71 }, { authorId: 43 }, { authorId: 67 }, { authorId: 19 }],
      love: [{ authorId: 25 }, { authorId: 78 }, { authorId: 41 }],
      laugh: [],
      wow: [{ authorId: 52 }, { authorId: 83 }, { authorId: 16 }, { authorId: 38 }],
      sad: [],
      angry: []
    },
    comments: [
      {
        id: "c-037",
        authorId: 43,
        content: "¿Has leído los estudios de Suzanne Simard? Su trabajo sobre la 'wood wide web' es increíble",
        createdAt: "2025-07-15T15:12:00Z"
      },
      {
        id: "c-038",
        authorId: 78,
        content: "Esto podría revolucionar cómo entendemos la conservación de ecosistemas",
        createdAt: "2025-07-15T16:45:00Z"
      },
      {
        id: "c-039",
        authorId: 14,
        content: "¡Sí! De hecho, su trabajo inspiró parte de mi metodología. Es una pionera en el campo",
        createdAt: "2025-07-15T17:20:00Z"
      }
    ]
  },
  {
    id: "post-020",
    authorId: 61,
    content: "Controversial take: Los libros de historia que enseñamos en secundaria siguen perpetuando el mito del 'descubrimiento' de América. No se puede 'descubrir' un continente habitado por millones de personas. Es hora de cambiar la narrativa colonialista 📚⚖️",
    categories: ["historia", "educación", "decolonización"],
    createdAt: "2025-08-07T10:35:00Z",
    reactions: {
      like: [{ authorId: 42 }, { authorId: 37 }, { authorId: 74 }, { authorId: 29 }, { authorId: 85 }, { authorId: 13 }, { authorId: 58 }],
      love: [{ authorId: 65 }, { authorId: 22 }, { authorId: 46 }],
      laugh: [],
      wow: [{ authorId: 31 }, { authorId: 69 }],
      sad: [{ authorId: 17 }, { authorId: 54 }],
      angry: [{ authorId: 48 }, { authorId: 76 }, { authorId: 12 }]
    },
    comments: [
      {
        id: "c-040",
        authorId: 48,
        content: "No exageremos. Fue un encuentro de culturas, con aspectos positivos y negativos",
        createdAt: "2025-08-07T11:22:00Z"
      },
      {
        id: "c-041",
        authorId: 74,
        content: "'Encuentro' es un eufemismo para genocidio y esclavización sistemática. Los hechos son claros",
        createdAt: "2025-08-07T12:15:00Z"
      },
      {
        id: "c-042",
        authorId: 61,
        content: "El punto es enseñar historia completa, no solo la versión de los vencedores. Nuestros estudiantes merecen contexto real",
        createdAt: "2025-08-07T13:40:00Z"
      }
    ]
  },
  {
    id: "post-021",
    authorId: 33,
    content: "Llevo 20 años como musicólogo y todavía me emociona descubrir cómo Bach escondía mensajes matemáticos en sus composiciones. El Arte de la Fuga es prácticamente un tratado de geometría musical 🎼🔢 #MúsicaClásica",
    categories: ["música", "matemáticas", "arte"],
    createdAt: "2025-08-18T19:48:00Z",
    reactions: {
      like: [{ authorId: 14 }, { authorId: 56 }, { authorId: 27 }, { authorId: 49 }, { authorId: 82 }, { authorId: 35 }],
      love: [{ authorId: 61 }, { authorId: 19 }, { authorId: 73 }, { authorId: 40 }],
      laugh: [],
      wow: [{ authorId: 52 }, { authorId: 66 }, { authorId: 81 }, { authorId: 24 }, { authorId: 59 }],
      sad: [],
      angry: []
    },
    comments: [
      {
        id: "c-043",
        authorId: 52,
        content: "¿Podrías hacer un post explicando algún ejemplo específico? Me fascina esa conexión música-matemáticas",
        createdAt: "2025-08-18T20:25:00Z"
      },
      {
        id: "c-044",
        authorId: 27,
        content: "Los fractales en la música de Bach son mind-blowing cuando los visualizas",
        createdAt: "2025-08-18T21:12:00Z"
      },
      {
        id: "c-045",
        authorId: 33,
        content: "Buena idea! Haré una serie sobre patrones matemáticos en música barroca",
        createdAt: "2025-08-18T21:45:00Z"
      }
    ]
  },
  {
    id: "post-022",
    authorId: 47,
    content: "Unpopular opinion en física: El multiverso es la nueva 'teoría de cuerdas' - suena fascinante pero es prácticamente imposible de probar. Estamos gastando recursos en especulación matemática cuando tenemos problemas reales que resolver 🔬⚛️",
    categories: ["física", "ciencia", "opinión"],
    createdAt: "2025-07-31T08:15:00Z",
    reactions: {
      like: [{ authorId: 23 }, { authorId: 37 }, { authorId: 68 }, { authorId: 15 }, { authorId: 84 }],
      love: [{ authorId: 42 }],
      laugh: [{ authorId: 28 }],
      wow: [{ authorId: 14 }, { authorId: 56 }, { authorId: 75 }],
      sad: [{ authorId: 39 }],
      angry: [{ authorId: 51 }, { authorId: 77 }, { authorId: 63 }, { authorId: 20 }]
    },
    comments: [
      {
        id: "c-046",
        authorId: 51,
        content: "Completamente en desacuerdo. La investigación fundamental siempre ha llevado a descubrimientos inesperados",
        createdAt: "2025-07-31T09:32:00Z"
      },
      {
        id: "c-047",
        authorId: 15,
        content: "Pero hay que ser realistas con el presupuesto científico. No podemos financiar infinitas especulaciones",
        createdAt: "2025-07-31T10:18:00Z"
      },
      {
        id: "c-048",
        authorId: 77,
        content: "La teoría cuántica también parecía 'imposible de probar' en su momento. Cuidado con limitar la exploración",
        createdAt: "2025-07-31T11:05:00Z"
      }
    ]
  },
  {
    id: "post-023",
    authorId: 23,
    content: "TIL que las abejas pueden reconocer rostros humanos y recordar quién las trata bien. Su cerebro tiene solo 960,000 neuronas vs nuestros 86 mil millones, pero son increíblemente eficientes procesando información visual 🐝🧠 #Neurobiología",
    categories: ["biología", "neurociencia", "insectos"],
    createdAt: "2025-08-22T16:33:00Z",
    reactions: {
      like: [{ authorId: 14 }, { authorId: 33 }, { authorId: 61 }, { authorId: 56 }, { authorId: 29 }, { authorId: 45 }, { authorId: 80 }, { authorId: 18 }],
      love: [{ authorId: 19 }, { authorId: 34 }, { authorId: 67 }, { authorId: 41 }],
      laugh: [],
      wow: [{ authorId: 52 }, { authorId: 78 }, { authorId: 26 }, { authorId: 60 }, { authorId: 83 }, { authorId: 36 }],
      sad: [],
      angry: []
    },
    comments: [
      {
        id: "c-049",
        authorId: 34,
        content: "Esto explica por qué las abejas de mi jardín parecen conocerme. Pensé que era mi imaginación",
        createdAt: "2025-08-22T17:15:00Z"
      },
      {
        id: "c-050",
        authorId: 78,
        content: "La eficiencia computacional de los cerebros pequeños es algo que deberíamos estudiar más para IA",
        createdAt: "2025-08-22T18:22:00Z"
      },
      {
        id: "c-051",
        authorId: 72,
        content: "Exacto! La bioinspiración está revolucionando el diseño de algoritmos. Menos es más",
        createdAt: "2025-08-22T19:10:00Z"
      }
    ]
  },
  {
    id: "post-024",
    authorId: 58,
    content: "Nuevo estudio demuestra que el trabajo remoto reduce la productividad en un 13%. Pero claro, sigamos creyendo que trabajar en pijama desde la cama es el futuro 🙄 Link: nature.com/articles/remote-work-productivity-2025 #RemoteWork",
    categories: ["trabajo", "productividad", "estudios"],
    createdAt: "2025-08-05T11:20:00Z",
    reactions: {
      like: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }],
      love: [],
      laugh: [{ authorId: 26 }, { authorId: 69 }],
      wow: [{ authorId: 15 }],
      sad: [{ authorId: 56 }, { authorId: 29 }],
      angry: [{ authorId: 37 }, { authorId: 74 }, { authorId: 42 }, { authorId: 65 }, { authorId: 22 }, { authorId: 81 }]
    },
    comments: [
      {
        id: "c-052",
        authorId: 37,
        content: "Qué conveniente que este 'estudio' salga justo cuando las empresas quieren forzar el regreso a oficina. ¿Quién lo financió? 🤔",
        createdAt: "2025-08-05T12:45:00Z"
      },
      {
        id: "c-053",
        authorId: 58,
        content: "MIT y Stanford. Pero supongo que también están comprados por 'big office' ¿verdad? 😏",
        createdAt: "2025-08-05T13:12:00Z"
      },
      {
        id: "c-054",
        authorId: 74,
        content: "Curioso cómo ignoran que Microsoft reportó 75% aumento en productividad con trabajo remoto. Cherry picking much? 📊",
        createdAt: "2025-08-05T13:48:00Z"
      },
      {
        id: "c-055",
        authorId: 31,
        content: "Microsoft vende software para trabajo remoto. Obvio que van a decir que funciona 🤦‍♂️",
        createdAt: "2025-08-05T14:25:00Z"
      }
    ]
  },
  {
    id: "post-025",
    authorId: 29,
    content: "Meta-análisis de 50 estudios confirma: los videojuegos violentos NO causan agresión en la vida real. Pero seguro los medios van a seguir vendiendo el pánico moral de siempre 🎮 Fuente: journals.sagepub.com/gaming-violence-meta-2025",
    categories: ["psicología", "videojuegos", "sociedad"],
    createdAt: "2025-07-22T20:15:00Z",
    reactions: {
      like: [{ authorId: 19 }, { authorId: 56 }, { authorId: 78 }, { authorId: 41 }, { authorId: 63 }, { authorId: 52 }, { authorId: 73 }],
      love: [{ authorId: 85 }, { authorId: 16 }, { authorId: 24 }],
      laugh: [{ authorId: 36 }, { authorId: 69 }],
      wow: [{ authorId: 14 }, { authorId: 33 }],
      sad: [],
      angry: [{ authorId: 45 }, { authorId: 67 }, { authorId: 18 }]
    },
    comments: [
      {
        id: "c-056",
        authorId: 45,
        content: "¿En serio? Explícame entonces por qué cada tirador escolar tenía Call of Duty en su historial",
        createdAt: "2025-07-22T21:20:00Z"
      },
      {
        id: "c-057",
        authorId: 78,
        content: "Correlación ≠ causación. También tenían cereal en el desayuno. ¿Culpamos a Kellogs? 🥣",
        createdAt: "2025-07-22T21:45:00Z"
      },
      {
        id: "c-058",
        authorId: 67,
        content: "Que fácil es ignorar el deterioro moral cuando tienes estudios pagados por la industria del gaming",
        createdAt: "2025-07-22T22:12:00Z"
      },
      {
        id: "c-059",
        authorId: 29,
        content: "'Deterioro moral' dice el que probablemente ve Netflix 6 horas al día. El sesgo de confirmación es real 📺",
        createdAt: "2025-07-22T22:35:00Z"
      }
    ]
  },
  {
    id: "post-026",
    authorId: 13,
    content: "Estudio longitudinal de 20 años demuestra que la homeopatía tiene la misma eficacia que el placebo. Agua cara, básicamente. Pero hey, al menos tu billetera adelgaza 💸 Paper: bmj.com/homeopathy-efficacy-review-2025",
    categories: ["medicina", "pseudociencia", "salud"],
    createdAt: "2025-08-11T16:42:00Z",
    reactions: {
      like: [{ authorId: 23 }, { authorId: 47 }, { authorId: 14 }, { authorId: 37 }, { authorId: 58 }, { authorId: 71 }, { authorId: 42 }],
      love: [{ authorId: 61 }, { authorId: 33 }],
      laugh: [{ authorId: 26 }, { authorId: 76 }, { authorId: 48 }, { authorId: 12 }, { authorId: 69 }],
      wow: [{ authorId: 52 }],
      sad: [{ authorId: 39 }],
      angry: [{ authorId: 54 }, { authorId: 60 }, { authorId: 75 }, { authorId: 17 }, { authorId: 44 }]
    },
    comments: [
      {
        id: "c-060",
        authorId: 54,
        content: "Típico reduccionismo científico. La medicina holística funciona desde hace milenios, pero claro, si no lo puede medir tu microscopio no existe 🙄",
        createdAt: "2025-08-11T17:30:00Z"
      },
      {
        id: "c-061",
        authorId: 23,
        content: "'Funciona desde hace milenios' como los sacrificios humanos para que llueva. Antiguo ≠ efectivo",
        createdAt: "2025-08-11T18:15:00Z"
      },
      {
        id: "c-062",
        authorId: 60,
        content: "Big Pharma financiando estudios anti-homeopatía. Obvio que van a desacreditar la competencia 💊💰",
        createdAt: "2025-08-11T18:48:00Z"
      },
      {
        id: "c-063",
        authorId: 83,
        content: "Claro, porque vender agua a 50€ el frasco no es negocio para nada... La proyección es real aquí",
        createdAt: "2025-08-11T19:22:00Z"
      }
    ]
  },
  {
    id: "post-027",
    authorId: 40,
    content: "Investigación del IPCC revela que las emisiones individuales son irrelevantes comparadas con las corporativas. Pero sigamos sintiéndonos culpables por usar pajitas de plástico mientras ExxonMobil quema el planeta 🔥🌍 Source: ipcc.ch/corporate-emissions-2025",
    categories: ["clima", "ambiente", "política"],
    createdAt: "2025-07-18T13:55:00Z",
    reactions: {
      like: [{ authorId: 37 }, { authorId: 74 }, { authorId: 29 }, { authorId: 65 }, { authorId: 22 }, { authorId: 61 }, { authorId: 42 }, { authorId: 85 }],
      love: [{ authorId: 19 }, { authorId: 56 }, { authorId: 78 }],
      laugh: [{ authorId: 24 }, { authorId: 36 }],
      wow: [{ authorId: 52 }, { authorId: 14 }, { authorId: 33 }],
      sad: [{ authorId: 39 }, { authorId: 17 }, { authorId: 54 }],
      angry: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 84 }]
    },
    comments: [
      {
        id: "c-064",
        authorId: 31,
        content: "Qué conveniente. Ahora resulta que la responsabilidad individual no importa. Mentalidad de víctima nivel experto 👏",
        createdAt: "2025-07-18T14:40:00Z"
      },
      {
        id: "c-065",
        authorId: 74,
        content: "71% de emisiones vienen de 100 empresas. Pero claro, el problema soy yo comprando aguacates 🥑",
        createdAt: "2025-07-18T15:15:00Z"
      },
      {
        id: "c-066",
        authorId: 48,
        content: "Las empresas producen lo que la gente consume. Somos nosotros los que creamos la demanda, no al revés",
        createdAt: "2025-07-18T15:52:00Z"
      },
      {
        id: "c-067",
        authorId: 40,
        content: "Ah sí, porque todos tenemos el lujo de elegir. No como si hubiera oligopolios y lobbying sistemático 🤡",
        createdAt: "2025-07-18T16:28:00Z"
      }
    ]
  },
  {
    id: "post-028",
    authorId: 25,
    content: "Nuevo paper demuestra que la inteligencia artificial ya supera a radiólogos en detectar cáncer. Pero tranquilos, seguro los médicos van a seguir cobrando 200€ por 'interpretar' lo que la máquina ya diagnosticó 🤖💰 Link: lancet.com/ai-radiology-superiority-2025",
    categories: ["inteligencia artificial", "medicina", "tecnología"],
    createdAt: "2025-08-14T09:33:00Z",
    reactions: {
      like: [{ authorId: 56 }, { authorId: 78 }, { authorId: 29 }, { authorId: 47 }, { authorId: 83 }, { authorId: 58 }],
      love: [{ authorId: 85 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }, { authorId: 76 }],
      wow: [{ authorId: 52 }, { authorId: 14 }, { authorId: 33 }, { authorId: 61 }],
      sad: [{ authorId: 39 }, { authorId: 17 }],
      angry: [{ authorId: 23 }, { authorId: 42 }, { authorId: 71 }, { authorId: 45 }, { authorId: 67 }, { authorId: 18 }]
    },
    comments: [
      {
        id: "c-068",
        authorId: 23,
        content: "Reduciris a la medicina a un algoritmo demuestra tu completa ignorancia sobre lo que hacemos. La IA no puede sostener la mano de un paciente asustado",
        createdAt: "2025-08-14T10:15:00Z"
      },
      {
        id: "c-069",
        authorId: 78,
        content: "Nadie habla de reemplazar la empatía. Pero ¿por qué no usar herramientas que salvan más vidas? El ego médico mata",
        createdAt: "2025-08-14T10:48:00Z"
      },
      {
        id: "c-070",
        authorId: 71,
        content: "Cuando la IA se equivoque y mate a alguien, ¿a quién vamos a demandar? ¿A ChatGPT? La responsabilidad legal existe por algo",
        createdAt: "2025-08-14T11:22:00Z"
      },
      {
        id: "c-071",
        authorId: 25,
        content: "Cuando los médicos se equivocan (3ra causa de muerte en EEUU) tampoco pasa nada. Al menos la IA no tiene mal día por divorcio",
        createdAt: "2025-08-14T12:05:00Z"
      }
    ]
  },
  {
    id: "p-029",
    authorId: 64,
    content: "Como economista, les digo que subir el salario mínimo a 1500 soles destruirá las MYPES y aumentará el desempleo. Las buenas intenciones no cambian las leyes económicas básicas. Miren lo que pasó en Seattle y San Francisco 📊💼 #EconomíaPerú #SalarioMínimo",
    categories: ["economía", "política", "empleo"],
    createdAt: "2025-08-08T15:20:00Z",
    reactions: {
      like: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }],
      love: [{ authorId: 47 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }],
      wow: [{ authorId: 15 }, { authorId: 52 }],
      sad: [{ authorId: 37 }, { authorId: 74 }, { authorId: 42 }],
      angry: [{ authorId: 22 }, { authorId: 65 }, { authorId: 29 }, { authorId: 56 }, { authorId: 78 }, { authorId: 85 }, { authorId: 19 }]
    },
    comments: [
      {
        id: "c-072",
        authorId: 22,
        content: "Ah claro, porque pagar sueldos de hambre es 'ley económica básica'. Qué conveniente para los empresarios que pueden seguir explotando trabajadores 🙄",
        createdAt: "2025-08-08T16:45:00Z"
      },
      {
        id: "c-073",
        authorId: 48,
        content: "La realidad es que si una empresa no puede pagar salarios más altos sin quebrar, mejor que cierre. No es sostenible",
        createdAt: "2025-08-08T17:12:00Z"
      },
      {
        id: "c-074",
        authorId: 65,
        content: "'Miren Seattle y San Francisco' dice el que probablemente nunca ha salido de Lima Cercado. Esos lugares tienen economías completamente diferentes, genio 🤡",
        createdAt: "2025-08-08T17:38:00Z"
      },
      {
        id: "c-075",
        authorId: 31,
        content: "Los principios económicos son universales. Subir artificialmente el costo laboral siempre genera desempleo, es microeconomía 101",
        createdAt: "2025-08-08T18:05:00Z"
      },
      {
        id: "c-076",
        authorId: 78,
        content: "Qué casualidad que todos los 'economistas' que se oponen al salario mínimo trabajan para think tanks financiados por empresarios. Pura coincidencia, seguro 💰",
        createdAt: "2025-08-08T18:32:00Z"
      },
      {
        id: "c-077",
        authorId: 76,
        content: "Ad hominem level: experto. Refuta los argumentos, no ataques al mensajero",
        createdAt: "2025-08-08T19:00:00Z"
      },
      {
        id: "c-078",
        authorId: 29,
        content: "930 soles no alcanza ni para alquiler en Lima. Pero claro, sigamos priorizando las ganancias empresariales sobre la dignidad humana. Capitalismo salvaje 101 👏",
        createdAt: "2025-08-08T19:25:00Z"
      },
      {
        id: "c-079",
        authorId: 64,
        content: "Y con 0 soles de desempleo van a vivir mejor? El mercado laboral no es caridad, es oferta y demanda",
        createdAt: "2025-08-08T19:50:00Z"
      }
    ]
  },
  {
    id: "p-030",
    authorId: 39,
    content: "La informalidad en Perú (70%+) no es un problema cultural, es el resultado directo de un Estado ineficiente y burocrático que hace imposible formalizarse. Simplificar trámites y reducir impuestos haría más que todas las fiscalizaciones juntas 🏢📋 #InformalidadPerú",
    categories: ["economía", "política", "informalidad"],
    createdAt: "2025-08-16T11:30:00Z",
    reactions: {
      like: [{ authorId: 64 }, { authorId: 31 }, { authorId: 47 }, { authorId: 58 }, { authorId: 83 }, { authorId: 15 }, { authorId: 52 }, { authorId: 76 }],
      love: [{ authorId: 48 }, { authorId: 12 }, { authorId: 84 }],
      laugh: [{ authorId: 26 }],
      wow: [{ authorId: 14 }, { authorId: 33 }],
      sad: [{ authorId: 17 }, { authorId: 54 }],
      angry: [{ authorId: 23 }, { authorId: 42 }, { authorId: 37 }, { authorId: 74 }, { authorId: 22 }, { authorId: 65 }]
    },
    comments: [
      {
        id: "c-080",
        authorId: 23,
        content: "Típico discurso neoliberal: 'el Estado es el problema'. La informalidad existe porque la gente evade impuestos y no quiere contribuir con el país. Mentalidad viva 🙄",
        createdAt: "2025-08-16T12:15:00Z"
      },
      {
        id: "c-081",
        authorId: 64,
        content: "Claro, porque gastarse 6 meses y 2000 soles para abrir una bodega es totalmente razonable. La culpa es de la gente, obvio",
        createdAt: "2025-08-16T12:42:00Z"
      },
      {
        id: "c-082",
        authorId: 42,
        content: "Reducir impuestos = menos presupuesto para salud, educación, infraestructura. Pero hey, que el mercado libre lo solucione todo, ¿no? 📚🏥",
        createdAt: "2025-08-16T13:18:00Z"
      },
      {
        id: "c-083",
        authorId: 47,
        content: "Base tributaria del 30% vs 100%. Matemáticas básicas: más gente pagando menos = más recaudación total",
        createdAt: "2025-08-16T13:45:00Z"
      },
      {
        id: "c-084",
        authorId: 37,
        content: "Ah sí, porque los países nórdicos con alta formalidad tienen impuestos bajísimos... Wait. Suecia, Dinamarca, Noruega tienen impuestos altísimos y cero informalidad 🤔",
        createdAt: "2025-08-16T14:12:00Z"
      },
      {
        id: "c-085",
        authorId: 58,
        content: "También tienen instituciones que funcionan y no te roban el 80% en corrupción. Falsa equivalencia much?",
        createdAt: "2025-08-16T14:38:00Z"
      },
      {
        id: "c-086",
        authorId: 74,
        content: "Siempre la misma receta mágica: bajar impuestos y desregular. Si funcionara tan bien, ya hubiéramos solucionado todos los problemas hace décadas 🪄",
        createdAt: "2025-08-16T15:05:00Z"
      },
      {
        id: "c-087",
        authorId: 39,
        content: "Mira Chile, Colombia, Uruguay. Los países que simplificaron trámites redujeron informalidad. Pero claro, ignoremos los datos que no nos gustan",
        createdAt: "2025-08-16T15:32:00Z"
      },
      {
        id: "c-088",
        authorId: 65,
        content: "El problema no es el Estado, es que las empresas informales no quieren pagar beneficios laborales ni seguros. Puro egoísmo disfrazado de 'eficiencia' 💼",
        createdAt: "2025-08-16T16:00:00Z"
      }
    ]
  },
  {
    id: "p-031",
    authorId: 27,
    content: "Oferta laboral real que vi hoy: 'Practicante de marketing - Requisitos: 3 años de experiencia en redes sociales, manejo avanzado de Adobe Suite, inglés fluido. Sueldo: 800 soles' 🤡 ¿En qué momento ser practicante requiere más experiencia que algunos gerentes? #MercadoLaboral",
    categories: ["trabajo", "practicantes", "experiencia"],
    createdAt: "2025-08-19T14:25:00Z",
    reactions: {
      like: [{ authorId: 56 }, { authorId: 29 }, { authorId: 78 }, { authorId: 19 }, { authorId: 85 }, { authorId: 74 }, { authorId: 42 }, { authorId: 65 }],
      love: [{ authorId: 22 }, { authorId: 37 }, { authorId: 61 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }, { authorId: 36 }, { authorId: 73 }, { authorId: 24 }],
      wow: [{ authorId: 52 }, { authorId: 14 }, { authorId: 33 }],
      sad: [{ authorId: 39 }, { authorId: 17 }, { authorId: 54 }, { authorId: 60 }],
      angry: [{ authorId: 45 }, { authorId: 67 }, { authorId: 18 }, { authorId: 44 }]
    },
    comments: [
      {
        id: "c-089",
        authorId: 56,
        content: "Y después se quejan de que 'los jóvenes no quieren trabajar'. Obvio, si piden 5 años de experiencia para cambiar el agua del dispenser 💧",
        createdAt: "2025-08-19T15:10:00Z"
      },
      {
        id: "c-090",
        authorId: 31,
        content: "Dejen de llorar y consíganse experiencia haciendo trabajos freelance, proyectos personales, voluntariado. Hay mil formas de demostrar competencia sin ser empleado",
        createdAt: "2025-08-19T15:35:00Z"
      },
      {
        id: "c-091",
        authorId: 78,
        content: "'Consíganse experiencia gratis' - El sueño húmedo de todo empresario. Trabajo sin pagar, que genial concepto 👏",
        createdAt: "2025-08-19T16:02:00Z"
      },
      {
        id: "c-092",
        authorId: 48,
        content: "La competencia está dura, empresas pueden darse el lujo de ser selectivas. Adapténse o quédense sin trabajo. Darwin laboral 🦕",
        createdAt: "2025-08-19T16:28:00Z"
      },
      {
        id: "c-093",
        authorId: 74,
        content: "'Darwin laboral' dice el que probablemente entró a su empresa cuando su papá conocía al gerente. Meritocracia selectiva much? 🎭",
        createdAt: "2025-08-19T16:55:00Z"
      },
      {
        id: "c-094",
        authorId: 84,
        content: "Si no cumplen los requisitos, no apliquen. Simple. Las empresas ponen estándares altos porque pueden. Oferta y demanda básica",
        createdAt: "2025-08-19T17:20:00Z"
      },
      {
        id: "c-095",
        authorId: 37,
        content: "Claro, porque 'estándares altos' es pedir experiencia senior para hacer copy-paste en Excel. La lógica empresarial moderna es fascinante 📊",
        createdAt: "2025-08-19T17:45:00Z"
      },
      {
        id: "c-096",
        authorId: 27,
        content: "Lo mejor es que luego contratan al sobrino del jefe que no sabe ni abrir Word. Pero hey, la 'experiencia' era súper importante 🤷‍♂️",
        createdAt: "2025-08-19T18:12:00Z"
      }
    ]
  },
  {
    id: "p-032",
    authorId: 51,
    content: "Generación de cristal descubierta: Ahora resulta que pedir 2-3 años de experiencia para un puesto junior es 'imposible' y 'injusto'. En mis tiempos empezabas desde abajo y te ganabas tu lugar. Nadie les debe nada 👴 #MillennialsVsRealidad #TrabajoReal",
    categories: ["trabajo", "generaciones", "experiencia"],
    createdAt: "2025-08-21T09:15:00Z",
    reactions: {
      like: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }, { authorId: 47 }],
      love: [{ authorId: 64 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }],
      wow: [{ authorId: 15 }],
      sad: [{ authorId: 17 }],
      angry: [{ authorId: 56 }, { authorId: 29 }, { authorId: 78 }, { authorId: 19 }, { authorId: 85 }, { authorId: 74 }, { authorId: 42 }, { authorId: 65 }, { authorId: 22 }, { authorId: 37 }]
    },
    comments: [
      {
        id: "c-097",
        authorId: 29,
        content: "Ah sí, 'en tus tiempos' cuando una casa costaba 3 sueldos y podías mantener familia con un trabajo sin título. Qué tiempos aquellos, abuelo 🏠💰",
        createdAt: "2025-08-21T10:30:00Z"
      },
      {
        id: "c-098",
        authorId: 76,
        content: "Y también cuando no había internet ni competencia global. El contexto cambió, pero los principios siguen igual: trabajo duro da resultados",
        createdAt: "2025-08-21T11:05:00Z"
      },
      {
        id: "c-099",
        authorId: 78,
        content: "🎻 Smallest violin playing for the boomer que tuvo trabajo vitalicio en una época dorada y ahora predica sobre 'ganarse el lugar' 👴",
        createdAt: "2025-08-21T11:32:00Z"
      },
      {
        id: "c-100",
        authorId: 48,
        content: "En lugar de llorar sobre el pasado, enfoquénse en desarrollar skills valiosas. El mercado premia competencia, no quejas",
        createdAt: "2025-08-21T12:00:00Z"
      },
      {
        id: "c-101",
        authorId: 74,
        content: "'Skills valiosas' como 20 años de experiencia para ser asistente administrativo? O hablar 5 idiomas para contestar emails? Súper razonable 📧🌍",
        createdAt: "2025-08-21T12:25:00Z"
      },
      {
        id: "c-102",
        authorId: 31,
        content: "Si no pueden competir, cambien de carrera. Nadie los obliga a aplicar a esos trabajos. Hay sectores que sí valoran talento fresco",
        createdAt: "2025-08-21T12:50:00Z"
      },
      {
        id: "c-103",
        authorId: 37,
        content: "El clasismo disfrazado de 'meritocracia' es hermoso. 'En mis tiempos' cuando papá conseguía trabajo con apretón de manos en el club 🤝🏌️‍♂️",
        createdAt: "2025-08-21T13:15:00Z"
      },
      {
        id: "c-104",
        authorId: 85,
        content: "'Cambien de carrera' - Sí, porque estudiar 5 años para después cambiar de rubro es súper eficiente. Lógica empresarial nivel dios 🎓",
        createdAt: "2025-08-21T13:40:00Z"
      },
      {
        id: "c-105",
        authorId: 51,
        content: "Confirman mi punto. Puras excusas y victimización. En lugar de adaptarse, prefieren quejarse en redes. Generación perdida",
        createdAt: "2025-08-21T14:10:00Z"
      }
    ]
  },
  {
    id: "p-033",
    authorId: 63,
    content: "Alcalde de La Libertad contrata a su hermana como 'asesora' por 15,000 soles mensuales. Su única experiencia: vender tamales en la esquina. Pero hey, al menos tiene 'confianza' en ella 🫔💰 #CorrupciónMunicipal #NepotismoPerú",
    categories: ["corrupción", "política", "nepotismo"],
    createdAt: "2025-08-13T16:40:00Z",
    reactions: {
      like: [{ authorId: 23 }, { authorId: 42 }, { authorId: 37 }, { authorId: 74 }, { authorId: 29 }, { authorId: 56 }, { authorId: 61 }, { authorId: 85 }],
      love: [{ authorId: 19 }, { authorId: 78 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }, { authorId: 36 }, { authorId: 24 }, { authorId: 52 }],
      wow: [{ authorId: 14 }, { authorId: 33 }],
      sad: [{ authorId: 39 }, { authorId: 17 }, { authorId: 54 }, { authorId: 60 }, { authorId: 44 }],
      angry: [{ authorId: 45 }, { authorId: 67 }, { authorId: 18 }, { authorId: 22 }, { authorId: 65 }]
    },
    comments: [
      {
        id: "c-106",
        authorId: 42,
        content: "Esto se soluciona fácil: concursos públicos obligatorios para TODOS los cargos de confianza. CV abierto, evaluación técnica, entrevistas públicas. Transparencia total",
        createdAt: "2025-08-13T17:25:00Z"
      },
      {
        id: "c-107",
        authorId: 48,
        content: "Y dale con la misma cantinela. Todos los políticos roban, siempre ha sido así, siempre será así. Al menos este roba poco y hace obras 🤷‍♂️",
        createdAt: "2025-08-13T17:50:00Z"
      },
      {
        id: "c-108",
        authorId: 74,
        content: "'Al menos roba poco' - El conformismo peruano en una frase. Por eso seguimos en el tercer mundo con esa mentalidad 🇵🇪💩",
        createdAt: "2025-08-13T18:15:00Z"
      },
      {
        id: "c-109",
        authorId: 23,
        content: "Necesitamos una Contraloría con dientes. Auditorías sorpresa, investigaciones patrimoniales automáticas, inhabilitaciones efectivas. Mano dura ya",
        createdAt: "2025-08-13T18:42:00Z"
      },
      {
        id: "c-110",
        authorId: 76,
        content: "Jajaja sí claro, como si la Contraloría no fuera igual de corrupta. Quién controla a los controladores? Es un círculo vicioso sin fin",
        createdAt: "2025-08-13T19:10:00Z"
      },
      {
        id: "c-111",
        authorId: 37,
        content: "Voto electrónico + blockchain para contratos públicos. Todo transparente, inmutable, auditable. La tecnología ya existe, falta voluntad política",
        createdAt: "2025-08-13T19:35:00Z"
      },
      {
        id: "c-112",
        authorId: 31,
        content: "Blockchain para todo, la solución mágica del siglo XXI. Como si los corruptos no fueran a encontrar nuevas formas de robar 🪄",
        createdAt: "2025-08-13T20:00:00Z"
      },
      {
        id: "c-113",
        authorId: 73,
        content: "Mientras nosotros peleamos en redes, ellos siguen robando tranquilos. Esa es la verdadera tragedia del país 📱💸",
        createdAt: "2025-08-13T20:25:00Z"
      }
    ]
  },
  {
    id: "p-034",
    authorId: 40,
    content: "BREAKING: Ministro gastó 2.8 millones de soles en 'consultorías' con empresas fantasma durante la pandemia. Mientras la gente moría sin oxígeno, ellos llenándose los bolsillos. Esto ya no es corrupción, es traición a la patria 🫁💀 #PandemoniumGate #JusticiaPerú",
    categories: ["corrupción", "pandemia", "justicia"],
    createdAt: "2025-08-25T12:30:00Z",
    reactions: {
      like: [{ authorId: 23 }, { authorId: 42 }, { authorId: 37 }, { authorId: 74 }, { authorId: 29 }, { authorId: 56 }, { authorId: 61 }, { authorId: 85 }, { authorId: 19 }, { authorId: 78 }, { authorId: 65 }],
      love: [{ authorId: 22 }, { authorId: 45 }],
      laugh: [],
      wow: [{ authorId: 14 }, { authorId: 33 }, { authorId: 52 }, { authorId: 83 }],
      sad: [{ authorId: 39 }, { authorId: 17 }, { authorId: 54 }, { authorId: 60 }, { authorId: 44 }, { authorId: 67 }, { authorId: 18 }],
      angry: [{ authorId: 27 }, { authorId: 51 }, { authorId: 64 }, { authorId: 71 }, { authorId: 82 }]
    },
    comments: [
      {
        id: "c-114",
        authorId: 23,
        content: "Prisión preventiva YA. Embargo de bienes, investigación patrimonial de toda su familia. Delitos de lesa humanidad no prescriben",
        createdAt: "2025-08-25T13:15:00Z"
      },
      {
        id: "c-115",
        authorId: 69,
        content: "Como siempre, mucho ruido mediático y al final no pasa nada. En 6 meses nadie se acuerda y el tipo reaparece en otro cargo 📺💤",
        createdAt: "2025-08-25T13:40:00Z"
      },
      {
        id: "c-116",
        authorId: 78,
        content: "Con esa actitud derrotista obviamente no pasa nada. Si todos pensáramos así, mejor declaremos dictadura y listo 🏳️",
        createdAt: "2025-08-25T14:05:00Z"
      },
      {
        id: "c-117",
        authorId: 61,
        content: "Comisión de alto nivel + fiscales especializados + colaboración internacional. Recuperar hasta el último sol y que paguen con cárcel efectiva",
        createdAt: "2025-08-25T14:32:00Z"
      },
      {
        id: "c-118",
        authorId: 26,
        content: "'Colaboración internacional' 😂 Como si los otros países no tuvieran sus propios corruptos. Puro humo para la galería",
        createdAt: "2025-08-25T15:00:00Z"
      },
      {
        id: "c-119",
        authorId: 85,
        content: "Reforma total del sistema judicial. Jueces por concurso internacional, salarios dignos, intangibilidad presupuestal. Sin justicia independiente, seguimos igual",
        createdAt: "2025-08-25T15:25:00Z"
      },
      {
        id: "c-120",
        authorId: 84,
        content: "@85 Jajaja 'jueces internacionales', como si los extranjeros fueran santos. Al final todos tienen precio, es naturaleza humana 💰👨‍⚖️",
        createdAt: "2025-08-25T15:50:00Z"
      },
      {
        id: "c-121",
        authorId: 42,
        content: "Ley de extinción de dominio retroactiva. Si no pueden justificar patrimonio, que lo pierdan todo. Política de tolerancia cero",
        createdAt: "2025-08-25T16:15:00Z"
      },
      {
        id: "c-122",
        authorId: 76,
        content: "Claro, porque las leyes retroactivas nunca se usan para perseguir opositores políticos. Historia 101, génio 📚⚖️",
        createdAt: "2025-08-25T16:40:00Z"
      }
    ]
  },
  {
    id: "p-035",
    authorId: 41,
    content: "Si fuera gobernador regional, estos serían mis 10 puntos clave para transformar nuestra región en 5 años: 1) Reforma educativa total: laptops para todos los estudiantes + internet gratuito + capacitación docente intensiva 2) Salud digital: telemedicina obligatoria en postas rurales + historias clínicas digitales 3) Infraestructura verde: 500km de ciclovías + transporte público eléctrico 4) Revolución agrícola: drones para fumigación + IoT en cultivos + cadena de frío completa 5) Justicia express: juzgados digitales + procesos 100% virtuales 6) Energía limpia: paneles solares subsidiados + parques eólicos regionales 7) Turismo inteligente: realidad virtual en sitios arqueológicos + apps de traducción automática 8) MYPES digitales: e-commerce gratuito + capacitación en marketing digital 9) Seguridad predictiva: cámaras con IA + patrullaje drone 24/7 10) Transparencia radical: blockchain en presupuestos + streaming de sesiones. El futuro es AHORA 🚀🌟 #GobiernoDigital #InnovaciónRegional",
    categories: ["política", "gobierno", "propuestas"],
    createdAt: "2025-08-17T10:45:00Z",
    reactions: {
      like: [{ authorId: 56 }, { authorId: 78 }, { authorId: 14 }, { authorId: 33 }, { authorId: 52 }, { authorId: 85 }, { authorId: 19 }, { authorId: 29 }],
      love: [{ authorId: 61 }, { authorId: 37 }, { authorId: 74 }, { authorId: 22 }],
      laugh: [{ authorId: 48 }, { authorId: 76 }, { authorId: 31 }, { authorId: 84 }],
      wow: [{ authorId: 25 }, { authorId: 83 }, { authorId: 40 }],
      sad: [{ authorId: 39 }, { authorId: 17 }],
      angry: [{ authorId: 45 }, { authorId: 67 }, { authorId: 18 }, { authorId: 58 }, { authorId: 64 }]
    },
    comments: [
      {
        id: "c-123",
        authorId: 78,
        content: "FINALMENTE alguien que piensa en el siglo XXI. Estoy harto de candidatos que prometen 'más hospitales' cuando la telemedicina puede llegar a lugares imposibles 🏥📱",
        createdAt: "2025-08-17T11:20:00Z"
      },
      {
        id: "c-124",
        authorId: 48,
        content: "Puro tecno-populismo. ¿De dónde van a salir los 500 millones de soles que costaría todo eso? Las promesas digitales no se comen 💰🤡",
        createdAt: "2025-08-17T11:45:00Z"
      },
      {
        id: "c-125",
        authorId: 37,
        content: "@48 El presupuesto actual se desperdicia en consultorías. Redirigir recursos + créditos internacionales + PPP bien estructuradas. Hay formas",
        createdAt: "2025-08-17T12:10:00Z"
      },
      {
        id: "c-126",
        authorId: 67,
        content: "¿Internet gratuito cuando no hay agua potable? ¿Drones cuando faltan médicos? Prioridades totalmente distorsionadas. Primero lo básico, después la ciencia ficción",
        createdAt: "2025-08-17T12:35:00Z"
      },
      {
        id: "c-127",
        authorId: 85,
        content: "@67 La tecnología ES la solución a lo básico. Un drone puede detectar fugas de agua, telemedicina multiplica médicos. Pensamiento del siglo pasado 🚁💻",
        createdAt: "2025-08-17T13:00:00Z"
      },
      {
        id: "c-128",
        authorId: 31,
        content: "Blockchain, IA, IoT... parece lista de buzzwords de startup. ¿Has administrado alguna vez algo más complejo que tu cuenta de Netflix? 📺🤖",
        createdAt: "2025-08-17T13:25:00Z"
      },
      {
        id: "c-129",
        authorId: 74,
        content: "Por fin un candidato que entiende que estamos en 2025, no en 1985. Las regiones que no se digitalicen van a morir económicamente",
        createdAt: "2025-08-17T13:50:00Z"
      },
      {
        id: "c-130",
        authorId: 58,
        content: "Típico candidato millennial: todo con tecnología y cero experiencia real. La política no es videojuego, hay vidas humanas de por medio 🎮👴",
        createdAt: "2025-08-17T14:15:00Z"
      },
      {
        id: "c-131",
        authorId: 61,
        content: "@58 'Experiencia real' como 30 años robando y no solucionando nada? Prefiero innovación joven que corrupción experimentada",
        createdAt: "2025-08-17T14:40:00Z"
      }
    ]
  },
  {
    id: "p-036",
    authorId: 35,
    content: "Mi plan presidencial para sacar al Perú del subdesarrollo en 10 años - HILO COMPLETO: 🧵 ECONOMÍA: Reducir estado al mínimo, privatizar Petroperú, eliminar ministerios innecesarios, bajar impuestos del 30% al 15%, dolarización total, libre comercio sin aranceles. EDUCACIÓN: Vouchers educativos, competencia entre colegios, fin del monopolio sindical docente, inglés obligatorio desde inicial, intercambios masivos con Singapur/Finlandia. SALUD: Sistema mixto público-privado, seguros de salud competitivos, importación libre de medicamentos, hospitales por gestión privada. SEGURIDAD: Pena de muerte para feminicidio y terrorismo, prisión perpetua para corrupción, policía militar en fronteras, mano dura total. INFRAESTRUCTURA: Concesiones privadas para todo, tren bala Lima-Cusco-Arequipa financiado por chinos, autopistas de cuarta generación. JUSTICIA: Jueces elegidos por examen internacional, salarios de 50mil soles mensuales, procesos sumarios para corruptos. AGRICULTURA: Eliminación total de subsidios, libre importación de transgénicos, titulación masiva de tierras, agua como recurso transable. El liberalismo salvará al Perú 🇵🇪⚡ #ReformaTotal #PerúLiberal #EstadoMínimo",
    categories: ["política", "economía", "liberalismo"],
    createdAt: "2025-08-23T08:30:00Z",
    reactions: {
      like: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }, { authorId: 47 }, { authorId: 64 }],
      love: [{ authorId: 51 }, { authorId: 83 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }, { authorId: 36 }],
      wow: [{ authorId: 15 }, { authorId: 52 }, { authorId: 14 }],
      sad: [{ authorId: 39 }, { authorId: 17 }, { authorId: 54 }],
      angry: [{ authorId: 23 }, { authorId: 42 }, { authorId: 37 }, { authorId: 74 }, { authorId: 29 }, { authorId: 56 }, { authorId: 65 }, { authorId: 22 }, { authorId: 85 }, { authorId: 19 }, { authorId: 78 }]
    },
    comments: [
      {
        id: "c-132",
        authorId: 47,
        content: "ESTO ES EXACTAMENTE LO QUE NECESITA EL PAÍS. Basta de estado elefante y subsidios que solo crean dependencia. Chile nos adelantó con estas políticas 🇨🇱📈",
        createdAt: "2025-08-23T09:15:00Z"
      },
      {
        id: "c-133",
        authorId: 23,
        content: "¿Pena de muerte? ¿Privatizar TODO? ¿Dolarización? Amigo, esto no es plan de gobierno, es manifiesto fascista disfrazado de liberalismo 💀⚖️",
        createdAt: "2025-08-23T09:40:00Z"
      },
      {
        id: "c-134",
        authorId: 84,
        content: "Fascista es el estado actual que te roba con impuestos y no te da nada a cambio. Esto es liberación económica pura 💰🔓",
        createdAt: "2025-08-23T10:05:00Z"
      },
      {
        id: "c-135",
        authorId: 74,
        content: "¿Vouchers educativos? ¿Agua transable? Convirtamos todo en mercado, qué puede salir mal. Próxima propuesta: privatizar el aire que respiramos 🌬️💸",
        createdAt: "2025-08-23T10:30:00Z"
      },
      {
        id: "c-136",
        authorId: 31,
        content: "Si el aire fuera privado estaría más limpio que ahora. El mercado es más eficiente que cualquier ministerio corrupto 🏭✨",
        createdAt: "2025-08-23T10:55:00Z"
      },
      {
        id: "c-137",
        authorId: 42,
        content: "La salud como negocio privado es literalmente apostar con vidas humanas. ¿Qué pasa con quien no puede pagar? ¿Se muere y ya? 🏥💔",
        createdAt: "2025-08-23T11:20:00Z"
      },
      {
        id: "c-138",
        authorId: 64,
        content: "El sistema actual YA mata gente por ineficiencia. Al menos el privado tiene incentivos para ser bueno. Competencia salva vidas",
        createdAt: "2025-08-23T11:45:00Z"
      },
      {
        id: "c-139",
        authorId: 29,
        content: "Esto es neoliberalismo de los 90 con esteroides. Ya vimos cómo terminó: más pobreza, más desigualdad. Historia repetida como farsa 📚💀",
        createdAt: "2025-08-23T12:10:00Z"
      },
      {
        id: "c-140",
        authorId: 51,
        content: "Los 90 sacaron a millones de la pobreza. El problema fue no profundizar las reformas. Esta vez hay que ir hasta el final 📊🚀",
        createdAt: "2025-08-23T12:35:00Z"
      },
      {
        id: "c-141",
        authorId: 78,
        content: "Tren bala financiado por chinos pero eliminando estado... La contradicción es épica. ¿Quién va a negociar y supervisar esos contratos? 🚄🤔",
        createdAt: "2025-08-23T13:00:00Z"
      }
    ]
  },
  {
    id: "p-037",
    authorId: 20,
    content: "Nuevo descubrimiento en Kenia: fósil de Australopithecus anamensis de 4.2 millones de años muestra evidencia clara de bipedismo temprano. Pelvis moderna, brazos largos para trepar, cerebro de 400cc. La transición mono-humano cada vez más documentada 🦴🚶‍♂️ También encontraron herramientas líticas asociadas (Olduvaienses) que sugieren uso temprano de tecnología. Los creacionistas van a seguir negando la evidencia, pero la hominización es un hecho científico irrefutable. Link: nature.com/australopithecus-bipedalism-2025 #Evolución #Paleoantropología #CienciaVsReligión",
    categories: ["ciencia", "evolución", "paleontología"],
    createdAt: "2025-08-09T13:15:00Z",
    reactions: {
      like: [{ authorId: 14 }, { authorId: 33 }, { authorId: 56 }, { authorId: 78 }, { authorId: 47 }, { authorId: 83 }, { authorId: 61 }, { authorId: 25 }],
      love: [{ authorId: 29 }, { authorId: 37 }, { authorId: 74 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }],
      wow: [{ authorId: 52 }, { authorId: 85 }, { authorId: 19 }, { authorId: 40 }],
      sad: [{ authorId: 17 }],
      angry: [{ authorId: 45 }, { authorId: 67 }, { authorId: 18 }, { authorId: 44 }, { authorId: 60 }, { authorId: 75 }, { authorId: 54 }]
    },
    comments: [
      {
        id: "c-142",
        authorId: 78,
        content: "Increíble cómo cada descubrimiento confirma la teoría evolutiva. El registro fósil es cada vez más completo y coherente 🧬📚",
        createdAt: "2025-08-09T14:30:00Z"
      },
      {
        id: "c-143",
        authorId: 45,
        content: "UN fósil aislado no prueba nada. ¿Dónde están los miles de eslabones perdidos? Pura especulación basada en fragmentos de hueso 🦴❓",
        createdAt: "2025-08-09T14:55:00Z"
      },
      {
        id: "c-144",
        authorId: 47,
        content: "Tenemos literalmente miles de fósiles homínidos. Lucy, Ardi, Homo habilis, erectus, neanderthalensis... La secuencia está clarísima",
        createdAt: "2025-08-09T15:20:00Z"
      },
      {
        id: "c-145",
        authorId: 67,
        content: "¿4.2 millones de años? ¿Con qué método de datación? El carbono-14 solo funciona hasta 50,000 años. Cifras inventadas sin sustento real 📅🔬",
        createdAt: "2025-08-09T15:45:00Z"
      },
      {
        id: "c-146",
        authorId: 83,
        content: "Potasio-argón, uranio-plomo, estratigrafía. Hay múltiples métodos que se corroboran entre sí. Educate antes de opinar",
        createdAt: "2025-08-09T16:10:00Z"
      },
      {
        id: "c-147",
        authorId: 18,
        content: "La complejidad del ojo humano, del ADN, de la célula... Imposible que surja por casualidad. Tiene que haber un diseñador inteligente 👁️🧬",
        createdAt: "2025-08-09T16:35:00Z"
      },
      {
        id: "c-148",
        authorId: 37,
        content: "'Complejidad irreducible' fue refutada hace décadas. Evolución gradual explica perfectamente la complejidad biológica",
        createdAt: "2025-08-09T17:00:00Z"
      },
      {
        id: "c-149",
        authorId: 54,
        content: "Los mismos 'científicos' que cambian de teoría cada 10 años ahora pretenden tener la verdad absoluta. Mucha soberbia para algo tan incierto",
        createdAt: "2025-08-09T17:25:00Z"
      },
      {
        id: "c-150",
        authorId: 20,
        content: "Cambiar teorías con nueva evidencia se llama 'método científico'. Los dogmas inmutables los dejo para otros ámbitos 🔬📖",
        createdAt: "2025-08-09T17:50:00Z"
      }
    ]
  },
  {
    id: "p-038",
    authorId: 16,
    content: "Hilo sobre la extinción masiva del Cretácico-Paleógeno (66 millones de años): La desaparición de los dinosaurios NO fue un evento simple sino una crisis múltiple 🧵 CAUSAS CONVERGENTES: 1) Impacto del asteroide Chicxulub (10km diámetro) - evidencia: capa de iridio global, cuarzo impactado, cráter en Yucatán 2) Vulcanismo masivo en Decán (India) - emisiones de CO2 y SO2 alteraron clima global 3) Cambio climático previo - nivel del mar bajo, fragmentación de hábitats 4) Competencia con mamíferos pequeños por recursos 5) Enfermedades de plantas con flores (angiospermas) PERO ATENCIÓN: Los dinosaurios NO se extinguieron completamente - las AVES son dinosaurios terópodos que sobrevivieron. T-Rex está más emparentado con un pollo que con un lagarto 🦖🐔 El tránsito Pleistoceno-Holoceno (hace 11,700 años) fue DIFERENTE - ahí se extinguieron megafauna como mamuts por cambio climático + caza humana. NO confundir períodos geológicos. La Era Cuaternaria (2.6 MA-presente) incluye ambos eventos pero separados por 65 millones de años 🌍⚡ #Paleontología #ExtinciónMasiva #Dinosaurios",
    categories: ["paleontología", "extinción", "geología"],
    createdAt: "2025-08-26T11:20:00Z",
    reactions: {
      like: [{ authorId: 14 }, { authorId: 33 }, { authorId: 20 }, { authorId: 56 }, { authorId: 78 }, { authorId: 47 }, { authorId: 83 }, { authorId: 61 }, { authorId: 25 }, { authorId: 29 }],
      love: [{ authorId: 37 }, { authorId: 74 }, { authorId: 85 }, { authorId: 19 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }],
      wow: [{ authorId: 52 }, { authorId: 40 }, { authorId: 15 }, { authorId: 64 }, { authorId: 51 }],
      sad: [{ authorId: 39 }],
      angry: [{ authorId: 45 }, { authorId: 67 }, { authorId: 18 }, { authorId: 44 }]
    },
    comments: [
      {
        id: "c-151",
        authorId: 85,
        content: "Excelente explicación. Mucha gente cree que fue solo el meteorito pero la realidad es mucho más compleja. Ecosistemas ya estresados + impacto = colapso total 🌋☄️",
        createdAt: "2025-08-26T12:05:00Z"
      },
      {
        id: "c-152",
        authorId: 45,
        content: "¿66 millones de años? ¿Cómo pueden estar tan seguros de fechas tan antiguas? Los métodos de datación radiométrica asumen tasas de desintegración constantes 📅❓",
        createdAt: "2025-08-26T12:30:00Z"
      },
      {
        id: "c-153",
        authorId: 78,
        content: "Las tasas de desintegración SON constantes, están determinadas por física nuclear. Además, múltiples métodos dan fechas concordantes",
        createdAt: "2025-08-26T12:55:00Z"
      },
      {
        id: "c-154",
        authorId: 67,
        content: "¿No consideran la posibilidad de un diluvio global? Muchas culturas tienen memorias de inundaciones masivas. Fósiles marinos en montañas lo confirman 🌊⛰️",
        createdAt: "2025-08-26T13:20:00Z"
      },
      {
        id: "c-155",
        authorId: 83,
        content: "Los fósiles marinos en montañas demuestran ELEVACIÓN geológica, no diluvios. Tectónica de placas explica esos fenómenos perfectamente",
        createdAt: "2025-08-26T13:45:00Z"
      },
      {
        id: "c-156",
        authorId: 56,
        content: "Lo de las aves como dinosaurios supervivientes me vuela la cabeza. Básicamente tengo un velociraptor en mi jardín comiendo alpiste 🦕🐦",
        createdAt: "2025-08-26T14:10:00Z"
      },
      {
        id: "c-157",
        authorId: 18,
        content: "Toda esta 'ciencia' se basa en interpretaciones subjetivas de rocas. Nadie estaba ahí hace '66 millones de años' para confirmarlo 🪨👀",
        createdAt: "2025-08-26T14:35:00Z"
      },
      {
        id: "c-158",
        authorId: 47,
        content: "Con esa lógica tampoco podemos investigar crímenes sin testigos. La evidencia física habla por sí sola 🔍⚖️",
        createdAt: "2025-08-26T15:00:00Z"
      },
      {
        id: "c-159",
        authorId: 44,
        content: "¿Por qué solo se extinguieron dinosaurios grandes y no cocodrilos, tortugas, tiburones? La teoría del meteorito tiene huecos enormes 🐊🦈",
        createdAt: "2025-08-26T15:25:00Z"
      },
      {
        id: "c-160",
        authorId: 72,
        content: "Animales acuáticos, de sangre fría y carroñeros tuvieron ventajas. Los grandes herbívoros dependían de plantas que colapsaron primero 🌱💀",
        createdAt: "2025-08-26T15:50:00Z"
      }
    ]
  },
  {
    id: "p-039",
    authorId: 46,
    content: "Nuevos datos del MINSA confirman: campaña de vacunación contra HPV redujo casos de cáncer cervical en 67% entre mujeres de 20-25 años en los últimos 5 años. La ciencia funciona, punto 💉📊 También se aprobó la nueva vacuna bivalente COVID-XBB que protege contra variantes 2025. Pfizer y Moderna ya iniciaron distribución gratuita en postas. RECOMENDACIÓN MÉDICA: Vacúnense, especialmente adultos mayores e inmunocomprometidos. Long COVID sigue siendo real y devastador. Las vacunas salvan vidas, no las teorías conspirativas de Facebook 🦠💪 Link estudios: minsa.gob.pe/hpv-cervical-cancer-reduction-2025 #VacunasSalvanVidas #SaludPública #CienciaBasadaEnEvidencia",
    categories: ["salud", "vacunas", "medicina"],
    createdAt: "2025-08-27T14:45:00Z",
    reactions: {
      like: [{ authorId: 23 }, { authorId: 42 }, { authorId: 78 }, { authorId: 14 }, { authorId: 33 }, { authorId: 61 }, { authorId: 85 }, { authorId: 29 }, { authorId: 56 }],
      love: [{ authorId: 37 }, { authorId: 74 }, { authorId: 19 }, { authorId: 52 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }],
      wow: [{ authorId: 25 }, { authorId: 83 }, { authorId: 40 }],
      sad: [{ authorId: 39 }, { authorId: 17 }],
      angry: [{ authorId: 45 }, { authorId: 67 }, { authorId: 18 }, { authorId: 44 }, { authorId: 60 }, { authorId: 75 }, { authorId: 54 }, { authorId: 31 }, { authorId: 76 }]
    },
    comments: [
      {
        id: "c-161",
        authorId: 78,
        content: "Como médico confirmo: las vacunas son el mayor avance de salud pública en la historia. Erradicamos viruela, casi eliminamos polio. Los datos no mienten 📈💉",
        createdAt: "2025-08-27T15:20:00Z"
      },
      {
        id: "c-162",
        authorId: 45,
        content: "67% de reducción... ¿casualidad que salga justo cuando Pfizer necesita renovar contratos? Pura manipulación estadística para vender más vacunas 💰🎭",
        createdAt: "2025-08-27T15:45:00Z"
      },
      {
        id: "c-163",
        authorId: 23,
        content: "Los datos vienen del MINSA, no de Pfizer. Múltiples países reportan reducciones similares. Conspiranoia level: experto",
        createdAt: "2025-08-27T16:10:00Z"
      },
      {
        id: "c-164",
        authorId: 67,
        content: "¿Distribución 'gratuita'? NADA es gratis. Nosotros pagamos con nuestros impuestos mientras Big Pharma se llena los bolsillos 🏦💸",
        createdAt: "2025-08-27T16:35:00Z"
      },
      {
        id: "c-165",
        authorId: 85,
        content: "Prefiero pagar vacunas con impuestos que hospitalizaciones masivas con seguros. Matemáticas básicas de salud pública 🏥📊",
        createdAt: "2025-08-27T17:00:00Z"
      },
      {
        id: "c-166",
        authorId: 18,
        content: "ARN mensajero modificando nuestro ADN, nanopartículas de grafeno, chips de seguimiento... Todo documentado pero censurado por redes sociales 🧬📡",
        createdAt: "2025-08-27T17:25:00Z"
      },
      {
        id: "c-167",
        authorId: 42,
        content: "ARNm NO modifica ADN, se degrada en horas. Grafeno NO está en vacunas. Chips de seguimiento... tienes un celular, genio 📱🤦‍♀️",
        createdAt: "2025-08-27T17:50:00Z"
      },
      {
        id: "c-168",
        authorId: 54,
        content: "Mi prima se vacunó y a los 3 meses tuvo miocarditis. Coincidencia? No creo. Efectos adversos ocultados sistemáticamente por la mafia médica 💔⚰️",
        createdAt: "2025-08-27T18:15:00Z"
      },
      {
        id: "c-169",
        authorId: 61,
        content: "Miocarditis post-vacuna: 5 casos por millón. Miocarditis por COVID: 150 casos por millón. Matemáticas simples, riesgo-beneficio claro",
        createdAt: "2025-08-27T18:40:00Z"
      },
      {
        id: "c-170",
        authorId: 76,
        content: "Los mismos que crean la enfermedad venden la cura. Conflicto de intereses obvio. Inmunidad natural > vacunas artificiales 🌿💪",
        createdAt: "2025-08-27T19:05:00Z"
      }
    ]
  },
  {
    id: "p-040",
    authorId: 28,
    content: "THREAD: Nuevo medicamento Ozempic (semaglutida) para diabetes tipo 2 ahora aprobado para obesidad en Perú 🧵 BENEFICIOS COMPROBADOS: ✅ Reduce HbA1c en 1.5% promedio ✅ Pérdida de peso 15-20% en 6 meses ✅ Disminuye riesgo cardiovascular 35% ✅ Mejora presión arterial y colesterol ✅ Aplicación semanal, más conveniente que insulina diaria COSTO: S/1,200 mensuales (Novo Nordisk), próximamente genéricos a S/400. EsSalud evaluando cobertura total para diabéticos severos. IMPORTANTE: Supervisión médica obligatoria, no es 'pastilla mágica'. Efectos secundarios: náuseas iniciales, rara pancreatitis. Pero revolución en tratamiento diabetes/obesidad es innegable 💊⚖️ Ya disponible en farmacias principales. Consulten endocrinólogo certificado. #DiabetesTipo2 #Semaglutida #MedicinaModerna #SaludMetabólica",
    categories: ["salud", "medicamentos", "diabetes"],
    createdAt: "2025-08-24T09:30:00Z",
    reactions: {
      like: [{ authorId: 23 }, { authorId: 42 }, { authorId: 78 }, { authorId: 46 }, { authorId: 61 }, { authorId: 85 }, { authorId: 14 }, { authorId: 33 }],
      love: [{ authorId: 37 }, { authorId: 74 }, { authorId: 29 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }],
      wow: [{ authorId: 52 }, { authorId: 25 }, { authorId: 83 }],
      sad: [{ authorId: 39 }, { authorId: 17 }],
      angry: [{ authorId: 45 }, { authorId: 67 }, { authorId: 18 }, { authorId: 44 }, { authorId: 60 }, { authorId: 31 }, { authorId: 76 }, { authorId: 84 }]
    },
    comments: [
      {
        id: "c-171",
        authorId: 78,
        content: "Finalmente un tratamiento efectivo para diabetes resistente. Los estudios clínicos son sólidos, miles de pacientes beneficiados globalmente 📊💉",
        createdAt: "2025-08-24T10:15:00Z"
      },
      {
        id: "c-172",
        authorId: 45,
        content: "1,200 soles mensuales para una 'diabetes' que se cura con dieta y ejercicio. Novo Nordisk creando adicción farmacológica para clientes de por vida 💰🔄",
        createdAt: "2025-08-24T10:40:00Z"
      },
      {
        id: "c-173",
        authorId: 42,
        content: "Diabetes tipo 2 severa NO se 'cura' solo con dieta cuando el páncreas ya no produce insulina suficiente. Ignorancia peligrosa",
        createdAt: "2025-08-24T11:05:00Z"
      },
      {
        id: "c-174",
        authorId: 67,
        content: "¿Efectos a largo plazo? ¿Cáncer de tiroides? ¿Pancreatitis crónica? Somos conejillos de indias de experimentos farmacológicos masivos 🐭💉",
        createdAt: "2025-08-24T11:30:00Z"
      },
      {
        id: "c-175",
        authorId: 85,
        content: "15 años de estudios clínicos, millones de dosis aplicadas, seguimiento riguroso. Mucho más seguro que diabetes descontrolada",
        createdAt: "2025-08-24T11:55:00Z"
      },
      {
        id: "c-176",
        authorId: 18,
        content: "Medicamento que 'apaga el apetito' alterando neurotransmisores cerebrales. Control mental farmacológico disfrazado de tratamiento médico 🧠⚡",
        createdAt: "2025-08-24T12:20:00Z"
      },
      {
        id: "c-177",
        authorId: 46,
        content: "GLP-1 es una hormona natural que regula glucosa. La semaglutida imita un proceso fisiológico normal, no 'control mental' 🤦‍♂️",
        createdAt: "2025-08-24T12:45:00Z"
      },
      {
        id: "c-178",
        authorId: 76,
        content: "Ayuno intermitente + keto + ejercicio = resultados superiores sin efectos adversos. Pero eso no genera billones en ganancias farmacéuticas 🥗💪",
        createdAt: "2025-08-24T13:10:00Z"
      },
      {
        id: "c-179",
        authorId: 61,
        content: "Dile eso a un diabético con neuropatía severa que no puede ejercitarse. No todos pueden ser influencers fitness, hay realidades médicas complejas",
        createdAt: "2025-08-24T13:35:00Z"
      },
      {
        id: "c-180",
        authorId: 84,
        content: "EsSalud 'evaluando cobertura'... Más gasto público en medicamentos carísimos mientras faltan camas UCI. Prioridades distorsionadas del sistema 🏥💸",
        createdAt: "2025-08-24T14:00:00Z"
      }
    ]
  },
  {
    id: "p-041",
    authorId: 63,
    content: "Después de 3 años de gym tradicional y 2 años de calistenia, mi veredicto final: CALISTENIA SUPREMACY 🏋️‍♂️💪 Los gymrats pueden cargar 150kg en press banca pero no pueden hacer ni 5 muscle-ups consecutivos. ¿De qué sirve la fuerza si no puedes mover tu propio peso corporal? Human flag, front lever, planche... eso es FUERZA REAL, no inflar músculos con máquinas. Además: ✅ Gratis (parque público) ✅ Funcional (movimientos naturales) ✅ Estético (físico atlético, no inflado) ✅ Versátil (entrenas donde sea) Los bodybuilders del gym parecen refrigeradores con patas pero se cansan subiendo escaleras 😂 #Calistenia #FuerzaFuncional #BodyweightSupremacy",
    categories: ["fitness", "calistenia", "entrenamiento"],
    createdAt: "2025-08-20T16:30:00Z",
    reactions: {
      like: [{ authorId: 19 }, { authorId: 56 }, { authorId: 29 }, { authorId: 85 }, { authorId: 22 }, { authorId: 37 }, { authorId: 74 }],
      love: [{ authorId: 78 }, { authorId: 61 }, { authorId: 25 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }, { authorId: 36 }, { authorId: 73 }, { authorId: 24 }, { authorId: 52 }],
      wow: [{ authorId: 14 }, { authorId: 33 }, { authorId: 40 }],
      sad: [{ authorId: 39 }, { authorId: 17 }],
      angry: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }, { authorId: 47 }, { authorId: 64 }, { authorId: 51 }]
    },
    comments: [
      {
        id: "c-181",
        authorId: 78,
        content: "FACTS! Los gimnasios son fábricas de músculos inflados sin función real. Un tipo de calistenia tiene más definición y resistencia que cualquier esteroidado 💯🔥",
        createdAt: "2025-08-20T17:15:00Z"
      },
      {
        id: "c-182",
        authorId: 31,
        content: "Jajaja el clasico complejo de inferioridad de los flacos. 'Fuerza funcional' dice el que hace 15kg en press banca. A ver si tu muscle-up detiene un asalto 😂💀",
        createdAt: "2025-08-20T17:40:00Z"
      },
      {
        id: "c-183",
        authorId: 85,
        content: "Al menos podemos correr 10km sin colapsar. ¿Tú puedes subir 3 pisos sin jadear, King Kong? 🦍💨",
        createdAt: "2025-08-20T18:05:00Z"
      },
      {
        id: "c-184",
        authorId: 48,
        content: "Los de calistenia son veganos del fitness: nunca paran de decir lo superiores que son. Mientras tanto, máximo 70kg mojados 🥗😴",
        createdAt: "2025-08-20T18:30:00Z"
      },
      {
        id: "c-185",
        authorId: 19,
        content: "Prefiero 70kg funcionales que 90kg de grasa con músculos inflados artificialmente. Calidad > cantidad, always 💎",
        createdAt: "2025-08-20T18:55:00Z"
      },
      {
        id: "c-186",
        authorId: 76,
        content: "CrossFitters riéndose de ambos desde la esquina. Ustedes discuten fuerza vs función mientras nosotros dominamos AMBAS 🏃‍♂️🏋️‍♂️",
        createdAt: "2025-08-20T19:20:00Z"
      },
      {
        id: "c-187",
        authorId: 37,
        content: "CrossFit = lesiones garantizadas con movimientos mal ejecutados a velocidad suicida. Ortopedistas los aman 🩼⚰️",
        createdAt: "2025-08-20T19:45:00Z"
      },
      {
        id: "c-188",
        authorId: 64,
        content: "El gym te da masa muscular REAL. La calistenia es gimnasia glorificada para impresionar novias en Instagram. Hierro > aire 🏗️💪",
        createdAt: "2025-08-20T20:10:00Z"
      },
      {
        id: "c-189",
        authorId: 63,
        content: "'Masa real' que se pierde en 2 meses sin gym. La fuerza relativa de calistenia dura toda la vida. Sustainability, bro 🌱♾️",
        createdAt: "2025-08-20T20:35:00Z"
      }
    ]
  },
  {
    id: "p-042",
    authorId: 24,
    content: "HOT TAKE: CrossFit es objetivamente la modalidad de entrenamiento más completa que existe 🔥💯 Combina: ⚡ Fuerza (Olympic lifts) ⚡ Cardio (MetCons) ⚡ Movilidad (Functional movements) ⚡ Agilidad (Box jumps, rope climbs) ⚡ Resistencia mental (Pain cave training) Los bodybuilders solo saben hacer curl de biceps en el espejo. Los runners solo corren en línea recta. Los de calistenia solo hacen truquitos para el gram. Nosotros somos ATLETAS COMPLETOS 🏃‍♂️🏋️‍♂️🤸‍♂️ Sí, es caro (300 soles/mes) pero pagas por coaching profesional, comunidad motivadora y resultados reales. Un mes de CrossFit > 6 meses de gym tradicional aburrido. CHANGE MY MIND 🧠⚔️ #CrossFitSuperiority #ForgedByFire #FitnessEvolution",
    categories: ["fitness", "crossfit", "entrenamiento"],
    createdAt: "2025-08-18T12:45:00Z",
    reactions: {
      like: [{ authorId: 52 }, { authorId: 15 }, { authorId: 83 }, { authorId: 40 }, { authorId: 25 }, { authorId: 69 }],
      love: [{ authorId: 26 }, { authorId: 36 }],
      laugh: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 84 }, { authorId: 19 }, { authorId: 56 }, { authorId: 78 }, { authorId: 63 }, { authorId: 73 }],
      wow: [{ authorId: 14 }, { authorId: 33 }],
      sad: [{ authorId: 39 }],
      angry: [{ authorId: 29 }, { authorId: 85 }, { authorId: 22 }, { authorId: 37 }, { authorId: 74 }, { authorId: 61 }, { authorId: 42 }, { authorId: 65 }, { authorId: 12 }]
    },
    comments: [
      {
        id: "c-190",
        authorId: 52,
        content: "PREACH! CrossFit desarrolla atletas, el resto desarrolla especialistas limitados. Rich Froning vs cualquier gymrat en competencia general = masacre total 💀🏆",
        createdAt: "2025-08-18T13:30:00Z"
      },
      {
        id: "c-191",
        authorId: 31,
        content: "300 soles para hacer burpees mal hechos y lesionarte la espalda. El marketing de CrossFit es increíble, venden aire como oro 💸🤡",
        createdAt: "2025-08-18T13:55:00Z"
      },
      {
        id: "c-192",
        authorId: 78,
        content: " Mientras tanto tú pagas 150 soles para hacer el mismo chest-triceps-shoulders desde 2019. Evolución = 0 📉😴",
        createdAt: "2025-08-18T14:20:00Z"
      },
      {
        id: "c-193",
        authorId: 63,
        content: "'Olympic lifts' con forma horrible a máxima velocidad. Hernias discales incluidas gratis. Los ortopedistas financian sus casas con CrossFitters 🏠💰",
        createdAt: "2025-08-18T14:45:00Z"
      },
      {
        id: "c-194",
        authorId: 25,
        content: "Al menos intentamos movimientos complejos. Ustedes hacen lagartijas glorificadas y se creen gimnastas olímpicos 🤸‍♂️📸",
        createdAt: "2025-08-18T15:10:00Z"
      },
      {
        id: "c-195",
        authorId: 84,
        content: "CrossFit = secta fitness. 'Pain cave', 'forged by fire'... puro cringe motivacional para justificar sobrepago masivo 😬💸",
        createdAt: "2025-08-18T15:35:00Z"
      },
      {
        id: "c-196",
        authorId: 29,
        content: "Los runners silenciosamente riéndose mientras todos discuten. Nosotros corremos maratones, ustedes se agotan en 5 minutos de WOD 🏃‍♂️💨",
        createdAt: "2025-08-18T16:00:00Z"
      },
      {
        id: "c-197",
        authorId: 40,
        content: "Correr en círculos 42km no es atletismo, es masoquismo. Cardio bunny supremacy, I guess 🐰🔄",
        createdAt: "2025-08-18T16:25:00Z"
      },
      {
        id: "c-198",
        authorId: 42,
        content: "Powerlifters observando cómo todos hablan de 'fuerza' sin cargar más de 100kg en squat. Humble yourselves, children 👑💪",
        createdAt: "2025-08-18T16:50:00Z"
      },
      {
        id: "c-199",
        authorId: 24,
        content: "La cantidad de triggered people confirmando que CrossFit es superior. Stay mad mientras nosotros seguimos evolucionando 😎🔥",
        createdAt: "2025-08-18T17:15:00Z"
      }
    ]
  },
  {
    id: "p-043",
    authorId: 55,
    content: "THREAD: Crisis de salud mental en Latinoamérica que nadie quiere ver 🧵💔 ESTADÍSTICAS ALARMANTES: 📊 Perú: Tasa de suicidios aumentó 65% en últimos 5 años 📊 Corea del Sur: Lidera suicidios mundiales (24.6 por 100k habitantes) 📊 Japón: 'Karoshi' (muerte por exceso trabajo) + hikikomori epidemic 📊 Chile: 1 de cada 4 jóvenes con ideación suicida CAUSAS SISTÉMICAS: • Presión académica/laboral extrema • Redes sociales toxicas + comparación constante • Estigma cultural ('los hombres no lloran') • Falta de acceso a psicólogos (1 por 10,000 habitantes) • Normalización de burnout como 'éxito' La salud mental NO es lujo de privilegiados, es DERECHO HUMANO básico. Necesitamos: ✅ Psicólogos en colegios públicos ✅ Licencias por salud mental en trabajos ✅ Campañas anti-estigma masivas ✅ Regulación de redes sociales para menores Un país que ignora la salud mental de su población está condenado al fracaso social 🇵🇪🇰🇷🇯🇵 #SaludMental #SuicidioPrevención #BienestarPsicológico",
    categories: ["salud mental", "sociedad", "prevención"],
    createdAt: "2025-08-15T10:20:00Z",
    reactions: {
      like: [{ authorId: 23 }, { authorId: 42 }, { authorId: 37 }, { authorId: 74 }, { authorId: 29 }, { authorId: 56 }, { authorId: 78 }, { authorId: 19 }, { authorId: 85 }, { authorId: 61 }],
      love: [{ authorId: 22 }, { authorId: 65 }, { authorId: 46 }, { authorId: 72 }],
      laugh: [],
      wow: [{ authorId: 14 }, { authorId: 33 }, { authorId: 52 }, { authorId: 25 }],
      sad: [{ authorId: 39 }, { authorId: 17 }, { authorId: 54 }, { authorId: 60 }, { authorId: 44 }, { authorId: 75 }],
      angry: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }, { authorId: 47 }]
    },
    comments: [
      {
        id: "c-200",
        authorId: 78,
        content: "Como psicóloga confirmo: la crisis es REAL. Atiendo adolescentes con planes suicidas detallados por bullying y presión académica. No son 'excusas', son gritos de auxilio 💔😢",
        createdAt: "2025-08-15T11:05:00Z"
      },
      {
        id: "c-201",
        authorId: 31,
        content: "Generación de cristal descubierta parte 47. Antes la gente aguantaba problemas reales, ahora cualquier incomodidad es 'trauma'. Weak minds, weak society 🙄💪",
        createdAt: "2025-08-15T11:30:00Z"
      },
      {
        id: "c-202",
        authorId: 74,
        content: "Mi primo se suicidó a los 22 por depresión. ¿Eso también es 'generación de cristal'? Tu ignorancia mata, literalmente 💀⚰️",
        createdAt: "2025-08-15T11:55:00Z"
      },
      {
        id: "c-203",
        authorId: 48,
        content: "'Licencias por salud mental' jajaja próximamente licencias por 'no me gusta mi jefe'. Excusas elaboradas para evadir responsabilidades laborales 🏃‍♂️💼",
        createdAt: "2025-08-15T12:20:00Z"
      },
      {
        id: "c-204",
        authorId: 85,
        content: "En Dinamarca las licencias mentales redujeron suicidios 40%. Pero claro, prefiramos empleados muertos que 'flojos', very smart 🇩🇰📉",
        createdAt: "2025-08-15T12:45:00Z"
      },
      {
        id: "c-205",
        authorId: 58,
        content: "Corea y Japón tienen culturas diferentes, no podemos comparar. Allá la presión social es extrema, acá tenemos problemas REALES como pobreza y delincuencia 🇰🇷≠🇵🇪",
        createdAt: "2025-08-15T13:10:00Z"
      },
      {
        id: "c-206",
        authorId: 29,
        content: "¿En serio? Perú tiene feminicidios diarios, corrupción masiva, desempleo juvenil. Si eso no genera trauma colectivo, no sé qué más 😰🚨",
        createdAt: "2025-08-15T13:35:00Z"
      },
      {
        id: "c-207",
        authorId: 76,
        content: "'Hikikomori epidemic'... 500,000 japoneses que no salen de su cuarto por años. Pero sigamos normalizando el aislamiento como 'introversión' 🏠🔒",
        createdAt: "2025-08-15T14:00:00Z"
      },
      {
        id: "c-208",
        authorId: 42,
        content: "Exacto. Y en Perú tenemos nuestra versión: jóvenes NINI traumatizados por sistema educativo/laboral tóxico. Misma crisis, diferente nombre 🎓💼",
        createdAt: "2025-08-15T14:25:00Z"
      },
      {
        id: "c-209",
        authorId: 12,
        content: "Psicólogos caros inventando enfermedades para crear clientes perpetuos. Antes se llamaba 'estar triste', ahora es 'depresión mayor' que necesita años de terapia 💰🛋️",
        createdAt: "2025-08-15T14:50:00Z"
      }
    ]
  },
  {
    id: "p-044",
    authorId: 38,
    content: "Unpopular opinion: La 'crisis de salud mental' es mayormente fabricada por una generación que no sabe manejar la frustración normal de la vida 🤷‍♂️💭 HECHOS DUROS: • Nuestros abuelos sobrevivieron guerras, dictaduras, hambrunas SIN psicólogos • Tasas de suicidio en países pobres (donde hay problemas REALES) son menores que en países ricos • La obsesión con 'bienestar mental' correlaciona con mayor reporte de 'trastornos' • Cada emoción negativa ahora tiene un diagnóstico y pastilla JAPÓN/COREA: Su problema no es falta de terapeutas, es cultura de trabajo extrema + presión social milenaria. No se soluciona con 'self-care' sino con cambios estructurales. PERÚ: Tenemos 30% de pobreza, feminicidios diarios, desnutrición infantil. ¿Y nos vamos a enfocar en que los millennials se sienten 'ansiosos'? Prioridades, gente. La vida siempre fue dura. La diferencia es que antes la gente tenía RESILIENCIA real, no solo hashtags motivacionales 💪🏔️ #RealidadCheck #ResilienciaVerdadera #ProblemasReales",
    categories: ["salud mental", "controversia", "sociedad"],
    createdAt: "2025-08-21T15:45:00Z",
    reactions: {
      like: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }, { authorId: 47 }, { authorId: 64 }, { authorId: 51 }],
      love: [{ authorId: 67 }, { authorId: 18 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }, { authorId: 36 }],
      wow: [{ authorId: 15 }, { authorId: 40 }],
      sad: [{ authorId: 39 }, { authorId: 17 }],
      angry: [{ authorId: 23 }, { authorId: 42 }, { authorId: 37 }, { authorId: 74 }, { authorId: 29 }, { authorId: 56 }, { authorId: 78 }, { authorId: 19 }, { authorId: 85 }, { authorId: 61 }, { authorId: 22 }, { authorId: 65 }, { authorId: 55 }]
    },
    comments: [
      {
        id: "c-210",
        authorId: 47,
        content: "GRACIAS por decir lo que todos pensamos pero nadie se atreve. La victimización constante está destruyendo la fortaleza mental de las nuevas generaciones 👏💯",
        createdAt: "2025-08-21T16:30:00Z"
      },
      {
        id: "c-211",
        authorId: 23,
        content: "Qué asco de post. Mi hermana se cortaba las venas a los 16 por bullying escolar. ¿Eso también es 'frustración normal'? Tu ignorancia es peligrosa 🩸😡",
        createdAt: "2025-08-21T16:55:00Z"
      },
      {
        id: "c-212",
        authorId: 84,
        content: "Casos extremos no invalidan el punto general. La mayoría que dice tener 'ansiedad' solo necesita salir de su zona de comfort 🏃‍♂️💪",
        createdAt: "2025-08-21T17:20:00Z"
      },
      {
        id: "c-213",
        authorId: 78,
        content: "'Nuestros abuelos no tenían psicólogos' - Tampoco tenían redes sociales, cambio climático, precarización laboral extrema. Contextos diferentes, traumas diferentes 📱🌡️",
        createdAt: "2025-08-21T17:45:00Z"
      },
      {
        id: "c-214",
        authorId: 51,
        content: "Nuestros abuelos tenían guerras reales, no 'cyberbullying'. La proporción de dureza objetiva vs subjetiva cambió radicalmente 💣📱",
        createdAt: "2025-08-21T18:10:00Z"
      },
      {
        id: "c-215",
        authorId: 74,
        content: "Corea del Sur: 40 suicidios diarios. Japón: 20,000 suicidios anuales. 'Fabricado' dice el genio que nunca estudió estadísticas de salud pública 📊💀",
        createdAt: "2025-08-21T18:35:00Z"
      },
      {
        id: "c-216",
        authorId: 58,
        content: "Esos países tienen problemas estructurales específicos: shame culture + work obsession. No es generalizable a 'crisis mundial' de salud mental 🌏❌",
        createdAt: "2025-08-21T19:00:00Z"
      },
      {
        id: "c-217",
        authorId: 85,
        content: "El trauma intergeneracional es REAL. Los 'abuelos resilientes' nos pasaron sus traumas no procesados como crianza autoritaria y violencia normalizada 👨‍👩‍👧‍👦💔",
        createdAt: "2025-08-21T19:25:00Z"
      },
      {
        id: "c-218",
        authorId: 64,
        content: "'Trauma intergeneracional' jajaja cada vez inventan términos más elaborados. Antes se llamaba 'educación estricta' y funcionaba perfectamente 👴📏",
        createdAt: "2025-08-21T19:50:00Z"
      },
      {
        id: "c-219",
        authorId: 55,
        content: "Este post es exactamente la mentalidad que mata. Minimizar el sufrimiento ajeno como 'debilidad' perpetúa el estigma y aumenta los suicidios 😔☠️",
        createdAt: "2025-08-21T20:15:00Z"
      }
    ]
  },
  {
    id: "p-045",
    authorId: 32,
    content: "Controversial take: Las herramientas no-code/low-code están MATANDO la industria del desarrollo web 💀👨‍💻 La realidad brutal: • Cliente puede hacer su web en Wix/WordPress en 1 día por $50 • ¿Para qué pagar $5000 a un dev por 2 semanas? • Shopify, Webflow, Bubble... todo democratizado • 80% de proyectos web NO necesitan código custom • Startups prefieren MVP rápido que arquitectura perfecta EL MERCADO CAMBIÓ: Ya no vendemos código, vendemos SOLUCIONES. El futuro developer: 50% no-code tools + 50% custom integrations. Los puristas que siguen obsesionados con 'escribir todo desde cero' van a quedar como los escribas cuando llegó la imprenta 📜➡️🖨️ EVOLUCIONA O MUERE: • Aprende Webflow, Framer, Notion • Especialízate en integraciones API • Enfócate en UX/CX, no en sintaxis • Cobra por valor, no por líneas de código Es doloroso pero es REAL. La democratización tecnológica llegó para quedarse 🌊🏄‍♂️ #NoCode #DesarrolloWeb #FuturoDev #TechEvolution",
    categories: ["tecnología", "desarrollo", "no-code"],
    createdAt: "2025-08-12T13:20:00Z",
    reactions: {
      like: [{ authorId: 19 }, { authorId: 56 }, { authorId: 29 }, { authorId: 85 }, { authorId: 22 }, { authorId: 65 }, { authorId: 46 }],
      love: [{ authorId: 37 }, { authorId: 74 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }, { authorId: 36 }, { authorId: 73 }],
      wow: [{ authorId: 14 }, { authorId: 33 }, { authorId: 52 }],
      sad: [{ authorId: 78 }, { authorId: 61 }, { authorId: 25 }],
      angry: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }, { authorId: 47 }, { authorId: 64 }, { authorId: 51 }]
    },
    comments: [
      {
        id: "c-220",
        authorId: 85,
        content: "FACTS! Gasté 3 meses haciendo mi portfolio en React. Mi amigo hizo el suyo en Framer en 2 horas y se ve mejor. Wake up call brutal 💀⚡",
        createdAt: "2025-08-12T14:05:00Z"
      },
      {
        id: "c-221",
        authorId: 31,
        content: "Hasta que el cliente necesite funcionalidad custom y su Wix explote. Después vienen llorando por un 'dev real' que arregle el desastre 🔧💥",
        createdAt: "2025-08-12T14:30:00Z"
      },
      {
        id: "c-222",
        authorId: 74,
        content: "Para cuando necesiten eso custom, ya generaron suficiente revenue para pagarlo. Iteración rápida > perfección prematura 💰🚀",
        createdAt: "2025-08-12T14:55:00Z"
      },
      {
        id: "c-223",
        authorId: 78,
        content: "WordPress con 47 plugins cargando 8MB por página. Después se quejan de SEO y conversiones. Pero hey, 'no necesitan código custom' 🐌📉",
        createdAt: "2025-08-12T15:20:00Z"
      },
      {
        id: "c-224",
        authorId: 56,
        content: "Core Web Vitals de Wix han mejorado muchísimo. Ya no es 2018, las plataformas evolucionaron mientras devs siguen con prejuicios viejos 📊⚡",
        createdAt: "2025-08-12T15:45:00Z"
      },
      {
        id: "c-225",
        authorId: 48,
        content: "Comparar Webflow con desarrollo real es como comparar Lego con arquitectura. Funciona para casitas, no para rascacielos empresariales 🏗️🧱",
        createdAt: "2025-08-12T16:10:00Z"
      },
      {
        id: "c-226",
        authorId: 29,
        content: "Netflix empezó con PHP básico. Facebook con un hack universitario. El 'rascacielos' se construye cuando hay usuarios, no desde día 1 🏢📈",
        createdAt: "2025-08-12T16:35:00Z"
      },
      {
        id: "c-227",
        authorId: 64,
        content: "Esperen a que necesiten migrations, testing, CI/CD, scalabilidad real. No-code es prototipado glorificado, no ingeniería de software seria 🧪⚙️",
        createdAt: "2025-08-12T17:00:00Z"
      },
      {
        id: "c-228",
        authorId: 37,
        content: "El 95% de websites nunca van a necesitar 'scalabilidad real'. Estás solucionando problemas que no existen para 99% de clientes 🎯💡",
        createdAt: "2025-08-12T17:25:00Z"
      },
      {
        id: "c-229",
        authorId: 51,
        content: "Vendor lock-in masivo. Cuando Wix/Webflow cambien pricing o ToS, ¿qué haces? Con código propio tienes control total del producto 🔒👑",
        createdAt: "2025-08-12T17:50:00Z"
      }
    ]
  },
  {
    id: "p-046",
    authorId: 4,
    content: "Como senior dev con 12 años de experiencia, les voy a explicar por qué no-code/low-code es una TRAMPA a largo plazo 🪤💻 PROBLEMA FUNDAMENTAL: Están optimizando para velocidad inicial, no para sostenibilidad. WordPress site típico: • 23 plugins instalados • 847 HTTP requests por página • 12.3MB de JavaScript sin minificar • 47 dependencias conflictivas • Tema comprado con código legacy • SEO penalizado por velocidad • Imposible de mantener sin romper algo REALIDAD TÉCNICA QUE NO VEN: 🔍 Debugging nightmare: error en línea 47382 de minified code 🔍 Security vulnerabilities: plugins abandonados hace 3 años 🔍 Performance hell: 4 segundos de carga en móvil 🔍 Vendor lock-in: migrar = rehacer desde cero 🔍 Customización limitada: 'sorry, el tema no permite eso' CASOS REALES que he rescatado: • E-commerce en Shopify que colapsó en Black Friday • WordPress que se hackea cada 2 meses • Webflow site que no puede integrar CRM custom • Bubble app que no escala >1000 usuarios No-code está bien para landing pages y MVPs. Para productos serios, necesitas INGENIERÍA real 👨‍💻⚗️ #CodeQuality #SoftwareEngineering #TechnicalDebt #WebPerformance",
    categories: ["desarrollo", "tecnología", "ingeniería"],
    createdAt: "2025-08-16T09:15:00Z",
    reactions: {
      like: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }, { authorId: 47 }, { authorId: 64 }, { authorId: 51 }, { authorId: 78 }],
      love: [{ authorId: 61 }, { authorId: 25 }, { authorId: 83 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }],
      wow: [{ authorId: 14 }, { authorId: 33 }, { authorId: 52 }, { authorId: 40 }],
      sad: [{ authorId: 39 }, { authorId: 17 }],
      angry: [{ authorId: 19 }, { authorId: 56 }, { authorId: 29 }, { authorId: 85 }, { authorId: 22 }, { authorId: 37 }, { authorId: 74 }, { authorId: 32 }, { authorId: 65 }]
    },
    comments: [
      {
        id: "c-230",
        authorId: 78,
        content: "PREACH! He visto WordPress sites que tardan 12 segundos en cargar porque tienen Elementor + 34 plugins. Después se quejan de bounce rate 95% 🐌💀",
        createdAt: "2025-08-16T10:00:00Z"
      },
      {
        id: "c-231",
        authorId: 32,
        content: "Classic senior dev gatekeeping. 'Productos serios necesitan ingeniería real'... díselo a los millones usando Shopify exitosamente 💰🏪",
        createdAt: "2025-08-16T10:25:00Z"
      },
      {
        id: "c-232",
        authorId: 64,
        content: "Shopify funciona porque tienen 200+ ingenieros detrás optimizando la plataforma. No-code user ≠ no-code platform. Confundes conceptos básicos 👨‍💻🏗️",
        createdAt: "2025-08-16T10:50:00Z"
      },
      {
        id: "c-233",
        authorId: 85,
        content: "'12 años de experiencia' pero sigue traumado por WordPress de 2015. Las herramientas evolucionaron, tu mentalidad no. Adapt or die, dinosaur 🦕⚡",
        createdAt: "2025-08-16T11:15:00Z"
      },
      {
        id: "c-234",
        authorId: 51,
        content: "Physics don't evolve. 847 HTTP requests SIEMPRE van a ser lentos. No importa qué tan 'evolucionada' esté tu herramienta no-code 📡💥",
        createdAt: "2025-08-16T11:40:00Z"
      },
      {
        id: "c-235",
        authorId: 74,
        content: "Me encanta cómo hablan de 'productos serios' desde su bubble de Silicon Valley. El 99% de negocios locales solo necesita mostrar info + contacto básico 🏪📞",
        createdAt: "2025-08-16T12:05:00Z"
      },
      {
        id: "c-236",
        authorId: 47,
        content: "Hasta que necesiten inventario real-time, pagos seguros, integraciones ERP... Ahí se dan cuenta por qué existe la ingeniería de software 🔐⚙️",
        createdAt: "2025-08-16T12:30:00Z"
      },
      {
        id: "c-237",
        authorId: 29,
        content: "Plot twist: La mayoría de 'custom code' también está lleno de dependencies, frameworks bloated y technical debt. Al menos no-code es honesto sobre eso 📦💸",
        createdAt: "2025-08-16T12:55:00Z"
      },
      {
        id: "c-238",
        authorId: 84,
        content: "Difference: Con código propio puedes refactorizar, optimizar, debuggear. Con no-code dependes de que el vendor fixee sus bugs 🔧🆚🤞",
        createdAt: "2025-08-16T13:20:00Z"
      },
      {
        id: "c-239",
        authorId: 37,
        content: "Senior devs defending their relevance vs no-code democratization. Same energy as taxi drivers vs Uber. Evolution happens 🚕➡️🚗",
        createdAt: "2025-08-16T13:45:00Z"
      }
    ]
  },
  {
    id: "p-047",
    authorId: 49,
    content: "Unpopular opinion: PHP y jQuery siguen siendo RELEVANTES en 2025 y los hipsters de JavaScript no lo quieren aceptar 🐘⚡ DATOS REALES que duelen: • 78% de websites usan PHP (W3Techs 2025) • WordPress = 43% de TODO internet • Facebook, Wikipedia, Slack backend = PHP • jQuery presente en 95% de top 1M sites • Laravel/Symfony compiten perfectamente con Express/Nest • Fiverr/Upwork: 10x más trabajos PHP que Node VENTAJAS que ignoran los JS fanboys: ✅ Shared hosting barato ($5/mes vs $20 VPS) ✅ Deploy simple (upload FTP vs Docker/CI/CD) ✅ Ecosistema maduro (20+ años de librerías) ✅ Documentación extensa en español ✅ Curva de aprendizaje suave ✅ Debugging directo sin transpilación MIENTRAS USTEDES DISCUTEN arquitecturas y frameworks del mes, nosotros FACTURAMOS con tecnología probada 💰🚀 PHP 8.3 + JIT compiler compite en performance con Node. jQuery 3.7 + modern browsers = desarrollo rápido sin bundlers. Stop the hate, embrace pragmatismo 🤝 #PHP #jQuery #LegacyTech #WebDevelopment #PragmaticDev",
    categories: ["tecnología", "desarrollo", "legacy"],
    createdAt: "2025-08-14T11:30:00Z",
    reactions: {
      like: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }, { authorId: 47 }, { authorId: 64 }, { authorId: 51 }, { authorId: 67 }],
      love: [{ authorId: 45 }, { authorId: 18 }, { authorId: 60 }],
      laugh: [{ authorId: 19 }, { authorId: 56 }, { authorId: 29 }, { authorId: 26 }, { authorId: 69 }],
      wow: [{ authorId: 14 }, { authorId: 33 }, { authorId: 52 }],
      sad: [{ authorId: 78 }, { authorId: 85 }],
      angry: [{ authorId: 32 }, { authorId: 74 }, { authorId: 37 }, { authorId: 22 }, { authorId: 65 }, { authorId: 25 }, { authorId: 83 }]
    },
    comments: [
      {
        id: "c-240",
        authorId: 64,
        content: "THANK YOU! Llevo 15 años con PHP y sigo cobrando más que los React developers que cambian de framework cada 6 meses. Estabilidad > hype 💰📈",
        createdAt: "2025-08-14T12:15:00Z"
      },
      {
        id: "c-241",
        authorId: 32,
        content: "PHP en 2025... serio? Es como usar Internet Explorer porque 'funciona'. TypeScript + Node.js tiene mejor type safety, async handling, ecosystem moderno 🦕➡️🚀",
        createdAt: "2025-08-14T12:40:00Z"
      },
      {
        id: "c-242",
        authorId: 58,
        content: "'Type safety' en JavaScript 😂 El lenguaje más inconsistente del mundo intentando ser tipado. Al menos PHP es honesto con su dynamic typing",
        createdAt: "2025-08-14T13:05:00Z"
      },
      {
        id: "c-243",
        authorId: 85,
        content: "jQuery manipulando DOM directamente en 2025 es técnicamente doloroso. Virtual DOM, component lifecycle, state management... evolution happened 🧠⚡",
        createdAt: "2025-08-14T13:30:00Z"
      },
      {
        id: "c-244",
        authorId: 76,
        content: "'Virtual DOM' para hacer un simple dropdown. Overengineering level: God. jQuery hace el trabajo en 3 líneas, React necesita 200 🎭📏",
        createdAt: "2025-08-14T13:55:00Z"
      },
      {
        id: "c-245",
        authorId: 37,
        content: "Node.js + Express + Prisma + TypeScript = stack moderno, escalable, mantenible. PHP + jQuery = legacy hell que nadie quiere tocar en 5 años 💀🔧",
        createdAt: "2025-08-14T14:20:00Z"
      },
      {
        id: "c-246",
        authorId: 51,
        content: "Laravel + Eloquent + PHP 8.3 = modern framework igual de potente. El problema no es el lenguaje, es el desarrollador que no se actualiza 🔄💡",
        createdAt: "2025-08-14T14:45:00Z"
      },
      {
        id: "c-247",
        authorId: 74,
        content: "Microservicios, serverless, edge computing... PHP stuck en monolitos de los 2000s. Node.js se adapta mejor al cloud-native development ☁️🌐",
        createdAt: "2025-08-14T15:10:00Z"
      },
      {
        id: "c-248",
        authorId: 47,
        content: "Laravel Vapor, PHP on Lambda, Docker containers... PHP también evolucionó. Stop living in 2010 stereotypes, research first 📚🔍",
        createdAt: "2025-08-14T15:35:00Z"
      },
      {
        id: "c-249",
        authorId: 25,
        content: "API integrations, real-time features, modern authentication... Node.js ecosystem superior para aplicaciones modernas. PHP es mantenimiento legacy 🔌⚡",
        createdAt: "2025-08-14T16:00:00Z"
      }
    ]
  },
  {
    id: "p-048",
    authorId: 16,
    content: "HOT TAKE: Seguir usando PHP/jQuery en nuevos proyectos 2025 es MALPRACTICE profesional 🚨👨‍💻 Como tech lead que ha migrado 15+ legacy systems, les explico por qué: PROBLEMAS TÉCNICOS REALES: 🔴 PHP: Inconsistencias de sintaxis (array_push vs array_merge), weak typing hell, global state nightmare 🔴 jQuery: DOM thrashing, memory leaks, callback hell, no component reusability 🔴 Ecosystem fragmentado: Composer packages mal mantenidos, seguridad cuestionable STACK MODERNO SUPERIOR: ✅ Node.js + TypeScript: Type safety real, async/await nativo, V8 performance ✅ Express/NestJS: Arquitectura modular, middleware ecosystem, OpenAPI integration ✅ React/Vue + modern build tools: Component architecture, hot reload, tree shaking ✅ Prisma/TypeORM: Type-safe database queries, migrations automáticas ✅ Docker + K8s: Deployment consistency, auto-scaling, zero-downtime deploys INTEGRACIÓN TERCEROS: • Stripe, PayPal APIs: SDKs optimizados para Node • AWS services: Lambda functions, S3, DynamoDB native support • Real-time: WebSockets, Socket.io, Server-sent events • GraphQL, REST APIs: Better tooling y developer experience EL MERCADO HABLA: Senior Node.js dev = $120k+ | Senior PHP dev = $80k. Employers want MODERN skills 💰📊 Stop romanticizing legacy tech. Evolution or extinction 🦖➡️🚀 #ModernDevelopment #NodeJS #TypeScript #TechEvolution",
    categories: ["desarrollo", "tecnología", "modernización"],
    createdAt: "2025-08-19T14:20:00Z",
    reactions: {
      like: [{ authorId: 32 }, { authorId: 74 }, { authorId: 37 }, { authorId: 22 }, { authorId: 65 }, { authorId: 25 }, { authorId: 83 }, { authorId: 85 }, { authorId: 78 }, { authorId: 29 }],
      love: [{ authorId: 19 }, { authorId: 56 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }, { authorId: 36 }],
      wow: [{ authorId: 14 }, { authorId: 33 }, { authorId: 52 }, { authorId: 40 }],
      sad: [{ authorId: 39 }, { authorId: 17 }],
      angry: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }, { authorId: 47 }, { authorId: 64 }, { authorId: 51 }, { authorId: 49 }]
    },
    comments: [
      {
        id: "c-250",
        authorId: 85,
        content: "FACTS! He trabajado en ambos stacks. Node.js + TypeScript elimina 90% de runtime errors que PHP genera constantemente. Type safety is life 💎🔒",
        createdAt: "2025-08-19T15:05:00Z"
      },
      {
        id: "c-251",
        authorId: 49,
        content: "Classic JavaScript evangelist. Symfony + PHPStan tiene mejor type checking que tu TypeScript con 'any' everywhere. Research before posting 🔍📚",
        createdAt: "2025-08-19T15:30:00Z"
      },
      {
        id: "c-252",
        authorId: 78,
        content: "PHPStan es add-on, TypeScript es core language feature. Comparing band-aid solutions with native architecture 🩹🆚🏗️",
        createdAt: "2025-08-19T15:55:00Z"
      },
      {
        id: "c-253",
        authorId: 64,
        content: "'Malpractice' dice el que probablemente no puede deployar sin 15 containers y 3 CI/CD pipelines. LAMP stack: upload y funciona. Simplicity wins 📁⬆️",
        createdAt: "2025-08-19T16:20:00Z"
      },
      {
        id: "c-254",
        authorId: 32,
        content: "'Upload y funciona' hasta que necesitas scaling, monitoring, rollbacks... Modern DevOps exists for reasons. Production != hobby project 📊⚙️",
        createdAt: "2025-08-19T16:45:00Z"
      },
      {
        id: "c-255",
        authorId: 47,
        content: "$120k Node vs $80k PHP... WHERE? Glassdoor muestra PHP seniors a $110k+. Stop manipulating salary data para push agenda 💰📋",
        createdAt: "2025-08-19T17:10:00Z"
      },
      {
        id: "c-256",
        authorId: 37,
        content: "San Francisco, New York, Berlin... global market pays premium for modern stack experience. Regional PHP markets are different beast 🌍💼",
        createdAt: "2025-08-19T17:35:00Z"
      },
      {
        id: "c-257",
        authorId: 58,
        content: "'V8 performance' jajaja single-threaded bottleneck vs PHP-FPM multi-process. Node.js blocks en heavy computation, PHP spawns workers. Architecture 101 🧵⚡",
        createdAt: "2025-08-19T18:00:00Z"
      },
      {
        id: "c-258",
        authorId: 74,
        content: "Event loop + worker threads + cluster mode. Node.js isn't 2012 anymore. Meanwhile PHP still struggling with async without ReactPHP hacks 🔄⚡",
        createdAt: "2025-08-19T18:25:00Z"
      },
      {
        id: "c-259",
        authorId: 51,
        content: "Facebook, Wikipedia, Slack, Tumblr backend = PHP. Pero claro, Mark Zuckerberg no entiende de 'modern development' como tú 😏🏢",
        createdAt: "2025-08-19T18:50:00Z"
      }
    ]
  },
  {
    id: "p-049",
    authorId: 53,
    content: "THREAD: Por qué mi generación pudo comprarse casa y la actual no 🏠💰🧵 Mi historia real (nacido 1965): Empecé trabajando 12-14 horas diarias en una ferretería a los 18. Sábados completos, domingos medio día. NO había 'work-life balance' ni jornadas de 8 horas sagradas. RESULTADOS después de 10 años: ✅ Terreno de 300m² en Ate (1995) - $8,000 ✅ Casa construida poco a poco los fines de semana ✅ Camioneta Hilux usada pero propia ✅ 3 hijos educados en colegios privados ✅ Negocio propio (ferretería + construcción) LA FÓRMULA ERA SIMPLE: MÁS HORAS = MÁS PLATA = MÁS PATRIMONIO Los jóvenes de hoy: 'Solo trabajo mis 8 horas', 'overtime es explotación', 'necesito tiempo personal'... Perfecto, pero después no se quejen de vivir en casa de sus papás a los 30 🤷‍♂️ MENTALIDAD GANADORA: Si quieres extraordinario, tienes que HACER extraordinario. El éxito no viene en horario de oficina. Mientras tú descansas, tu competencia trabaja 💪⏰ #ÉticaLaboral #SuccessMindset #HusttleCulture #PatrimonyBuilding #TrabajoDuro",
    categories: ["trabajo", "generaciones", "éxito"],
    createdAt: "2025-08-10T16:45:00Z",
    reactions: {
      like: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }, { authorId: 47 }, { authorId: 64 }, { authorId: 51 }, { authorId: 67 }],
      love: [{ authorId: 45 }, { authorId: 18 }, { authorId: 60 }, { authorId: 75 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }, { authorId: 36 }],
      wow: [{ authorId: 14 }, { authorId: 33 }, { authorId: 52 }, { authorId: 40 }],
      sad: [{ authorId: 39 }, { authorId: 17 }, { authorId: 54 }],
      angry: [{ authorId: 23 }, { authorId: 42 }, { authorId: 37 }, { authorId: 74 }, { authorId: 29 }, { authorId: 56 }, { authorId: 78 }, { authorId: 19 }, { authorId: 85 }, { authorId: 22 }]
    },
    comments: [
      {
        id: "c-260",
        authorId: 64,
        content: "EXACTO! Yo también construí mi patrimonio trabajando 70+ horas semanales. Los millennials quieren resultado de campeón con esfuerzo de mediocre 👑💪",
        createdAt: "2025-08-10T17:30:00Z"
      },
      {
        id: "c-261",
        authorId: 23,
        content: "Terreno en Ate 1995 = $8,000. Hoy ese mismo terreno = $80,000. Salario mínimo 1995 = 200 soles. Hoy = 1025 soles. Matemáticas básicas: LA PROPORCIÓN CAMBIÓ 📊💀",
        createdAt: "2025-08-10T17:55:00Z"
      },
      {
        id: "c-262",
        authorId: 51,
        content: "Si trabajas solo 8 horas obviamente no vas a comprar nada. Yo sigo trabajando 12+ horas y sigo comprando propiedades. Esfuerzo = Resultados 🏗️💰",
        createdAt: "2025-08-10T18:20:00Z"
      },
      {
        id: "c-263",
        authorId: 78,
        content: "'Más horas = más plata' en trabajos por hora. En trabajos profesionales puedes generar más valor en menos tiempo con productividad inteligente 🧠⚡",
        createdAt: "2025-08-10T18:45:00Z"
      },
      {
        id: "c-264",
        authorId: 47,
        content: "'Productividad inteligente' jajaja código para decir 'quiero ganar más trabajando menos'. Success requires sacrifice, period 🎯💯",
        createdAt: "2025-08-10T19:10:00Z"
      },
      {
        id: "c-265",
        authorId: 37,
        content: "Glorificar el burnout como 'ética laboral' es tóxico. Japón tiene palabra para muerte por exceso de trabajo: KAROSHI. Vida > patrimonio 💔⚰️",
        createdAt: "2025-08-10T19:35:00Z"
      },
      {
        id: "c-266",
        authorId: 84,
        content: "Karoshi es por stress, no por trabajo duro. Si amas lo que haces, 14 horas se sienten como 8. Passion beats clock-watching 🔥❤️",
        createdAt: "2025-08-10T20:00:00Z"
      },
      {
        id: "c-267",
        authorId: 74,
        content: "En 1995 un salario básico compraba 8m² de terreno. Hoy compra 0.5m². Pero claro, el problema es que los jóvenes son 'mediocres' 🤡📐",
        createdAt: "2025-08-10T20:25:00Z"
      },
      {
        id: "c-268",
        authorId: 58,
        content: "Inflación existe, pero también existen oportunidades nuevas. E-commerce, digital services, crypto... Adapt or cry 💻🚀",
        createdAt: "2025-08-10T20:50:00Z"
      },
      {
        id: "c-269",
        authorId: 29,
        content: "Mi abuelo compró casa con sueldo de obrero. Mi papá necesitó crédito hipotecario. Yo necesito 30 años de deuda. Pero sí, somos 'mediocres' 🏠💸",
        createdAt: "2025-08-10T21:15:00Z"
      }
    ]
  },
  {
    id: "p-050",
    authorId: 27,
    content: "Controversial but true: La obsesión boomer con 'trabajar 14 horas diarias' es la razón por la que vivimos en una sociedad enferma 🤢⚡ REALIDAD ECONÓMICA que ignoran: 💡 Productividad per cápita subió 300% desde 1970 💡 Salarios reales bajaron 40% en mismo período 💡 Costo de vivienda subió 400% vs ingresos 💡 Educación universitaria: 1200% más cara 💡 Atención médica: 800% más cara DATOS DUROS: Casa promedio 1980 = 2.5x salario anual | Casa promedio 2025 = 8.5x salario anual NO ES FALTA DE 'ÉTICA LABORAL', ES ECONOMÍA ROTA 📊💀 Además, esa mentalidad de 'trabajar hasta morir' nos dio: ❌ Padres ausentes emocionalmente ❌ Divorcios por stress laboral ❌ Depresión y ansiedad epidémica ❌ Burnout normalizado ❌ Cero tiempo para salud mental/física FRANCIA: 35 horas semanales, 5 semanas vacaciones, mayor productividad que EEUU. NÓRDICOS: Work-life balance, mayores índices de felicidad y prosperidad. El problema NO son los jóvenes 'mediocres'. Es un sistema que exige más y paga menos 🌍⚖️ #WorkLifeBalance #EconomíaRota #MentalHealthMatters #SustainableWork",
    categories: ["trabajo", "economía", "sociedad"],
    createdAt: "2025-08-22T13:30:00Z",
    reactions: {
      like: [{ authorId: 23 }, { authorId: 42 }, { authorId: 37 }, { authorId: 74 }, { authorId: 29 }, { authorId: 56 }, { authorId: 78 }, { authorId: 19 }, { authorId: 85 }, { authorId: 22 }, { authorId: 65 }],
      love: [{ authorId: 61 }, { authorId: 25 }, { authorId: 72 }, { authorId: 55 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }],
      wow: [{ authorId: 14 }, { authorId: 33 }, { authorId: 52 }],
      sad: [{ authorId: 39 }, { authorId: 17 }, { authorId: 54 }],
      angry: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }, { authorId: 47 }, { authorId: 64 }, { authorId: 51 }, { authorId: 53 }]
    },
    comments: [
      {
        id: "c-270",
        authorId: 78,
        content: "PREACH! Mi papá trabajó 60+ horas semanales toda su vida. Resultado: 2 infartos, divorcio, depresión. ¿Eso es 'éxito'? No gracias 💔🏥",
        createdAt: "2025-08-22T14:15:00Z"
      },
      {
        id: "c-271",
        authorId: 31,
        content: "Estadísticas manipuladas para justificar mediocridad. Si no puedes competir con quien trabaja más, find excuses. Winners find ways 🏆💪",
        createdAt: "2025-08-22T14:40:00Z"
      },
      {
        id: "c-272",
        authorId: 85,
        content: "'Competir con quien trabaja más' mentalidad de cangrejo. El éxito no debería medirse en horas sino en impacto y bienestar integral 🦀➡️🧠",
        createdAt: "2025-08-22T15:05:00Z"
      },
      {
        id: "c-273",
        authorId: 64,
        content: "Francia 35 horas y nosotros queremos imitar países desarrollados con economías diferentes. En Perú si no trabajas extra, otro lo hará por menos 🇫🇷≠🇵🇪",
        createdAt: "2025-08-22T15:30:00Z"
      },
      {
        id: "c-274",
        authorId: 37,
        content: "Race to the bottom mentality. Por eso seguimos siendo país en desarrollo: normalizamos la explotación como 'competitividad' 📉🔄",
        createdAt: "2025-08-22T15:55:00Z"
      },
      {
        id: "c-275",
        authorId: 84,
        content: "'Padres ausentes'... mi papá trabajó 14 horas para darnos educación privada y universidad. Prefiero padre trabajador que presente pero pobre 🎓💰",
        createdAt: "2025-08-22T16:20:00Z"
      },
      {
        id: "c-276",
        authorId: 74,
        content: "False dichotomy. Se puede ser buen padre Y tener balance. Dinamarca, Suecia lo prueban: padres presentes + prosperidad económica 👨‍👩‍👧‍👦💎",
        createdAt: "2025-08-22T16:45:00Z"
      },
      {
        id: "c-277",
        authorId: 47,
        content: "Millennials citing países nórdicos con 5 millones de habitantes vs Perú con 33 millones. Context matters, scaling matters 📊🌍",
        createdAt: "2025-08-22T17:10:00Z"
      },
      {
        id: "c-278",
        authorId: 29,
        content: "Alemania 83 millones, Francia 68 millones, ambos con mejores work-life balance. Size isn't the issue, políticas públicas are 🏛️⚖️",
        createdAt: "2025-08-22T17:35:00Z"
      },
      {
        id: "c-279",
        authorId: 53,
        content: "Excuses, excuses everywhere. Mientras ustedes analizan estadísticas, otros construyen imperios trabajando smart AND hard. Resultado habla 🏗️👑",
        createdAt: "2025-08-22T18:00:00Z"
      }
    ]
  },
  {
    id: "p-051",
    authorId: 41,
    content: "Apple acaba de 'revolucionar' la tecnología nuevamente con iPhone 16 Pro 🍎📱✨ CARACTERÍSTICAS 'INNOVADORAS': 🔥 USB-C (solo 11 años después que Android) 🔥 Always-On Display (Samsung lo tuvo desde 2016) 🔥 120Hz ProMotion (OnePlus lo tuvo en 2019) 🔥 Wireless charging (Android desde 2012) 🔥 Multiple cameras (Huawei P20 Pro 2018) 🔥 Night mode photography (Google Pixel 2018) PERO EL GENIO ESTÁ EN EL MARKETING: • iPhone 16 Pro: $1,399 + AppleCare $299 + Case $89 + Charger sold separately $79 = $1,866 • Samsung S24 Ultra equivalente: $1,199 total con todo incluido Mi favorito: 'Dynamic Island' = notch glorificado que Samsung eliminó hace 3 años 😂 Apple fanboys van a decir 'pero la optimización, pero el ecosistema'... mientras pagan $79 por un cable USB-C que vale $5 en cualquier tienda 🤡💸 #AndroidSuperiority #AppleTax #InnovationTheft #OverpricedTech #iSheep",
    categories: ["tecnología", "smartphones", "apple"],
    createdAt: "2025-08-11T15:20:00Z",
    reactions: {
      like: [{ authorId: 32 }, { authorId: 78 }, { authorId: 29 }, { authorId: 85 }, { authorId: 22 }, { authorId: 65 }, { authorId: 74 }, { authorId: 56 }, { authorId: 19 }],
      love: [{ authorId: 37 }, { authorId: 47 }, { authorId: 83 }],
      laugh: [{ authorId: 26 }, { authorId: 69 }, { authorId: 36 }, { authorId: 73 }, { authorId: 24 }, { authorId: 52 }],
      wow: [{ authorId: 14 }, { authorId: 33 }],
      sad: [{ authorId: 39 }, { authorId: 17 }],
      angry: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }, { authorId: 64 }, { authorId: 51 }, { authorId: 67 }, { authorId: 18 }]
    },
    comments: [
      {
        id: "c-280",
        authorId: 78,
        content: "PREACH! Apple 'inventa' función de copiar-pegar en 2025 y iSheep: 'WOW QUÉ INNOVACIÓN!' 🐑📋. Meanwhile Android tuvo eso desde 2009 😂",
        createdAt: "2025-08-11T16:05:00Z"
      },
      {
        id: "c-281",
        authorId: 31,
        content: "Pobres con Android no entienden que pagamos por CALIDAD y STATUS. Mi iPhone es símbolo de éxito, tu Xiaomi es símbolo de... ¿pobreza? 💎👑",
        createdAt: "2025-08-11T16:30:00Z"
      },
      {
        id: "c-282",
        authorId: 85,
        content: "@31 'Status' = pagar $1400 por lo mismo que hace un Pixel por $699. Congrats, eres el cliente favorito de Tim Cook 🤡💸",
        createdAt: "2025-08-11T16:55:00Z"
      },
      {
        id: "c-283",
        authorId: 48,
        content: "Ecosistema Apple = elegancia, fluidez, simplicidad. Android = menú de 500 opciones que nadie usa + lag + malware. Class vs mass 🎭✨",
        createdAt: "2025-08-11T17:20:00Z"
      },
      {
        id: "c-284",
        authorId: 74,
        content: "@48 'Simplicidad' = no poder cambiar app predeterminada hasta iOS 14. 'Elegancia' = notch gigante que Samsung eliminó hace años 📱🤮",
        createdAt: "2025-08-11T17:45:00Z"
      },
      {
        id: "c-285",
        authorId: 76,
        content: "Android users flexing specs mientras usan phones que se vuelven lentos en 6 meses. iPhone 6s del 2015 sigue recibiendo updates. Longevidad = valor 📅💪",
        createdAt: "2025-08-11T18:10:00Z"
      },
      {
        id: "c-286",
        authorId: 29,
        content: "@76 'Longevidad' mientras Apple te throttlea la batería sin avisar. Planned obsolescence kings predicando durabilidad 🔋📉",
        createdAt: "2025-08-11T18:35:00Z"
      },
      {
        id: "c-287",
        authorId: 64,
        content: "Green bubbles vs blue bubbles dice todo. iPhone users have taste, Android users have... Google ads en notification panel 💚💙",
        createdAt: "2025-08-11T19:00:00Z"
      },
      {
        id: "c-288",
        authorId: 37,
        content: "@64 Imaginen discriminar por color de mensaje 😂 Peak iPhone user mentality: superficial sobre sustancia. Very classy indeed 🎨🧠",
        createdAt: "2025-08-11T19:25:00Z"
      },
      {
        id: "c-289",
        authorId: 12,
        content: "Android = para nerds tech. iPhone = para people que quieren que el teléfono simplemente FUNCIONE sin tweaking 24/7. Priorities 🔧📱",
        createdAt: "2025-08-11T19:50:00Z"
      }
    ]
  },
  {
    id: "p-052",
    authorId: 63,
    content: "Unpopular opinion: iPhone sigue siendo superior a cualquier Android y los specs no lo son todo 🍎👑 REALIDAD que Android fanboys ignoran: 📱 iOS optimización > raw specs. Mi iPhone 15 Pro es más fluido que tu Galaxy S24 Ultra con 12GB RAM 📱 App Store curation > Play Store malware festival 📱 5+ años de updates vs 2 años máximo Android 📱 Privacy protection real vs Google surveillance capitalism 📱 Ecosystem integration que ningún OEM puede replicar 📱 Build quality premium vs plastic fantastic diversión PERO LO MÁS IMPORTANTE: Status y elegancia que Android JAMÁS va a tener. Llegar a reunión con iPhone = profesionalismo. Llegar con Android = 'ah, el de IT está aquí' 💼✨ Sí, es más caro. Quality costs money. Si no puedes afford premium experience, stay en tu lane con Xiaomi RedMi de $200 💰🛤️ Los números no mienten: • iPhone = 55% de mercado premium ($800+) • Android = domina mercado budget/mid-range • Resale value iPhone vs Android = no comparison Cry about 'innovation theft' mientras nosotros disfrutamos productos que ACTUALLY work 😎🏆 #iPhoneSuperiority #QualityOverQuantity #PremiumExperience #EleganceMatters",
    categories: ["tecnología", "smartphones", "lifestyle"],
    createdAt: "2025-08-17T12:10:00Z",
    reactions: {
      like: [{ authorId: 31 }, { authorId: 48 }, { authorId: 76 }, { authorId: 12 }, { authorId: 84 }, { authorId: 58 }, { authorId: 64 }, { authorId: 51 }, { authorId: 67 }, { authorId: 18 }],
      love: [{ authorId: 45 }, { authorId: 60 }, { authorId: 75 }],
      laugh: [{ authorId: 32 }, { authorId: 78 }, { authorId: 29 }, { authorId: 85 }, { authorId: 26 }, { authorId: 69 }],
      wow: [{ authorId: 14 }, { authorId: 33 }, { authorId: 52 }],
      sad: [{ authorId: 39 }, { authorId: 17 }],
      angry: [{ authorId: 22 }, { authorId: 65 }, { authorId: 74 }, { authorId: 56 }, { authorId: 19 }, { authorId: 37 }, { authorId: 47 }, { authorId: 83 }, { authorId: 41 }]
    },
    comments: [
      {
        id: "c-290",
        authorId: 84,
        content: "FACTS! Los usuarios de Android están obsesionados con las especificaciones, como si fueran a construir PC para juegos. Los usuarios de iPhone buscan elegancia y sofisticación. Diferentes ligas. 💎🤖",
        createdAt: "2025-08-17T12:55:00Z"
      },
      {
        id: "c-291",
        authorId: 41,
        content: "'Status' basado en logo de manzana 😂 Peak insecurity. Mi OnePlus hace TODO lo mismo por la mitad del precio + features que Apple 'inventará' en 2027 🚀⚡",
        createdAt: "2025-08-17T13:20:00Z"
      },
      {
        id: "c-292",
        authorId: 76,
        content: "OnePlus crea teléfonos para nerds tecnológicos. iPhone hace declaraciones para personas exitosas. Adivina en qué categoría estás. 📈🎯",
        createdAt: "2025-08-17T13:45:00Z"
      },
      {
        id: "c-293",
        authorId: 78,
        content: "'Protección de privacidad' mientras Siri graba conversaciones y iTunes escanea tu música. El marketing de Apple es un lavado de cerebro del siguiente nivel 🧠🔄",
        createdAt: "2025-08-17T14:10:00Z"
      },
      {
        id: "c-294",
        authorId: 58,
        content: "Al menos Apple lucha contra el FBI para proteger los datos de sus usuarios. Google vende tus datos como modelo de negocio. Elige tu veneno con cuidado. 🛡️💰",
        createdAt: "2025-08-17T14:35:00Z"
      },
      {
        id: "c-295",
        authorId: 37,
        content: "'El de IT está aquí', el estereotipo muestra la superficialidad con la que piensan los usuarios de iPhone. Imaginen juzgar la competencia por la marca del teléfono. 🤡👨‍💻",
        createdAt: "2025-08-17T15:00:00Z"
      },
      {
        id: "c-296",
        authorId: 64,
        content: "La imagen importa en el mundo empresarial. Nos guste o no, la percepción es igual a la realidad. Éxito en proyectos de iPhone, proyectos de Android... consciencia presupuestaria. 💼📊",
        createdAt: "2025-08-17T15:25:00Z"
      },
      {
        id: "c-297",
        authorId: 74,
        content: "'Build quality premium' con back de cristal que se rompe con una caída vs Gorilla Glass Victus que sobrevive apocalipsis zombie 📱💥",
        createdAt: "2025-08-17T15:50:00Z"
      },
      {
        id: "c-298",
        authorId: 51,
        content: "That's what AppleCare+ is for. Comprehensive protection que Android OEMs can't match. Premium support para premium product 🛡️⭐",
        createdAt: "2025-08-17T16:15:00Z"
      },
      {
        id: "c-299",
        authorId: 83,
        content: "'Stay in your lane con Xiaomi' - El clasismo tecnológico es real. Sorry por no hipotecar casa para comprar teléfono overpriced 🏠📱",
        createdAt: "2025-08-17T16:40:00Z"
      }
    ]
  },
];