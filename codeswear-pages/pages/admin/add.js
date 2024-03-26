import React, { useState } from "react";
import {
  Paper,
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
  //   styled,
  Container,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import BaseCard from "@/(DashboardLayout)/components/shared/BaseCard";
import { baselightTheme } from "@/utils/theme/DefaultColors";
// import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import PageContainer from "@/(DashboardLayout)/components/container/PageContainer";

import Header from "@/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/(DashboardLayout)/layout/sidebar/Sidebar";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));
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

const AddProduct = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "",
    color: "",
    size: "",
    price: "",
    desc: "",
    availableQty: "",
  });
  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitForm = async () => {
    console.log(form);
  };
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
              <Grid container spacing={3}>
                <Grid item xs={12} lg={12}>
                  <BaseCard title="Add a Product">
                    <>
                      <Stack spacing={3}>
                        <TextField
                          value={form.title}
                          onChange={handleChange}
                          name="title"
                          label="Title"
                          variant="outlined"
                        />
                        <TextField
                          value={form.slug}
                          onChange={handleChange}
                          name="slug"
                          label="Slug"
                          variant="outlined"
                        />
                        <TextField
                          value={form.category}
                          onChange={handleChange}
                          name="category"
                          label="Category"
                          variant="outlined"
                        />
                        <TextField
                          value={form.color}
                          onChange={handleChange}
                          name="color"
                          label="Color"
                          variant="outlined"
                        />
                        <TextField
                          value={form.size}
                          onChange={handleChange}
                          name="size"
                          label="Size"
                          variant="outlined"
                        />
                        <TextField
                          value={form.price}
                          onChange={handleChange}
                          name="price"
                          label="Price"
                          variant="outlined"
                        />
                        <TextField
                          value={form.availableQty}
                          onChange={handleChange}
                          name="availableQty"
                          label="AvailableQty"
                          variant="outlined"
                        />

                        <TextField
                          value={form.desc}
                          onChange={handleChange}
                          name="desc"
                          label="Description"
                          multiline
                          rows={3}
                        />
                        {/* <TextField
                          error
                          id="er-basic"
                          label="Error"
                          defaultValue="ad1avi"
                          variant="outlined"
                        /> */}
                      </Stack>
                      <br />
                      <Button variant="outlined" onClick={submitForm}>
                        Submit
                      </Button>
                    </>
                  </BaseCard>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </PageWrapper>
      </MainWrapper>
    </ThemeProvider>
  );
};

export default AddProduct;
