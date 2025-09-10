#!/bin/sh
set -ex

# Aguarda o banco ficar disponível
until nc -z -v -w30 postgres-solidariza 5432
do
  echo "Aguardando o banco de dados postgres-solidariza na porta 5432..."
  sleep 2
done

yarn prisma db push

exec "$@"