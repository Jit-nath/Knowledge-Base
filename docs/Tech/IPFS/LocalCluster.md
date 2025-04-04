---
sidebar_position: 2
---

# Set up Local Cluster

You can simulate a distributed IPFS network by running multiple IPFS and IPFS Cluster nodes locally.

## 1. Install IPFS & IPFS Cluster

Download and install:

- **IPFS:** https://docs.ipfs.tech/install/
- **IPFS Cluster:** https://cluster.ipfs.io/download/

Make sure `ipfs` and `ipfs-cluster-service` are in your PATH.

## 2. Set Up Directories

Create folders for each node:

```bash
mkdir ~/ipfs-node-a ~/ipfs-node-b
mkdir ~/ipfs-cluster-a ~/ipfs-cluster-b
```

## 3. Initialize and Start IPFS Nodes

```bash
# Node A
export IPFS_PATH=~/ipfs-node-a
ipfs init
ipfs daemon

# Node B (in another terminal)
export IPFS_PATH=~/ipfs-node-b
ipfs init
ipfs daemon
```

## 4. Initialize and Start IPFS Cluster Nodes

```bash
# Cluster A
export CLUSTER_PATH=~/ipfs-cluster-a
ipfs-cluster-service init
ipfs-cluster-service daemon

# Cluster B (new terminal)
export CLUSTER_PATH=~/ipfs-cluster-b
ipfs-cluster-service init
ipfs-cluster-service daemon
```

## 5. Connect Cluster Peers

Copy the Cluster A peer ID (shown on startup).

Join Cluster B to A using:

```bash
ipfs-cluster-service init --bootstrap /ip4/127.0.0.1/tcp/<port>/p2p/<peer-id>
```

## 6. Add and Pin Files

From any cluster node:

```bash
ipfs add hello.txt
ipfs-cluster-ctl pin add <CID>
This will replicate the file across all peers in the cluster.
```
