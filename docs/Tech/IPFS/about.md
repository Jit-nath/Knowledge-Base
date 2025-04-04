---
sidebar_position: 1
---

# Abstract

**InterPlanetary File System (IPFS)** is a peer-to-peer file storage protocol that aims to make data storage decentralized.

When a file is added to IPFS, it's split into smaller chunks and stored across multiple nodes. Each file (or chunk) is assigned a unique **CID (Content Identifier)**, which is a hash of the content. To retrieve the file, you simply use its CID.

IPFS storage is not permanent by default. To keep files available, you need to **pin** them using your own node or third-party services like **Pinata**, **Web3.Storage**, or **Infura**.

Since data is fetched from nodes that may be globally distributed, **retrieval speed** can vary depending on network conditions and node availability.


