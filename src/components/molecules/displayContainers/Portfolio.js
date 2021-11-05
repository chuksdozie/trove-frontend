import React, { useContext } from "react";
import { Grid } from "@mui/material";
import Text from "../../atoms/text/Text";
import { StockContext } from "../../../store/UserContext";

const PortfolioContainer = () => {
  const { stock } = useContext(StockContext);
  return (
    <div
      style={{
        // backgroundColor: "#013220",
        backgroundImage: "linear-gradient(315deg, #63d471 0%, #233329 74%,)",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px 0",
        width: "100%",
      }}
    >
      {stock.map((i, k) => (
        <div style={{ width: "25%" }}>
          <Grid
            container
            xs={12}
            direction="column"
            justifyContent="left"
            alignItems="flex-start"
            backgroundColor={"#013220"}
            boxShadow="0 0 3px 3px rgba(150,150,150,0.5)"
            paddingBottom={"7px"}
            spacing={1}
            key={k}
          >
            <Grid container item justifyContent="left">
              <Text value={`${i.symbol}`} color={"#fff"} fontSize="15px" />
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              xs={12}
            >
              <Text
                value={`$${i.equity_value}`}
                color={"#fff"}
                fontSize="55px"
              />
              <Grid
                item
                container
                //spacing={1}
                xs={12}
                //justifyContent="left"
              >
                <Grid
                  item
                  container
                  //spacing={1}
                  xs={5.5}
                  //justifyContent="left"
                >
                  <Text
                    value={`TQ: ${i.total_quantity}`}
                    color={"#fff"}
                    fontSize="12px"
                  />
                </Grid>
                <Grid
                  item
                  container
                  //spacing={1}
                  xs={5.5}
                  //justifyContent="left"
                >
                  <Text value={`PPS: *`} color={"#fff"} fontSize="12px" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default PortfolioContainer;
