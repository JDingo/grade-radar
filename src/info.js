import React from 'react';

// Staattiset infolaatikot kaikille osa-alueille

class Algebra extends React.Component {
    render() {
        const grades = this.props.grades.slice();
        const algebra = parseFloat(((grades[0] * 0.5 + grades[1] + grades[4] * 0.5) / 2).toFixed(1))

        return(
            <div className="info" id="algebra">
                <div className="topBar" id="algebraTopBar"></div>
                <div className="mathContainer" id="algebraContainer">
                    <div className="gradeContainer">
                        <h1>Osaamisesi</h1>
                        <p className="grade">{algebra}</p>
                    </div>

                    <div className="mathText">
                        <h1>Algebra</h1>
                        <p>Algebra (<em>"al-jabr"</em>, "reunion of broken parts") on yksi matematiikan päähaaroista. 
                            Algebran tutkimuskohteita ovat laskutoimitusten, kuten yhteen- tai kertolaskujen, yleiset ominaisuudet jossakin perusjoukossa.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

class Analyysi extends React.Component {
    render() {
        const grades = this.props.grades.slice();
        const analyysi = parseFloat(((grades[4] + grades[5] + grades[8] + grades[12]) / 4).toFixed(1));

        return(
            <div className="info" id="analyysi">
                <div className="topBar" id="analyysiTopBar"></div>
                <div className="mathContainer" id="analyysiContainer">
                    <div className="gradeContainer">
                        <h1>Osaamisesi</h1>
                        <p className="grade">{analyysi}</p>
                    </div>

                    <div className="mathText">
                        <h1>Analyysi</h1>
                        <p>Analyysi on yksi matematiikan päähaaroista.
                            Analyysi tutkii reaalilukuja ja kompleksilukuja ja niiden funktioita.
                            Analyysiin liittyvät muun muassa jatkuvuus, integraalit ja derivaatat.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

class Geometria extends React.Component {
    render() {
        const grades = this.props.grades.slice();
        const geometria = parseFloat(((grades[3] + grades[4] * 0.8 + grades[8] * 0.3) / 2.1).toFixed(1));

        return(
            <div className="info" id="geometria">
                <div className="topBar" id="geometriaTopBar"></div>
                <div className="mathContainer" id="geometriaContainer">
                    <div className="gradeContainer">
                        <h1>Osaamisesi</h1>
                        <p className="grade">{geometria}</p>
                    </div>

                    <div className="mathText">
                        <h1>Geometria</h1>
                        <p>Geometria on matematiikan ala, joka tutkii kuvioita ja kappaleita ja niiden ominaisuuksia.
                            Geometria syntyi varhaisissa kulttuureissa pituuksien, pinta-alojen ja tilavuuksien mittaukseen.
                            Geometria sai muodollista matematiikkaa jo 600 eaa, ja Eukleideen geometrian oppikirja <em>Στοιχεῖα, Perusteet</em> julkaistiin n. 300 eaa.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

class Todennakoisyys extends React.Component {
    render() {
        const grades = this.props.grades.slice();
        const todennäköisyys = parseFloat(((grades[0] * 0.3 + grades[9]) / 1.3).toFixed(1))

        return(
            <div className="info" id="todennäköisyys">
                <div className="topBar" id="todennäköisyysTopBar"></div>
                <div className="mathContainer" id="todennäköisyysContainer">
                    <div className="gradeContainer">
                        <h1>Osaamisesi</h1>
                        <p className="grade">{todennäköisyys}</p>
                    </div>

                    <div className="mathText">
                        <h1>Todennäköisyys</h1>
                        <p>Todennäköisyysteoria matematiikan osa-alueena tarkastelee todennäköisyyksiä mittateorian avulla.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

class Lukuteoria extends React.Component {
    render() {
        const grades = this.props.grades.slice();
        const lukuteoria = parseFloat(grades[10].toFixed(1))

        return(
            <div className="info" id="lukuteoria">
                <div className="topBar" id="lukuteoriaTopBar"></div>
                <div className="mathContainer" id="lukuteoriaContainer">
                    <div className="gradeContainer">
                        <h1>Osaamisesi</h1>
                        <p className="grade">{lukuteoria}</p>
                    </div>

                    <div className="mathText">
                        <h1>Lukuteoria</h1>
                        <p>Lukuteoria on yksi vanhimmista matematiikan aloista, joka keskittyy lukujen tutkimiseen.
                            Lukuteoria käsitteli aluksi luonnollisia lukuja, mutta on myöhemmin kehittynyt tutkimaan myös laajempia lukujoukkoja.
                            Lukuteoriaan kuuluvia käsitteitä ja menetelmiä ovat esimerkiksi 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export { Algebra, Analyysi, Geometria, Todennakoisyys, Lukuteoria }