window.onload = () => {
  let serviceTitle = document.querySelector('.tribe-events-single-event-title');
  document.querySelector('.events-title').innerText = serviceTitle.innerText;
  serviceTitle.remove();
  document.querySelector('.tribe-events-thumbnail').remove();

  function handleDescription(elementToModify, title, description) {
    if (!description) { return }

    elementToModify.innerHTML = title.trim();

    let descriptionElement;
    descriptionElement = document.createElement('span');
    descriptionElement.classList.add('liturgy-description');
    descriptionElement.innerHTML = description.trim();
    elementToModify.appendChild(descriptionElement);
  }

  let liturgyHeadings = document.querySelectorAll('.tribe-events-content h3');
  let parsedHTML, description;
  for (let i = 0; i < liturgyHeadings.length; i++) {
    description = liturgyHeadings[i].innerHTML.replace(/(&nbsp;)+/g, ' — ');
    parsedHTML = description.split(' — ');
    handleDescription(liturgyHeadings[i], parsedHTML[0], parsedHTML[1]);
  }
}
