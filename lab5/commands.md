PS C:\Users\andri\in-progress\virtual_container\lab5> docker network create --driver bridge --subnet "172.28.4.0/24" --gateway "172.28.4.1" "public-net-lab5-vlasenko"
0d8769af891774c286613651c1e8538e5aecf0c0586722302ac654bc67ddb382
PS C:\Users\andri\in-progress\virtual_container\lab5> docker network create --driver bridge --subnet "172.29.4.0/24" --gateway "172.29.4.1" "private-net-lab5-vlasenko"
428975ebf0c61fdfba2d94701f638808997bd16f3748dc09273f5f5d8f628bdd



PS C:\Users\andri\in-progress\virtual_container\lab5> docker volume create "lab5-vlasenko-mysql-data"
lab5-vlasenko-mysql-data
PS C:\Users\andri\in-progress\virtual_container\lab5> docker run -d --name "lab5-vlasenko-mysql" --network "private-net-lab5-vlasenko" --network-alias mysql_db --env-file mysql.env -v "lab5-vlasenko-mysql-data:/var/lib/mysql" mysql:8.4 
ca706568e57a49e300aae8f64c4727b94c3ed8893b5a6bf0b50cc99d86961d9e
PS C:\Users\andri\in-progress\virtual_container\lab5> docker logs --tail 60 "lab5-vlasenko-mysql"
2026-11-19 09:24:41+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 8.4.13-1.el9 started.
2026-11-19 09:24:42+00:00 [Note] [Entrypoint]: Switching to dedicated user 'mysql'
2026-11-19 09:24:42+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 8.4.13-1.el9 started.
2026-11-19 09:24:42+00:00 [Note] [Entrypoint]: Initializing database files
2026-11-19T09:24:42.360719Z 0 [System] [MY-015017] [Server] MySQL Server Initialization - start.
2026-11-19T09:24:42.361578Z 0 [System] [MY-013169] [Server] /usr/sbin/mysqld (mysqld 8.4.13) initializing of server in progress as process 80
2026-11-19T09:24:42.361579Z 0 [System] [MY-015150] [Server] Server version with update: '8.4.13.0'
2026-11-19T09:24:42.369515Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2026-11-19T09:24:42.651134Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2026-11-19T09:24:43.715566Z 6 [Warning] [MY-010453] [Server] root@localhost is created with an empty password ! Please consider switching off the --initialize-insecure option.
2026-11-19T09:24:45.513344Z 0 [System] [MY-015018] [Server] MySQL Server Initialization - end.
2026-11-19 09:24:45+00:00 [Note] [Entrypoint]: Database files initialized
2026-11-19 09:24:45+00:00 [Note] [Entrypoint]: Starting temporary server
2026-11-19T09:24:45.569264Z 0 [System] [MY-015015] [Server] MySQL Server - start.
2026-11-19T09:24:45.801380Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.4.13) starting as process 123
2026-11-19T09:24:45.801384Z 0 [System] [MY-015150] [Server] Server version with update: '8.4.13.0'
2026-11-19T09:24:45.817921Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2026-11-19T09:24:46.101097Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2026-11-19T09:24:46.393524Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
2026-11-19T09:24:46.393571Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
2026-11-19T09:24:46.396418Z 0 [Warning] [MY-011810] [Server] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
2026-11-19T09:24:46.420777Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.4.13'  socket: '/var/run/mysqld/mysqld.sock'  port: 0  MySQL Community Server - GPL.
2026-11-19T09:24:46.420779Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Socket: /var/run/mysqld/mysqlx.sock
2026-11-19 09:24:46+00:00 [Note] [Entrypoint]: Temporary server started.
'/var/lib/mysql/mysql.sock' -> '/var/run/mysqld/mysqld.sock'
2026-11-19 09:24:48+00:00 [Note] [Entrypoint]: Creating database lab5
2026-11-19 09:24:48+00:00 [Note] [Entrypoint]: Creating user lab5
2026-11-19 09:24:48+00:00 [Note] [Entrypoint]: Giving user lab5 access to schema lab5

