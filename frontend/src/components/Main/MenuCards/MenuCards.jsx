import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./MenuCards.module.scss";
import CardWithLink from "../../CardWithLink/CardWithLink";
import StandardTitleSubtitle from "../../utils/StandardTitleSubtitle/StandardTitleSubtitle";

export default function MenuCards({title, subText}) {
return (
  <section className={styles.menuCards}>
      <Container maxWidth="xxl">
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={4}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <StandardTitleSubtitle title={title} subText={subText} />
          <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap={4} justifyContent={"center"} width={"100%"}>
            <CardWithLink image="/images/pasta/raviolino.png" description="The most delicious pastas you can find" title="Pasta" alt={"Pasta"} link={"/menu/pasta"} />
            <CardWithLink image="/images/burger/classic-burger.png" description="The most delicious burgers you can find" title="Burgers" alt={"Burgers"} link={"/menu/burgers"} />
            <CardWithLink image="/images/pizza/margherita.png" description="The most delicious pizzas you can find" title="Pizza" alt={"Pizza"} link={"/menu/pizzas"} />
          </Box>
        </Box>
      </Container>
    </section>
  );
}
