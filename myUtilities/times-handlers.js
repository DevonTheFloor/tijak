let jpm =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/**
 * return date of yesterday, today and tomorrow
 * @returns object
 */
 export function returnDate() {
  const date = new Date(),
    year = date.getFullYear(),
    mounth = date.getMonth()+1,
    today = date.getDate(),
    bissextile = isBissextile(year);
  let tomorrow = '';
  let tomorrowMounth = '';
  let tomorrowYear = '';
  let yesterday = '';
  let yesterdayMounth = '';
  let yesterdayYear = '';
  if(bissextile === true ) {
    jpm.splice(1,1,29);
  } 
  if( today === jpm[mounth-1]) {
    tomorrow = 1;
    tomorrowMounth = mounth+1;
    yesterday = today-1;
    yesterdayMounth = mounth;
    yesterdayYear = year;
  } else {
    tomorrow = today +1;
    tomorrowMounth = mounth;
    yesterday = today-1;
    yesterdayMounth = mounth;
    yesterdayYear = year;
  }
  if (today === 31 && mounth === 12) {
    tomorrowYear = year+1;
    yesterdayYear = year;
  } else {
    tomorrowYear = year;
    yesterdayYear = year;
  }
  if (today === 1) {
    yesterday = jpm[mounth-2];
    yesterdayMounth = mounth-1;
  } 
  if(today === 1 && mounth === 1) {
    yesterdayMounth = 12;
    yesterdayYear = year-1;
  }
  return { yesterday, today, tomorrow, mounth, yesterdayMounth, tomorrowMounth, year, yesterdayYear, tomorrowYear}
}
/**
 * Checks if a given year is divisible by four.
 *
 * @param {number} annee - The year to be checked.
 * @returns {boolean} True if the year is divisible by four, otherwise false.
 */
function estDivParQuatre(annee) {
  const div4 = annee%4;
  if(div4 === 0) {
    return true;
  } else {
    return false;
  }
}
/**
 * Checks if a given year is divisible by one hundred.
 *
 * @param {number} annee - The year to be checked.
 * @returns {boolean} True if the year is divisible by one hundred, otherwise false.
 */
function estDivParCent(annee) {
  const div100 = annee%100;
  if(div100 === 0) {
    return true;
  } else {
    return false;
  }
}
/**
 * Checks if a given year is divisible by 400.
 * @param {number} year - The year to check.
 * @returns {boolean} Returns true if the year is divisible by 400, otherwise false.
 */
function estDivParQuatreCent(annee) {
  const div400 = annee%400;
  if(div400 === 0) {
    return true;
  } else {
    return false;
  }
}
/**
 * Checks if a given year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} Returns true if the year is a leap year, otherwise false.
 */
function isBissextile(annee) {
  if ((estDivParQuatre(annee) === true) 
    && (estDivParCent(annee) === true) 
      && (estDivParQuatreCent(annee) === true)) {
    return true;
  } else {
    return false;
  }
}
