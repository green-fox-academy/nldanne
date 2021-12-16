import React from 'react';
import Button from './Button';
import Display from './Display';

class SingleGoldenAcornApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.keydown);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydown);
  }

  keydown = (event) => {
    if (event.key === 'ArrowUp') {
      this.setState({
        count: this.state.count + 1
      });
    } else if (event.key === 'ArrowDown') {
      if(this.state.count > 0) {
        this.setState({
          count: this.state.count -1
        });
      } else {
        this.setState({
          count: 0
        })
      }
    }
  }

  buyOne = () => {
    this.setState({
      count: this.state.count +1
    });
  }

  eatOne = () => {
    if(this.state.count > 0) {
      this.setState({
        count: this.state.count -1
      });
    } else {
      this.setState({
        count: 0
      })
    }
  }


  render () {
    return (
      <div tabIndex="0" >
        <Button handleClick={this.buyOne} label="Buy one"></Button>
        <Display>
          <p>{this.state.count}</p>
        </Display>
        <Button handleClick={this.eatOne} label="Eat one" ></Button>
      </div>
    );
  }
}


export default SingleGoldenAcornApp;


