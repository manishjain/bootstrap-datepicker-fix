var DatepickerObject = {
	/*this is like a constructer function to initialize three variables with values as:
	minDateName with value minDate
	maxDateName with value maxDate
	dateName variable which will have value of datepicker
	elementId is the html element Id on which datepicker is to be initialized
	*/
	datepicker: function (elementId, dateName, minDate, maxDate, minDateName, maxDateName){
		DatepickerObject[minDateName] = minDate;
		DatepickerObject[maxDateName] = maxDate;	
		DatepickerObject[dateName] = jQuery('#'+elementId).datepicker({
			onRender: function(date) {
				var ret = '';
				if(DatepickerObject[minDateName] && 
					date.valueOf() < DatepickerObject[minDateName].valueOf()){
					ret = "disabled";
				}
				if(DatepickerObject[maxDateName] && 
					date.valueOf() > DatepickerObject[maxDateName].valueOf()){
					ret = "disabled";
				}
				return ret;
			}
		}).on('changeDate', function(ev) {
			if (DatepickerObject[minDateName] && 
				ev.date.valueOf() < DatepickerObject[minDateName].valueOf()) 
			{
        DatepickerObject[dateName].setValue(DatepickerObject[minDateName]);
        ev.date = DatepickerObject[minDateName];
      } else if (DatepickerObject[maxDateName] 
      	&& ev.date.valueOf() > DatepickerObject[maxDateName].valueOf())
      {
        DatepickerObject[dateName].setValue(DatepickerObject[maxDateName]);
        ev.date = DatepickerObject[maxDateName];
      }
      DatepickerObject[dateName].hide();
    }).data('datepicker');
    return DatepickerObject[dateName];
  },

  setDateFor: function(date, dateName){
  	DatepickerObject[dateName].setValue(date);
    DatepickerObject[dateName].update();
  },

  setMinDateFor: function(dateName, minDate, minDateName){
  	if(DatepickerObject[dateName].date < minDate){
  		DatepickerObject[dateName].setValue(minDate);
  	}
  	DatepickerObject[minDateName] = minDate;
    DatepickerObject[dateName].update();
  },

  setMaxDateFor: function(dateName, maxDate, maxDateName){
  	if(DatepickerObject[dateName].date > maxDate){
  		DatepickerObject[dateName].setValue(maxDate);
  	}
  	DatepickerObject[maxDateName] = maxDate;
    DatepickerObject[dateName].update();
  },

  getDateFor: function(dateName){
  	return DatepickerObject[dateName];
  }
};
