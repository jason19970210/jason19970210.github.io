---
title: "Python Execution Timer with Decorator"
date: 2022-10-19
category: programming
slug: "python-execution-timer-with-decorator"
tags: ["decorator","python","snippet"]
---
Ref: [https://www.geeksforgeeks.org/timing-functions-with-decorators-python/](https://www.geeksforgeeks.org/timing-functions-with-decorators-python/)

```python
from time import time
  
def timer(func):
    # This function shows the execution time of 
    # the function object passed
    def wrap_func(*args, **kwargs):
        t1 = time()
        result = func(*args, **kwargs)
        t2 = time()
        print(f'Function {func.__name__!r} executed in {(t2-t1):.4f}s')
        return result
    return wrap_func
  
  
@timer
def long_time(n):
    for i in range(n):
        for j in range(100000):
            i*j
  
long_time(5)
```

Photo by [Tsvetoslav Hristov](https://unsplash.com/@tsvetoslav) on [Unsplash](https://unsplash.com/s/photos/stopwatch)
