const pestPages = {
  cucarachas: {
    icon: '🪳',
    badge: 'Tratamiento especializado',
    title: 'Control de cucarachas en Puerto Rico',
    subtitle: 'Elimina cucarachas de tu hogar o negocio con un servicio profesional, seguro y diseñado para cortar la infestación desde la raíz.',
    promise: 'No solo fumigamos: identificamos, tratamos y prevenimos.',
    promiseText: 'Atacamos áreas de anidación, rutas de entrada, humedad y residuos que mantienen viva la infestación.',
    identify: [
      ['🌙', 'Actividad nocturna', 'Ver cucarachas de noche en cocina, baño o gabinetes suele indicar actividad escondida.'],
      ['⚫', 'Excremento visible', 'Puntos oscuros parecidos a pimienta en gavetas, esquinas, zócalos o detrás de equipos.'],
      ['🥚', 'Huevos o cápsulas', 'Cápsulas marrones cerca de grietas, electrodomésticos o áreas húmedas.'],
      ['👃', 'Olor fuerte', 'Infestaciones activas pueden producir olor desagradable y persistente.'],
      ['🧊', 'Presencia en nevera o estufa', 'El calor de motores y la comida atraen cucarachas a electrodomésticos.'],
      ['👀', 'Cucarachas de día', 'Si salen durante el día, puede haber alta presión de población escondida.']
    ],
    danger: [
      ['🦠', 'Contaminan alimentos', 'Pueden caminar sobre basura, drenajes y luego pasar por superficies donde preparas comida.'],
      ['🤧', 'Alergias y asma', 'Restos, saliva y excremento pueden agravar alergias, especialmente en niños.'],
      ['🏠', 'Se reproducen rápido', 'Una señal pequeña puede convertirse en una infestación seria en poco tiempo.'],
      ['🍽️', 'Riesgo comercial', 'En restaurantes o negocios pueden afectar reputación, inspecciones y confianza del cliente.']
    ],
    immediate: ['No rocíes químicos sin identificar el foco; puedes dispersarlas.', 'Guarda alimentos en envases cerrados.', 'Limpia grasa detrás de estufa, nevera y microondas.', 'Sella bolsas de basura y retíralas con frecuencia.', 'Toma fotos o anota dónde las viste para orientar al técnico.'],
    waiting: ['Evita mover cajas o electrodomésticos sin cuidado para no expandirlas.', 'Mantén mascotas y niños lejos de áreas con actividad.', 'No mezcles productos caseros con insecticidas.', 'Deja acceso a gabinetes, cocina, baño y zócalos.', 'Separa platos y utensilios si habrá tratamiento en cocina.'],
    levels: ['Una o dos señales aisladas en cocina o baño.', 'Cucarachas varias veces por semana o excremento visible.', 'Actividad diaria, cucarachas de día, huevos o múltiples áreas afectadas.'],
    types: [
      ['Cucaracha alemana', 'Pequeña, rápida y común en cocinas. Suele esconderse en gabinetes, motores de nevera, estufa y grietas.'],
      ['Cucaracha americana', 'Más grande, frecuente en drenajes, baños, patios, alcantarillas y áreas húmedas.']
    ],
    zones: ['Cocina', 'Baños', 'Gabinetes', 'Grietas', 'Drenajes', 'Zócalos', 'Detrás de nevera', 'Áreas de basura'],
    homeTreatment: ['Puede matar solo las visibles.', 'Puede dispersar la infestación.', 'No elimina huevos ni rutas.', 'No identifica humedad, acceso o anidación.'],
    professionalTreatment: ['Inspección de focos y rutas.', 'Tratamiento dirigido y residual.', 'Recomendaciones preventivas.', 'Seguimiento y garantía según el caso.'],
    benefits: ['Técnicos con experiencia local', 'Productos aplicados de forma responsable', 'Plan para hogares y negocios', 'Instrucciones claras antes y después', 'Atención en todo Puerto Rico', 'Opciones seguras para niños y mascotas'],
    testimonial: ['“Tenía cucarachas en la cocina y pensé que era imposible controlarlas. Avilés Pest Control encontró el foco, explicó todo y en pocos días vimos la diferencia.”', 'Cliente residencial, Bayamón'],
    extras: [['Frecuencia recomendada', 'Prevención cada 3 a 6 meses; mensual para restaurantes o áreas de alto riesgo.'], ['Garantía', 'El servicio puede incluir seguimiento según nivel de infestación y tipo de propiedad.'], ['Seguridad', 'Usamos métodos profesionales y damos instrucciones claras para niños y mascotas.']],
    question: '¿Estás viendo cucarachas y quieres detener la infestación antes de que se multiplique?'
  },
  hormigas: {
    icon: '🐜',
    badge: 'Control de colonias',
    title: 'Control de hormigas en Puerto Rico',
    subtitle: 'Tratamientos diseñados para ubicar rutas, nidos y fuentes de alimento, evitando que vuelvan a invadir tu propiedad.',
    promise: 'Cortamos la ruta, no solo la fila visible.',
    promiseText: 'Evaluamos puntos de entrada, humedad, jardines, grietas y áreas de comida.',
    identify: [['➡️','Filas constantes','Líneas de hormigas hacia comida, fregadero o grietas.'],['🍯','Atracción por dulce o grasa','Actividad cerca de azúcar, basura o comida de mascotas.'],['🧱','Entrada por grietas','Aparecen desde ventanas, zócalos, puertas o paredes.'],['🌿','Nidos exteriores','Actividad en patios, tiestos o jardines.']],
    danger: [['🥘','Contaminan alimentos','Pueden invadir despensas y superficies de preparación.'],['🏠','Difíciles de cortar','Si no se trata el nido, la colonia cambia de ruta.'],['🐾','Molestia constante','Afectan cocina, baño, patio y áreas de mascotas.']],
    immediate: ['Limpia rutas visibles con agua y jabón.', 'Guarda alimentos y comida de mascotas.', 'No selles una entrada hasta identificar la ruta completa.', 'Evita insecticidas fuertes sobre la fila; pueden dividir la colonia.'],
    waiting: ['Deja visible la ruta para la inspección.', 'Retira comida expuesta.', 'Revisa ventanas y puertas.', 'Mantén áreas secas.'],
    levels: ['Fila ocasional en una zona.', 'Varias rutas o actividad diaria.', 'Nidos visibles o múltiples áreas invadidas.'],
    types: [['Hormiga de azúcar','Busca dulces y migas en cocina y comedor.'],['Hormiga de patio','Anida afuera y entra buscando comida o humedad.']],
    zones: ['Cocina','Despensa','Ventanas','Puertas','Patios','Tiestos','Baños','Comida de mascotas'],
    homeTreatment: ['Elimina solo las hormigas visibles.','Puede provocar nuevas rutas.','No llega al nido.'],
    professionalTreatment: ['Ubicación de rutas y nidos.','Tratamientos dirigidos.','Prevención de entradas.'],
    benefits: ['Control de colonias','Tratamiento interior y exterior','Plan preventivo','Servicio para hogares y comercios'],
    testimonial: ['“Las hormigas volvían todos los días. Después del servicio dejaron de salir por la cocina y nos explicaron cómo prevenirlas.”','Cliente en Caguas'],
    extras: [['Frecuencia recomendada','Cada 3 a 4 meses si hay mucha vegetación o humedad.'],['Garantía','Seguimiento según la actividad de la colonia.'],['Seguridad','Aplicación profesional en zonas críticas.']],
    question: '¿Las hormigas siguen apareciendo aunque limpies todos los días?'
  },
  roedores: {
    icon: '🐭',
    badge: 'Control y exclusión',
    title: 'Control de roedores en Puerto Rico',
    subtitle: 'Protege tu hogar o negocio con control profesional de ratones y ratas, sellado de accesos y monitoreo.',
    promise: 'Controlamos la actividad y prevenimos nuevas entradas.',
    promiseText: 'Buscamos señales, accesos, rutas, alimentos y refugios.',
    identify: [['💩','Excremento','Pequeños pellets en gabinetes, almacenes o esquinas.'],['🔊','Ruidos','Sonidos en techo, paredes o cocina de noche.'],['🦷','Mordidas','Cables, empaques o madera roída.'],['👣','Rutas marcadas','Manchas o rastros en paredes y bordes.']],
    danger: [['🦠','Riesgo sanitario','Pueden contaminar alimentos y superficies.'],['⚡','Daños eléctricos','Muerden cables y pueden causar fallas.'],['🏢','Riesgo para negocios','Afectan cumplimiento, inventario y reputación.']],
    immediate: ['Guarda comida en envases rígidos.', 'Retira basura y cajas acumuladas.', 'No manipules excremento sin protección.', 'Identifica posibles huecos o accesos.'],
    waiting: ['Mantén niños y mascotas lejos de áreas activas.', 'No tapes huecos sin inspección completa.', 'Deja acceso a almacenes y cocina.', 'Anota horarios de ruidos o avistamientos.'],
    levels: ['Rastro aislado o ruido ocasional.', 'Excremento frecuente o daños visibles.', 'Avistamientos, múltiples rastros o nido probable.'],
    types: [['Ratón doméstico','Pequeño, rápido y frecuente en interiores.'],['Rata de techo o alcantarilla','Más grande; usa techos, patios, drenajes o almacenes.']],
    zones: ['Cocina','Almacenes','Techos','Garajes','Patios','Drenajes','Cuartos eléctricos','Restaurantes'],
    homeTreatment: ['Trampas sin estrategia pueden fallar.','No corrige puntos de entrada.','Puede dejar actividad oculta.'],
    professionalTreatment: ['Inspección de accesos.','Trampeo y monitoreo.','Recomendaciones de exclusión.'],
    benefits: ['Control discreto','Plan para negocios','Reducción de accesos','Monitoreo profesional'],
    testimonial: ['“Escuchábamos ruidos en el techo. Encontraron entradas que no habíamos visto y el problema bajó rápido.”','Cliente en Carolina'],
    extras: [['Frecuencia recomendada','Monitoreo mensual en negocios de comida o almacenes.'],['Garantía','Depende de exclusión y condiciones del área.'],['Seguridad','Ubicación estratégica lejos de niños y mascotas.']],
    question: '¿Escuchas ruidos o encontraste excremento y necesitas actuar rápido?'
  },
  comejen: {
    icon: '🪲',
    badge: 'Protección estructural',
    title: 'Control de comején y termitas en Puerto Rico',
    subtitle: 'Detecta y trata termitas antes de que comprometan madera, muebles o estructuras de tu propiedad.',
    promise: 'Inspección cuidadosa y tratamiento especializado.',
    promiseText: 'El comején puede trabajar oculto por meses; una evaluación profesional evita daños mayores.',
    identify: [['🪵','Madera hueca','Sonido hueco o madera debilitada.'],['🧱','Túneles de barro','Líneas o tubos en paredes, columnas o cimientos.'],['🪽','Alas caídas','Alas pequeñas cerca de ventanas o luces.'],['🚪','Puertas trabadas','Cambios por humedad o daño interno.']],
    danger: [['🏚️','Daño estructural','Puede afectar madera y elementos importantes.'],['💸','Costos mayores','Mientras más tarde se trate, más costosa puede ser la reparación.'],['👁️','Actividad oculta','Muchas veces no se ve hasta que el daño es notable.']],
    immediate: ['No rompas túneles sin tomar foto.', 'Evita mover madera infectada a otras áreas.', 'Reduce humedad y filtraciones.', 'Agenda inspección cuanto antes.'],
    waiting: ['Guarda evidencia visible.', 'Permite acceso a áreas de madera.', 'No apliques productos caseros sobre túneles.', 'Revisa marcos, closets y gabinetes.'],
    levels: ['Una señal localizada.', 'Túneles o alas en varias áreas.', 'Daño visible, madera débil o actividad extendida.'],
    types: [['Termita subterránea','Construye túneles desde suelo y humedad.'],['Comején de madera seca','Puede afectar muebles, puertas y marcos.']],
    zones: ['Marcos','Closets','Muebles','Zócalos','Techos','Cimientos','Columnas','Gabinetes'],
    homeTreatment: ['Puede ocultar señales.','No llega a la colonia.','No protege estructura completa.'],
    professionalTreatment: ['Inspección técnica.','Tratamiento según especie.','Recomendaciones de humedad y prevención.'],
    benefits: ['Evaluación estructural','Tratamientos específicos','Prevención de daños','Documentación clara'],
    testimonial: ['“Pensábamos que era humedad. Avilés identificó comején y trató el área antes de que el daño siguiera.”','Cliente en Ponce'],
    extras: [['Frecuencia recomendada','Inspección anual; más frecuente si hubo actividad previa.'],['Garantía','Puede variar según tratamiento y condiciones estructurales.'],['Seguridad','Aplicación controlada por técnicos.']],
    question: '¿Viste túneles, alas o madera débil y quieres evitar daños mayores?'
  },
  'moscas-mosquitos': {
    icon: '🦟',
    badge: 'Control ambiental',
    title: 'Control de moscas y mosquitos en Puerto Rico',
    subtitle: 'Reduce la actividad de insectos voladores con tratamientos dirigidos a criaderos, humedad y áreas de descanso.',
    promise: 'Menos molestia, más tranquilidad.',
    promiseText: 'Trabajamos patios, drenajes, basura, vegetación y zonas húmedas.',
    identify: [['💧','Agua acumulada','Mosquitos se reproducen en agua estancada.'],['🗑️','Basura o materia orgánica','Moscas aumentan cerca de residuos.'],['🌿','Vegetación densa','Áreas de sombra y humedad sostienen actividad.'],['🚪','Entrada al interior','Actividad cerca de puertas, ventanas y luces.']],
    danger: [['🦠','Riesgos sanitarios','Moscas contaminan superficies y alimentos.'],['🩹','Picadas frecuentes','Mosquitos afectan descanso y comodidad.'],['🏢','Impacto comercial','En restaurantes afecta experiencia del cliente.']],
    immediate: ['Elimina agua estancada.', 'Mantén zafacones cerrados.', 'Limpia drenajes.', 'Instala o revisa screens.'],
    waiting: ['Corta vegetación cercana.', 'Evita dejar comida expuesta.', 'Identifica áreas con más actividad.', 'Mantén puertas cerradas.'],
    levels: ['Actividad ocasional.', 'Picadas o moscas frecuentes.', 'Criaderos visibles o actividad diaria intensa.'],
    types: [['Mosquito común','Se reproduce en agua y áreas húmedas.'],['Mosca doméstica','Atraída por basura, comida y materia orgánica.']],
    zones: ['Patios','Drenajes','Zafacones','Cocina','Restaurantes','Jardines','Terrazas','Áreas con agua'],
    homeTreatment: ['Alivio temporal.','No elimina criaderos.','Requiere repetición constante.'],
    professionalTreatment: ['Identificación de criaderos.','Tratamiento de áreas críticas.','Recomendaciones ambientales.'],
    benefits: ['Control interior y exterior','Ideal para negocios','Reducción de criaderos','Plan preventivo'],
    testimonial: ['“El patio era imposible por los mosquitos. El servicio redujo muchísimo la actividad.”','Cliente en Humacao'],
    extras: [['Frecuencia recomendada','Cada 30 a 60 días en áreas con humedad o patios activos.'],['Garantía','Seguimiento según clima y criaderos.'],['Seguridad','Orientación para mascotas, niños y áreas exteriores.']],
    question: '¿Los mosquitos o moscas están afectando tu casa, patio o negocio?'
  },
  'pulgas-garrapatas': {
    icon: '🐾',
    badge: 'Protección para familia y mascotas',
    title: 'Control de pulgas y garrapatas en Puerto Rico',
    subtitle: 'Tratamientos para interiores, patios y áreas donde descansan mascotas, con enfoque en cortar el ciclo de reproducción.',
    promise: 'Protegemos tus espacios y tus mascotas.',
    promiseText: 'El control efectivo requiere tratar ambiente, hábitos y zonas de descanso.',
    identify: [['🐕','Mascotas rascándose','Rascado excesivo o irritación.'],['🦵','Picadas en tobillos','Picadas pequeñas en piernas o pies.'],['🛏️','Actividad en camas o muebles','Pulgas pueden esconderse en telas.'],['🌱','Patios activos','Garrapatas en grama, sombra o áreas de mascotas.']],
    danger: [['🤕','Picadas e irritación','Afectan personas y animales.'],['🔁','Ciclo rápido','Huevos y larvas mantienen el problema si no se trata bien.'],['🐾','Riesgo para mascotas','Pueden transmitir enfermedades o causar anemia en casos severos.']],
    immediate: ['Consulta al veterinario para tratar mascotas.', 'Lava camas y mantas con agua caliente.', 'Aspira alfombras y muebles.', 'Evita que mascotas entren a zonas activas.'],
    waiting: ['Guarda textiles lavados en bolsas limpias.', 'Corta grama y limpia patios.', 'Deja acceso a áreas de descanso de mascotas.', 'No mezcles productos veterinarios con químicos caseros.'],
    levels: ['Picadas o rascado ocasional.', 'Actividad frecuente en mascotas o muebles.', 'Picadas múltiples, patio activo o infestación extendida.'],
    types: [['Pulga','Pequeña, salta y se reproduce rápido en textiles.'],['Garrapata','Se adhiere a mascotas y puede estar en patios o vegetación.']],
    zones: ['Camas de mascotas','Sofás','Alfombras','Patios','Grama','Terrazas','Cuartos','Vehículos'],
    homeTreatment: ['Puede dejar huevos vivos.','No trata exterior completo.','Reinfestación común si mascotas no se tratan.'],
    professionalTreatment: ['Tratamiento interior/exterior.','Enfoque en ciclo de vida.','Guía para mascotas y textiles.'],
    benefits: ['Plan para hogares con mascotas','Tratamiento de patio','Instrucciones claras','Prevención de reinfestación'],
    testimonial: ['“Después de tratar la casa y el patio, las picadas bajaron y las mascotas estuvieron mucho más tranquilas.”','Cliente en Toa Alta'],
    extras: [['Frecuencia recomendada','Cada 30 días durante actividad alta; luego prevención trimestral.'],['Garantía','Depende del control simultáneo de mascotas y ambiente.'],['Seguridad','Se dan tiempos de reentrada y cuidado para animales.']],
    question: '¿Tu familia o tus mascotas están sufriendo picadas?'
  },
  'salamandras-iguanas': {
    icon: '🦎',
    badge: 'Manejo y prevención',
    title: 'Control de salamandras e iguanas en Puerto Rico',
    subtitle: 'Manejo profesional de reptiles invasivos o molestos en patios, estructuras, jardines y áreas exteriores.',
    promise: 'Soluciones responsables para proteger tu propiedad.',
    promiseText: 'Evaluamos accesos, refugios, alimento, vegetación y puntos de entrada.',
    identify: [['👣','Avistamientos frecuentes','Aparecen en paredes, patios, techos o jardines.'],['🌿','Daño a plantas','Iguanas pueden afectar huertos y ornamentales.'],['🧱','Entrada a estructuras','Grietas y huecos permiten acceso.'],['💩','Excremento visible','Señales en terrazas, aceras o patios.']],
    danger: [['🏡','Daños exteriores','Pueden afectar plantas, jardines o áreas de techo.'],['⚠️','Molestia y riesgo','Pueden asustar, ensuciar o provocar situaciones incómodas.'],['🔁','Regresan si hay refugio','Sin prevención, vuelven a áreas cómodas.']],
    immediate: ['No intentes manipularlos sin experiencia.', 'Identifica por dónde entran o descansan.', 'Retira alimento o frutas caídas.', 'Mantén patios despejados.'],
    waiting: ['Cierra accesos simples si es seguro.', 'No los acorrales.', 'Mantén mascotas lejos.', 'Toma fotos de zonas donde aparecen.'],
    levels: ['Avistamiento ocasional.', 'Presencia frecuente en patio o paredes.', 'Daño visible, múltiples individuos o entrada a estructura.'],
    types: [['Salamandras','Buscan insectos, humedad y grietas.'],['Iguanas','Frecuentes en patios, árboles, techos y jardines.']],
    zones: ['Patios','Jardines','Techos','Paredes','Grietas','Terrazas','Árboles','Huertos'],
    homeTreatment: ['Puede ser riesgoso manipularlas.','No corrige refugios.','No previene regreso.'],
    professionalTreatment: ['Evaluación de acceso.','Manejo responsable.','Recomendaciones de exclusión y limpieza.'],
    benefits: ['Manejo cuidadoso','Prevención exterior','Protección de jardines','Orientación para evitar regreso'],
    testimonial: ['“Teníamos iguanas dañando el jardín. Nos orientaron, trabajaron el área y redujeron mucho la presencia.”','Cliente en Dorado'],
    extras: [['Frecuencia recomendada','Inspección preventiva cada 3 a 6 meses en áreas verdes.'],['Garantía','Depende de accesos, vegetación y presión exterior.'],['Seguridad','No se recomienda manipular sin orientación.']],
    question: '¿Estás viendo reptiles con frecuencia en tu patio o estructura?'
  }
};

