
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

To clone just git clone the repo

When it is downloaded just go inside both the server and client folder and run yarn install

When in both yarn installed run command -- yarn start

It should be run inside both server and client. The server should be run first.

I am using a local MongoDB Server on Mac. It is MongoDb version v6.00 


## Screenshots
Large Dsiplay(UHD) Screenshots

1. Board Sidepanel

![Board Sidepanel](https://github.com/tanmayscuderia/tasks/assets/26951983/86d713bc-c9cf-46cd-8a7c-6e385546da37)

2. Task Modal

 ![Task Modal](https://github.com/tanmayscuderia/tasks/assets/26951983/d18dcdc6-57b6-42ff-a2b9-505ad29e0228)

3. Login

![Login](https://github.com/tanmayscuderia/tasks/assets/26951983/883f6a49-46aa-4855-b194-a258027aa4ff)

4. Sign Up

![Sign Up](https://github.com/tanmayscuderia/tasks/assets/26951983/9d3c9476-597c-4ec6-840c-7934924e4f7b)

Laptop Screenshots

1. Board Sidepanel

![Board Sidepanel](https://github.com/tanmayscuderia/tasks/assets/26951983/4a1dbfb9-b856-4ecc-a175-42bff6e1522c)

2. Task Modal

 ![Task Modal](https://github.com/tanmayscuderia/tasks/assets/26951983/05f73b9e-6b73-4a74-9472-e340898c628f)

3. Login Laptop

![Login](https://github.com/tanmayscuderia/tasks/assets/26951983/527b752b-652e-4bdd-83c1-9291964d9c45)

4. Sign Up Laptop

![Sign Up](https://github.com/tanmayscuderia/tasks/assets/26951983/6dcf5a42-dcf6-4cb4-b9bd-e6b510869867)

Mobile Screenshots

1. Sidepanel

![Sidepanel](https://github.com/tanmayscuderia/tasks/assets/26951983/a22cdc6f-83d3-44f6-b82c-7550ce4bc2b8)

2. Task Modal

 ![Task Modal](https://github.com/tanmayscuderia/tasks/assets/26951983/d94b21de-8d87-4927-adb6-9c2c8577185c)

3. Login Mobile

![Login](https://github.com/tanmayscuderia/tasks/assets/26951983/932f7941-16b5-46a0-8537-f87e5d4c2e18)

4. Sign Up Mobile

![Sign Up](https://github.com/tanmayscuderia/tasks/assets/26951983/e3b307b4-7cf7-4348-ac9d-9fbc166da85c)

5. Board 1
![Board 1](https://github.com/tanmayscuderia/tasks/assets/26951983/9942d8bd-e07b-457c-b621-375f23105a3f)

6. Board Scrollable
![Board](https://github.com/tanmayscuderia/tasks/assets/26951983/05df5b48-c220-4987-8eac-cf354457086f)
