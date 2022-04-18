import * as React from 'react';
import { createTheme , ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { purple , orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: orange[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});

const marks = [
  {
    value: 'h6',
    label: "xs",
  },
  {
    value: 'h5',
    label: "s",
  },
  {
    value: 'h4',
    label: "m",
  },
  {
    value: 'h3',
    label: "l",
  },
  {
    value: 'h4',
    label: "xl",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function SliderComponent() {
  return (
    <ThemeProvider theme = {theme}>
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={'h6'}
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
    </ThemeProvider>
  );
}
