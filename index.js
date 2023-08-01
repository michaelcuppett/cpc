window.addEventListener('load', () => {
  function subtractDate(date, daysToSubtract) {
    let epochDate = date.setDate(date.getDate() - 2);
    let result = new Date(0);
    result.setUTCMilliseconds(epochDate);
    return result;
  }

  let startDate = new Date(document.querySelector('.startdate').innerText);
  let currentDate = new Date();
  let currentDay = currentDate.getDate();


  let dateOfUpdate = subtractDate(startDate, 2);
  let prettyUpdate = dateOfUpdate.toLocaleDateString('en-us', { weekday: "long", month: "long", day: "numeric" });

  let countdownHeading = '';
  let countdownText = '';

  countdownHeading = 'Check back soon';
  countdownText = 'The bulletin and order of worship are typically available the Friday prior to a service. Does something look wrong? Send us an email at info@catonsvillepres.org to let us know.';

  if (currentDate < subtractDate(startDate, 7)) {
    countdownHeading = ('Check back on ').concat(prettyUpdate);
    countdownText = 'The bulletin and order of worship are typically available the Friday prior to a service. Does something look wrong? Send us an email at info@catonsvillepres.org to let us know.';
  }

  if (currentDate >= subtractDate(startDate, 7)) {
    countdownHeading = ('Check back this Friday');
    countdownText = ('This page will be updated on or about ').concat(prettyUpdate, ' with the order of worship and bulletin.');
  }

  if (currentDate > dateOfUpdate) {
    countdownHeading = 'Thanks for your patience.';
    countdownText = ('We wanted to publish this page on ').concat(prettyUpdate, ', and we\'re sorry that it hasn\'t been updated on time. Send us an email at info@catonsvillepres.org and we\'ll do our best to get it updated ASAP.');
  }

  document.getElementById('mjc-cpc-countdown-heading').innerText = countdownHeading;
  document.getElementById('mjc-cpc-countdown-text').innerText = countdownText;
  document.querySelector('.mjc-cpc-countdown-block').classList.remove('mjc-cpc-countdown-hidden');
})
