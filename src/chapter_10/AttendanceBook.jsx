import React from "react";

const students = [
    {
        id: 1,
        name: "sejong1",
    },
    {
        id: 2,
        name: "sejong2",
    },
    {
        id: 3,
        name: "sejong3",
    },
    {
        id: 4,
        name: "sejong4",
    },
    {
        id: 5,
        name: "sejong5",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}> {student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;
