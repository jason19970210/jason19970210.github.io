---
title: "Thread with Serial & Restful in Python"
date: 2022-12-13
category: programming
slug: "python-thread-serial-restful"
tags: ["python","restful","snippet","thread"]
---
```python
from serial import Serial
from threading import Thread
import requests
import time

port = '/dev/ttyUSB1'
baud = 115200

serial_obj = Serial(port, baud, timeout=120)

token = ""
headers = {"Authorization": f"Bearer {token}"}

def handle_data(data):
    if len(data):
        print(data)

def read_from_port(ser: Serial):
    connected = False
    while not connected:
        connected = True

        while True:
           reading = ser.readline().decode(errors='replace')
           handle_data(reading)

def req():
    
    for _ in range(10):
        r = requests.patch('http://<ip>/...', headers=headers, json=[{}])
        print(r.status_code)
        print(r.json())

        time.sleep(1.5)

t1 = Thread(target=read_from_port, args=(serial_obj,))
t2 = Thread(target=req)
t1.start()
t2.start()
```

ref: [https://gist.github.com/a-andreyev/1455f8cc024780188a6687b8399f7015](https://gist.github.com/a-andreyev/1455f8cc024780188a6687b8399f7015)

## Output
