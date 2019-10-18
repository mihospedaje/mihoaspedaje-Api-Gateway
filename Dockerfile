FROM node:carbon-slim

# Create app directory
WORKDIR /git/user-api

# Install app dependencies
COPY package.json /git/user-api/
RUN npm install

# Bundle app source
COPY . /git/user-api/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]