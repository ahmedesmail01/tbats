# Use the official Node.js LTS Alpine base image
FROM node:20-alpine AS base

# Set the working directory
WORKDIR /app

# First copy only files needed for installation
COPY package.json package-lock.json ./

# Install dependencies with cache mounting
RUN --mount=type=cache,target=/root/.npm \
    npm ci --only=production
# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN --mount=type=cache,target=/root/.npm \
    npm run build

# Start a new stage for the production image
FROM node:20-alpine AS production

# Set the working directory
WORKDIR /app

# Copy only the necessary production files
COPY --from=base /app/package.json /app/package-lock.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.mjs ./

# Install only production dependencies
RUN npm ci --only=production

# Set and expose port
ARG APP_PORT=5556
ENV PORT=$APP_PORT
EXPOSE $PORT

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:$PORT || exit 1

CMD ["npm", "start"]