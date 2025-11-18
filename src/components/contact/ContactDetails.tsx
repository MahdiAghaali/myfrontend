import 
  React,
  { type ReactNode } 
from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface DetailCard {
  icon: ReactNode;
  heading: string;
  value: string;
}

const details: DetailCard[] = [
  { icon: <EmailIcon fontSize="large" />, heading: 'Email',  value: 'hello@yourcompany.com' },
  { icon: <PhoneIcon fontSize="large" />, heading: 'Phone',  value: '+49 30 1234 5678' },
  { icon: <LocationOnIcon fontSize="large" />, heading: 'Office', value: 'Fictionalstraße 42, 10115 Berlin' },
];

const ContactDetails: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 6, md: 8 }, px: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {details.map(({ icon, heading, value }, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                height: '100%',
                boxShadow: 3,
                borderRadius: 2,
                textAlign: 'center',
                p: 3,
              }}
            >
              <Stack
                alignItems="center"
                justifyContent="center"
                spacing={2}
                sx={{ color: theme.palette.primary.main }}
              >
                {icon}
              </Stack>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactDetails;
