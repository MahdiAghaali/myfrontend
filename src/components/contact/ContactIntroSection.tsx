import { Box, Typography, Container } from '@mui/material';

/**
 * Simple hero / intro copy for the contact page.
 */
const ContactIntroSection: React.FC = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      py: { xs: 8, md: 12 },
      px: 2,
    }}
  >
    <Container maxWidth="md">
      <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
        Get in Touch
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        align="center"
        sx={{ maxWidth: 600, mx: 'auto' }}
      >
        Whether you have a project in mind, a partnership idea, or just a
        curious question, we’d love to hear from you. Drop us a line and
        we’ll get with you shortly.
      </Typography>
    </Container>
  </Box>
);

export default ContactIntroSection;