2026-11-19 09:24:48+00:00 [Note] [Entrypoint]: Stopping temporary server
2026-11-19T09:24:48.051950Z 13 [System] [MY-013172] [Server] Received SHUTDOWN from user root. Shutting down mysqld (Version: 8.4.13).
2026-11-19T09:24:48.753607Z 0 [System] [MY-010910] [Server] /usr/sbin/mysqld: Shutdown complete (mysqld 8.4.13)  MySQL Community Server - GPL.
2026-11-19T09:24:48.753638Z 0 [System] [MY-015016] [Server] MySQL Server - end.
2026-11-19 09:24:49+00:00 [Note] [Entrypoint]: Temporary server stopped

2026-11-19 09:24:49+00:00 [Note] [Entrypoint]: MySQL init process done. Ready for start up.

2026-11-19T09:24:49.068630Z 0 [System] [MY-015015] [Server] MySQL Server - start.
2026-11-19T09:24:49.267423Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.4.13) starting as process 1
2026-11-19T09:24:49.267426Z 0 [System] [MY-015150] [Server] Server version with update: '8.4.13.0'
2026-11-19T09:24:49.274950Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2026-11-19T09:24:49.489907Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2026-11-19T09:24:49.717670Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
2026-11-19T09:24:49.717712Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
2026-11-19T09:24:49.720751Z 0 [Warning] [MY-011810] [Server] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
2026-11-19T09:24:49.741501Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Bind-address: '::' port: 33060, socket: /var/run/mysqld/mysqlx.sock
2026-11-19T09:24:49.741590Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.4.13'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server - GPL.



C:\Users\andri\in-progress\virtual_container\lab5>docker exec -i "lab5-vlasenko-mysql" sh -c "MYSQL_PWD=\"$MYSQL_PASSWORD\" mysql -u lab5 --default-character-set=utf8mb4 lab5" < sql/mysql.sql
C:\Users\andri\in-progress\virtual_container\lab5>docker exec -i "lab5-vlasenko-mysql" sh -c "MYSQL_PWD=\"$MYSQL_PASSWORD\" mysql -u lab5 --default-character-set=utf8mb4 lab5 -e \"SELECT * FROM student_record;\""
id      full_name       group_code
1       Андрій  6.1214-пі



PS C:\Users\andri\in-progress\virtual_container\lab5> docker build -t "lab5-app:lab5-vlasenko" .
[+] Building 12.4s (11/11) FINISHED                                                                                    docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                   0.0s
 => => transferring dockerfile: 180B                                                                                                   0.0s
 => [internal] load metadata for docker.io/library/node:22-alpine                                                                      3.3s
 => [auth] library/node:pull token for registry-1.docker.io                                                                            0.0s
 => [internal] load .dockerignore                                                                                                      0.0s
 => => transferring context: 66B                                                                                                       0.0s
 => [1/5] FROM docker.io/library/node:22-alpine@sha256:1314fb30ec37592d5845e5a160d522c0e680972aa534549940b8d73bde88481a                6.1s
 => => resolve docker.io/library/node:22-alpine@sha256:1314fb30ec37592d5845e5a160d522c0e680972aa534549940b8d73bde88481a                0.0s
 => => sha256:177fffbd7f516ce769745a38154a76ab1cc31d9f87f1c4ea5e448f6548fea4c4 443B / 443B                                             0.2s
 => => sha256:e868d1035e5072f0e369d44b840e8532b9500f7cc74aa8c908ccd2e1b9898eb3 1.26MB / 1.26MB                                         0.5s
 => => sha256:87aaee1f6667374a3b8e33a252954e01b1fac9749bb0c570022533b9120d13a1 56.25MB / 56.25MB                                       5.0s
 => => sha256:881fc932939efef04ca120ad44bbd2c0917851eb247aa4995428afb1e80ede17 3.85MB / 3.85MB                                         0.9s
 => => extracting sha256:881fc932939efef04ca120ad44bbd2c0917851eb247aa4995428afb1e80ede17                                              0.1s
 => => extracting sha256:87aaee1f6667374a3b8e33a252954e01b1fac9749bb0c570022533b9120d13a1                                              0.9s
 => => extracting sha256:e868d1035e5072f0e369d44b840e8532b9500f7cc74aa8c908ccd2e1b9898eb3                                              0.0s
 => => extracting sha256:177fffbd7f516ce769745a38154a76ab1cc31d9f87f1c4ea5e448f6548fea4c4                                              0.0s
 => [internal] load build context                                                                                                      0.4s
 => => transferring context: 6.29MB                                                                                                    0.4s
 => [2/5] WORKDIR /app                                                                                                                 0.1s
 => [3/5] COPY lab5-app/package*.json ./                                                                                               0.0s
 => [4/5] RUN npm install                                                                                                              1.5s
 => [5/5] COPY lab5-app/ ./                                                                                                            0.1s
 => exporting to image                                                                                                                 0.9s
 => => exporting layers                                                                                                                0.4s
 => => exporting manifest sha256:118c6809afba86733ad6a06d18bc2cfca1085b25f005b0c28919430ef7d5bd7b                                      0.0s
 => => exporting config sha256:3e04790248fd5bd8c44f8d641141e15b1f63b80c5a747e55c563cf81ce2f5db1                                        0.0s
 => => exporting attestation manifest sha256:edb032977ede222d7b1ea45997c99f716e4753798b7b51ba1e7eb215cd14b036                          0.0s
 => => exporting manifest list sha256:01ff8506c696e0d17aad1deeb3000f74dd28ff034ed23479b9d3ab494b09bb80                                 0.0s
 => => naming to docker.io/library/lab5-app:lab5-vlasenko                                                                              0.0s
 => => unpacking to docker.io/library/lab5-app:lab5-vlasenko                                                                           0.4s

