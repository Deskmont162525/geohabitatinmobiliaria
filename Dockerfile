FROM node:16.16.0-alpine3.16
ENV NODE_ENV=production

RUN mkdir -p /usr/src/app

# Set working directory 
WORKDIR /usr/src/app

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./ ./

# Install dependencies
RUN npm i -g npm@9.1.1
RUN npm i --legacy-peer-deps --production

# Build app
RUN npm run build

#SET PORT
ENV PORT 30003

# Expose the listening port
EXPOSE 30003

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app
CMD [ "npm", "start" ]

#sudo docker build -t ag-gestor-beneficios .
#sudo docker run -d -p 30003:30003 ag-gestor-beneficios