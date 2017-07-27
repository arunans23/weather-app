var React = require('react');

var About = (props) =>{
  return(
    <div>
      <h3 className="text-center page-title">About</h3>
      <p>This system was developed for educational purposes</p>
      <br/>
      <p>You can find the github repo for the project in
        <a href="https://github.com/arunans23/weather-app"> here</a>
      .</p>
      <br/>
    </div>
  )
};

module.exports = About;
