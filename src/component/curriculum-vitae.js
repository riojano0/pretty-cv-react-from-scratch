const React = require('react');
const PersonalInformation = require('./personal-information');

class CurriculumVitae extends React.Component {

    render() {
        const props = this.props;

        return (
            <div className="curriculum-vitae">
                <PersonalInformation {...props.personalInformation} />
            </div>
        );
    }   

};

module.exports = CurriculumVitae;
