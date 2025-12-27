// Example PYQ items
const pyqItems = [
    { subject: "JEE PYQ (January) ", year: 2024 , link: "PDF/2024jan.pdf"},
    { subject: "JEE PYQ (April)", year: 2024, link: "PDF/2024april.pdf" },
    { subject: "JEE PYQ (January)", year: 2023, link: "PDF/2023jan.pdf" },
    { subject: "JEE PYQ (April)", year: 2023, link: "PDF/2023april.pdf" },
    { subject: "JEE PYQ (January)", year: 2022, link: "PDF/2022april.pdf" },
    { subject: "JEE PYQ (April)", year: 2022, link: "PDF/2023jan.pdf" },
    { subject: "JEE PYQ (January)", year: 2021, link: "PDF/2021april.pdf" },
    { subject: "JEE PYQ (April)", year: 2021, link: "PDF/2021jan.pdf" },
    { subject: "JEE PYQ (January)", year: 2020, link: "PDF/2020jan.pdf" },
    { subject: "JEE PYQ (April)", year: 2020, link: "PDF/2020jan.pdf" },
    { subject: "JEE PYQ (January)", year: 2019, link: "PDF/2019jan.pdf" },
    { subject: "JEE PYQ (April)", year: 2019, link: "PDF/2020jan.pdf" },
    { subject: "JEE PYQ (January)", year: 2018, link: "PDF/2018april.pdf" },
    { subject: "JEE PYQ (April)", year: 2018, link: "PDF/2018april.pdf" },
    { subject: "JEE PYQ (January)", year: 2017, link: "PDF/2018april.pdf" },
    { subject: "JEE PYQ (April)", year: 2017, link: "PDF/2017april.pdf" },
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
  