'use strict';

toggleTeamCards();

function toggleTeamCards() {
  const cards = document.querySelectorAll('.team__person');
  const infoActivationClass = 'team__person-info--active';
  const photoInactivationClass = 'team__person-photo--inactive';

  cards.forEach(card => {
    card.onmouseenter = () => {
      card.firstElementChild.classList.add(infoActivationClass);
      card.lastElementChild.classList.add(photoInactivationClass);
    };

    card.onmouseleave = () => {
      card.firstElementChild.classList.remove(infoActivationClass);
      card.lastElementChild.classList.remove(photoInactivationClass);
    };
  });
}

