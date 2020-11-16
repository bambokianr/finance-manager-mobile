const monthNameToNumber = {
  JAN: '01',
  FEB: '02',
  MAR: '03',
  APR: '04',
  MAY: '05',
  JUN: '06', 
  JUL: '07',
  AUG: '08', 
  SEP: '09',
  OCT: '10',
  NOV: '11', 
  DEC: '12'
};

export function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
		month = '0' + month;
  if (day.length < 2) 
		day = '0' + day;

  return [year, month, day].join('-');
}

export function formatDateFromApi(date) {
	const d = date.split('T')[0];
	const year = d.split('-')[0];
	const month = d.split('-')[1];
	const day = d.split('-')[2];
	
	return [day, month, year].join('/');
}

export function formatDatePickerValue(date) {
  const stringDate = date.toString();
  const arrayDate = stringDate.split(' ');

  const day = arrayDate[2];
  const month = monthNameToNumber[arrayDate[1].toUpperCase()];
  const year = arrayDate[3];

  return [day, month, year].join('/');
}