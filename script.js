/* Reset & Base Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to right, #83a4d4, #b6fbff);
  color: #2c3e50;
  padding: 40px 20px;
  line-height: 1.6;
}

/* Header */
header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #1a2b4c;
}

/* Section Containers */
section {
  max-width: 700px;
  margin: 0 auto 40px;
  background-color: #ffffffee;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* Form Elements */
input[type="text"],
input[type="email"],
input[type="password"],
textarea {
  width: 100%;
  padding: 14px 16px;
  margin: 12px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #3498db;
  outline: none;
}

/* Buttons */
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
}

button {
  padding: 12px 24px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

/* Output Sections */
#weatherResult,
#forecastResult,
#statusBoard {
  margin-top: 20px;
}

#forecastResult p,
#statusBoard p {
  margin: 10px 0;
  padding: 12px;
  background-color: #ecf0f1;
  border-radius: 8px;
  font-size: 0.95rem;
}

/* Textarea */
textarea {
  height: 120px;
  resize: vertical;
}

/* Footer */
footer {
  text-align: center;
  margin-top: 60px;
  font-size: 0.9rem;
  color: #555;
}

/* Responsive Design */
@media (max-width: 768px) {
  h1 {
    font-size: 2.2rem;
  }

  section {
    padding: 20px;
  }

  .button-group {
    flex-direction: column;
  }

  button {
    width: 100%;
  }
}
