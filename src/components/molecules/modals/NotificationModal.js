import React, { useState } from "react";
import { useStyles } from "./style";
import Grid from "@mui/material/Grid";
import Text from "../../atoms/text/Text";
import { AiOutlineClose } from "react-icons/ai";
import PrimaryButton from "../../atoms/buttons/PrimaryButton";

const NotificationModal = (props) => {
  const classes = useStyles();
  const { notificationModalTitle, message, show } = props;
  const [closeModal, setCloseModal] = useState(show);
  return (
    <div
      className={classes.container}
      style={{ display: closeModal }}
      // onClick={() => setCloseModal("none")}
    >
      <div className={classes.modalBox}>
        <div className={classes.header}>
          <Text
            value={notificationModalTitle}
            fontSize="20px"
            fontWeight="400"
          />
          <AiOutlineClose onClick={() => setCloseModal(show)} />
        </div>
        <div className={classes.message}>
          <Text value={message} fontSize="15px" fontWeight="400" />
        </div>
        <Grid xs={4}>
          <PrimaryButton label={"OK"} onClick={() => setCloseModal(show)} />
        </Grid>
      </div>
    </div>
  );
};

export default NotificationModal;
