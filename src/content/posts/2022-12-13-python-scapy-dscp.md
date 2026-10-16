---
title: "Sending TCP Packets with DSCP in Scapy"
date: 2022-12-13
category: programming
slug: "python-scapy-dscp"
tags: ["dscp","python","scapy","snippet"]
---
Type of Service (ToS) & Differentiated Services (Diffserv) Codepoint (DSCP)  
Check the table: [https://www.bytesolutions.com/dscp-tos-cos-presidence-conversion-chart/](https://www.bytesolutions.com/dscp-tos-cos-presidence-conversion-chart/)

```python
from scapy.sendrecv import sendp
from scapy.layers.l2 import Ether
from scapy.layers.inet import IP, TCP

SRC_IP = "192.168.0.1"
DST_IP = "192.168.0.2"
SRC_IFACE = ""
DST_IFACE = ""

while 1:
    sendp(Ether() / IP(src = SRC_IP, dst = DST_IP, tos = TOS_VALUE) / TCP(), iface = SRC_IFACE)
```