View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/wq18sxpd19heahh6rxlud4m13



PS C:\Users\andri\in-progress\virtual_container\lab5> docker create --name "lab5-vlasenko-app-private" --hostname "lab5-vlasenko-app-private" --network "public-net-lab5-vlasenko" --env-file app-private.env -p 127.0.0.1:8080:8080 "lab5-app:lab5-vlasenko"
ba018a76b28fd77f3932bca52a09c763867d6da60bcc7286fe3692babc265b8b
PS C:\Users\andri\in-progress\virtual_container\lab5> docker network connect "private-net-lab5-vlasenko" "lab5-vlasenko-app-private"
PS C:\Users\andri\in-progress\virtual_container\lab5> docker start "lab5-vlasenko-app-private"                       
lab5-vlasenko-app-private



PS C:\Users\andri\in-progress\virtual_container\lab5> docker network inspect "public-net-lab5-vlasenko" "private-net-lab5-vlasenko" 
[
    {
        "Name": "public-net-lab5-vlasenko",
        "Id": "0d8769af891774c286613651c1e8538e5aecf0c0586722302ac654bc67ddb382",
        "Created": "2026-11-19T09:17:13.075656432Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv4": true,
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.28.4.0/24",
                    "Gateway": "172.28.4.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Options": {
            "com.docker.network.enable_ipv4": "true",
            "com.docker.network.enable_ipv6": "false"
        },
        "Labels": {},
        "Containers": {
            "ba018a76b28fd77f3932bca52a09c763867d6da60bcc7286fe3692babc265b8b": {
                "Name": "lab5-vlasenko-app-private",
                "EndpointID": "d40b1befe54a34ed769b7c67a66d8e03fbd0de94341bbb2e6d1275110b60c4c2",
                "MacAddress": "da:2d:c5:c8:45:bc",
                "IPv4Address": "172.28.4.2/24",
                "IPv6Address": ""
            }
        },
        "Status": {
            "IPAM": {
                "Subnets": {
                    "172.28.4.0/24": {
                        "IPsInUse": 4,
                        "DynamicIPsAvailable": 252
                    }
                }
            }
        }
    },
    {
        "Name": "private-net-lab5-vlasenko",
        "Id": "428975ebf0c61fdfba2d94701f638808997bd16f3748dc09273f5f5d8f628bdd",
        "Created": "2026-11-19T09:18:24.641222717Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv4": true,
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.29.4.0/24",
                    "Gateway": "172.29.4.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Options": {
            "com.docker.network.enable_ipv4": "true",
            "com.docker.network.enable_ipv6": "false"
        },
        "Labels": {},
        "Containers": {
            "ba018a76b28fd77f3932bca52a09c763867d6da60bcc7286fe3692babc265b8b": {
                "Name": "lab5-vlasenko-app-private",
                "EndpointID": "c360715f1c51a3a4e3d837cebb10c6aab8f29dd45ee3d6445607264309e845b4",
                "MacAddress": "ba:5f:cc:2d:42:ca",
                "IPv4Address": "172.29.4.2/24",
                "IPv6Address": ""
            },
            "ca706568e57a49e300aae8f64c4727b94c3ed8893b5a6bf0b50cc99d86961d9e": {
                "Name": "lab5-vlasenko-mysql",
                "EndpointID": "24733010f50eda0a3974972befa01fa56f203769420f56c035e41df130fe8942",
                "MacAddress": "06:24:49:c4:86:0e",
                "IPv4Address": "172.29.4.3/24",
                "IPv6Address": ""
            }
        },
        "Status": {
            "IPAM": {
                "Subnets": {
                    "172.29.4.0/24": {
                        "IPsInUse": 5,
                        "DynamicIPsAvailable": 251
                    }
                }
            }
        }
    }
]
PS C:\Users\andri\in-progress\virtual_container\lab5> docker inspect "lab5-vlasenko-app-private" --format '{{json .NetworkSettings.Networks}}' 
{"private-net-lab5-vlasenko":{"IPAMConfig":{},"Links":null,"Aliases":[],"DriverOpts":{},"GwPriority":0,"NetworkID":"428975ebf0c61fdfba2d94701f638808997bd16f3748dc09273f5f5d8f628bdd","EndpointID":"c360715f1c51a3a4e3d837cebb10c6aab8f29dd45ee3d6445607264309e845b4","Gateway":"172.29.4.1","IPAddress":"172.29.4.2","MacAddress":"ba:5f:cc:2d:42:ca","IPPrefixLen":24,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"DNSNames":["lab5-vlasenko-app-private","ba018a76b28f"]},"public-net-lab5-vlasenko":{"IPAMConfig":null,"Links":null,"Aliases":null,"DriverOpts":null,"GwPriority":0,"NetworkID":"0d8769af891774c286613651c1e8538e5aecf0c0586722302ac654bc67ddb382","EndpointID":"d40b1befe54a34ed769b7c67a66d8e03fbd0de94341bbb2e6d1275110b60c4c2","Gateway":"172.28.4.1","IPAddress":"172.28.4.2","MacAddress":"da:2d:c5:c8:45:bc","IPPrefixLen":24,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"DNSNames":["lab5-vlasenko-app-private","ba018a76b28f"]}}
PS C:\Users\andri\in-progress\virtual_container\lab5> docker inspect "lab5-vlasenko-mysql" --format '{{json .HostConfig.PortBindings}}'
{}



