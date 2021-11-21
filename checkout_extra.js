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

function buildDatePicker() {
  const enabledDates = [
    flatpickr.parseDate("2021-11-26", "Y-m-d"),
    flatpickr.parseDate("2021-11-27", "Y-m-d"),
    flatpickr.parseDate("2021-12-02", "Y-m-d"),
    flatpickr.parseDate("2021-12-03", "Y-m-d"),
    flatpickr.parseDate("2021-12-17", "Y-m-d"),
    flatpickr.parseDate("2021-12-18", "Y-m-d"),
    flatpickr.parseDate("2021-12-23", "Y-m-d")
  ];

  Ecwid.OnPageLoaded.add(function(page) {
    console.log("magsies custom OnPageLoaded " + page.type);
    if (page.type == "CHECKOUT_ADDRESS") {
      console.log('magsies init flatpickr');
      flatpickr('input[name=pickup_datetime]', {
        enableTime: true,
        dateFormat: "F j, Y h:i K",
        minTime: "11:00",
        maxTime: "18:00",
        enable: enabledDates
      })
    }
  });
}

const flatpickr_url = 'https://cdn.jsdelivr.net/npm/flatpickr@4.6.9/dist/flatpickr.min.js';
const scr = document.createElement('script');
scr.type = 'text/javascript';
scr.src = flatpickr_url;
scr.addEventListener("load", function(event) {
  console.log("magsies script loaded");
  buildDatePicker();
});
document.head.appendChild(scr);
