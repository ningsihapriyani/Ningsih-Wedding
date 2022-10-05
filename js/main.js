gsap.from('.judul-hero', {duration:1.5, y:100, opacity:0});
let tl =gsap.timeline(
  {
    scrollTrigger:{
    }
  }
);

tl.from('.wrap-arrum',{delay:.5, duration:1, y:100, opacity:0})
  ;