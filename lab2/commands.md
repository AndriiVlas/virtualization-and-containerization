# Лабораторна робота № 2 (варіант 4)

| ОС (оболонка) | Вебсервер | СКБД (змінна середовища) |
| --- | ------- | ----- |
| almalinux:9 (bash)  | httpd:2.4  | mariadb:11.8 (MARIADB_ROOT_PASSWORD) |

## 1. Підготовка середовища
```bash
docker --version
docker info
```
Вивід:
```text
Docker version 29.8.1, build 4a63305
Client:
 Version:    29.8.1
 Context:    desktop-linux
 Debug Mode: false
 Plugins:
  agent: Docker AI Agent Runner (Docker Inc.)
    Version:  v1.141.0
    Path:     C:\Users\andri\.docker\cli-plugins\docker-agent.exe
  ai: Docker AI Agent - Ask Gordon (Docker Inc.)
    Version:  v1.31.0
    Path:     C:\Users\andri\.docker\cli-plugins\docker-ai.exe
  buildx: Docker Buildx (Docker Inc.)
    Version:  v0.37.1
    Path:     C:\Users\andri\.docker\cli-plugins\docker-buildx.exe
  compose: Docker Compose (Docker Inc.)
    Version:  v5.5.1
    Path:     C:\Users\andri\.docker\cli-plugins\docker-compose.exe
  debug: Get a shell into any image or container (Docker Inc.)
    Version:  0.0.47
    Path:     C:\Users\andri\.docker\cli-plugins\docker-debug.exe
  desktop: Docker Desktop commands (Docker Inc.)
    Version:  v0.4.4
    Path:     C:\Users\andri\.docker\cli-plugins\docker-desktop.exe
  dhi: CLI for managing Docker Hardened Images (Docker Inc.)
    Version:  v0.0.7
    Path:     C:\Users\andri\.docker\cli-plugins\docker-dhi.exe
  extension: Manages Docker extensions (Docker Inc.)
    Version:  v0.2.31
    Path:     C:\Users\andri\.docker\cli-plugins\docker-extension.exe
  init: Creates Docker-related starter files for your project (Docker Inc.)
    Version:  v1.4.0
    Path:     C:\Users\andri\.docker\cli-plugins\docker-init.exe
  mcp: Docker MCP Plugin (Docker Inc.)
    Version:  v0.43.3
    Path:     C:\Users\andri\.docker\cli-plugins\docker-mcp.exe
  model: Docker Model Runner (Docker Inc.)
    Version:  v1.2.6
    Path:     C:\Users\andri\.docker\cli-plugins\docker-model.exe
  offload: Docker Offload (Docker Inc.)
    Version:  v0.6.33
    Path:     C:\Users\andri\.docker\cli-plugins\docker-offload.exe
  pass: Docker Pass Secrets Manager Plugin (beta) (Docker Inc.)
    Version:  v0.2.2
    Path:     C:\Users\andri\.docker\cli-plugins\docker-pass.exe
  sandbox: "docker sandbox" is deprecated, use Docker Sandboxes instead (Docker Inc.)
    Version:  v0.13.0
    Path:     C:\Users\andri\.docker\cli-plugins\docker-sandbox.exe
  scout: Docker Scout (Docker Inc.)
    Version:  v1.24.0
    Path:     C:\Users\andri\.docker\cli-plugins\docker-scout.exe

Server:
 Containers: 0
  Running: 0
  Paused: 0
  Stopped: 0
 Images: 0
 Server Version: 29.8.1
 Storage Driver: overlayfs
  driver-type: io.containerd.snapshotter.v1
 Logging Driver: json-file
 Cgroup Driver: cgroupfs
 Cgroup Version: 2
 Plugins:
  Volume: local
  Network: bridge host ipvlan macvlan null overlay
  Log: awslogs fluentd gcplogs gelf journald json-file local splunk syslog
 CDI spec directories:
  /etc/cdi
  /var/run/cdi
 Discovered Devices:
  cdi: docker.com/gpu=webgpu
 Swarm: inactive
 Runtimes: nvidia runc io.containerd.runc.v2
 Default Runtime: runc
 Init Binary: docker-init
 containerd version: 1294c24a7da8e5a793ed378161673abe94118892
 runc version: v1.5.1-0-g8f2685a4
 init version: de40ad0
 Security Options:
  seccomp
   Profile: builtin
  cgroupns
 Kernel Version: 6.18.33.2-microsoft-standard-WSL2
 Operating System: Docker Desktop
 OSType: linux
 Architecture: x86_64
 CPUs: 12
 Total Memory: 7.639GiB
 Name: docker-desktop
 ID: a81e818c-1b52-42ca-88ee-e808ac82def8
 Docker Root Dir: /var/lib/docker
 Debug Mode: false
 HTTP Proxy: http.docker.internal:3128
 HTTPS Proxy: http.docker.internal:3128
 No Proxy: hubproxy.docker.internal
 Labels:
  com.docker.desktop.address=npipe://\\.\pipe\docker_cli
 Experimental: false
 Insecure Registries:
  hubproxy.docker.internal:5555
  ::1/128
  127.0.0.0/8
 Live Restore Enabled: false
 Firewall Backend: iptables
```

