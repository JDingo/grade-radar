import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Radar} from 'react-chartjs-2';
import {Algebra, Analyysi, Geometria, Todennakoisyys, Lukuteoria} from './info.js' // Tämä sisältää staattiset infolaatikot osa-alueista


// React-komponentti yksittäisille input-elementille
class Form extends React.Component {
    render() {
        const course = this.props.course
        const courseLabel = course + 1;
        const grade = this.props.grade;
        const placeholder = "MAA" + courseLabel;

        return (
            <input
                type="number"
                min="4"
                max="10"
                maxLength="2"
                className="course" 
                defaultValue={""}
                placeholder={placeholder}
                onChange={(e) => this.props.onChange(e.target.value, course)}
            />
        )
    }
}

// React-komponentti koko input-rivistölle
class Forms extends React.Component {
    renderForms() {
        let courseForms = [];
        const grades = this.props.grades;

        // Luo 15 input-elementtiä
        for (let i = 0; i < 15; i++) {
            courseForms.push(
                <Form
                    key={i}
                    course={i}
                    onChange={(value, index) => this.props.onChange(value, index)}
                    grade={grades[i]}
                />
            )
        }
        return courseForms;
    }
    
    render() {
        return (
            <div className="forms-container">
                {this.renderForms()}
            </div>
        )
    }
}

// React-komponentti arvosanojen visualisointia varten
class Chart extends React.Component {
    render() {
        const list = ["Algebra", "Analyysi", "Geometria", "Todennäköisyys", "Lukuteoria & Logiikka"];
        const grades = this.props.grades.slice();

        for (let i = 0; i < grades.length; i++) {
            if (grades[i] === "") {
                grades[i] = 4;
            } else {
                let value = parseInt(grades[i])
                grades[i] = value
            }
        }

        /* Laskee jokaiselle osa-alueelle omat arvot, joista muodostetaan gradeList
        gradeList-listaa käytetään kuvaajassa 
        Arvot täysin satunnaisia, eivätkä kuvaa todellisuutta*/
        const algebra = (grades[0] * 0.5 + grades[1] + grades[4] * 0.5) / 2
        const analyysi = (grades[4] + grades[5] + grades[8] + grades[12]) / 4
        const geometria = (grades[3] + grades[4] * 0.8 + grades[8] * 0.3) / 2.1
        const todennäköisyys = (grades[0] * 0.3 + grades[9]) / 1.3
        const lukuteoria = grades[10]

        const gradeList = [algebra, analyysi, geometria, todennäköisyys, lukuteoria]

        return(
            <div className="chart-container">
                <Radar
                    data={
                        {labels: list,
                        datasets: [{
                            label: 'Osaaminen',
                            backgroundColor: 'rgba(179,181,198,0.2)',
                            borderColor: 'rgba(179,181,198,1)',
                            pointBackgroundColor: 'rgba(179,181,198,1)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(179,181,198,1)',
                            data: gradeList
                        }]
                        }
                    }
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scale: {
                            ticks: {
                            min: 0,
                            max: 10,
                            stepSize: 1
                            }
                        }
                    }
                    }
                    />
                </div>
        )
    }


}

// Pääkomponentti
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grades: Array(15).fill(4),
            }
        this.handleChange = this.handleChange.bind(this);
        }

    // Tarkistaa syötettä (arvot ainoastaan 4-10)
    handleChange(value, index) {
        const list = this.state.grades.slice();
        value = parseInt(value);

        if (value == 1 || 4 <= value && value <= 10) {
            list[index] = value;
        } else {
            list[index] = "";
        }
        this.setState({grades: list})
    }

    render() {
        return (
            <div className="app">
                <div className="chart_form">
                    <h1 className="title">Matematiikan osa-alueet</h1>
                    <Chart
                        grades={this.state.grades}
                    />
                    <Forms
                        onChange={(value, index) => this.handleChange(value, index)}
                        grades={this.state.grades}
                    />
                </div>
                <div className="infoSection">
                    <Algebra
                        grades={this.state.grades}
                    />
                    <Analyysi
                        grades={this.state.grades}
                    />
                    <Geometria
                        grades={this.state.grades}
                    />
                    <Todennakoisyys
                        grades={this.state.grades}
                    />
                    <Lukuteoria
                        grades={this.state.grades}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)