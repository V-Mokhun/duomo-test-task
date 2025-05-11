FROM node:22-bookworm AS base
WORKDIR /app

FROM base AS installer
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

FROM base AS builder
COPY --from=installer /app/node_modules ./node_modules
COPY . .
RUN npm install -g pnpm
RUN pnpm run build

FROM base AS runner
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json .

RUN addgroup --system --gid 1001 expressjs
RUN adduser --system --uid 1001 expressjs

RUN chown -R expressjs:expressjs /app

USER expressjs
