#Specify a base image
#In docker community, alpine means a image that we can get as small as possible 
#Install some dependencies
FROM node:alpine

# We have to specify a work directory. All our files/folders in local system will be located in this directory of the container. 
WORKDIR /usr/app

#The container file system will not have the package.json/the code that we have on our local system. Hence we have to copy that by using following command. 
COPY ./package.json ./
RUN npm install
COPY ./ ./

#Set up a default command

CMD ["npm","start"]

#Port mapping ports dont have to be identical. Port mapping should be done at runtime.