# microFE-single-spa
A microfrontend demo based on single-spa which to show two angular apps running in different routes and lazy load a vue parcel

# How to Run
* install  an global static server ```npm install -g serve```
* start app1: ```cd my-app && npm install && npm run serve:single-spa```
* start app2: ```cd my-app2 && npm install && npm run serve:single-spa```
* start parcel app: ```cd my-parcel && npm install && npm run serve```
* start root html (root dir) : ```npm run start```
visit **localhost:4200/app1** in your browser