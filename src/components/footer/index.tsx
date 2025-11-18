import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Launch,
} from '@mui/icons-material';
import LogoIcon from '@mui/icons-material/Business'; // placeholder icon

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.grey[900],
        color: 'white',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, sm: 6, md: 3}}>
            <Box display="flex" alignItems="center" mb={1}>
              <LogoIcon fontSize="large" />
              <Typography variant="h6" sx={{ ml: 1 }}>
                Chimerical Lion Inc.
              </Typography>
            </Box>
            <Typography variant="body2">
              123 Innovation Street<br />
              Future City, 45678<br />
              contact@chimericallion.com<br />
              +1 (800) 555-0123
            </Typography>
          </Grid>

          {/* Pages */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Pages
            </Typography>
            <MuiLink href="/about" color="inherit" underline="hover" display="block">
              About Us
            </MuiLink>
            <MuiLink href="/careers" color="inherit" underline="hover" display="block">
              Careers
            </MuiLink>
            <MuiLink href="/faq" color="inherit" underline="hover" display="block">
              FAQ
            </MuiLink>
            <MuiLink href="/contact" color="inherit" underline="hover" display="block">
              Contact
            </MuiLink>
          </Grid>

          {/* External / Media Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Media & External
            </Typography>
            <MuiLink
              href="https://newsroom.example.com"
              color="inherit"
              underline="hover"
              display="flex"
              alignItems="center"
              {...externalLinkProps}
            >
              Newsroom <Launch fontSize="small" sx={{ ml: 0.5 }} />
            </MuiLink>
            <MuiLink
              href="https://blog.example.com"
              color="inherit"
              underline="hover"
              display="flex"
              alignItems="center"
              {...externalLinkProps}
            >
              Blog <Launch fontSize="small" sx={{ ml: 0.5 }} />
            </MuiLink>
          </Grid>

          {/* Social Media */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton
                href="https://facebook.com"
                {...externalLinkProps}
                sx={{ color: 'white' }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                {...externalLinkProps}
                sx={{ color: 'white' }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                {...externalLinkProps}
                sx={{ color: 'white' }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                {...externalLinkProps}
                sx={{ color: 'white' }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Divider and Bottom Bar */}
        <Divider sx={{ bgcolor: 'grey.700', my: 3 }} />
        <Box
          display="flex"
          justifyContent={isMobile ? 'center' : 'space-between'}
          flexDirection={isMobile ? 'column' : 'row'}
          alignItems="center"
          gap={1}
        >
          <Typography variant="body2" color="grey.400">
            © {new Date().getFullYear()} Chimerical Lion Inc. All rights reserved.
          </Typography>
          <Box display="flex" gap={2}>
            <MuiLink href="/imprint" color="inherit" underline="hover">
              Imprint
            </MuiLink>
            <MuiLink href="/privacy" color="inherit" underline="hover">
              Data Protection
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
