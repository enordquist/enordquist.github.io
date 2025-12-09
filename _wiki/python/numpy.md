---
layout: wiki
parent: python
wiki_id: numpy
title: "Vectorization"
description: "efficient computation via vectorization"
permalink: /wiki/python/numpy/
pinned: true
order: 3
---

### Efficient computation via vectorization in the `numpy` library
**Note:** This is more of an advanced topic, something to be aware of if you are running slow code but not totally necessary. In a [previous challenge](/wiki/python/start), you may have created a program to estimate $\pi$ via a simple Monte Carlo simulation. A simple loop in python is not efficient if one wants to evaluate millions or billions of operations! Vectorization implemented in ```numpy``` allows more efficient computations to be carried using very efficient linear algebra implementations in programming languages like C or Fortran. Here is an example code for estimating $\pi$ using ```numpy``` (installed with `mamba install numpy` if needed):

```python
import numpy as np

Nsteps  = int(1e8)
Ncircle = 0

# allocate initial random numbers
x_array = np.random.uniform(-1.,1.,Nsteps)
y_array = np.random.uniform(-1.,1.,Nsteps)
ones    = np.ones(Nsteps)

# do the calculation
start = time.time()
x_squared = np.square(x_array)
y_squared = np.square(y_array)
r_squared = np.add(x_squared, y_squared)
lessthan_one = np.greater(ones, r_squared)
Ncircle = np.sum(lessthan_one)
pi = 4.*(Ncircle/Nsteps)
print('%.16f'%pi)
```
