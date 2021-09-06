// Initialize extra fields
ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

ec.order.extraFields.pickup_datetime = {
  'title': 'Pickup date and time',
  'type': 'text',
  'required': true,
  'checkoutDisplaySection': 'pickup_details',
  'orderDetailsDisplaySection': 'shipping_info'
};

if (
  typeof(Ecwid) == 'object'
  && typeof(Ecwid.refreshConfig) == 'function'
) {
  Ecwid.refreshConfig();
}

const flatpickr_css_url = 'https://cdn.jsdelivr.net/npm/flatpickr@4.6.9/dist/flatpickr.min.css';
const css = document.createElement('link');
css.rel = 'stylesheet';
css.href = flatpickr_css_url;
document.head.appendChild(css);

const enabledDates = [
  '2021-09-10', '2021-09-11',
  '2021-09-17', '2021-09-18',
  '2021-09-24', '2021-09-25'
];

function buildDatePicker() {
  flatpickr('input[name=pickup_datetime]', {
    enableTime: true,
    dateFormat: "F j, Y h:i K",
    minTime: "11:00",
    maxTime: "18:00",
    enable: enabledDates
  })
}

const flatpickr_url = 'https://cdn.jsdelivr.net/npm/flatpickr@4.6.9/dist/flatpickr.min.js';
const scr = document.createElement('script');
scr.type = 'text/javascript';
scr.src = flatpickr_url;
scr.onload = buildDatePicker;
document.head.appendChild(scr);
