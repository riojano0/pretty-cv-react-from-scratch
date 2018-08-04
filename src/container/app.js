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
                    "description": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                }, {
                    "icon": "Misc",
                    "company": "Allus Global BPO Center",
                    "position": "Technical Service Agent",
                    "fromDate": "2016-06",
                    "toDate": "2017-02",
                    "description": "Description text"
                }, 
                {
                    "icon": "Code",
                    "company": "PyDevAr",
                    "position": "Python Freelance",
                    "fromDate": "2016-07",
                    "toDate": "2016-09",
                    "description": "Sikuli cases to use on testing"
                },
                {
                    "icon": "Academic",
                    "company": "Facultad de Psicologia-UNC",
                    "position": "Student Assistant",
                    "fromDate": "2012-06",
                    "toDate": "2014-11",
                    "description": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                }, {
                    "icon": "Academic",
                    "company": "Facultad de Psicologia-UNC",
                    "position": "Counselor of HCD",
                    "fromDate": "2012-06",
                    "toDate": "2012-11",
                    "description": "Description text"
                }
            ],
            "education": [{
                "icon": "code",
                "complete": true,
                "fromDate": "2016",
                "toDate": "2018",
                "certification": "Tecnicatura en Programacion",
                "center": "Universidad Tecnologia Cordoba - FRC",
                "location": "Cordoba - Cordoba"
            }, {
                "icon": "psyche",
                "complete": false,
                "fromDate": "2008",
                "toDate": "discontinued",
                "certification": "Licenciatura en Psicologia",
                "center": "Facultad de Psicologia - FRC",
                "location": "Cordoba - Cordoba"
            }, {
                "icon": "school",
                "complete": true,
                "fromDate": "2001",
                "toDate": "2006",
                "certification": "Tecn, en Informacion Personal y Profesional",
                "center": "Juan Abdala Chayep - N° 713",
                "location": "Esquel - Chubut"
            }],
            "achievements" : [
                {
                    "icon": "java",
                    "achievement": "Bootcamp Java",
                    "center": "Globant",
                    "year": "2017"
                },
                {
                    "icon": "angular",
                    "achievement": "Single Page Web Apps with AngularJS",
                    "center": "Coursera",
                    "year": "2017"
                },
                {
                    "icon": "code",
                    "achievement": "Diplomatura ne Desarrolo Web",
                    "center": "Universidad Tecnologia Cordoba - FRC",
                    "year": "2017"
                },
                {
                    "icon": "android",
                    "achievement": "Android Developer",
                    "center": "EmplearTEC",
                    "year": "2016"
                },
                {
                    "icon": "python",
                    "achievement": "Python as a tool for engineering",
                    "center": "FCEFyN",
                    "year": "2015"
                },
                {
                    "icon": "python",
                    "achievement": "Python Developer",
                    "center": "EmplearTEC",
                    "year": "2015"
                }
            ]
        });
    }
}

module.exports = App;