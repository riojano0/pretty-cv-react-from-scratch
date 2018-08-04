const React = require('react');

class Achievement extends React.Component {
    render() {
        return (
            <div className="achievement">
                <div className="achievement--title">
                    <div className="achievement--title-icon"/>
                    <h2>Achievements</h2>
                    <hr></hr>
                </div>
                <div className="achievement--timeline">
                    {this.renderAchievements()}
                </div>
            </div>
        )
    }

    renderAchievements = () => {
        const achievements = Object.values(this.props);
        achievements.sort((first, second) => first.year < second.year);

        return achievements.map((achievement, index) => {
            return this.renderAchievement(achievement, index);
        });
    }

    renderAchievement = (achievement, index) => {
        return (
            
            <div className={"achievement--" + achievement.certification} key={index}>
                {this.renderIcon(achievement.icon)}
                <div className={"achievement--timeline-year-wrapper"}>
                    <h4 className={"achievement--timeline-year"}>{achievement.year}</h4>
                </div>
                <ul>
                    <li>Achievement : {achievement.achievement}</li>
                    <li><strong>{achievement.center}</strong></li>
                </ul>
            </div>
        )
    }

    renderIcon = (iconType) => {
        let icon = "code";
        const icons = ["android", "angular", "java", "python"];
        if (iconType) {
            iconType = iconType.toLowerCase();
            if (icons.includes(iconType)) {
                icon = iconType;
            }
        }

        return (<div className={`achievement--icon-${icon}`}/>)
    }
}

module.exports = Achievement;