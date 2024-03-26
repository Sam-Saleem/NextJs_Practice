import React, { useState } from "react";
import mongoose from "mongoose";
import Product from "@/models/Product";

import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import PageContainer from "@/(DashboardLayout)/components/container/PageContainer";
import AllProducts from "@/(DashboardLayout)/components/dashboard/AllProducts";

import { styled, Container, Box, Grid, Paper } from "@mui/material";
import Header from "@/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/(DashboardLayout)/layout/sidebar/Sidebar";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
  overflowX: "auto",
}));
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));
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

const Products = ({ products }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <ThemeProvider theme={baselightTheme}>
      <style jsx global>
        {`
          Navbar {
            display: none;
          }
          Footer {
            display: none;
          }
        `}
      </style>
      <CssBaseline />
      <MainWrapper className="mainwrapper">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />

        <PageWrapper className="page-wrapper">
          <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />

          <Container
            sx={{
              paddingTop: "20px",
              maxWidth: "1200px",
            }}
          >
            <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
              {/* <PageContainer title="All Orders" description="All orders"> */}
              <Grid container spacing={0}>
                <Grid item xs={12} lg={12}>
                  <AllProducts products={products} />
                </Grid>
              </Grid>
              {/* </PageContainer> */}
            </Box>
          </Container>
        </PageWrapper>
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Products;

export async function getServerSideProps() {
  // Connecting to databse
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  // Getting all the products:
  let products = await Product.find();

  // Pass data to the page via props
  // Creaing a deep copy of this object as it contains an id which is object
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
