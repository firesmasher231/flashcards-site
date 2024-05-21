function generateCSV() {
	var text = document.getElementById("inputText").value;
	var lines = text.split("\n");
	var csvContent = "data:text/csv;charset=utf-8," + "\uFEFF"; // UTF-8 BOM for Excel compatibility

	lines.forEach(function (line) {
		csvContent += line + "\r\n";
	});

	var encodedUri = encodeURI(csvContent);
	var link = document.getElementById("downloadLink");
	link.setAttribute("href", encodedUri);
	link.setAttribute(
		"download",
		"translations " + new Date().toISOString().slice(0, 10) + ".csv"
	);
	link.textContent = "Download CSV";
	link.click();
}