## 2. Запуск вебсервера
```bash
docker run -d -p 8080:80 --name andrii-webserver httpd:2.4
docker ps
curl -i http://localhost:8080
```
Вивід:
```text
Unable to find image 'httpd:2.4' locally
2.4: Pulling from library/httpd
7a3bdd751d95: Pull complete
6db0cf540580: Pull complete
4f4fb700ef54: Pull complete
1320c4426edf: Pull complete
6b37362b3da7: Pull complete
2f4636dca226: Pull complete
fdff2e4882b0: Download complete
0b4153e35dab: Download complete
Digest: sha256:03f858efb82c25cb0f9962946615cdcdaf26927cb971722149b563197cfd0fdd
Status: Downloaded newer image for httpd:2.4
3f96f155dbcfa56b46e86b2153051e69d321f1e7bd31dc404e07632f7cbe57a8

CONTAINER ID   IMAGE       COMMAND              CREATED         STATUS         PORTS                                     NAMES
3f96f155dbcf   httpd:2.4   "httpd-foreground"   9 seconds ago   Up 9 seconds   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   andrii-webserver

HTTP/1.1 200 OK
Date: Wed, 30 Sep 2026 22:15:18 GMT
Server: Apache/2.4.68 (Unix)
Last-Modified: Fri, 07 Nov 2025 08:23:08 GMT
ETag: "bf-642fce432f300"
Accept-Ranges: bytes
Content-Length: 191
Content-Type: text/html

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<title>It works! Apache httpd</title>
</head>
<body>
<p>It works!</p>
</body>
</html>
```

