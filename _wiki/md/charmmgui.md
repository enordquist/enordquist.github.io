---
layout: wiki
parent: md
wiki_id: charmmgui
title: "CHARMM-GUI"
description: "a powerful online tool for setting up simulations"
permalink: /wiki/md/charmmgui/
pinned: true
order: 2
---

There are few tools which have democratized molecular mechanics simulations more than [CHARMM-GUI](https://charmm-gui.org). It is an extremely widely-used tool for setting up simulations for a wide variety of systems (biological and materials), including fairly non-trivial systems and enhanced sampling setups. Input scripts including force fields are automatically generated. It is a powerful first step in setting up many simluations, especially for beginners. Take time to play with settings and appreciate some of the (admittedly few) limitations.

### Notes and some limitations;
1. **Patching missing loops**
  - When you want to patch the ends of a missing loop rather than rebuild it:
    - Download the PDB file
    - insert TER lines between missing residues
    - upload this file to CHARMM-GUI
1. MD options may not be up to date, including force fields
1. Configurations still must be equilibrated carefully
