#Use the existing docker image as a base, This is more like a OS that comes with your brand new system.
From alpine

#Download and install dependency, This command is alpine's and has nothing to do with Docker. This is similar to installing chrome.
RUN apk add --update redis

#RUN apk add --update gcc


#Tell the image what to do when it starts as a container
CMD ["redis-server"]