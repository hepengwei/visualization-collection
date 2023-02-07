import ReactGA from "react-ga4";

const TRACKING_ID = "G-N0W492NWD6";

function init() {
  ReactGA.initialize(TRACKING_ID);
}

function sendEvent(payload) {
  ReactGA.event(payload);
}

function sendPageview(path) {
  ReactGA.send({ hitType: "pageview", page: path });
}

export default {
  init,
  sendEvent,
  sendPageview,
};
