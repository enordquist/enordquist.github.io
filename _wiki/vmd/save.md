---
layout: wiki
parent: vmd
wiki_id: vmdsave
title: "Save settings and visualization states"
default: "don't fight against this powerful, configurable tool!"
permalink: /wiki/vmd/save/
pinned: true
order: 2
---

You can save your preferred setting for default VMD states in the file ```.vmdrc```. VMD comes with a GUI editor for this file in the Main window under Extensions > VMD Preferences, which is generally the best way to customize the settings. Play around!

When you have a more specific visualization, perhaps a way to load a specific type of system consisting always of a topology ```system.psf``` and coordinates ```system.dcd```, you could create all the desired representations, colors, materials, etc, then save the visualization state in Main under File > Save Visualization State... Save it as something like ```view_traj.vmd```. Then load it later on using ```vmd -e view_traj.vmd```. It is ***essential*** to spend time creating these save states early on in a project, and set them up so that you can load the saved state quickly and inspect your simulations quickly and visually!

