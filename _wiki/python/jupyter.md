---
layout: wiki
parent: python
wiki_id: numpy
title: "Jupyter Notebooks"
description: "are powerful, interactive environments for python programming and SageMath"
permalink: /wiki/python/jupyter
pinned: true
order: 4
---

### Jupyter Notebooks
You can use ```conda``` to install Jupyter and/or SageMath, and start working in a nice coding environment in the browswer. Jupyter provides access to a python kernel, and if you want to use the more sophisticated, "high-level" scripting in SageMath, you can do so in the same Jupyter notebook environment. SageMath is an attempt to duplicate the kind of high-level scientific and mathematical programming available in software like Mathematica, MatLab, or Maple. Sage makes use of SymPy, the python that does Symbolic Mathematics, or sometimes called a Computer Algebra System.

I have a JupyterLab Server which you can access from anywhere [here](https://isengard.freedynamicdns.org). Ask me for the login credentials, if you want to give it a try. I plan to use this sort of server in my courses, and I have a few example scripts demonstrating some topics in Physical Chemistry.

### Installation (with conda already installed)
```bash
# to setup environment:
conda create -n jupyter -c conda-forge jupyterlab sage

# then to start jupyter:
jupyter lab

# or start sage:
sage -n jupyter

```
