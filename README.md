# w15ps-srd

A simple SRD-based module that I'm using to both _slowly_ customize things to my liking and to learn more about the foundry platform. Currently very much a work in progress but functional.

__Compendia__

w15p's Grimoire:
* Faerie Fire (includes visual effect, grants advantage and automatically deletes placed template)
* Magic Missile (includes sequencer/jb2a visual effects, assignment of missiles per target and damage application)

w15p's Wares:
* Wand of Magic Missiles (includes charge-based upcasting of Magic Missile, handles chance of wand deletion when all charges are spent)

w15p's Talents and Feats:
* Round Robin (applies spell effects round-robin fashion based on targeting order)

__Scripts__

* scripts/w15ps.mjs
* scripts/items/wand.js
* scripts/spells/magic_missile.js
* scripts/spells/faerie_fire.js

__Required Modules__
* midi-qol
* socketlib (required by midi-qol)
* lib-wrapper (required by midi-qol)
* dae
* JB2A_DnD5e (jb2a_patreon is recommended because it is _so_ much prettier)
* itemacro
* tokenmagic
* sequencer

__Recommended Modules__
* times-up (necessary for auto-expiry of effects)
* dfreds-convenient-effects (necessary for auto-expiry of effects like Faerie Fire)
* dfreds-effects-panel
* token-action-hud-core
* token-action-hud-dnd5e
