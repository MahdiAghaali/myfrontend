import { Box, Button, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import type { PageT } from "../../types";

type PropsT = {
  pages: PageT[]
}

const DesktopMenu = ({ pages }: PropsT) => {
  return (
    <>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        component={Link}
        to={"/"}
        noWrap
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LOGO Desktop
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page.title}
            component={Link}
            to={page.link}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page.title}
          </Button>
        ))}
      </Box>
    </>
  )
}

export default DesktopMenu