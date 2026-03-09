// ============ Create Footer Element ============
// A. First, we're creating a footer element:

// 1. Create the footer element
const footer = document.createElement("footer");

// 2. Select the body element
const body = document.body;

// 3. Append the footer to the end of the body
body.appendChild(footer);

// ============ Copyright In Footer ============
// B. Next, we'll be inserting Copyright information into the footer:

// 1. Create a date object for right now
const today = new Date();

// 2. Extract the current year from the date object
const thisYear = today.getFullYear();

// 3. Create a new <p> element
const copyright = document.createElement("p");

// 4. Set the content of the <p> element
// Using Unicode © symbol: \u00A9
copyright.innerHTML = `\u00A9 Michael Govaerts ${thisYear}`;

// 5. Append the <p> to the existing footer, and align it to the center
footer.appendChild(copyright);
footer.style.textAlign = "center";

// ============ Create Skills List ============
// C. Finally, we're going to create a list of skills in the Skills section:
// 1. Create a variable named skillsSection and use "DOM Selection" to select the skills section by id
const skillsSection = document.querySelector("#Skills");

// 2. Create an array of skills
const skills = ["JavaScript", "HTML", "CSS", "git", "GitHub", "Python"];

// 3. Create a variable named skillsList and use "DOM Selection" to query the skillsSection 
// (instead of the entire document) to select the <ul> element you created earlier
const skillsList = skillsSection.querySelector("ul");

// 4. Use a for loop to iterate through the skills array,
for (let i = 0; i < skills.length; i++) {
    // 4.1 Inside the loop, create a variable named skill to create a new list item (li) element (use createElement)
    const skill = document.createElement("li");
    // 4.2 Still inside the loop, use the skill variable to set the inner text to the current Array element, access the Array element
    // using bracket notation
    skill.innerText = skills[i];
    // 4.3  Use appendChild inside the loop to append the skill element to the skillsList element
    skillsList.appendChild(skill);
}

// ============ Message Section Visibility Logic ============
/**
 * STRETCH GOAL: Hide the #messages section if the list is empty.
 * We'll call this function every time we add or remove a message.
 */
function toggleMessageHeader() {
    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    
    if (messageList.children.length === 0) {
        messageSection.style.display = "none";
    } else {
        messageSection.style.display = "block";
    }
}

// Initial check on page load
toggleMessageHeader();

// ============ Handle Message Form Submission ============
// D. Handle the leave_message form submission:
// 1. Create a variable named messageForm and use "DOM Selection" to select the "leave_message" form by name attribute
const messageForm = document.querySelector('form[name="leave_message"]');

// 2. Add an event listener to the messageForm element that handles the "submit" event
messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // 3. Create variables to retrieve the values from the form fields
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    
    // 4. Log the variables to the console
    console.log(usersName, usersEmail, usersMessage);

    // A. Select the Message Section and List
    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");

    // B. Create a new message (li) element
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a> 
        <span>wrote: ${usersMessage} </span>
    `;

    // C. Create Edit Button (STRETCH GOAL)
    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.type = "button";
    editButton.addEventListener("click", () => {
        const span = newMessage.querySelector("span");
        const newText = prompt("Edit your message:", span.innerText.replace("wrote: ", ""));
        if (newText !== null && newText.trim() !== "") {
            span.innerText = `wrote: ${newText}`;
        }
    });

    // D. Create Remove Button
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    
    removeButton.addEventListener("click", () => {
        // DOM Traversal: Find the button's parent (li) and remove it
        const entry = removeButton.parentNode;
        entry.remove();
        // Re-check visibility after removing
        toggleMessageHeader();
    });

    // E. Append Buttons to the New Message
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);

    // F. Append New Message to the List
    messageList.appendChild(newMessage);

    // G. Re-check visibility after adding a message
    toggleMessageHeader();

    // 5. Reset the form after submission using the reset method
    event.target.reset(); 
});

// ============ Fetch GitHub Repositories ============
// Added explicit comments to each step because I'm unlikely to remember
// why I wrote this code in a few months, and I want to be able to understand 
// it when I come back to it!

// 1. 'fetch' is like sending a mailman to GitHub's address to ask for data
fetch('https://api.github.com/users/mgg143/repos')
  
  // 2. '.then' means "Once the mailman comes back, do this next"
  .then(response => {
    
    // 3. Check if the "mailman" actually found the house (status 200-299)
    // If 'response.ok' is false, something went wrong (like a 404 error)
    if (!response.ok) {
      // This "throws" us straight down to the .catch() block below
      throw new Error('Network response was not ok');
    }
    
    // 4. If it was successful, turn that data into a format (JSON) JS can read
    return response.json();
  })

  // 5. Now we have the actual list of repositories (we call them 'repositories')
  .then(repositories => {
    // Log the repositories to the console to check the data
    console.log(repositories);
    // Select the "projects" section and the "ul" (unordered list) inside it
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');

    // 6. Loop through every project we received from GitHub
    for (let i = 0; i < repositories.length; i++) {
      // Create a brand new "li" (list item) element in memory
      const project = document.createElement('li');
      
      // Set the text of that list item to the name of the GitHub repo
      project.innerText = repositories[i].name;
      
      // Physically attach that list item to the "ul" on the webpage
      projectList.appendChild(project);
    }
  })

  // 7. THE SAFETY NET: This block ONLY runs if there was an error in steps 1-6
  .catch(error => {
    // Log the technical error in the hidden developer console for debugging
    console.error('Error:', error);

    // Find the projects section on the page so we can talk to the user
    const projectSection = document.getElementById('projects');
    
    // Create a new "p" (paragraph) element to hold our error message
    const errorMessage = document.createElement('p');
    
    // Give it a "class" name so our CSS knows how to make it look pretty
    errorMessage.className = "error-message"; 
    
    // Set the text that the user will actually see
    errorMessage.innerText = "Check back soon! We encountered an error loading the projects.";
    
    // Add this error message into the projects section on the screen
    projectSection.appendChild(errorMessage);
  });