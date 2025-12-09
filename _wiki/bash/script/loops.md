---
layout: wiki
parent: bashscript
wiki_id: bashscriptloops
title: "Looping"
description: "conditionals, loops, and job control"
permalink: /wiki/bash/script/loops/
pinned: true
order: 4
---

The Unix programming paradigm can also allow for programming technqiues like looping, which allows for more complex scripts that extend beyond a single line.

---

## Conditionals, loops, and job control:
1. ***Conditional statements:*** run commands only when some condition is met
```bash
if [ -f dir/file ]; then echo "file found"; fi
if [ -d dir ]; then echo "dir found"; fi
```

1. ***Looping:*** repeat commands
```bash
for i in {1..10}; do echo -n "$i "; done
while read -r line; do echo "$line"; done < file
```

1. ***Job control:*** run commands in the background
```bash
script.sh &
top
kill pid
pgrep -a vmd
pkill -9 vmd
```

## Exercise:
Create a script that could help you do your research more efficiently! Have it run a simulation in parts, and figure out which part you have already run by checking for existing output or checkpoint files. You may want to start with iterations of identical production runs, or build up a minimization > equilibration > production script.

**Note:** [CHARMM-GUI](charmm-gui.org) generates these files, but as ```csh``` not ```bash``` scripts. You could get ideas from their code, but you will need to "translate" certain c-shell syntax ideas to ```bash```.
