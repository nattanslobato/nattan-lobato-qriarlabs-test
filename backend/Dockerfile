# Build
FROM node:lts-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./
RUN yarn build

# Server
FROM node:lts-alpine

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/yarn.lock ./
COPY --from=build /app/dist ./
COPY --from=build /app/prisma/schema.prisma ./prisma/
COPY --from=build /app/prisma/migrations/ ./prisma/

COPY --from=build /app/entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]

EXPOSE 4000

CMD ["yarn", "dev"]
