#!/bin/sh
set -ex

yarn prisma db push

exec "$@"
