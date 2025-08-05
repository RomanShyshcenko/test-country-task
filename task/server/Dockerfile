# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json /app
COPY yarn.lock /app

# Install the Nest.js CLI
RUN yarn global add @nestjs/cli
# Install dependencies
RUN yarn

# Copy the rest of the application code
COPY . /app

# Expose the port that the app runs on
EXPOSE 3000

# Don't run build here as we'll run it in the command
CMD ["yarn", "start:dev"]
