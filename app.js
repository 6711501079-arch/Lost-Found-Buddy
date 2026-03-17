// State
let allItems = [];
let currentFilter = 'all';

// Toast
function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast-msg toast-${type}`;
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 2500);
}

// Modal
function openModal() {
  alert("เปิด Modal (ตัวอย่าง)");
}

// Render
function renderItems() {
  const container = document.getElementById('items-list');
  container.innerHTML = '';

  allItems.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item.item_name;
    container.appendChild(div);
  });
}

// Init
(async () => {
  if (window.dataSdk) {
    const result = await window.dataSdk.init({
      onDataChanged(data) {
        allItems = data;
        renderItems();
      }
    });

    if (!result.isOk) {
      showToast('เชื่อมต่อไม่ได้', 'error');
    }
  }

  lucide.createIcons();
})();
