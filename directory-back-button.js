function initBackButton() {
  let button, back, title;
  
  back = document.createElement('span');
  back.innerText = '←';
  
  title = document.createElement('span');
  title.innerText = 'Back to belonging resources';
  title.classList.add('mjc-cpc-floating-button-title');
  
  button = document.createElement('a');
  button.href = '../';
  button.classList.add('mjc-cpc-floating-button');
  button.appendChild(back);
  button.appendChild(title);
  
  document.querySelector('.entry-content').append(button);
  let targetWidth = title.getBoundingClientRect().width;
  let targetHeight = title.getBoundingClientRect().height;
  
  let fineCursor = window.innerWidth > 720;
  
  if (fineCursor) {
    button.addEventListener('mouseenter', () => {
      button.classList.add('mjc-cpc-hover');
      title.style.width = targetWidth.toString().concat('px');
      setTimeout(() => {
        title.style.opacity = '1';
        title.style.fontSize = '1em';
      }, 150);
    });
  
    button.addEventListener('mouseleave', () => {
      button.classList.remove('mjc-cpc-hover');
      title.style.fontSize = '0em';
      title.style.width = '0px';
      title.style.opacity = '0';
    });
  }
  
  title.style.fontSize = '0em';
  title.style.width = '0px';
  title.style.opacity = '0';
}
initBackButton();
