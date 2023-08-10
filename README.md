Message Generator
===============================================

**Prerequisites**

- NPM

**Getting Started**

1) Ensure all prerequisites are installed by checking their versions using your terminal 
    &rarr; NPM: `npm -v`

2) Clone this repository `git clone https://github.com/Freddyreza53/message-template-generator.git` (to the folder you want to work out of locally)

>**NOTE:** Double check you are in the correct folder before moving on to the next step. 

3) Run `npm install` in your terminal

4) Run `npm start` in your VSCode terminal or in your preferred IDE.

5) Finally have fun generating messages!

**Overview**

I used descriptive placeholder variables throughout each template, and also instructed the user to use the same variables when creating a custom template, in order to be able to consistently and dynamically replace them with the selected guest and company information. With this in mind, I created 3 dropdowns using data from the JSON files for the user to be able to select from. The generator then takes all of the user inputs and replaces the placeholder variables with the information from the selected items. Following the example given, the user can create a custom message template to add to the list of templates to later use as well. 

**What Language and Why?**

I mainly used Javascript/React.js and Redux. I chose to use these because that is what I am most familiar with and given the time alloted, it was the language I could create a solution with the fastest. When working with React, prop drilling can get pretty out of hand and isn't best practice when it comes to development. I chose to use Redux to help store the necessary information and make it accessible to all the components I built or will be built in the future. In order to write cleaner code, I tried my best to follow best practices. To do this I made multiple components to be used to keep my main App component from being cluttered. 

**Verifying Correctness**

I made sure to do small commits and pushes to my main branch using git/github. By keeping my commits small, I was only adding small pieces of code and testing as I went to make sure none of the new logic I add will interfere with each other. I used the requirements outlined in the pdf to have a measure of correctness and tested my app using those criteria. I did my best to test and prevent edge cases. 

**What didn't you get to, or what else might you do with more time?**

Given more time, I would create a database to store all of the info from the json files, a server and routes to interact with the database, add styling and refactor some functions to be more reusable. The functions in particular I would make more reusable is the one in the TemplateForm component, there are 3 handleChanges functions that all do the same thing. Styling would better enhance the users experience and make it better to look at than its current state. having a server, routes, and database would make the application more realistic and allow for a better source of truth. Having a database would also allow the user to store their custom templates long term and wouldn't lose their template on page refresh.