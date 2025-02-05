// Example PYQ items
const pyqItems = [
    { subject: "NEET PYQ ", year: 2024 , link: "PDF/2024neet.pdf"},
    { subject: "NEET PYQ ", year: 2023, link: "PDF/2023neet.pdf" },
    { subject: "NEET PYQ", year: 2022, link: "PDF/2022neet.pdf" },
    { subject: "NEET PYQ ", year: 2021, link: "PDF/2022neet.pdf" },
    { subject: "NEET PYQ ", year: 2020, link: "PDF/2020neet.pdf" },
    { subject: "NEET PYQ ", year: 2019, link: "PDF/2019neet.pdf" },
    { subject: "NEET PYQ ", year: 2018, link: "PDF/2018neet.pdf" },
    { subject: "NEET PYQ ", year: 2017, link: "PDF/2017neet.pdf" },
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
  