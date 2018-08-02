const React = require('react');

class Education extends React.Component{

    render() {
        return (
            <div className="education">
                <div className="education--title">
                        <div className="education--title-icon"/>
                        <h2>Education</h2>
                        <hr></hr>
                    </div>
                {this.renderEducationExperiences()}
            </div>
        )
    }

    renderEducationExperiences = () => {
        const educations = Object.values(this.props);

        return educations.map((education, index) => {
            return this.renderEducationExperience(education, index);
        });
    }

    renderEducationExperience = (education, index) => {
        return (
            <div className={"education--" + education.certification} key={index}>
                {this.renderIcon(education.icon)}
                <ul>
                    <li>Certification : {education.certification}</li>
                    <li>Finished : {(education.complete) ? 'Yes' : 'No'} </li>
                    <li>From : {education.fromDate} - {education.toDate}</li>
                    <li>Center : {education.center}</li>
                    <li>Location : {education.location}</li>
                </ul>
            </div>
        );
    }

    renderIcon = (iconType) => {
        let icon = "default";
        const icons = ["school", "code", "psyche"];
        if(iconType){
            iconType = iconType.toLowerCase();
            if(icons.includes(iconType)){
                icon = iconType;
            }
        }

        return(
            <div className={`education--icon-${icon}`} />
        )
    }

}

module.exports = Education;