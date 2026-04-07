import { Box, Container, Paper } from "@mui/material";
import React from "react";
import styles from "./Banner.module.scss";
import ImgTextBox from "../../ImgTextBox/ImgTextBox";
import SingleTextBox from "../../SingleTextBox/SingleTextBox";

export default function Banner() {
  return (
    <>
      <section className={styles.banner}>
        <Container maxWidth="xxl">
          <ImgTextBox title="Fresh & Healthy Food Specialties" subText="Don't settle for boring. We bring a massive variety of fresh, high-quality food straight to your desk or door. It’s the perfect midday fix—freshly prepared and delivered at lightning speed." />
          <Box
            display={"flex"}
            gap={{ xs: 2, md: 3 }}
            justifyContent={"space-between"}
            flexDirection={{ xs: "column", md: "row" }}
            textAlign={"center"}
            padding={{ xs: 1.5, md: 5 }}
            maxWidth={"xxl"}
          >
            <SingleTextBox
              title="Welcome to our restaurant"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc."
              linkText="Learn more"
            />
            <SingleTextBox
              title="Welcome to our restaurant"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc."
              linkText="Learn more"
            />
          </Box>
        </Container>
      </section>
    </>
  );
}
