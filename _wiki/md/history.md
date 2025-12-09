---
layout: wiki
parent: md
wiki_id: history
title: "Molecular Mechanics"
description: "a brief history"
permalink: /wiki/md/history/
pinned: true
order: 1
---

Quantum mechanics is the foundation of modern chemistry and, by extension, all of computational chemistry. It was developed in the 1920s to address several outstanding challenges, including explaining atomic spectra and the wave–particle duality of electrons. A central simplification enabling practical calculations is the **Born–Oppenheimer approximation**, which separates nuclear and electronic degrees of freedom by exploiting their vastly different timescales. While this makes molecular quantum calculations tractable in principle, the computational cost still grows steeply with system size. Even with modern methods, fully QM simulations of systems (*ab initio* MD) are limited to at most ~100 atoms and timescales on the order of picoseconds.

## Empirical force fields to describe molecular mechanics

To access larger systems and longer timescales, simplified **potential energy functions** were introduced to approximate quantum mechanical effects. This takes the central idea of the Born-Oppenheimer approximation even further, by effectively integrating out the electronic degrees of freedom, without treating any electrons explicitly. The forces could be calculated classically from the derivate of the potential energy ($$-\frac{dV}{dr}=m\frac{d^2r}{dt^2}$$), and used to propagate the system over a short time step using numerical integration (from acceleration to velocity). For example, chemically-bonded atoms in the low-energy limit can be approximated via a harmonic potential:
<br>$$V_{bond}(r) = \frac{k}{2}(r-r_0)^2$$

{% include harmonic.md %}

Nonbonded interactions can be modeled using the Lennard Jones potential ("atoms are sticky, but cannot overlap with each othter"). This empirical potential describes two emergent QM effects. **Dispersion (London forces):** attractive, arising from mutually-induced polarization, decaying approximately as $$\frac{-1}{r^6}$$. **Pauli repulsion:** steep short‐range repulsion due to wavefunction overlap, approximated by the $$\frac{1}{r^{12}}$$ term.
<br>$$V_{LJ}(r) = \epsilon\left[\left(\frac{R_{min}}{r}\right)^{12} - 2\left(\frac{R_{min}}{r}\right)^6\right]$$

{% include lennardjones.md %}

The first molecular dynamics (MD) simulation of a Lennard–Jones fluid (liquid argon) was published in 1964 by A. Rahman. The calculation simulated 864 particles and required ~45 s per integration step on the CDC 3600 supercomputer. Specialized empirical force fields were developed for large molecular systems, such as proteins, and more efficient computers and codes enabled calculations of the dynamics of thousands of particles to the nanosecond timescale. By the 90s, force fields such as CHARMM were optimized to agree with crystallographic and NMR data about protein structure and dynamics (crystallogrpahic $$\beta$$-factors, NMR J-couplings, NOEs).

## Select Milestones
- **Particle Mesh Ewald (PME, early 1990s)**  
  Eliminated crude electrostatic cutoffs by enabling efficient, long‐range Coulomb calculations in periodic systems.

- **Free energy methods (1980s–present)**  
  Foundations laid by McCammon, Jorgensen, and others; modern alchemical methods (FEP/TI/MBAR) now central to binding affinity prediction.

- **GPU acceleration (2007–present)**  
  Consumer and scientific GPUs transformed MD throughput by orders of magnitude. Simulations of >100,000 particles and >1 $$\mu$$s timescales are possible on workstations and GPU.

- **Protein force fields (1990s-2010s)**
  Amber and CHARMM all-atom additive protein force fields become widely tested and shown to be generally well-balanced. Effect of GPUs was critical in this.

- **2013 Nobel Prize in Chemistry**  
  Karplus, Levitt, and Warshel for multiscale modeling: QM, QM/MM, MM.

- **Ongoing and future prospects**
  Polarizable force fields, machine-learning potentials, and direct prediction of complete ensembles.

