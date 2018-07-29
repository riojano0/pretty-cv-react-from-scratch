const React = require('react');
const CurriculumVitate = require('../component/curriculum-vitae');

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <CurriculumVitate {...this.renderCurriculumVitaeProps()}/>
            </div>
        );
    }

    renderCurriculumVitaeProps = () => {
        return ({
            "personalInformation": {
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
            },
            "workExperiences": [
                {
                    "icon": "Code",
                    "company": "Globant",
                    "position": "Java Developer",
                    "fromDate": "2017-02",
                    "toDate": "Current",
                    "description": "Description text"
                }, {
                    "icon": "Misc",
                    "company": "Allus Global BPO Center",
                    "position": "Technical Service Agent",
                    "fromDate": "2016-06",
                    "toDate": "2017-02",
                    "description": "Description text"
                }, {
                    "icon": "Academic",
                    "company": "Facultad de Psicologia-UNC",
                    "position": "Student Assistant",
                    "fromDate": "2012-06-01",
                    "toDate": "2014-11-01",
                    "description": "Description text"
                }, {
                    "icon": "Academic",
                    "company": "Facultad de Psicologia-UNC",
                    "position": "Counselor of HCD",
                    "fromDate": "2012-06-01",
                    "toDate": "2012-11-01",
                    "description": "Description text"
                }
            ]
        });
    }
}

module.exports = App;