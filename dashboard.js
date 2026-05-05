const defaults = {
  plagas: ['Cucarachas', 'Hormigas', 'Roedores', 'Comejen / Termitas', 'Moscas y Mosquitos', 'Pulgas y Garrapatas', 'Salamandras e Iguanas'],
  testimonials: [
    {name: 'Maria Rodriguez', place: 'San Juan, PR', text: '"Excelente servicio. Llegaron puntual, fueron muy profesionales y el resultado fue increible."'},
    {name: 'Jose Lopez', place: 'Bayamon, PR', text: '"Tenia un problema serio de comejen y Aviles Pest Control lo resolvio completamente."'},
    {name: 'Carmen Nieves', place: 'Ponce, PR', text: '"Respondieron en pocas horas y resolvieron el problema rapido y de forma discreta."'}
  ],
  contact: {tel1: '787-299-7512', tel2: '787-678-4889', email: 'avilespestcontrol@gmail.com'},
  requests: [
    {client: 'Ana Rivera', place: 'San Juan', service: 'Cucarachas', status: 'nueva'},
    {client: 'Luis Colon', place: 'Bayamon', service: 'Comejen / Termitas', status: 'pendiente'},
    {client: 'Rest. El Patio', place: 'Caguas', service: 'Roedores', status: 'proceso'},
    {client: 'Marta Soto', place: 'Ponce', service: 'Hormigas', status: 'realizada'},
    {client: 'Carlos Medina', place: 'Carolina', service: 'Moscas y Mosquitos', status: 'nueva'},
    {client: 'Nereida Cruz', place: 'Mayaguez', service: 'Pulgas y Garrapatas', status: 'pendiente'}
  ],
  payments: []
};

const state = {
  loggedIn: false,
  plagas: loadArray('admin_services', defaults.plagas),
  testimonials: loadArray('admin_testimonials', defaults.testimonials),
  contact: loadObject('admin_contact', defaults.contact),
  requests: loadArray('admin_requests', defaults.requests),
  payments: loadArray('admin_payments', defaults.payments)
};

const sectionTitles = {
  stats: 'Estadisticas',
  requests: 'Solicitudes',
  payments: 'Pagos',
  settings: 'Configuracion',
  services: 'Servicios',
  testimonials: 'Testimonios'
};

const statusLabels = {
  nueva: 'Nueva',
  pendiente: 'Pendiente',
  proceso: 'En proceso',
  realizada: 'Realizada'
};

const statusColors = {
  nueva: '#2d7ff9',
  pendiente: '#d4a017',
  proceso: '#7b61ff',
  realizada: '#1a7a4a'
};

const plagaIcons = ['🪳', '🐜', '🐭', '🪲', '🦟', '🐾', '🦎', '🐝', '🕷️', '🪰'];

function loadValue(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function loadArray(key, fallback) {
  const value = loadValue(key, fallback);
  return Array.isArray(value) ? value : [...fallback];
}

function loadObject(key, fallback) {
  const value = loadValue(key, fallback);
  return value && typeof value === 'object' && !Array.isArray(value) ? {...fallback, ...value} : {...fallback};
}

function saveValue(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
      if (key === 'admin_payments' && Array.isArray(value)) {
        return saveTrimmedPayments(value);
      }
      console.warn(`No se pudo guardar ${key}: espacio local lleno.`, error);
      return false;
    }
    console.warn(`No se pudo guardar ${key}.`, error);
    return false;
  }
}

function saveTrimmedPayments(payments) {
  const limits = [50, 25, 10, 1];

  for (const limit of limits) {
    try {
      const trimmed = payments.slice(0, limit);
      localStorage.removeItem('admin_payments');
      localStorage.setItem('admin_payments', JSON.stringify(trimmed));
      state.payments = trimmed;
      return true;
    } catch {
      localStorage.removeItem('admin_payments');
    }
  }

  return false;
}

function money(value) {
  return Number(value || 0).toLocaleString('es-PR', {style: 'currency', currency: 'USD'});
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function closeDash() {
  window.location.href = 'index.html';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDash();
});

