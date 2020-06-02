import React from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import Button from "react-bootstrap/Button";
import { BASE_URL, headers, DELETE } from "../../../constants/api";
import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteEstablishment(props) {
    const history = useHistory();

    function checkDelete() {
        confirmAlert({
            title: "Are you sure you want to delete the establishment?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => deleteHotel(),
                },
                {
                    label: "No",
                },
            ],
        });
    }

    async function deleteHotel() {
        const url = BASE_URL + "establishments/" + props.id;
        const options = { headers, method: DELETE };
        await fetch(url, options);
        history.push("/admin/establishments");
    }

    return (
        <button onClick={checkDelete}>
            Delete
        </button>
    );
}

export default DeleteEstablishment;
