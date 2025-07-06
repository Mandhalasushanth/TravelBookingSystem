fetch("https://your-backend-domain/api/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        name: "Sushanth",
        from: "Hyderabad",
        to: "Bangalore",
        date: "2025-07-01"
    }),
})
.then(res => res.text())
.then(data => alert(data))
.catch(err => console.error(err));







document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Search functionality coming soon!");
});
