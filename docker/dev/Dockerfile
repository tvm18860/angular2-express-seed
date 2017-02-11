FROM node:6.9

# Create unpriveleged user
RUN useradd --user-group --create-home --shell /bin/false app

WORKDIR /opt/app

COPY package.json ./package.json

RUN chown -R app:app /opt/*

USER app

# Port 4200 used by angular-cli server
# port 49153 for live browser reload
EXPOSE 4200
EXPOSE 49153

RUN npm install

# Copy the app into the image, doing this after the npm intall
# saves image build time as it may avoid re-running the install
USER root
COPY dev.js ./dev.js
COPY angular-cli.json ./angular-cli.json
COPY karma.conf.js ./karma.conf.js
COPY public ./public/
COPY server ./server/
RUN chown -R app:app /opt/*
USER app

CMD ["npm", "run", "start-docker-dev"]
