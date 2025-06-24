import Webex from "@webex/plugin-cc";
document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const tokenElm = document.querySelector("#access-token");
  const wsStatus = document.querySelector("#ws-connection-status");
  const deregisterBtn = document.querySelector("#webexcc-deregister");
  const credentialsForm = document.querySelector("#credentials");

  // Global for SDK
  let webex;

  // Initialize Webex SDK and register the agent
  function initWebex(e) {
    e.preventDefault();
    const token = tokenElm.value;
    console.log("Initializing Webex with token:", token);
    wsStatus.innerText = "Logging in...";
    webex = window.webex = Webex.init({
      credentials: { access_token: token },
    });
    webex.once("ready", () => {
      console.log("Webex is ready.");
      webex.cc
        .register()
        .then(() => {
          wsStatus.innerText = "Logged In - Subscribed";
          console.log("Agent registered successfully.");
        })
        .catch((error) => {
          wsStatus.innerText = "Login failed";
          console.error("Registration failed", error);
        });
    });
    return false;
  }

  // Deregister the agent using the SDK
  function doDeRegister() {
    if (webex && webex.cc && webex.cc.deregister) {
      webex.cc
        .deregister()
        .then(() => {
          wsStatus.innerText = "Logged Out";
          console.log("Agent deregistered successfully.");
        })
        .catch((error) => {
          console.error("Deregistration failed", error);
        });
    }
  }

  // Attach Event Listeners
  credentialsForm.addEventListener("submit", initWebex);
  deregisterBtn.addEventListener("click", doDeRegister);
});
