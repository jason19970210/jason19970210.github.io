---
title: "RIPv2 Introduction"
date: 2022-10-01
category: networking
slug: "ripv2-introduction"
tags: ["L3","networking","routing","routing protocol"]
---
Routing Information Protocol

| Version 1 | Version 2 | Next Generation |
| --- | --- | --- |
| [RFC 1058](https://www.rfc-editor.org/rfc/rfc1058) | [RFC 4822](https://www.rfc-editor.org/rfc/rfc2453) | [RFC 2080](https://www.rfc-editor.org/rfc/rfc2080) |

## RIPv2

-   Interior Gateway Protocol (IGP) subset
-   Protocol & Port: UDP, **`520`**
-   **Distance Vector** (Bellman-Ford) algorithm
-   Classless Routing Protocol, support `CIDR (Classless Inter-Domain Routing，無類域間路由)`
-   Metric: `Hop` count, max up to 15 of each single route, value `16` as unreachable / inifinite

### Packet Frame

### Timer / Intervals

All mentioned as default:

-   Update Timer: 30 secs
-   Invalid Timer: 180 secs
-   Hold-Down Timer: 180 secs
-   Flush Timer: 240 secs

![Figure 1 from "RIPv2 Introduction"](https://www.n-study.com/wp-content/uploads/2021/10/en-rip-timer01.png)

### Authentication

1.  Simple Password  
    With authentication key of up to 16 characters included in the packet, if password doesnt match, then discard the packet.  
    This method provides very little security level, which is posiible to learn the key through by sniffer RIP packets.
    
2.  MD5 algorithm  
    By using MD5 method to create a crypto checksum of a RIP packet and an authentication key with up to 16 characters.  
    The transmitted packet doesn’t contain the authentication key itself but a crypto checksum, called the *`digest`*
    

Ref: [https://sc1.checkpoint.com/documents/R81/WebAdminGuides/EN/CP\_R81\_Gaia\_Advanced\_Routing\_AdminGuide/Topics-GARG/RIP-v2.htm](https://sc1.checkpoint.com/documents/R81/WebAdminGuides/EN/CP_R81_Gaia_Advanced_Routing_AdminGuide/Topics-GARG/RIP-v2.htm)
