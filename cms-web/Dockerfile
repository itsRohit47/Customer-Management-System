FROM node:alpine

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app  

# Copy the current directory contents into the container at /usr/src/app
COPY . /usr/src/app  

# Install the Angular CLI globally
RUN npm install -g @angular/cli  

# Install the project dependencies
RUN npm install  

# Start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0"]