/* eslint-disable prefer-rest-params */
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';
import { barChartOptions, barChartOptions2 } from './config';

const Bar = ({ data, shadow = false, type = 1 }) => {
  const chartContainer = useRef(null);
  const [, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      if (shadow) {
        Chart.defaults.global.datasets.barWithShadow =
          Chart.defaults.global.datasets.bar;
        Chart.defaults.barWithShadow = Chart.defaults.bar;
        Chart.controllers.barWithShadow = Chart.controllers.bar.extend({
          draw(ease) {
            Chart.controllers.bar.prototype.draw.call(this, ease);
            const {
              chart: { ctx },
            } = this;
            ctx.save();
            ctx.shadowColor = 'rgba(0,0,0,0.2)';
            ctx.shadowBlur = 7;
            ctx.shadowOffsetX = 5;
            ctx.shadowOffsetY = 7;
            ctx.responsive = true;
            Chart.controllers.bar.prototype.draw.apply(this, arguments);
            ctx.restore();
          },
        });
      }
      const context = chartContainer.current.getContext('2d');
      const newChartInstance = new Chart(context, {
        type: shadow ? 'barWithShadow' : 'bar',
        options: type === 1 ? barChartOptions : barChartOptions2,
        data,
      });
      setChartInstance(newChartInstance);
    }
  }, [chartContainer, data, shadow, type]);

  return <canvas ref={chartContainer} />;
};

export default Bar;
