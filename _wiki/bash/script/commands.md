---
layout: wiki
parent: bashscript
wiki_id: bashscriptcommands
title: "Bash commands"
description: "simple commands chained together for fast and powerful effects"
permalink: /wiki/bash/script/commands/
pinned: true
order: 3
---

The Unix programming paradigm is built around small programs that read and write plain text in simple, predictable ways. By chaining tools together with redirection and pipes, complex workflows become compact and expressive. This approach is powerful for quickly processing large text files like logs, or large text-based datasets, all right at the command line.

Many excellent and free Unix and bash tutorials are available online, such as this [intro](https://www.codecademy.com/learn/intro-to-the-command-line) or this [interactive game](https://gitlab.com/slackermedia/bashcrawl). I encourage you to read people’s scripts and solutions on StackExchange; one can only learn a new language by reading good examples!

---

## A non-complete list of commands, plus redirection

1. ***Inspecting files:*** view the beginning or end of a file
```bash
less file
head -n 5 file
tail -f output.log
```
1. ***Regular expressions:*** search, filter, and edit text
```bash
grep -E 'error|fail' file
sed 's/:/ /g' file
```

1. ***Column-based processing:*** extract columns, compute values, filter lines
```bash
awk -F, '{print $1,$3,($1-$3)/$3*100}' file
awk -v cut=100 'BEGIN{sum=0; n=0}{if ($1>cut){sum+=$1; n++}}END{printf "%i %.1f\n",n,sum/n}' file
```

1. ***Redirection:*** chain smaller commands together, creating powerful tools on the fly
```bash
echo "REMARK Manually created $(date)" > 1mbd_hsd.pdb
grep -E "ATOM|CA" 1mbn.pdb | sed 's/HIS/HSD/g' >> 1mbd_hsd.pdb
python run_simulation.py | tee output.log
python run_simulation.py > output.log 2> error.log
python run_simulation.py &> output_error.log
```

---

## Example 1: Summarize many simulation log files

Suppose each log contains a line like: ```Final energy: -1342.883 kcal/mol```

Extract energies and sort simulations by stability:
```bash
grep "Final energy" run_*.log \
| sed 's/:/ /' \
| awk '{print $1, $3}' \
| sort -k2 -n
```
---

## Example 2: Simple data analysis on output files

Given a file ```energy.dat```:
```
step energy
1  -502.1
2  -531.8
3  -530.4
4  -529.7
```
Count entries below a cutoff and compute the average:
```bash
awk -v cutoff=-531 'NR>1 && $2<cutoff {sum+=$2; count++} END {printf "N=%d  mean=%.2f\n", count, sum/count}' energy.dat
```
