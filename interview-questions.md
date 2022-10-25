# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: If you forgot the foreign key, you'll be able to add it by doing a migration. I do not remember wha the name of the foreign key is, but I'll have a better understanding after I do more research. The foreign key helps to connect two tables together, which I believe would be on the Student model

Researched answer: If you forgot the foreign key, you'll be able to add it by doing a migration. The name of the foreign key is a unique ID for each student that will be different from the ID in the main table. The foreign key helps to connect two tables together, which would be on the Student model.

2. Which RESTful routes must always be passed params? Why?

Your answer: The restful routes are index, show, create, update, destroy, new, and edit. The restful routes that require params being passed are: show, update, destroy, and edit. This is because in order to show, update, destroy, or edit, you must pass params on one particular item by using the items unique ID.

Researched answer: The restful routes are index, show, create, update, destroy, new, and edit. The restful routes that require params being passed are: show, update, destroy, and edit. This is because in order to show, update, destroy, or edit, you must pass params on one particular item by using the items unique ID. To find the particular item params[:id] is used.


3. Name three rails generator commands. What is created by each?

Your answer: The three rails generate commands are:

$ rail generate model, this will create a new table
$ rails generate migration, this updates or makes changes to the database 
$ rails generate resource... this is something that creates what we want to have for each item... for example name:string 

Researched answer:

The three rails generate commands are:

$ rail generate model, this will create a new table
$ rails generate migration, this updates or makes changes to the database 
$ rails generate resource, this creates a resource in the routes.rb file


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
action: "GET" location: /students -> index -> displays a full list of items 

action: "POST" location: /students
action: "POST" location: /students -> create -> adding a new content into a DB

action: "GET" location: /students/new
action: "GET" location: /students/new -> new -> displays the form that user can fill out

action: "GET" location: /students/2
action: "GET" location: /students/2 -> show -> shows us a details of whatever student with the ID = 2 is 

action: "GET" location: /students/2/edit
action: "GET" location: /students/2/edit -> edit ->  displays a form, where user can update info about student with id:2

action: "PATCH" location: /students/2
action: "PATCH" location: /students/2 -> update -> the user can update existing info about student with id:2. The user can only change one thing (Ex.: find student with id_2 and update Last Name only)

action: "DELETE" location: /students/2
action: "DELETE" location: /students/2 -> destroy -> removing data


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- as a user i can click a functioning link to see my to do list
- as a user i can see a heading called To Do List
- as a user I can see various tasks that have been added to the list
- as a user I can edit the current list
- as a user I can add more items to the list
- as a user I can delete items from the list
- as a user I can click a button for each task I am currently working on
- as a user i can click a button to notify that I have completed a task
- as a user I will be routed to the home page/taskpage once a task has been completed
- as a user I can see the progress of my to do list