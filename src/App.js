import { Component } from 'react';
import './App.css';
import ProfilePhoto from './components/img1.jpg';



class App extends Component {
  state = {
    person: {
      fullName: 'Cyrine Benali',
      bio: 'Lorem ipsum dolor sit amet.',
      imgSrc: ProfilePhoto ,
      profession: 'Developer'
    },
    show: false,
    mountedAt: null,
  };

  componentDidMount() {
    this.startInterval();
  };
  componentWillUnmount() {
    this.stopInterval();
  }
  startInterval(){
    const {mountedAt} =this.state;
    const currentTime= new Date() ;
    const time=Math.floor(((currentTime - mountedAt )/1000)) ;
  console.log(time);
    return time;
  }
 
  stopInterval=()=>{
    clearInterval(this.interval);
  };
 toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
    
  };

  calculateElapsedTime = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {

    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;


    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        <p>Component mounted {this.startInterval()} mseconds ago.</p>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>{profession}</p>
          </div>
        )}
      </div>
    );
  } 
 };

export default App;
