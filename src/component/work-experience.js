const React = require('react');

class WorkExperience extends React.Component {

    render() {
        return (
            <div className="work-experience">
                <div className="work-experience--title">
                    <div className="work-experience--title-icon"/>
                    <h2>Work Experience</h2>
                    <hr></hr>
                </div>
                {this.renderWorkExperiences()}
            </div>
        );
    }

    renderWorkExperiences = () => {
        const works = Object.values(this.props);
            
        return works.map((work, index) => {
                return this.renderWorkExperience(work, index);
            });
    }

    renderWorkExperience = (work, index) => {
        return (
            <div className={"work-experience--" + work.company} key={index}>
                {this.renderIcon(work.icon)}
                <ul>
                    <li>Company : {work.company}</li>
                    <li>From : {work.fromDate} - {work.toDate}</li>
                    <li>Position : {work.position}</li>
                    <li>Description : {work.description}</li>
                </ul>
            </div>
        );
    }

    renderIcon = (iconType) => {
        let icon = "default";
        const icons = ["academic", "code"];
        if(iconType){
            iconType = iconType.toLowerCase();
            if(icons.includes(iconType)){
                icon = iconType;
            }
        }

        return(
            <div className={`work-experience--icon-${icon}`} />
        )
    }
}

module.exports = WorkExperience;