document.addEventListener('DOMContentLoaded', () => {
    let anchorDOM = document.getElementsByTagName('a');
    Object.keys(anchorDOM).forEach((i) => {
        anchorDOM[i].setAttribute('target','_blank');
    });

    let twitterShereDOM = document.querySelectorAll('.twitter-button');
    Object.keys(twitterShereDOM).forEach((i) => {
        twitterShereDOM[i].setAttribute('href', 'http://twitter.com/share?url=' + window.location.href + '&text=' + document.title);
    });
});