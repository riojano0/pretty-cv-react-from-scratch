const React = require('react');
const CurriculumVitate = require('../component/curriculum-vitae');

class App extends React.Component {

    render() {
        return (
            <div>
                { this.renderDiv() }
                <CurriculumVitate personalInformation={this.renderPersonalInformationProps()} />
            </div>
        );
    }

    renderDiv = () => {
        return (<div>Hello World</div>);
    }

    renderPersonalInformationProps = () => {
       return ({
            "lastName": "Montivero",
            "firstName": "Daniel",
            "middleName": "Ezequiel",
            "birthdate": "1989-06-21",
            "dni": 33820939,
            "location": "Cordoba",
            "email": "montivero.daniel.e@gmail.com",
            "cellphone": "0351-2778923",
            "linkedin": "ar.linkedin.com/id/riojano0",
            "github": "github.com/riojano0/"
        });
    }
}

module.exports = App;