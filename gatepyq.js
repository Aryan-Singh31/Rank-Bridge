// PYQ Data for 6 subjects
const pyqSubjects = {
    "Computer Science": [
        { year: 2024, link: "PDF/gatecs2024.pdf" },
        { year: 2023,  link: "PDF/gatecs2023.pdf" },
        { year: 2022,  link: "PDF/gatecs2021.pdf" },
        { year: 2021,  link: "PDF/gatecs2021.pdf" }
      ],
     "Civil": [
        { year: 2022,  link: "PDF/gatecivil2024.pdf" },
        { year: 2023, link: "PDF/gatecivil2023.pdf" },
        { year: 2023, link: "PDF/gatecivil2024.pdf" },
        { year: 2024, link: "PDF/gatecivil2024.pdf" }
    ],
   "Mechanical": [
        { year: 2024, link: "PDF/gateme2024.pdf" },
        { year: 2023, link: "PDF/gateme2022.pdf" },
        { year: 2024, link: "PDF/gateme2024.pdf" }
    ],
    Agriculture: [
        { year: 2024, link: "20PDF/gateagri2024.pdf" },
        { year: 2023, link: "20PDF/gateagri2022.pdf" },
        { year: 2023, link: "20PDF/gateagri2024.pdf" }
    ],
    "Electrical": [
        { year: 2024, link: "PDF/gatega2023.pdf" },
        { year: 2023, link: "PDF/gatega2021.pdf" },
        { year: 2023, link: "PDF/gatega2021.pdf" }
    ],
    Metallurgy: [
        { year: 2024, link: "PDF/gatega2021.pdf" },
        { year: 2023, link: "PDF/gatega2021.pdf" },
        { year: 2023, link: "PDF/gatega2021.pdf" }
    ]
  };
  
  // Function to generate PYQ sections dynamically
  function generatePYQSections() {
    const mainContainer = document.getElementById("pyq-main-container");
  
    Object.keys(pyqSubjects).forEach(subject => {
        // Create a new section container
        const container = document.createElement("div");
        container.className = "pyq-container";
        
        // Title
        const heading = document.createElement("h1");
        heading.textContent = `Previous Year Questions (${subject})`;
        container.appendChild(heading);
  
        // List container
        const section = document.createElement("section");
        section.className = "pyq-resources";
  
        // List element
        const list = document.createElement("ul");
        list.id = `pyq-list-${subject.toLowerCase().replace(" ", "-")}`;
  
        // Populate list with PYQs
        pyqSubjects[subject].forEach(item => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${subject} PYQ</strong> (${item.year}) 
                                  <a href="${item.link}" target="_blank">Download</a>`;
            list.appendChild(listItem);
        });
  
        section.appendChild(list);
        container.appendChild(section);
        mainContainer.appendChild(container);
    });
  }
  
  // Call function to generate sections dynamically
  generatePYQSections();
  