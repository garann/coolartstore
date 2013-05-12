# CoolArtStore

A demo project showing the minimum pieces of designing an application using Node.js as a mock platform.



This repository contains everything you need to get the demo running locally on a machine with Node already installed. If you need help installing Node, follow the instructions on [the project's site](http://nodejs.org/). After cloning this repo to your machine, you can start the server by going to the directory you cloned it to in your terminal or command line and typing

```node server.js```

To see the demo in action, navigate to http://localhost:3000 in your browser. You may need to open port 3000/tcp and 3000/udp on your server by changing the machine's firewall rules. If you want to use a different port, change the app.listen line in server.js to the port number of your preference and make sure the appropriate port is openened on the firewall. Ports higher than 1024 are historically "unprivileged" so you should not have to run coolartstore as a superuser. Ports > 1024 should be accessible to any standard user.  

To tweak and make changes, just edit the relevant files, save, and restart the server. Use ^C to stop the current execution, then `node server.js` again to restart.
