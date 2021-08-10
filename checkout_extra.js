// Initialize extra fields
ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// Customize time and date selection for order pickup datepicker
ec.order.extraFields.pickup_time_select = {
  'title': 'Select date of pickup',
  'required': true,
  'type': 'datetime',
  'checkoutDisplaySection': 'pickup_details',
  'orderDetailsDisplaySection': 'order_comments',
  // Default date picker presets
  'datePickerOptions': {
    'minDate': new Date(2021, 8, 13), // Order is prepared for 2 hours minimum. Hiding 2 hours from the current time. Default is 0
    'maxDate': new Date(2021, 8, 14),
    'showTime': true,
    'incrementMinuteBy': 30,
    // limit available hours for each week day
    'limitAvailableHoursWeekly': {
      'FRI': [
        ['11:00', '19:00']
      ],
      'SAT': [
        ['11:00', '19:00']
      ]
    }
  }
};

if (
  typeof(Ecwid) == 'object'
  && typeof(Ecwid.refreshConfig) == 'object'
) {
  Ecwid.refreshConfig();
}
