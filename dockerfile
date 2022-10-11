FROM node:16

#Create app directory
RUN mkdir -p /usr/src/app

# Create working directory
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Install app dependencies
RUN npm install -g forever

RUN npm install

# Expose port
EXPOSE 3000

# Start npm
#add external parameter for the run command ex I should be able to push external parameter as staging or dev or production - Jay
CMD [ "npm", "start" ]
