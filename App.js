import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialiser l'état avec les informations de la personne et le booléen
    this.state = {
      person: {
        fullName: 'Maryam',
        bio: 'Développeuse passionnée.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Développeur Web'
      },
      show: false,
      interval: 0
    };
  }

  // Méthode pour basculer l'affichage du profil
  toggleProfile = () => {
    this.setState({ show: !this.state.show });
  };

  // Cycle de vie : Méthode exécutée au montage du composant
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ interval: this.state.interval + 1 });
    }, 1000);
  }

  // Cycle de vie : Méthode exécutée avant le démontage du composant
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Méthode render pour afficher le profil ou non selon l'état
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <button onClick={this.toggleProfile}>
          {this.state.show ? 'Masquer le profil' : 'Afficher le profil'}
        </button>

        {this.state.show && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <img src={this.state.person.imgSrc} alt="Profile" />
            <p>{this.state.person.bio}</p>
            <h2>{this.state.person.profession}</h2>
          </div>
        )}

        <div>
          <p>Temps écoulé depuis le montage : {this.state.interval} secondes</p>
        </div>
      </div>
    );
  }
}

export default App;
