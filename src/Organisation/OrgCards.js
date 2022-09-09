import { Card, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from "../assets/icon.svg";

const OrgCards = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card
            sx={{
              position: "absolute",
              background: "yellow",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography>
                Core HR <br /> 14 organisations
              </Typography>

              <img
                src={Image}
                sx={{
                  height: "60px",
                }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrgCards;
