const React = require('react');

class PersonalInformation extends React.Component {

    render() {
        const props = this.props;
        return (
            <div className="personal-information">
                <h1>{ props.lastName }</h1>
                <h2>{ this.getFirstAndMiddleName() }</h2>
            </div>
        )
    }

    getFirstAndMiddleName = ()  => {
        const personalInformation = this.props;
        let name = personalInformation.firstName;
        if(personalInformation.middleName){
            name += " " + personalInformation.middleName
        }
        return name;
    }

};

module.exports = PersonalInformation;