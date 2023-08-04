//https://mui.com/material-ui/guides/routing/#next-js

import Button from '@mui/material/Button';
import { NextLinkComposed } from './Link';

interface IndexProps {
  name: string;
  to: string | { pathname: string; query?: any };
  // You can add other props if needed
}

export default function LinkButton(props: IndexProps) {
  const { name, to } = props;

  return (
    <Button
      component={NextLinkComposed}
      to={to}
      sx={{color:'white',mx:'10px'}}
    >
      {name}
    </Button>
  );
} 
