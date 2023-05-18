import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../utilities/products-service";
import {
  Box,
  Typography,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function ProductDetailsPage({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error(`Error fetching product: ${error}`);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "calc(100vh - 64px)", // Assumes your navbar is 64px tall
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={product.thumbnail}
            alt={product.title}
            sx={{ maxHeight: 600, maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="div" sx={{ marginTop: 2 }}>
            {product.title}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            {product.description}
          </Typography>
          <Table sx={{ marginTop: 2 }}>
            <TableBody>
              <TableRow>
                <TableCell variant="head">Price</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Brand</TableCell>
                <TableCell>{product.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="head">Rating</TableCell>
                <TableCell>{product.rating}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
