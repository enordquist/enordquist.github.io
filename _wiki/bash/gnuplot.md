---
layout: wiki
parent: bash
wiki_id: gnuplot
title: "GNUplot"
description: "introduction to the GNU plotting utility"
permalink: /wiki/bash/gnuplot/
pinned: true
order: 6
---

It is often highly convenient to make a quick plot of a function or data right from the command line. The ```gnuplot``` utility provides this. If desired, one can make high-quality plots as well. However, I recommend using [python](../python/plot) for plots made regularly or for serious presentations or publications, and using ```gnuplot``` for on-the-spot analysis.

### Plot a function
To plot functions, such as the Coulomb and Lennard-Jones potentials, type ```gnuplot``` to enter the interactive interpreter mode, then enter the following:
```
p -1/x t 'Coulomb', 1/x**12 - 2/x**6 t 'LJ'
set xr[0:8]
set yr[-1:1]
rep
```
I have adopted the fast but terse style allowed by ```gnuplot```. You could also use the following:
```
plot -1/x title 'Coulomb', 1/x**12 - 2/x**6 title 'LJ'
set xrange[0:8]
set yrange[-1:1]
replot
```

### Plot a data file
Suppose instead of an analytic function, you have a simple text file containing data you want to plot, perhaps generated using ```awk``` or something similar. You could plot such a file using (```w p``` denotes ```with points```, and the default used above is ```with lines```):
```
p 'file' u 1:2 w p, '' u 1:3 w p, '' u 1:4 w p
```
