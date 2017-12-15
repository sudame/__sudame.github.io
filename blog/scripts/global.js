document.addEventListener('DOMContentLoaded', () => {
    let anchorDOM = document.getElementsByTagName('a');
    Object.keys(anchorDOM).forEach((i) => {
        anchorDOM[i].setAttribute('target','_blank');
    });
});