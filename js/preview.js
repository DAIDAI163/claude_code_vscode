function openPreview(name, filePath, fileType) {
  const modal = document.getElementById('previewModal');
  const frame = document.getElementById('previewFrame');
  document.getElementById('modalTitle').textContent = name + ' — 文档预览';

  if (fileType === 'pdf') {
    frame.src = filePath;
  } else if (fileType === 'word' || fileType === 'docx') {
    const fullUrl = window.location.origin + new URL(filePath, window.location.href).pathname;
    frame.src = 'https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(fullUrl);
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePreview() {
  document.getElementById('previewModal').classList.remove('active');
  document.getElementById('previewFrame').src = 'about:blank';
  document.body.style.overflow = '';
}

document.getElementById('previewModal').addEventListener('click', function(e) {
  if (e.target === this) closePreview();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closePreview();
});
