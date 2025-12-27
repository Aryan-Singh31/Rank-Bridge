// PYQ Data for 6 subjects
const pyqSubjects = {
    Mathematics: [
        { year: 2024, link: "PDF/2024jan.pdf" },
        { year: 2023,  link: "PDF/2024jan.pdf" },
        { year: 2022,  link: "PDF/2024jan.pdf" }
      ],
      Physics: [
        { year: 2022,  link: "PDF/2024jan.pdf" },
        { year: 2023, link: "PDF/2024jan.pdf" },
        { year: 2023, link: "PDF/2024jan.pdf" },
        { year: 2024, link: "PDF/2024jan.pdf" }
    ],
    English: [
        { year: 2024, link: "PDF/2024jan.pdf" },
        { year: 2023, link: "PDF/2024jan.pdf" },
        { year: 2024, link: "PDF/2024jan.pdf" }
    ],
    Chemistry: [
        { year: 2024, link: "20PDF/2024jan.pdf" },
        { year: 2023, link: "20PDF/2024jan.pdf" },
        { year: 2023, link: "20PDF/2024jan.pdf" }
    ],
    "General Test": [
        { year: 2024, link: "PDF/2024jan.pdf" },
        { year: 2023, link: "PDF/2024jan.pdf" },
        { year: 2023, link: "PDF/2024jan.pdf" }
    ],
    Biology: [
        { year: 2024, link: "PDF/2024jan.pdf" },
        { year: 2023, link: "PDF/2024jan.pdf" },
        { year: 2023, link: "PDF/2024jan.pdf" }
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
  