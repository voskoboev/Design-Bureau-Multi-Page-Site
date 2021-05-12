'use strict';

toggleTeamCards();

function toggleTeamCards() {
  const cards = document.querySelectorAll('.team__person');

  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.children[0].classList.add('team__person-info--active');
      card.children[1].classList.add('team__person-photo--inactive');
    });

    card.addEventListener('mouseout', () => {
      card.children[0].classList.remove('team__person-info--active');
      card.children[1].classList.remove('team__person-photo--inactive');
    });
  });
}