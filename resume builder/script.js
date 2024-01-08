function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const education10th = document.getElementById('10thEducation').value;
    const education12th = document.getElementById('12thEducation').value;
    const graduation = document.getElementById('graduation').value;
    const postGraduation = document.getElementById('postGraduation').value;
    const workExperience = document.getElementById('workExperience').value;
    const projects = document.getElementById('projects').value;
    const skillSets = document.getElementById('skillSets').value;
    const hobbies = document.getElementById('hobbies').value;
    const strengths = document.getElementById('strengths').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;

    // Generate the resume content
    const resumeContent = `
        <h2>${fullName}</h2>
        <p>Email: ${email}</p>
        <p>10th Education: ${education10th}</p>
        <p>12th Education: ${education12th}</p>
        <p>Graduation: ${graduation}</p>
        <p>Post Graduation: ${postGraduation}</p>
        <p>Work Experience: ${workExperience}</p>
        <p>Projects: ${projects}</p>
        <p>Skill Sets: ${skillSets}</p>
        <p>Hobbies: ${hobbies}</p>
        <p>Strengths: ${strengths}</p>
        <p>LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <p>GitHub: <a href="${github}" target="_blank">${github}</a></p>
    `;

    // Display the generated resume in a new window
    const newWindow = window.open();
    newWindow.document.write(resumeContent);
    newWindow.document.title = `${fullName}'s Resume`;

    // Alternatively, you can redirect to another page
    // window.location.href = "your_target_page.html";
}
