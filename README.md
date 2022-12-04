# Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Requirement
Using technologies React/node create a web page for maintaining a list of tasks with a title, description, and due date.

It should be possible to:
- Add a task
- Update a task
- Delete a task
- Mark task as completed.

**Tasks should be saved into a database and additionally implement a system to email reminders.**


## FrontEnd

**[Port 3000] Task listing and management**
- `Checkbox` : Complete the task or not
- `"+"` button: Add Row
- `"S"` button: Save Row
- `"X"` button: Delete Row

## Commands:
```sh
"start": "react-scripts start"
"build": "react-scripts build"
"test": "react-scripts test"
"eject": "react-scripts eject"
```

## BackEnd
**[Port: 3001] The other project build with node.js**

## Features
- `'/'` : For Testing Only, check server is started.
- `'/get_all_items'`: Get all items data from database by GET Method.
- `'/update_all_items'`: Post JSON format data to update database by POST Method.
- `'/delete_item'`: Post element id to delete the record by POST Method.
- `'/sendEmail'`: Post email details to backend to send email by POST Method.

## Commands:
```sh
"start": "node app.js",
"dev": "nodemon app.js"
```

