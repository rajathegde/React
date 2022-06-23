import React from "react";
import Button from "@material-ui/core/Button";
import { DropzoneArea } from "material-ui-dropzone";
import APIService from "../services/api-service";
import { makeStyles } from "@material-ui/core/styles";

export default function UploadPopup(props) {
    const propsData = props;
    const [visible, setVisible] = React.useState(true);

    const [selectedFile, setSelectedFile] = React.useState(null);
    const [message, setMessage] = React.useState(false);
    const useStyles = makeStyles({
        input: {
            height: "50px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
            border: "none",
            margin: "10px 0",
        },
        dropzone: {
            fontSize: "12px",
        },
    });
    const classes = useStyles();
    React.useEffect(() => {
        setVisible(true);
        setSelectedFile(null);
    }, [props]);
    const handleChangeFile = (files) => {
        if (files[0] !== undefined) {
            setSelectedFile(files[0]);
            console.log("files", files[0].type);
            
        }
    };




    return (

        <>
            {/* <Input className={classes.input} placeholder="Link" /> */}
            <DropzoneArea
                dropzoneText="Drop your files here or Browse"
                onChange={handleChangeFile}
                // acceptedFiles={[
                //     "video/webm",
                //     "video/mp4",
                //     "video/mp4",
                //     "video/mov",
                //     "video/wmv",
                //     "video/avi",
                // ]}
                acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                showFileNames={true}
                showAlerts={["error"]}
                filesLimit={5}
                // maxFileSize="5"
                dropzoneClass={classes.dropzone}
            />
        </>

    );
}
