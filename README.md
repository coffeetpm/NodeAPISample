# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# The workflow and layer

######### Front End #########


Port:3000

Index

-----Banner

-----Main

---------TaskTable

------------------TaskFrom

--------------------------SetData

--------------------------DelData

--------------------------Email

--------------------------TaskData (For Local Test without backend api)


Checkbox :  Complete the task or not

"+" button: Add Row

"S" button: Save Row

"X" button: Delete Row

"Refresh" button: Grep the most update data from server side API


Command:

"start": "react-scripts start",

"build": "react-scripts build",

"test": "react-scripts test",

"eject": "react-scripts eject"



######### Back End #########


Port: 3001

The other project build with node.js

'/'     :               For Testing Only, check server is started.

'/get_all_items':       Get all items data from database by GET Method.

'/update_all_items':    Post JSON format data to update database by POST Method.

'/delete_item':         Post element id to delete the record by POST Method.

'/sendEmail':           Post email details to backend to send email by POST Method.


Command:

"start": "node app.js",

"dev": "nodemon app.js"