## 3. Запуск СКБД
```bash
run -d --name andrii-database -e MARIADB_ROOT_PASSWORD=lab2pass mariadb:11.8
docker ps
docker logs andrii-database
```
Вивід:
```text
Unable to find image 'mariadb:11.8' locally
11.8: Pulling from library/mariadb
ee60c3800df7: Pull complete
187fe76a8122: Pull complete
6281c2a67899: Pull complete
e52011c90f60: Pull complete
06237a023be8: Pull complete
d7d99ef55dfc: Pull complete
edd1ed89f0d4: Pull complete
e1b0125bd61e: Pull complete
ee1bba73ba41: Download complete
ea6dd5c0c95f: Download complete
Digest: sha256:79d59758afc91b89b120b0a8904d637f5a3b3e1c4900f29b740d6d46c72fef68
Status: Downloaded newer image for mariadb:11.8
58ba38589bf5d6dfd80d7571c19b0e7a4efa4cd71dfdd1670ca5d9bb6138d412

CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                                     NAMES
58ba38589bf5   mariadb:11.8   "docker-entrypoint.s…"   6 seconds ago   Up 6 seconds   3306/tcp                                  andrii-database
3f96f155dbcf   httpd:2.4      "httpd-foreground"       5 minutes ago   Up 5 minutes   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   andrii-webserver

2026-09-30 22:20:09+00:00 [Note] [Entrypoint]: Entrypoint script for MariaDB Server 1:11.8.9+maria~ubu2404 started.
2026-09-30 22:20:09+00:00 [Warn] [Entrypoint]: /sys/fs/cgroup///memory.pressure not writable, functionality unavailable to MariaDB
2026-09-30 22:20:09+00:00 [Note] [Entrypoint]: Switching to dedicated user 'mysql'
2026-09-30 22:20:09+00:00 [Note] [Entrypoint]: Entrypoint script for MariaDB Server 1:11.8.9+maria~ubu2404 started.
2026-09-30 22:20:09+00:00 [Note] [Entrypoint]: Initializing database files
2026-09-30 22:20:09 0 [Warning] mariadbd: io_uring_queue_init() failed with EPERM: sysctl kernel.io_uring_disabled has the value 2, or 1 and the user of the process is not a member of sysctl kernel.io_uring_group. (see man 2 io_uring_setup).
create_uring failed: falling back to libaio
2026-09-30 22:20:11+00:00 [Note] [Entrypoint]: Database files initialized
2026-09-30 22:20:11+00:00 [Note] [Entrypoint]: Starting temporary server
2026-09-30 22:20:11+00:00 [Note] [Entrypoint]: Waiting for server startup
2026-09-30 22:20:11 0 [Note] Starting MariaDB 11.8.9-MariaDB-ubu2404 source revision bf9193a939f515e95dd8def1a5468088c91cede6 server_uid 4hyyIvXKtc+7t7ixZ6dzGNHwiyA= as process 93
2026-09-30 22:20:11 0 [Note] InnoDB: Compressed tables use zlib 1.3
2026-09-30 22:20:11 0 [Note] InnoDB: Number of transaction pools: 1
2026-09-30 22:20:11 0 [Note] InnoDB: Using AVX512 instructions
2026-09-30 22:20:11 0 [Warning] mariadbd: io_uring_queue_init() failed with EPERM: sysctl kernel.io_uring_disabled has the value 2, or 1 and the user of the process is not a member of sysctl kernel.io_uring_group. (see man 2 io_uring_setup).
create_uring failed: falling back to libaio
2026-09-30 22:20:11 0 [Note] InnoDB: Using Linux native AIO
2026-09-30 22:20:11 0 [Note] InnoDB: innodb_buffer_pool_size_max=8388608m, innodb_buffer_pool_size=128m
2026-09-30 22:20:11 0 [Note] InnoDB: Completed initialization of buffer pool
2026-09-30 22:20:11 0 [Note] InnoDB: File system buffers for log disabled (block size=4096 bytes)
2026-09-30 22:20:11 0 [Note] InnoDB: End of log at LSN=45568
2026-09-30 22:20:11 0 [Note] InnoDB: Opened 3 undo tablespaces
2026-09-30 22:20:11 0 [Note] InnoDB: 128 rollback segments in 3 undo tablespaces are active.
2026-09-30 22:20:11 0 [Note] InnoDB: Setting file './ibtmp1' size to 12.000MiB. Physically writing the file full; Please wait ...
2026-09-30 22:20:11 0 [Note] InnoDB: File './ibtmp1' size is now 12.000MiB.
2026-09-30 22:20:11 0 [Note] InnoDB: log sequence number 45568; transaction id 14
2026-09-30 22:20:11 0 [Note] Plugin 'FEEDBACK' is disabled.
2026-09-30 22:20:11 0 [Note] Plugin 'wsrep-provider' is disabled.
2026-09-30 22:20:12 0 [Note] mariadbd: Event Scheduler: Loaded 0 events
2026-09-30 22:20:12 0 [Note] mariadbd: ready for connections.
Version: '11.8.9-MariaDB-ubu2404'  socket: '/run/mysqld/mysqld.sock'  port: 0  mariadb.org binary distribution
2026-09-30 22:20:12+00:00 [Note] [Entrypoint]: Temporary server started.
2026-09-30 22:20:12+00:00 [Note] [Entrypoint]: Securing system users (equivalent to running mysql_secure_installation)

2026-09-30 22:20:12+00:00 [Note] [Entrypoint]: Stopping temporary server
2026-09-30 22:20:12 0 [Note] mariadbd (initiated by: unknown): Normal shutdown
2026-09-30 22:20:12 0 [Note] InnoDB: FTS optimize thread exiting.
2026-09-30 22:20:12 0 [Note] InnoDB: Starting shutdown...
2026-09-30 22:20:12 0 [Note] InnoDB: Dumping buffer pool(s) to /var/lib/mysql/ib_buffer_pool
2026-09-30 22:20:12 0 [Note] InnoDB: Buffer pool(s) dump completed at 260930 22:20:12
2026-09-30 22:20:13 0 [Note] InnoDB: Removed temporary tablespace data file: "./ibtmp1"
2026-09-30 22:20:13 0 [Note] Shutdown completed; log sequence number 45568; transaction id 15
2026-09-30 22:20:13 0 [Note] mariadbd: Shutdown complete
2026-09-30 22:20:13+00:00 [Note] [Entrypoint]: Temporary server stopped

2026-09-30 22:20:13+00:00 [Note] [Entrypoint]: MariaDB init process done. Ready for start up.

2026-09-30 22:20:13 0 [Note] Starting MariaDB 11.8.9-MariaDB-ubu2404 source revision bf9193a939f515e95dd8def1a5468088c91cede6 server_uid 4hyyIvXKtc+7t7ixZ6dzGNHwiyA= as process 1
2026-09-30 22:20:13 0 [Note] InnoDB: Compressed tables use zlib 1.3
2026-09-30 22:20:13 0 [Note] InnoDB: Number of transaction pools: 1
2026-09-30 22:20:13 0 [Note] InnoDB: Using AVX512 instructions
2026-09-30 22:20:13 0 [Warning] mariadbd: io_uring_queue_init() failed with EPERM: sysctl kernel.io_uring_disabled has the value 2, or 1 and the user of the process is not a member of sysctl kernel.io_uring_group. (see man 2 io_uring_setup).
create_uring failed: falling back to libaio
2026-09-30 22:20:13 0 [Note] InnoDB: Using Linux native AIO
2026-09-30 22:20:13 0 [Note] InnoDB: innodb_buffer_pool_size_max=8388608m, innodb_buffer_pool_size=128m
2026-09-30 22:20:13 0 [Note] InnoDB: Completed initialization of buffer pool
2026-09-30 22:20:13 0 [Note] InnoDB: File system buffers for log disabled (block size=4096 bytes)
2026-09-30 22:20:13 0 [Note] InnoDB: End of log at LSN=45568
2026-09-30 22:20:13 0 [Note] InnoDB: Opened 3 undo tablespaces
2026-09-30 22:20:13 0 [Note] InnoDB: 128 rollback segments in 3 undo tablespaces are active.
2026-09-30 22:20:13 0 [Note] InnoDB: Setting file './ibtmp1' size to 12.000MiB. Physically writing the file full; Please wait ...
2026-09-30 22:20:13 0 [Note] InnoDB: File './ibtmp1' size is now 12.000MiB.
2026-09-30 22:20:13 0 [Note] InnoDB: log sequence number 45568; transaction id 14
2026-09-30 22:20:13 0 [Note] Plugin 'FEEDBACK' is disabled.
2026-09-30 22:20:13 0 [Note] InnoDB: Loading buffer pool(s) from /var/lib/mysql/ib_buffer_pool
2026-09-30 22:20:13 0 [Note] Plugin 'wsrep-provider' is disabled.
2026-09-30 22:20:13 0 [Note] InnoDB: Buffer pool(s) load completed at 260930 22:20:13
2026-09-30 22:20:13 0 [Note] Server socket created on IP: '0.0.0.0', port: '3306'.
2026-09-30 22:20:13 0 [Note] Server socket created on IP: '::', port: '3306'.
2026-09-30 22:20:13 0 [Note] mariadbd: Event Scheduler: Loaded 0 events
2026-09-30 22:20:13 0 [Note] mariadbd: ready for connections.
Version: '11.8.9-MariaDB-ubu2404'  socket: '/run/mysqld/mysqld.sock'  port: 3306  mariadb.org binary distribution
```