PS C:\Users\andri\in-progress\virtual_container\lab5> docker network disconnect "private-net-lab5-vlasenko" "lab5-vlasenko-app-private"
PS C:\Users\andri\in-progress\virtual_container\lab5> docker logs --tail 20 lab5-vlasenko-app-private 
getaddrinfo EAI_AGAIN mysql_db
getaddrinfo ENOTFOUND mysql_db



PS C:\Users\andri\in-progress\virtual_container\lab5> docker stop "lab5-vlasenko-app-private" "lab5-vlasenko-mysql"
lab5-vlasenko-app-private
lab5-vlasenko-mysql



PS C:\Users\andri\in-progress\virtual_container\lab5> docker volume create "lab5-vlasenko-postgres-data"
lab5-vlasenko-postgres-data
PS C:\Users\andri\in-progress\virtual_container\lab5> docker run -d --name "lab5-vlasenko-postgres" --network host --env-file postgres.env -v "lab5-vlasenko-postgres-data:/var/lib/postgresql/data" postgres:17-alpine
5359a8fc89045d612252585b3d2e32789627f45803c0c669c326498f31090626


PS C:\Users\andri\in-progress\virtual_container\lab5> docker logs --tail 60 "lab5-vlasenko-postgres"
The files belonging to this database system will be owned by user "postgres".
This user must also own the server process.

