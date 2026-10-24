PS C:\Users\andri\in-progress\virtual_container\lab4> docker run -d --name "lab4-nginx" -p 8080:80 -v "$PWD/html:/usr/share/nginx/html:ro" nginx:1.28
Unable to find image 'nginx:1.28' locally
1.28: Pulling from library/nginx
400f8ac367e0: Pull complete 
f176d5d8a1c1: Pull complete 
63ef37274310: Pull complete 
5435b2dcdf5c: Pull complete 
4744f2344932: Pull complete 
6a7080264fc9: Pull complete 
39a24e95a1e9: Pull complete 
d245a399c084: Download complete 
58cb5962d863: Download complete 
Digest: sha256:146adea4768b83c607d0bdfa4188464e3da6e0a3ad4475db1d1d8f64f27c29cc
Status: Downloaded newer image for nginx:1.28
a5e675b02ac05562a6ee672de86296888e8e6d7f8b4334f46b299b95c2d39c94
PS C:\Users\andri\in-progress\virtual_container\lab4> docker run -d --name "lab4-apache" -p 8081:80 -v "$PWD/html:/usr/local/apache2/htdocs:ro" httpd:2.4-alpine
Unable to find image 'httpd:2.4-alpine' locally
2.4-alpine: Pulling from library/httpd
8fa5871deb7f: Pull complete 
ca8079233535: Pull complete 
8653f63a2a1a: Pull complete 
f55ab9d5f59a: Pull complete 
4f4fb700ef54: Pull complete 
2eb41f39407f: Pull complete 
7b229517ed22: Pull complete 
4f7ae5ccbe66: Download complete 
ac03b5fe9bbf: Download complete 
Digest: sha256:759a1d9178d351185978e41be37a3e91675a4ddc0653aa5df493cfd4c67e24ec
Status: Downloaded newer image for httpd:2.4-alpine
5a3993449c50dab42f6e2b0a1b0fcc210e03da58e9e98d4c0d483ad0f5a751f4
PS C:\Users\andri\in-progress\virtual_container\lab4> curl.exe -fsS http://localhost:8080                                                     
<!DOCTYPE html>   
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Web Page</title>
    </head>
    <body>
        <p>Системи віртуалізації та контейнеризації</p>
        <p>Інженерія програмного забезпечення</p>
        <p>Третій курс</p>
        <p>6.1214-пі</p>
        <p>Андрій</p>
    </body>
</html>
PS C:\Users\andri\in-progress\virtual_container\lab4> curl.exe -fsS http://localhost:8081
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Web Page</title>
    </head>
    <body>
        <p>Системи віртуалізації та контейнеризації</p>
        <p>Інженерія програмного забезпечення</p>
        <p>Третій курс</p>
        <p>6.1214-пі</p>
        <p>Андрій</p>
    </body>
</html>
PS C:\Users\andri\in-progress\virtual_container\lab4> docker inspect "lab4-nginx" --format '{{json .Mounts}}'
[{"Type":"bind","Source":"C:\\Users\\andri\\in-progress\\virtual_container\\lab4/html","Destination":"/usr/share/nginx/html","Mode":"ro","RW":false,"Propagation":"rprivate"}]
PS C:\Users\andri\in-progress\virtual_container\lab4> docker inspect "lab4-apache" --format '{{json .Mounts}}'
[{"Type":"bind","Source":"C:\\Users\\andri\\in-progress\\virtual_container\\lab4/html","Destination":"/usr/local/apache2/htdocs","Mode":"ro","RW":false,"Propagation":"rprivate"}]





PS C:\Users\andri\in-progress\virtual_container\lab4> docker stop "lab4-nginx" "lab4-apache"
lab4-nginx
lab4-apache
PS C:\Users\andri\in-progress\virtual_container\lab4> docker rm "lab4-nginx" "lab4-apache"  
lab4-nginx
lab4-apache
PS C:\Users\andri\in-progress\virtual_container\lab4> docker run -d --name "lab4-nginx" -p 8080:80 --mount "type=bind,src=$PWD/html,dst=/usr/share/nginx/html,readonly" nginx:1.28
cc2c40a783d9975d10719656868b8d43e4f0dbecd2c6f0176c941f7fef43197f
PS C:\Users\andri\in-progress\virtual_container\lab4> docker run -d --name "lab4-apache" -p 8081:80 --mount "type=bind,src=$PWD/html,dst=/usr/local/apache2/htdocs,readonly" httpd:2.4-alpine
f7da847447bfd10f96dbc05c93cdaa2418b53dbc4d210f8da062f5ceb1b8ec87





