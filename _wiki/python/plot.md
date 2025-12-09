---
layout: wiki
parent: python
wiki_id: pythonplot
title: "Plotting data in Python"
description: "quick tutorial in plotting"
permalink: /wiki/python/plot/
pinned: true
order: 2
---

### Plotting with ```matplotlib```
To run this code, you will need to install ```matplotlib```, such as by running ```mamba install matplotlib```. Here is an example script which makes a scatter plot of a data set. The data file is expected to be space-delimited and be organized so that the x-value is the first column, and then all subsequent columns are interpreted as different y-values. You could create such an input text file using ```awk``` to parse a more complex file, for example. Here is an example data file:
```
X1 Y1 Y2 Y3
1 1 1 1
2 2 4 8
3 3 9 27
4 4 16 64
5 5 25 125
```

```python
#!/usr/bin/env python3
import numpy as np
import matplotlib.pyplot as plt
import sys

# Check command-line arguments
if len(sys.argv) != 2:
    print(f"Usage: {sys.argv[0]} datafile.txt")
    sys.exit(1)

filename = sys.argv[1]

# Load data, first line is header
header = np.genfromtxt(filename, max_rows=1, dtype=str)
data = np.loadtxt(filename, skiprows=1)

x = data[:, 0]
y_columns = data[:, 1:]
y_labels = header[1:]

# Define a color cycle (Petroff)
colors=["#3f90da","#ffa90e","#bd1f01","#94a4a2","#832db6","#a96b59","#e76300","#b9ac70","#717581","#92dadd"]
n_colors = len(colors)

# Make scatter plot
for i, y in enumerate(y_columns.T):
  plt.scatter(x, y, color=colors[i % n_colors], label=y_labels[i])

# Axis labels
plt.xlabel(header[0], fontweight='bold')
plt.ylabel("Y axis label", fontweight='bold')

# Legend
plt.legend()
plt.grid()
plt.tight_layout()

# Show
plt.show()
```