## 4. Інтерактивний контейнер операційної системи
```bash
docker run -it --name andrii-os almalinux:9 /bin/bash
ls /
cat /etc/os-release
exit
```
Вивід:
```text
Unable to find image 'almalinux:9' locally
9: Pulling from library/almalinux
318e7b249bff: Pull complete
fe0e0cc1bb76: Download complete
078169144278: Download complete
Digest: sha256:3a3fa7f043b142bc8008c8b308d39b47d2c84008addcd52f9f9a7a82d2a90474
Status: Downloaded newer image for almalinux:9
afs  bin  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
NAME="AlmaLinux"
VERSION="9.8 (Olive Jaguar)"
ID="almalinux"
ID_LIKE="rhel centos fedora"
VERSION_ID="9.8"
PLATFORM_ID="platform:el9"
PRETTY_NAME="AlmaLinux 9.8 (Olive Jaguar)"
ANSI_COLOR="0;34"
LOGO="fedora-logo-icon"
CPE_NAME="cpe:/o:almalinux:almalinux:9::baseos"
HOME_URL="https://almalinux.org/"
DOCUMENTATION_URL="https://wiki.almalinux.org/"
BUG_REPORT_URL="https://bugs.almalinux.org/"

ALMALINUX_MANTISBT_PROJECT="AlmaLinux-9"
ALMALINUX_MANTISBT_PROJECT_VERSION="9.8"
REDHAT_SUPPORT_PRODUCT="AlmaLinux"
REDHAT_SUPPORT_PRODUCT_VERSION="9.8"
SUPPORT_END=2032-06-01
exit
```

