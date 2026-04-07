import { Box, Container, Paper } from '@mui/material'
import ImgTextBox from '../ImgTextBox/ImgTextBox'
import CardCustom from '../CardCustom/CardCustom'
import styles from './ListItems.module.scss'

export default function ListItems({ items }) {
  console.log("Rendering ListItems with items:", items);
  return (
    <section className={styles.listItemsSection}>
      <Container>
        <Box className={styles.listItems}>
           {items.map((item) => (
             <CardCustom
               key={item._id}
               id={item._id}
               title={item.name}
               category={item.category}
               price={item.price}
               image={item.image}
             />
           ))}
        </Box>
      </Container>
    </section>
  )
}
