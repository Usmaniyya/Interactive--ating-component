const btnRating = document.querySelectorAll('.circle-rating');
const btnSubmit = document.querySelector('.btn--submit');
const selectedRating = document.querySelector('.selected');
const card = document.querySelector('.card');
const card2 = document.querySelector('.card-2');

let selected = 0;

card2.style.display = 'none';
card.style.display = 'flex';

for (let btn_rating of btnRating) {
    btn_rating.addEventListener('click', () => {
        selected = Number(btn_rating.innerHTML);
        return selected;
    });
}

btnSubmit.addEventListener('click', () => {
    selectedRating.innerHTML = `You selected ${selected} out of 5`;

    card.style.display = 'none';
    card2.style.display = 'flex';
})