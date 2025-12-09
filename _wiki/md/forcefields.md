---
layout: wiki
parent: md
wiki_id: forcefields
title: "Force Fields"
description: "brief list of major force fields"
permalink: /wiki/md/forcefields/
pinned: true
order: 3
---

The MD Force Field is the term used to refer to what the equation used to obtain forces acting on particles in molecular mechanics simulations. Often, the fundamental equation written down in papers is a Potential Energy equation (below), where the forces are obtained by the first derivative. In this page I only list all-atom additive force fields, although many other MM force fields exist (polarizable, coarse-grained, etc). A critical component is the so-called "general" force field, which refers to a set of parameters and/or method for generating parameters for arbitrary small molecules such as drugs.

$$
\begin{aligned}
V_{\text{total}} &= 
\sum_{\text{bonds}} k_b (r - r_0)^2
+ \sum_{\text{angles}} k_\theta (\theta - \theta_0)^2
+ \sum_{\text{Urey--Bradley}} k_{\mathrm{ub}} (r_{13} - r_{13}^0)^2 \\
&\quad + \sum_{\text{dihedrals}} \sum_{n} \frac{K_{\phi,n}}{2}\big[1 + \cos(n\phi - \delta_n)\big]
+ \sum_{\text{impropers}} k_\omega (\omega - \omega_0)^2  + \sum_{\text{CMAP}} V_{\mathrm{CMAP}}(\phi,\psi) \\
&\quad + \sum_{i<j}^{\text{nonbonded}} \left\{ 
\varepsilon_{ij}\left[\left(\frac{R_{\min,ij}}{r_{ij}}\right)^{12} - 2\left(\frac{R_{\min,ij}}{r_{ij}}\right)^{6}\right]
+ \frac{q_i q_j}{4\pi \varepsilon_0 r_{ij}}
\right\}.
\end{aligned}
$$

## MD Force Fields
1. **CHARMM** (CHemistry At Harvard Macromolecular Mechanics)
  - charmm36 (sometimes called "[charmm36m](https://www.nature.com/articles/nmeth.4067)"...)
  - parameterization scheme based on preserving charge similarity between similar (chemically, topologically) functional groups
  - developed (virtually) exclusively by Alexander Mackerell's group
  - [documentation](https://academiccharmm.org/documentation)
  - [forum](https://forums-academiccharmm.org/)
  - [CGenFF](https://cgenff.com) Charmm General FF
1. **AMBER** (Assisted Model Building and Energy Refinement)
  - many variants for different purposes:
    - (a99SB-Disp)[https://pmc.ncbi.nlm.nih.gov/articles/PMC6003505/] for IDPs [D.E. Shaw Research](https://www.deshawresearch.com/)
    - ff19 (sometimes called "[ff19SB-ILDN](https://pubs.acs.org/doi/10.1021/acs.jctc.9b00591)"...) **Note:** SB refers to Stony Brook and Carlos Simmerling's group
    - ff14SB + lipid17 (still used, but I believe less well balanced than 19)
  - parameterization scheme which prioritizes high-quality charge assignment early on
  - [website](https://ambermd.org/AmberModels.php)
  - [GAFF/Antechamber](https://ambermd.org/antechamber/gaff.html) General Amber FF
1. **OPLS** (Optimized Potential for Liquid Simulations)
  - well optimized for experimental liquid density, heat of vaporization
  - historically, very improtant for philosophical approaches to LJ parameterization
  - [LigParGen](https://zarbi.chem.yale.edu/ligpargen/) server for generating params
1. **OpenFF** (Open Force Field)
  - Intended to be a way to directly parameterize molecules without (expert-guided) atom typing
  - Part of modern attempts at "open", "democratic", consortium-based science efforts
  - [website](https://openforcefield.org/force-fields/force-fields/)
  - [organization](https://openforcefield.org/)
1. **MMFF94** (Merck Molecular Force Field)
  - still distributed in RDKit, Open Babel, etc (good for quick geometry optimization)
  - as far as my colleagues (at Merck) tell me, not in much (any?) use at Merck
