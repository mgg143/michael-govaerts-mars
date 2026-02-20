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

