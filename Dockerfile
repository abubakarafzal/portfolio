# Local development container. Production is a static build deployed to
# GitHub Pages by .github/workflows/deploy.yml — this image is only for
# running the dev server in a reproducible environment.

FROM node:20-alpine

WORKDIR /app

# Copy the manifests first so the dependency layer is cached independently
# of the source, and install from the lockfile for a reproducible tree.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
