# Step 1: Use the official Node.js image as a base
FROM node:18-alpine AS builder

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Step 4: Copy the rest of the application files
COPY . .

# Step 5: Build the Next.js app
RUN npm run build

# Step 6: Expose the app on port 3000
EXPOSE 3000

# Step 7: Run the Next.js app in production mode
CMD ["npm", "run", "start"]
