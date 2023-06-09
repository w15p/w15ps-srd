import {Wand} from "./items/wand.js";
import {MagicMissile} from "./spells/magic_missile.js";
import {FaerieFire} from "./spells/faerie_fire.js";

function setupW15ps() {
  // check for existence of W15ps namespace to reuse or create otherwise
  globalThis.W15ps = globalThis.W15ps !== undefined ? globalThis.W15ps : {};
  const w15ps = globalThis.W15ps; // for simpler reference
  w15ps.Wand = Wand;
  w15ps.MagicMissile = MagicMissile;
  //w15ps.FaerieFire = FaerieFire;
  FaerieFire.addEffect();
  console.log("%cw15ps-srd %c| Initialized \n - W15ps registered", "color: #2e5a88; font-weight: bold", "color: #333333; font-weight: normal");
}

Hooks.once("ready", () => {
	setupW15ps();
});