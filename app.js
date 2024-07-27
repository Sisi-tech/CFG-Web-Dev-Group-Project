const readMoreBtns = document.querySelectorAll('.read-more-btn');
const readMoreContents = document.querySelectorAll('.read-more-content');
const cards = document.querySelectorAll('.card');
const openers = document.querySelectorAll('.opener');
const modules = document.querySelectorAll('.module');

readMoreBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        readMoreContents.forEach((content, i) => {
            if (i !== index) {
                content.getElementsByClassName.display = 'none';
                readMoreBtns[i].textContent = 'Read More';
                cards[i].style.height = '';
            }
        });
        const content = readMoreContents[index];
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            btn.textContent = 'Read Less';
            cards[index].style.height = 'auto';
        } else {
            content.style.display = 'none';
            btn.textContent = 'Read More';
            cards[index].style.height = '';
        }
    });
});

openers.forEach((opener, i) => {
    opener.addEventListener('click', () => {
        const module = modules[i];
        if (module.style.display === 'none' || module.style.display === '') {
            module.style.display = 'block';
        } else {
            module.style.display = 'none';
        }
    })
})