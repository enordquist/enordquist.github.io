---
layout: wiki
parent: bash
wiki_id: slurm
title: "The Slurm Scheduler"
description: "introduction and example"
permalink: /wiki/bash/slurm/
pinned: true
order: 7
---

On shared computing resources, which can range from a small network to a high-performance computing cluster (HPCC), a scheduler is the critical tool which allows many users to submit jobs simultaneously and schedule which jobs get assigned to which resources. Schedulers are powerful and complex tools, but with a few key ideas you can [get started](https://slurm.schedmd.com/quickstart.html).

### Simple Slurm job template
Submitting a job to slurm scheduler would look like: ```sbatch job.cmd```, where ```job.cmd``` is very similar to a bash-style script with a few key differences. Here's a simple example:
```bash
#!/bin/bash
#SBATCH --job-name=myjob
#SBATCH --nodes=1               # allocate 1 node
#SBATCH --ntasks=1              # only one MPI task
#SBATCH --cpus-per-task=1       # request 1 CPU
#SBATCH --gres=gpu:1            # request 1 GPU
#SBATCH --output=myjob_%j.log   # output stdout/stderr to log
#SBATCH --time=02:00:00         # optional: walltime limit

## -------------------------------
## Load modules
module load cuda/12.6

# Optional: show assigned resources
echo "Running on node: $SLURM_NODELIST"
echo "Assigned GPU(s): $CUDA_VISIBLE_DEVICES"

# Run your simulation
python run_simulation.py

```

### Cheatsheet for converting between SGE and Slurm-style commands

| ***Slurm*** | ***SGE*** |
|---|---|
| squeue | qstat |
| sinfo | qhost |
| sbatch | qsub |
| scancel | qdel |
