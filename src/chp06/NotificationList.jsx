import React from "react";
import Notification from "./Notification";

const reservedNotification = [
    {
      message: "안녕하세요 오늘 일정을 알려드립니다.",
    },
    {
        message: "현재 수업중인 웹프로그래밍활용 수업을 열심히 들으세요.",
    },
    {
        message: "열심히 듣고 Git에 Commit한 후 하교하시면 됩니다."
    },
    {
        message: "집에 가즈아!!"
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;

        timer = setInterval(() => {
            if (notifications.length < reservedNotification.length){
                const index = notifications.length;
                notifications.push(reservedNotification[index]);
                this.setState({
                    notifications: notifications,
                });
            }else {
                clearInterval(timer);
            }
        },2500);
    }

    componentWillUnmount() {
        if (timer){
            clearInterval(timer);
        }
    }

    render() {
        return(
            <div>
                {
                    this.state.notifications.map((notification) => {
                        return <Notification message={notification.message}/>;
                    })
                }
            </div>
        );
    }
}

export default NotificationList;