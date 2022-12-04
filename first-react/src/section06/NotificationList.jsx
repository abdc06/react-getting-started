import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message : "안녕하세요. 오늘의 일정을 알려드립니다."
    },
    {
        id: 2,
        message : "곧 오전 회의시간입니다."
    },
    {
        id: 3,
        message : "지금은 점심시간입니다."
    },
    {
        id: 4,
        message : "30분 후 고객과의 미팅시간입니다."
    },
    {
        id: 5,
        message : "이제 곧 취침할 시간입니다."
    }
];

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        }
    }

    componentDidMount() {
        const { notifications } = this.state;
        let timer;

        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notifiaction) => {
                    return <Notification
                                key={notifiaction.id}
                                id={notifiaction.id}
                                message={notifiaction.message}
                        />
                })}
            </div>
        )
    }
}

export default NotificationList;