PS C:\Users\andri\in-progress\virtual_container\lab4> docker inspect "lab4-nginx" --format '{{json .Mounts}}'                                                              
[{"Type":"bind","Source":"C:\\Users\\andri\\in-progress\\virtual_container\\lab4/html","Destination":"/usr/share/nginx/html","Mode":"","RW":false,"Propagation":"rprivate"}]
PS C:\Users\andri\in-progress\virtual_container\lab4> docker inspect "lab4-apache" --format '{{json .Mounts}}'                                                             
[{"Type":"bind","Source":"C:\\Users\\andri\\in-progress\\virtual_container\\lab4/html","Destination":"/usr/local/apache2/htdocs","Mode":"","RW":false,"Propagation":"rprivate"}]
PS C:\Users\andri\in-progress\virtual_container\lab4> docker stop lab4-nginx
lab4-nginx
PS C:\Users\andri\in-progress\virtual_container\lab4> docker stop lab4-apache
lab4-apache
PS C:\Users\andri\in-progress\virtual_container\lab4> docker rm lab4-nginx lab4-apache
lab4-nginx
lab4-apache




PS C:\Users\andri\in-progress\virtual_container\lab4> docker volume create "lab4-mysql-data"
lab4-mysql-data
PS C:\Users\andri\in-progress\virtual_container\lab4> docker volume create "lab4-postgres-data"
lab4-postgres-data
PS C:\Users\andri\in-progress\virtual_container\lab4> docker run -d --name "lab4-mysql" --env-file mysql.env -v "lab4-mysql-data:/var/lib/mysql" mysql:8.4
Unable to find image 'mysql:8.4' locally
8.4: Pulling from library/mysql
d14dbab65632: Pull complete 
e8d4024251a9: Pull complete 
e99723a85985: Pull complete 
ea1749d53e24: Pull complete 
0c9ac1647849: Pull complete 
a3274015618b: Pull complete 
97347cf073b1: Pull complete 
4730445dfddd: Pull complete 
65fb9e68a2ac: Pull complete 
1ba383bbcb80: Pull complete 
8ac39cbaf10f: Download complete 
bb103901fbb7: Download complete 
Digest: sha256:76f0358884cb92d9a086d24e5671c38048d3fef40f2588703d73eb55392d6b69
Status: Downloaded newer image for mysql:8.4
c75528570fe91df954d9fc8b4627d7b511432b25a63a65e6eaeb2f81600f7b4d
PS C:\Users\andri\in-progress\virtual_container\lab4> docker run -d --name "lab4-postgres" --env-file postgres.env -v "lab4-postgres-data:/var/lib/postgresql/data" postgres:17-alpine
Unable to find image 'postgres:17-alpine' locally
17-alpine: Pulling from library/postgres
d5bf1ad711f7: Pull complete 
d6e09b1bfe5f: Pull complete 
694a01b64034: Pull complete 
f5e975d661d7: Pull complete 
e018eb860c5e: Pull complete 
fa5e490e3893: Pull complete 
7a82a00c713d: Pull complete 
9098654d3377: Pull complete 
dddde5442af4: Pull complete 
e22336567ca8: Download complete 
112f26c8faed: Download complete 
Digest: sha256:eee6c6e1b0894fa4fe0075eb054af9fd1cf39a35321c2d4110626cfe506411fb
Status: Downloaded newer image for postgres:17-alpine
ef6bde6e4a5c4671c1e115f4f1f20f6912c70d6851ec14fb52fa1de893db2a6a
PS C:\Users\andri\in-progress\virtual_container\lab4> docker logs "lab4-mysql"
2026-10-23 20:26:02+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 8.4.13-1.el9 started.
2026-10-23 20:26:02+00:00 [Note] [Entrypoint]: Switching to dedicated user 'mysql'
2026-10-23 20:26:02+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 8.4.13-1.el9 started.
2026-10-23 20:26:03+00:00 [Note] [Entrypoint]: Initializing database files
2026-10-23T20:26:03.137419Z 0 [System] [MY-015017] [Server] MySQL Server Initialization - start.
2026-10-23T20:26:03.138405Z 0 [System] [MY-013169] [Server] /usr/sbin/mysqld (mysqld 8.4.13) initializing of server in progress as process 80
2026-10-23T20:26:03.138407Z 0 [System] [MY-015150] [Server] Server version with update: '8.4.13.0'
2026-10-23T20:26:03.144495Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2026-10-23T20:26:03.724769Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2026-10-23T20:26:06.521708Z 6 [Warning] [MY-010453] [Server] root@localhost is created with an empty password ! Please consider switching off the --initialize-insecure option.
2026-10-23T20:26:09.123279Z 0 [System] [MY-015018] [Server] MySQL Server Initialization - end.
2026-10-23 20:26:09+00:00 [Note] [Entrypoint]: Database files initialized
2026-10-23 20:26:09+00:00 [Note] [Entrypoint]: Starting temporary server
2026-10-23T20:26:09.195064Z 0 [System] [MY-015015] [Server] MySQL Server - start.
2026-10-23T20:26:09.430443Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.4.13) starting as process 123
2026-10-23T20:26:09.430446Z 0 [System] [MY-015150] [Server] Server version with update: '8.4.13.0'
2026-10-23T20:26:09.446501Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2026-10-23T20:26:09.728301Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2026-10-23T20:26:10.000641Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
2026-10-23T20:26:10.000695Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
2026-10-23T20:26:10.003581Z 0 [Warning] [MY-011810] [Server] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
2026-10-23T20:26:10.029444Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Socket: /var/run/mysqld/mysqlx.sock
2026-10-23T20:26:10.029637Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.4.13'  socket: '/var/run/mysqld/mysqld.sock'  port: 0  MySQL Community Server - GPL.
2026-10-23 20:26:10+00:00 [Note] [Entrypoint]: Temporary server started.
'/var/lib/mysql/mysql.sock' -> '/var/run/mysqld/mysqld.sock'
2026-10-23 20:26:11+00:00 [Note] [Entrypoint]: Creating database lab4

