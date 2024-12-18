import { gsap } from "gsap";

export const hoverLogo = (element_one, element_two) => {
  gsap.to(element_one, {
    y: -3,
    duration: 0.3,
    ease: "power1.out",
  }
  );
  gsap.to(element_two, {
    y: -3,
    duration: 0.3,
    ease: "power1.out",
  }
  );
};
