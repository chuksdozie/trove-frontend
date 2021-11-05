import React, { useState, useContext } from "react";
import { useStyles } from "./style";
import Text from "../../components/atoms/text/Text";
import { Grid } from "@mui/material";
import PrimaryButton from "../../components/atoms/buttons/PrimaryButton";
import TextBox from "../../components/atoms/textbox/Textbox";
import { AiOutlineClose } from "react-icons/ai";
import { UserContext, LoadingContext } from "../../store/UserContext";
import { updateUser, updatePassword } from "../../store/APICalls";

const Profile = (props) => {
  const classes = useStyles();
  const { user, setUser } = useContext(UserContext);
  const { setLoading } = useContext(LoadingContext);
  const [closeEditModal, setCloseEditModal] = useState("none");
  const [closePasswordModal, setClosePasswordModal] = useState("none");
  const [firstNameValue, setFirstNameValue] = useState(user.first_name);
  const [lastNameValue, setLastNameValue] = useState(user.last_name);
  const [bankNameValue, setBankNameValue] = useState(user.bank_name);
  const [bankHolderValue, setBankHolderValue] = useState(user.bank_username);
  const [bankAccountValue, setBankAccountValue] = useState(
    user.bank_account_number
  );
  const [oldPasswordValue, setOldPasswordValue] = useState("");
  const [newPasswordValue, setNewPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [showNotifier, setShowNotifier] = useState("none");
  const [modalTitle, setModalTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstNameValue(e.target.value);
    console.log(firstNameValue);
  };

  const handleLastNameChange = (e) => {
    setLastNameValue(e.target.value);
    console.log(lastNameValue);
  };

  const handleBankNameChange = (e) => {
    setBankNameValue(e.target.value);
    console.log(bankNameValue);
  };

  const handleBankHolderChange = (e) => {
    setBankHolderValue(e.target.value);
    console.log(bankHolderValue);
  };

  const handleBankAccountChange = (e) => {
    setBankAccountValue(e.target.value);
    console.log(bankAccountValue);
  };

  const handleOldPasswordChange = (e) => {
    setOldPasswordValue(e.target.value);
    console.log(oldPasswordValue);
  };

  const handleNewPasswordChange = (e) => {
    setNewPasswordValue(e.target.value);
    console.log(newPasswordValue);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPasswordValue(e.target.value);
    console.log(confirmPasswordValue);
  };

  const handleUserUpdate = async (e) => {
    setLoading("flex");
    const userUpdate = {
      first_name: firstNameValue,
      last_name: lastNameValue,
      bank_name: bankNameValue,
      bank_username: bankHolderValue,
      bank_account_number: bankAccountValue,
    };
    const myUpdate = await updateUser(
      userUpdate.first_name,
      userUpdate.last_name,
      userUpdate.bank_name,
      userUpdate.bank_username,
      userUpdate.bank_account_number
    );
    setLoading("none");
    console.log(myUpdate);
    if (!myUpdate.id) {
      console.log("an error");
      setShowNotifier("flex");
      setModalTitle("Error");
      setMessage(myUpdate.error);
    } else {
      setUser({
        ...user,
        first_name: myUpdate.first_name,
        last_name: myUpdate.last_name,
        bank_name: myUpdate.bank_name,
        bank_username: myUpdate.bank_username,
        bank_account_number: myUpdate.bank_account_number,
      });
      console.log(user, 999);
      setShowNotifier("flex");
      setModalTitle("Success");
      setMessage("User Details Updated!");
      setCloseEditModal("none");
    }
  };

  const handlePasswordUpdate = async (e) => {
    setLoading("flex");
    const passwordUpdate = {
      old_password: oldPasswordValue,
      new_password: newPasswordValue,
      confirm_new_password: confirmPasswordValue,
    };
    console.log(passwordUpdate, 56474);
    const myUpdate = await updatePassword(
      passwordUpdate.old_password,
      passwordUpdate.new_password,
      passwordUpdate.confirm_new_password
    );
    setLoading("none");
    console.log(myUpdate);
    if (!myUpdate.id) {
      console.log("password error");
      setShowNotifier("flex");
      setModalTitle("Error");
      setMessage(myUpdate.error);
      setOldPasswordValue("");
      setNewPasswordValue("");
      setConfirmPasswordValue("");
    } else {
      setUser({
        ...user,
        password: myUpdate.password,
      });
      console.log(user, 7789);
      setShowNotifier("flex");
      setModalTitle("Success");
      setMessage("Password Updated!");
      setClosePasswordModal("none");
      setOldPasswordValue("");
      setNewPasswordValue("");
      setConfirmPasswordValue("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "left",
          marginTop: "30px",
        }}
      >
        <Text fontSize={"25px"} value={"My Account"} />
        <Text
          fontSize={"25px"}
          fontWeight={600}
          value={`${user.first_name} ${user.last_name}`}
        />
      </div>

      <div
        style={{
          width: "98%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "left",
          marginTop: "30px",
          backgroundColor: "rgba(150,150,150,0.1)",
          borderRadius: "5px",
          padding: "10px 0px",
        }}
      >
        <div>
          <Text fontSize={"15px"} value={"Personal Information"} />
        </div>
        <div
          style={{
            width: "98%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "left",
            flexWrap: "wrap",
            marginTop: "30px",
            borderRadius: "5px",
            padding: "10px 0px 20px",
          }}
        >
          <Text fontSize={"15px"} value={`F/N: ${user.first_name}`} />
          <Text fontSize={"15px"} value={`L/N: ${user.last_name}`} />
          <Text fontSize={"15px"} value={`P/N: ${user.phonenumber}`} />
          <Text fontSize={"15px"} value={`E/A: ${user.email}`} />
          <Text fontSize={"15px"} value={`DOB: ${user.date_of_birth}`} />
          <Text fontSize={"15px"} value={`Bank Name: ${user.bank_name}`} />
          <Text
            fontSize={"15px"}
            value={`Bank Username: ${user.bank_username}`}
          />
          <Text
            fontSize={"15px"}
            value={`Bank Account Number: ${user.bank_account_number}`}
          />
        </div>
      </div>
      <div
        style={{
          width: "98%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "left",
          flexWrap: "wrap",
          marginTop: "30px",
          borderRadius: "5px",
          padding: "10px 0px 20px",
        }}
      >
        <Grid item xs={2} paddingRight={"20px"}>
          <PrimaryButton
            label="Edit Information"
            onClick={() => setCloseEditModal("flex")}
          />
        </Grid>
        <Grid item xs={2}>
          <PrimaryButton
            label="Change Password"
            onClick={() => setClosePasswordModal("flex")}
          />
        </Grid>
      </div>

      {/* edit profile modal starts here */}
      <div
        className={classes.container}
        style={{ display: closeEditModal }}
        // onClick={() => setCloseEditModal("none")}
      >
        <div className={classes.modalBox}>
          <div className={classes.header}>
            <Text value={"Edit Profile"} fontSize="20px" fontWeight="400" />
            <AiOutlineClose onClick={() => setCloseEditModal("none")} />
          </div>
          <Grid container item xs={12} spacing={2} justifyContent="center">
            <Grid container item xs={12} justifyContent="center">
              <Text
                value={"Fill in only areas that need update"}
                fontSize="13px"
                fontWeight="400"
              />
            </Grid>
            <Grid item xs={10} justifyContent="center">
              <TextBox
                placeholder="First Name"
                value={firstNameValue}
                onChange={handleFirstNameChange}
              />
            </Grid>
            <Grid item xs={10} justifyContent="center">
              <TextBox
                placeholder="Last Name"
                value={lastNameValue}
                onChange={handleLastNameChange}
              />
            </Grid>
            <Grid item xs={10} justifyContent="center">
              <TextBox
                placeholder="Bank Name"
                value={bankNameValue}
                onChange={handleBankNameChange}
              />
            </Grid>
            <Grid item xs={10} justifyContent="center">
              <TextBox
                placeholder="Bank Holder Name"
                value={bankHolderValue}
                onChange={handleBankHolderChange}
              />
            </Grid>
            <Grid item xs={10} justifyContent="center">
              <TextBox
                placeholder="Bank Account Number"
                value={bankAccountValue}
                onChange={handleBankAccountChange}
              />
            </Grid>
            <Grid item xs={10}>
              <PrimaryButton
                type="submit"
                label="Update"
                onClick={() => handleUserUpdate()}
              />
            </Grid>
          </Grid>
        </div>
      </div>
      {/* edit profile modal ends here */}

      {/* edit password modal starts here */}
      <div
        className={classes.container}
        style={{ display: closePasswordModal }}
        // onClick={() => setClosePasswordModal("none")}
      >
        <div className={classes.modalBox}>
          <div className={classes.header}>
            <Text value={"Change Password"} fontSize="20px" fontWeight="400" />
            <AiOutlineClose onClick={() => setClosePasswordModal("none")} />
          </div>
          <Grid container item xs={12} spacing={2} justifyContent="center">
            <Grid item xs={10} justifyContent="center">
              <TextBox
                type="password"
                placeholder="Old Password"
                value={oldPasswordValue}
                onChange={handleOldPasswordChange}
              />
            </Grid>
            <Grid item xs={10} justifyContent="center">
              <TextBox
                type="password"
                placeholder="New Password"
                value={newPasswordValue}
                onChange={handleNewPasswordChange}
              />
            </Grid>
            <Grid item xs={10} justifyContent="center">
              <TextBox
                type="password"
                placeholder="Confirm New Password"
                value={confirmPasswordValue}
                onChange={handleConfirmPasswordChange}
              />
            </Grid>
            <Grid item xs={10}>
              <PrimaryButton
                type="submit"
                label="Update"
                onClick={() => handlePasswordUpdate()}
              />
            </Grid>
          </Grid>
        </div>
      </div>
      {/* edit profile modal ends here */}

      <div
        className={classes.notifyContainer}
        style={{ display: showNotifier }}
        // onClick={() => setCloseModal("none")}
      >
        <div className={classes.notifyModalBox}>
          <div className={classes.notifyHeader}>
            <Text value={modalTitle} fontSize="20px" fontWeight="400" />
            <AiOutlineClose onClick={() => setShowNotifier("none")} />
          </div>
          <div className={classes.notifyMessage}>
            <Text value={message} fontSize="15px" fontWeight="400" />
          </div>
          <Grid xs={4}>
            <PrimaryButton
              label={"OK"}
              onClick={() => setShowNotifier("none")}
            />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Profile;
