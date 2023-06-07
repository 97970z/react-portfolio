import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import { Box, Grid } from '@mui/material';
import { info } from '../../info/Info';

export default function Portfolio() {
  return (
    <Box marginTop={10}>
      <Grid container spacing={3} justifyContent={'center'}>
        {info.portfolio.map((project, index) => (
          <Grid item md={5} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
              description={project.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
