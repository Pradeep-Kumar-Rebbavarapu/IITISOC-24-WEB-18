FROM node:21

# Set the working directory
WORKDIR /server

# Copy package.json and package-lock.json
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the ports needed by mediasoup
EXPOSE 4444
EXPOSE 3016 

# Start the server
CMD ["yarn", "devl"]
