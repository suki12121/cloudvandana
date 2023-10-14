<!DOCTYPE html>
<html>
<head>
    <style>
    
    
       .heading{
         text-align:center;
         color: white;
         font-size:30px;
       }
    
    
        .main-container{
          background-color:#4c94d4;
          height:cover;
          padding: 20px;
        
        }
        body {
            font-family: Arial, sans-serif;
        }

        .form-container {
            background-color:white;
            width: 400px;
            margin: 0 auto;
            padding:10px;
        }

        label {
            display: block;
            margin-top: 10px;
        }

        input[type="text"],
        input[type="email"],
        select {
            width: 70%;
            padding: 10px;
            margin-top: 5px;
        }
        
        .btn-primary{
          background-color:blue;
        }

        .gender-label {
            margin-right: 10px;
        }

        #submit, #reset {
            margin-top: 20px;
            padding: 10px 20px;
        }
    </style>
</head>
<body>
  <div class="main-container">
    <p class="heading">Customer Survey Form</p>
    <div class="form-container">
        <form id="survey-form">
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name" required>

            <label for="last-name">Last Name:</label>
            <input type="text" id="last-name" required>

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" required>

            <label for="country">Country:</label>
            <select id="country" required>
                <option value="">Select</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">India</option>
                <!-- Add more countries as needed -->
            </select>

            <label for="gender">Gender:</label>
            <label class="gender-label"><input type="checkbox" id="male"> Male</label>
            <label class="gender-label"><input type="checkbox" id="female"> Female</label>
            <label class="gender-label"><input type="checkbox" id="other"> Other</label>

            <label for="profession">Profession:</label>
            <input type="text" id="profession" required>

            <label for="email">Email:</label>
            <input type="email" id="email" required>

            <label for="mobile-number">Mobile Number:</label>
            <input type="tel" id="mobile-number" required>

            <button type="button" id="submit"  class="btn-primary">Submit</button>
            <button type="button" id="reset" class="btn-primary">Reset</button>
        </form>
    </div>
    </div>

    <div id="popup" style="display: none;">
        <h2>Form Data:</h2>
        <div id="popup-content"></div>
    </div>

    <script>
        const submitButton = document.getElementById('submit');
        const resetButton = document.getElementById('reset');
        const popup = document.getElementById('popup');
        const popupContent = document.getElementById('popup-content');

        submitButton.addEventListener('click', () => {
            // Validate the form
            if (validateForm()) {
                // Display the popup with form data
                showPopup();
            }
        });

        resetButton.addEventListener('click', () => {
            // Reset the form
            document.getElementById('survey-form').reset();
        });

        function validateForm() {
            // Add your custom validation logic here
            // For simplicity, this example only checks if all required fields are filled.
            const requiredFields = document.querySelectorAll('[required]');
            for (const field of requiredFields) {
                if (!field.value) {
                    alert('Please fill in all required fields.');
                    return false;
                }
            }
            return true;
        }

        function showPopup() {
            const form = document.getElementById('survey-form');
            popupContent.innerHTML = '';

            for (const element of form.elements) {
                if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
                    const label = document.querySelector(`label[for="${element.id}"]`).textContent;
                    const value = element.value;

                    if (element.type === 'checkbox' && !element.checked) {
                        continue;
                    }

                    const row = document.createElement('div');
                    row.innerHTML = `<strong>${label}:</strong> ${value}`;
                    popupContent.appendChild(row);
                }
            }

            popup.style.display = 'block';
        }

        popup.addEventListener('click', () => {
            popup.style.display = 'none';
            document.getElementById('survey-form').reset();
        });
    </script>
</body>
</html>