import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Title/Title';



export default function Chart() {
  const theme = useTheme();

  // Generate Sales Data
function createData(day, userCount) {
    return { day, userCount};
  }
  
  const data = [
    createData('Sun', 0),
    createData('Mon', 1),
    createData('Tue', 4),
    createData('Wed', 7),
    createData('Thu', 8),
    createData('Fri', 11),
    createData('Sat', 12),
    
  ];

  return (
    <React.Fragment>
      <Title>Your statistics</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="day"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
          dataKey='userCount'
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Active Users
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="userCount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}