---
title: "Molecular dynamics simulations"
excerpt: "Using Newton's laws to simulate molecular motion, like these wiggling waters:<br/><img src='/images/water.gif' width='500' height='300'><br/>"
collection: portfolio
category: Techniques
---
<div style="text-align: justify">
I use molecular dynamics simulations to study huge molecules like proteins, the molecular machinery cells use to accomplish almost all functions which sustain life. These simulations give us a way to 'watch the movie' of how these molecular "machines" perform their functions. The work by an interative process:<br><br>
  
<b>Step 1:</b> Calculate the forces acting on each atom by every other atom. <br>
<b>Step 2:</b> Calculate how the forces will move the atoms by integration of acceleration into velocity. <br>
<b>Step 3:</b> Move all the atoms, and go back to Step 1. <br><br>

Interestingly, a similar algorithm to MD is used to study the motions of stars and galaxies, since both molecular (charge-charge or electrostatic) and galactic motion (large bodies of mass attracting each other via gravity) are dominated by inverse-square-distance laws, respectively:

$$
\displaylines{
F_{gravity} = k_g \frac{m_1 m_2}{r^2} \\\
F_{charge} = k_e \frac{q_1 q_2}{r^2}
}
$$

This means that a lot of the world's supercomputer time is spent on MD and similar calculations. It's a wonderful mystery still what connections lie between these evocatively similar relationships.<br> <br>
</div>

If you want to get an idea about how MD works, you can play with this free, online [interactive MD simulator](https://physics.weber.edu/schroeder/md/), or you can fall down the [MD Wikipedia rabbit hole](https://en.wikipedia.org/wiki/Molecular_dynamics).
