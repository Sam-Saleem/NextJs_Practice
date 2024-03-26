import React, { useState } from "react";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import PageContainer from "@/(DashboardLayout)/components/container/PageContainer";
import ProductPerfomance from "@/(DashboardLayout)/components/dashboard/ProductPerformance";

import { styled, Container, Box, Grid } from "@mui/material";
import Header from "@/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/(DashboardLayout)/layout/sidebar/Sidebar";
import Footer from "@/(DashboardLayout)/layout/footer/page";

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
}));
const AllOrders = () => {
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
              <PageContainer title="All Orders" description="All orders">
                <Grid container spacing={0}>
                  <Grid item xs={12} lg={12}>
                    <ProductPerfomance />
                  </Grid>
                </Grid>
              </PageContainer>
            </Box>
          </Container>
        </PageWrapper>
      </MainWrapper>
    </ThemeProvider>
  );
};

export default AllOrders;