The database cluster will be initialized with locale "en_US.utf8".
The default database encoding has accordingly been set to "UTF8".
The default text search configuration will be set to "english".

Data page checksums are disabled.

fixing permissions on existing directory /var/lib/postgresql/data ... ok
creating subdirectories ... ok
selecting dynamic shared memory implementation ... posix
selecting default "max_connections" ... 100
selecting default "shared_buffers" ... 128MB
selecting default time zone ... UTC
creating configuration files ... ok
running bootstrap script ... ok
sh: locale: not found
2026-11-19 19:09:59.366 UTC [35] WARNING:  no usable system locales were found
performing post-bootstrap initialization ... ok
syncing data to disk ... ok


Success. You can now start the database server using:

    pg_ctl -D /var/lib/postgresql/data -l logfile start

initdb: warning: enabling "trust" authentication for local connections
initdb: hint: You can change this by editing pg_hba.conf or using the option -A, or --auth-local and --auth-host, the next time you run initdb.
waiting for server to start....2026-11-19 19:10:00.160 UTC [41] LOG:  starting PostgreSQL 17.11 on x86_64-pc-linux-musl, compiled by gcc (Alpine 15.2.0) 15.2.0, 64-bit
2026-11-19 19:10:00.163 UTC [41] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2026-11-19 19:10:00.172 UTC [44] LOG:  database system was shut down at 2026-11-19 19:09:59 UTC
2026-11-19 19:10:00.178 UTC [41] LOG:  database system is ready to accept connections
 done
server started
CREATE DATABASE


/usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*

