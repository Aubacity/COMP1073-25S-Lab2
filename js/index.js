const output = document.getElementById('output');
// Applicant Constructor to define the structure of the job applicant Liam

function ApplicantDetails (name, location, targetRole, yearsExperience, education, skills, certification, languagesSpoken, portfolio, willingToRelocate, remoteWorkPreference, softSkills, openToInternships) {
    this.name = name;
    this.location = location;
    this.targetRole = targetRole;
    this.yearsExperience = yearsExperience;
    this.education = education;
    this.skills = skills;
    this.certification = certification;
    this.languagesSpoken = languagesSpoken;
    this.portfolio = portfolio;
    this.willingToRelocate = willingToRelocate;
    this.remoteWorkPreference = remoteWorkPreference;
    this.softSkills = softSkills;
    this.openToInternships = openToInternships;
    this.displayDetails = function() {
        return `Name: ${this.name}, Location: ${this.location}, Target Role: ${this.targetRole}, Years of Experience: ${this.yearsExperience}, Education: ${this.education}, Skills: ${this.skills.join(", ")}, Certification: ${this.certification.join(", ")}, Languages Spoken: ${this.languagesSpoken.join(", ")}, Portfolio: ${this.portfolio ? this.portfolio : "N/A"}, Willing to Relocate: ${this.willingToRelocate}, Remote Work Preference: ${this.remoteWorkPreference ? "Yes" : "No"}, Soft Skills: ${this.softSkills.join(", ")}, Open to Internships: ${this.openToInternships ? "Yes" : "No"}`;
    };
}

// Creating an Object Using the Applicant Constructor
const liam = new ApplicantDetails("Liam O'Reily", "Halifax, NS", "Marine Technician", 4, "Diploma in Marine Technology, Nova Scotia Community College"["Sonar operation", "Engine repair", "Navigation systems"], ["Marine Safety Training"], ["English"], null, true, false, ["Teamwork", "Adaptability"], false
);

const elem = document.getElementById('output');

