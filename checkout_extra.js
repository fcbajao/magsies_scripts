const flatpickr_url = 'https://cdn.jsdelivr.net/npm/flatpickr@4.6.9/dist/flatpickr.min.js';
const s = document.createElement('script');
s.type = 'text/javascript';
s.src = flatpickr_url;
document.head.appendChild(s);

// Initialize extra fields
ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

ec.order.extraFields.pickup_datetime = {
    'title': 'Select date and time of pickup',
    'type': 'text',
    'required': true,
    'checkoutDisplaySection': 'pickup_details'
};

if (
  typeof(Ecwid) == 'object'
  && typeof(Ecwid.refreshConfig) == 'function'
) {
  Ecwid.refreshConfig();
}
