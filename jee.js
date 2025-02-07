
const pyqItems = [
  { subject: "JEE PYQ (January)", year: 2024, link: "2024jan.pdf" },
  { subject: "JEE PYQ (April)", year: 2024, link: "2024april.pdf" },
  { subject: "JEE PYQ (January)", year: 2023, link: "2023jan.pdf" },
  { subject: "JEE PYQ (April)", year: 2023, link: "2023april.pdf" },
  { subject: "JEE PYQ (January)", year: 2022, link: "2022jan.pdf" },
  { subject: "JEE PYQ (April)", year: 2022, link: "2022april.pdf" },
  { subject: "JEE PYQ (January)", year: 2021, link: "2021jan.pdf" },
  { subject: "JEE PYQ (April)", year: 2021, link: "2021april.pdf" },
  { subject: "JEE PYQ (January)", year: 2020, link: "2020jan.pdf" },
  { subject: "JEE PYQ (April)", year: 2020, link: "2020april.pdf" },
  { subject: "JEE PYQ (January)", year: 2019, link: "2019jan.pdf" },
  { subject: "JEE PYQ (April)", year: 2019, link: "2019april.pdf" },
  { subject: "JEE PYQ (January)", year: 2018, link: "2018jan.pdf" },
  { subject: "JEE PYQ (April)", year: 2018, link: "2018april.pdf" },
  { subject: "JEE PYQ (January)", year: 2017, link: "2017jan.pdf" },
  { subject: "JEE PYQ (April)", year: 2017, link: "2017april.pdf" },
];

function displayPYQItems(items) {
  const pyqList = document.getElementById("pyq-list");
  pyqList.innerHTML = ""; 

  if (items.length === 0) {
      pyqList.innerHTML = "<li>No results found</li>";
      return;
  }

  items.forEach(item => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <strong>${item.subject}</strong> (${item.year})
          <a href="${item.link}" target="_blank">Download</a>
      `;
      pyqList.appendChild(listItem);
  });
}

function searchPYQs() {
  const query = document.getElementById("search-bar").value.toLowerCase();

  const filteredItems = pyqItems.filter(item =>
      item.subject.toLowerCase().includes(query) || item.year.toString().includes(query)
  );

  displayPYQItems(filteredItems);
}


displayPYQItems(pyqItems);

document.getElementById("search-button").addEventListener("click", searchPYQs);
document.getElementById("search-bar").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
      searchPYQs();
  }
});
