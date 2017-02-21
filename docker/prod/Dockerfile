FROM node:6.9

# Create unpriveleged user
RUN useradd --user-group --create-home --shell /bin/false app

WORKDIR /opt/app

COPY package.json ./package.json

RUN chown -R app:app /opt/*

USER app

# Expose default port used by Express
EXPOSE 3000

# Install only essential packages. 
RUN npm install --production

# Copy the app into the image, doing this after the npm intall
# saves image build time as it may avoid re-running the install
USER root
COPY app.js ./app.js
COPY .angular-cli.json ./.angular-cli.json
COPY public ./public/
COPY server ./server/
RUN chown -R app:app /opt/*
USER app

RUN ./node_modules/@angular/cli/bin/ng build --prod
CMD ["npm", "start"]
