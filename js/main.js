gsap.from('.judul-hero', {duration:1.5, y:100, opacity:0});
let tl =gsap.timeline(
  {
    scrollTrigger:{
      trigger: 'dark',
    }
  }
);

tl.from('.wrap-arrum',{delay:.5, duration:1, y:100, opacity:0})
  .from('.wanita', {delay:.5, duration:1, x:-100, opacity:0 })
  .from('.pria', {duration:1, x:100, opacity:0 })
  ;