import React, { useState } from "react";
import { useStyles } from "./style";
import Text from "../../atoms/text/Text";
import { AiOutlineClose } from "react-icons/ai";

const DialogModal = (props) => {
  const classes = useStyles();
  const { modalTitle } = props;
  const [closeModal, setCloseModal] = useState("flex");
  return (
    <div
      className={classes.container}
      style={{ display: closeModal }}
      onClick={() => setCloseModal("none")}
    >
      <div className={classes.modalBox}>
        <div className={classes.header}>
          <Text value={modalTitle} fontSize="20px" fontWeight="400" />
          <AiOutlineClose onClick={() => setCloseModal("none")} />
        </div>
      </div>
    </div>
  );
};

export default DialogModal;
