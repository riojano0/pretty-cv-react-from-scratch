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
                {this.renderAchievements()}
            </div>
        )
    }

    renderAchievements = () => {
        const achievements = Object.values(this.props);
        achievements.sort((first, second) => first.year > second.year);

        return achievements.map((achievement, index) => {
            return this.renderAchievement(achievement, index);
        });
    }

    renderAchievement = (achievement, index) => {
        //TODO ADD TIMELINE
        return (
            <div className={"education--" + achievement.certification} key={index}>
                {this.renderIcon(achievement.icon)}
                <ul>
                    <li>Certification : {achievement.certification}</li>
                    <li>Center : {achievement.center}</li>
                    <li>Year : {achievement.year}</li>
                </ul>
            </div>
        )
    }

    renderIcon = (iconType) => {
        let icon = "default";
        const icons = ["angular", "code", "java", "python"];
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