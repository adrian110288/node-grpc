var grpc = require("@grpc/grpc-js");

function main() {
  let server = new grpc.Server();

  server.bindAsync(
    "127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {

        if (error == null) {
            console.log(`Server running on port ${port}`)
            server.start();

            return;
        }

        console.log(error.message)
    }
    

  );
}

main();
