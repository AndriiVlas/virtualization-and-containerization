FROM ubuntu:24.04
LABEL \
    org.opencontainers.image.name="Andrii Vlasenko" \
    org.opencontainers.image.group="6.1214-пі" \
    org.opencontainers.image.version="1.0"
RUN apt-get update && apt-get install -y --no-install-recommends caddy \
    && rm -rf /var/lib/apt/lists/*
COPY index.html /usr/share/caddy/
EXPOSE 80
CMD ["caddy", "file-server", "--root", "/usr/share/caddy", "--listen", ":80"]