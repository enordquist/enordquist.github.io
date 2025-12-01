---
layout: wiki
title: "Bash programming"
description: "Simple commands chained together for fast and powerful effects"
permalink: /wiki/bash/programming/scripting
pinned: true
order: 3
---

The Unix programming paradigm can also allow for programming technqiues like looping, which allows for more complex scripts that extend beyond a single line.

Many excellent and free Unix and bash tutorials are available online, such as this [intro](https://www.codecademy.com/learn/intro-to-the-command-line) or this [interactive game](https://gitlab.com/slackermedia/bashcrawl). I encourage you to read people’s scripts and solutions on StackExchange; one can only learn a new language by reading good examples!

---

## Looping, redirection, and job control:
1. ***Conditional statements:*** run commands only when some condition is met
```
if [ -f dir/file ]; then echo "file found"; fi
if [ -d dir ]; then echo "dir found"; fi
```

1. ***Looping:*** repeat commands
```
for i in {1..10}; do echo -n "$i "; done
while read -r line; do echo "$line"; done < file
```

1. ***Redirection:*** chain smaller commands together, creating powerful tools on the fly
```
echo "REMARK Manually created $(date)" > 1mbd_hsd.pdb
grep -E "ATOM|CA" 1mbn.pdb | sed 's/HIS/HSD/g' >> 1mbd_hsd.pdb
python run_simulation.py | tee output.log
python run_simulation.py > output.log 2> error.log
python run_simulation.py &> output_error.log
```

1. ***Job control:*** run commands in the background
```
script.sh &
top
kill pid
pgrep -a vmd
pkill -9 vmd
```
