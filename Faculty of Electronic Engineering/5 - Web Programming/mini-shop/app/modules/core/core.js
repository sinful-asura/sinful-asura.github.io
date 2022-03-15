import { Router } from "../../helpers/handlers.js";
import { ApplicationWizzard } from "./models.js";

const wizzard = new ApplicationWizzard();
const router = new Router();

let subscribedEvents = [];

document.addEventListener("app-init", () => {
  console.log("%c[Application Initialized]", "color: #0076e3");
});

document.addEventListener("route-changed", () => {

  const navigationTargets = document.querySelectorAll("[navigate-to]");
  if (!navigationTargets) return;
  navigationTargets.forEach((target) => {
      if(subscribedEvents.find(t => t == target)) {
          target.replaceWith(target.cloneNode(true));
          return;
      }
      subscribedEvents.push(target)
      target.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const route = target.getAttribute("navigate-to");
        if (!!route) {
          document.dispatchEvent(
            new CustomEvent("change-route", {
              detail: {
                targetRoute: route,
              },
            })
          );
        }
      })
  });
});

wizzard.bootstrap();

router.init();
