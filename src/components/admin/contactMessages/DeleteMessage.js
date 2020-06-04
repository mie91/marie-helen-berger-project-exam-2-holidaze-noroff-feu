import React from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import Button from "react-bootstrap/Button";
import { BASE_URL, headers, DELETE } from "../../../constants/api";
import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteMessage(props) {
    const history = useHistory();

    function checkDelete() {
        confirmAlert({
            title: "Confirm deletion",
            buttons: [
                {
                    label: "yes",
                    onClick: () => DeleteMessage(),
                },
                {
                    label: "no",
                },
            ],
        });
    }

    async function DeleteMessage() {
        const id = "id-of-contact-to-delete";
        const url = BASE_URL + "contacts/" + props.id;
        const options = { headers, method: DELETE };
        await fetch(url, options);
        history.push("/admin/contacts");
    }

    return (
         <>
        <button className = "__delete-btn __delete-btn--enquiry"
        onClick = {
            checkDelete
        }>
            Delete
        </button>
        </>
    );
}

export default DeleteMessage;
