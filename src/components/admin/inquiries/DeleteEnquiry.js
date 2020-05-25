import React from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import Button from "react-bootstrap/Button";
import { BASE_URL, headers, DELETE } from "../../../constants/api";
import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteEnquiry(props) {
    const history = useHistory();

    function checkDelete() {
        confirmAlert({
            title: "Confirm deletion",
            buttons: [
                {
                    label: "yes",
                    onClick: () => deleteEnquiry(),
                },
                {
                    label: "no",
                },
            ],
        });
    }

    async function deleteEnquiry() {
        const url = BASE_URL + "enquiries/" + props.id;
        const options = { headers, method: DELETE };
        await fetch(url, options);
        history.push("/admin/enquiries");
    }

    return (
        <>
        <Button variant="danger" onClick={checkDelete}>
            Delete
        </Button>
        </>
    );
}

export default DeleteEnquiry;
