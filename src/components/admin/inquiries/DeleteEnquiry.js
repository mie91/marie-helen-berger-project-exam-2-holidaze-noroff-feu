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
            title: "Are you sure you want to delete the enquiry?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => deleteEnquiry(),
                },
                {
                    label: "No",
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
        < button className = "__delete-btn __delete-btn--enquiry"
        onClick = {
            checkDelete
        } >
            Delete
        </button>
        </>
    );
}

export default DeleteEnquiry;