const params = new URLSearchParams(window.location.search);
const slug = params.get('tipo') || 'cucarachas';
const data = pestPages[slug] || pestPages.cucarachas;

const $ = id => document.getElementById(id);
const list = (items, className = '') => items.map(item => `<li class="${className}">${item}</li>`).join('');
const cardList = items => items.map(([icon, title, text]) => `
  <article class="feature-card pest-reveal">
    <span>${icon}</span>
    <h3>${title}</h3>
    <p>${text}</p>
  </article>
`).join('');

document.title = `${data.title} | Avilés Pest Control`;
$('pestIcon').textContent = data.icon;
$('pestBadge').textContent = data.badge;
$('pestTitle').textContent = data.title;
$('pestSubtitle').textContent = data.subtitle;
$('pestPromise').textContent = data.promise;
$('pestPromiseText').textContent = data.promiseText;
$('identifyList').innerHTML = cardList(data.identify);
$('dangerList').innerHTML = data.danger.map(([icon, title, text]) => `
  <div class="stack-item pest-reveal"><span>${icon}</span><div><strong>${title}</strong><p>${text}</p></div></div>
`).join('');
$('immediateActions').innerHTML = list(data.immediate);
$('waitingActions').innerHTML = list(data.waiting);
$('levelLow').textContent = data.levels[0];
$('levelMedium').textContent = data.levels[1];
$('levelHigh').textContent = data.levels[2];
$('typeGrid').innerHTML = data.types.map(([title, text]) => `<article class="type-card pest-reveal"><h3>${title}</h3><p>${text}</p></article>`).join('');
$('zoneGrid').innerHTML = data.zones.map(zone => `<article class="zone-card pest-reveal"><span>⌖</span><h3>${zone}</h3><p>Área común de actividad que debe inspeccionarse durante el servicio.</p></article>`).join('');
$('homeTreatment').innerHTML = list(data.homeTreatment);
$('professionalTreatment').innerHTML = list(data.professionalTreatment);
$('benefitGrid').innerHTML = data.benefits.map(item => `<article class="benefit-card pest-reveal"><span>✓</span><h3>${item}</h3><p>Parte de un servicio diseñado para dar confianza, claridad y resultados sostenibles.</p></article>`).join('');
$('testimonialText').textContent = data.testimonial[0];
$('testimonialName').textContent = data.testimonial[1];
$('extraGrid').innerHTML = data.extras.map(([title, text]) => `<div class="extra-row"><strong>${title}</strong><p>${text}</p></div>`).join('');
$('conversionQuestion').textContent = data.question;

document.querySelectorAll('.pest-reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.pest-reveal').forEach(el => observer.observe(el));
