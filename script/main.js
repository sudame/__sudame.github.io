// document.addEventListener('DOMContentLoaded', () => {
//     snsPanelTop = document.querySelector("div.panel.sns").getBoundingClientRect().top;
//     document.querySelector(".arrow").addEventListener('click', (event) => {
//         const snsPanelTop = document.querySelector("div.panel.sns").getBoundingClientRect().top;
//         scrollToSNSPanel(snsPanelTop);
//     });
// });

// scrollToSNSPanel = (toPosition) => {
//     const startTime = Date.now();
//     const startPosition = document.documentElement.scrollTop;
//     console.table({
//         "toPosition": toPosition,
//         "document.documentElement.scrollTop": document.documentElement.scrollTop
//     });

//     let idx = 0;
//     while (document.documentElement.scrollTop <= toPosition) {
//         console.log("OK");
//         window.scrollTo(0, document.documentElement.scrollTop + easing(Date.now() - startTime, startPosition, toPosition - startPosition, 1000));
//         if(idx > 5000) break;
//     }
// };

// /**
//  * @param t {Number} 変化が開始してからの経過時間
//  * @param b {Number} 初期値
//  * @param c {Number} 初期値から変化させたい分の値
//  * @param d {Number} 変化が完了するまでに要する時間
//  */
// const easing = (t, b, c, d) => {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
// };