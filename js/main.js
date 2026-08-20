if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.gsap-reveal');
  if (revealElements.length > 0 && typeof gsap !== 'undefined') {
    gsap.utils.toArray('.gsap-reveal').forEach((elem) => {
      gsap.from(elem, {
        scrollTrigger: {
          trigger: elem,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
      });
    });
  }

  const counterElements = document.querySelectorAll('.gsap-counter');
  if (counterElements.length > 0 && typeof gsap !== 'undefined') {
    counterElements.forEach((counter) => {
      const targetVal = parseFloat(counter.getAttribute('data-target')) || 0;
      const suffix = counter.getAttribute('data-suffix') || '';
      const decimals = parseInt(counter.getAttribute('data-decimals')) || 0;

      ScrollTrigger.create({
        trigger: counter,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            innerHTML: targetVal,
            duration: 2.2,
            ease: 'power2.out',
            snap: { innerHTML: decimals === 0 ? 1 : 0.1 },
            onUpdate: function () {
              counter.innerHTML = (decimals > 0 ? parseFloat(counter.innerText).toFixed(decimals) : Math.floor(counter.innerText)) + suffix;
            }
          });
        }
      });
    });
  }
});
