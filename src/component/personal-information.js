const React = require('react');

class PersonalInformation extends React.Component {

    render() {
        return (
            <div className="personal-information">
                {this.renderNames()}
                {this.renderContactInformation()}
            </div>
        )
    }

    renderNames = () => {
        return (
            <div className="personal-information--names">
                <h1>{ this.props.lastName }</h1>
                <h2>{ this.getFirstAndMiddleName() }</h2>
            </div>
        )
    }

    renderContactInformation = () => {
        const contactKeys = ["birthdate", "location", "email", "cellphone", "linkedin", "github"]
        const contactsMethod = () => {
            var contact;
            return contactKeys.map((key) => {
                contact = this.props[key];
                if(contact) {
                    return <li key={key}>{key.toUpperCase()}:{contact}</li>
                }
            })
        }
        return (
            <div className="personal-information--contact">
                <ul>
                    { contactsMethod() }
                </ul>
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