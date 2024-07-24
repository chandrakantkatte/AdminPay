<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AdminPay</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1, h2, h3 {
            color: #333;
        }
        h1 {
            font-size: 2em;
            margin-bottom: 0.5em;
        }
        h2 {
            font-size: 1.5em;
            margin-top: 1em;
            margin-bottom: 0.5em;
            border-bottom: 2px solid #ddd;
            padding-bottom: 5px;
        }
        code {
            background: #f4f4f4;
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-size: 0.9em;
        }
        pre {
            background: #f4f4f4;
            padding: 1em;
            border-radius: 3px;
            overflow: auto;
            font-size: 0.9em;
        }
        ul {
            list-style: disc;
            margin-left: 20px;
        }
        ul ul {
            list-style: circle;
        }
        .badge {
            display: inline-block;
            padding: 0.5em 1em;
            font-size: 0.9em;
            color: #fff;
            background-color: #007bff;
            border-radius: 0.25em;
            text-decoration: none;
            margin-bottom: 1em;
        }
        p {
            margin: 0.5em 0;
        }
        .section-title {
            margin-top: 20px;
            font-size: 1.5em;
            border-bottom: 2px solid #ddd;
            padding-bottom: 5px;
        }
        .content {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="content">
        <h1>AdminPay</h1>
        <p><a href="https://github.com/chandrakantkatte/TestProject" class="badge">GitHub Repository</a></p>

        <h2 class="section-title">Description</h2>
        <p>SME Payment Management System</p>
        <p>This project is a comprehensive software solution designed to streamline payment management for Small and Medium Enterprises (SMEs). The system consists of two main components:</p>
        <ul>
            <li><strong>Back-End Service:</strong> Developed using Java and Spring Boot, this component provides a robust REST API for managing employees and vendors. It features:
                <ul>
                    <li><strong>Employee Management:</strong> Create and manage employee records.</li>
                    <li><strong>Vendor Management:</strong> Create and manage vendor records.</li>
                    <li><strong>Email Notifications:</strong> Send notifications to vendors and keep track of email records.</li>
                    <li><strong>In-Memory Data Storage:</strong> Utilizes an in-memory repository for development purposes, ensuring fast data access and manipulation.</li>
                </ul>
            </li>
            <li><strong>Front-End Application:</strong> Built with React, this component provides a user-friendly interface for interacting with the back-end services. It includes:
                <ul>
                    <li><strong>Employee Form:</strong> Allows users to input and submit employee details.</li>
                    <li><strong>Vendor Form:</strong> Provides a form to add and manage vendor information with validation.</li>
                    <li><strong>Data Tables:</strong> Displays lists of employees and vendors, with real-time updates and status indicators.</li>
                    <li><strong>Error Handling:</strong> Shows appropriate messages for successful operations and errors.</li>
                </ul>
            </li>
        </ul>
        <p>This system is designed to improve operational efficiency by providing a centralized platform for managing payments and communications within SMEs.</p>

        <h2 class="section-title">Features</h2>
        <ul>
            <li><strong>Back-End:</strong>
                <ul>
                    <li>REST API for managing employees and vendors</li>
                    <li>Email notification system</li>
                    <li>In-memory data storage for development</li>
                </ul>
            </li>
            <li><strong>Front-End:</strong>
                <ul>
                    <li>User interface for interacting with the back-end</li>
                    <li>Forms for creating and managing employees and vendors</li>
                    <li>Data visualization in table format</li>
                </ul>
            </li>
        </ul>

        <h2 class="section-title">Technologies Used</h2>
        <ul>
            <li><strong>Back-End:</strong>
                <ul>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>Apache Tomcat</li>
                    <li>In-memory repository</li>
                </ul>
            </li>
            <li><strong>Front-End:</strong>
                <ul>
                    <li>React</li>
                    <li>CSS</li>
                    <li>Axios for API calls</li>
                </ul>
            </li>
        </ul>
    </div>
</body>
</html>
