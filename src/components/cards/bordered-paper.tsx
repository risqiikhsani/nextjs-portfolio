
import { Paper } from "@mui/material";
import React from "react";
import { SxProps } from '@mui/system';



interface Props {
  children: React.ReactNode;
  sx?: SxProps;
}

export default function BorderedPaper(props: Props) {
  return (
    <>
      <Paper elevation={3} sx={{ 
        // border:'4px solid cyan',
      borderRadius: '10px', my: '20px', p: '20px' , ...props.sx }}>
        {props.children}
      </Paper>
    </>
  );
}

