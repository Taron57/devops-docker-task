   # Use an official Node.js runtime as a parent image
   FROM node:18-alpine

   # Set the working directory in the container
   WORKDIR /app

   # Copy package.json and package-lock.json to the container
   COPY package*.json ./

   # Install dependencies
   RUN npm install

   # Copy the rest of the application code to the container
   COPY . .


   # Build the React app
   RUN npm run build

   # Expose the port the app runs on
   EXPOSE 3000

   # Command to run the application
   CMD ["npm", "start", "run", "build"]