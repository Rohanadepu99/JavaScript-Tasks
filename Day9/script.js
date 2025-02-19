document.addEventListener("DOMContentLoaded", function () {
    const resumeContainer = document.getElementById("resume-container");

    const container = document.createElement("div");
    container.className = "container";
    resumeContainer.appendChild(container);

    function addElement(tag, content, parent, className = "") {
        const element = document.createElement(tag);
        if (className) element.className = className;
        element.innerHTML = content;
        parent.appendChild(element);
    }

    addElement("h1", "Adepu Rohan Sai", container);
    addElement("p", "adepurohansai@gmail.com | Hyderabad, India", container, "contact-info");
    container.appendChild(document.createElement("hr"));

    addElement("h2", "Education", container);
    const table = document.createElement("table");
    table.innerHTML = `
        <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Year</th>
            <th>Marks</th>
        </tr>
        <tr>
            <td>B.Tech - Computer Science</td>
            <td>Kshatriya College Of Engineering, Nizamabad</td>
            <td>2021 - 2024</td>
            <td>CGPA: 6.51</td>
        </tr>
        <tr>
            <td>Diploma</td>
            <td>Kshatriya College Of Engineering, Nizamabad</td>
            <td>2017 - 2020</td>
            <td>Percentage: 70.1%</td>
        </tr>`;
    container.appendChild(table);
    container.appendChild(document.createElement("hr"));

    addElement("h2", "Certifications", container);
    const certifications = [
        "Data Analytics, ICT Academy PAYPAL",
        "C and C++, Spoken Tutorial Project IIT Mumbai",
        "Cryptography and Network Security, NIIT Foundation",
        "Data Science and Machine Learning Python Udemy",
        "UI and UX Basics to Advanced Udemy"
    ];
    const certList = document.createElement("ul");
    certifications.forEach(cert => addElement("li", cert, certList));
    container.appendChild(certList);
    container.appendChild(document.createElement("hr"));

    addElement("h2", "Projects", container);
    const projects = [
        "<b>Minor Project</b> Face Mask Detection Btech CSE",
        "<b>Major Project</b> Hiring and Recruitment Process Using Machine Learning",
        "<b>Responsive Design Website</b> Car Cental Website",
    ];
    const projList = document.createElement("ul");
    projects.forEach(proj => addElement("li", proj, projList));
    container.appendChild(projList);
    container.appendChild(document.createElement("hr"));

    addElement("h2", "Skills", container);
    addElement("p", "<b>Technical:</b> Python, Html, Css, VS Code, Github, Git, Bootstrap, Sql", container);
    addElement("p", "<b>Soft:</b> Leadership, Communication, Time Management, Teamwork", container);
    container.appendChild(document.createElement("hr"));

    addElement("h2", "Achievements", container);
    const achievements = [
        "Participated in Hackethon Events",
        "Won 1st prize at Drawing Competition, at District Level.",
        "Certified in a 2-day workshop on ML model design using Python.",
        "Active participant in Design-a-thon coding event."
    ];
    const achList = document.createElement("ul");
    achievements.forEach(ach => addElement("li", ach, achList));
    container.appendChild(achList);
    container.appendChild(document.createElement("hr"));

    addElement("h2", "Awards", container);
    addElement("p", "Quiz Competition</b> Advanced", container);
    container.appendChild(document.createElement("hr"));

    const footer = document.createElement("footer");
    footer.innerText = "Thank you for reviewing !";
    container.appendChild(footer);
});