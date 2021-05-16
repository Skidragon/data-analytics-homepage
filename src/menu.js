export const MenuFactory = (menu) => {
  const openMenu = () => {
    menu.style.display = "block";
    menu.style.position = "fixed";
    menu.style.zIndex = 1000;
  };
  const closeMenu = () => {
    menu.style.display = "none";
  };
  return {
    addOpenTrigger: (trigger) => {
      trigger.addEventListener("click", openMenu);
    },
    addCloseTrigger: (trigger) => {
      trigger.addEventListener("click", closeMenu);
    },
    removeOpenTrigger: (trigger) => {
      trigger.removeEventListener("click", openMenu);
    },
    removeCloseTrigger: (trigger) => {
      trigger.removeEventListener("click", closeMenu);
    }
  };
};
