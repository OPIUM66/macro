const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { grpc: grpcConfig } = require('../config/config');

const PROTO_PATH = __dirname + '/greeter.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const greeterProto = grpc.loadPackageDefinition(packageDefinition).SampleGRPC;

// Create gRPC Client
const greeterClient = new greeterProto(grpcConfig.host, grpc.credentials.createInsecure());

module.exports = greeterClient;
