'use strict';

toggleTeamCards();

function toggleTeamCards() {
  const cards = document.querySelectorAll('.team__person');
  const infoActivationClass = 'team__person-info--active';
  const photoInactivationClass = 'team__person-photo--inactive';

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.firstElementChild.classList.add(infoActivationClass);
      card.lastElementChild.classList.add(photoInactivationClass);
    });

    card.addEventListener('mouseleave', () => {
      card.firstElementChild.classList.remove(infoActivationClass);
      card.lastElementChild.classList.remove(photoInactivationClass);
    });
  });
}