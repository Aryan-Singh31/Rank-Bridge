// Example PYQ items
const pyqItems = [
    { subject: "NEET PYQ ", year: 2024 , link: "2024.pdf"},
    { subject: "NEET PYQ ", year: 2023, link: "2023.pdf" },
    { subject: "NEET PYQ", year: 2022, link: "2022.pdf" },
    { subject: "NEET PYQ ", year: 2021, link: "2022.pdf" },
    { subject: "NEET PYQ ", year: 2020, link: "2020.pdf" },
    { subject: "NEET PYQ ", year: 2019, link: "2019.pdf" },
    { subject: "NEET PYQ ", year: 2018, link: "2018.pdf" },
    { subject: "NEET PYQ ", year: 2017, link: "2017.pdf" },
  ];
  
  // Function to display PYQ items
  function displayPYQItems() {
    const pyqList = document.getElementById("pyq-list");
  
    pyqItems.forEach(item => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>${item.subject}</strong> (${item.year})
        <a href="${item.link}" target="_blank">Download</a>
      `;
      pyqList.appendChild(listItem);
    });
  }
  
  // Call the function to display the PYQ list
  displayPYQItems();
  