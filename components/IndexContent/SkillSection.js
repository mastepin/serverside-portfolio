import React, { Component } from "react";
import { Progress } from "reactstrap";
import Link from "next/link";

export default class SkillSection extends Component {
  constructor(props) {
    super(props);

    const skills = [
      {
        skillName: "JavaScript",
        icon: "fab fa-js-square fa-8x",
        percentage: "90",
      },
      {
        skillName: "HTML5",
        icon: "fab fa-html5 fa-8x",
        percentage: "90",
      },
      {
        skillName: "CSS3",
        icon: "fab fa-css3 fa-8x",
        percentage: "85",
      },
      {
        skillName: "Bootstrap",
        icon: "fab fa-bootstrap fa-8x",
        percentage: "80",
      },
      {
        skillName: "NodeJS",
        icon: "fab fa-node-js fa-8x",
        percentage: "70",
      },
      {
        skillName: "React",
        icon: "fab fa-react fa-8x",
        percentage: "85",
      },
      {
        skillName: "VueJS",
        icon: "fab fa-vuejs fa-8x",
        percentage: "60",
      },
      {
        skillName: "Java",
        icon: "fab fa-java fa-8x",
        percentage: "75",
      },
      {
        skillName: "GIT",
        icon: "fab fa-git fa-8x",
        percentage: "60",
      },
      {
        skillName: "PHP",
        icon: "fab fa-php fa-8x",
        percentage: "80",
      },
      {
        skillName: "Laravel",
        icon: "fab fa-laravel fa-8x",
        percentage: "75",
      },
      {
        skillName: "Wordpress",
        icon: "fab fa-wordpress-simple fa-8x",
        percentage: "90",
      },
      {
        skillName: "Blogger",
        icon: "fab fa-blogger fa-8x",
        percentage: "80",
      },
      {
        skillName: "Linux",
        icon: "fab fa-linux fa-8x",
        percentage: "85",
      },
      {
        skillName: "Windows",
        icon: "fab fa-microsoft fa-8x",
        percentage: "95",
      },
    ];

    this.state = {
      skills,
    };
  }

  render() {
    return (
      <div
        className={`section section-container p-5 ${
          this.props.isPages ? "" : "section-bg-gray"
        } `}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='section-title'>
                <h3>My Skill</h3>
              </div>
              <div className='row'>
                <div className='offset-md-4 offset-lg-4' />
                <div className='col-md-4'>
                  <div className='section-subtitle'>
                    <p>Here's are come skills that i have</p>
                  </div>
                </div>
              </div>
              <div className='skill-divider' />
              <div className='myskill'>
                <div className='row'>
                  {this.state.skills.map((skill) => (
                    <div
                      className='col-md-3 col-sm-12 mb-5'
                      key={skill.skillName}
                    >
                      <div className='skillPanel'>
                        <div className='row'>
                          <div className='col-md-12'>
                            <i className={`${skill.icon} skill-icon`} />
                          </div>
                          <div className='offset-md-2 col-md-8 text-center'>
                            <Progress
                              value={skill.percentage}
                              className='skillProgress'
                            />
                          </div>
                          <div className='col-md-12'>
                            <p className='skillName'>{skill.skillName}</p>
                          </div>
                          <div className='col-md-12'>
                            <p className='SkillPercentage'>{`${skill.percentage}%`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='row mb-3'>
            <div
              className={`col-md-12 text-center ${
                this.props.isPages ? "hidden" : "show"
              } `}
            >
              <Link href='/skills'>
                <a className='btn ghost-button ghost-teal'>
                  View More About My Skill
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
