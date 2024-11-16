const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { grpc: grpcConfig } = require('../config/config');

const PROTO_PATH = __dirname + '/greeter.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const greeterProto = grpc.loadPackageDefinition(packageDefinition);

function sayHello(call, callback) {
  callback(null, { message: `Hello, ${call.request.name}!` });
}

function startGrpcServer() {
  const server = new grpc.Server();
  server.addService(greeterProto.SampleGRPC.service, { SayHello: sayHello });
  server.bindAsync(grpcConfig.host, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`gRPC server running at ${grpcConfig.host}`);
  });
}

module.exports = startGrpcServer;
