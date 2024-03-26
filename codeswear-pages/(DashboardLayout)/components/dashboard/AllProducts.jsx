import React, { useEffect } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";

// const products = [
//   {
//     id: "1",
//     name: "Sunil Joshi",
//     post: "Web Designer",
//     pname: "Elite Admin",
//     priority: "Low",
//     pbg: "primary.main",
//     budget: "3.9",
//   },
//   {
//     id: "2",
//     name: "Andrew McDownland",
//     post: "Project Manager",
//     pname: "Real Homes WP Theme",
//     priority: "Medium",
//     pbg: "secondary.main",
//     budget: "24.5",
//   },
//   {
//     id: "3",
//     name: "Christopher Jamil",
//     post: "Project Manager",
//     pname: "MedicalPro WP Theme",
//     priority: "High",
//     pbg: "error.main",
//     budget: "12.8",
//   },
//   {
//     id: "4",
//     name: "Nirav Joshi",
//     post: "Frontend Engineer",
//     pname: "Hosting Press HTML",
//     priority: "Critical",
//     pbg: "success.main",
//     budget: "2.4",
//   },
// ];

const AllProducts = ({ products }) => {
  useEffect(() => {
    console.log("products", products);
  }, []);
  return (
    <BaseCard title="All Products">
      <TableContainer
        sx={{
          width: {
            xs: "274px",
            sm: "100%",
          },
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Slug & Image
                </Typography>
              </TableCell>
              {/* <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Image
                </Typography>
              </TableCell> */}
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Size/Color
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Price
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {product.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {product.slug}
                      </Typography>
                      <Typography color="textSecondary" fontSize="13px">
                        <img src={product.img} alt="" width={100} height={30} />
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.size}/ {product.color}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      pl: "4px",
                      pr: "4px",
                      backgroundColor: "#03c9d7",
                      color: "#fff",
                    }}
                    size="small"
                    label={`Rs.${product.price}`}
                  ></Chip>
                </TableCell>
                {/* <TableCell align="right">
                  <Typography variant="h6">${product.budget}k</Typography>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BaseCard>
  );
};

export default AllProducts;
