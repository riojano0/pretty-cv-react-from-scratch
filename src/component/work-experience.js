const React = require('react');
// const iconCoding = require('../img/work_area/icon_coding.png')

class WorkExperience extends React.Component {

    render() {
        return (
            <div className="work-experience">
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