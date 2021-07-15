import React from 'react';

const Skills = (props) => {
    return (
      <div className="row">
          <div className="col-md-12 skills-wrapper">
              <h3>Key Skills</h3>

              <div className="col-md-12 show-skills">
                  {
                      props.skillSet.map(skill => <span>{skill}</span>)
                  }
              </div>
          </div>
      </div>
    );
};

export default Skills;
