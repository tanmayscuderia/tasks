
# Task Management

In this I have tried to tackle the full stack task as given and created a task management app.

The app has login, signup features with token genertaion and authentication

The app has a sidebar which has the logout button, favourites and private sections

The button next to Private heading creates the boards and if you set the start on the right panel as selected it will also be shown in the favourites section

The panel on the right side is the board. In it has a description and main heading which is the board name you may edit it by clciking on it and it will save the new name. It will be reflected on the side panel also

Clicking on add section allows you to add tasks and you may rename the section to whatever you want just by clicking on it. It gives a great flexibility and as suggested in task to have filters based on type we have it here. It filters tasks by section you may rename it to 'To Do', 'In Progress' etc

On clicking the add icon a task is created under that section.

On clicking the task it opens a pop modal which shows when was the task created with the heading you may modify the heading by editing it just by clicking on it. It will also be reflected in the card when the modal is closed.

The description tag has a good editor with capibiliteis of adding paragraph style heading , bold text and other features

This uses mongodb to store the data and is a full stack app based on MERN stack.

The UI is responsive and works across devices.


## Demo

To build you must have mongodb running locally the .env file in server has the path on which it should run you may modify it

To clone hust git clone the repo

When it is downloaded just go inside both the server and client folder and run yarn install

When in both yarn installed run command -- yarn start

It should be run inside both server and client. The server should be run first

