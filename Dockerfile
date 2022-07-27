#FROM node:12.13-alpine As development
#
#WORKDIR /usr/src/app
#
#COPY package*.json ./
#
#RUN npm install
#
#COPY . .
#
#EXPOSE 8000
#
#RUN npm run build
#
#RUN npm run start:prod
#
#



FROM rabbitmq

# Define environment variables.
ENV RABBITMQ_USER=user
ENV RABBITMQ_PASSWORD=user
ENV RABBITMQ_PID_FILE=/var/lib/rabbitmq/mnesia/rabbitmq
CMD ["ls"]
ADD ./init.sh /init.sh
RUN chmod +x /init.sh
EXPOSE 15672

# Define default command
CMD ["ls","/init.sh"]
