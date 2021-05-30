/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`src/tests/index.spec.ts TAP should add host header > must match snapshot 1`] = `
{"level":30,"time":1480572000000,"awsRequestId":"431234","host":"www.host.com","x-correlation-trace-id":"undefined","x-correlation-id":"431234","msg":"Message with host header"}
`

exports[`src/tests/index.spec.ts TAP should add tags with a child logger > must match snapshot 1`] = `
{"level":30,"time":1480572000000,"userId":12,"awsRequestId":"9048989","x-correlation-id":"9048989","msg":"Message with userId"}
`

exports[`src/tests/index.spec.ts TAP should capture xray trace IDs > must match snapshot 1`] = `
{"level":30,"time":1480572000000,"awsRequestId":"431234","x-correlation-trace-id":"x-1-2e2323r1234r4","x-correlation-id":"431234","msg":"Message with trace ID"}
`

exports[`src/tests/index.spec.ts TAP should log a simple info message > must match snapshot 1`] = `
{"level":30,"time":1480572000000,"msg":"Simple message"}
`

exports[`src/tests/index.spec.ts TAP should log an error message with apiRequestId > must match snapshot 1`] = `
{"level":50,"time":1480572000000,"awsRequestId":"12345","apiRequestId":"59996","x-correlation-id":"12345","msg":"Message with apiRequestId"}
`

exports[`src/tests/index.spec.ts TAP should log an error message with requestId > must match snapshot 1`] = `
{"level":50,"time":1480572000000,"awsRequestId":"12345","x-correlation-id":"12345","msg":"Message with request ID"}
`

exports[`src/tests/index.spec.ts TAP should log an info message with data > must match snapshot 1`] = `
{"level":30,"time":1480572000000,"data":{"stuff":"unicorns"},"msg":"Message with data"}
`

exports[`src/tests/index.spec.ts TAP should log an info message with requestId > must match snapshot 1`] = `
{"level":30,"time":1480572000000,"awsRequestId":"12345","x-correlation-id":"12345","msg":"Message with request ID"}
`

exports[`src/tests/index.spec.ts TAP should log correlation headers > must match snapshot 1`] = `
{"level":50,"time":1480572000000,"awsRequestId":"98875","x-correlation-data":"abbb","x-correlation-service":"tyue","x-correlation-id":"98875","msg":"Message with correlation ids"}
`

exports[`src/tests/index.spec.ts TAP should log debug and info message > must match snapshot 1`] = `
{"level":30,"time":1480572000000,"awsRequestId":"431234","x-correlation-debug":"true","x-correlation-trace-id":"undefined","x-correlation-id":"431234","msg":"logging a info message"}
`

exports[`src/tests/index.spec.ts TAP should only log info message > must match snapshot 1`] = `
{"level":30,"time":1480572000000,"awsRequestId":"431234","x-correlation-trace-id":"undefined","x-correlation-id":"431234","msg":"logging an info message"}
`

exports[`src/tests/index.spec.ts TAP should preserve mixins > must match snapshot 1`] = `
{"level":30,"time":1480572000000,"line":2,"awsRequestId":"431234","x-correlation-id":"431234","msg":"Message with mixin line 2"}
`

exports[`src/tests/index.spec.ts TAP should work even if host header missing > must match snapshot 1`] = `
{"level":30,"time":1480572000000,"awsRequestId":"431234","x-correlation-trace-id":"undefined","x-correlation-id":"431234","msg":"Message without host header"}
`
