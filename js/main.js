// ANIMATING INTRO
function intro() {
  //
  const tl = gsap.timeline();
  tl.to(".intro__ver", {
    duration: 0.5,
    height: "100vh",
    ease: "power4.inOut",
    delay: 0.2,
  })
    .to(".intro__ver", {
      duration: 1,
      opacity: 0,
      delay: -0.2,
    })
    .to(".intro__half.first", {
      duration: 0.8,
      left: "-50vw",
      ease: "power4.inOut",
      delay: -0.3,
    })
    .to(".intro__half.second", {
      duration: 0.8,
      left: "100vw",
      ease: "power4.inOut",
      delay: -0.8,
    });
  //
  gsap.from(".nav__logo a", {
    duration: 1,
    yPercent: 100,
    ease: "power4.out",
    delay: 1.7,
  });
  gsap.from(".nav__menu__link span", {
    duration: 0.8,
    yPercent: 100,
    stagger: 0.15,
    ease: "power4.out",
    delay: 1.8,
  });
  gsap.from(".nav__socials__link svg", {
    duration: 0.6,
    x: "200px",
    stagger: 0.05,
    ease: "power4.out",
    delay: 1.8,
  });
  gsap.from(".nav__email span", {
    duration: 1,
    y: "100px",
    ease: "power4.out",
    delay: 2.1,
  });
  //
  gsap.from(".home__text p", {
    duration: 1,
    yPercent: 50,
    opacity: 0,
    stagger: 0.15,
    ease: "power4.out",
    delay: 1.9,
  });
  gsap.from(".home__text span", {
    duration: 1.2,
    yPercent: 100,
    opacity: 0,
    delay: 2.1,
    ease: "power4.out",
  });
  //
  gsap.from(".home__mybrain h2", { duration: 1, opacity: 0, delay: 2.3 });
  gsap.from(".brain-box h3", { duration: 1, opacity: 0, delay: 2.4 });
  gsap.from(".badge", {
    duration: 1,
    opacity: 0,
    stagger: 0.05,
    ease: "expo.out",
    delay: 2.3,
  });
}
//

// MAIN
function main() {
  intro();
}
//

// UTILS
function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
//

// EVENT LISTENERS
window.onload = function () {
  main();
};

window.onscroll = function () {
  const scrollTop = window.pageYOffset;

  if (scrollTop > 20) {
    gsap.to(".nav", { duration: 0.2, opacity: 0 });
  } else {
    gsap.to(".nav", { duration: 0.2, opacity: 1 });
  }
};
