function orderOnWhatsApp(product, sizeId, qtyId) {
  const size = document.getElementById(sizeId).value;
  const qty = document.getElementById(qtyId).value;
  const phone = "+919618108744"; // Replace with your WhatsApp number
  const msg = `Hello, I want to order: ${product} — ${size} (Qty: ${qty}). Name: ______. Address: ______. Please confirm price and delivery.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