2026-10-23 20:26:11+00:00 [Note] [Entrypoint]: Stopping temporary server
2026-10-23T20:26:11.663994Z 11 [System] [MY-013172] [Server] Received SHUTDOWN from user root. Shutting down mysqld (Version: 8.4.13).
2026-10-23T20:26:12.370224Z 0 [System] [MY-010910] [Server] /usr/sbin/mysqld: Shutdown complete (mysqld 8.4.13)  MySQL Community Server - GPL.
2026-10-23T20:26:12.370274Z 0 [System] [MY-015016] [Server] MySQL Server - end.
2026-10-23 20:26:12+00:00 [Note] [Entrypoint]: Temporary server stopped

2026-10-23 20:26:12+00:00 [Note] [Entrypoint]: MySQL init process done. Ready for start up.

2026-10-23T20:26:12.677358Z 0 [System] [MY-015015] [Server] MySQL Server - start.
2026-10-23T20:26:12.890504Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 8.4.13) starting as process 1
2026-10-23T20:26:12.890510Z 0 [System] [MY-015150] [Server] Server version with update: '8.4.13.0'
2026-10-23T20:26:12.895603Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2026-10-23T20:26:13.122282Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2026-10-23T20:26:13.348941Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
2026-10-23T20:26:13.349039Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
2026-10-23T20:26:13.354545Z 0 [Warning] [MY-011810] [Server] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
2026-10-23T20:26:13.394092Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Bind-address: '::' port: 33060, socket: /var/run/mysqld/mysqlx.sock
2026-10-23T20:26:13.394219Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '8.4.13'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306MySQL Community Server - GPL.
PS C:\Users\andri\in-progress\virtual_container\lab4> docker logs "lab4-postgres"
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
2026-10-23 18:47:11.479 UTC [35] WARNING:  no usable system locales were found
performing post-bootstrap initialization ... ok
initdb: warning: enabling "trust" authentication for local connections
initdb: hint: You can change this by editing pg_hba.conf or using the option -A, or --auth-local and --auth-host, the next time you run initdb.
syncing data to disk ... ok


Success. You can now start the database server using:

    pg_ctl -D /var/lib/postgresql/data -l logfile start

waiting for server to start....2026-10-23 18:47:12.234 UTC [41] LOG:  starting PostgreSQL 17.11 on x86_64-pc-linux-musl, compiled by gcc (Alpine 15.2.0) 15.2.0, 64-bit
2026-10-23 18:47:12.236 UTC [41] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2026-10-23 18:47:12.244 UTC [44] LOG:  database system was shut down at 2026-10-23 18:47:11 UTC
2026-10-23 18:47:12.248 UTC [41] LOG:  database system is ready to accept connections
 done
