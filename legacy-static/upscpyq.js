// PYQ Data for 6 subjects
const pyqSubjects = {
    Mathematics: [
        { year: 2024, link: "PDF/mathsupsc2024.pdf" },
        { year: 2023, link: "PDF/mathsupsc2024.pdf" },
        { year: 2022, link: "PDF/mathsupsc2024.pdf" }
    ],
    Physics: [
        { year: 2024, link: "PDF/physicsupsc2024.pdf" },
        { year: 2023, link: "PDF/physicsupsc2024.pdf" },
        { year: 2023, link: "PDF/physicsupsc2024.pdf" }
    ],
    English: [
        { year: 2024, link: "PDF/engupsc2024.pdf" },
        { year: 2023, link: "PDF/engupsc2024.pdf" },
        { year: 2024, link: "PDF/engupsc2024.pdf" }
    ],
    Chemistry: [
        { year: 2024, link: "PDF/chemupsc2024.pdf" },
        { year: 2023, link: "PDF/chemupsc2024.pdf" },
        { year: 2023, link: "PDF/chemupsc2024.pdf" }
    ],
    "General Studies": [
        { year: 2024, link: "PDF/gsupsc2024.pdf" },
        { year: 2023, link: "PDF/gsupsc2024.pdf" },
        { year: 2023, link: "PDF/gsupsc2024.pdf" }
    ],
    Zoology: [
        { year: 2024, link: "PDF/zooupsc2024.pdf" },
        { year: 2023, link: "PDF/zooupsc2024.pdf" },
        { year: 2023, link: "PDF/zooupsc2024.pdf" }
    ],
    Geography: [
        { year: 2024, link: "PDF/geography.pdf" },
        { year: 2023, link: "PDF/geography.pdf" },
        { year: 2023, link: "PDF/geography.pdf" }
    ],
    Geology: [
        { year: 2024, link: "PDF/geology.pdf" },
        { year: 2023, link: "PDF/geology.pdf" },
        { year: 2023, link: "PDF/geology.pdf" }
    ],
    History: [
        { year: 2024, link: "PDF/history.pdf" },
        { year: 2023, link: "PDF/history.pdf" },
        { year: 2023, link: "PDF/history.pdf" }
    ],
   Economics: [
        { year: 2024, link: "PDF/ecoupsc.pdf" },
        { year: 2023, link: "PDF/ecoupsc.pdf" },
        { year: 2023, link: "PDF/ecoupsc.pdf" }
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
  