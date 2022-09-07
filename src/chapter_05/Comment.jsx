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
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "blacK",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props) {
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="data:image/png;base64,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"
                    alt={styles.image}
                />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}

export default Comment;
