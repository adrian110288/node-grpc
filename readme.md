# Readme

```bash
#!/bin/bash
brew install protobuf
```

## Example command

```bash
#!/bin/bash
protoc -I=. ./proto/dummy.proto \
    --js_out=import_style=commonjs,binary:./server \
    --grpc_out=./server \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`
```