waiting for server to shut down....2026-11-19 19:10:00.302 UTC [41] LOG:  received fast shutdown request
2026-11-19 19:10:00.305 UTC [41] LOG:  aborting any active transactions
2026-11-19 19:10:00.306 UTC [41] LOG:  background worker "logical replication launcher" (PID 47) exited with exit code 1
2026-11-19 19:10:00.307 UTC [42] LOG:  shutting down
2026-11-19 19:10:00.309 UTC [42] LOG:  checkpoint starting: shutdown immediate
2026-11-19 19:10:00.428 UTC [42] LOG:  checkpoint complete: wrote 926 buffers (5.7%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.012 s, sync=0.102 s, total=0.122 s; sync files=301, longest=0.002 s, average=0.001 s; distance=4266 kB, estimate=4266 kB; lsn=0/191E810, redo lsn=0/191E810
2026-11-19 19:10:00.432 UTC [41] LOG:  database system is shut down
 done
server stopped

PostgreSQL init process complete; ready for start up.

2026-11-19 19:10:00.524 UTC [1] LOG:  starting PostgreSQL 17.11 on x86_64-pc-linux-musl, compiled by gcc (Alpine 15.2.0) 15.2.0, 64-bit
2026-11-19 19:10:00.525 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2026-11-19 19:10:00.525 UTC [1] LOG:  listening on IPv6 address "::", port 5432
2026-11-19 19:10:00.530 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2026-11-19 19:10:00.535 UTC [57] LOG:  database system was shut down at 2026-11-19 19:10:00 UTC
2026-11-19 19:10:00.540 UTC [1] LOG:  database system is ready to accept connections
PS C:\Users\andri\in-progress\virtual_container\lab5> docker exec "lab5-vlasenko-postgres" pg_isready -h 127.0.0.1 -p 5432 -U lab5 -d lab5 
127.0.0.1:5432 - accepting connections
C:\Users\andri\in-progress\virtual_container\lab5>docker exec -i "lab5-vlasenko-postgres" psql -U lab5 -d lab5 -v ON_ERROR_STOP=1 < sql/postgres.sql
CREATE TABLE
INSERT 0 1
C:\Users\andri\in-progress\virtual_container\lab5>docker exec "lab5-vlasenko-postgres" psql -U lab5 -d lab5 -c "SELECT * FROM student_record;"
 id | full_name | group_code 
----+-----------+------------
  1 | Андрій    | 6.1214-пі
(1 row)



PS C:\Users\andri\in-progress\virtual_container\lab5> docker create --name "lab5-vlasenko-app-host" --hostname "lab5-vlasenko-app-host" --network "public-net-lab5-vlasenko" --env-file app-host.env --add-host pg_db:host-gateway -p 127.0.0.1:8080:8080 "lab5-app:lab5-vlasenko"
b2c9ab543fd9222044f864655e9eb092d38ae15c6d0d263845744213fcf7e7d4
PS C:\Users\andri\in-progress\virtual_container\lab5> docker start "lab5-vlasenko-app-host"
lab5-vlasenko-app-host



PS C:\Users\andri\in-progress\virtual_container\lab5> docker inspect "lab5-vlasenko-app-host" --format '{{json .NetworkSettings.Networks}}'
{"public-net-lab5-vlasenko":{"IPAMConfig":null,"Links":null,"Aliases":null,"DriverOpts":null,"GwPriority":0,"NetworkID":"0d8769af891774c286613651c1e8538e5aecf0c0586722302ac654bc67ddb382","EndpointID":"3dec0eba2a70c85f0cc7776b47f1e222bb348677d1b91206d9a469070dc28983","Gateway":"172.28.4.1","IPAddress":"172.28.4.2","MacAddress":"c2:fa:83:de:37:38","IPPrefixLen":24,"IPv6Gateway":"","GlobalIPv6Address":"","GlobalIPv6PrefixLen":0,"DNSNames":["lab5-vlasenko-app-host","45a7122ad2f6"]}}
PS C:\Users\andri\in-progress\virtual_container\lab5> docker inspect "lab5-vlasenko-postgres" --format '{{.HostConfig.NetworkMode}}'        
host
PS C:\Users\andri\in-progress\virtual_container\lab5> docker inspect "lab5-vlasenko-postgres" --format '{{json .HostConfig.PortBindings}}'
{}



PS C:\Users\andri\in-progress\virtual_container\lab5> docker exec "lab5-vlasenko-app-host" cat /etc/hosts
127.0.0.1       localhost
::1     localhost ip6-localhost ip6-loopback
fe00::  ip6-localnet
ff00::  ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
192.168.65.254  pg_db
fdc4:f303:9324::254     pg_db
172.28.4.2      lab5-vlasenko-app-host
PS C:\Users\andri\in-progress\virtual_container\lab5> docker network inspect bridge --format '{{json .IPAM.Config}}'
[{"Subnet":"172.17.0.0/16","Gateway":"172.17.0.1"}]



PS C:\Users\andri\in-progress\virtual_container\lab5> docker stop "lab5-vlasenko-app-host" "lab5-vlasenko-postgres"
lab5-vlasenko-app-host
lab5-vlasenko-postgres
PS C:\Users\andri\in-progress\virtual_container\lab5> docker rm "lab5-vlasenko-app-private" "lab5-vlasenko-mysql" "lab5-vlasenko-app-host" "lab5-vlasenko-postgres"
lab5-vlasenko-app-private
lab5-vlasenko-mysql
lab5-vlasenko-app-host
lab5-vlasenko-postgres
PS C:\Users\andri\in-progress\virtual_container\lab5> docker network rm "public-net-lab5-vlasenko" "private-net-lab5-vlasenko" 
public-net-lab5-vlasenko
private-net-lab5-vlasenko
PS C:\Users\andri\in-progress\virtual_container\lab5> docker volume rm "lab5-vlasenko-mysql-data" "lab5-vlasenko-postgres-data"
lab5-vlasenko-mysql-data
lab5-vlasenko-postgres-dat