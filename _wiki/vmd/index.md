---
layout: wiki
parent: wiki
wiki_id: vmd
title: "VMD"
description: "a powerful tool for visualizing molecules and their dynamics"
permalink: /wiki/vmd/
pinned: true
order: 2
---

Visualizing Molecular Dynamics: a very powerful tool, essential for success! You can [download](https://www.ks.uiuc.edu/Development/Download/download.cgi?PackageName=VMD) the software, or check out the [documentation](https://www.ks.uiuc.edu/Research/vmd/current/docs.html). For quick reference, there are two common ways to load files in vmd. One can load a single system, possibly with multiple files and frames:
```vmd topology.psf trajectory.dcd``` 

Or one can load many files as separate molecules: 
```vmd -m traj*.pdb```

{% include wiki_index.html %}
