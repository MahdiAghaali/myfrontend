import {
  Avatar,
  Box,
  Typography,
  Grid,
  Stack,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Button,
  Tooltip,
} from '@mui/material';
import {
  Email,
  GitHub,
  LinkedIn,
  Language,
  LocationOn,
} from '@mui/icons-material';

// Dummy data for a team member
const member = {
  name: 'Alex Mercer',
  title: 'Backend Engineer',
  image: '/public/mem1.png',
  bio: `I specialize in scalable backend systems, APIs, and microservice architecture. Passionate about performance optimization and clean code.`,
  location: 'Berlin, Germany',
  email: 'alex@chimericallion.com',
  github: 'https://github.com/alexmercer',
  linkedin: 'https://linkedin.com/in/alexmercer',
  website: 'https://alexmercer.dev',
  projects: [
    {
      title: 'Realtime Chat Server',
      description: 'Built with WebSockets and Redis pub/sub for ultra-low latency messaging.',
      github: 'https://github.com/alexmercer/chat-server',
    },
    {
      title: 'Task Queue Worker',
      description: 'Node.js + BullMQ based distributed task processing system.',
      github: 'https://github.com/alexmercer/task-worker',
    },
  ],
};

const TeamMemberPortfolio = () => {
  return (
    <Box sx={{ py: 8, px: 2 }}>
      {/* Header */}
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 4 }}>
          <Avatar
            src={member.image}
            alt={member.name}
            sx={{
              width: 200,
              height: 200,
              mx: 'auto',
              boxShadow: 3,
            }}
          />
        </Grid>

        <Grid size={{xs:12, md:8}}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {member.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {member.title}
          </Typography>
          <Typography variant="body1">
            {member.bio}
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
            <Tooltip title={member.location}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOn fontSize="small" />
                <Typography variant="body2">{member.location}</Typography>
              </Stack>
            </Tooltip>

            <Tooltip title="Email">
              <IconButton href={`mailto:${member.email}`}>
                <Email />
              </IconButton>
            </Tooltip>

            <Tooltip title="GitHub">
              <IconButton href={member.github} target="_blank">
                <GitHub />
              </IconButton>
            </Tooltip>

            <Tooltip title="LinkedIn">
              <IconButton href={member.linkedin} target="_blank">
                <LinkedIn />
              </IconButton>
            </Tooltip>

            <Tooltip title="Website">
              <IconButton href={member.website} target="_blank">
                <Language />
              </IconButton>
            </Tooltip>
          </Stack>
        </Grid>
      </Grid>

      {/* Projects */}
      <Box mt={6}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Projects & Contributions
        </Typography>

        <Grid container spacing={4}>
          {member.projects.map((proj, index) => (
            <Grid size={{ xs: 12, md: 4, sm:12 }} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {proj.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {proj.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TeamMemberPortfolio;
