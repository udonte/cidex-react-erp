FROM node:18 as build-stage

# Set environment variable to increase Node.js memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"

WORKDIR /app

COPY package.json /app/

RUN npm install 

COPY ./ /app/


ENV REACT_APP_EXCEED_BACKEND_BASE_URL=https://exceed-backend.55k1k72t6e80c.eu-west-3.cs.amazonlightsail.com/api/v1/


RUN npm run build

FROM nginx:alpine

COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]