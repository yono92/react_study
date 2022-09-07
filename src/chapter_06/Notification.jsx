import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    bordermessageText: {
        color: "black",
        fontsize: 16,
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called`); // 변수가 들어가야 해서 백틱으로 감싸줌
    }

    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called`);
    }

    componentWillUnmount() {
        console.log(`${this.props.id} componentWillMount() called`); // 콘솔에 찍히지 않음
    }
    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;
