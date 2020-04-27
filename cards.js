/* Create an HTML page that contains a text area and a button labeled Create.

When the user enters in text into the text area and then clicks the create button, use a factory function that creates a new DOM component that has a border, and includes it's own delete button.

Insert that new component into the DOM.

When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

Pro tip: The card's id attribute, and the button's id attribute should share some common value. Then, when the button is clicked, find the corresponding parent DOM component. Remember the split() method on a string? That will be helpful. */


// declaring variable to number cards as they're created
let cardNumber = 1;

// when create button is clicked, creates card with text of input field and a delete button that is numbered the same as its parent card

document.querySelector('#create').addEventListener('click', event => {
    const card = document.createElement('article');
    card.classList.add('card');
    card.id = (`card-${cardNumber}`);
    const cardContent = card.appendChild(document.createElement('section'));
    cardContent.textContent = document.querySelector('#textInput').value;
    const cardDeleteButton = card.appendChild(document.createElement('button'));
    cardDeleteButton.id = (`delete-${cardNumber}`);
    cardDeleteButton.textContent = 'Delete';
    document.querySelector('#create').after(card);
    cardNumber++;
})

// when delete button is clicked, deletes parent card
document.querySelector('body').addEventListener('click', event => {
    const splitIdArr = event.target.id.split('-');
    if (splitIdArr[0] == 'delete')
    event.target.parentNode.remove();
})
