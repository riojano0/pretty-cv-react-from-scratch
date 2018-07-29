const React = require('react');
const PersonalInformation = require('./personal-information');
const WorkExperience = require('./work-experience');

class CurriculumVitae extends React.Component {

    render() {
        const props = this.props;

        return (
            <div className="curriculum-vitae">
                <div className="curriculum-vitae--left-wraper">
                    <PersonalInformation {...props.personalInformation} />
                </div>
                <div className="curriculum-vitae--right-wraper">
                    <WorkExperience {...props.workExperiences} />
                </div>
            </div>
        );
    }   

};

module.exports = CurriculumVitae;
