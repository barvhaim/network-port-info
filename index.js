const ports = require('./ports-list.json');

function queryPortByNumber(portNumber) {
  const tcpKey = `${portNumber}/tcp`;
  const udpKey = `${portNumber}/udp`;
  return {
    tcp: ports[tcpKey] || null,
    udp: ports[udpKey] || null,
  }
}

module.exports = queryPortByNumber;