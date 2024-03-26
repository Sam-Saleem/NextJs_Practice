import React, { useState } from "react";

import PageContainer from "@/(DashboardLayout)/components/container/PageContainer";
// components
import SalesOverview from "@/(DashboardLayout)/components/dashboard/SalesOverview";
import DailyActivity from "@/(DashboardLayout)/components/dashboard/DailyActivity";
import ProductPerformance from "@/(DashboardLayout)/components/dashboard/ProductPerformance";
import BlogCard from "@/(DashboardLayout)/components/dashboard/Blog";

import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { styled, Container, Box, Grid } from "@mui/material";
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
}));
const Dashboard = () => {
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
      {/* <ToastContainer /> */}
      <MainWrapper className="mainwrapper">
        {/* ------------------------------------------- */}
        {/* Sidebar */}
        {/* ------------------------------------------- */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
          onSidebarClose={() => setMobileSidebarOpen(false)}
        />
        {/* ------------------------------------------- */}
        {/* Main Wrapper */}
        {/* ------------------------------------------- */}
        <PageWrapper className="page-wrapper">
          {/* ------------------------------------------- */}
          {/* Header */}
          {/* ------------------------------------------- */}
          <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
          {/* ------------------------------------------- */}
          {/* PageContent */}
          {/* ------------------------------------------- */}
          <Container
            sx={{
              paddingTop: "20px",
              maxWidth: "1200px",
            }}
          >
            {/* ------------------------------------------- */}
            {/* Page Route */}
            {/* ------------------------------------------- */}
            <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
              <PageContainer title="Dashboard" description="this is Dashboard">
                <Box mt={3}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                      <SalesOverview />
                    </Grid>
                    {/* ------------------------- row 1 ------------------------- */}
                    <Grid item xs={12} lg={4}>
                      <DailyActivity />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                      <ProductPerformance />
                    </Grid>
                    <Grid item xs={12} lg={12}>
                      <BlogCard />
                    </Grid>
                  </Grid>
                </Box>
              </PageContainer>
            </Box>
            {/* ------------------------------------------- */}
            {/* End Page */}
            {/* ------------------------------------------- */}

            {/* ------------------------------------------- */}
            {/* Footer */}
            {/* ------------------------------------------- */}
            {/* <Footer /> */}
          </Container>
        </PageWrapper>
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Dashboard;
