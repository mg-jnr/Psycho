// script.js

document.getElementById('checker').addEventListener('input', function(event) {
    let value = event.target.value;
    if (isNaN(value) || value.includes('.')) {
        event.target.value = value.slice(0, -1);
    }
});


document.getElementById('idForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch data from the API
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    fetch('YOUR_API_ENDPOINT')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Show user info and field elements
            document.getElementById('userInfo').style.display = 'block';
            // Update input fields with fetched data
            document.getElementById('name').value = data.name;
            document.getElementById('member-status').value = data.memberStatus;
            document.getElementById('id').value = data.id;
        })
        .catch(error => console.error('Error fetching data:', error));
});
