# Note Taker Starter Code

Note Taker is a simple web application that allows users to write and save notes. It provides an easy way to organize thoughts and keep track of tasks that need to be completed.

![Note Taker Screenshot](./screenshot.png)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Landing Page: The landing page displays a link to the notes page where users can view and write notes.
- Notes Page: On the notes page, users can see existing notes listed in the left-hand column, and they can enter a new note's title and text in the right-hand column.
- Saving Notes: When users enter a new note title and text, a Save icon appears at the top of the page. Clicking on it saves the new note, and it appears in the left-hand column with the other existing notes.
- Viewing Notes: Clicking on an existing note in the list displays that note's content in the right-hand column for viewing.
- Deleting Notes: Users can delete a note by clicking on the delete button associated with the note in the left-hand column.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Data Storage: JSON file (db.json)

## Getting Started

Follow the instructions below to get the application running on your local machine.

1. Clone the repository:
'''bash
git clone
cd note-taker-app
2. Install Dependencies:
npm install
node server.js
3. Open your web browser and navigate to the localhost page based on the Port# you picked.

## Usage

1. Landing Page:

The landing page displays a "Get Started" button. Clicking on this button will take you to the notes page.

2. Notes Page:

On the notes page, you can see the list of existing notes on the left-hand side.
To create a new note, enter the note's title and text in the fields on the right-hand side.
Click the Save icon in the navigation to save the new note. The note will appear in the left-hand column.
To view the content of an existing note, click on the note's title in the left-hand column.

3. Deleting Notes:

To delete a note, click on the delete button (trash icon) associated with the note in the left-hand column. This will only clear the notes on the right side of the page.

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to create an issue or submit a pull request.

## Liscense

This project is licensed under the MIT license.
