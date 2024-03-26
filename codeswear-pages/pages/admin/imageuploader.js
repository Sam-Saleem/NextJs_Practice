import React, { useState } from "react";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import PageContainer from "@/(DashboardLayout)/components/container/PageContainer";

import {
  styled,
  Container,
  Box,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
} from "@mui/material";
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
import BaseCard from "@/(DashboardLayout)/components/shared/BaseCard";
// import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Image from "next/image";

import img1 from "@/public/images/backgrounds/u1.jpg";
import img2 from "@/public/images/backgrounds/u3.jpg";
import img3 from "@/public/images/backgrounds/u4.jpg";
import img4 from "@/public/images/big/img5.jpg";
import img5 from "@/public/images/big/img6.jpg";
import img6 from "@/public/images/big/img7.jpg";
import img7 from "@/public/images/big/img8.jpg";
const itemData = [
  {
    img: img1,
    rows: 2,
    cols: 2,
  },
  {
    img: img2,
    title: "Burger",
    rows: 2,
    cols: 2,
  },
  {
    img: img3,
    rows: 2,
    cols: 2,
  },
  {
    img: img2,
    rows: 2,
    cols: 2,
  },
  {
    img: img4,
    rows: 2,
    cols: 2,
  },
  {
    img: img3,
    rows: 2,
    cols: 2,
  },

  {
    img: img6,
    rows: 2,
    cols: 2,
  },
  {
    img: img5,
    title: "Fern",
    rows: 2,
    cols: 2,
  },
  {
    img: img7,
    rows: 2,
    cols: 2,
  },
  {
    img: img2,
    rows: 2,
    cols: 2,
  },
];
const ImageUploader = () => {
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
              <PageContainer title="Dashboard" description="this is Dashboard">
                <Grid container spacing={0}>
                  <Grid item xs={12} lg={12}>
                    <BaseCard title="Upload an Image">
                      <ImageList variant="quilted" cols={4} rowHeight={121}>
                        {itemData.map((itemimg, index) => (
                          <ImageListItem
                            key={index}
                            cols={itemimg.cols || 1}
                            rows={itemimg.rows || 1}
                          >
                            <Image
                              src={itemimg.img}
                              alt="img"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "top",
                              }}
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </BaseCard>
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

export default ImageUploader;
