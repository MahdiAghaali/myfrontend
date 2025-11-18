import {
  Box,
  Typography,
  Grid,
  Button,
  CardMedia,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    title: 'Realtime Chat App',
    slug: 'chat-app',
    description:
      'A WebSocket-powered chat app with real-time notifications, user presence tracking, and custom emojis. Built with Node.js and React.',
    image: '/projects/Proj1.png',
  },
  {
    title: 'Smart Garden Controller',
    slug: 'smart-garden',
    description:
      'An Arduino + ESP32-based system that automates watering, monitors soil moisture, and syncs data to a web dashboard.',
    image: '/projects/Proj2.png',
  },
  {
    title: 'WebGL Portfolio Explorer',
    slug: 'webgl-portfolio',
    description:
      'A 3D interactive portfolio powered by Three.js with physics-based transitions and real-time theme switching.',
    image: '/projects/Proj3.png',
  },
];

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Typography variant="h4" align="center" fontWeight="bold" mb={6}>
        Our Projects
      </Typography>
      <Grid container spacing={6}>
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <Grid
              container
              spacing={4}
              key={index}
              direction={isMobile ? 'column' : isEven ? 'row' : 'row-reverse'}
              alignItems="center"
              justifyContent="space-between"
              sx={{ mt: isMobile ? 0 : index % 2 !== 0 ? 6 : 0, width: '100%' }}
            >
              {/* Text Section */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => navigate(`/projects/${project.slug}`)}
                >
                  View Project
                </Button>
              </Grid>

              {/* Image Section */}
              <Grid size={{ xs: 12, md: 6 }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: isMobile ? 200 : 300,
                    objectFit: 'cover',
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;
