// ─── STATE ───
const state = {
  theme: localStorage.getItem('theme') || 'light',
  lang: localStorage.getItem('lang') || 'es',
  loggedIn: false,
  plagas: ['Cucarachas','Hormigas','Roedores','Comején / Termitas','Moscas y Mosquitos','Pulgas y Garrapatas','Salamandras e Iguanas'],
  testimonials: [
    {name:'María Rodríguez',place:'San Juan, PR',text:'"Excelente servicio. Llegaron puntual, fueron muy profesionales y el resultado fue increíble. No hemos visto ni una cucaracha desde entonces. ¡100% recomendado!"'},
    {name:'José López',place:'Bayamón, PR',text:'"Tenía un problema serio de comején en mi casa y Avilés Pest Control lo resolvió completamente. Muy profesionales, precios justos y excelente atención al cliente."'},
    {name:'Carmen Nieves',place:'Ponce, PR',text:'"Llamé por una emergencia de roedores en mi restaurante y respondieron en pocas horas. Resolvieron el problema rápido y de forma discreta. Son los mejores de Puerto Rico."'},
  ],
  contact: {tel1:'787-299-7512', tel2:'787-678-4889', email:'avilespestcontrol@gmail.com'}
};

// ─── THEME ───
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  document.getElementById('themeToggleMobile').checked = (t==='dark');
  document.querySelectorAll('.theme-toggle').forEach(el => el.checked = (t==='dark'));
  document.querySelectorAll('.theme-label-text').forEach(el => el.textContent = t === 'dark' ? 'Modo Oscuro' : 'Modo Claro');
}
applyTheme(state.theme);
document.getElementById('themeToggleMobile').addEventListener('change', e => applyTheme(e.target.checked?'dark':'light'));

