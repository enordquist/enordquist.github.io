---
layout: wiki
parent: md
wiki_id: mdreading
title: "Reading list"
description: "a small set of key papers and concepts"
permalink: /wiki/md/mdreading/
pinned: true
order: 1
---

The core topics in the field of molecular mechanics I tend to think of as belonging to two core subtopics: the MM calculations, and the force fields. The MM calculations are performed, sophisticated software "engines" that are responsible for calculating the forces acting on many atoms and propogating their positions forward in time. The force calculation is based on a simple equation ("force field") that describes how the force acting on a given atom is a function of it's position with respect to other nearby atoms.

|-------|--------|---------|
| Topic | What to focus on | Paper(s) |
|-------|--------|---------|
| **All-atom additive ff** | What is a force field? How do they describe proteins? What are some of the main strengths and limitations of the all-atom additive approach? | [Section I and II, Case and Ponder](https://drive.google.com/file/d/1yZZv0U7Y_YAUUFFrxb87rNPzOLPYpR1b/view) |
|-------|--------|---------|
| **Force field accuracy** | How accurate and "balanced" can the additive ff get? | [a99sb-disp, D.E. Shaw Research](https://drive.google.com/file/d/1ZGDlI8nNg_oHNqqKtry_OjIrRsGxf5Fk/view)
|-------|--------|---------|
| **Polarizabile ff** | Is there a simple way to bring back some electronic degrees of freedom, addressing a core limitation of the additive ff? | [Section III, Case and Ponder](https://drive.google.com/file/d/1yZZv0U7Y_YAUUFFrxb87rNPzOLPYpR1b/view) |
|-------|--------|---------|
| **Molecular Mechanics, in practice** | What are the numerical algorithms used? How are atomic positions propagated? How do we sample the appropriate theromdynamic ensemble (NVT, NPT)? | 1. [Integrators](https://drive.google.com/file/d/1YsrCxa37PoUrs_OoDTjQBMvuGumwcsjU/view) <br> 2. [PME](https://drive.google.com/file/d/1ByiuoErLYnlXR5Z92cWcZHJdVrNcmhsF/view) <br> 3. [Thermostats and barostats](https://drive.google.com/file/d/17R4frnlSMptbpUxObkfgz3YKWAdiph8C/view) |
|-------|--------|---------|
| **The sampling problem** | Why can we not use these amazing ff's and MM algorithms to simulate the living cell in real-time? | [Convergence in Simulations, Gunsternen](https://drive.google.com/file/d/1-uQ0SV7a-x3099RRVQ439tZGjQwWnJZb/view) |
|-------|--------|---------|
| **Collective variables** | Can we focus sampling and bias to the "relevant" degree(s) of freedom that drive the process of interest, which we might call a collective variable or reaction coordinate? How can we determine what CV to select? | [RCs and rates, Best and Hummer](https://drive.google.com/file/d/1PC4q1Xlnhm-qiu4Qn-H-GGg3xjNNfIkQ/view)
|-------|--------|---------|
| **Free Energy calcs** | Can we predict what processes occur in nature using $\Delta G = \Delta H - T \Delta S $? How tightly do ligands bind? What is the impact of mutations on folding and function? | [Review, Chipot](https://drive.google.com/file/d/1NTjqHzXrbvViElitJs7ldZXLBeJz305E/view) |
|-------|--------|---------|
| **General force fields** | If we want to get binding affinities for many arbitrary small molecules (potential drugs), we will need good parameters for them, and fast! | 1. [Comparison, Brooks et al](https://drive.google.com/file/d/1T4pFuLs3LrFJEYmmkVR8t-0R7YBinBJd/view) <br> 2. [GAFF, Case et al](https://drive.google.com/file/d/12-TSJDgS4YE_sGFTnMQ696ceVjLLYO0G/view) <br> 3. [CGenFF, MacKerell et al](https://drive.google.com/file/d/1OLMRnqb5dmStS-tHTAtQUHNToeM3aflB/view) |
|-------|--------|---------|
| **Other solutions to sampling problem** | To increase effective sampling, what other degrees of freedom (besides electronic) can we integrate out? I argue that these are perhaps not always the most central solutions, but I should note that all these methods are still under active use and development. | 1. [Coarse grain ff review, Kmiecik et al](https://drive.google.com/file/d/1qBu9uMJnhTH-QFCUra5CtpNwV8P9RdMn/view?usp=drive_link) <br> 2. [GB Implicit solvent ("continuum electrostatics"), Caflisch et al](https://drive.google.com/file/d/1v0gSu5u2xXDF5nSzcN7XnNL8SAFDIH2B/view)|
|-------|--------|---------|
