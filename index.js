
const removeAllActive = () => {
    const panels = [...document.querySelectorAll('div.panel')];
    panels.forEach(item => item.classList.remove('active'));
}

const toggleActive = (e) => {
    const target = e.target;
    if(target.nodeName === "DIV" && target.classList.contains('panel')) {
        const targetWasActive = target.classList.contains("active");
        removeAllActive();
        if(!targetWasActive) target.classList.add('active');
    }
}

const container = document.querySelector('div.container');
container.addEventListener('click', (e) => {
    toggleActive(e);
})
