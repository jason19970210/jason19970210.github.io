---
title: "Sending RIPng Packets in Scapy"
date: 2022-10-19
category: programming
slug: "python-scapy-ripng"
tags: ["python","scapy","snippet"]
---
```python
# from scapy.all import Ether, IP, IPv6, UDP, RIP, RIPEntry, sniff, send
from scapy.fields import ByteEnumField, ByteField, ShortField
from scapy.contrib.ripng import RIPng, RIPngEntry
from scapy.layers.l2 import Ether
from scapy.layers.inet6 import IPv6, UDP

target = Ether()/IPv6()/UDP(dst='12:313::13')/RIPng()
target.display()
```

## Output

```
###[ Ethernet ]### 
  dst       = ff:ff:ff:ff:ff:ff
  src       = 00:00:00:00:00:00
  type      = IPv6
###[ IPv6 ]### 
     version   = 6
     tc        = 0
     fl        = 0
     plen      = None
     nh        = UDP
     hlim      = 64
     src       = ::1
     dst       = ::1
###[ UDP ]### 
        sport     = 521
        dport     = 521
        len       = None
        chksum    = None
###[ RIPng header ]### 
           cmd       = req
           ver       = 1
           null      = 0
```
