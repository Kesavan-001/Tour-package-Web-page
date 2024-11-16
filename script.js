// script.js
const bookings = []; // Array to store multiple entries

document.getElementById('books').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const where = document.getElementById('where').value;
    const days = document.getElementById('how-many').value;
    const departure = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;
    const details = document.getElementById('details').value;

    // Create an entry object
    const entry = {
        Place: where,
        Days: parseInt(days),
        Departure: departure,
        Return: returnDate,
        Details: details
    };

    // Add the new entry to the bookings array
    bookings.push(entry);

    // Convert the bookings array to a JSON string
    const jsonData = JSON.stringify(bookings, null, 2);

    // Create a Blob from the JSON string
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'bookings.json';

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
    
    // Optionally, clear the form
    document.getElementById('books').reset();
});
