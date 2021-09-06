const flatpickr_css_url = 'https://cdn.jsdelivr.net/npm/flatpickr@4.6.9/dist/flatpickr.min.css';
const css = document.createElement('link');
css.rel = 'stylesheet';
css.href = flatpickr_css_url;
document.head.appendChild(css);

const flatpickr_url = 'https://cdn.jsdelivr.net/npm/flatpickr@4.6.9/dist/flatpickr.min.js';
const scr = document.createElement('script');
scr.type = 'text/javascript';
scr.src = flatpickr_url;
document.head.appendChild(scr);

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