server started
CREATE DATABASE


/usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*

waiting for server to shut down....2026-10-23 18:47:12.385 UTC [41] LOG:  received fast shutdown request
2026-10-23 18:47:12.387 UTC [41] LOG:  aborting any active transactions
2026-10-23 18:47:12.389 UTC [41] LOG:  background worker "logical replication launcher" (PID 47) exited with exit code 1
2026-10-23 18:47:12.389 UTC [42] LOG:  shutting down
2026-10-23 18:47:12.392 UTC [42] LOG:  checkpoint starting: shutdown immediate
2026-10-23 18:47:12.518 UTC [42] LOG:  checkpoint complete: wrote 926 buffers (5.7%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.016 s, sync=0.104 s, total=0.129s; sync files=301, longest=0.002 s, average=0.001 s; distance=4266 kB, estimate=4266 kB; lsn=0/191E818, redo lsn=0/191E818
2026-10-23 18:47:12.522 UTC [41] LOG:  database system is shut down
 done
server stopped

PostgreSQL init process complete; ready for start up.

2026-10-23 18:47:12.608 UTC [1] LOG:  starting PostgreSQL 17.11 on x86_64-pc-linux-musl, compiled by gcc (Alpine 15.2.0) 15.2.0, 64-bit
2026-10-23 18:47:12.608 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2026-10-23 18:47:12.608 UTC [1] LOG:  listening on IPv6 address "::", port 5432
2026-10-23 18:47:12.614 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2026-10-23 18:47:12.619 UTC [57] LOG:  database system was shut down at 2026-10-23 18:47:12 UTC
2026-10-23 18:47:12.623 UTC [1] LOG:  database system is ready to accept connections




PS C:\Users\andri\in-progress\virtual_container\lab4> docker exec -it "lab4-mysql" mysql -uroot -p lab4
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 9
Server version: 8.4.13 MySQL Community Server - GPL

Copyright (c) 2000, 2026, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> CREATE TABLE student_record (
    -> id INTEGER PRIMARY KEY,
    -> full_name VARCHAR(100),
    -> group_code VARCHAR(30)
    -> );
Query OK, 0 rows affected (0.03 sec)

mysql> INSERT INTO student_record VALUES (1, 'Andrii Vlasenko', "6.1214-pi-1");
Query OK, 1 row affected (0.01 sec)

mysql> SELECT * FROM student_record;
+----+-----------------+-------------+
| id | full_name       | group_code  |
+----+-----------------+-------------+
|  1 | Andrii Vlasenko | 6.1214-pi-1 |
+----+-----------------+-------------+
1 row in set (0.00 sec)

mysql> exit
Bye

What's next:
    Try Docker Debug for seamless, persistent debugging tools in any container or image → docker debug lab4-mysql
    Learn more at https://docs.docker.com/go/debug-cli/




PS C:\Users\andri\in-progress\virtual_container\lab4> docker exec -it "lab4-postgres" psql -U postgres -d lab4
psql (17.11)
Type "help" for help.

lab4=# CREATE TABLE student_record (
lab4(# id INTEGER PRIMARY KEY,
lab4(# full_name VARCHAR(100),
lab4(# group_code VARCHAR(30)
lab4(# );
CREATE TABLE
lab4=# INSERT INTO student_record VALUES (1, "Andrii Vlasenko", "6.1214-pi");
ERROR:  column "Andrii Vlasenko" does not exist
LINE 1: INSERT INTO student_record VALUES (1, "Andrii Vlasenko", "6....
                                              ^
lab4=# INSERT INTO student_record VALUES (1, 'Andrii Vlasenko', '6.1214-pi');
INSERT 0 1
lab4=# SELECT * FROM student_record;
 id |    full_name    | group_code 
----+-----------------+------------
  1 | Andrii Vlasenko | 6.1214-pi
(1 row)

lab4=# \q

What's next:
    Try Docker Debug for seamless, persistent debugging tools in any container or image → docker debug lab4-postgres
    Learn more at https://docs.docker.com/go/debug-cli/




PS C:\Users\andri\in-progress\virtual_container\lab4> docker inspect "lab4-mysql" "lab4-postgres" --format '{{.Name}} {{.Id}}'
/lab4-mysql acb583e4b778c7ed8a89a814040d6be7c562ea298041e8d542850810be28071b
/lab4-postgres 9a72742ff1a49629495ec509e3e30df683ca12e7f173b036d4085ee53eaf47c5
PS C:\Users\andri\in-progress\virtual_container\lab4> docker volume inspect "lab4-mysql-data" "lab4-postgres-data"
[
    {
        "CreatedAt": "2026-10-23T18:39:03Z",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/lab4-mysql-data/_data",
        "Name": "lab4-mysql-data",
        "Options": null,
        "Scope": "local"
    },
    {
        "CreatedAt": "2026-10-23T18:39:18Z",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/lab4-postgres-data/_data",
        "Name": "lab4-postgres-data",
        "Options": null,
        "Scope": "local"
    }
]




PS C:\Users\andri\in-progress\virtual_container\lab4> docker run -d --name "lab4-mysql" --env-file mysql.env --mount "type=volume,src=lab4-mysql-data,dst=/var/lib/mysql" mysql:8.4                            
Unable to find image 'mysql:8.4' locally
8.4: Pulling from library/mysql
0c9ac1647849: Download complete 
d14dbab65632: Download complete 
65fb9e68a2ac: Download complete 
e99723a85985: Download complete 
1ba383bbcb80: Download complete
ea1749d53e24: Download complete                            
97347cf073b1: Download complete 
0c9ac1647849: Pull complete 
d14dbab65632: Pull complete 
65fb9e68a2ac: Pull complete 
e99723a85985: Pull complete 
1ba383bbcb80: Pull complete 
97347cf073b1: Pull complete 
e8d4024251a9: Pull complete 
4730445dfddd: Pull complete 
ea1749d53e24: Pull complete 
a3274015618b: Pull complete 
Digest: sha256:76f0358884cb92d9a086d24e5671c38048d3fef40f2588703d73eb55392d6b69
Status: Downloaded newer image for mysql:8.4
9c6a4d5be3645672c92514b43b9dff345f2f86ebc24223652ee0618f015710c7
PS C:\Users\andri\in-progress\virtual_container\lab4> docker run -d --name "lab4-postgres" --env-file postgres.env --mount "type=volume,src=lab4-postgres-data,dst=/var/lib/postgresql/data" postgres:17-alpine
Unable to find image 'postgres:17-alpine' locally
17-alpine: Pulling from library/postgres
d5bf1ad711f7: Pull complete 
f5e975d661d7: Pull complete 
7a82a00c713d: Pull complete 
e018eb860c5e: Pull complete 
9098654d3377: Pull complete 
dddde5442af4: Pull complete 
fa5e490e3893: Pull complete 
d6e09b1bfe5f: Pull complete 
694a01b64034: Pull complete 
e22336567ca8: Download complete 
112f26c8faed: Download complete 
Digest: sha256:eee6c6e1b0894fa4fe0075eb054af9fd1cf39a35321c2d4110626cfe506411fb
Status: Downloaded newer image for postgres:17-alpine
72fd6a5docker inspect "lab4-mysql" "lab4-postgres" --format '{{.Name}} {{.Id}}'               
/lab4-mysql 9c6a4d5be3645672c92514b43b9dff345f2f86ebc24223652ee0618f015710c7
/lab4-postgres 72fd6a515ba5a9a0ba32016835153e3a4d58cc966db82352eae0fc145dbb0705




PS C:\Users\andri\in-progress\virtual_container\lab4> docker exec -it "lab4-mysql" mysql -uroot -p lab4   
Enter password:                                      
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.4.13 MySQL Community Server - GPL

Copyright (c) 2000, 2026, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> select * from student_record
    -> ;
+----+-----------------+-------------+
| id | full_name       | group_code  |
+----+-----------------+-------------+
|  1 | Andrii Vlasenko | 6.1214-pi-1 |
+----+-----------------+-------------+
1 row in set (0.00 sec)

mysql> exit
Bye

What's next:
    Try Docker Debug for seamless, persistent debugging tools in any container or image → docker debug lab4-mysql
    Learn more at https://docs.docker.com/go/debug-cli/
PS C:\Users\andri\in-progress\virtual_container\lab4> docker exec -it "lab4-postgres" psql -U postgres -d lab4
psql (17.11)
Type "help" for help.

lab4=# select * from student_record
lab4-# ;
 id |    full_name    | group_code 
----+-----------------+------------
  1 | Andrii Vlasenko | 6.1214-pi
(1 row)

lab4=# \q

What's next:
    Try Docker Debug for seamless, persistent debugging tools in any container or image → docker debug lab4-postgres
    Learn more at https://docs.docker.com/go/debug-cli/




PS C:\Users\andri\in-progress\virtual_container\lab4> docker build -f Dockerfile.volume -t "andriivlas/ubuntu-caddy:2.0" .
[+] Building 1.6s (5/5) FINISHED                                                                                                                             docker:desktop-linux
 => [internal] load build definition from Dockerfile.volume                                                                                                                  0.0s
 => => transferring dockerfile: 151B                                                                                                                                         0.0s
 => [internal] load metadata for docker.io/andriivlas/ubuntu-caddy:1.1                                                                                                       1.0s
 => [internal] load .dockerignore                                                                                                                                            0.0s
 => => transferring context: 69B                                                                                                                                             0.0s
 => [1/1] FROM docker.io/andriivlas/ubuntu-caddy:1.1@sha256:d5f7a93aeb46c323fede3e38ca6f1df0cd5fe4b8ccafda1bc1cb8f3aea5af971                                                 0.0s
 => => resolve docker.io/andriivlas/ubuntu-caddy:1.1@sha256:d5f7a93aeb46c323fede3e38ca6f1df0cd5fe4b8ccafda1bc1cb8f3aea5af971                                                 0.0s
 => exporting to image                                                                                                                                                       0.4s
 => => exporting layers                                                                                                                                                      0.0s
 => => exporting manifest sha256:6fe13800bfc7cc5df0dc245e82971f788097827a24378af0aa3718a8779e8531                                                                            0.0s
 => => exporting config sha256:0175d4183a0d8b6c8f320dfec12491fa75082d2aaf83641b5d78e406eb1c780f                                                                              0.0s
 => => exporting attestation manifest sha256:a3f6159983375f5038906c3491927c167a97e58abd4326d07a1bf61325eba25a                                                                0.0s
 => => exporting manifest list sha256:caa6bf479c873c166f12849fc9158830b36dcb1db83428beb180c7960f71b25f                                                                       0.0s
 => => naming to docker.io/andriivlas/ubuntu-caddy:2.0                                                                                                                       0.0s
 => => unpacking to docker.io/andriivlas/ubuntu-caddy:2.0                                                                                                                    0.3s

View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/l45qr0htnedua2ill0slh88w9
PS C:\Users\andri\in-progress\virtual_container\lab4> docker run -d --name "lab4-auto" -p 8082:80 "andriivlas/ubuntu-caddy:2.0"
a361361f9b5ba4ed820dc6dc28ad3ddde4a097a551e1f99d7434a7ba120b39a2
PS C:\Users\andri\in-progress\virtual_container\lab4> docker inspect "lab4-auto" --format '{{json .Mounts}}'
[{"Type":"volume","Name":"064926735f1d2816d9e2d6ae9f31cbca6ca60cf8b56e070439b96a4586f736af","Source":"/var/lib/docker/volumes/064926735f1d2816d9e2d6ae9f31cbca6ca60cf8b56e070439b96a4586f736af/_data","Destination":"/usr/share/caddy","Driver":"local","Mode":"","RW":true,"Propagation":""}]
PS C:\Users\andri\in-progress\virtual_container\lab4> curl.exe -fsS http://localhost:8082
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Web Page</title>
    </head>
    <body>
        <p>Системи віртуалізації та контейнерізації</p>
        <p>6.1214-пі</p>
        <p>Власенко Андрій</p>
    </body>
</html>
PS C:\Users\andri\in-progress\virtual_container\lab4> docker volume ls -q                                   
fbec6f212e722f5fb99808cbf6bddd56c51d0ad4c24dcfed015f0b21378a40d7
lab4-mysql-data
lab4-postgres-data




PS C:\Users\andri\in-progress\virtual_container\lab4> docker stop "lab4-auto"
lab4-auto
PS C:\Users\andri\in-progress\virtual_container\lab4> docker rm -v "lab4-auto"
lab4-auto
PS C:\Users\andri\in-progress\virtual_container\lab4> docker volume create "lab4-content"
lab4-content
PS C:\Users\andri\in-progress\virtual_container\lab4> docker run -d --name "lab4-own" -p 8083:80 -v "lab4-content:/usr/share/caddy/" "andriivlas/ubuntu-caddy:2.0"
a63ef4658c447fb4a6a5c3ff23ffffa2ee2d9ed0033c2768f8cb883695785019
PS C:\Users\andri\in-progress\virtual_container\lab4> docker inspect "lab4-own" --format '{{json .Mounts}}'
[{"Type":"volume","Name":"lab4-content","Source":"/var/lib/docker/volumes/lab4-content/_data","Destination":"/usr/share/caddy","Driver":"local","Mode":"z","RW":true,"Propagation":""}]
PS C:\Users\andri\in-progress\virtual_container\lab4> curl.exe -fsS http://localhost:8083
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Web Page</title>
    </head>
    <body>
        <p>Системи віртуалізації та контейнерізації</p>
        <p>6.1214-пі</p>
        <p>Власенко Андрій</p>
    </body>
</html>




PS C:\Users\andri\in-progress\virtual_container\lab4> docker push "andriivlas/ubuntu-caddy:2.0"
The push refers to repository [docker.io/andriivlas/ubuntu-caddy]
7fe3d7cc53d9: Pushed 
44136fa355b3: Already exists 
7ce042bc5bb2: Layer already exists 
f2b4ef06ff01: Layer already exists 
e9dd11b0d5de: Layer already exists 
bf5331bab692: Layer already exists 
2.0: digest: sha256:bd17215d838750843f0fe238dc754011cc215479c0be16c3a118ba78393a2872 size: 856
PS C:\Users\andri\in-progress\virtual_container\lab4> docker pull "andriivlas/ubuntu-caddy:2.0"
2.0: Pulling from andriivlas/ubuntu-caddy
Digest: sha256:bd17215d838750843f0fe238dc754011cc215479c0be16c3a118ba78393a2872
Status: Image is up to date for andriivlas/ubuntu-caddy:2.0
docker.io/andriivlas/ubuntu-caddy:2.0
PS C:\Users\andri\in-progress\virtual_container\lab4> docker image inspect "andriivlas/ubuntu-caddy:2.0" --format '{{json .RepoDigests}}'
["andriivlas/ubuntu-caddy@sha256:bd17215d838750843f0fe238dc754011cc215479c0be16c3a118ba78393a2872"]




PS C:\Users\andri\in-progress\virtual_container\lab4> docker run -d --name "lab4-memory" --tmpfs /scratch:size=16m python:3.12-slim sleep infinity
Unable to find image 'python:3.12-slim' locally
3.12-slim: Pulling from library/python
5c397e4307db: Pull complete 
f2be67225471: Pull complete 
be6443c06d3c: Pull complete 
b524bb3aba73: Pull complete 
9a229e332182: Download complete 
a19c1c598c82: Download complete 
Digest: sha256:a0f57064cbdcd6285fa45f51237ab0b35ea8ebaed06a1f5973e89e19dfb86704
Status: Downloaded newer image for python:3.12-slim
8886ae47ba17eec91e3c17a213f36b082ab508d7e436aa6dc97bee4b7cb4c648
PS C:\Users\andri\in-progress\virtual_container\lab4> docker exec "lab4-memory" sh -c 'echo temporary > /scratch/check.txt'
PS C:\Users\andri\in-progress\virtual_container\lab4> docker exec "lab4-memory" cat /scratch/check.txt                     
temporary
PS C:\Users\andri\in-progress\virtual_container\lab4> docker inspect "lab4-memory" --format '{{.Id}}' 
8886ae47ba17eec91e3c17a213f36b082ab508d7e436aa6dc97bee4b7cb4c648
PS C:\Users\andri\in-progress\virtual_container\lab4> docker stop "lab4-memory"                      
lab4-memory
PS C:\Users\andri\in-progress\virtual_container\lab4> docker start "lab4-memory"
lab4-memory
PS C:\Users\andri\in-progress\virtual_container\lab4> docker inspect "lab4-memory" --format '{{.Id}}'
8886ae47ba17eec91e3c17a213f36b082ab508d7e436aa6dc97bee4b7cb4c648
PS C:\Users\andri\in-progress\virtual_container\lab4> docker exec "lab4-memory" sh -c 'test ! -e /scratch/check.txt && echo "file absent"'
file




PS C:\Users\andri\in-progress\virtual_container\lab4> docker stop "lab4-own"
lab4-own
PS C:\Users\andri\in-progress\virtual_container\lab4> mkdir -p backup


    Каталог: C:\Users\andri\in-progress\virtual_container\lab4


Mode                 LastWriteTime         Length Name                                                                                                                           
----                 -------------         ------ ----                                                                                                                           
d-----        24.10.2026     19:18                backup                                                                                                                         


PS C:\Users\andri\in-progress\virtual_container\lab4> docker run --rm --mount "type=volume,src=lab4-content,dst=/data,readonly" --mount "type=bind,src=$PWD/backup,dst=/backup" python:3.12-slim tar -C /data -cf /backup/html.tar .
PS C:\Users\andri\in-progress\virtual_container\lab4> docker volume create "lab4-restored"
lab4-restored
PS C:\Users\andri\in-progress\virtual_container\lab4> docker run --rm --mount "type=volume,src=lab4-restored,dst=/data" --mount "type=bind,src=$PWD/backup,dst=/backup,readonly" python:3.12-slim tar -C /data -xf /backup/html.tar
PS C:\Users\andri\in-progress\virtual_container\lab4> docker run -d --name "lab4-restores-web" -p 8084:80 --mount "type=volume,src=lab4-restored,dst=/usr/share/caddy" "andriivlas/ubuntu-caddy:2.0"                               
1692b23b811f18dfc5a6e094a61c6a5d14390a3f534009ccd4555105caa4025f
PS C:\Users\andri\in-progress\virtual_container\lab4> curl.exe -fsS http://localhost:8084
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Web Page</title>
    </head>
    <body>
        <p>Системи віртуалізації та контейнерізації</p>
        <p>6.1214-пі</p>
        <p>Власенко Андрій</p>
    </body>
</html>




PS C:\Users\andri\in-progress\virtual_container\lab4> docker volume ls
DRIVER    VOLUME NAME
local     lab4-content
local     lab4-mysql-data
local     lab4-postgres-data
local     lab4-restored
PS C:\Users\andri\in-progress\virtual_container\lab4> docker ps -a --filter "volume=lab4-content"
CONTAINER ID   IMAGE                         COMMAND                  CREATED       STATUS                      PORTS     NAMES
a63ef4658c44   andriivlas/ubuntu-caddy:2.0   "caddy file-server -…"   2 hours ago   Exited (0) 45 minutes ago             lab4-own
PS C:\Users\andri\in-progress\virtual_container\lab4> docker ps -a --filter "volume=lab4-mysql-data"
CONTAINER ID   IMAGE       COMMAND                  CREATED        STATUS                    PORTS     NAMES
9c6a4d5be364   mysql:8.4   "docker-entrypoint.s…"   21 hours ago   Exited (0) 21 hours ago             lab4-mysql
PS C:\Users\andri\in-progress\virtual_container\lab4> docker ps -a --filter "volume=lab4-postgres-data"
CONTAINER ID   IMAGE                COMMAND                  CREATED        STATUS                    PORTS     NAMES
72fd6a515ba5   postgres:17-alpine   "docker-entrypoint.s…"   21 hours ago   Exited (0) 21 hours ago             lab4-postgres
PS C:\Users\andri\in-progress\virtual_container\lab4> docker ps -a --filter "volume=lab4-restored"     
CONTAINER ID   IMAGE                         COMMAND                  CREATED          STATUS          PORTS                                     NAMES
1692b23b811f   andriivlas/ubuntu-caddy:2.0   "caddy file-server -…"   19 minutes ago   Up 19 minutes   0.0.0.0:8084->80/tcp, [::]:8084->80/tcp   lab4-restores-web
PS C:\Users\andri\in-progress\virtual_container\lab4> docker stop lab4-memory 
lab4-memory
PS C:\Users\andri\in-progress\virtual_container\lab4> docker stop lab4-restores-web
lab4-restores-web
PS C:\Users\andri\in-progress\virtual_container\lab4> docker rm lab4-postgres lab4-mysql lab4-own lab4-memory lab4-restores-web
lab4-postgres
lab4-mysql
lab4-own
lab4-memory
lab4-restores-web
PS C:\Users\andri\in-progress\virtual_container\lab4> docker volume rm lab4-mysql-data lab4-postgres-data lab4-content lab4-restored
lab4-mysql-data
lab4-postgres-data
lab4-content
lab4-restored