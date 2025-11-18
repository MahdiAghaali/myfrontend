import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import TramIcon from '@mui/icons-material/Tram';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

type Location = {
  latitude: number;
  longitude: number;
};

type Stop = {
  name: string;
  location: Location;
};

type Line = {
  name: string;
  product: string;
  operator: { name: string };
};

// Helper to calculate linear distance between two coordinates (in meters)
function haversineDistance(loc1: Location, loc2: Location): number {
  if( !loc1 || ! loc2) return 0
  const R = 6371e3; // Earth radius in meters
  const φ1 = (loc1.latitude * Math.PI) / 180;
  const φ2 = (loc2.latitude * Math.PI) / 180;
  const Δφ = ((loc2.latitude - loc1.latitude) * Math.PI) / 180;
  const Δλ = ((loc2.longitude - loc1.longitude) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

interface TripInfoCardProps {
  trip: any;
}

const TripInfoCard: React.FC<TripInfoCardProps> = ({ trip }) => {

  
  const distance = haversineDistance(
    trip.currentTripPosition,
    trip.stop.location
  );
  const distanceText =
    distance > 1000
      ? `${(distance / 1000).toFixed(2)} km`
      : `${Math.round(distance)} m`;

  const time = new Date(trip.when).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 3,
        boxShadow: 3,
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(245,245,245,0.7))",
      }}
    >
      <CardContent>
        <Stack spacing={1.5}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <TramIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>
              Line {trip.line.name} → {trip.direction}
            </Typography>
          </Stack>

          <Divider />

          <Stack direction="row" alignItems="center" spacing={1}>
            <LocationOnIcon color="error" />
            <Typography variant="body1">
              Stop: <strong>{trip.stop.name}</strong>
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <AccessTimeIcon color="action" />
            <Typography variant="body1">
              Departure: <strong>{time}</strong>{" "}
              {trip.delay > 0 && (
                <Chip
                  label={`+${trip.delay} min delay`}
                  color="warning"
                  size="small"
                />
              )}
            </Typography>
          </Stack>

          <Typography variant="body2">
            Vehicle distance to stop: <strong>{distanceText}</strong>
          </Typography>

          <Divider />

          <Stack direction="row" spacing={1}>
            <Chip
              label={`Occupancy: ${trip.occupancy}`}
              color={
                trip.occupancy === "low"
                  ? "success"
                  : trip.occupancy === "medium"
                  ? "warning"
                  : "error"
              }
            />
            <Chip label={trip.line.product.toUpperCase()} variant="outlined" />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TripInfoCard;
