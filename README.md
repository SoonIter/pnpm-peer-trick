# pnpm-peer-trick
Q: How to specify the version of secondary dependencies?

```js
// before
react
  dependencies
  - loose-envify   <---- How can I specify the version of this? peer it and auto-install-peers=true
      dependencies
      - js-tokens

// modified by .pnpmfile.cjs
react
  peerDependencies
  - loose-envify
      dependencies
      - js-tokens
```

```js
  a    > react@18.2.0 > loose-envify@1.2.0
  b    > react@18.2.0 > loose-envify@1.1.0
normal > react@18.2.0 > loose-envify@1.4.0
```

```js
  a    > react@18.2.0_loose-envify@1.2.0
  b    > react@18.2.0_loose-envify@1.1.0
normal > react@18.2.0_loose-envify@1.4.0
```
![demo](./docs/dot_pnpm.jpg)


## what is peer?
```js
app-demo
  react@18.2.0     <----------- the same
  antd                        |
    peerDependencies          |
    - react@18.2.0 <----------- 
```

btw, I think react is the best package to test pnpm behavior
```js
react > loose-envify > js-tokens
```
