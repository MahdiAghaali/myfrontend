import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useMediaQuery, useTheme } from '@mui/material';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { useI18n } from '../../hooks/useI18n';
import type { PageT } from '../../types';

const TopMenuBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const { t } = useI18n();
  const pages: PageT[]= [
    {
      title: t('products'),
      link: '/projects'
    },
    {
      title: 'Our Team',
      link: '/team'
    },
    {
      title: 'Career',
      link: '/career'
    },
    {
      title: 'About Us',
      link: '/about'
    },
    {
      title: 'Contact',
      link: '/contact'
    },
  ];

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isMobile
            ? <MobileMenu pages={pages}/>
            : <DesktopMenu pages={pages}/>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopMenuBar;
