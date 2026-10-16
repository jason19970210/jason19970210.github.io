---
title: "RIPng with Cisco & ISS"
date: 2022-10-20
category: networking
slug: "ripng-cisco-iss"
tags: ["L3","cisco","networking","routing","routing protocol"]
---
> IPv6 RIP functions the same and offers the same benefits as RIP in IPv4. RIP enhancements for IPv6, detailed in RFC 2080, include support for IPv6 addresses and prefixes, and the use of the all-RIP-devices multicast group address FF02::9 as the destination address for RIP update messages.  
> – Cisco

## cisco command

### enable

```
# configure terminal

(config)# ipv6 unicast-routing

(config)# interface <interface_type> <interface_number>

(config-if)# ipv6 rip <name> enable
```

where the <name> is the `process name` for IPv6 RIP

### customizing IPv6 RIP (optional)

```
# configure terminal

#### optional-1
(config)# interface __type__ __number__
(config-if)# ipv6 rip __name__  default-information {only | originate}

#### optional-2
(config)# ipv6 router rip __name__
(config-router)# maximum-paths __number-paths__
```

ref: [https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/iproute\_rip/configuration/xe-3s/asr1000/ip6-rip-xe.html](https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/iproute_rip/configuration/xe-3s/asr1000/ip6-rip-xe.html)

## ISS command

| Command | Check |
| --- | --- |
| ipv6 router rip |  |
|  |  |
