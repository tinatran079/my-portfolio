import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;

      // group skills by category
      var groupedSkills = {};
      this.props.sharedSkills.icons.forEach(function (skill) {
        if (skill.category in groupedSkills) {
          groupedSkills[skill.category].push(skill);
        } else {
          groupedSkills[skill.category] = [skill];
        }
      });

      // generate skills list for each category
      var skillsByCategory = [];
      for (var category in groupedSkills) {
        var skills = groupedSkills[category].map(function (skill, i) {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center skills-tile">
                  <i className={skill.class} style={{ fontSize: "220%" }}>
                    <p
                      className="text-center"
                      style={{ fontSize: "30%", marginTop: "4px" }}
                    >
                      {skill.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });

        skillsByCategory.push(
          <div className="col-md-12 text-center" key={category}>
            <h2 className="text-white">{category}</h2>
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        );
      }
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          {skillsByCategory}
        </div>
      </section>
    );
  }
}

export default Skills;