// ─── LANG ───
const texts = {
  es: {
    hero_badge:'✦ Servicio Profesional Certificado', h1:'Protegemos tu <em>hogar y negocio</em> en todo Puerto Rico',
    hero_sub:'Soluciones de control de plagas rápidas, seguras y efectivas. Residencial, comercial, autos, botes y campers en toda la isla.',
    cta:'📋 Solicitar Servicio', call:'📞 Llamar Ahora', langLabel:'Español',
    stat_clientes:'Clientes Satisfechos', stat_municipios:'Municipios', stat_atencion:'Atención',
    
    // Hero cards
    card_residencial:'Residencial', card_residencial_sub:'Tu hogar libre de plagas',
    card_comercial:'Comercial', card_comercial_sub:'Negocios protegidos',
    card_autos:'Autos', card_autos_sub:'Vehículos libres de plagas',
    card_botes:'Botes & Campers', card_botes_sub:'Embarcaciones protegidas',
    
    // Services
    servicios_tag:'Nuestros Servicios', servicios:'Servicios', servicios_sub:'Soluciones para cada <em>necesidad</em>',
    servicios_lead:'Ofrecemos servicios completos de fumigación y control de plagas para todo tipo de propiedad en Puerto Rico.',
    servicio_residencial:'Residencial', servicio_residencial_sub:'Hogares y apartamentos',
    servicio_comercial:'Comercial', servicio_comercial_sub:'Oficinas, restaurantes, tiendas',
    servicio_autos:'Autos', servicio_autos_sub:'Interiores y exteriores',
    servicio_botes:'Botes', servicio_botes_sub:'Embarcaciones de todo tipo',
    servicio_campers:'Campers', servicio_campers_sub:'Vehículos recreativos',
    plagas_title:'🎯 Plagas que eliminamos:',
    plaga_cucarachas:'Cucarachas', plaga_hormigas:'Hormigas', plaga_roedores:'Roedores',
    plaga_comejen:'Comején / Termitas', plaga_moscas:'Moscas y Mosquitos', plaga_pulgas:'Pulgas y Garrapatas', plaga_salamandras:'Salamandras e Iguanas',
    
    // About
    nosotros_tag:'Sobre Nosotros', nosotros:'Nosotros', nosotros_sub:'Expertos en control de plagas <em>en toda la isla</em>',
    nosotros_text1:'Avilés Pest Control es una empresa puertorriqueña dedicada a-brindar soluciones profesionales, seguras y efectivas de control de plagas. Atendemos los 78 municipios de Puerto Rico con rapidez y compromiso.',
    nosotros_text2:'Contamos con técnicos certificados y productos aprobados que garantizan resultados duraderos sin comprometer la salud de tu familia o mascotas.',
    mision:'🎯 Misión', mision_text:'Proteger la salud y tranquilidad de nuestros clientes brindando servicios de control de plagas confiables, responsables y accesibles en todo Puerto Rico.',
    vision:'🌟 Visión', vision_text:'Ser la empresa líder en control de plagas en Puerto Rico, reconocida por la excelencia en servicio, la confianza de nuestros clientes y el compromiso con el ambiente.',
    municipios_cubiertos:'78 Municipios<br/>Cubiertos',
    
    // Testimonials
    testimonios_tag:'Testimonios', testimonios:'Lo que dicen nuestros clientes', testimonios_sub:'La satisfacción de nuestros clientes es nuestra mayor recompensa.',
    testimonial_1_name:'María Rodríguez', testimonial_1_place:'San Juan, PR', testimonial_1_text:'"Excelente servicio. Llegaron puntual, fueron muy profesionales y el resultado fue increíble. No hemos visto ni una cucaracha desde entonces. ¡100% recomendado!"',
    testimonial_2_name:'José López', testimonial_2_place:'Bayamón, PR', testimonial_2_text:'"Tenía un problema serio de comején en mi casa y Avilés Pest Control lo resolvió completamente. Muy profesionales, precios justos y excelente atención al cliente."',
    testimonial_3_name:'Carmen Nieves', testimonial_3_place:'Ponce, PR', testimonial_3_text:'"Llamé por una emergencia de roedores en mi restaurante y respondieron en pocas horas. Resolvieron el problema rápido y de forma discreta. Son los mejores de Puerto Rico."',
    
    // FAQ
    faq_tag:'FAQ', faq:'Preguntas frecuentes', faq_sub:'Aquí respondemos las dudas más comunes de nuestros clientes.',
    faq1_q:'¿Cuánto tiempo dura el servicio?', faq1_r:'La mayoría de los tratamientos duran entre 30 minutos y 2 horas, dependiendo del tamaño de la propiedad y la plaga.',
    faq2_q:'¿Los productos son seguros para mis mascotas?', faq2_r:'Sí, usamos productos biodegradables y seguros para mascotas. Después del tratamiento puedes regresar a tu hogar sin preocupaciones.',
    faq3_q:'¿Ofrecen garantía?', faq3_r:'Sí, ofrecemos garantía en todos nuestros servicios. Si la plaga vuelve, regresamos sin costo adicional.',
    faq4_q:'¿Cuánto cuesta una inspección?', faq4_r:'La primera inspección es gratuita. Llámanos y agenda tu cita hoy.',
    
    // Contact
    contacto_tag:'Contacto', contacto:'Contacto', contacto_sub:'Escríbenos y te respondemos pronto',
    form_nombre:'Tu Nombre', form_email:'Correo Electrónico', form_tel:'Teléfono',
    form_servicio:'Tipo de Servicio', form_servicio_opt:'— Seleccionar servicio —',
    form_pueblo:'Pueblo *', form_pueblo_opt:'— Seleccionar pueblo —',
    form_mensaje:'Mensaje', form_enviar:'Enviar Solicitud →',
    form_success:'✅ ¡Solicitud enviada! Nos comunicaremos contigo pronto.',
    servicio_residencial_opt:'Residencial', servicio_comercial_opt:'Comercial', servicio_autos_opt:'Autos', servicio_botes_opt:'Botes / Campers',
    
    // Footer
    footer_derechos:'© 2024 Avilés Pest Control. Todos los derechos reservados.',
    cobertura_tag:'Cobertura', cobertura_h2:'Servicio en <em>todo Puerto Rico</em>', cobertura_lead:'Atendemos los 78 municipios de Puerto Rico incluyendo Vieques y Culebra.',
    mapa_label:'Cobertura total: 78 municipios incluyendo Vieques y Culebra',
    faq_lead:'Aquí respondemos las dudas más comunes de nuestros clientes.',
    contacto_cobertura_label:'Cobertura', contacto_cobertura_value:'Toda la isla de Puerto Rico',
    contacto_horario_label:'Horario', contacto_horario_value:'Lunes – Sábado: 7am – 7pm',
    
    // Form
    form_alert:'Por favor completa los campos requeridos (*)', form_sending:'Enviando...', form_enviar_btn:'Enviar Solicitud →',
    
    // Navigation
    nav_inicio:'Inicio', nav_servicios:'Servicios', nav_nosotros:'Nosotros', nav_galeria:'Galería', nav_testimonios:'Testimonios', nav_faq:'FAQ', nav_cta:'Solicitar Servicio →'
  },
  en: {
    hero_badge:'✦ Certified Professional Service', h1:'We protect your <em>home & business</em> across Puerto Rico',
    hero_sub:'Fast, safe and effective pest control solutions. Residential, commercial, cars, boats and campers across the island.',
    cta:'📋 Request Service', call:'📞 Call Now', langLabel:'English',
    stat_clientes:'Satisfied Clients', stat_municipios:'Municipalities', stat_atencion:'Attention',
    
    // Hero cards
    card_residencial:'Residential', card_residencial_sub:'Your pest-free home',
    card_comercial:'Commercial', card_comercial_sub:'Protected businesses',
    card_autos:'Cars', card_autos_sub:'Pest-free vehicles',
    card_botes:'Boats & Campers', card_botes_sub:'Protected vessels',
    
    // Services
    servicios_tag:'Our Services', servicios:'Services', servicios_sub:'Solutions for every <em>need</em>',
    servicios_lead:'We offer complete fumigation and pest control services for all types of properties in Puerto Rico.',
    servicio_residencial:'Residential', servicio_residencial_sub:'Homes and apartments',
    servicio_comercial:'Commercial', servicio_comercial_sub:'Offices, restaurants, stores',
    servicio_autos:'Cars', servicio_autos_sub:'Interior and exterior',
    servicio_botes:'Boats', servicio_botes_sub:'All types of vessels',
    servicio_campers:'Campers', servicio_campers_sub:'Recreational vehicles',
    plagas_title:'🎯 Pests we eliminate:',
    plaga_cucarachas:'Cockroaches', plaga_hormigas:'Ants', plaga_roedores:'Rodents',
    plaga_comejen:'Termites', plaga_moscas:'Flies & Mosquitoes', plaga_pulgas:'Fleas & Ticks', plaga_salamandras:'Salamanders & Iguanas',
    
    // About
    nosotros_tag:'About Us', nosotros:'About Us', nosotros_sub:'Pest control experts <em>across the island</em>',
    nosotros_text1:'Avilés Pest Control is a Puerto Rican company dedicated to providing professional, safe and effective pest control solutions. We serve all 78 municipalities of Puerto Rico with speed and commitment.',
    nosotros_text2:'We have certified technicians and approved products that guarantee lasting results without compromising the health of your family or pets.',
    mision:'🎯 Mission', mision_text:'Protect the health and peace of mind of our customers by providing reliable, responsible and accessible pest control services throughout Puerto Rico.',
    vision:'🌟 Vision', vision_text:'To be the leading pest control company in Puerto Rico, recognized for service excellence, customer trust, and environmental commitment.',
    municipios_cubiertos:'78 Municipalities<br/>Covered',
    
    // Testimonials
    testimonios_tag:'Testimonials', testimonios:'What our clients say', testimonios_sub:'Customer satisfaction is our greatest reward.',
    testimonial_1_name:'María Rodríguez', testimonial_1_place:'San Juan, PR', testimonial_1_text:'"Excellent service. They arrived on time, were very professional and the result was incredible. We have not seen a single cockroach since then. 100% recommended!"',
    testimonial_2_name:'José López', testimonial_2_place:'Bayamón, PR', testimonial_2_text:'"I had a serious termite problem in my house and Avilés Pest Control resolved it completely. Very professional, fair prices and excellent customer service."',
    testimonial_3_name:'Carmen Nieves', testimonial_3_place:'Ponce, PR', testimonial_3_text:'"I called for a rodent emergency in my restaurant and they responded within hours. They solved the problem quickly and discreetly. They are the best in Puerto Rico."',
    
    // FAQ
    faq_tag:'FAQ', faq:'Frequently Asked Questions', faq_sub:'Here we answer our clients most common questions.',
    faq1_q:'How long does the service take?', faq1_r:'Most treatments take between 30 minutes and 2 hours, depending on property size and pest type.',
    faq2_q:'Are the products safe for my pets?', faq2_r:'Yes, we use biodegradable and pet-safe products. You can return home worry-free after treatment.',
    faq3_q:'Do you offer a warranty?', faq3_r:'Yes, we offer a warranty on all our services. If pests return, we come back at no extra cost.',
    faq4_q:'How much does an inspection cost?', faq4_r:'The first inspection is free. Call us to schedule your appointment today.',
    
    // Contact
    contacto_tag:'Contact', contacto:'Contact', contacto_sub:'Write to us and we will respond soon',
    form_nombre:'Your Name', form_email:'Email', form_tel:'Phone',
    form_servicio:'Service Type', form_servicio_opt:'— Select service —',
    form_pueblo:'Town *', form_pueblo_opt:'— Select town —',
    form_mensaje:'Message', form_enviar:'Send Request →',
    form_success:'✅ Request sent! We will contact you soon.',
    servicio_residencial_opt:'Residential', servicio_comercial_opt:'Commercial', servicio_autos_opt:'Cars', servicio_botes_opt:'Boats / Campers',
    
    // Footer
    footer_derechos:'© 2024 Avilés Pest Control. All rights reserved.',
    cobertura_tag:'Coverage', cobertura_h2:'Service across <em>all Puerto Rico</em>', cobertura_lead:'We serve all 78 municipalities of Puerto Rico including Vieques and Culebra.',
    mapa_label:'Total coverage: 78 municipalities including Vieques and Culebra',
    faq_lead:'Here we answer our clients most common questions.',
    contacto_cobertura_label:'Coverage', contacto_cobertura_value:'All of Puerto Rico',
    contacto_horario_label:'Hours', contacto_horario_value:'Monday – Saturday: 7am – 7pm',
    
    // Form
    form_alert:'Please complete all required fields (*)', form_sending:'Sending...', form_enviar_btn:'Send Request →',
    
    // Navigation
    nav_inicio:'Home', nav_servicios:'Services', nav_nosotros:'About', nav_galeria:'Gallery', nav_testimonios:'Testimonials', nav_faq:'FAQ', nav_cta:'Request Service →'
  }
};
function applyLang(l) {
  localStorage.setItem('lang', l);
  const mobileLangToggle = document.getElementById('langToggle');
  if (mobileLangToggle) mobileLangToggle.checked = (l === 'en');
  document.querySelectorAll('.lang-label').forEach(el => el.textContent = texts[l].langLabel);
  document.querySelectorAll('.lang-toggle').forEach(el => el.checked = (l==='en'));
  document.querySelectorAll('#langLabel').forEach(el => el.textContent = (l==='en' ? '🇺🇸 English' : '🇵🇷 Español'));
  
  // Navigation
  document.querySelectorAll('nav a[href="#inicio"]').forEach(el => el.textContent = texts[l].nav_inicio);
  document.querySelectorAll('nav a[href="#servicios"]').forEach(el => el.textContent = texts[l].nav_servicios);
  document.querySelectorAll('nav a[href="#nosotros"]').forEach(el => el.textContent = texts[l].nav_nosotros);
  document.querySelectorAll('nav a[href="#galeria"]').forEach(el => el.textContent = texts[l].nav_galeria);
  document.querySelectorAll('nav a[href="#testimonios"]').forEach(el => el.textContent = texts[l].nav_testimonios);
  document.querySelectorAll('nav a[href="#faq"]').forEach(el => el.textContent = texts[l].nav_faq);
  document.querySelectorAll('.nav-cta').forEach(el => el.textContent = texts[l].nav_cta);
  
  // Hero
  document.querySelectorAll('.hero-badge').forEach(el => el.textContent = texts[l].hero_badge);
  document.querySelectorAll('#inicio h1').forEach(el => el.innerHTML = texts[l].h1);
  document.querySelectorAll('.hero-sub').forEach(el => el.textContent = texts[l].hero_sub);
  document.querySelectorAll('.hero-btns .btn-primary').forEach(el => el.textContent = texts[l].cta);
  document.querySelectorAll('.hero-btns .btn-outline').forEach(el => el.textContent = texts[l].call);
  
  // Stats
  const statLabels = document.querySelectorAll('.stat-label');
  if(statLabels[0]) statLabels[0].textContent = texts[l].stat_clientes;
  if(statLabels[1]) statLabels[1].textContent = texts[l].stat_municipios;
  if(statLabels[2]) statLabels[2].textContent = texts[l].stat_atencion;
  
  // Hero cards
  const heroCards = document.querySelectorAll('.hero-card');
  if(heroCards[0]) { heroCards[0].querySelector('h3').textContent = texts[l].card_residencial; heroCards[0].querySelector('p').textContent = texts[l].card_residencial_sub; }
  if(heroCards[1]) { heroCards[1].querySelector('h3').textContent = texts[l].card_comercial; heroCards[1].querySelector('p').textContent = texts[l].card_comercial_sub; }
  if(heroCards[2]) { heroCards[2].querySelector('h3').textContent = texts[l].card_autos; heroCards[2].querySelector('p').textContent = texts[l].card_autos_sub; }
  if(heroCards[3]) { heroCards[3].querySelector('h3').textContent = texts[l].card_botes; heroCards[3].querySelector('p').textContent = texts[l].card_botes_sub; }
  
  // Services section
  document.querySelectorAll('#servicios .section-tag').forEach(el => el.textContent = texts[l].servicios_tag);
  document.querySelectorAll('#servicios h2').forEach(el => el.innerHTML = texts[l].servicios_sub);
  document.querySelectorAll('#servicios .section-lead').forEach(el => el.textContent = texts[l].servicios_lead);
  
  const serviceCards = document.querySelectorAll('.service-card');
  if(serviceCards[0]) { serviceCards[0].querySelector('h3').textContent = texts[l].servicio_residencial; serviceCards[0].querySelector('p').textContent = texts[l].servicio_residencial_sub; }
  if(serviceCards[1]) { serviceCards[1].querySelector('h3').textContent = texts[l].servicio_comercial; serviceCards[1].querySelector('p').textContent = texts[l].servicio_comercial_sub; }
  if(serviceCards[2]) { serviceCards[2].querySelector('h3').textContent = texts[l].servicio_autos; serviceCards[2].querySelector('p').textContent = texts[l].servicio_autos_sub; }
  if(serviceCards[3]) { serviceCards[3].querySelector('h3').textContent = texts[l].servicio_botes; serviceCards[3].querySelector('p').textContent = texts[l].servicio_botes_sub; }
  if(serviceCards[4]) { serviceCards[4].querySelector('h3').textContent = texts[l].servicio_campers; serviceCards[4].querySelector('p').textContent = texts[l].servicio_campers_sub; }
  
  // Plagas
  document.querySelectorAll('.plagas-title').forEach(el => el.textContent = texts[l].plagas_title);
  const plagaItems = document.querySelectorAll('.plaga-item');
  if(plagaItems[0]) plagaItems[0].innerHTML = '🪳 ' + texts[l].plaga_cucarachas;
  if(plagaItems[1]) plagaItems[1].innerHTML = '🐜 ' + texts[l].plaga_hormigas;
  if(plagaItems[2]) plagaItems[2].innerHTML = '🐭 ' + texts[l].plaga_roedores;
  if(plagaItems[3]) plagaItems[3].innerHTML = '🪲 ' + texts[l].plaga_comejen;
  if(plagaItems[4]) plagaItems[4].innerHTML = '🦟 ' + texts[l].plaga_moscas;
  if(plagaItems[5]) plagaItems[5].innerHTML = '🐾 ' + texts[l].plaga_pulgas;
  if(plagaItems[6]) plagaItems[6].innerHTML = '🦎 ' + texts[l].plaga_salamandras;
  
  // About section
  document.querySelectorAll('#nosotros .section-tag').forEach(el => el.textContent = texts[l].nosotros_tag);
  document.querySelectorAll('#nosotros h2').forEach(el => el.innerHTML = texts[l].nosotros_sub);
  const aboutTexts = document.querySelectorAll('#nosotros .about-text > p');
  if(aboutTexts[0]) aboutTexts[0].textContent = texts[l].nosotros_text1;
  if(aboutTexts[1]) aboutTexts[1].textContent = texts[l].nosotros_text2;
  const mvCards = document.querySelectorAll('.mv-card');
  if(mvCards[0]) mvCards[0].innerHTML = '<h4>' + texts[l].mision + '</h4><p>' + texts[l].mision_text + '</p>';
  if(mvCards[1]) mvCards[1].innerHTML = '<h4>' + texts[l].vision + '</h4><p>' + texts[l].vision_text + '</p>';
  document.querySelectorAll('.about-badge').forEach(el => el.innerHTML = texts[l].municipios_cubiertos);
  
  // Testimonials section
  document.querySelectorAll('#testimonios .section-tag').forEach(el => el.textContent = texts[l].testimonios_tag);
  document.querySelectorAll('#testimonios h2').forEach(el => el.innerHTML = texts[l].testimonios_sub);
  document.querySelectorAll('#testimonios .section-lead').forEach(el => el.textContent = texts[l].testimonios_sub);
  const testCards = document.querySelectorAll('.testimonial-card');
  if(testCards[0]) { testCards[0].querySelector('.testimonial-text').textContent = texts[l].testimonial_1_text; testCards[0].querySelector('.author-name').textContent = texts[l].testimonial_1_name; testCards[0].querySelector('.author-place').textContent = texts[l].testimonial_1_place; }
  if(testCards[1]) { testCards[1].querySelector('.testimonial-text').textContent = texts[l].testimonial_2_text; testCards[1].querySelector('.author-name').textContent = texts[l].testimonial_2_name; testCards[1].querySelector('.author-place').textContent = texts[l].testimonial_2_place; }
  if(testCards[2]) { testCards[2].querySelector('.testimonial-text').textContent = texts[l].testimonial_3_text; testCards[2].querySelector('.author-name').textContent = texts[l].testimonial_3_name; testCards[2].querySelector('.author-place').textContent = texts[l].testimonial_3_place; }
  
  // FAQ section
  document.querySelectorAll('#faq .section-tag').forEach(el => el.textContent = texts[l].faq_tag);
  document.querySelectorAll('#faq h2').forEach(el => el.innerHTML = texts[l].faq_sub);
  document.querySelectorAll('#faq .section-lead').forEach(el => el.textContent = texts[l].faq_sub);
  const faqQs = document.querySelectorAll('.faq-q');
  if(faqQs[0]) faqQs[0].textContent = texts[l].faq1_q;
  if(faqQs[1]) faqQs[1].textContent = texts[l].faq2_q;
  if(faqQs[2]) faqQs[2].textContent = texts[l].faq3_q;
  if(faqQs[3]) faqQs[3].textContent = texts[l].faq4_q;
  const faqRs = document.querySelectorAll('.faq-a p');
  if(faqRs[0]) faqRs[0].textContent = texts[l].faq1_r;
  if(faqRs[1]) faqRs[1].textContent = texts[l].faq2_r;
  if(faqRs[2]) faqRs[2].textContent = texts[l].faq3_r;
  if(faqRs[3]) faqRs[3].textContent = texts[l].faq4_r;
  
  // Contact section
  document.querySelectorAll('#contacto .section-tag').forEach(el => el.textContent = texts[l].contacto_tag);
  document.querySelectorAll('#contacto h2').forEach(el => el.innerHTML = texts[l].contacto_sub);
  document.querySelectorAll('#contacto .section-lead').forEach(el => el.textContent = texts[l].contacto_sub);
  document.querySelectorAll('label[for="fNombre"]').forEach(el => el.textContent = texts[l].form_nombre);
  document.querySelectorAll('label[for="fEmail"]').forEach(el => el.textContent = texts[l].form_email);
  document.querySelectorAll('label[for="fTel"]').forEach(el => el.textContent = texts[l].form_tel);
  document.querySelectorAll('label[for="fServicio"]').forEach(el => el.textContent = texts[l].form_servicio);
  document.querySelectorAll('label[for="fPueblo"]').forEach(el => el.textContent = texts[l].form_pueblo);
  document.querySelectorAll('label[for="fMensaje"]').forEach(el => el.textContent = texts[l].form_mensaje);
  document.querySelectorAll('.form-submit').forEach(el => el.textContent = texts[l].form_enviar);
  document.querySelectorAll('#fNombre').forEach(el => el.placeholder = texts[l].form_nombre);
  document.querySelectorAll('#fEmail').forEach(el => el.placeholder = texts[l].form_email);
  document.querySelectorAll('#fTel').forEach(el => el.placeholder = texts[l].form_tel);
  document.querySelectorAll('#fMensaje').forEach(el => el.placeholder = texts[l].form_mensaje);
  document.querySelectorAll('#fServicio option:first-child').forEach(el => el.textContent = texts[l].form_servicio_opt);
  document.querySelectorAll('#fPueblo option:first-child').forEach(el => el.textContent = texts[l].form_pueblo_opt);
  
  // Footer
  document.querySelectorAll('.footer-bottom p').forEach(el => el.textContent = texts[l].footer_derechos);
  
  // Cobertura / Map section
  document.querySelectorAll('#mapa .section-tag').forEach(el => el.textContent = texts[l].cobertura_tag);
  document.querySelectorAll('#mapa h2').forEach(el => el.innerHTML = texts[l].cobertura_h2);
  document.querySelectorAll('#mapa .section-lead').forEach(el => el.textContent = texts[l].cobertura_lead);
  document.querySelectorAll('.map-label').forEach(el => el.textContent = texts[l].mapa_label);
  
  // FAQ section
  document.querySelectorAll('#faq .section-lead').forEach(el => el.textContent = texts[l].faq_lead);
  
  // Contact section info
  document.querySelectorAll('.cobertura-label').forEach(el => el.textContent = texts[l].contacto_cobertura_label);
  document.querySelectorAll('.cobertura-value').forEach(el => el.textContent = texts[l].contacto_cobertura_value);
  document.querySelectorAll('.horario-label').forEach(el => el.textContent = texts[l].contacto_horario_label);
  document.querySelectorAll('.horario-value').forEach(el => el.textContent = texts[l].contacto_horario_value);
  
  // Mobile menu links
  document.querySelectorAll('.mobile-menu a[href="#inicio"]').forEach(el => el.textContent = texts[l].nav_inicio);
  document.querySelectorAll('.mobile-menu a[href="#servicios"]').forEach(el => el.textContent = texts[l].nav_servicios);
  document.querySelectorAll('.mobile-menu a[href="#nosotros"]').forEach(el => el.textContent = texts[l].nav_nosotros);
  document.querySelectorAll('.mobile-menu a[href="#galeria"]').forEach(el => el.textContent = texts[l].nav_galeria);
  document.querySelectorAll('.mobile-menu a[href="#testimonios"]').forEach(el => el.textContent = texts[l].nav_testimonios);
  document.querySelectorAll('.mobile-menu a[href="#faq"]').forEach(el => el.textContent = texts[l].nav_faq);
  document.querySelectorAll('.mobile-menu a[href="#contacto"]').forEach(el => el.textContent = texts[l].nav_cta);
}
applyLang(state.lang);
syncIndexFromDashboard();

