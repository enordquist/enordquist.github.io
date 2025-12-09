---
layout: wiki
parent: vmd
wiki_id: materials
title: "Materials"
description: "custom VMD renders"
permalink: /wiki/vmd/materials/
pinned: true
order: 3
---


You can define custom colors and materials inside the after idle block of .vmdrc. Check out the VMD docs e.g. [materials](https://www.ks.uiuc.edu/Research/vmd/current/ug/node88.html) and [colors](https://www.ks.uiuc.edu/Research/vmd/vmd-1.7.1/ug/node72.html). Huge thanks to my friend Jian Huang for pointing this out [here](https://huang-jian.com/resources/CompBio_05/)!

```
after idle {

	# Define your own color
	if { 1 } {
		color salmon 1 0.4745 0.4235
	}

	# Define your own material
	if { 1 } {
	    # define a new, very transparent material 'FadingSurf'
        # specular shininess mirror opacity outline outlinewidth transmode
        material add FadingSurf
        material change ambient   FadingSurf 0.20
        material change diffuse   FadingSurf 0.61
        material change specular  FadingSurf 0.00
        material change mirror    FadingSurf 0.00
        material change shininess FadingSurf 0.00
        material change opacity   FadingSurf 0.48
        material change outline   FadingSurf 1.61
        material change outlinewidth FadingSurf 0.19
        material change transmode FadingSurf 0.00	
	}
}
...
```
