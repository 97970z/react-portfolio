import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

function PortfolioBlock(props) {
  const { image, live, source, title, description } = props;

  return (
    <Card style={{ maxWidth: 500, height: 'auto', margin: 'auto' }}>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={live} target="_blank">
          Live Demo
        </Button>
        <Button size="small" color="primary" href={source} target="_blank">
          Source Code
        </Button>
      </CardActions>
    </Card>
  );
}

export default PortfolioBlock;
