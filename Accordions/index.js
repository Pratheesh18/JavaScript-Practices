const panels = document.querySelectorAll('.faq_panel');
const panelLabels = document.querySelectorAll('.faq_label');
panels.forEach((panel,index) => {
    let isExpanded = panel.getAttribute('aria-expanded') === 'true';

    panelLabels[index].addEventListener('click', () => {
        console.log('clicked');
        isExpanded = !isExpanded;
        panel.setAttribute('aria-expanded',  isExpanded)
    });
});