---
layout: wiki
parent: md
wiki_id: engines
title: "Engines"
description: "brief list of major MD sofware"
permalink: /wiki/md/engines/
pinned: true
order: 2
---

The MD engine is the sofware that calculates the forces and propagates the atoms, consisting of tools for force integrators, thermostats, barostats, etc. Modern software is increasingly complicated as there must be a separate version complied to run partially or entirely on a GPU. There are many major MD engine software, of which I have primarily used CHARMM, Open-MM, and GROMACS. Other major interfaces include Amber, NAMD, LAMMPS, etc. Historically, most/all also were developed alongside a force field with the same or a related name. Although perhaps not 100% true in all cases, you can largely run most force fields on most engines today with the correct setup.

## MD Engines
1. **CHARMM**
  - Immensely flexible FORTRAN-like scripting interface
  - academic version needs OpenMM plugin for GPU support
  - steep learning curve but excellent for deep understanding
  - [pyCHARMM](https://github.com/BrooksResearchGroup-UM/pyCHARMM-Workshop) python wrapper
  - [documentation](https://academiccharmm.org/documentation)
  - [forum](https://forums-academiccharmm.org/)
1. **GROMACS**
  - Popular, well-documented, easy to use
  - At fundamental level, designed for efficiency: be careful and stay up to date on documentation/errors etc.
  - [plumed](https://plumed.org) support for enhanced sampling
  - [documentation](https://manual.gromacs.org/)
  - [tutorials](https://www.gromacs.org/tutorial_webinar.html)
  - [Lemkul lab tutorial](http://www.mdtutorials.com/gmx/index.html)
1. **OpenMM**
  - fast, python interface, well optimized for GPU
  - generally seen as easiest to contribute to due to implementation details
  - [plumed](https://plumed.org) support for enhanced sampling
  - [documentation](https://openmm.org/documentation)
  - [tutorials](https://openmm.github.io/openmm-cookbook/latest/tutorials)
1. **Amber**
  - fast, well optimized for GPU
  - personally, unfamiliar
  - [plumed](https://plumed.org) support for enhanced sampling
  - [documentation](https://ambermd.org/Manuals.php)
  - [tutorials](https://ambermd.org/tutorials)
1. **NAMD**
  - setup and analysis with [VMD](https://www.ks.uiuc.edu/Research/vmd/) and tcl scripting
  - scales well for HUGE systems (>> 1 Million atoms)
  - personally, unfamiliar
  - [plumed](https://plumed.org) support for enhanced sampling
  - [docs and tutorials](https://www.ks.uiuc.edu/Research/namd/)
1. **GENESIS**
  - GENeralized-Ensemble SImulation System (acronym)
  - as name suggests, designed for Generalized-ensemble: multi-Hamiltonian, multi-scale, etc.
  - scales well for HUGE systems (>> 1 Million atoms)
  - personally, unfamiliar
  - [documentation](https://mdgenesis.org/documentation/)
1. **Desmond**
  - D.E. Shaw Research MD engine
  - optimized for GPUs
  - personally, unfamiliar
  - [resources](https://www.deshawresearch.com/resources.html)
1. **apoCHARMM**
  - under active development (Brooks lab @ NIH)
  - designed for GPU
  - personally, unfamiliar
  - [GitHub](https://github.com/samarjeet/apocharmm)
1. **LAMMPS**
  - Used for wide variety of molecular mechanics calculations (bio, materials, etc)
  - personally, unfamiliar
  - [website](https://www.lammps.org/)
