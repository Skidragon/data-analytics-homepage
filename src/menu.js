export const MenuFactory = (menu) => {
  return {
    addOpenTrigger: (trigger) => {
      trigger.addEventListener("click", function () {
        menu.style.display = "static";
      });
    },
    addCloseTrigger: (trigger) => {
      trigger.addEventListener("click", function () {
        menu.style.display = "none";
      });
    }
  };
};
