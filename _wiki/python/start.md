---
layout: wiki
parent: python
wiki_id: pythonstart
title: "Getting started in python"
description: "a brief introduction to core concepts"
permalink: /wiki/python/start/
pinned: true
order: 1
---

### Learning Python
I recommend learning python at a website such as [learn-python.org](https://www.learnpython.org/), where you can slowly build up your experience with basic elements of programming. You will find common elements with [bash programming](/_wiki/bash/commands), because certain foundational elements of programming such as conditional statements and looping are present in any language. Time spend learning python in this way will translate to nearly any other language.

After that, undertake some challenges. Find something that sparks your interets and see if you can solve it. Here are some examples:

### Challenge 1: Print a diamond
Try to print shapes (squares, triangles, diamonds) of any size based on a user-supplied input. Start with a square, then try prining an equilateral triangle, then a diamond. Try to use previous code, perhaps saved in functions, for successive projects if possible. Use the code snippet below to get you started on ```shape.py```. You should improve it so that if a user supplies anthing other than a ***positive integer*** (e.g. letters, negative numbers, non-integers), there is a helpful error message!
```python
import sys
dim = sys.argv[1]
for i in range(dim):
  print('*'*dim)
```

Example output of ```python shape.py 5 diamond```:
```
  *
 ***
*****
 ***
  *
```

### Challenge 2: Estimate $\pi$
Run a Monte Carlo-style simulation to estimate the value of $\pi$ by generating a bunch of random "dart throws" at a circlular "dart board" inside a square "wall". If you create random throws that land within a 2x2 square area (e.g. -1 to 1), and make the circular dart board area have radius of 1, then the probability of landing a dart in the board should approach pi/4 for large numbers of throws. You will find the python library ```random``` useful for generating random numbers like dart coordinates.
```
$ python estimate_pi.py 100

3.151
```

