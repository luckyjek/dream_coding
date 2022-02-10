"use strict";
//magazine
const firstSlide = document.querySelector('.slider__item:first-child');
const lastSlide = document.querySelector('.slider__item:last-child');

function nextSlide() { //자동으로 작동하는 캐로쉘의 slide 함수와 같다.
    const currentSlide = document.querySelector('.showing');
    if (currentSlide) {
        currentSlide.classList.remove('showing');
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            nextSlide.classList.add('showing');
        } else {
            firstSlide.classList.add('showing');
        }
    } else {
        firstSlide.classList.add('showing');
    }
}

/*  nextSlide 함수에서는 다음 형제 노드를 가져왔고, 마지막 이미지 요소가 
 **  showing 클래스를 가지고 있을 때 next 버튼(오른쪽 화살표)이 click 되었다면 
 **  다시 첫번째 이미지 요소에 showing 클래스를 추가했다.
 **
 **  prevSlide 함수에서는 다음 형제 노드 대신 이전 형제 노드를 가져오는 것, 첫 이미지 요소가 
 **  showing 클래스를 가지고 있을 때 prev 버튼(왼쪽 화살표)이 click 되었다면
 **  마지막 이미지 요소에 showing 클래스를 추가하는 것이 다르다.
 */

function prevSlide() {
    const currentSlide = document.querySelector('.showing');
    if (currentSlide) {
        currentSlide.classList.remove('showing');
        const prevSlide = currentSlide.previousElementSibling;

        if (prevSlide) {
            prevSlide.classList.add('showing');
        } else {
            lastSlide.classList.add('showing');
        }
    } else {
        lastSlide.classList.add('showing');
    }
}

document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('next').addEventListener('click', nextSlide);


//Make navbar transparent when it is on the top

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    // console.log(`navbarHeight:${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");

    } else {
        navbar.classList.remove("navbar--dark");
    }
});
//위의 로직을 이용해서 만약 메뉴를 클릭하면 
//뷰포트 기준 그 섹션을 다 꽉 채운다.

//MouseEvent
const target = document.querySelector('.target');

document.addEventListener('mousemove', (event) => {
    const x = event.pageX;
    const y = event.pageY;

    target.style.left = `${x}px`
    target.style.top = `${y}px`
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
        return;
    }
    navbarMenu.classList.remove("open");
    /*html에서 date-link */
    // console.log(event.target.dataset.link);
    scrollIntoView(link);
});

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
    scrollIntoView("#contact");
});

//Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add("visible");
    } else {
        arrowUp.classList.remove("visible");
    }
});
//Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
    scrollIntoView("#home");
});

//Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
// workBtnContainer.addEventListener("click", (e) => {
//     const filter =
//         e.target.dataset.filter || e.target.parentNode.dataset.filter;
//     if (filter == null) {
//         return;
//     }
//     //Remove selection from the previous item and select the new one.
//     const active = document.querySelector(".category__btn.selected");
//     active.classList.remove("selected");
//     //only button
//     const target =
//         e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
//     target.classList.add("selected");

//     projectContainer.classList.add("anim-out");
//     setTimeout(() => {
//         projects.forEach((project) => {
//             console.log(project.dataset.type);
//             if (filter === "*" || filter === project.dataset.type) {
//                 project.classList.remove("invisible");
//             } else {
//                 project.classList.add("invisible");
//             }
//         });
//         projectContainer.classList.remove("anim-out");
//     }, 300);
// });
//1.모든 섹션 요소들과 메뉴아이템들을 가지고온다.
//2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
//3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
const sectionIds = [
    "#home",
    "#about",
    "#skills",
    "#work",
    "#testimonials",
    "#contact",
];

//배열을 하나하나씩 돌면서 새로운 API로 변환할 수 있는것은 map
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
    document.querySelector(`[data-link="${id}"]`)
);

let selectedNavIndex = 0;
// let selectedNavItem = navItems[0];

function selectNavItem(selected) {
    // selectedNavItem.classList.remove("active");
    // selectedNavItem = selected;
    // selectedNavItem.classList.add("active");
}
console.log(sections);
console.log(navItems);

/*코드가 중복이 되므로 함수를 하나 만든다.*/
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({
        behavior: "smooth"
    });
    selectNavItem(navItems[sectionIds.indexOf(selector)]);
}
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
};

const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
        // console.log(entry.target);
        if (!entry.inIntersecting && entry.intersectionRatio > 0) {
            const index = sectionIds.indexOf(`#${entry.target.id}`);

            //y좌표가 -(마이너스)라면 스크롤링이 아래로 되어서 페이지가 올라옴
            //그럼 바로 뒤에 따라오는 인덱스를 선택하면됨
            if (entry.boundingClientRect.y < 0) {
                // page가 올라오는경우라면 해당하는 인덱스보다 1증가한, 다음것이되고
                selectedNavIndex = index + 1;
            } else {
                //반대로 page가 내려가는경우라면 y가 +인경우에는 이전 index로 지정해주면된다.
                selectedNavIndex = index - 1;
            }
        }
    });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));

window.addEventListener("wheel", () => {
    if (window.screllY === 0) {
        selectedNavIndex = 0;
    } else if (
        Math.round(window.scrollY + window.innerHeight) >=
        document.body.clientHeight
    ) {
        selectedNavIndex = navItems.length - 1;
    }
    selectNavItem(navItems[selectedNavIndex]);
});