## 5. Фоновий контейнер і docker exec
```bash
docker run -d --name andrii-os-d almalinux:9 sleep infinity
ls /
exit
docker ps
docker ps -a
```
Вивід:
```text
e9a048d0066369e8bf806178d5740045d71df4f60b4842b4fa15535fcaebc1d6
afs  bin  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
exit

What's next:
    Try Docker Debug for seamless, persistent debugging tools in any container or image → docker debug andrii-os-d
    Learn more at https://docs.docker.com/go/debug-cli/

CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                                     NAMES
e9a048d00663   almalinux:9    "sleep infinity"         30 seconds ago   Up 29 seconds                                             andrii-os-d
58ba38589bf5   mariadb:11.8   "docker-entrypoint.s…"   7 minutes ago    Up 7 minutes    3306/tcp                                  andrii-database
3f96f155dbcf   httpd:2.4      "httpd-foreground"       12 minutes ago   Up 12 minutes   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   andrii-webserver

CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS                     PORTS                                     NAMES
e9a048d00663   almalinux:9    "sleep infinity"         34 seconds ago   Up 33 seconds                                                        andrii-os-d
e0c76e65891e   almalinux:9    "/bin/bash"              3 minutes ago    Exited (0) 3 minutes ago                                             andrii-os
58ba38589bf5   mariadb:11.8   "docker-entrypoint.s…"   7 minutes ago    Up 7 minutes               3306/tcp                                  andrii-database
3f96f155dbcf   httpd:2.4      "httpd-foreground"       12 minutes ago   Up 12 minutes              0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   andrii-webserver

```

