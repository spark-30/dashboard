// Dashboard.js
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import ProductionChart from './ProductionChart'; // Bar chart component

const Dashboard = () => {
  return (
    <div style={{ marginLeft: 240, padding: 20 }}>
      <Typography variant="h4">Greenvalley Cardamom</Typography>
      <Typography variant="subtitle1">2019 | Area: 53 Acre | Last production: 1200 kg</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Air Temperature</Typography>
              <Typography variant="h4" color="error">38 C</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Water Content</Typography>
              <Typography variant="h4" color="success">32%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">pH Value</Typography>
              <Typography variant="h4">8 (Base)</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: 20 }}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Financial Statistics</Typography>
              <Typography variant="h4">Achieved 78%</Typography>
              <Typography>Current profit: 64 Lakh</Typography>
              <Typography>Expected profit: 82 Lakh</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProductionChart />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