function doLogin() {
  const u = document.getElementById('loginUser').value;
  const p = document.getElementById('loginPass').value;

  if (u === 'admin' && p === 'aviles2026') {
    document.getElementById('loginPanel').style.display = 'none';
    document.getElementById('dashPanel').style.display = 'grid';
    state.loggedIn = true;
    hydrateDashboard();
  } else {
    const err = document.getElementById('loginErr');
    err.style.display = 'block';
    setTimeout(() => err.style.display = 'none', 3000);
  }
}

function doLogout() {
  document.getElementById('loginPanel').style.display = 'grid';
  document.getElementById('dashPanel').style.display = 'none';
  document.getElementById('loginUser').value = '';
  document.getElementById('loginPass').value = '';
}

function showTab(id, button) {
  document.querySelectorAll('.dash-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.admin-menu button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`tab-${id}`).classList.add('active');
  if (button) button.classList.add('active');
  document.getElementById('sectionTitle').textContent = sectionTitles[id];
}

function hydrateDashboard() {
  if (state.payments.length > 50) {
    state.payments = state.payments.slice(0, 50);
    saveValue('admin_payments', state.payments);
  }
  document.getElementById('dash-tel1').value = state.contact.tel1;
  document.getElementById('dash-tel2').value = state.contact.tel2;
  document.getElementById('dash-email').value = state.contact.email;
  document.getElementById('payDate').value = today();
  renderServiceOptions();
  renderStats();
  renderRequests();
  renderPayments();
  renderPlagaList();
  renderTestList();
}

function countBy(items, key) {
  return items.reduce((acc, item) => {
    acc[item[key]] = (acc[item[key]] || 0) + 1;
    return acc;
  }, {});
}

function renderRankList(targetId, data) {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const max = Math.max(...entries.map(([, count]) => count), 1);
  document.getElementById(targetId).innerHTML = entries.map(([label, count]) => `
    <div class="rank-row">
      <div><strong>${label}</strong><span>${count} solicitudes</span></div>
      <div class="rank-bar"><span style="width:${(count / max) * 100}%"></span></div>
    </div>
  `).join('');
}

function renderStats() {
  document.getElementById('newRequestCount').textContent = state.requests.filter(r => r.status === 'nueva').length;
  document.getElementById('pendingCount').textContent = state.requests.filter(r => r.status === 'pendiente').length;
  document.getElementById('processCount').textContent = state.requests.filter(r => r.status === 'proceso').length;
  document.getElementById('doneCount').textContent = state.requests.filter(r => r.status === 'realizada').length;
  renderRankList('topServices', countBy(state.requests, 'service'));
  renderRankList('topPlaces', countBy(state.requests, 'place'));
  renderStatusDonut();
  renderPlaceDots();
}

function renderStatusDonut() {
  const counts = {
    nueva: state.requests.filter(r => r.status === 'nueva').length,
    pendiente: state.requests.filter(r => r.status === 'pendiente').length,
    proceso: state.requests.filter(r => r.status === 'proceso').length,
    realizada: state.requests.filter(r => r.status === 'realizada').length
  };
  const total = Math.max(state.requests.length, 1);
  let start = 0;
  const segments = Object.entries(counts).map(([status, count]) => {
    const degrees = (count / total) * 360;
    const segment = `${statusColors[status]} ${start}deg ${start + degrees}deg`;
    start += degrees;
    return segment;
  });

  document.getElementById('statusDonut').style.background = `conic-gradient(${segments.join(', ')})`;
  document.getElementById('statusLegend').innerHTML = Object.entries(counts).map(([status, count]) => `
    <div class="legend-row"><span style="background:${statusColors[status]}"></span>${statusLabels[status]} <strong>${count}</strong></div>
  `).join('');
}

function renderPlaceDots() {
  const entries = Object.entries(countBy(state.requests, 'place')).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const max = Math.max(...entries.map(([, count]) => count), 1);
  document.getElementById('placeDots').innerHTML = entries.map(([place, count]) => `
    <div class="dot-row">
      <strong>${escapeHtml(place)}</strong>
      <div class="dot-stack">${Array.from({length: count}).map((_, i) => `<span style="--i:${i};--max:${max}"></span>`).join('')}</div>
      <em>${count}</em>
    </div>
  `).join('');
}

function renderServiceOptions() {
  const options = state.plagas.map(service => `<option value="${service}">${service}</option>`).join('');
  document.getElementById('requestService').innerHTML = options;
  document.getElementById('payService').innerHTML = options;
}

function addRequest() {
  const client = document.getElementById('requestClient').value.trim();
  const place = document.getElementById('requestPlace').value.trim();
  const service = document.getElementById('requestService').value;
  const status = document.getElementById('requestStatus').value;
  if (!client || !place || !service) return;

  state.requests.unshift({client, place, service, status});
  saveValue('admin_requests', state.requests);
  document.getElementById('requestClient').value = '';
  document.getElementById('requestPlace').value = '';
  renderRequests();
  renderStats();
}

function updateRequestStatus(index, status) {
  state.requests[index].status = status;
  saveValue('admin_requests', state.requests);
  renderRequests();
  renderStats();
}

function updateRequest(index, field, value) {
  state.requests[index][field] = value.trim ? value.trim() : value;
  saveValue('admin_requests', state.requests);
  renderStats();
}

function removeRequest(index) {
  state.requests.splice(index, 1);
  saveValue('admin_requests', state.requests);
  renderRequests();
  renderStats();
}

function renderRequests() {
  document.getElementById('requestTable').innerHTML = state.requests.map((request, index) => `
    <tr>
      <td><input class="table-input" value="${escapeHtml(request.client)}" onchange="updateRequest(${index}, 'client', this.value)"/></td>
      <td><input class="table-input" value="${escapeHtml(request.place)}" onchange="updateRequest(${index}, 'place', this.value)"/></td>
      <td>
        <select class="table-input" onchange="updateRequest(${index}, 'service', this.value)">
          ${state.plagas.map(service => `<option value="${escapeHtml(service)}" ${request.service === service ? 'selected' : ''}>${escapeHtml(service)}</option>`).join('')}
        </select>
      </td>
      <td>
        <select class="status-select status-${request.status}" onchange="updateRequestStatus(${index}, this.value)">
          ${Object.entries(statusLabels).map(([value, label]) => `<option value="${value}" ${request.status === value ? 'selected' : ''}>${label}</option>`).join('')}
        </select>
      </td>
      <td><button class="btn-sm btn-danger" onclick="removeRequest(${index})">Eliminar</button></td>
    </tr>
  `).join('');
}

function savePayment() {
  if (!Array.isArray(state.payments)) {
    state.payments = [];
    saveValue('admin_payments', state.payments);
  }

  const client = document.getElementById('payClient').value.trim();
  const charged = Number(document.getElementById('payCharged').value || 0);
  const paid = Number(document.getElementById('payPaid').value || 0);
  const service = document.getElementById('payService').value;

  if (!client) {
    showPaymentMessage('Escribe el nombre del cliente.', 'error');
    return;
  }
  if (!service) {
    showPaymentMessage('Selecciona o crea un servicio antes de generar el recibo.', 'error');
    return;
  }
  if (charged <= 0) {
    showPaymentMessage('Escribe la cantidad cobrada. Debe ser mayor que 0.', 'error');
    return;
  }

  try {
    const payment = {
      receipt: `APC-${Date.now().toString().slice(-6)}`,
      client,
      date: document.getElementById('payDate').value || today(),
      service,
      charged,
      paid,
      pending: Math.max(charged - paid, 0),
      method: document.getElementById('payMethod').value,
      notes: document.getElementById('payNotes').value.trim()
    };

    state.payments.unshift(payment);
    const saved = saveValue('admin_payments', state.payments);
    renderReceipt(payment);
    renderPayments();
    showPaymentMessage(saved ? 'Pago guardado y recibo generado correctamente.' : 'Recibo generado. El historial local estaba lleno, asi que solo se conservo el recibo actual.', 'success');
    document.getElementById('receiptPreview').scrollIntoView({behavior: 'smooth', block: 'start'});
    document.getElementById('payClient').value = '';
    document.getElementById('payCharged').value = '';
    document.getElementById('payPaid').value = '';
    document.getElementById('payNotes').value = '';
    document.getElementById('payDate').value = today();
  } catch (error) {
    showPaymentMessage(`No se pudo generar el recibo: ${error.message}`, 'error');
    console.error(error);
  }
}

function showPaymentMessage(text, type) {
  const msg = document.getElementById('paySaveMsg');
  msg.textContent = text;
  msg.className = `payment-message wide ${type}`;
  msg.style.display = 'block';
}

function renderReceipt(payment) {
  document.getElementById('receiptPreview').innerHTML = `
    <div class="receipt">
      <div class="receipt-header">
        <div>
          <span class="receipt-logo">APC</span>
          <h2>Aviles Pest Control</h2>
          <p>Control de plagas profesional en Puerto Rico</p>
        </div>
        <div class="receipt-meta">
          <span>Recibo</span>
          <strong>${payment.receipt}</strong>
        </div>
      </div>
      <div class="receipt-section">
        <div><span>Cliente</span><strong>${payment.client}</strong></div>
        <div><span>Fecha</span><strong>${payment.date}</strong></div>
        <div><span>Servicio</span><strong>${payment.service}</strong></div>
        <div><span>Metodo</span><strong>${payment.method}</strong></div>
      </div>
      <div class="receipt-lines">
        <div><span>Cantidad cobrada</span><strong>${money(payment.charged)}</strong></div>
        <div><span>Cantidad pagada</span><strong>${money(payment.paid)}</strong></div>
        <div class="${payment.pending > 0 ? 'pending' : 'paid'}"><span>Pendiente</span><strong>${money(payment.pending)}</strong></div>
      </div>
      <p class="receipt-notes">${payment.notes || 'Servicio registrado sin notas adicionales.'}</p>
      <div class="receipt-footer">
        <span>${state.contact.tel1} / ${state.contact.tel2}</span>
        <span>${state.contact.email}</span>
      </div>
      <button class="btn-sm receipt-print" onclick="window.print()">Imprimir recibo</button>
    </div>
  `;
}

function renderPayments() {
  document.getElementById('paymentTable').innerHTML = state.payments.map(payment => `
    <tr>
      <td><input class="table-input" value="${escapeHtml(payment.client)}" onchange="updatePayment('${payment.receipt}', 'client', this.value)"/></td>
      <td><input class="table-input" type="date" value="${escapeHtml(payment.date)}" onchange="updatePayment('${payment.receipt}', 'date', this.value)"/></td>
      <td>
        <select class="table-input" onchange="updatePayment('${payment.receipt}', 'service', this.value)">
          ${state.plagas.map(service => `<option value="${escapeHtml(service)}" ${payment.service === service ? 'selected' : ''}>${escapeHtml(service)}</option>`).join('')}
        </select>
      </td>
      <td><input class="table-input money-input" type="number" min="0" step="0.01" value="${payment.charged}" onchange="updatePayment('${payment.receipt}', 'charged', this.value)"/></td>
      <td><input class="table-input money-input" type="number" min="0" step="0.01" value="${payment.paid}" onchange="updatePayment('${payment.receipt}', 'paid', this.value)"/></td>
      <td><strong>${money(payment.pending)}</strong></td>
      <td>
        <select class="table-input" onchange="updatePayment('${payment.receipt}', 'method', this.value)">
          ${['Efectivo', 'ATH Movil', 'Tarjeta', 'Cheque', 'Transferencia'].map(method => `<option ${payment.method === method ? 'selected' : ''}>${method}</option>`).join('')}
        </select>
      </td>
      <td class="payment-actions">
        <button class="btn-sm" onclick="renderReceiptById('${payment.receipt}')">Recibo</button>
        <button class="btn-sm btn-danger" onclick="removePayment('${payment.receipt}')">Eliminar</button>
      </td>
    </tr>
  `).join('');
}

function findPayment(receipt) {
  return state.payments.find(payment => payment.receipt === receipt);
}

function updatePayment(receipt, field, value) {
  const payment = findPayment(receipt);
  if (!payment) return;

  if (field === 'charged' || field === 'paid') {
    payment[field] = Math.max(Number(value || 0), 0);
    payment.pending = Math.max(Number(payment.charged || 0) - Number(payment.paid || 0), 0);
  } else {
    payment[field] = value.trim ? value.trim() : value;
  }

  saveValue('admin_payments', state.payments);
  renderPayments();
  renderReceipt(payment);
}

function renderReceiptById(receipt) {
  const payment = findPayment(receipt);
  if (!payment) return;
  renderReceipt(payment);
  document.getElementById('receiptPreview').scrollIntoView({behavior: 'smooth', block: 'start'});
}

function removePayment(receipt) {
  state.payments = state.payments.filter(payment => payment.receipt !== receipt);
  saveValue('admin_payments', state.payments);
  renderPayments();
}

function saveTel() {
  state.contact.tel1 = document.getElementById('dash-tel1').value;
  state.contact.tel2 = document.getElementById('dash-tel2').value;
  saveValue('admin_contact', state.contact);
  showSaveMessage('telSaveMsg');
}

function saveEmail() {
  state.contact.email = document.getElementById('dash-email').value;
  saveValue('admin_contact', state.contact);
  showSaveMessage('emailSaveMsg');
}

function showSaveMessage(id) {
  const msg = document.getElementById(id);
  msg.style.display = 'block';
  setTimeout(() => msg.style.display = 'none', 2500);
}

function renderPlagaList() {
  document.getElementById('plagaList').innerHTML = state.plagas.map((service, index) => `
    <div class="item-row">
      <span>${plagaIcons[index % plagaIcons.length]}</span>
      <input class="item-edit-input" value="${escapeHtml(service)}" onchange="updatePlaga(${index}, this.value)"/>
      <div class="item-actions">
        <button class="btn-sm btn-danger" onclick="removePlaga(${index})">Eliminar</button>
      </div>
    </div>
  `).join('');
}

function addPlaga() {
  const value = document.getElementById('newPlaga').value.trim();
  if (!value) return;
  state.plagas.push(value);
  saveValue('admin_services', state.plagas);
  document.getElementById('newPlaga').value = '';
  renderPlagaList();
  renderServiceOptions();
}

function removePlaga(index) {
  state.plagas.splice(index, 1);
  saveValue('admin_services', state.plagas);
  renderPlagaList();
  renderServiceOptions();
}

function updatePlaga(index, value) {
  const next = value.trim();
  if (!next) {
    renderPlagaList();
    return;
  }
  const previous = state.plagas[index];
  state.plagas[index] = next;
  state.requests.forEach(request => {
    if (request.service === previous) request.service = next;
  });
  state.payments.forEach(payment => {
    if (payment.service === previous) payment.service = next;
  });
  saveValue('admin_services', state.plagas);
  saveValue('admin_requests', state.requests);
  saveValue('admin_payments', state.payments);
  renderPlagaList();
  renderServiceOptions();
  renderRequests();
  renderPayments();
  renderStats();
}

function renderTestList() {
  document.getElementById('testList').innerHTML = state.testimonials.map((testimonial, index) => `
    <div class="testimonial-edit-row">
      <input value="${escapeHtml(testimonial.name)}" onchange="updateTestimonial(${index}, 'name', this.value)" placeholder="Nombre"/>
      <input value="${escapeHtml(testimonial.place)}" onchange="updateTestimonial(${index}, 'place', this.value)" placeholder="Lugar"/>
      <textarea onchange="updateTestimonial(${index}, 'text', this.value)" placeholder="Testimonio">${escapeHtml(testimonial.text.replace(/^"|"$/g, ''))}</textarea>
      <div class="item-actions">
        <button class="btn-sm btn-danger" onclick="removeTest(${index})">Eliminar</button>
      </div>
    </div>
  `).join('');
}

function addTestimonial() {
  const name = document.getElementById('newTestName').value.trim();
  const place = document.getElementById('newTestPlace').value.trim();
  const text = document.getElementById('newTestText').value.trim();
  if (!name || !text) return;

  state.testimonials.push({name, place, text: `"${text}"`});
  saveValue('admin_testimonials', state.testimonials);
  document.getElementById('newTestName').value = '';
  document.getElementById('newTestPlace').value = '';
  document.getElementById('newTestText').value = '';
  renderTestList();
}

function removeTest(index) {
  state.testimonials.splice(index, 1);
  saveValue('admin_testimonials', state.testimonials);
  renderTestList();
}

function updateTestimonial(index, field, value) {
  const next = value.trim();
  if (!next && field !== 'place') {
    renderTestList();
    return;
  }
  state.testimonials[index][field] = field === 'text' ? `"${next}"` : next;
  saveValue('admin_testimonials', state.testimonials);
  renderTestList();
}

document.getElementById('loginPass').addEventListener('keydown', e => {
  if (e.key === 'Enter') doLogin();
});