## 6. Дослідження контейнера
```bash
docker inspect andrii-webserver
docker inspect --format "{{.State.Status}} {{.Config.Image}}" andrii-webserver
docker images
```
Вивід:
```text
[
    {
        "Id": "3f96f155dbcfa56b46e86b2153051e69d321f1e7bd31dc404e07632f7cbe57a8",
        "Created": "2026-09-30T22:14:48.16460539Z",
        "Path": "httpd-foreground",
        "Args": [],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 423,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2026-09-30T22:14:48.301261906Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:03f858efb82c25cb0f9962946615cdcdaf26927cb971722149b563197cfd0fdd",
        "ResolvConfPath": "/var/lib/docker/containers/3f96f155dbcfa56b46e86b2153051e69d321f1e7bd31dc404e07632f7cbe57a8/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/3f96f155dbcfa56b46e86b2153051e69d321f1e7bd31dc404e07632f7cbe57a8/hostname",
        "HostsPath": "/var/lib/docker/containers/3f96f155dbcfa56b46e86b2153051e69d321f1e7bd31dc404e07632f7cbe57a8/hosts",
        "LogPath": "/var/lib/docker/containers/3f96f155dbcfa56b46e86b2153051e69d321f1e7bd31dc404e07632f7cbe57a8/3f96f155dbcfa56b46e86b2153051e69d321f1e7bd31dc404e07632f7cbe57a8-json.log",
        "Name": "/andrii-webserver",
        "RestartCount": 0,
        "Driver": "overlayfs",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "bridge",
            "PortBindings": {
                "80/tcp": [
                    {
                        "HostIp": "",
                        "HostPort": "8080"
                    }
                ]
            },
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "ConsoleSize": [
                46,
                116
            ],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "private",
            "Dns": null,
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": [],
            "BlkioDeviceWriteBps": [],
            "BlkioDeviceReadIOps": [],
            "BlkioDeviceWriteIOps": [],
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": null,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/acpi",
                "/proc/asound",
                "/proc/interrupts",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/sys/devices/virtual/powercap",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "Storage": {
            "RootFS": {
                "Snapshot": {
                    "Name": "overlayfs"
                }
            }
        },
        "Mounts": [],
        "Config": {
            "Hostname": "3f96f155dbcf",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/apache2/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "HTTPD_PREFIX=/usr/local/apache2",
                "HTTPD_VERSION=2.4.68",
                "HTTPD_SHA256=68c74d4df38c26bed4dfbdb8f3baf1eb532f3872357becc1bba5d136f6b63c06",
                "HTTPD_PATCHES="
            ],
            "Cmd": [
                "httpd-foreground"
            ],
            "Image": "httpd:2.4",
            "Volumes": null,
            "WorkingDir": "/usr/local/apache2",
            "Entrypoint": null,
            "Labels": {},
            "StopSignal": "SIGWINCH"
        },
        "NetworkSettings": {
            "SandboxID": "2fddddf41111bc7d615e5266a5603172f0c4eb6c62c3f1e03ae6397dd81f26b1",
            "SandboxKey": "/var/run/docker/netns/2fddddf41111",
            "Ports": {
                "80/tcp": [
                    {
                        "HostIp": "0.0.0.0",
                        "HostPort": "8080"
                    },
                    {
                        "HostIp": "::",
                        "HostPort": "8080"
                    }
                ]
            },
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "DriverOpts": null,
                    "GwPriority": 0,
                    "NetworkID": "0c7d9b2d9270ebe292866422f7566623a32c469dea77fe764299013ff98a7474",
                    "EndpointID": "da4e934dc805d73eea9861e56fef0a196bf88129e1f1403793d9b2efbffb52ad",
                    "Gateway": "172.17.0.1",
                    "IPAddress": "172.17.0.2",
                    "MacAddress": "c2:c2:13:c5:d5:d7",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "DNSNames": null
                }
            }
        },
        "ImageManifestDescriptor": {
            "mediaType": "application/vnd.oci.image.manifest.v1+json",
            "digest": "sha256:3a1e0bbe28c4673a03b7a3fbc71a56325eacb1a8d11c1ad696fbf9678f07febd",
            "size": 2093,
            "annotations": {
                "com.docker.official-images.bashbrew.arch": "amd64",
                "org.opencontainers.image.base.digest": "sha256:7792b1f7702a86946cd518db72b6a407302c3e9bc1635634368b878189e8221c",
                "org.opencontainers.image.base.name": "debian:trixie-slim",
                "org.opencontainers.image.created": "2026-09-19T00:18:23Z",
                "org.opencontainers.image.revision": "4da43810a4429c552e19c43f8e513248c34cfc84",
                "org.opencontainers.image.source": "https://github.com/docker-library/httpd.git#4da43810a4429c552e19c43f8e513248c34cfc84:2.4",
                "org.opencontainers.image.url": "https://hub.docker.com/_/httpd",
                "org.opencontainers.image.version": "2.4.68"
            },
            "platform": {
                "architecture": "amd64",
                "os": "linux"
            }
        }
    }
]

running httpd:2.4

                                                                                                i Info →   U  In Use
IMAGE          ID             DISK USAGE   CONTENT SIZE   EXTRA
almalinux:9    3a3fa7f043b1        289MB         76.9MB    U
httpd:2.4      03f858efb82c        177MB         47.6MB    U
mariadb:11.8   79d59758afc9        458MB          108MB    U

```

## 7. Завершення роботи з ресурсами
```bash
docker stop andrii-webserver
docker rm andrii-webserver
docker stop andrii-database andrii-os-d
docker rm andrii-database andrii-os andrii-os-d
docker ps -a
docker rmi httpd:2.4 mariadb:11.8 almalinux:9
docker images
```
Вивід:
```text
andrii-webserver

andrii-webserver

andrii-database
andrii-os-d

andrii-database
andrii-os
andrii-os-d

CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

Untagged: httpd:2.4
Deleted: sha256:03f858efb82c25cb0f9962946615cdcdaf26927cb971722149b563197cfd0fdd
Untagged: mariadb:11.8
Deleted: sha256:79d59758afc91b89b120b0a8904d637f5a3b3e1c4900f29b740d6d46c72fef68
Untagged: almalinux:9
Deleted: sha256:3a3fa7f043b142bc8008c8b308d39b47d2c84008addcd52f9f9a7a82d2a90474

                                                                                                i Info →   U  In Use
IMAGE   ID             DISK USAGE   CONTENT SIZE   EXTRA
```