function readDashboardData(key, fallback) {
  try {
    const data = JSON.parse(localStorage.getItem(key) || 'null');
    return data || fallback;
  } catch {
    return fallback;
  }
}

function syncIndexFromDashboard() {
  const services = readDashboardData('ap_services', []);
  const testimonials = readDashboardData('ap_testimonials', []);
  const faqs = readDashboardData('ap_faqs', []);
  const contact = readDashboardData('ap_contact', null);

  if (services.length) {
    const serviceSelect = document.getElementById('fServicio');
    if (serviceSelect) {
      serviceSelect.innerHTML = '<option value="">— Seleccionar servicio —</option>' +
        services.map(service => `<option>${service}</option>`).join('');
    }
    const plagasGrid = document.getElementById('plagasGrid');
    if (plagasGrid) {
      const pests = [
        ['🪳', 'Cucarachas', 'cucarachas'],
        ['🐜', 'Hormigas', 'hormigas'],
        ['🐭', 'Roedores', 'roedores'],
        ['🪲', 'Comején / Termitas', 'comejen'],
        ['🦟', 'Moscas y Mosquitos', 'moscas-mosquitos'],
        ['🐾', 'Pulgas y Garrapatas', 'pulgas-garrapatas'],
        ['🦎', 'Salamandras e Iguanas', 'salamandras-iguanas']
      ];
      plagasGrid.innerHTML = pests.map(([icon, label, slug]) =>
        `<a class="plaga-item" href="plaga.html?tipo=${slug}"><span class="plaga-icon">${icon}</span> ${label}</a>`
      ).join('');
    }
  }

  if (testimonials.length) {
    const grid = document.getElementById('testimonialsGrid');
    const initials = name => String(name || '').split(' ').map(part => part[0]).join('').toUpperCase().slice(0, 2) || 'AP';
    if (grid) {
      grid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p class="testimonial-text">${testimonial.text || ''}</p>
          <div class="testimonial-author">
            <div class="author-avatar">${initials(testimonial.name)}</div>
            <div><div class="author-name">${testimonial.name || ''}</div><div class="author-place">${testimonial.place || ''}</div></div>
          </div>
        </div>
      `).join('');
    }
  }

  if (faqs.length) {
    const list = document.querySelector('#faq .faq-list');
    if (list) {
      list.innerHTML = faqs
        .slice()
        .sort((a, b) => Number(a.order || 0) - Number(b.order || 0))
        .map(faq => `
          <div class="faq-item">
            <button class="faq-q">${faq.question} <span class="faq-arrow">▾</span></button>
            <div class="faq-a"><p>${faq.answer}</p></div>
          </div>
        `).join('');
      document.querySelectorAll('.faq-q').forEach(btn => btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      }));
    }
  }

  if (contact) {
    const tel1 = contact.tel1 || '787-299-7512';
    const tel2 = contact.tel2 || '787-678-4889';
    const email = contact.email || 'avilespestcontrol@gmail.com';
    document.querySelectorAll('a[href^="tel:7872997512"], a[href^="tel:7876784889"]').forEach((link, index) => {
      const tel = index % 2 === 0 ? tel1 : tel2;
      link.href = `tel:${tel.replace(/\D/g, '')}`;
      link.textContent = tel;
    });
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
      link.href = `mailto:${email}`;
      link.textContent = email;
    });
  }
}

// ─── HAMBURGER / DROPDOWN ───
const ham = document.getElementById('hamburgerBtn');
const menu = document.getElementById('mobileMenu');
const dropdown = document.getElementById('dropdownMenu');

ham.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (dropdown && !dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});


// Theme toggle handlers for dropdown
document.querySelectorAll('.theme-toggle').forEach(el => {
  el.addEventListener('change', e => {
    applyTheme(e.target.checked ? 'dark' : 'light');
  });
});

// Lang toggle handlers for dropdown
document.querySelectorAll('.lang-toggle').forEach(el => {
  el.addEventListener('change', e => {
    applyLang(e.target.checked ? 'en' : 'es');
    syncIndexFromDashboard();
  });
});

const mobileLangToggle = document.getElementById('langToggle');
if (mobileLangToggle) {
  mobileLangToggle.addEventListener('change', e => {
    applyLang(e.target.checked ? 'en' : 'es');
    syncIndexFromDashboard();
  });
}

document.querySelectorAll('.menu-link').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  ham.children[0].style.transform = '';
  ham.children[1].style.opacity = '1';
  ham.children[2].style.transform = '';
  document.body.style.overflow = '';
}));

// ─── SCROLL REVEAL ───
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }});
}, {threshold:0.1});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ─── FAQ ───
document.querySelectorAll('.faq-q').forEach(btn => btn.addEventListener('click', () => {
  const item = btn.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}));

// ─── FORM ───
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const nom = document.getElementById('fNombre').value.trim();
  const tel = document.getElementById('fTel').value.trim();
  const srv = document.getElementById('fServicio').value;
  const pue = document.getElementById('fPueblo').value;
  const currentLang = localStorage.getItem('lang') || 'es';
  if (!nom || !tel || !srv || !pue) {
    alert(texts[currentLang].form_alert);
    return;
  }
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = texts[currentLang].form_sending;
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = texts[currentLang].form_enviar_btn;
    btn.disabled = false;
    document.getElementById('formSuccess').style.display = 'block';
    e.target.reset();
    setTimeout(() => document.getElementById('formSuccess').style.display = 'none', 5000);
  }, 1200);
});

function openHelpModal() {
  const overlay = document.getElementById('helpModalOverlay');
  if (!overlay) return;
  if (localStorage.getItem('apHelpModalSeen') === '1') return;
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeHelpModal() {
  const overlay = document.getElementById('helpModalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  try {
    localStorage.setItem('apHelpModalSeen', '1');
  } catch (error) {
    console.warn('No se pudo guardar el estado del popup.', error);
  }
}

function setHelpIssue(issueButton) {
  document.querySelectorAll('.help-issue-btn').forEach(btn => btn.classList.remove('active'));
  issueButton.classList.add('active');
}

const helpIssueButtons = document.querySelectorAll('.help-issue-btn');
helpIssueButtons.forEach(btn => btn.addEventListener('click', () => setHelpIssue(btn)));

const helpCloseButton = document.getElementById('helpModalClose');
if (helpCloseButton) helpCloseButton.addEventListener('click', closeHelpModal);

const helpModalOverlay = document.getElementById('helpModalOverlay');
if (helpModalOverlay) {
  helpModalOverlay.addEventListener('click', event => {
    if (event.target === helpModalOverlay) closeHelpModal();
  });
}

const helpRequestBtn = document.getElementById('helpRequestBtn');
if (helpRequestBtn) helpRequestBtn.addEventListener('click', () => {
  closeHelpModal();
  const contactSection = document.querySelector('#contacto');
  if (contactSection) {
    requestAnimationFrame(() => contactSection.scrollIntoView({behavior:'smooth', block:'start'}));
  } else {
    window.location.href = 'index.html#contacto';
  }
});

window.addEventListener('load', openHelpModal);

function openDash() { window.location.href = 'dashboard.html'; }

// ─── SLIDESHOW ───
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slide-nav.prev');
const nextBtn = document.querySelector('.slide-nav.next');

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  
  currentSlide = index;
  
  // Update slides
  document.querySelector('.slideshow-wrapper').style.transform = `translateX(-${index * 25}%)`;
  
  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function goToSlide(index) {
  showSlide(index);
}

// Event listeners
if (nextBtn) nextBtn.addEventListener('click', nextSlide);
if (prevBtn) prevBtn.addEventListener('click', prevSlide);
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => goToSlide(index));
});

// Auto-play (optional)
let autoplayInterval = setInterval(nextSlide, 5000);

// Pause on hover
const slideshowContainer = document.querySelector('.slideshow-container');
if (slideshowContainer) {
  slideshowContainer.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });
  
  slideshowContainer.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 5000);
  });
}
