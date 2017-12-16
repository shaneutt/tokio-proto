var searchIndex = {};
searchIndex["tokio_proto"] = {"doc":"This library provides a toolkit for rapid protocol development and usage, working with the rest of the Tokio stack.","items":[[3,"TcpClient","tokio_proto","Builds client connections to external services.",null,null],[3,"Connect","","A future for establishing a client connection.",null,null],[3,"TcpServer","","A builder for TCP servers.",null,null],[0,"pipeline","","Pipelined RPC protocols.",null,null],[3,"ClientService","tokio_proto::pipeline","Client `Service` for simple pipeline protocols",null,null],[3,"ClientFuture","","Future returned by a call to [`ClientService`].",null,null],[3,"Pipeline","","A marker used to flag protocols as being pipelined RPC.",null,null],[8,"ClientProto","","A pipelined client protocol.",null,null],[16,"Request","","Request messages.",0,null],[16,"Response","","Response messages.",0,null],[16,"Transport","","The message transport, which works with I/O objects of type `T`.",0,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",0,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any configuration.",0,null],[8,"ServerProto","","A pipelined server protocol.",null,null],[16,"Request","","Request messages.",1,null],[16,"Response","","Response messages.",1,null],[16,"Transport","","The message transport, which works with I/O objects of type `T`.",1,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",1,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any configuration.",1,null],[0,"multiplex","tokio_proto","Multiplexed RPC protocols.",null,null],[3,"ClientService","tokio_proto::multiplex","Client `Service` for simple multiplex protocols",null,null],[3,"ClientFuture","","Future returned by a call to [`ClientService`].",null,null],[3,"Multiplex","","A marker used to flag protocols as being multiplexed RPC.",null,null],[6,"RequestId","","Identifies a request / response thread",null,null],[8,"ClientProto","","An multiplexed client protocol.",null,null],[16,"Request","","Request messages.",2,null],[16,"Response","","Response messages.",2,null],[16,"Transport","","The message transport, which usually take `T` as a parameter.",2,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",2,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any configuration.",2,null],[8,"ServerProto","","An multiplexed server protocol.",null,null],[16,"Request","","Request messages.",3,null],[16,"Response","","Response messages.",3,null],[16,"Transport","","The message transport, which usually take `T` as a parameter.",3,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",3,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any configuration.",3,null],[0,"streaming","tokio_proto","Streaming protocols.",null,null],[3,"Body","tokio_proto::streaming","Body stream",null,null],[4,"Message","","Message sent and received from a multiplexed service",null,null],[13,"WithoutBody","","Has no associated streaming body",4,null],[13,"WithBody","","Has associated streaming body",4,null],[0,"pipeline","","Pipelined, streaming protocols.",null,null],[3,"StreamingPipeline","tokio_proto::streaming::pipeline","A marker used to flag protocols as being streaming and pipelined.",null,null],[4,"Frame","","A pipelined protocol frame",null,null],[13,"Message","","Either a request or a response",5,null],[12,"message","tokio_proto::streaming::pipeline::Frame","The message value",5,null],[12,"body","","Set to true when body frames will follow",5,null],[13,"Body","tokio_proto::streaming::pipeline","Body frame. None indicates that the body is done streaming.",5,null],[12,"chunk","tokio_proto::streaming::pipeline::Frame","Body chunk. Setting to `None` indicates that the body is done streaming and there will be no further body frames sent",5,null],[13,"Error","tokio_proto::streaming::pipeline","Error",5,null],[12,"error","tokio_proto::streaming::pipeline::Frame","Error value",5,null],[11,"fmt","tokio_proto::streaming::pipeline","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"frame"}}],[11,"unwrap_msg","","Unwraps a frame, yielding the content of the `Message`.",5,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"unwrap_body","","Unwraps a frame, yielding the content of the `Body`.",5,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"unwrap_err","","Unwraps a frame, yielding the content of the `Error`.",5,{"inputs":[{"name":"self"}],"output":{"name":"e"}}],[0,"advanced","","Provides the substrate for implementing pipelined, streaming protocols.",null,null],[3,"Pipeline","tokio_proto::streaming::pipeline::advanced","Provides protocol pipelining functionality in a generic way over clients and servers. Used internally by `pipeline::Client` and `pipeline::Server`.",null,null],[6,"PipelineMessage","","Message used to communicate through the multiplex dispatch",null,null],[8,"Dispatch","","Dispatch messages from the transport to the service",null,null],[16,"Io","","Type of underlying I/O object",6,null],[16,"In","","Message written to transport",6,null],[16,"BodyIn","","Body written to transport",6,null],[16,"Out","","Messages read from the transport",6,null],[16,"BodyOut","","Outbound body frame",6,null],[16,"Error","","Transport error",6,null],[16,"Stream","","Body stream written to transport",6,null],[16,"Transport","","Transport type",6,null],[10,"transport","","Mutable reference to the transport",6,null],[10,"dispatch","","Process an out message",6,{"inputs":[{"name":"self"},{"name":"pipelinemessage"}],"output":{"name":"result"}}],[10,"poll","","Poll the next completed message",6,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[10,"has_in_flight","","RPC currently in flight TODO: Get rid of",6,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"new","","Create a new pipeline `Pipeline` dispatcher with the given service and transport",7,{"inputs":[{"name":"t"}],"output":{"name":"pipeline"}}],[11,"poll","","",7,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[8,"ClientProto","tokio_proto::streaming::pipeline","A streaming, pipelined client protocol.",null,null],[16,"Request","","The type of request headers.",8,null],[16,"RequestBody","","The type of request body chunks.",8,null],[16,"Response","","The type of response headers.",8,null],[16,"ResponseBody","","The type of response body chunks.",8,null],[16,"Error","","The type of error frames.",8,null],[16,"Transport","","The frame transport, which usually take `T` as a parameter.",8,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",8,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any configuration.",8,null],[8,"ServerProto","","A streaming, pipelined server protocol.",null,null],[16,"Request","","Request headers.",9,null],[16,"RequestBody","","Request body chunks.",9,null],[16,"Response","","Response headers.",9,null],[16,"ResponseBody","","Response body chunks.",9,null],[16,"Error","","Errors, which are used both for error frames and for the service itself.",9,null],[16,"Transport","","The frame transport, which usually take `T` as a parameter.",9,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",9,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any configuration.",9,null],[8,"Transport","","Additional transport details relevant to streaming, pipelined protocols.",null,null],[11,"tick","","Allow the transport to do miscellaneous work (e.g., sending ping-pong messages) that is not directly connected to sending or receiving frames.",10,{"inputs":[{"name":"self"}],"output":null}],[11,"cancel","","Cancel interest in the current stream",10,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"multiplex","tokio_proto::streaming","Pipelined, multiplexed protocols.",null,null],[3,"StreamingMultiplex","tokio_proto::streaming::multiplex","A marker used to flag protocols as being streaming and multiplexed.",null,null],[4,"Frame","","A multiplexed protocol frame",null,null],[13,"Message","","Either a request or a response.",12,null],[12,"id","tokio_proto::streaming::multiplex::Frame","Message exchange identifier",12,null],[12,"message","","The message value",12,null],[12,"body","","Set to true when body frames will follow with the same request ID.",12,null],[12,"solo","","Set to `true` when this message does not have a pair in the other direction",12,null],[13,"Body","tokio_proto::streaming::multiplex","Body frame.",12,null],[12,"id","tokio_proto::streaming::multiplex::Frame","Message exchange identifier",12,null],[12,"chunk","","Body chunk. Setting to `None` indicates that the body is done streaming and there will be no further body frames sent with the given request ID.",12,null],[13,"Error","tokio_proto::streaming::multiplex","Error",12,null],[12,"id","tokio_proto::streaming::multiplex::Frame","Message exchange identifier",12,null],[12,"error","","Error value",12,null],[11,"fmt","tokio_proto::streaming::multiplex","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",12,{"inputs":[{"name":"self"}],"output":{"name":"frame"}}],[11,"request_id","","Return the request ID associated with the frame.",12,{"inputs":[{"name":"self"}],"output":{"name":"requestid"}}],[11,"unwrap_msg","","Unwraps a frame, yielding the content of the `Message`.",12,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"unwrap_body","","Unwraps a frame, yielding the content of the `Body`.",12,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"unwrap_err","","Unwraps a frame, yielding the content of the `Error`.",12,{"inputs":[{"name":"self"}],"output":{"name":"e"}}],[0,"advanced","","Provides the substrate for implementing multiplexed, streaming protocols.",null,null],[3,"Multiplex","tokio_proto::streaming::multiplex::advanced","Task that drives multiplexed protocols",null,null],[3,"MultiplexMessage","","Message used to communicate through the multiplex dispatch",null,null],[12,"id","","Request ID",13,null],[12,"message","","Message",13,null],[12,"solo","","True if message has no pair (request / response)",13,null],[8,"Dispatch","","Dispatch messages from the transport to the service",null,null],[16,"Io","","Type of underlying I/O object",14,null],[16,"In","","Messages written to the transport",14,null],[16,"BodyIn","","Inbound body frame",14,null],[16,"Out","","Messages read from the transport",14,null],[16,"BodyOut","","Outbound body frame",14,null],[16,"Error","","Transport error",14,null],[16,"Stream","","Inbound body stream type",14,null],[16,"Transport","","Transport type",14,null],[10,"transport","","Mutable reference to the transport",14,null],[10,"poll","","Poll the next available message",14,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[10,"poll_ready","","The `Dispatch` is ready to accept another message",14,{"inputs":[{"name":"self"}],"output":{"name":"async"}}],[10,"dispatch","","Process an out message",14,{"inputs":[{"name":"self"},{"name":"multiplexmessage"}],"output":{"name":"result"}}],[10,"cancel","","Cancel interest in the exchange identified by RequestId",14,{"inputs":[{"name":"self"},{"name":"requestid"}],"output":{"name":"result"}}],[11,"fmt","","",15,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",13,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new pipeline `Multiplex` dispatcher with the given service and transport",15,{"inputs":[{"name":"t"}],"output":{"name":"multiplex"}}],[11,"poll","","",15,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"drop","","",15,{"inputs":[{"name":"self"}],"output":null}],[11,"new","","Create a new MultiplexMessage",13,{"inputs":[{"name":"requestid"},{"name":"message"}],"output":{"name":"multiplexmessage"}}],[11,"error","","Create a new errored MultiplexMessage",13,{"inputs":[{"name":"requestid"},{"name":"e"}],"output":{"name":"multiplexmessage"}}],[6,"RequestId","tokio_proto::streaming::multiplex","Identifies a request / response thread",null,null],[8,"ClientProto","","A streaming, multiplexed client protocol.",null,null],[16,"Request","","Request headers.",16,null],[16,"RequestBody","","Request body chunks.",16,null],[16,"Response","","Response headers.",16,null],[16,"ResponseBody","","Response body chunks.",16,null],[16,"Error","","Errors, which are used both for error frames and for the service itself.",16,null],[16,"Transport","","The frame transport, which usually take `T` as a parameter.",16,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",16,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any configuration.",16,null],[8,"ServerProto","","A streaming, multiplexed server protocol.",null,null],[16,"Request","","Request headers.",17,null],[16,"RequestBody","","Request body chunks.",17,null],[16,"Response","","Response headers.",17,null],[16,"ResponseBody","","Response body chunks.",17,null],[16,"Error","","Errors, which are used both for error frames and for the service itself.",17,null],[16,"Transport","","The frame transport, which usually take `T` as a parameter.",17,null],[16,"BindTransport","","A future for initializing a transport from an I/O object.",17,null],[10,"bind_transport","","Build a transport from the given I/O object, using `self` for any configuration.",17,null],[8,"Transport","","Additional transport details relevant to streaming, multiplexed protocols.",null,null],[11,"tick","","Allow the transport to do miscellaneous work (e.g., sending ping-pong messages) that is not directly connected to sending or receiving frames.",18,{"inputs":[{"name":"self"}],"output":null}],[11,"cancel","","Cancel interest in the exchange identified by RequestId",18,{"inputs":[{"name":"self"},{"name":"requestid"}],"output":{"name":"result"}}],[11,"poll_write_body","","Tests to see if this I/O object may accept a body frame for the given request ID",18,{"inputs":[{"name":"self"},{"name":"requestid"}],"output":{"name":"async"}}],[11,"dispatching_body","","Invoked before the multiplexer dispatches the body chunk to the body stream.",18,{"inputs":[{"name":"self"},{"name":"requestid"},{"name":"readbody"}],"output":null}],[11,"fmt","","",19,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"empty","tokio_proto::streaming","Return an empty body stream",20,{"inputs":[],"output":{"name":"body"}}],[11,"pair","","Return a body stream with an associated sender half",20,null],[11,"poll","","",20,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"from","","",20,{"inputs":[{"name":"receiver"}],"output":{"name":"body"}}],[11,"from","","",20,{"inputs":[{"name":"t"}],"output":{"name":"body"}}],[11,"fmt","","",20,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"get_ref","","Returns a reference to the inner value",4,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"get_mut","","Returns a mutable reference to the inner value",4,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"into_inner","","Consumes the value and returns the inner value",4,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"take_body","","If the `Message` value has an associated body stream, return it. The original `Message` value will then become a `WithoutBody` variant.",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"eq","","",4,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"bool"}}],[11,"deref","","",4,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"deref_mut","","",4,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"util","tokio_proto","Utilities for building protocols",null,null],[0,"client_proxy","tokio_proto::util","Utilities for building protocol clients",null,null],[3,"ClientProxy","tokio_proto::util::client_proxy","Client `Service` for pipeline or multiplex protocols",null,null],[3,"Response","","Response future returned from a client",null,null],[5,"pair","","Return a client handle and a handle used to receive requests on",null,{"inputs":[],"output":{"name":"pair"}}],[6,"Pair","","A client / receiver pair",null,null],[6,"Receiver","","Receive requests submitted to the client",null,null],[11,"clone","","",21,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"call","","",21,null],[11,"fmt","","",21,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",22,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",22,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","tokio_proto","",23,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",24,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"new","","Create a builder for the given client protocol.",23,{"inputs":[{"name":"p"}],"output":{"name":"tcpclient"}}],[11,"connect","","Establish a connection to the given address.",23,{"inputs":[{"name":"self"},{"name":"socketaddr"},{"name":"handle"}],"output":{"name":"connect"}}],[11,"fmt","","",24,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",25,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Starts building a server for the given protocol and address, with default configuration.",25,{"inputs":[{"name":"p"},{"name":"socketaddr"}],"output":{"name":"tcpserver"}}],[11,"addr","","Set the address for the server.",25,{"inputs":[{"name":"self"},{"name":"socketaddr"}],"output":null}],[11,"threads","","Set the number of threads running simultaneous event loops (Unix only).",25,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"serve","","Start up the server, providing the given service on it.",25,{"inputs":[{"name":"self"},{"name":"s"}],"output":null}],[11,"with_handle","","Start up the server, providing the given service on it, and providing access to the event loop handle.",25,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[8,"BindServer","","Binds a service to an I/O object.",null,null],[16,"ServiceRequest","","The request type for the service.",26,null],[16,"ServiceResponse","","The response type for the service.",26,null],[16,"ServiceError","","The error type for the service.",26,null],[10,"bind_server","","Bind the service.",26,{"inputs":[{"name":"self"},{"name":"e"},{"name":"t"},{"name":"s"}],"output":null}],[8,"BindClient","","Binds an I/O object as a client of a service.",null,null],[16,"ServiceRequest","","The request type for the service.",27,null],[16,"ServiceResponse","","The response type for the service.",27,null],[16,"ServiceError","","The error type for the service.",27,null],[16,"BindClient","","The bound service.",27,null],[10,"bind_client","","Bind an I/O object as a service.",27,null],[11,"clone","tokio_proto::pipeline","",28,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"call","","",28,null],[11,"fmt","","",28,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",29,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",29,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",30,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"call","tokio_proto::multiplex","",31,null],[11,"clone","","",31,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"fmt","","",31,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",32,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",32,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",33,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[8,"ClientProto"],[8,"ServerProto"],[8,"ClientProto"],[8,"ServerProto"],[4,"Message"],[4,"Frame"],[8,"Dispatch"],[3,"Pipeline"],[8,"ClientProto"],[8,"ServerProto"],[8,"Transport"],[3,"StreamingPipeline"],[4,"Frame"],[3,"MultiplexMessage"],[8,"Dispatch"],[3,"Multiplex"],[8,"ClientProto"],[8,"ServerProto"],[8,"Transport"],[3,"StreamingMultiplex"],[3,"Body"],[3,"ClientProxy"],[3,"Response"],[3,"TcpClient"],[3,"Connect"],[3,"TcpServer"],[8,"BindServer"],[8,"BindClient"],[3,"ClientService"],[3,"ClientFuture"],[3,"Pipeline"],[3,"ClientService"],[3,"ClientFuture"],[3,"Multiplex"]]};
initSearch(searchIndex);
