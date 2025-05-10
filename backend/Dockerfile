FROM node:22-bookworm AS base

FROM base AS installer
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 expressjs
RUN adduser --system --uid 1001 expressjs

COPY --from=installer /app .

RUN chown -R expressjs:expressjs /app

USER expressjs
