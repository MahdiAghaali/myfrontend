import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  Stack,
  Paper,
} from '@mui/material';
import { useThemeControl } from './ThemeContext';

const ThemeDashboard = () => {
  const { themeSettings, setThemeSettings } = useThemeControl();

  const handleModeChange = (
    _: React.MouseEvent<HTMLElement>,
    newMode: 'light' | 'dark' | null
  ) => {
    if (newMode) {
      setThemeSettings({ ...themeSettings, mode: newMode });
    }
  };

  const handleColorChange = (colorKey: 'primary' | 'secondary', value: string) => {
    setThemeSettings({ ...themeSettings, [colorKey]: value });
  };

  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Typography variant="h4" gutterBottom>
        Theme Customizer
      </Typography>

      <Paper sx={{ p: 4, maxWidth: 600 }}>
        <Stack spacing={4}>
          {/* Mode Toggle */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Color Mode
            </Typography>
            <ToggleButtonGroup
              value={themeSettings.mode}
              exclusive
              onChange={handleModeChange}
              size="small"
            >
              <ToggleButton value="light">Light</ToggleButton>
              <ToggleButton value="dark">Dark</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Primary Color */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Primary Color
            </Typography>
            <TextField
              type="color"
              value={themeSettings.primary}
              onChange={(e) => handleColorChange('primary', e.target.value)}
              sx={{ width: 80 }}
            />
            <TextField
              type="text"
              value={themeSettings.primary}
              onChange={(e) => handleColorChange('primary', e.target.value)}
              sx={{ width: 80 }}
            />
          </Box>

          {/* Secondary Color */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Secondary Color
            </Typography>
            <TextField
              type="color"
              value={themeSettings.secondary}
              onChange={(e) => handleColorChange('secondary', e.target.value)}
              sx={{ width: 80 }}
            />
            <TextField
              type="text"
              value={themeSettings.secondary}
              onChange={(e) => handleColorChange('secondary', e.target.value)}
              sx={{ width: 80 }}
            />
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default ThemeDashboard;
