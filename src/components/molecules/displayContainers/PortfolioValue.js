import React, { useContext } from "react";
import { Grid } from "@mui/material";
import Text from "../../atoms/text/Text";
import { UserContext, StockContext } from "../../../store/UserContext";

const PortfolioValueContainer = () => {
  const { user } = useContext(UserContext);
  const { stock } = useContext(StockContext);
  console.log(stock[0], "555");
  return (
    <div
      style={{
        backgroundColor: "#7f53ac",
        backgroundImage: "linear-gradient(315deg, #130f40 0%, #000000 74%)",
        borderRadius: "5px",
        padding: "30px",
        height: "170px",
        boxShadow: "0 0 3px 3px rgba(150,150,150,0.5)",
      }}
    >
      <Grid
        container
        xs={12}
        direction="column"
        justifyContent="left"
        alignItems="flex-start"
        // backgroundColor={"red"}
        spacing={1}
      >
        <Grid item>
          <Text
            value={
              !user ? undefined : `Hello ${user.first_name} ${user.last_name},`
            }
            color={"#fff"}
            fontSize="25px"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="flex-start"
          spacing={-2}
        >
          <Text
            value={`Your Portfolio Value is`}
            color={"#fff"}
            fontSize="18px"
          />
          <Text
            value={!user ? undefined : `$${user.portfolio_value}`}
            color={"#fff"}
            fontSize="70px"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PortfolioValueContainer;
