# uiserver-node
Basic UI server on node.js

# HOW-TO

Versions:

node.exe v0.12.4
npm: 1.4.9


1. Install Node and NPM

a) get node.exe from nodejs.org (-> sw\nodejs\node.exe)
b) get npm from http://nodejs.org/dist/npm/ (unzip to sw\nodejs\ so that node.exe and npm.cmd are in same dir)
c) add sw\nodejs to path
d) npm update


See: http://abdelraoof.com/blog/2014/11/11/install-nodejs-without-admin-rights/

2. Some global prerequisites:

npm install -g grunt grunt-cli bower

3. application

a) git clone git@github.com:vvvy/uiserver-node.git
b) cd uiserver-node
c) npm install

4. Additional

a) Jade
npm install jade --save

b) Bower

npm install -g bower
npm install grunt-bower-concat --save-dev

c) Foundation
bower install git://github.com/zurb/bower-foundation

d) nodemon
npm install -g nodemon
npm install grunt-nodemon --save-dev


FYI
https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make
