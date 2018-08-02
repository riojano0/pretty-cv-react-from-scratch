const React = require('react');
const Achievement = require('./achievement');
const PersonalInformation = require('./personal-information');
const WorkExperience = require('./work-experience');
const Education = require('./education');

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
                    <Education {...props.education} />
                    <Achievement {...props.achievements} />
                </div>
            </div>
        );
    }   

};

module.exports = CurriculumVitae;
