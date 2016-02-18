import React from 'react';
import ReactDOM from 'react-dom';

class Learn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hasName:false,
      value:'hhName'
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }
  handleClick(e) {
    this.refs.myInput.focus();
  }
  handleMouseEnter(e) {
    this.setState({hasName: !this.state.hasName});
  }
  render() {
    let self = this;
    let name = this.state.hasName ? this.state.value : this.props.name;
    return (
      <div>
        <ol>
        {
          React.Children.map(this.props.children, function(child) {
            return <li>{self.props.title}-{name}-{child}</li>
          })
        }
        </ol>
        <input type="text" ref="myInput" />
        <input type="button" value="focus myInput" onClick={this.handleClick} />
        <input type="button" value="change name" onMouseEnter={this.handleMouseEnter} />
      </div>
    );
  }
}
Learn.defaultProps = {
  title:'',
  name: 'hName'
}
Learn.propTypes = {
  title: React.PropTypes.string,
  name: React.PropTypes.string
}

let title = 'hTitle';
ReactDOM.render(
  <Learn title={title}>
    <span>ab</span>
    <span>cd</span>
  </Learn>,
  document.getElementById('example')
);
