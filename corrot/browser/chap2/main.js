const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {

    const targetRect = target.getBoundingClientRect();
    console.log(targetRect)
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        console.log(`${x} ${y}`);

        /*style을 지정할 때는 px, 픽셀이라는 유닛(단위)을 붙여야된다.*/
        vertical.style.transform = `translateX(${x}px)`
        horizontal.style.transform = `translateY(${y}px)`
        target.style.transform = `translate(${x-targetHalfWidth}px,${y-targetHalfHeight}px)`
        tag.style.transform = `translate(${x}px,${y}px)`
        tag.innerHTML = `${x+20}px, ${y+20}px`;
    })
})