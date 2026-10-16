---
title: "A Step by Step How to Start Docker-compose Container at Boot"
date: 2022-05-13
category: infra
slug: "a-step-by-step-how-to-start-docker-compose-container-at-boot"
tags: ["docker","docker-compose","linux"]
---
Post in Medium: [https://jason19970210.medium.com/a-step-by-step-how-to-start-docker-compose-container-at-boot-effe9964e57f](https://jason19970210.medium.com/a-step-by-step-how-to-start-docker-compose-container-at-boot-effe9964e57f)  
Once create a docker container, we might hope the container can start automatically by itself, at the boot and even reboot.

Here we will go through with `docker-compose` yaml config file, ex. `docker-compose.yml` .  
As the basic yaml file:

```yaml
version: "3"
service:
    restart: always # the most important line for this post
    image: xxxx #docker image
    environment:
        - key : value ...
    ports:
        - 8080:80
```

Let’s take a look at docker restart policy with 4 types :  
Ref : [https://docs.docker.com/config/containers/start-containers-automatically/#use-a-restart-policy](https://docs.docker.com/config/containers/start-containers-automatically/#use-a-restart-policy)

`no` : Do not automatically restart the container. (the **default**)

`on-failure[:max-retries]` : Restart the container if it exits due to an error, which manifests as a non-zero exit code. Optionally, limit the number of times the Docker daemon attempts to restart the container using the :max-retries option.

`always` : Always restart the container if it stops. If it is manually stopped, it is restarted only when Docker daemon restarts or the container itself is manually restarted. (See the second bullet listed in restart policy details)

`unless-stopped` : Similar to always, except that when the container is stopped (manually or otherwise), it is not restarted even after Docker daemon restarts.

With the basic docker command start a container:  
`$ docker run -d --restart <restart_policy> <docker_image>`

Please make sure the docker daemon has been enable to launch at boot:

```shell
$ sudo systemctl start docker
$ sudo systemctl enable docker
$ sudo systemctl is-enabled docker 

## the output should be enabled
```

Check the docker container restart policy  
`$ docker inspect <container_id> | fgrep -i restart -A 5`

if nothing is set to restart:

```yaml
"AppArmorProfile": "docker-default",
"RestartPolicy": {
    "Name": "",
    "MaximumRetryCount":0
},
...
```

Once we set the `restart` parameter:

```yaml
"AppArmorProfile": "docker-default",
"RestartPolicy": {
    "Name": "always",
    "MaximumRetryCount":0
},
...
```

Now the container can restart by itself after the pc/server reboot.  
Hope this can help you and save a day off !!

Ref: [https://stackoverflow.com/a/70991572](https://stackoverflow.com/a/70991572)

Cover photo by [Onur Binay](https://unsplash.com/@onurbinay) on [Unsplash](https://unsplash.com/)
