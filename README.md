# About this project

WebAssembly port of the strong shogi engine YaneuraOu.
This project is based on the following repository.

- https://github.com/yaneurao/YaneuraOu
- https://github.com/niklasf/stockfish.wasm

# Requirements

Requires these HTTP headers on the top level response:

```
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

# Spec

- Hashtable: 1024 MB. You may want to check `navigator.deviceMemory` before allocating.
- Threads: 32. You may want to check `navigator.hardwareConcurrency`. May be capped lower (e.g., dom.workers.maxPerDomain in Firefox).
- Evaluation function: This project uses https://github.com/yaneurao/YaneuraOu/releases/tag/20190115_k-p-256-32-32 for tiny size

# Browser

This project uses WebAssembly SIMD. you will need to use the following browsers.

## Chrome

Since Chrome 91

## Firefox

Only Firefox nightly

# Building

Assuming em++ (^2.0.21) is available:

```
npm run-script prepare
```

# Usage

see index.html

# License

GPLv3
