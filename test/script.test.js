const queryPortByNumber = require('network-port-info');

test('Query for known port numbers', () => {
    expect(queryPortByNumber(80)).toEqual({
        tcp: {service: 'www-http', description: 'World Wide Web HTTP'},
        udp: {service: 'www-http', description: 'World Wide Web HTTP'},
    });

    expect(queryPortByNumber(443)).toEqual({
        tcp: {service: 'https', description: 'http protocol over TLS/SSL'},
        udp: {service: 'https', description: 'http protocol over TLS/SSL'},
    });

    expect(queryPortByNumber(22)).toEqual({
        tcp: {service: 'ssh', description: 'The Secure Shell (SSH) Protocol'},
        udp: {service: 'ssh', description: 'The Secure Shell (SSH) Protocol'},
    });

    expect(queryPortByNumber(53)).toEqual({
        tcp: {service: 'domain', description: 'Domain Name Server'},
        udp: {service: 'domain', description: 'Domain Name Server'},
    });
});

test('Query for unknown port numbers', () => {
    expect(queryPortByNumber(9999)).toEqual({
        tcp: {
            "description": "distinct",
            "service": "distinct",
        },
        udp: {
            "description": "distinct",
            "service": "distinct",
        },
    });

    expect(queryPortByNumber(0)).toEqual({
        tcp: {
            service: null,
            description: 'Reserved',
        },
        udp: {
            service: null,
            description: 'Reserved',
        }
    });

    expect(queryPortByNumber(65535)).toEqual({
        tcp: { service: "inspider", description: "InSpider System" },
        udp: {
            service: null,
            description: 'Reserved',
        }
    });

    expect(queryPortByNumber(49150)).toEqual({
        tcp: null,
        udp: null,
    });
});
