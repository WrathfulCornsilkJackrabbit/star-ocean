# Use official node image as the base image
FROM node:lts-alpine as build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


# Install all the dependencies
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Expose port 8080
EXPOSE 8080

# Generate and run the server
CMD [ "node", "dist/app.js" ]
