<<<<<<< HEAD

function ApplicationProfile(appFullName, appLocation, appTargetRole, appDesiredExperience, appEducation, appSkills, appCertifications, appLanguageSpoken, appPortfolioURL, appRelocation, appRemotePreferred, appSoftSkills, appInternship) {
    this.appFullName = null;
    this.appLocation = appLocation;
    this.appTargetRole = null;
    this.appDesiredExperience = null;
    this.appEducation = null;
    this.appSkills = null;
    this.appCertifications = null;
    this.appLanguageSpoken = null;
    this.appPortfolioURL = null;
    this.appRelocation = null;
    this.appRemotePreferred = null;
    this.appSoftSkills = null;
    this.appInternship = null;
}

=======
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
}

// Creating an Object Using the Applicant Constructor
const liam = new ApplicantDetails("Liam O'Reily", "Halifax, NS", "Marine Technician", 4, "Diploma in Marine Technology, Nova Scotia Community College"["Sonar operation", "Engine repair", "Navigation systems"], ["Marine Safety Training"], ["English"], null, true, false, ["Teamwork", "Adaptability"], false
);
>>>>>>> 87065a79f9a26ada69063ad145e85dab8b3de8ba
