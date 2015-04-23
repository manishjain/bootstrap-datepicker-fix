# bootstrap-datepicker-fix

Problems faced in Existing bootstrap-datepicker:
 In existing bootstrap date-picker, there are no direct methods to set minimum and maximum dates. For resolving this, we have to add onRender() function in each date-picker initialized, in which we returns 'disabled' in the specific date logic outside our window. Additionally, Changing the existing date interval is a hectic job. Instead of setting the date window from above method, there is also a way to go to the dates outside the window, by traversing months or years.

Steps to use bootstrap-datepicker Adapter:

1. Include the Adapter in your javascript file.  Path: html/public/ams/js/dues/datepicker_object.js . 
2. Now a hash: DatepickerObject is available to your file. It will contain all the datepicker objects used by that file, with all its initializer, getter and setter functions.
3. Initializing a datepicker: Static function datepicker(elementId, dateName, minDate, maxDate, minDateName, maxDateName). Returns bootstrap-datepicker object.
    a) elementId: Html Input element id on which datepicker is to be initialized.
    b) dateName: A string specifies unique name given to that date. Will be used while getting-setting.
    c) minDate: Minimum date value to be set. Should be javascript date object. Pass blank("") in case not required.
    d) maxDate: Maximum date value to be set. Should be javascript date object. Pass blank("") in case not required. 
    e) minDateName: A string specifies unique name given to minimum date variable. Will be used while changing minimum Date. 
        Pass blank("") in case not required.
    f)  maxDateName: A string specifies unique name given to maximum date variable. Will be used while changing maximum Date. 
        Pass blank("") in case not required.
 
4. Getting value of date: Static function getDateFor(dateName). Pass string specifies unique date name variable. Returns date object.
5. Getting minDate value: Static function getDateFor(minDateName). Pass string specifies unique min date name variable. Returns date object.
7. Getting maxDate value: Static function getDateFor(maxDateName). Pass string specifies unique max date name variable. Returns date object.
8. Set Date: Static function setDateFor(date, dateName): Pass date object having value to be set, dateName as the string specifies unique date variable.
   It will update the existing date value of datepicker.
9. Set Minimum Date: Static function setMinDateFor(dateName, minDate, minDateName): Pass dateName as string specifies date variable whose minValue to be set. Min date object as mimimun value, minDateName as the string specifies unique minimum date variable. It will update the minimum date value of datepicker.
10. Set Maximum Date: Static function setMaxDateFor(dateName, maxDate, maxDateName): Pass dateName as string specifies date variable whose maxValue to be set. Max date object as maximum value, maxDateName as the string specifies unique maximum date variable. It will update the maximum date value of datepicker.

Example code: There is a case in which we want to use bootstrap-datepicker for a payment date input:

Example.phtml:
<input type="text" class="has-datepicker" autocomplete="off" data-date-format="dd-mm-yyyy" readonly name="payment_date" id="payment_date" />

Example.js
var Example = {}
var paymentMinDate = new Date(2010,3,1);
var paymentMaxDate = new Date();
Example.payment_date = DatepickerObject.datepicker('payment_date', 'payment_date', 
            paymentMinDate, paymentMaxDate, 'payment_min_date', 'payment_max_date');
var new_date = new Date(2015,1,1);
DatepickerObject.setDateFor(new_date, 'payment_date');
var new_min_date = new Date(2010,9,9);
DatepickerObject.setDateFor('payment_date',new_min_date, 'payment_min_date');
var new_max_date = new Date(2015,9,9);
DatepickerObject.setDateFor('payment_date',new_max_date, 'payment_max_date');
var current_date = DatepickerObject.getDateFor('payment_date');
var current_min_date = DatepickerObject.getDateFor('payment_min_date');
var current_max_date = DatepickerObject.getDateFor('payment_max_date');
