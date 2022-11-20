import { ClientRequest, RequestListener, ServerResponse } from "http"

import http from "http"

const requestListener: RequestListener<any> = function (
  req: ClientRequest,
  res: ServerResponse
) {
  res.writeHead(200)
  res.end("Hello, World!")
}

const server = http.createServer(requestListener)
server.listen(4000)
